import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12 relative overflow-hidden">
            {/* Main Content */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 md:pl-10 md:pr-8">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-semibold mb-4">Harmony Homes</h3>
                    <p className="italic">Your dream home is our priority!</p>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-end gap-4 md:gap-6">
                    <a href="https://www.facebook.com/harmonyhomes" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl p-2 md:p-3 rounded-full text-blue-500 hover:bg-gray-700 transition-transform transform hover:scale-110">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/harmonyhomes" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl p-2 md:p-3 rounded-full text-blue-400 hover:bg-gray-700 transition-transform transform hover:scale-110">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/harmonyhomes" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl p-2 md:p-3 rounded-full text-pink-500 hover:bg-gray-700 transition-transform transform hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/harmonyhomes" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl p-2 md:p-3 rounded-full text-blue-700 hover:bg-gray-700 transition-transform transform hover:scale-110">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-right animate-fade-in-delay">
                    <p>Address: 123 Harmony Lane, City</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@harmonyh.com</p>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="text-center mt-8 animate-fade-in">
                <p>© 2024 Harmony Homes.</p>
                <p>All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
