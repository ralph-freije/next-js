import { Code, Smartphone, Cloud, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern and responsive web applications built with the latest technologies.",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable and secure cloud infrastructure and deployments.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    desc: "Protect your systems with advanced security solutions.",
    icon: Shield,
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-10 text-black">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                className="cursor-pointer p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <Icon className="text-green-500 mb-4" size={30} />

                <h3 className="font-semibold text-black mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {s.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}