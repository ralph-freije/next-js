import { Cpu, Layers, Palette } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black">Our Features</h2>
          <p className="mt-3 text-gray-500">
            Everything you need to build modern apps
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="group rounded-xl border p-6 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-2">

            <Cpu className="mb-4 h-10 w-10 text-black transition group-hover:text-blue-600" />

            <h3 className="text-xl font-semibold mb-2 text-black">
              Fast Development
            </h3>

            <p className="text-gray-500">
              Build apps quickly with Next.js powerful features.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-xl border p-6 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-2">

            <Layers className="mb-4 h-10 w-10 text-black transition group-hover:text-blue-600" />

            <h3 className="text-xl font-semibold mb-2 text-black">
              Reusable Components
            </h3>

            <p className="text-gray-500">
              Clean structure with reusable UI elements.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-xl border p-6 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-2">

            <Palette className="mb-4 h-10 w-10 text-black transition group-hover:text-blue-600" />

            <h3 className="text-xl font-semibold mb-2 text-black">
              Modern Design
            </h3>

            <p className="text-gray-500">
              Styled using Tailwind CSS for flexibility.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}