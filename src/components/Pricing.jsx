import Section from "./Section";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative">
          <PricingList />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
