import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import Section from "./Section";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
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
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };
  
  

  return (
    <Section id="contact">
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
      name="from_name"  // Make sure this matches your EmailJS template
      className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
      placeholder="Dit Navn"
      required
    />
  </div>

  {/* Email Field */}
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-n-1/50 body-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="from_email"  // Match this with the new {{from_email}} in your template
      className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
      placeholder="Din Email"
      required
    />
  </div>

  {/* Message Field */}
  <div className="mb-6">
    <label htmlFor="message" className="block mb-2 text-n-1/50 body-2">
      Besked
    </label>
    <textarea
      id="message"
      name="message"  // Make sure this matches your EmailJS template
      rows="5"
      className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
      placeholder="Din Besked"
      required
    ></textarea>
  </div>

  {/* Submit Button */}
  <Button className="w-full" type="submit" white>
    Send Besked
  </Button>
</form>


    </div>
    </Section>
  );
};

export default ContactUs;
