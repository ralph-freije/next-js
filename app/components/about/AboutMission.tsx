import Image from "next/image";

type AboutMissionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export default function AboutMission({
  title,
  description,
  image,
  imageAlt = "Our mission",
}: AboutMissionProps) {
  return (
    <section className="w-full py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="cursor-pointer relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}