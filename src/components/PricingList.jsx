import { check } from "../assets";
import Button from "./Button";

const pricing = [
  {
    id: 1,
    title: "Basic",
    description: "AI-drevet journalføring og dokumenthåndtering.",
    price: "1099",
    features: [
      "AI-drevet journalføring og transkribering",
      "Personalisering af fraser tilpasset klinikkens behov",
      "Dynamiske fraser med dropdown-menuer",
    ],
  },
  {
    id: 2,
    title: "Premium",
    description: "Avanceret AI-drevet Attest Hjælper  og medicinsk ekspert chatbot.",
    price: "1499",
    features: [
      "Alle funktioner fra Basic-planen",
      "Opsummering af komplekse dokumenter",
      "Automatisk attestskrivning med vores Attest Hjælper",
      "GDPR-kompatibel og isoleret medicinsk ekspert-chatbot",
    ],
  },
];

const PricingList = () => {
  return (
    <div className="container mx-auto text-center mb-12">
      {/* Introductory Text */}
      <h2 className="text-3xl font-bold mb-4">Vælg den løsning der passer til dig og din klinik</h2>
      <p className="text-lg text-gray-600">
        DokuDok tilbyder fleksible AI-løsninger, der sparer dig tid og gør journalisering lettere.
      </p>
      <p className="text-lg text-gray-600">Find den perfekte plan til dine behov!</p>
      <br />
      <div className="flex justify-center items-center gap-[1rem] max-lg:flex-wrap mx-auto mt-8">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-white border border-[#e5e7eb] rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 hover:shadow-lg transition-all duration-200"
          >
            <h4 className="h4 mb-4">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                  <div className="h3">DKK / måned</div>
                </>
              )}
            </div>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
