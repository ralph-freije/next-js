export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">

        <div>
          <h3 className="text-xl font-bold">Creoshift</h3>
          <p className="mt-2 text-sm text-gray-400">
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