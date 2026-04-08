import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesPricing from "../components/services/ServicesPricing";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesCTA />
    </>
  );
}