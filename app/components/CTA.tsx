export default function CTA() {
  return (
    <section className="w-full bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Want to see how it all works?
        </h2>

        <p className="mb-8 text-gray-300 max-w-xl mx-auto">
          Dive deeper into our features and understand how you can build scalable,
          modern applications with ease.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="cursor-pointer rounded-lg bg-white px-6 py-3 text-black transition duration-300 hover:bg-gray-200">
            Explore Features
          </button>

          <button className="cursor-pointer rounded-lg border border-white px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}