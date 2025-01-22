// import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import sleepingPerson from "../assets/hero/sleeping-person.png";
import sleepingQuality from "../assets/hero/sleeping_quality.svg";
import sleepOnset from "../assets/hero/sleep_onset.svg";
import personalized from "../assets/hero/personalized.svg";
import { useInView } from '../hooks/useInView';

const stats = [
  {
    id: 1,
    icon: sleepingQuality,
    text: "Sleep Quality",
    description: "Advanced algorithms analyze your sleep stages to recommend actionable improvements, ensuring better rest within two weeks"
  },
  {
    id: 2,
    icon: sleepOnset,
    text: "Sleep Onset",
    description: "Smart environment controls and personalized wind-down routines help you fall asleep faster and maintain consistent sleep cycles"
  },
  {
    id: 3,
    icon: personalized,
    text: "Personalized",
    description: "Our AI learns your unique patterns and preferences to create a tailored sleep optimization plan that evolves with you"
  }
];

const testimonials = [
  {
    content: "REMedy has transformed my sleep quality completely. The personalized recommendations helped me establish a consistent sleep schedule, and I'm waking up refreshed for the first time in years.",
    author: "Sarah Chen",
    role: "Product Designer",
    highlight: "waking up refreshed"
  },
  {
    content: "The sleep tracking is incredibly accurate, and the AI suggestions are spot-on. Within two weeks of using REMedy, my sleep efficiency improved by 40%, and my daytime energy levels are noticeably better.",
    author: "Michael Torres",
    role: "Software Engineer",
    highlight: "improved by 40%"
  }
];

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

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
        {/* Platform Section with Image and Info Boxes */}
        <div 
          ref={heroRef}
          className={`flex flex-col lg:flex-row items-center gap-12 mb-24 bg-gradient-to-b from-blue-50/80 to-gray-50 dark:from-[#1a1d1f] dark:to-[#1E1E1E] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 opacity-0 ${
            heroInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="lg:w-[55%] order-2 lg:order-1">
            <img 
              src={sleepingPerson} 
              alt="Peaceful Sleep Experience" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-[45%] text-left order-1 lg:order-2 lg:pl-12 p-8">
            <h1 className="h1 mb-8 dark:text-white">
              Optimize Your Sleep with AI-Powered Insights
            </h1>
            <h2 className="body-1 mb-8 text-black/80 dark:text-gray-300">
              Track, analyze, and improve your sleep patterns with our <span className="text-blue-500">intelligent sleep assistant</span> that adapts to your unique rhythm
            </h2>
            <p className="body-2 mb-12 text-gray-400">
              Real-time insights. Personalized schedules. Wake up at your best.
            </p>

            <div className="flex">
              <Button 
                className="!bg-blue-500 hover:!bg-blue-600 !text-white font-semibold"
              >
                Download the App Now
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24 opacity-0 ${
            statsInView ? 'animate-fade-in-up delay-800' : ''
          }`}
        >
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-blue-50/80 to-gray-50 dark:from-[#1E9AFC]/5 dark:to-[#1A75FF]/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <img 
                src={stat.icon} 
                alt={stat.text}
                className="w-16 h-16 mb-6 text-blue-500"
              />
              <div className="text-lg font-semibold mb-2 dark:text-white">
                {stat.text}
              </div>
              <div className="text-n-4 dark:text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div 
          ref={testimonialsRef}
          className={`max-w-[90%] mx-auto mb-24 opacity-0 ${
            testimonialsInView ? 'animate-fade-in-up delay-200' : ''
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent text-center">
            What Our Users Say
          </h3>
          <p className="text-n-4 text-lg text-center mb-16 dark:text-gray-300">
            Discover how REMedy is helping people transform their sleep quality.
            <br></br>
            Join the REMedy revolution today!
          </p>
          
          <div className="flex flex-col gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 mb-16 last:mb-0 opacity-0 ${
                  testimonialsInView ? `animate-fade-in-up delay-${(index + 1) * 400}` : ''
                }`}
              >
                <div 
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } bg-gradient-to-br from-blue-50/5 to-gray-50/5 dark:from-[#1E9AFC]/5 dark:to-[#1A75FF]/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1`}
                >
                  <div className="inline-block text-6xl mb-4 text-[#1E9AFC]">
                    "
                  </div>
                  <p className="text-xl leading-relaxed mb-6 dark:text-gray-200">
                    {testimonial.content.split(testimonial.highlight).map((part, i, arr) => (
                      <span key={`testimonial-${index}-part-${i}`}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-[#1E9AFC]">
                            {testimonial.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'} gap-1`}>
                    <h4 className="font-bold text-lg dark:text-white">{testimonial.author}</h4>
                    <p className="text-n-4 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1E9AFC]/5 to-[#1A75FF]/5 dark:from-[#1E9AFC]/5 dark:to-[#1A75FF]/5 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#1E9AFC]/30 to-[#1A75FF]/30 flex items-center justify-center">
                        <span className="text-6xl">{"😴"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trial CTA Section */}
        <div 
          ref={ctaRef}
          className={`max-w-[90%] mx-auto opacity-0 ${
            ctaInView ? 'animate-fade-in-up delay-400' : ''
          }`}
        >
          <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 dark:text-white">
                Start with a Free Sleep Assessment
              </h3>
              <p className="text-n-4 text-lg mb-8 max-w-2xl mx-auto dark:text-gray-300">
                Get a personalized sleep analysis and improvement plan. Try REMedy free for 14 days – no credit card required, no commitments.
              </p>
              <Button 
                className="min-w-[200px] !bg-blue-500 hover:!bg-blue-600 !text-white"
                onClick={handleSignupClick}
              >
                Take Your Free Assessment
              </Button>
            </div>
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