"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Creoshift logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className="cursor-pointer text-sm text-gray-400 transition duration-300 hover:text-black"
          >
            Home
          </Link>
          <Link
            href="#"
            className="cursor-pointer text-sm text-gray-400 transition duration-300 hover:text-black"
          >
            About
          </Link>
          <Link
            href="#"
            className="cursor-pointer text-sm text-gray-400 transition duration-300 hover:text-black"
          >
            Services
          </Link>
          <Link
            href="#"
            className="cursor-pointer text-sm text-gray-400 transition duration-300 hover:text-black"
          >
            Contact
          </Link>
        </nav>

        <button
          className="cursor-pointer text-2xl md:hidden"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[250px] transform bg-white shadow-lg transition duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          <button
            className="self-end text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <Link href="/" className="cursor-pointer text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="#" className="cursor-pointer text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="#" className="cursor-pointer text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="#" className="cursor-pointer text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}