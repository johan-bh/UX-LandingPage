import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);  // State to store reCAPTCHA token
  const [captchaVerified, setCaptchaVerified] = useState(false); // State to track if captcha is verified

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to send the reCAPTCHA token to the backend for verification
  const verifyCaptcha = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (data.success) {
        setCaptchaVerified(true);  // Mark captcha as verified
        return true;
      } else {
        setCaptchaVerified(false);  // Mark captcha as not verified
        return false;
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      return false;
    }
  };

  // Function to send the email
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if the captcha is verified before submitting the form
    // if (!captchaVerified) {
    //   alert("Please complete the reCAPTCHA before submitting the form.");
    //   return;
    // }

    // Proceed with sending the email if reCAPTCHA is solved and verified
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

  // // Effect to render reCAPTCHA widget after the component mounts
  // useEffect(() => {
  //   if (window.grecaptcha) {
  //     window.grecaptcha.ready(() => {
  //       window.grecaptcha.render("recaptcha-container", {
  //         sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  //         callback: (token) => {
  //           setCaptchaToken(token);  // Store the reCAPTCHA token
  //           verifyCaptcha(token);    // Verify the token with the backend
  //         },
  //       });
  //     });
  //   }
  // }, []);

  return (
    <Section id="contact">
        <Heading
          title="Skriv dig op til vores betaprogram"/>
        <h2 className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
        Er du interesseret i at deltage i vors betaprogram? Så send os en besked med formularen nedenfor, så kontakter vi jer hurtigst muligt.
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
              name="from_name"  // Make sure this matches your EmailJS template
              className="w-full p-3 border border-n-6 rounded-lg bg-n-10 text-n-1"
              placeholder="Dit Navn"
              required
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Google reCAPTCHA */}
          <div className="mb-6">
            <div id="recaptcha-container"></div> {/* Container for the reCAPTCHA */}
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
