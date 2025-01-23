import Section from "./Section";
import Button from "./Button";

const TrialCTA = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container">
        <div className="max-w-[90%] mx-auto">
          <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#1E9AFC]/20 to-[#1A75FF]/20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Se det selv – prøv gratis i 14 dage!
              </h3>
              <p className="text-n-4 text-lg mb-8 max-w-2xl mx-auto">
                Oplev hvordan DokuDok kan effektivisere din kliniks dokumentation. Ingen binding eller kreditkort påkrævet.
              </p>
              <Button href="/signup" className="min-w-[200px] !bg-black hover:!bg-black !text-white">
                Start din gratis prøveperiode nu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrialCTA; 