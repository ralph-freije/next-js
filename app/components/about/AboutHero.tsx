type Props = {
  title: string;
  description: string;
};

export default function AboutHero({ title, description }: Props) {
  return (
<section className="w-full bg-black text-white py-20 text-center">
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
    <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
  </div>
</section>
  );
}