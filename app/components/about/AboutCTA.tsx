import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full py-16 bg-[#0a1a3a] text-center text-white">

      <h2 className="text-3xl font-semibold mb-4">
        Ready to get started?
      </h2>

      <p className="text-gray-400 mb-6">
        Join us and build something amazing today.
      </p>

      <Link
        href="/"
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>

    </section>
  );
}