const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
const axios = require("axios");
//middlewares
app.use(cors({
  origin: [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://volunteer-hub-acc94.web.app',
  'https://volunteer-hub-acc94.firebaseapp.com',

],
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// my middlewares
const logger = async(req,res,next) =>{
  console.log("log: info ",req.method , req.url)
  next()
}

const verifyToken = async(req,res, next) =>{
  const token = req.cookies?.token
  console.log("token in the middleware ", token)
  if(!token){
    return res.status(401).send({message: "unauthorized access"})
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
    //error
    if(err){
      return res.status(401).send({message:"Unauthorized"})
    }
    //if token valid then it would be decoded 
    console.log("value in the token", decoded)
    req.user = decoded
      next()

  })
}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yncfr23.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});





const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

async function run() {
  try {

    const postCollection = client.db("hubDB").collection("postCollection");
    const requestCollection = client.db("hubDB").collection("requestCollection");
    const feedbackCollection = client.db("hubDB").collection("feedbackCollection");
    const paymentCollection = client.db("hubDB").collection("payment");

    //JWT            auth related operation
    app.post('/jwt',logger, async(req,res)=>{
      const user = req.body
      console.log("user for token",user)

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET ,{expiresIn: '1h'})
      
      res
      .cookie('token', token, cookieOptions)
      .send({success: true})
    })

    app.post('/logout',logger,async(req,res)=>{
      const user = req.body
      console.log("logging out ",user)
      res.clearCookie('token',{...cookieOptions ,maxAge:0}).send({success: true})
    })

    // Volunteer Needs Now Section of Home page --Public
    app.get("/posts",logger,async(req,res)=>{
      const result = await postCollection.find().sort( { "Deadline": 1 } ).limit(6)
      .toArray()
      res.send(result)
    })
    // Need Volunteer Page (All posts) --Public
    app.get("/allPosts",logger,async(req,res)=>{
      const page = parseInt(req.query.page)
      const size = parseInt(req.query.size) 
      console.log("getting ",page,size)
      const result = await postCollection.find().sort( { "Deadline": 1 } )
      .skip(page*size)
      .limit(size)
      .toArray()
      res.send(result)
    })


//my volunteer posts as an organizer
    app.get("/myPosts",logger,verifyToken, async(req,res)=>{
      //req.user (=decoded) is coming from verifyToken
      console.log("user in the valid token", req.user)
    // verify email
      if(req.query.email !== req.user.email){
        return res.status(403).send({message:'forbidden access'})
      }

      let query = {}
      const options = {
        projection: { Category: 1, Thumbnail: 1, Title:1, NumberOfVolunteers:1 },
      };
      if(req.query.email){
        query = {email: req.query.email}
        console.log(query)
      }
      const result = await postCollection.find(query,options).toArray()
      res.send(result)
    })

// my requests as a volunteer 
app.get("/myRequests",logger,verifyToken, async(req,res)=>{
  console.log("user in the valid token", req.user)
// verify email
  if(req.query.volunteerEmail !== req.user.email){
    return res.status(403).send({message:'forbidden access'})
  }

  let query = {}
  const options = {
    projection: { Category: 1, Title:1, name:1 , id: 1 , volunteerEmail: 1},
  };
  if(req.query.volunteerEmail){
    query = {volunteerEmail: req.query.volunteerEmail}
    console.log(query)
  }
  const result = await requestCollection.find(query,options).toArray()
  res.send(result)
})


//for seeing reqs to my posts access my posts
app.get("/myPostsTwo",logger, async(req,res)=>{
  console.log("user in the valid token", req.user)
  let query = {}
  const options = {
    projection: { Category: 1, Thumbnail: 1, Title:1, NumberOfVolunteers:1 },
  };
  if(req.query.email){
    query = {email: req.query.email}
    console.log(query)
  }
  const result = await postCollection.find(query,options)
  .toArray()
  res.send(result)
})

// See Requests to my volunteer Posts     
app.get("/allReq/:id",logger, async(req,res)=>{
  const id = req.params.id
  const query = {id: id}
  const post= await requestCollection.find(query).toArray()
  res.send(post)
})



    //post from add page
    app.post("/addPost",logger, async(req,res)=>{
        const aPost = req.body
            console.log("adding a new post", aPost)
            // Insert the defined document into the panjabiCollection
            const result = await postCollection.insertOne(aPost); 
            res.send(result)
    })


//Volunteer Needs Now section view details (public?)
    app.get("/postDetails/:id",logger, async(req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const post= await postCollection.findOne(query)
      res.send(post)
  })

// pagination count --public
app.get("/postCount",logger,async(req,res)=>{
  const count = await postCollection.estimatedDocumentCount()
  res.send({count})
})



// feedback
app.post("/feedback",logger, async(req,res)=>{
  const feedback = req.body
  const result = await feedbackCollection.insertOne(feedback)
  res.send(result)
})
app.get("/feedback",logger, async(req,res)=>{
  const query = {postId: req.query.id}
  const feedbacks= await feedbackCollection.find(query).toArray()
  res.send(feedbacks)
})

//be a volunteer page tries to get details page data
  app.get("/beVolunteer/:id",logger, async(req,res)=>{
    const id = req.params.id 
    const query = {_id: new ObjectId(id)}
    const post = await postCollection.findOne(query)
    res.send(post)
  })


  // request post decreases Number of Volunteer needed value of volunteer post
  app.post("/request/:id",logger,async(req,res)=>{
    const id = req.params.id 
    console.log("Decrease for id---",id)
    const result = await postCollection.updateOne({ _id: new ObjectId(id) }, { $inc: { NumberOfVolunteers: -1 } });

    res.send(result)
  })
// request post adds a request to requestCollection
app.post("/request",logger, async(req,res)=>{
  const request = req.body
  const result = await requestCollection.insertOne(request); 
  res.send(result)
})







//update from update page:
          // read a volunteer post from manage my posts page
          app.get("/update/:id",logger, async(req,res)=>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const post= await postCollection.findOne(query)
            res.send(post)
          })
  app.put("/update/:id",logger, async(req,res)=>{
    const id = req.params.id
    const post = req.body
    console.log(id)

    const filter = {_id: new ObjectId(id)}
    //make a doc if no such doc exists (because it is put, not patch)
    const options = {upsert: true }
    const updatedPost = {
        $set: {
            Thumbnail : post.Thumbnail,
            Title : post.Title,
            Description  : post.Description,
            Category : post.Category,
            Location : post.Location,
            NumberOfVolunteers : post.NumberOfVolunteers,
            Deadline : post.Deadline,
            email : post.email,
            name : post.name,
        }
    }
    const result = await postCollection.updateOne(filter,updatedPost,options)
    res.send(result)
  })

//delete operation from my Posts:
      app.delete("/posts/:id",logger,async(req,res)=>{
        const id = req.params.id
        // console.log('plz delete', id)
        const query = {_id: new ObjectId(id)}
        const result = await postCollection.deleteOne(query)
        res.send(result)
      })
//cancel/delete operation from request section of manage my posts page:
      app.delete("/cancelRequest/:id",logger, async(req,res)=>{
        const id = req.params.id
        // console.log('plz delete', id)
        const query = {_id: new ObjectId(id)}
        const result = await requestCollection.deleteOne(query)
        res.send(result)
      })
       // upon cancelling a request number of needed volunteers Increases
  app.post("/increase/:id",logger,async(req,res)=>{
    const id = req.params.id 
    console.log("increase for id---",id)
    const result = await postCollection.updateOne({ _id: new ObjectId(id) }, { $inc: { NumberOfVolunteers: 1 } });

    res.send(result)
  })

  app.post('/create-payment',logger,async(req,res)=> {
    const result = req.body

    const trxId = new ObjectId().toString()

    const initiateData = {
      store_id: "volun6669ff30cca9c",
      store_passwd: "volun6669ff30cca9c@ssl",
      total_amount: 100,
      currency: "EUR",
      tran_id: trxId,
      success_url: "http://localhost:5000/success",
      fail_url: "http://localhost:5000/fail",
      cancel_url: "http://localhost:5000/cancel",
      cus_name: "Customer Name",
      cus_email: "cust@yahoo.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      shipping_method: 'NO',
      product_name:'laptop',
      product_category:'laptop',
      product_profile:'general',
      multi_card_name: "mastercard,visacard,amexcard",
      value_a: "ref001_A",
      value_b: "ref002_B",
      value_c: "ref003_C",
      value_d: "ref004_D"
    }

    const response = await axios({
      method: 'POST',
      url: 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',
      data: initiateData,
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
      }
    })

    const saveData = {
      customerName: "dummy",
      paymentId: trxId,
      amount: req.body.amount,
      status: 'pending',
    }
    const save = await paymentCollection.insertOne(saveData)
    if(save){
      res.send({
        paymentUrl: response.data.GatewayPageURL,
      })
    }

    console.log("print ", response)
  })

//   app.post('/success-payment',logger,async(req,res)=>{
//     const successData = req.body
//     if(successData.status !== 'VALID'){
//         throw new Error("Invalid payment, Unauthorized");
//     }

// // update the data base of payment
//     const query = {paymentId: successData.tran_id}
//     const update = {
//       $set: {
//         status: "Success",
//       }
//     }
//     const updateData = await paymentCollection.updateOne(query, update)

//     console.log("success data: ", successData)
//     console.log('update data: ', updateData)
//     res.redirect('http://localhost:5173/secondRoute/success')
//   })


  app.post('/success',logger,async(req,res)=>{
    const successData = req.body
    if(successData.status !== 'VALID'){
        throw new Error("Invalid payment, Unauthorized");
    }

// update the data base of payment
    const query = {paymentId: successData.tran_id}
    const update = {
      $set: {
        status: "Success",
      }
    }
    const updateData = await paymentCollection.updateOne(query, update)

    console.log("success data: ", successData)
    console.log('update data: ', updateData)
    res.redirect('http://localhost:5173/secondRoute/success')
  })
  app.post('/fail',logger,async(req,res)=>{
    res.redirect('http://localhost:5173/secondRoute/fail')
  })
  app.post('/cancel',logger,async(req,res)=>{
    res.redirect('http://localhost:5173/secondRoute/cancel')
  })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
   
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get("/",(req,res)=>{
    res.send("This is a (get) response from server")
})

app.listen(port,()=>{
    console.log(`Msg from server side: server is running on port ${port}`)
})