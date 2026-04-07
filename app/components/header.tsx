import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="/" className="text-2xl font-bold text-black">
          Creoshift
        </a>

        <nav className="hidden gap-6 md:flex ">
          <Link href="/" className="text-sm font-medium text-gray-400 transition duration-300 hover:text-black">Home</Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition duration-300 hover:text-black">About</Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition duration-300 hover:text-black">Services</Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition duration-300 hover:text-black">Contact</Link>
        </nav>

        <button className="rounded-lg bg-black px-6 py-3 text-white hover:opacity-90">
          Get Started
        </button>

      </div>
    </header>
  );
}