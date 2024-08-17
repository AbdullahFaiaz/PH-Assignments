
// export default PagesToRead;
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredReadBook } from '../utility/localStorage';
import { useEffect, useState } from 'react';
import CustomXAxisTick from '../Components/CustomXAxisTick';
import Empty from '../Components/Empty';

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [chartWidth, setChartWidth] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = Math.min(window.innerWidth * 0.9, 1500); // Limit width to 90% of window width or 1500px
            const height = width * 0.7; // Set height to 70% of width
            setChartWidth(width);
            setChartHeight(height);
        };

        handleResize(); // Call once to set initial dimensions

        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup event listener
        };
    }, []);

    useEffect(() => {
        const storedReadIds = getStoredReadBook();
        if (books.length > 0) {
            const booksReaded = [];
            for (const id of storedReadIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    booksReaded.push(book);
                }
            }
            setReadBooks(booksReaded);
        }
    }, [books]);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    if(readBooks.length> 0) {
        return (
        <div className='my-[6vw] w-full flex flex-col items-center justify-center'>
            <div style={{ width: '100%', maxWidth: '1500px' }}> {/* Constrain chart width to 1500px */}
                <BarChart
                    width={chartWidth}
                    height={chartHeight}
                    data={readBooks}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="bookName" 
                        tick={<CustomXAxisTick />} 
                        interval={0} 
                        height={80} // Increase the height of the XAxis to accommodate two lines
                    />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div> 
    );}
    else{
        return(
            <Empty></Empty>
        )
    }
};

export default PagesToRead;
