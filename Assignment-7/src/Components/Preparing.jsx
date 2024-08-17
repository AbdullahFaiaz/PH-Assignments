
import PropTypes from 'prop-types'
const Preparing = ({preparing,time,calories}) => {



    return (
    <div className="p-[2vw] mb-[2vw]">
    <div className='text-center'><div className="text-[2vw] lexend">Currently Cooking: <span> {preparing.length}</span></div></div>
    <div className='my-[2vw]'><hr /></div>
            
            
            <div className="flex w-[25vw] text-[1.2vw] fira-sans-medium">
                <span className="pl-[2vw] w-[10vw] mx-[1vw]">Name</span><span className="w-[6vw] mr-[1vw]">Time</span><span>Calories</span>
                        
            </div>

            <ol className='list-decimal bg-gray-100'>
            {
                        preparing.map((preparing,idx)=> <li className="py-[1vw] flex items-center text-[1.2vw] fira-sans-regular text-gray-500" key={idx}>
                            <span className='font-bold w-[2vw] text-center'>{idx+1}</span>
                            <span className='w-[8vw] mx-[1vw]'>{preparing.recipe_name}</span>
                            <span className='w-[5.5vw] mr-[1vw]'>{preparing.preparing_time} Minutes</span>
                            <span className='w-[6vw] pl-[.5]'>{preparing.calories} Calories</span>
                        </li>  )
                    }

            </ol>
            
            <div className="flex w-[25vw] text-[1.3vw] fira-sans-medium mt-[2vw] text-gray-600">
                <span className="pl-[1.5vw] w-[2vw] mx-[1vw]"></span><span className="w-[8.5vw] pr-[1vw]">Total Time= {time} Minutes</span><span className='pl-[1vw] w-[10vw]'>Total Calories= {calories} Calories</span>
                        
            </div>
                    
</div>
  )
}

Preparing.propTypes = {
    preparing: PropTypes.array,
    time: PropTypes.number,
    calories: PropTypes.number
}

export default Preparing