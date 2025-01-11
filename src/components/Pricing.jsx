import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";

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
        </div>

      </div>
    </Section>
  );
};

export default Pricing;
