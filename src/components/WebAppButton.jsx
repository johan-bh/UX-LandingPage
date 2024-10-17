import React, { useState } from "react";
import Button from "./Button";  // Assuming the Button component is in the same folder
import Modal from "./Modal";    // Import the Modal component

const apiUrl = import.meta.env.VITE_API_URL || "/api";

const WebAppButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility

  // Function to check access when the button is clicked
  const handleCheckAccess = async () => {
    setLoading(true);
    setMessage(""); // Reset message
  
    try {
      // Call the backend directly to validate the user's IP
      const backendResponse = await fetch(`${apiUrl}/check-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      const result = await backendResponse.json();
  
      if (result.hasAccess) {
        // Redirect to the webapp if access is granted
        window.location.href = "https://app.dokudok.dk/";
      } else {
        // Show modal with the "access denied" message
        setMessage("Du har desværre ikke adgang til webappen. Kontakt os for at få adgang.");
        setIsModalOpen(true);  // Open the modal
      }
    } catch (error) {
      console.error("Error checking access:", error);
      setMessage("En fejl opstod. Prøv igen senere.");
      setIsModalOpen(true);  // Open modal if an error occurs
    } finally {
      setLoading(false);
    }
  };
  

  

  return (
    <div>
      <Button
        className="hidden lg:flex"
        onClick={handleCheckAccess}
        white={false}
        px="px-7"
      >
        {loading ? "Viderestiller" : "Gå til webapp"}
      </Button>

      {/* Modal component to display access messages */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}  // Function to close the modal
        title="Adgang Nægtet"
        message={message}  // Message to show in the modal
      />
    </div>
  );
};

export default WebAppButton;
