import React, { useState } from 'react';
import Modal from '../Components/Modal';

const ContactUs = () => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        if (message.trim() !== '') {
            setShowModal(true);
            // Close the modal after 3-4 seconds
            setTimeout(() => setShowModal(false), 3000);
        } else {
            setShowBorder(true);
            setShowToast(true);
            // Hide the toast and remove the border after 3 seconds
            setTimeout(() => {
                setShowToast(false);
                setShowBorder(false);
            }, 3000);
        }
    };

    return (
        <div className='my-[5vw]'>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleSubmit} noValidate="" className={`bg-stone-100 container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 ${showBorder ? 'border border-red-500' : ''}`}>
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} className={`block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 ${showBorder ? 'border border-red-500' : ''}`}></textarea>
                        {/* Render the toast inside the message box if showToast is true */}
                        {showToast && <div className="absolute text-red-500">Please write something in the message.</div>}
                    </div>
                    <div>
                        <button type="submit" className="bg-cyan-600 mt-5 w-full px-4 py-3 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
                    </div>
                </form>
            </section>

            {/* Render the modal if showModal is true */}
            {showModal && <Modal />}
        </div>
    );
};

export default ContactUs;
