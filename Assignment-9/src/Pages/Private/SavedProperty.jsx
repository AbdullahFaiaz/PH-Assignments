import { useLoaderData } from "react-router-dom";
import { deleteId, getSaved } from "../../Hooks/addToLocal";
import CardComponent from "../../Components/CardComponent";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const SavedProperty = () => {
    const [savedIds,setSavedIds] = useState(null)
    const allCards = useLoaderData()
    const savedId = getSaved()
    const ids = savedId.map(item =>parseInt(item))
    const cards = allCards.filter(cards=> ids.includes(cards.id))

    useEffect(()=>{
        const saved = getSaved()
        setSavedIds(saved)
    },[])

    const handleDelete = (id)=>{
        
        deleteId(String(id))
        const saved = getSaved()
        setSavedIds(saved)
        console.log("btn pressed for id",id,savedIds)
    }

    return (
        <div>
            <Helmet>
                <title>Harmony Homes | Saved Property</title>
            </Helmet>
            <p className="text-center text-[6vw] md:text-[4vw] pt-[2vw] bg-[#f6f3f3]">
                Saved Property
            </p>
    {cards.length>0 ?
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around bg-[#f6f3f3] py-[5vw]">
    {
      cards.map(card => <CardComponent key={card.id} card={card}> <button className="py-1 lg:py-[.3vw] w-[45%] md:w-[60%] lg:w-[45%] rounded-lg bg-[#ffbe00] hover:bg-[#ffbc51] text-black font-bold transition duration-300 text-[3.5vw] sm:text-[2.2vw] md:text-[1.8vw] lg:text-[1.2vw]" onClick={()=>handleDelete(card.id)}>Delete it</button></CardComponent>)
    }

    </div>
    :
    <p className="text-center flex flex-col items-center justify-center text-[6vw] md:text-[4vw] pt-[2vw] min-h-[20vw]">
                No Saved Item
    </p>
    }
    
        </div>
    );
};

export default SavedProperty;