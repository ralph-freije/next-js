"use client";

import { BarChart3, Users, TrendingUp, ShieldCheck } from "lucide-react";

type StatItem = {
  label: string;
  value: string;
  icon: "BarChart3" | "Users" | "TrendingUp" | "ShieldCheck";
};

type AboutStatsProps = {
  stats: readonly StatItem[];
};

const iconMap = {
  BarChart3,
  Users,
  TrendingUp,
  ShieldCheck,
};

export default function AboutStats({ stats }: AboutStatsProps) {
  return (
    <section className="w-full py-16 bg-[#0a1a3a] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];

          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-4 rounded-lg transition hover:bg-white/5"
            >
              <Icon className="text-green-400" size={28} />
              <h3 className="text-3xl font-bold text-green-400">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}