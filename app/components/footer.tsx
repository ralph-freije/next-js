import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

        <div className="flex flex-col gap-3">

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-sm text-gray-400">
            Internship project using Next.js & Tailwind.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="cursor-pointer transition duration-300 hover:text-white">
            Privacy
          </a>
          <a href="#" className="cursor-pointer transition duration-300 hover:text-white">
            Terms
          </a>
          <a href="#" className="cursor-pointer transition duration-300 hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}