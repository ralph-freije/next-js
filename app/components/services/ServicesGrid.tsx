import { Code2, Palette, Cloud, ShieldCheck } from "lucide-react";

type ServiceItem = {
  title: string;
  desc: string;
  icon: "Code2" | "Palette" | "Cloud" | "ShieldCheck";
};

type ServicesGridProps = {
  title: string;
  services: readonly ServiceItem[];
};

const iconMap = {
  Code2,
  Palette,
  Cloud,
  ShieldCheck,
};

export default function ServicesGrid({
  title,
  services,
}: ServicesGridProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-black mb-10">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];

            return (
              <div
                key={i}
                className="cursor-pointer bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <Icon className="text-green-500 mb-4" size={30} />

                <h3 className="font-semibold text-black mb-2">{s.title}</h3>

                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}