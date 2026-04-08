import Banner from "./components/banner";
import Features from "./components/features";
import CTA from "./components/CTA";
import HeroSlider from "./components/HeroSlider";
import Newsletter from "./components/newsletter";

export default function Page() {
  return (
    <>
    <HeroSlider />
      <Banner />
      <Features />
      <CTA />
      <Newsletter />
    </>
  );
}