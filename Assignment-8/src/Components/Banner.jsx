import { Link } from 'react-router-dom';
import banner from '../assets/banner-book.png'
const Banner = () => {
    return (
        <div className="bg-[#f3f3f3] h-[50vw] lg:h-[30vw] w-full rounded-3xl mt-[2vw]">
            <div className="flex h-[50vw] lg:h-[30vw]">
                <div className='w-[60%] h-full gap-[1vw] flex flex-col pl-[6vw] lg:pl-[10vw] justify-center'>
                    <div><p className='text-[6vw] lg:text-[4vw] font-extrabold'>Books to freshen up your bookshelf</p></div>
                    <Link to={'/listedbooks'}><button className="bg-[#23be0a] px-[1.4vw] py-[.8vw] ml-[3vw] text-white font-bold text-[3.5vw] lg:text-[1.5vw] rounded-lg mr-2">View The List</button></Link>
                </div>
                <div className='flex flex-col items-center justify-center w-[40%] h-[50vw] lg:h-[30vw]'>
                    <div className='h-[28vw] lg:h-[25vw]'>
                        <img className='w-full h-full' src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;