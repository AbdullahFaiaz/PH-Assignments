/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import star from '../assets/rating.png'

const Card = ({book}) => {
    const {image,bookName,tags,author,category,rating,id} = book
    return (
        <Link to={`/details/${id}`} className="border rounded-xl">
        <div className="p-[1vw]">
            <div className="bg-gray-200 w-full h-[35vw] md:h-[25vw] rounded-lg flex flex-col items-center justify-center">
                <img className="w-[50%] h-[80%] rounded-sm" src={image} alt="image" />
            </div>
            <div className="flex gap-[1vw] my-[1vw]">
                {tags.map((tag,idx)=> <div className="bg-green-100 text-green-500 rounded-2xl px-[.5vw] text-[2.2vw] md:text-[1.5vw]" key={idx}>{tag}</div>)}
            </div>
            <div>
                <h1 className="text-[4vw] md:text-[2.5vw] font-bold">{bookName}</h1>
            </div>
            <div>
                <h4 className="text-[2.2vw] text-gray-600 md:text-[1.5vw]">By: {author}</h4>
            </div>
            <div className="w-full border-gray-300 border-dashed border-[1px] my-[1vw]"></div>
            <div className="text-[2.2vw] text-gray-600 md:text-[1.5vw] flex justify-between items-center">
                <h4>{category}</h4>
                <h4 className='flex items-center gap-[1vw]'>
                    <span>{rating}</span> 
                <span><img src={star} alt="image" /></span> 
                </h4>
            </div>
        </div>
        </Link>

    );
};

export default Card;