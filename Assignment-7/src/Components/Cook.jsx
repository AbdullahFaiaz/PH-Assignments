
import { PropTypes } from 'prop-types';
import Preparing from './Preparing';
import { useState } from 'react';

const Cook = ({cooks,setCooks}) => {
        //total time
        const [time,setTime] = useState(0)
        const handleTime = (get) =>{
            let newTime = time + get;
            setTime(newTime)
        }
                //total calories
                const [calories,setCalories] = useState(0)
                const handleCalories = (get) =>{
                    let newCalories = calories + get;
                    setCalories(newCalories)
                }
    // preparing state
    const [preparing, setPreparing] = useState([])
    const handlePreparing = (take) =>{
        setPreparing([...preparing,take])
        handleTime(take.preparing_time)
        handleCalories(take.calories)
        const newCooks = cooks.filter(items=> items.recipe_id!==take.recipe_id)
        setCooks(newCooks)

    } 


  return (
    <div className="w-full">
    {/* cook */}
        <div className="rounded-2xl p-[2vw] mb-[2vw]">
            <div className='text-center'><div className="text-[2vw]">Want To Cook: <span> {cooks.length}</span></div></div>
            <div className='my-[2vw]'><hr /></div>
                    
                    <div className="flex w-[25vw] text-[1.2vw] fira-sans-medium">
                        <span className="pl-[3vw] w-[10vw]">Name</span><span className="w-[6vw]">Time</span><span>Calories</span>
                                
                    </div>
                    
                    <ol className='bg-gray-100'>
                    
                    {
                        cooks.map((cooks,idx)=> <li className="py-[1vw] flex items-center text-[1.2vw] text-gray-600 fira-sans-regular" key={cooks.recipe_id}>
                            <span className='font-bold w-[3vw] text-center'>{idx+1}</span>
                            <span className='w-[8vw]'>{cooks.recipe_name}</span>
                            <span className='w-[5.5vw]'>{cooks.preparing_time} Minutes</span>
                            <span className='w-[6vw] ml-[.5vw]'>{cooks.calories} Calories</span>
                            <span><button onClick={()=>{handlePreparing(cooks)}} className='text-[1.1vw] text-black hover:bg-green-500 bg-[#0be58a] lexend-semibold rounded-full py-[.85vw] px-[1.1vw] ml-[1vw]'>Preparing</button></span>
                        </li>  )
                    }
                    </ol>
                            
        </div>
{/* preparing */}
                <Preparing preparing={preparing} time={time} calories={calories}></Preparing>
    </div>
   



  )
}

Cook.propTypes = {
    cooks: PropTypes.array,
    setCooks: PropTypes.func
}

export default Cook