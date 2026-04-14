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
      category: "Development",
    },
    {
      title: "Mobile Apps",
      desc: "iOS & Android applications with great UX.",
      icon: "Smartphone",
      category: "Development",
    },
    {
      title: "UI/UX Design",
      desc: "Clean and engaging product design.",
      icon: "Palette",
      category: "Design",
    },
    {
      title: "Brand Identity",
      desc: "Create strong visual brand systems.",
      icon: "Rocket",
      category: "Design",
    },
    {
      title: "Cloud Solutions",
      desc: "Reliable deployment and infrastructure.",
      icon: "Cloud",
      category: "Cloud",
    },
    {
      title: "Database Systems",
      desc: "Efficient and scalable data management.",
      icon: "Database",
      category: "Cloud",
    },
    {
      title: "App Security",
      desc: "Protect your systems and user data.",
      icon: "ShieldCheck",
      category: "Security",
    },
    {
      title: "DevOps",
      desc: "CI/CD pipelines and automation.",
      icon: "Settings",
      category: "Security",
    },
  ] as const,
};
  const servicesData = {
  title: "What We Offer",
  services: [
    {
      title: "Web Development",
      description: "Modern, fast, and scalable websites.",
      icon: "💻",
      category: "Development",
    },
    {
      title: "UI/UX Design",
      description: "Clean and engaging product design.",
      icon: "🎨",
      category: "Design",
    },
    {
      title: "Cloud Solutions",
      description: "Reliable deployment and infrastructure.",
      icon: "☁️",
      category: "Cloud",
    },
    {
      title: "App Security",
      description: "Protect your systems and user data.",
      icon: "🛡️",
      category: "Security",
    },
  ],
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