import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import Modal from "./Modal";  // Use the same Modal component

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");  // Modal message
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal visibility state

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to send the email
  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Correct for Vite
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Correct for Vite
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID      // Correct for Vite
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage(
            "Tak for din besked! Du vil modtage en kvittering og vi vender tilbage hurtigst muligt 🤗"
          );
          setIsModalOpen(true);  // Show success modal
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setMessage(
            "Beklager, der opstod en fejl. Prøv igen senere eller kontakt os på salg@dokudok.dk."
          );
          setIsModalOpen(true);  // Show error modal
        }
      );
  };

  return (
    <Section id="contact">
      <div className="container lg:flex">
        <div className="relative max-w-full mx-auto p-0.5 rounded-2xl overflow-hidden">
          <Heading title="Skriv dig op til vores betaprogram" />
          <h2 className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Er du interesseret i at deltage i vores betaprogram? Så send os en
            besked med formularen nedenfor, så kontakter vi jer hurtigst muligt.
          </h2>
          <div className="flex justify-center items-center p-8 max-w-2xl mx-auto bg-n-8 border border-n-6 rounded-2xl">
            <form className="w-full" onSubmit={sendEmail}>
              <h4 className="h4 mb-4 text-center">Kontakt os</h4>

              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-n-1/50 body-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"  // Ensure this matches your EmailJS template
                  className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
                  placeholder="Dit Navn"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-n-1/50 body-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"  // Match this with your EmailJS template
                  className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
                  placeholder="Din Email"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-n-1/50 body-2"
                >
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"  // Ensure this matches your EmailJS template
                  rows="5"
                  className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
                  placeholder="Din Besked"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button className="w-full" type="submit" white>
                Send Besked
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal component to show success/error message */}
      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}  // Close modal function
      title="Status"
      message={message}  // The message to display in the modal
      centered={true}  // Center the modal for the contact form
    />

    </Section>
  );
};

export default ContactUs;
