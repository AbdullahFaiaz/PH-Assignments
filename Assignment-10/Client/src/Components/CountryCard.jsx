import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {image,country_name,details} = country
    return (
<>

        <div className='hover:scale-105 rounded-[5%] hover:border-black hover:border-2 transition-all duration-500 bg-[#ffffffc5] w-[86%] md:w-[80%] mx-auto text-black shadow-2xl'>
        <Link to={`/countrySpots/${country_name}`}>
            <img src={image} className='w-full h-[19vw] rounded-t-[5%] md:h-[10vw]' alt="image" />
            <div className="p-[1vw]">
                <h1 className="text-[3.2vw] md:text-[1.8vw]">{country_name}</h1>
                <p className="text-[2.2vw] md:text-[1vw]">{details}</p>
            </div>
        </Link>
        </div>



</>

    );
};

CountryCard.propTypes = {
    country : PropTypes.object,
}
export default CountryCard;