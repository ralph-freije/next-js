import Image from "next/image";
import Link from "next/link";
type BannerProps = {
  tag: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  image: string;
  imageAlt?: string;
};

export default function Banner({
  tag,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  image,
  imageAlt = "banner",
}: BannerProps) {
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            {tag}
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-black md:text-5xl">
            {title}
          </h2>

          <p className="mb-8 max-w-xl text-gray-600">{description}</p>

         <div className="flex gap-4">
  <Link href="/services">
    <button className="cursor-pointer rounded-lg bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800">
      {primaryButtonText}
    </button>
  </Link>

  <Link href="/about">
    <button className="cursor-pointer rounded-lg border border-black px-6 py-3 text-black transition duration-300 hover:bg-black hover:text-white">
      {secondaryButtonText}
    </button>
  </Link>
</div>
        </div>

        <div className="flex justify-center">
          <div className="cursor-pointer relative h-[320px] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-lg">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}