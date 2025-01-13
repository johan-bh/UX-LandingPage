import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Pricing from "./components/Pricing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Collaboration from "./components/Collaboration";
import Testimonials from "./components/Testimonials";
import Integration from "./components/Integration";
import TrialCTA from "./components/TrialCTA";
import Signup from "./pages/Signup";

const HomePage = () => (
  <>
    <Hero />
    <Benefits />
    <Integration />
    {/* <Collaboration /> */}
    {/* <Services />   */}
    <Testimonials />
    <TrialCTA />
    <Pricing />
    <ContactUs />
  </>
);

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
