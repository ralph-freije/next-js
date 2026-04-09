import { Rocket, Cpu, Cloud, Shield } from "lucide-react";

type FeatureItem = {
  title: string;
  icon: "Rocket" | "Cpu" | "Cloud" | "Shield";
};

type AboutFeaturesProps = {
  title: string;
  items: readonly FeatureItem[];
};

const iconMap = {
  Rocket,
  Cpu,
  Cloud,
  Shield,
};

export default function AboutFeatures({
  title,
  items,
}: AboutFeaturesProps) {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-black">{title}</h2>

        <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
              >
                <Icon className="text-green-500 mb-3" size={28} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}