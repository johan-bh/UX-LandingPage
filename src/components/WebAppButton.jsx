import React, { useState, useEffect } from "react";
import Button from "./Button";  // Assuming the Button component is in the same folder
import Modal from "./Modal";    // Import the Modal component
import Section from "./Section";  // Assuming Section is used for layout

const apiUrl = import.meta.env.VITE_API_URL || "/api";

const WebAppButton = ({ black }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility

  // Function to check access when the button is clicked or #webapp is detected
  const handleCheckAccess = async () => {
    setLoading(true);
    setMessage(""); // Reset message
  
    try {
      // Fetch user IP address using a third-party API
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;
      console.log(`Public IP from client: ${userIP}`);

      // Call your backend to validate the IP
      const backendResponse = await fetch(`${apiUrl}/check-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: userIP }),
      });
  
      const result = await backendResponse.json();
      console.log("Access result:", result);
  
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

  // Detect URL changes and trigger handleCheckAccess if #webapp is found
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#webapp") {
        handleCheckAccess();
      }
    };

    // Check if #webapp is already present on load
    checkHash();

    // Add hash change listener
    window.addEventListener("hashchange", checkHash);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);  // Empty dependency array ensures this runs only once on component mount

  return (
    <div>
      <Button
        className={`hidden lg:flex bg-black hover:bg-black text-white font-semibold`}
        onClick={handleCheckAccess}
        px="px-7"
      >
        {loading ? "Validerer adgang..." : "Gå til webapp"}
      </Button>

      {/* Modal component to display access messages */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}  // Close modal function
        title="Adgang Nægtet"
        message={message}  // The message to display in the modal
        centered={false}  // Don't center the modal for the webapp button
      />
    </div>
  );
};

export default WebAppButton;
