const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000

//middlewares
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yncfr23.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();


    const countriesCollection = client.db("asiaDB").collection("countries");
    const spotsCollection = client.db("asiaDB").collection("spots");
    const adventureCollection = client.db("asiaDB").collection("adventure");

//read adventures from adventure section of home
app.get("/adventures", async(req,res)=>{
  const cursor = adventureCollection.find()
  const result = await cursor.toArray()
  res.send(result)
})
    //read countries from home
    app.get("/countries", async(req,res)=>{
        const cursor = countriesCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })
//read all spots from all spots page
app.get("/spots", async(req,res)=>{
    const cursor = spotsCollection.find()
    const result = await cursor.toArray()
    res.send(result)
})
//read all my spots from My List page
app.get("/spots/:email", async(req,res)=>{
    const email = req.params.email
    const cursor = spotsCollection.find({user_email: email})
    const result = await cursor.toArray()
    res.send(result)
})
//read all country matched spots from Country Spots page
app.get("/countrySpots/:country_name", async(req,res)=>{
    const country = req.params.country_name
    const cursor = spotsCollection.find({country_name: country})
    const result = await cursor.toArray()
    res.send(result)
})
// read a spot from all spots page
app.get("/spot/:id", async(req,res)=>{
    const id = req.params.id
    const query = {_id: new ObjectId(id)}
    const spot= await spotsCollection.findOne(query)
    res.send(spot)
})

//create from add
        app.post("/spots", async(req,res)=>{
            const spot = req.body
            console.log("new spots", spot)
            // Insert the defined document into the spotsCollection
            const result = await spotsCollection.insertOne(spot); 
            res.send(result)
        })

//update from update page:
          // read a spot from all spots page
          app.get("/update/:id", async(req,res)=>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const spot= await spotsCollection.findOne(query)
            res.send(spot)
          })
  app.put("/update/:id", async(req,res)=>{
    const id = req.params.id
    const spot = req.body
    console.log(id,spot)

    const filter = {_id: new ObjectId(id)}
    //make a doc if no such doc exists (because it is put, not patch)
    const options = {upsert: true }
    const updatedUser = {
        $set: {
            image : spot.image,
            tourists_spot_name : spot.tourists_spot_name,
            country_name : spot.country_name,
            location : spot.location,
            short_description : spot.short_description,
            average_cost : spot.average_cost,
            seasonality : spot.seasonality,
            travel_time : spot.travel_time,
            total_visitors_per_year : spot.total_visitors_per_year,
            user_email : spot.user_email,
            user_name : spot.user_name,
        }
    }
    const result = await spotsCollection.updateOne(filter,updatedUser,options)
    res.send(result)
  })

//delete operation from my list page:
      app.delete("/spots/:id",async(req,res)=>{
        const id = req.params.id
        console.log('plz delete', id)
        const query = {_id: new ObjectId(id)}
        const result = await spotsCollection.deleteOne(query)
        res.send(result)
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