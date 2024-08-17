
import { useEffect, useState } from "react"
import Cards from "./Cards"
import Cook from "./Cook"
import Toast from "./Toast"

const Recipe = () => {
    //show toast state
    const [showToast, setShowToast] = useState(false)
    // all recipes 
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        fetch('datas.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])
// cook
    const [cooks,setCooks] = useState([])
    const handleCook = (take) => { 
        const isExists= cooks.find(item=> item.recipe_id=== take.recipe_id)

        if(isExists){
            setShowToast(true)
            setTimeout(()=>{
                setShowToast(false);
            },1000)
        }
        else{
            setCooks([...cooks,take]);
        }
    }

    return (
        <div className="w-[90%] lexend mx-auto">
            {/* Our Recipe Header */}
            <div className="flex flex-col items-center justify-center gap-[1vw] my-[2vw]">
                <h1 className="text-[5vw] sm:text-[3.5vw] lexend-mediumbold mt-[2vw]">Our Recipes</h1>
                <p className="text-[2.2vw] sm:text-[1.5vw] text-center w-[65%] mx-auto">Explore a diverse array of flavorful recipes crafted to tantalize your taste buds and satisfy your cravings.</p>
            </div>
            
            <div className="flex">
                {/* Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[60%]">
                    {
                    recipes.map(get=> <Cards key={get.recipe_id} handleCook={handleCook} recipe={get}></Cards>)
                    }
                </div>
                {/* Cook  and preparing*/}

                        
                        <div className="w-[40%] border-[1px] border-gray-400 border-solid rounded-xl flex flex-col items-center mb-[2vw]">
                            
                            {showToast && <Toast message={"Already Exists"}></Toast>}
                            <Cook cooks={cooks} setCooks={setCooks}></Cook>
                            
                            
                        </div>

                    

                </div>
            </div>

        
    )
}

Recipe.propTypes = {}

export default Recipe