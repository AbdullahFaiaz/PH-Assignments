import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";



const Home = () => {
    const [books, setBooks] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    
    return (
        <div>
            <Banner></Banner>
            <div className="mt-[2vw] mb-[8vw]">
                <div className="text-[6vw] lg:text-[4vw] flex flex-col justify-center items-center font-extrabold"><div>Books</div></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-[2vw] mb-[2vw]">
                {
                    books.map(book=> <Card key={book.id} book={book}></Card>)
                }
                
                </div>
                
            </div>
        </div>
    );
};

export default Home;