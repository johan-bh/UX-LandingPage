import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const HighlightedText = ({ children, color }) => (
  <span className={`${color} hover:underline hover:opacity-80 transition-all duration-200 cursor-default`}>
    {children}
  </span>
);

const Benefits = () => {
  // Helper function to process text with more nuanced highlighting
  const processText = (text, isTitle = false) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      // Primary features (more selective highlighting)
      if (isTitle && ['journalføring', 'attestskrivning', 'attester'].includes(word)) {
        return <HighlightedText key={index} color="text-blue-500">{word} </HighlightedText>;
      }
      
      // Special case for Chatbot
      if (word.includes('Chatbot')) {
        const parts = word.split('Chatbot');
        return (
          <span key={index}>
            {parts[0]}
            <span className="text-blue-500">Chatbot</span>
            {parts[1]}{' '}
          </span>
        );
      }

      // Security terms (slightly muted)
      if (['sikkerhed', 'GDPR'].includes(word)) {
        return <HighlightedText key={index} color="text-green-500">{word} </HighlightedText>;
      }

      return word + ' ';
    });
  };

  return (
    <Section id="features">
      <div className="container relative z-2 bg-white">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={
            <>
              Hvordan vores løsning hjælper {" "}
              <span className="text-blue-500 hover:opacity-80 transition-all duration-200">dig </span>
              og{" "}
              <span className="text-blue-500 hover:opacity-80 transition-all duration-200">din klinik</span>
            </>
          }
        />
        
        <p className="text-n-4 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Med DokuDok opnår din klinik klare fordele som tidsbesparelse, forbedret effektivitet og høj datasikkerhed. Her er, hvordan vores løsninger og værktøjer hjælper dig med at gøre det muligt.
        </p>

        <div className="flex flex-wrap gap-10 mb-10 bg-white">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-white bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-white hover:bg-[#f8f9fa] transition-all duration-200 rounded-2xl border border-[#e5e7eb] hover:border-[#e5e7eb] hover:shadow-lg">
                <h5 className="h5 mb-5">
                  {processText(item.title, true)}
                </h5>
                <p className="body-2 mb-6 text-n-3">
                  {processText(item.text)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
