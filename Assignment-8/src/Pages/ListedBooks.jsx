// ListedBooks.js
import { useState } from "react";
import ReadTab from "../Components/ReadTab";
import WishTab from "../Components/WishTab";
import { RiArrowDropDownLine } from "react-icons/ri";



const ListedBooks = () => {
    const [tab, setTab] = useState(0);
    const [sortBy, setSortBy] = useState(""); // State to track selected sorting criterion

    // Function to handle sorting criterion change
    const handleSortBy = (criterion) => {
        setSortBy(criterion);
    };

    return (
        <div className="mb-[8vw]">
            {/* Title */}
            <div className="my-[2vw]">
                <div className="bg-gray-200 rounded-lg text-[6vw] lg:text-[4vw] flex flex-col justify-center items-center font-extrabold">
                    <div>Books</div>
                </div>
            </div>

            {/* Sort By dropdown */}
            <div className="flex flex-col items-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 font-bold"> <span className="text-[4vw] text-white lg:text-[1.3vw]">Sort By</span><span className="text-white font-extrabold text-[4.5vw] lg:text-[1.6vw]"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleSortBy("rating")}>Rating</a></li>
                        <li><a onClick={() => handleSortBy("totalPages")}>Number of Pages</a></li>
                        <li><a onClick={() => handleSortBy("yearOfPublishing")}>Published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* Tabs */}
    {/* <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
    <Link to={'/listedbooks'} onClick={() => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border-[4px] border-b-0 font-bold' : 'border-b-[4px]'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
        <span>Read Books</span>
      </Link>
      <Link to={ '/listedbooks/wishlist'} onClick={() => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border-[4px] border-b-0 font-bold' : 'border-b-[4px]'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
        <span>Wishlist Books</span>
      </Link>
      <div className={`border-b-[3px] py-6 flex-1 flex items-center flex-shrink-0 px-5 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-600`}></div>
    </div> */}
                    {/* Tabs */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
    <button onClick={() => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border-[4px] border-b-0 font-bold' : 'border-b-[4px]'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
        <span>Read Books</span>
      </button>
      <button onClick={() => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border-[4px] border-b-0 font-bold' : 'border-b-[4px]'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
        <span>Wishlist Books</span>
      </button>
      <div className={`border-b-[3px] py-6 flex-1 flex items-center flex-shrink-0 px-5 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-600`}></div>
    </div>
                {/* instead of Outlet */}
            {
                tab=== 0? <ReadTab sortBy={sortBy}></ReadTab>: <WishTab sortBy={sortBy}></WishTab>
            }





            {/* Outlet for rendering child components */}
            {/* <Outlet /> */}

        </div>
    );
};

export default ListedBooks;
