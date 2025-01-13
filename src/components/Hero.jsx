import { curve, robot, generatingJournal } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import frontpageDokuapp from "../assets/hero/frontpage_dokuapp.png";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    id: 1,
    icon: "💡",
    number: "40%",
    text: "Tidsbesparelse på dokumentationsopgaver",
    description: "Frigør mere tid til dine patienter"
  },
  {
    id: 2,
    icon: "✅",
    number: "10+",
    text: "Klinikker i Danmark",
    description: "Bruger allerede DokuDok aktivt"
  },
  {
    id: 3,
    icon: "🔒",
    number: "100%",
    text: "GDPR-compliant",
    description: "Al data forbliver i EU"
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
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Vi tager os af papirarbejdet – du tager dig af patienterne
          </h1>
          <h2 className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
            Med <span className="text-blue-500">DokuDok</span> får du fremtidens <span className="text-blue-500">AI</span>-værktøj til din klinik
          </h2>

          <p className="body-2 max-w-2xl mx-auto mb-10 text-n-2">
            Et intelligent værktøj der automatiserer journalføring, attestskrivning og informationssøgning – strømlin dokumentationsbyrden og få en enklere hverdag.
          </p>

          <div className="flex justify-center w-full">
            <Button 
              onClick={handleSignupClick} 
              className="!bg-black hover:!bg-black !text-white font-semibold mb-20 mx-auto"
            >
              Gratis prøveperiode
            </Button>
          </div>

          {/* Platform Section with Image and Info Boxes */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 pb-8">
            <div className="lg:w-[75%] xl:w-[80%]">
              <img 
                src={frontpageDokuapp} 
                alt="DokuDok Platform" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Info Boxes */}
            <div className="lg:w-[30%] xl:w-[25%] flex flex-col gap-8 justify-center text-left">
              <div className="flex flex-col">
                <h4 className="font-semibold mb-2 text-lg">Nem og intuitiv navigation</h4>
                <p className="text-n-4 text-sm">Vores platform gør det let for dig at fokusere på det vigtige – dine patienter.</p>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold mb-2 text-lg">Skræddersyet til din klinik</h4>
                <p className="text-n-4 text-sm">Brug dine egne fraser og skabeloner for en personlig og effektiv løsning.</p>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold mb-2 text-lg">Alt samlet ét sted</h4>
                <p className="text-n-4 text-sm">Generér journaler, attester og opsummeringer med et enkelt klik.</p>
              </div>
            </div>
          </div>

          {/* Bridge Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent">
              Fra platform til resultater
            </h3>
            <p className="text-n-4 text-lg leading-relaxed">
              DokuDok gør journalføring og dokumentation nemt og effektivt. Vores intuitive platform hjælper klinikker med at spare tid, reducere arbejdsbyrden og fokusere på det, der betyder mest – patienterne. Her er nogle af fordelene, vores kunder allerede oplever.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 mb-24">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-n-1/10 hover:border-n-1/20 transition-colors"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.text}</div>
                <div className="text-n-4 text-sm">{stat.description}</div>
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
