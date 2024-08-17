/* eslint-disable react/prop-types */

import { MdOutlinePeopleOutline } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadCard = ({book}) => {
    const {image,bookName,tags,author,category,rating,yearOfPublishing,totalPages,publisher,id} = book
    return (
        <div className="border rounded-xl mt-[1vw]">

        <div className="p-[1vw] flex gap-[3vw]">
            <div className="w-[25%] lg:w-[20%] rounded-lg flex flex-col items-center justify-center">
                <img className="rounded-lg" src={image} alt="image" />
            </div>
            <div className="flex-1">
                <div>
                    <h1 className="text-[4vw] md:text-[2.5vw] font-bold">{bookName}</h1>
                </div>
                <div>
                    <h4 className="text-[2.2vw] text-gray-600 md:text-[1.5vw]">By: {author}</h4>
                </div>
                <div className="mt-[1vw] flex gap-[2vw] items-center">
                    <span className="font-bold text-[3vw] sm:text-[2.5vw] md:text-[1.8vw]">Tag</span>
                    <span className="flex gap-[1vw] my-[1vw]">
                        {tags.map((tag,idx)=> <div className="bg-green-100 text-green-500 rounded-2xl px-[.5vw] text-[3vw] sm:text-[2.5vw] md:text-[1.8vw]" key={idx}>{tag}</div>)}
                    </span>
                    <span className='text-gray-600 text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] flex gap-[1vw] items-center'>
                        <span><MdDateRange /></span>
                        <span>Year of Publishing: {yearOfPublishing}</span> 
                    </span>
                </div>

                <div className='flex gap-[2vw]'>
                    <h4 className="text-[2.2vw] text-gray-600 md:text-[1.5vw] flex items-center gap-[.5vw]"><span><MdOutlinePeopleOutline /></span>  <span>{publisher}</span></h4>
                    <h4 className="text-[2.2vw] text-gray-600 md:text-[1.5vw] flex items-center gap-[.5vw]"><span><CiFileOn /></span>  <span>Page {totalPages}</span></h4>
                </div>
                <hr className='my-[1vw]' />
                <div className="text-[2.2vw] text-gray-600 md:text-[1.5vw] flex gap-[1vw] items-center">
                <span className='px-[2vw] text-blue-500 bg-blue-200 py-[.5vw] rounded-full'>Category: {category}</span> 
                <span className='px-[2vw] text-orange-500 bg-orange-200 py-[.5vw] rounded-full'>Rating: {rating}</span> 
                <Link to={`/details/${id}`}><span className='px-[2vw] text-white bg-green-500 py-[.5vw] rounded-full'>View Details</span></Link>

            </div>
            </div>

        </div>
        </div>
    );
};

export default ReadCard;