import React from 'react';

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;  // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pt-24">
      {/* Modal background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="bg-white text-black rounded-lg p-6 z-10 shadow-lg max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
