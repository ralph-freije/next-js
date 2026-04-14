"use client";

import { useState } from "react";
import { Code2, Palette, Cloud, ShieldCheck, Smartphone, Database, Rocket, Settings } from "lucide-react";

type ServiceItem = {
  title: string;
  desc: string;
  icon:
    | "Code2"
    | "Palette"
    | "Cloud"
    | "ShieldCheck"
    | "Smartphone"
    | "Database"
    | "Rocket"
    | "Settings";
  category: string;
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
  Smartphone,
  Database,
  Rocket,
  Settings,
};

export default function ServicesGrid({
  title,
  services,
}: ServicesGridProps) {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filtered =
    active === "All"
      ? services
      : services.filter((s) => s.category === active);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          {title}
        </h2>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer ${
                active === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((s, i) => {
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