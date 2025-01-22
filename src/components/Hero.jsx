// import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import sleepingPerson from "../assets/hero/sleeping-person.png";

const stats = [
  {
    id: 1,
    icon: "🌙",
    number: "85%",
    text: "Sleep Quality",
    description: "Users report improved sleep and better waking within 2 weeks"
  },
  {
    id: 2,
    icon: "⏰",
    number: "30%",
    text: "Sleep Onset",
    description: "Fall asleep naturally and easily every night"
  },
  {
    id: 3,
    icon: "📊",
    number: "100%",
    text: "Personalized",
    description: "Tailored to your unique sleep patterns"
  }
];

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] dark:bg-gray-900"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 dark:text-white">
            Sleep Smarter, Live Better
          </h1>
          <h2 className="body-1 max-w-3xl mx-auto mb-8 text-n-2 dark:text-gray-300">
            Unlock the perfect night's rest with a personalized, <span className="text-blue-500">adaptive sleep system</span> powered by cutting-edge technology
          </h2>
          <p className="body-2 max-w-2xl mx-auto mb-10 text-n-2 dark:text-gray-300">
            Real-time insights. Personalized schedules. Wake up at your best.
          </p>

          <div className="flex justify-center gap-4 w-full">
            <Button 
              onClick={handleSignupClick} 
              className="!bg-black hover:!bg-black !text-white font-semibold mb-20"
            >
              Get Started Now
            </Button>
            <Button 
              className="!bg-white !text-black hover:!bg-gray-100 font-semibold mb-20"
            >
              Learn How It Works
            </Button>
          </div>

          {/* Platform Section with Image and Info Boxes */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 pb-8 bg-white dark:bg-gray-900 rounded-2xl">
            <div className="lg:w-[75%] xl:w-[80%]">
              <img 
                src={sleepingPerson} 
                alt="Peaceful Sleep Experience" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Info Boxes */}
            <div className="lg:w-[30%] xl:w-[25%] flex flex-col gap-8 justify-center text-left">
              <div className="flex flex-col bg-transparent">
                <h4 className="font-semibold mb-2 text-lg dark:text-white">Personalized Sleep Optimization</h4>
                <p className="text-n-4 text-sm dark:text-gray-400">Tailored sleep schedules based on your unique physiology and habits.</p>
              </div>
              <div className="flex flex-col bg-transparent">
                <h4 className="font-semibold mb-2 text-lg dark:text-white">Real-Time Sleep Monitoring</h4>
                <p className="text-n-4 text-sm dark:text-gray-400">Analyze sleep stages, stress levels, and disturbances with precision.</p>
              </div>
              <div className="flex flex-col bg-transparent">
                <h4 className="font-semibold mb-2 text-lg dark:text-white">Smart Alarm System</h4>
                <p className="text-n-4 text-sm dark:text-gray-400">Wake up feeling refreshed with AI-powered, by regulating ambient light, audio, and temperature.</p>
              </div>
            </div>
          </div>

          {/* Bridge Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6B4DE6] to-[#9747FF] bg-clip-text text-transparent">
              Transform Your Sleep Experience
            </h3>
            <p className="text-n-4 text-lg leading-relaxed dark:text-gray-400">
              Our emotion-aware sleep assistant uses advanced AI to understand your sleep patterns and optimize your rest. Experience the future of sleep technology and wake up feeling truly refreshed.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 mb-24">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800 backdrop-blur-sm border border-n-1/10 hover:border-n-1/20 transition-colors"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 dark:text-white">
                  {stat.text}
                </div>
                <div className="text-n-4 dark:text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-full mx-auto md:max-w-5xl xl:mb-24">
          <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
        </div>

        <div></div>

        <h2 className="body-1 max-w-6xl mx-auto mb-6 text-n-2 lg:mb-8"></h2>
        
        <div className="relative bg-n-8 rounded-2xl overflow-hidden">
          <div className="h-[0rem] bg-n-10 rounded-t-2xl md:hidden" />
          <div className="h-auto w-full rounded-b-2xl overflow-hidden">
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;