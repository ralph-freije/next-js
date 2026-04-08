import { Rocket, Cpu, Cloud, Shield } from "lucide-react";

const features = [
  { title: "Fast Development", icon: Rocket },
  { title: "Scalable Architecture", icon: Cpu },
  { title: "Cloud Ready", icon: Cloud },
  { title: "Secure Systems", icon: Shield },
];

export default function AboutFeatures() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-10 text-black">
          Why Choose Us
        </h2>

        <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">

          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
              >
                <Icon className="text-green-500 mb-3" size={28} />
                <p>{f.title}</p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}