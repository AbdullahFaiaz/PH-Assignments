import React, { useEffect } from 'react';

const Modal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000); // Close modal after 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const closeModal = () => {
    // Function to close modal (you can implement accordingly)
    console.log("Modal closed");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="text-3xl font-bold text-orange-500 mb-6">Thank You!</div>
        <div className="text-lg text-gray-800 mb-6">Your message has been received.</div>
        <div className="text-5xl text-orange-500">😊</div>
      </div>
    </div>
  );
};

export default Modal;
