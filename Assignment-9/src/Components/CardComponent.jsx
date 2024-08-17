
import PropTypes from 'prop-types'; 
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CardComponent = ({card,children}) => {
    const {id,image,estate_title,segment_name,status,location} = card

    return (
            <div data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            className={`text-[3.5vw] sm:text-[2.2vw] md:text-[1.6vw] lg:text-[1.4vw] rounded-tl-lg mx-auto mb-[5vw] relative flex flex-col ${children? ' h-[124vw] sm:h-[63vw] lg:h-[53vw] md:h-[55vw]':'h-[115vw] sm:h-[60vw] lg:h-[50vw] md:h-[51vw]'} bg-[#f6f3f3] hover:bg-slate-800 w-[70vw] sm:w-[28.5vw] lg:w-[23.5vw] text-black hover:text-white`}>
             <div className='h-[85vw] sm:h-[35vw] w-[65vw] sm:w-[26vw] lg:w-[22vw] absolute top-0 left-0'>
             <img className='w-full h-full rounded-tl-lg' src={image} alt="image"/>
             <div className='h-[4vw] w-[9vw] md:h-[2.3vw] md:w-[6vw] bg-[#078169] text-white text-extrabold flex flex-col items-center justify-center absolute top-0 right-0 sm:text-[3.5vw] md:text-[2vw]'><h1>{status}</h1></div>
            </div>   

            <div className='flex flex-col justify-start absolute bottom-[2vw] left-[2vw]'>
            <h1>{estate_title}</h1>
            <h1>{segment_name}</h1>
            
            <h1 className='mb-[2vw] md:mb-[.5vw]'>{location}</h1>
            <div className='flex flex-col gap-[1vw] sm:gap-[.7vw] md:gap-[1vw] lg:gap-[.7vw]'>

            <Link to={`/segment/${id}`}>

            
<span className="py-[1.4vw] sm:py-[.8vw] md:py-[.6vw] lg:py-[.5vw] px-[2vw] md:px-[1.2vw] lg:px-[1vw] rounded-sm bg-[#ffbe00] hover:bg-[#ffbc51] text-black font-bold transition duration-300 text-[3.5vw] sm:text-[2.2vw] md:text-[1.8vw] lg:text-[1.2vw]">View Property</span>

</Link>

{children}
            </div>
            </div>

                


        </div>
    );
};

CardComponent.propTypes = {
    card: PropTypes.object,
    children: PropTypes.node,
}

export default CardComponent;