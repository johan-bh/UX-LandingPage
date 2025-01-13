import React, { useState } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#e5e7eb] rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`px-6 transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        } overflow-hidden bg-white`}
      >
        <p className="text-gray-600 whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "Hvad er DokuDok?",
      answer: "DokuDok er et AI-baseret værktøj, der hjælper sundhedsprofessionelle med at reducere administrative opgaver. Funktionerne inkluderer transskription, generering af journaludkast og attestudkast samt chatbot-assistance."
    },
    {
      question: "Hvordan sikrer DokuDok datasikkerhed?",
      answer: "DokuDok overholder GDPR og sikrer data med kryptering (TLS/HTTPS). Data gemmes midlertidigt (op til 24 timer på lokale servere eller op til 14 dage på AWS, såfremt lægen markerer for kvalitetstjek eller fejlretning)."
    },
    {
      question: "Hvilken type data behandler DokuDok?",
      answer: "DokuDok behandler:\n\n• Lydoptagelser (f.eks. konsultationer og diktater)\n• Tekstinput (f.eks. journaluddrag eller noter)\n• Chatdata fra chatbot-funktionen"
    },
    {
      question: "Hvor længe opbevares mine data?",
      answer: "• Op til 24 timer som standard\n• Op til 14 dage, hvis lægen har markeret data til kvalitetstjek eller fejlretning\n• Fuldt anonymiserede data kan bruges til videreudvikling"
    },
    {
      question: "Hvem ejer dataene?",
      answer: "Kunden ejer dataene. DokuDok fungerer som databehandler og bruger kun anonymiserede data til at forbedre tjenesten."
    },
    {
      question: "Kan jeg bruge DokuDoks output direkte?",
      answer: "Nej, DokuDok skal anses som værende et produktivitetsværktøj. Alt AI-genereret output bør gennemgås og valideres af lægen for at sikre nøjagtighed og overholdelse af lovkrav. Lægen har ansvaret for at sikre kvaliteten."
    },
    {
      question: "Hvordan får jeg support?",
      answer: "Support er tilgængelig mandag til fredag kl. 9:00–17:00.\n\nKontakt os via:\n\n• Teknisk support: +45 2825 8666 eller +45 4182 1162\n• E-mail: security@dokudok.dk"
    },
    {
      question: "Er DokuDok GDPR-kompatibel?",
      answer: "Ja, DokuDok overholder GDPR med krypteret datatransmission, adgangskontrol og slettepolitikker. Fuldt anonymiserede data er ikke længere underlagt GDPR."
    },
    {
      question: "Bruger DokuDok tredjepartstjenester?",
      answer: "Ja, vi gør brug af AWS (i Frankfurt), som bruges til inferens af vores AI-modeller samt eventuel midlertidig datalagring, når nødvendigt. Alle tjenester er GDPR-kompatible. Tilfælde af servernedbrug i Frankfurt, vil vi kortvarigt gøre brug af en AWS-server i Paris."
    },
    {
      question: "Hvordan tilgår man jeres service?",
      answer: "Så snart vi modtager jeres kliniks IP addresse vil vi whiteliste den, sådan at i kan tilgå vores brugerplatform app.dokudok.dk. På denne platform kan i blot logge ind med MitID - er det første gang du logger ind vil du her blive bedt underskrive vores databehandleraftale."
    },
    {
      question: "Kan jeg prøve DokuDok før jeg abonnerer?",
      answer: "Ja, en prøveversion er tilgængelig. De samme vilkår gælder, men der er ingen betalingsforpligtelse i prøveperioden."
    },
    {
      question: "Hvad sker der ved et databrud?",
      answer: "I tilfælde af et brud vil DokuDok underrette kunden inden for 24 timer og assistere med rapportering til de relevante myndigheder."
    }
  ];

  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <Heading
          tag="FAQ"
          title="Ofte stillede spørgsmål"
          text="Find svar på de mest almindelige spørgsmål om DokuDok og vores services."
        />
        
        <div className="mt-10 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
