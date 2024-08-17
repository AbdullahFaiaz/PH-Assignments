
import { useLoaderData } from "react-router-dom";
import MyListTable from "../../Components/MyListTable";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const MyList = () => {

    const data = useLoaderData()
    const [spots, setSpots] = useState(data)
    return (
        <div className="sm:m-2 md:m-10 lg:m-16">
                <Helmet>
        <title>Adventure Avenue | My List</title>
    </Helmet>
            <div className="overflow-x-auto text-black bg-slate-200 rounded-lg">
            <table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col className="" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="">
					<th className="py-3">Title</th>
					<th className="py-3">Category</th>
					<th className="py-3">Number of Volunteers</th>
					<th className="py-3 "></th>
					<th className="py-3 "></th>
				</tr>
			</thead>
                {
                spots.map(spot=> <MyListTable key={spot._id} spot={spot} setSpots={setSpots} spots={spots}></MyListTable> )
                }
            </table>
            </div>

        </div>
    );
};

export default MyList;