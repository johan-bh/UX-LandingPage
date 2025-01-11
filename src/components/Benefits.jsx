import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 bg-white">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Hvordan vores løsning hjælper dig og din klinik"
        />

        <div className="flex flex-wrap gap-10 mb-10 bg-white">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-white bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-[#F7FBFF] hover:bg-[#E1F3FF] transition-all duration-200 rounded-2xl border border-n-1/10 hover:border-n-1/30 hover:shadow-lg">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
