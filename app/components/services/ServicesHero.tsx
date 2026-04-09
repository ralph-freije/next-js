type ServicesHeroProps = {
  title: string;
  description: string;
};

export default function ServicesHero({
  title,
  description,
}: ServicesHeroProps) {
  return (
    <section className="w-full py-20 bg-[#0a1a3a] text-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
    </section>
  );
}