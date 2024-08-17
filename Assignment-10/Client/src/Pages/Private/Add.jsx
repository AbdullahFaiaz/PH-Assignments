import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/ContextComponent';
import coolbg from "../../assets/cool-3.png"
import { Helmet } from 'react-helmet-async';

const Add = () => {
    const {user} = useContext(AuthContext)

    const handleAddTouristsSpot = event => {
        event.preventDefault();

        const form = event.target;
    
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
    
        const newTouristsSpot = {
            image,
            tourists_spot_name,
            country_name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            total_visitors_per_year,
            user_email,
            user_name
        };
    
        // console.log(newTouristsSpot);
    
    
        
        fetch("https://server-five-pearl.vercel.app/spots",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTouristsSpot)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log("from client",data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist spot added successfully',
                    icon: 'success',
                    confirmButtonText: 'Okey'
                  })
            }
        })

    }


    return (
         
        <div style={{ backgroundImage: `url(${coolbg})`, backgroundAttachment: "fixed" }} className="bg-cover bg-center p-10 sm:p-24">
    <Helmet>
        <title>Adventure Avenue | Add Tourists Spot</title>
    </Helmet>
        <h2 className="text-3xl text-gray-700 font-extrabold">Add a Tourists Spot</h2>
        <form onSubmit={handleAddTouristsSpot}>
            
            
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full'>
            {/* Image URL */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Tourists Spot Name */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Tourists Spot Name</span>
                    </label>
                    <label className="input-group">
                        <input required type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Country Name */}
            <div className="mb-8">
    <div className="form-control w-full">
        <label className="label">
            <span className="text-gray-700 label-text">Country Name</span>
        </label>
        <select name="country_name" className="select select-bordered w-full" required>
            <option value="">Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Thailand">Thailand</option>
        </select>
    </div>
</div>




            {/* Location */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Short Description */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Average Cost */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Average Cost $</span>
                    </label>
                    <label className="input-group">
                        <input required type="number" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            </div>


            <div className='w-full'>
            {/* Seasonality */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Seasonality</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Travel Time */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Travel Time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Total Visitors Per Year */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">Total Visitors Per Year</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="total_visitors_per_year" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* User Email */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">User Email</span>
                    </label>
                    <label className="input-group">
                        <input readOnly type="email" name="user_email" placeholder="User Email" defaultValue={user.email} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* User Name */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-gray-700 label-text">User Name</span>
                    </label>
                    <label className="input-group">
                        <input readOnly type="text" defaultValue={user.displayName} name="user_name" placeholder="User Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            </div>    
        </div>


            {/* Add Button */}
            <input type="submit" value="Add" className="btn text-white btn-block bg-[#D4AF37]" />
        </form>
    </div>
    
    );
};

export default Add;