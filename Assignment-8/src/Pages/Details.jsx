import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, getStoredWishBook, saveReadBook, saveWishBook } from "../utility/localStorage";


const Details = () => {
    const books = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const book = books.find(book=> book.id === idInt)
    const {image,bookName,tags,author,category,rating,review,yearOfPublishing,totalPages,publisher} = book

let seeRead = getStoredReadBook()
let seeWish = getStoredWishBook()

    const handleRead=()=>{
        seeRead = getStoredReadBook()
        if(seeRead){
            const exist = seeRead.find(item => item === idInt)
            if(exist){
                toast.warn('Already Added to Read List')
            }
            else{
                saveReadBook(idInt);
                seeRead = getStoredReadBook()
                toast.success('Book Added to Read List')
            }
        }
        else{
            saveReadBook(idInt);
            seeRead = getStoredReadBook()
            toast.success('Book Added to Read List')
        }
        
    }
    const handleWish = () => {
        seeWish = getStoredWishBook();
        seeRead = getStoredReadBook();
        if (!seeRead) {
            const exists = seeWish.find(item => item === idInt);
            if (exists) {
                toast.warn('Already Added to WishList');
            } 
            else {
                
                saveWishBook(idInt);
                toast.success('Book Added to WishList');
                seeWish = getStoredWishBook();
            }
        } else {
            const exist = seeRead.find(item => item === idInt);
            
            if (exist) {
                toast.warn('Already Added to Read List');
            }
            else{
                const exists = seeWish.find(item => item === idInt);
                if(!exists){
                    saveWishBook(idInt);
                    toast.success('Book Added to WishList');
                    seeWish = getStoredWishBook();
                }
                else{
                    toast.warn('Already Added to WishList');
                }
            }
        }
    };
    
    return (
        <div className="my-[4vw]">
            <div className="flex flex-col md:justify-between md:flex-row gap-[2vw] md:gap-[2vw]">
    
    <div className="bg-gray-200 sm:h-[50vw] md:w-[40%] md:h-[60vw] rounded-lg flex flex-col items-center justify-center">
        <img className="md:w-[85%] md:h-[85%] rounded-sm" src={image} alt="image" />
    </div>

    <div className="md:w-[60%] flex flex-col gap-[2vw]">
        <div>
            <h1 className="text-[8vw] md:text-[4vw] font-bold">{bookName}</h1>
        </div>
        <div>
        <h4 className="text-[4vw] text-gray-600 md:text-[2vw]">By: {author}</h4>
        </div>
        <hr />
        <h4 className="text-[4vw] md:text-[2vw] text-gray-600 ">{category}</h4>
        <hr />
        <div>
            <p className="text-[4vw] text-gray-600 md:text-[2vw]">
                <span className="font-bold">Review: </span>{review}</p>
        </div>
        <div className="mt-[1vw] flex gap-[2vw] items-center">
            <span className="font-bold text-[3vw] sm:text-[2.5vw] md:text-[1.8vw]">Tag</span>
            <span className="flex gap-[1vw] my-[1vw]">
                {tags.map((tag,idx)=> <div className="bg-green-100 text-green-500 rounded-2xl px-[.5vw] text-[3vw] sm:text-[2.5vw] md:text-[1.8vw]" key={idx}>{tag}</div>)}
            </span>
        </div>
        <hr />
        <div>
            <div className="flex items-center">
                <div className="w-[45%] font-semibold text-gray-400 text-[4vw] md:text-[2vw]">Number of Pages: </div> 
                <div className="w-[55%] text-gray-800 font-bold text-[] text-[4vw] md:text-[2vw]">{totalPages}</div>
            </div>
            <div className="flex items-center">
                <div className="w-[45%] font-semibold text-gray-400 text-[4vw] md:text-[2vw]">Publisher: </div> 
                <div className="w-[55%] text-gray-800 font-bold text-[] text-[4vw] md:text-[2vw]">{publisher}</div>
            </div>
            <div className="flex items-center">
                <div className="w-[45%] font-semibold text-gray-400 text-[4vw] md:text-[2vw]">Year of Publishing: </div> 
                <div className="w-[55%] text-gray-800 font-bold text-[] text-[4vw] md:text-[2vw]">{yearOfPublishing}</div>
            </div>
            <div className="flex items-center">
                <div className="w-[45%] font-semibold text-gray-400 text-[4vw] md:text-[2vw]">Rating: </div> 
                <div className="w-[55%] text-gray-800 font-bold text-[] text-[4vw] md:text-[2vw]">{rating}</div>
            </div>
        </div>
        <div>
        <button onClick={handleRead} className="bg-white border hover:bg-gray-200 px-[1.4vw] py-[.8vw] text-black font-bold text-[4vw] lg:text-[1.5vw] rounded-lg mr-2">Read</button>
        <button onClick={handleWish} className="bg-[#59c6d2] hover:bg-gray-200 hover:text-black px-[1.4vw] py-[.8vw] text-white font-bold text-[4vw] lg:text-[1.5vw] rounded-lg ">Wishlist</button>
        </div>
        <ToastContainer></ToastContainer>
    </div>

            </div>
        </div>
    );
};

export default Details;