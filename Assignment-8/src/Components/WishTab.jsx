
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBook } from "../utility/localStorage";
import WishCard from "./WishCard";
import Empty from "./Empty";

const WishTab = ({sortBy}) => {

    const books = useLoaderData()
    const [wishBooks,setWishBooks] = useState([])

    useEffect(() => {
        const storedWishIds = getStoredWishBook();
        if (books.length > 0) {
            const booksWished = [];
            for (const id of storedWishIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    booksWished.push(book);
                }
            }
            // Sort the wishBooks array based on sortBy
            booksWished.sort((a, b) => b[sortBy] - a[sortBy]);
            setWishBooks(booksWished);
        }
    }, [books, sortBy]);
    
    if(wishBooks.length>0){
        return (
            <div className="my-[2vw]">
    
                {
                    wishBooks.map(book => <WishCard key={book.id} book={book}></WishCard>)
                }
            </div>
        );
    }
    else{
        return(
            <Empty></Empty>
        )
    }

};

export default WishTab;