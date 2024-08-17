import { useEffect, useState } from 'react';
import SpotCard from '../../Components/SpotCard';
import { Helmet } from 'react-helmet-async';

const AllSpots = () => {
    const [allSpots, setAllSpots] = useState([]);
    const [sortedBy, setSortedBy] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://server-five-pearl.vercel.app/spots");
                const data = await response.json();
                setAllSpots(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    const handleSortChange = (e) => {
        setSortedBy(e.target.value);
    };

    const sortedSpots = sortedBy
        ? allSpots.slice().sort((a, b) => b[sortedBy] - a[sortedBy])
        : allSpots;

    return (
        <div>
    <Helmet>
        <title>Adventure Avenue | All Tourists Spots</title>
    </Helmet>
                {/* anchor */}
{/* <div id="spot-anchor" className="absolute right-0 bottom-[20%] size-4 bg-green-500"></div> */}
            <div className="flex justify-center my-4 text-[2vw] md:text-[1.3vw]">
                <label htmlFor="sort" className="mr-2 font-bold">Sort by:</label>
                <select id="sort" className="border p-1 rounded" value={sortedBy || ''} onChange={handleSortChange}>
                    <option value="" disabled>Select sorting option</option>
                    <option value="average_cost">Average Cost</option>
                    {/* Add more sorting options here if needed */}
                </select>
            </div>
            <div className="grid grid-cols-1 my-[2vw] lg:my-[3vw] md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedSpots.map(spot => <SpotCard key={spot._id} spot={spot} />)}
            </div>
        </div>
    );
};

export default AllSpots;












