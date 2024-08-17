
import banner from '../assets/images/banner.png'
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className="w-[90%] mx-auto bg-cover h-[55vw]  sm:h-[40vw] lexend rounded-2xl flex flex-col items-center justify-center">
            <div className='text-center w-[70%]'>
                <h1 className='text-white md:w-[90%] md:mx-auto lexend-bold text-[5vw] sm:text-[3vw] mb-[1vw]'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-gray-200 text-[1.8vw] sm:text-[1.2vw] my-[1.5vw]'>Indulge in bespoke cooking experiences designed just for you. Elevate your culinary skills with tailored classes catered to your preferences.</p>
                <div className='lexend-bold flex justify-center mt-[3vw] gap-[1vw]'>
                    <button className='text-[1.8vw] hover:bg-green-500 bg-[#0be58a] rounded-full py-[1vw] px-[1.6vw]'>Explore Now</button>
                    <button className='text-[1.8vw] bg-black bg-opacity-10 hover:bg-opacity-50 text-white border-[1px] border-solid border-white rounded-full py-[1vw] px-[1.6vw]'>Our Feedback</button>
                </div>
            </div>
            
            

        </div>
    );
};

export default Banner;