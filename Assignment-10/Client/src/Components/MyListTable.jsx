
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

const MyListTable = ({spot,setSpots,spots}) => {

    const {_id, image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name} = spot
    const handleDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://server-five-pearl.vercel.app/spots/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.deletedCount>0){
                const remaining = spots.filter(spot=> spot._id!== id)
                 setSpots(remaining)
                Swal.fire({
                  title: "Deleted!",
                  text: "The tourist spot has been deleted.",
                  icon: "success"
                });
            }
        })

        }


      });


    }
    return (
      <>
    <tbody>
      <tr className="border-b  text-black border-gray-400 dark:bg-gray-50">
        <td className="text-center">
            <p>{tourists_spot_name}</p>
        </td>
        <td className="text-center">
            <p>{country_name}</p>
        </td>
        <td className="text-center">
            <p>${average_cost}</p>
        </td>
        <td className="py-3 text-center">
        <Link to={`/update/${_id}`}><button className='text-[2.5vw] md:text-[1.3vw]  bg-[#d4a132] text-black hover:text-white py-[.5vw] px-[1.5vw] rounded'>Update</button></Link>
        </td>
        <td className="py-3 text-center">
        <button onClick={()=> handleDelete(_id)} className='text-[2.5vw] md:text-[1.3vw] bg-[#d4a132] hover:text-white py-[.5vw] px-[1.5vw] rounded'>Delete</button>
        </td>
    </tr>
    </tbody>
      <br />
      </>
        
    );
};
MyListTable.propTypes = {
    spot : PropTypes.object,
    setSpots: PropTypes.func,
    spots: PropTypes.array,
}
export default MyListTable;