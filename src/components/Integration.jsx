import Section from "./Section";

const integrationPoints = [
  {
    title: "Ingen IT-kompleksitet",
    description: "Vores løsning kører parallelt med dit eksisterende system – ingen integration eller opsætning nødvendig. Tilgå blot vores brugerplatform via din foretrukne browser og log ind med MitID.",
    icon: "🔌"
  },
  {
    title: "Hurtig opsætning",
    description: "Kom i gang på under 30 minutter. Vi guider dig gennem hele processen og hjælper med at tilpasse løsningen til din klinik. Med vores demovideoer kan du hurtigt mestre alle funktioner.",
    icon: "⚡"
  },
  {
    title: "Problemfri overgang",
    description: "Bevar dine eksisterende arbejdsgange og tilføj blot DokuDok som et effektivt supplement til din dagligdag. Vi tilbyder en større frasekartotek, men du kan også tilføje dine egne fraser.",
    icon: "✨"
  }
];

const Integration = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container">
        <div className="max-w-[90%] mx-auto mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent text-center">
            Nem integration og hurtig opstart
          </h3>
          <p className="text-n-4 text-lg text-center mb-16">
            Kom nemt i gang med DokuDok – uanset hvilket system du bruger i dag
          </p>
          
          <div className="flex flex-col gap-16">
            {integrationPoints.map((point, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block text-4xl mb-4 bg-n-1 rounded-full p-4 shadow-lg">
                    {point.icon}
                  </div>
                  <h4 className="h4 mb-4">{point.title}</h4>
                  <p className="text-n-4 text-lg leading-relaxed">{point.description}</p>
                </div>
                <div className="w-full md:w-1/2 bg-n-1 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                  <div className="relative w-full h-full bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 rounded-xl">
                    {/* Placeholder for potential illustrations or animations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Integration; 