import {  useParams,useLoaderData, Link } from "react-router-dom";
import 'react-awesome-button/dist/styles.css';
import UseMyToast from "../../Components/UseMyToast";
import useMyToast from "../../Hooks/useMyToast";
import { FaMapMarkerAlt, FaClipboardList, FaMoneyBillWave, FaRulerCombined, FaRegBuilding } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Aos from "aos";
import { deleteId, getSaved, saveId } from "../../Hooks/addToLocal";
import { Helmet } from "react-helmet-async";

const Detail = () => {
    const [check, setCheck] = useState(null);
    useEffect(() => {
        Aos.init();
    }, []);
    const {id} = useParams()
    const idInt = parseInt(id)
    const cards = useLoaderData()
    const card = cards.find(item=> item.id === idInt)
    const {estate_title,segment_name,description,price,status,area,location,facilities,image} = card
    const saved = getSaved()

    
    useEffect(()=>{
        let savedOrNot = saved.find(item=> item===id)
        setCheck(Boolean(savedOrNot))
    },[saved,id])

    const saveOrDelete= ()=>{
        if(!check){
            saveId(id)
            setCheck(true)
        }
        else{
            deleteId(id)
            setCheck(false)
        }
        

    }

    const Toast = useMyToast();
    Toast("Logged in Successfully");
    return (
        
        <div> 
            <Helmet>
                <title>Harmony Homes | Details</title>
            </Helmet>
            <UseMyToast></UseMyToast>





        <div className="flex flex-col w-full">
            {/* Banner Section */}
            <div className="w-full h-[70vw] lg:h-[40vw] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="bg-gray-900 bg-opacity-50 h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold text-center">{estate_title}</h1>
                </div>
            </div>

            {/* // Information Section with AOS animations */}
            <div className="flex flex-col items-center mt-6 p-6 border rounded-lg shadow-lg bg-white w-full md:w-3/4 lg:w-1/2 mx-auto">
    {/* Estate Information Cards */}
    <div className="space-y-4">
        {/* Add AOS animation attributes to each card */}
        <div data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-lg p-4">
                <h2 className="text-xl font-bold mb-2"><FaRegBuilding className="inline-block mr-2" /> {estate_title}</h2>
                <p><FaClipboardList className="inline-block mr-2" /> Segment: {segment_name}</p>
                <p><FaClipboardList className="inline-block mr-2" /> Status: {status}</p>
                <p><FaMapMarkerAlt className="inline-block mr-2" /> Location: {location}</p>
                <p><FaMoneyBillWave className="inline-block mr-2" /> Price: {price}</p>
                <p><FaRulerCombined className="inline-block mr-2" /> Area: {area}</p>
                {/* Other information and facilities */}
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">

            <div className="card shadow-lg p-4">
                <h2 className="text-xl font-bold mb-2"><FaClipboardList className="inline-block mr-2" /> Facilities</h2>
                
                {
                facilities.map( (facility, idx) => ( <p key={idx}>{facility}</p>) )
                }

            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-lg p-4">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p>{description}</p>
            </div>
        </div>

        <Link to={"/"}>
            <button className="mt-2 mr-2 btn btn-warning">Go to Home</button>
        </Link>
        <button onClick={saveOrDelete} className="mt-2 btn btn-warning">{check? "Delete Property": "Save Property"}</button>
    </div>
</div>




        </div>



        </div>
    );
};

export default Detail;