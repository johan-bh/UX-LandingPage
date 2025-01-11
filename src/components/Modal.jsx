import '../index.css'; // Import CSS first
import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, message, centered }) => {
  if (!isOpen) return null;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
    }, 50); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="modal-container fixed inset-0 z-50">
      <div
        className="modal-overlay fixed inset-0 bg-black/50"
        onClick={onClose}
      ></div>
      <div
        className={`modal-content fixed inset-x-0 top-0 flex ${
          centered ? "justify-center items-center" : "justify-center pt-24"
        }`}
      >
        <div
          className="modal-box text-white rounded-lg p-6 max-w-md w-full mx-4 relative bg-black"
        >
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="mb-6">{message}</p>
          <button
            className={`modal-close bg-black text-white py-2 px-4 rounded border border-white ${
              isHovered ? 'hover-effect' : ''
            }`}
            onClick={onClose}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Luk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;