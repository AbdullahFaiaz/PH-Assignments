
import PropTypes from 'prop-types';
import { FiClock } from "react-icons/fi";
import { RiFireLine } from "react-icons/ri";


const Cards = ({handleCook,recipe}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe



    return (
    <div>

    <div className='w-[45vw] sm:w-[25vw] p-[1vw] border-solid border-gray-400 border-[1px] rounded-xl mb-[2vw]'>
        <div><img className='w-full rounded-xl mb-[1vw]' src={recipe_image} alt="rec" /></div>
        <div>
            <h1 className='lexend-mediumbold text-[1.5vw] mt-[.5vw]'>{recipe_name}</h1> 
            <p className='fira-sans-light text-gray-700 text-[1vw] my-[.5vw]'>{short_description}</p>
            <hr />
        </div>
        <div className='h-[10.5vw]'>
            <h1 className='lexend-mediumbold text-[1.2vw] my-[.5vw]'>Ingredients: {ingredients.length} </h1>
            <ul className='list-inside list-disc fira-sans-light text-gray-700 text-[1vw] mt-[.5vw]'>
                {
                    ingredients.map((ingredient,idx)=> <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <hr />
        </div>
        <div className="my-[.5vw] flex gap-3">
            <div className="flex text-[1vw] gap-1 items-center"><span><FiClock /></span><span>{preparing_time} Minutes</span> </div>

            <div className="flex text-[1vw] gap-1 items-center"> <span><RiFireLine /></span> <span>{calories} Calories</span></div>
        </div>
        <div>
            <button onClick={()=> handleCook(recipe)} className='text-[1vw] text-black hover:bg-green-500 bg-[#0be58a] lexend-semibold rounded-full py-[.65vw] px-[1.2vw]'>Want To Cook</button>
        </div>
    </div>


    </div>
    )
}

Cards.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func

}

export default Cards