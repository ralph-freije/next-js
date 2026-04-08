"use client";

const steps = [
  { title: "Consultation" },
  { title: "Planning" },
  { title: "Development" },
  { title: "Launch" },
];

export default function ServicesProcess() {
  return (
    <section className="w-full py-20 bg-gray-100 text-center">

      <h2 className="text-3xl font-semibold mb-14 text-black">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gray-300" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative group">
              <div className="cursor-pointer w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-lg font-bold shadow-lg transition group-hover:scale-110">
                {i + 1}
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                {step.title}
              </p>

              <div className="hidden md:block absolute top-10 w-4 h-4 bg-green-500 rounded-full" />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}