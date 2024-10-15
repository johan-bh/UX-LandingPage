import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">

        <Heading
          tag="Kom i gang med DokuDok"
          title="Skriv dig op til vores betaprogram"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            Se de fulde detaljer
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Pricing;
