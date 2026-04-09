import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesPricing from "../components/services/ServicesPricing";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  const heroData = {
    title: "Our Services",
    description: "Explore the solutions we offer to help grow your business.",
  };

  const servicesGridData = {
    title: "What We Offer",
    services: [
      {
        title: "Web Development",
        desc: "Modern, fast, and scalable websites.",
        icon: "Code2",
      },
      {
        title: "UI/UX Design",
        desc: "Clean and engaging product design.",
        icon: "Palette",
      },
      {
        title: "Cloud Solutions",
        desc: "Reliable deployment and infrastructure.",
        icon: "Cloud",
      },
      {
        title: "App Security",
        desc: "Protect your systems and user data.",
        icon: "ShieldCheck",
      },
    ] as const,
  };

  const processData = {
    title: "How It Works",
    steps: [
      { title: "Consultation" },
      { title: "Planning" },
      { title: "Development" },
      { title: "Launch" },
    ],
  };

  const pricingData = {
    title: "Pricing Plans",
    plans: [
      {
        name: "Basic",
        price: "$99",
        features: ["Website", "Responsive Design", "Email Support"],
      },
      {
        name: "Pro",
        price: "$199",
        features: ["Everything in Basic", "API Integration", "Priority Support"],
      },
      {
        name: "Enterprise",
        price: "$399",
        features: ["Custom Solutions", "Full Support", "Cloud Deployment"],
      },
    ],
    buttonText: "Choose Plan",
  };

  const ctaData = {
    title: "Ready to start your project?",
    description: "Let’s build something amazing together.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  };

  return (
    <>
      <ServicesHero {...heroData} />
      <ServicesGrid {...servicesGridData} />
      <ServicesProcess {...processData} />
      <ServicesPricing {...pricingData} />
      <ServicesCTA {...ctaData} />
    </>
  );
}