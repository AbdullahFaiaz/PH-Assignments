import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/localStorage";
import ReadCard from "./ReadCard";
import Empty from "./Empty";


const ReadTab = ({sortBy}) => {

    const books = useLoaderData()
    const [readBooks,setReadBooks] = useState([])
    useEffect(
        () => {
        const storedReadIds = getStoredReadBook();
        if (books.length > 0) {
            const booksReaded = [];
            for(const id of storedReadIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    booksReaded.push(book);
                }
            }
            // Sort the readBooks array based on sortBy
            booksReaded.sort((a, b) => b[sortBy] - a[sortBy]);
            setReadBooks(booksReaded);
        }
    }, [books, sortBy]); // Trigger the effect when either books or sortBy changes
    
    if(readBooks.length>0){
    return (
        <div className="my-[2vw]">

            {
                readBooks.map(book => <ReadCard key={book.id} book={book}></ReadCard>)
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

export default ReadTab;