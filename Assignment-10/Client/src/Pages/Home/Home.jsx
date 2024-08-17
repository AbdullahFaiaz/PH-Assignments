import { useEffect, useState } from "react";

import CountryCard from "../../Components/CountryCard";
import SpotCard from "../../Components/SpotCard";
import BannerSlider from "../../Components/BannerSlider";
import Adventure from "../../Components/Adventure";
import coolbg from "../../assets/cool-background.png"
import coolThree from "../../assets/cool-3.png"
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/GBStSojFTE.json";
import mountain from "../../../public/map.json";
import world from "../../../public/world.json";
import man from "../../../public/man.json";
import post from "../../../public/post.json";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ToastContainer } from "react-toastify";


// ..
AOS.init();




const Home = () => {

    // tourists spots section starts
    const [allSpots, setAllSpots] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://server-five-pearl.vercel.app/spots");
                const data = await response.json();
                setAllSpots(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    const touristSpots = allSpots.slice(0, 6);

    // tourists spots section ends

    const [countries,setCountries] = useState([])


    useEffect(()=>{
        fetch("https://server-five-pearl.vercel.app/countries")
        .then(res=> res.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <>
    <Helmet>
        <title>Adventure Avenue | Home</title>
    </Helmet>
    <ToastContainer/>

{/* ________________________Banner Slider_________________________________________ */}
<div className="relative">
<BannerSlider></BannerSlider>
                <div className="flex md:gap-[8vw] items-center justify-around absolute -bottom-[9vw] md:-bottom-[7vw] md:left-[9vw] left-[6vw] z-40 ">
                <Lottie className="h-[22vw] w-[22vw] md:h-[14vw] md:w-[14vw]" animationData={groovyWalkAnimation} />
                <Lottie className="h-[22vw] w-[22vw] md:h-[14vw] md:w-[14vw]" animationData={mountain} />
                <Lottie className="h-[22vw] w-[22vw] md:h-[14vw] md:w-[14vw]" animationData={world} />
                <Lottie className="h-[22vw] w-[22vw] md:h-[14vw] md:w-[14vw]" animationData={post} />
                </div>
</div>
                <div className="bg-black opacity-5 w-full h-[7vw]"></div>
                <hr className="z-10 border border-[#2aa9b3] opacity-30" />



 {/* _______________________Countries section________________________________________________ */}
            <div>
                <div className="flex flex-col items-center justify-center text-[#559595] text-[4.6vw] lg:text-[3vw] font-bold pt-[3vw] mt-[4vw] pb-[2vw]">Countries Section</div>
                <div style={{ backgroundImage: `url(${coolbg})`, backgroundAttachment: "fixed" }} className="py-[3vw] bg-cover bg-center">

        <div className="px-[1vw] py-[2vw] grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                countries.map(country=> <CountryCard key={country._id} country={country}></CountryCard> )
            }
        </div>
            </div>
            </div>


 {/* _______________________Tourists Spots Section________________________________________________ */}
<div className="pb-[3vw]">
{/* bg-[#1f674144] */}
 <div className="flex flex-col items-center justify-center text-[4.6vw] lg:text-[3vw] font-bold bg-[#ffffff44] pt-[3vw] pb-[1vw]">Tourists Spots Section</div>

        <div className="px-4 py-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                touristSpots.map(spot=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
            }
        </div>
        </div>

        {/* Adventure ________________________________________________ */}
        <Adventure/>
        <div className="relative">
        <Lottie className="w-[50%] mx-auto" animationData={man} />
        <h2 className="absolute top-[7vw] left-[16vw] lg:left-[17vw] rounded-sm text-[#559595] text-[4.2vw] lg:text-[4vw] pb-[1.5vw] font-bold text-center">Lets Explore the World of Adventure</h2>
            
        </div>

        {/* about us */}



        <section className="pb-[6vw] px-[3.3vw] lg:px-[14vw] text-[3.5vw] lg:text-[2vw] text-[#559595]">
  <div className="text-center">
    <h2 className="text-[4.3vw] lg:text-[3vw] text-[hsl(180,55%,37%)] font-bold mb-4">About Us</h2>
    <p className="mb-8">Embark on unforgettable journeys with us</p>
    <div className="flex justify-center mb-12">
      <div className="w-16 h-1 bg-[#292925] rounded-full"></div>
    </div>
    <p className="leading-relaxed">
      At Adventure Avenue, we're passionate about travel and exploration. Our mission is to help you uncover the world's hidden gems and create unforgettable memories.
    </p>
    <p className=" leading-relaxed mt-4">
      Whether you're seeking adrenaline-pumping adventures, tranquil retreats, or cultural immersions, we've got you covered. Our team of seasoned travelers meticulously curates each experience to ensure authenticity, excitement, and comfort.
    </p>
    <p className=" leading-relaxed mt-4">
      Join us on a journey of discovery as we traverse the globe, one destination at a time. Let Adventure Avenue be your trusted companion in exploration.
    </p>
    <div className="flex justify-center mt-12">
     
    </div>
  </div>
</section>

        {/* about us ends */}
            </>
    );
};

export default Home;