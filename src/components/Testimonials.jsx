import Section from "./Section";

const testimonials = [
  {
    content: "DokuDok har revolutioneret vores arbejdsgang. Vi sparer mindst en time dagligt på dokumentation, hvilket giver os mere tid til patienterne.",
    author: "Hans Hanehøj",
    role: "Praktiserende læge, Allerød Sundhedshus",
    highlight: "sparer mindst en time dagligt"
  },
  {
    content: "Systemet er utroligt intuitivt, og supporten er fantastisk. Det tog kun få dage før hele klinikken var fortrolig med platformen.",
    author: "Zella Kassøe Juhl",
    role: "Praktiserende læge, Amalielægerne Horsens",
    highlight: "utroligt intuitivt"
  },
  {
    content: "Den bedste investering vi har gjort for klinikken. Dokumentationen er blevet mere præcis, og vi kan fokusere på det vigtigste - vores patienter.",
    author: "Sidsel Böcher",
    role: "Praktiserende læge, Allerød Sundhedshus",
    highlight: "bedste investering"
  }
];

const Testimonials = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container">
        <div className="max-w-[90%] mx-auto mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#1E9AFC] to-[#1A75FF] bg-clip-text text-transparent text-center">
            Det siger vores kunder
          </h3>
          <p className="text-n-4 text-lg text-center mb-16">
            Hør hvordan DokuDok har hjulpet andre klinikker med at optimere deres hverdag
          </p>
          
          <div className="flex flex-col gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block text-6xl mb-4 text-[#1E9AFC]">
                    "
                  </div>
                  <p className="text-xl leading-relaxed mb-6">
                    {testimonial.content.split(testimonial.highlight).map((part, i, arr) => (
                      <>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-[#1E9AFC]">
                            {testimonial.highlight}
                          </span>
                        )}
                      </>
                    ))}
                  </p>
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-n-4">{testimonial.role}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1E9AFC]/5 to-[#1A75FF]/5 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#1E9AFC]/30 to-[#1A75FF]/30 flex items-center justify-center">
                        <span className="text-6xl">{"🗣️"}</span>
                      </div>
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

export default Testimonials; 