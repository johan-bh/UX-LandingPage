import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, videoSearch } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Gradient } from "./design/Services";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container bg-white">
        <Heading
          title="AI-dreven infosøgning og hurtige opsummering"
          text="Find hurtigt præcis information fra lange journaler, epikriser og lægeattester eller opsummer lange dokumenter ved hjælp af vores AI-drevne værktøj. Spar tid og få bedre indsigt med få klik."
        />

        {/* AI Assistant Container */}
        <div className="relative max-w-full mx-auto p-0.5 rounded-2xl overflow-hidden bg-white">
          <div className="relative z-1 flex flex-col items-start h-auto mb-5 p-8 bg-[#F0F9FF] hover:bg-[#E1F3FF] transition-all duration-200 rounded-2xl border border-n-1/10 hover:border-n-1/30 hover:shadow-lg lg:p-20 xl:h-auto">
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
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative overflow-hidden">
          <div className="w-full">
            <video
              className="w-full h-full object-contain"
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
