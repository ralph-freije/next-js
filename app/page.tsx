import Banner from "./components/banner";
import Features from "./components/features";
import CTA from "./components/CTA";
import HeroSlider from "./components/HeroSlider";
import Newsletter from "./components/newsletter";

export default function Page() {
  const bannerData = {
    tag: "Welcome to the app",
    title: "Navigate Our Next.js Project with Ease",
    description: "Clean UI, reusable components, scalable structure.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Learn More",
    image: "/images/banner-image.jpg",
    imageAlt: "banner",
  };

const featuresData = {
  title: "Our Features",
  description: "Everything you need to build modern apps",
  items: [
    {
      title: "Fast Development",
      description: "Build apps quickly with Next.js powerful features.",
      icon: "Cpu" as const,
    },
    {
      title: "Reusable Components",
      description: "Clean structure with reusable UI elements.",
      icon: "Layers" as const,
    },
    {
      title: "Modern Design",
      description: "Styled using Tailwind CSS for flexibility.",
      icon: "Palette" as const,
    },
  ],
};

  const ctaData = {
    title: "Want to see how it all works?",
    description:
      "Dive deeper into our features and understand how you can build scalable, modern applications with ease.",
    primaryButtonText: "Explore Features",
    secondaryButtonText: "Contact Us",
  };

  const newsletterData = {
    title: "Stay Updated 🚀",
    description: "",
    className: "text-2xl md:text-3xl font-semibold text-white mb-2",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  };

  return (
    <>
      <HeroSlider />
      <Banner {...bannerData} />
      <Features {...featuresData} />
      <CTA {...ctaData} />
      <Newsletter {...newsletterData} />
    </>
  );
}