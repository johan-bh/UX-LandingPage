import React, { useState } from "react";
import Button from "./Button";  // Assuming the Button component is in the same folder
import Modal from "./Modal";    // Import the Modal component

const WebAppButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility

  // Function to check access when the button is clicked
  const handleCheckAccess = async () => {
    setLoading(true);
    setMessage(""); // Reset message

    try {
      // Fetch user IP address using a third-party API
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;

      console.log("User IP:", userIP);

      // Call your backend to validate the IP
      const backendResponse = await fetch("http://localhost:5000/check-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: userIP }),
      });

      const result = await backendResponse.json();

      if (result.hasAccess) {
        // Redirect to the webapp if access is granted
        window.location.href = "https://app.dokudok.dk/";
      } else {
        // Show modal with the "access denied" message
        setMessage("Du har desværre ikke adgang til webappen. Kontakt support for mere information.");
        setIsModalOpen(true);  // Open the modal
      }
    } catch (error) {
      console.error("Error fetching IP or checking access:", error);
      setMessage("En fejl hændte. Prøv venligst igen senere.");
      setIsModalOpen(true);  // Open modal if an error occurs
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Button
          className="hidden lg:flex"
          onClick={handleCheckAccess}
          white={false}
          px="px-7"
        >
          Gå til webapp
        </Button>
      )}

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
