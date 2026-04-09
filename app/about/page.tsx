import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutStats from "../components/about/AboutStats";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutTeam from "../components/about/AboutTeam";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  const heroData = {
    title: "About Us",
    description: "We are a creative agency...",
  };

  const missionData = {
    title: "Our Mission",
    description:
      "Our goal is to simplify development workflows and empower developers to build high-quality applications faster.",
    image: "/images/aboutus.jpg",
    imageAlt: "Our mission",
  };

  const statsData = [
    { label: "Projects Built", value: "120+", icon: "BarChart3" },
    { label: "Active Users", value: "10K+", icon: "Users" },
    { label: "Performance Boost", value: "95%", icon: "TrendingUp" },
    { label: "Uptime", value: "99.9%", icon: "ShieldCheck" },
  ] as const;

  const featuresData = {
    title: "Why Choose Us",
    items: [
      { title: "Fast Development", icon: "Rocket" },
      { title: "Scalable Architecture", icon: "Cpu" },
      { title: "Cloud Ready", icon: "Cloud" },
      { title: "Secure Systems", icon: "Shield" },
    ] as const,
  };

const teamData = {
  title: "Our Team",
  members: [
    { id: 1, name: "ralph", role: "Frontend Developer", image: "/images/avatar.jpg" },
    { id: 2, name: "michel", role: "Backend Developer", image: "/images/avatar.jpg" },
    { id: 3, name: "peter", role: "UI/UX Designer", image: "/images/avatar.jpg" },
    { id: 4, name: "john", role: "DevOps Engineer", image: "/images/avatar.jpg" },
    { id: 5, name: "sara", role: "Product Designer", image: "/images/avatar.jpg" },
  ],
};
  const ctaData = {
    title: "Ready to work with us?",
    description: "Let’s create something impactful together.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  };

  return (
    <>
      <AboutHero {...heroData} />
      <AboutMission {...missionData} />
      <AboutStats stats={statsData} />
      <AboutFeatures {...featuresData} />
      <AboutTeam {...teamData} />
      <AboutCTA {...ctaData} />
    </>
  );
}