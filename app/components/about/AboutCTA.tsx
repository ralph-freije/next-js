import Link from "next/link";

type AboutCTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function AboutCTA({
  title,
  description,
  buttonText,
  buttonHref,
}: AboutCTAProps) {
  return (
    <section className="w-full py-16 bg-[#0a1a3a] text-center text-white">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>

      <p className="text-gray-400 mb-6">{description}</p>

      <Link
        href={buttonHref}
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
      >
        {buttonText}
      </Link>
    </section>
  );
}