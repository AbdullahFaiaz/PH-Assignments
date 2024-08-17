import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const ViewDetails = () => {
    const spot = useLoaderData();
    const { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name } = spot;
// console.log(spot)


return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <Helmet>
        <title>Adventure Avenue | View Details</title>
    </Helmet>
    <ToastContainer/>
            <div className="flex flex-col gap-4">
                <img src={image} alt={tourists_spot_name} className="w-full h-auto rounded-lg" />
                <div>
                    <h1 className="text-2xl font-semibold">{tourists_spot_name}</h1>
                    <p className="text-gray-600">Description: {short_description}</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Details:</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Country:</strong> {country_name}</li>
                        <li><strong>Location:</strong> {location}</li>
                        <li><strong>Average Cost:</strong> ${average_cost}</li>
                        <li><strong>Seasonality:</strong> {seasonality}</li>
                        <li><strong>Travel Time:</strong> {travel_time}</li>
                        <li><strong>Total Visitors Per Year:</strong> {total_visitors_per_year}</li>
                        <li><strong>Added by:</strong> {user_name} ({user_email})</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
