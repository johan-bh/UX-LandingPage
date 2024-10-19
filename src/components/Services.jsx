import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, videoSearch } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  VideoBar,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="AI-dreven infosøgning og hurtige opsummering"
          text="Find hurtigt præcis information fra lange journaler, epikriser og lægeattester eller opsummer lange dokumenter ved hjælp af vores AI-drevne værktøj. Spar tid og få bedre indsigt med få klik."
        />

{/* <div className="relative max-w-full mx-auto p-0.5 rounded-2xl bg-conic-gradient overflow-hidden"> */}
  <div className="relative z-1 flex flex-col items-start h-auto mb-5 p-8 border border-n-1/10 rounded-2xl bg-n-8 overflow-hidden lg:p-20 xl:h-auto">
    
    {/* Text and Bullet Points Container */}
    <div className="relative z-1 w-full mb-8">
      <h4 className="h4 mb-4">Din AI-assistent</h4>
      <p className="body-2 mb-[3rem] text-n-3">
        DokuDok hjælper læger med at finde vigtig information hurtigt og præcist.
      </p>
      <ul className="body-2">
        {brainwaveServices.map((item, index) => (
          <li
            key={index}
            className="flex items-start py-4 border-t border-n-6"
          >
            <img width={24} height={24} src={check} />
            <p className="ml-4">{item}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* Image with Rounded Corners */}

    {/* Outer container with rounded corners */}
    <div className="relative bg-n-8 rounded-2xl overflow-hidden">
      
      {/* Header visible only on mobile and hidden on desktop */}
      <div className="h-[0rem] bg-n-10 rounded-t-2xl md:hidden" />

      {/* Make the video take up more width on mobile */}
      <div className="h-auto w-full rounded-b-2xl overflow-hidden">
        </div>

      </div>
      
    </div>
    
  </div>

<div className="container lg:flex">
{/* <div className="relative max-w-full mx-auto p-0.5 rounded-2xl bg-conic-gradient overflow-hidden"> */}
  {/* <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient overflow-hidden"> */}
    {/* Outer container with rounded corners */}
    <div className="relative bg-n-8 rounded-2xl overflow-hidden">
      
      {/* Header visible only on mobile and hidden on desktop */}
    <div className="h-[0rem] bg-n-10 rounded-t-2xl md:hidden" />
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
                <source src={videoSearch} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
      </div>
  </div>
</Section>

);
};

export default Services;
