import Link from "next/link";
type CTAProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

export default function CTA({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: CTAProps) {
  return (
    <section className="w-full bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>

        <p className="mb-8 text-gray-300 max-w-xl mx-auto">{description}</p>

        
<div className="flex justify-center gap-4 flex-wrap">
  <Link href="/services">
    <button className="cursor-pointer rounded-lg bg-white px-6 py-3 text-black transition duration-300 hover:bg-gray-200">
      {primaryButtonText}
    </button>
  </Link>

  <Link href="/contact">
    <button className="cursor-pointer rounded-lg border border-white px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
      {secondaryButtonText}
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}