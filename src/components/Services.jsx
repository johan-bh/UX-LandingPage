import Section from "./Section";
import { check } from "../assets";
import Button from "./Button";
import frontpageDokuapp from "../assets/hero/frontpage_dokuapp.png";
import medicalChatbot from "../assets/benefits/medical_chatbot.png";
import attestHelper from "../assets/benefits/attest_helper.png";
import smartPhrases from "../assets/benefits/smart_phrases.png";
import { collabContent } from "../constants";

const HighlightedText = ({ children, color }) => (
  <span className={`${color} hover:underline hover:opacity-80 transition-all duration-200 cursor-default`}>
    {children}
  </span>
);

const processText = (text) => {
  const words = text.split(' ');
  return words.map((word, index) => {
    // Blue highlights - Innovation, AI, and key features
    if (['AI-teknologi', 'AI-assisteret', 'transskriberer', 'præcist', 'DokuDok', 'state-of-the-art', 'talegenkendelse', 'Chatbot', 'multimodal'].includes(word)) {
      return <HighlightedText key={index} color="text-blue-500">{word} </HighlightedText>;
    }
    
    // Orange highlights - Efficiency and impact
    if (['hurtigere', 'præcis', 'Effektiv', 'Automatisering', 'spar', 'tid', 'frasekartotek', 'Smarte'].includes(word)) {
      return <HighlightedText key={index} color="text-orange-400">{word} </HighlightedText>;
    }

    // Green highlights - Security and compliance
    if (['IT-sikkerhed', 'beskyttelse', 'compliance', 'krypteret', 'datatransmission', 'GDPR-compliant'].includes(word)) {
      return <HighlightedText key={index} color="text-green-500">{word} </HighlightedText>;
    }

    return word + ' ';
  });
};

const FeatureCard = ({ item, index }) => {
  const hasImage = item.id === "1" || item.id === "2" || item.id === "3" || item.id === "4";
  const imageUrl = item.id === "1" ? frontpageDokuapp 
                : item.id === "2" ? attestHelper
                : item.id === "3" ? medicalChatbot 
                : item.id === "4" ? smartPhrases
                : null;
  
  return (
    <div className="bg-white/[0.03] rounded-2xl p-8 hover:bg-white/[0.05] transition-colors">
      <div className={`flex flex-col ${hasImage ? 'lg:flex-row gap-12' : ''}`}>
        <div className={`${hasImage ? 'lg:w-[45%]' : 'w-full'} flex flex-col justify-center`}>
          <h3 className="h4 mb-4">{processText(item.title)}</h3>
          <p className="body-2 mb-6 text-n-4">{processText(item.text)}</p>
          <div className="border-t border-n-6 pt-6">
            <ul className="space-y-4">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <img src={check} width={24} height={24} alt="check" />
                  <p className="body-2">{processText(feature)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {hasImage && (
          <div className="lg:w-[55%]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src={imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Section id="features">
      <div className="container">
        <div className="relative z-1">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="h1 mb-4 md:mb-8">
              Funktionaliteter der gør en forskel
            </h1>
            <p className="body-1 text-n-4 md:max-w-3xl mx-auto">
              {processText("DokuDok kombinerer avanceret AI-teknologi med brugervenlige funktioner, der sparer tid, reducerer arbejdsbyrden og forbedrer kvaliteten af dokumentationen i sundhedssektoren.")}
            </p>
          </div>

          <div className="grid gap-8">
            {collabContent.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="text-center mt-16 pt-16 border-t border-n-6">
            <h3 className="h3 mb-4">
              Med alle DokuDoks funktionaliteter
            </h3>
            <p className="body-1 text-n-4 md:max-w-2xl mx-auto">
              gør du AI til din nye kollega - en trofast & produktiv klinikassistent lige ved hånden
            </p>
          </div>

          <div className="relative max-w-full mx-auto mt-16 p-0.5 rounded-2xl overflow-hidden bg-white">
            <div className="relative z-1 flex flex-col items-start h-auto mb-5 p-8 bg-white hover:bg-[#f8f9fa] transition-all duration-200 rounded-2xl border border-[#e5e7eb] hover:border-[#e5e7eb] hover:shadow-lg lg:p-20 xl:h-auto">
              <div className="relative z-1 w-full mb-8">
                <h4 className="h4 mb-4">Din personlige AI-klinikassistent</h4>
                <ul className="body-2">
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">Automatisk attestskrivning med vores AttestHjælper</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">AI-drevet journalføring</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">Transkribér både diktering eller konsultationer</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">GDPR-kompatibel, hurtig og præcis informationssøgning i lange journaler og epikriser</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">GDPR-kompatibel og isoleret medicinsk ekspert-chatbot</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">Personalisering af fraser, tilpasset klinikkens behov</p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">Dynamiske fraser og tekstfelter med dropdown-menuer</p>
                  </li>
                </ul>
                
                <div className="flex justify-center mt-8 pt-8 border-t border-n-6">
                  <Button href="/signup" className="!bg-black hover:!bg-black !text-white font-semibold">
                    Få adgang til løsningen nu!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
