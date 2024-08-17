import book from '../assets/book-cover.jpg'

const About = () => {
    return (
        <section className="bg-green-100 py-16 rounded-2xl my-[5vw]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">About Us</h2>
                        <p className="text-lg text-green-800 leading-relaxed mb-6">Welcome to Book Vibe, your go-to destination for all things books! We're a passionate team of book lovers dedicated to sharing our enthusiasm for reading with the world.</p>
                        <p className="text-lg text-green-800 leading-relaxed mb-6">Our mission is simple: to inspire and empower readers to explore new worlds, dive into captivating stories, and enrich their lives through the magic of books.</p>
                        <p className="text-lg text-green-800 leading-relaxed mb-6">Whether you're a seasoned bookworm or just starting your reading journey, we're here to help you discover your next favorite book, connect with fellow book enthusiasts, and foster a vibrant reading community.</p>
                    </div>
                    <div className="md:w-1/2 ml-2">
                        <img src={book} alt="About Us" className="rounded-md shadow-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
