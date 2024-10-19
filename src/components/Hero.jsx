import { curve, robot, generatingJournal } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";

const Hero = () => {
  const parallaxRef = useRef(null);

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
            Spar tid på journalføring og infosøgning med{" "}
            <span className="inline-block relative">
              DokuDok{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <h2 className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Et AI-drevet værktøj til læger, der automatiserer journalføring og informationssøgning - strømlin workflowet i din klinik. Tilmeld dig vores betaprogram og vær blandt de første til at prøve vores løsning.
          </h2>
          <Button href="#contact" white>
            Tilmed dig nu
          </Button>
        </div>
        
        <div className="relative max-w-full mx-auto md:max-w-5xl xl:mb-24">
        <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
        {/* <ScrollParallax isAbsolutelyPositioned></ScrollParallax> */}
      </div>
    <div>

    </div>

    <h2 className="body-1 max-w-6xl mx-auto mb-6 text-n-2 lg:mb-8">
            Vores AI løsning generer et journaludkast på få sekunder. Kopier blot resultatet og indsæt i dit journalsystem!
          </h2>
  {/* <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient overflow-hidden"> */}
    {/* Outer container with rounded corners */}
    <div className="relative bg-n-8 rounded-2xl overflow-hidden">
      
      {/* Header visible only on mobile and hidden on desktop */}
      <div className="h-[0rem] bg-n-10 rounded-t-2xl md:hidden" />

      {/* Make the video take up more width on mobile */}
      <div className="h-auto w-full rounded-b-2xl overflow-hidden">
        <video
          className="w-full h-full object-contain" // Ensure video fits the box
          width={1024}
          height={600}
          loop
          autoPlay="autoplay"
          playsInline
          muted
        >
          <source src={generatingJournal} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Adjusting the "AI genererer" box */}
        {/* <Generating className="absolute left-1/2 transform -translate-x-1/2 bottom-[120px] w-[10rem] h-[2rem] md:w-[18rem] md:h-auto text-xs md:text-lg scale-[0.8] md:scale-110 md:bottom-[325px]" /> */}

    </div>
  </div>
</div>

    </Section>
  );
};

export default Hero;
