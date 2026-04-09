import { Cpu, Layers, Palette } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  icon: "Cpu" | "Layers" | "Palette";
};

type FeaturesProps = {
  title: string;
  description: string;
  items: FeatureItem[];
};

const iconMap = {
  Cpu,
  Layers,
  Palette,
};

export default function Features({
  title,
  description,
  items,
}: FeaturesProps) {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black">{title}</h2>
          <p className="mt-3 text-gray-500">{description}</p>
        </div>

        <div className="cursor-pointer grid gap-10 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={index}
                className="group rounded-xl border p-6 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <Icon className="mb-4 h-10 w-10 text-black transition group-hover:text-blue-600" />

                <h3 className="text-xl font-semibold mb-2 text-black">
                  {item.title}
                </h3>

                <p className="text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}