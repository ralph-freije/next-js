"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `cursor-pointer text-sm transition duration-300 ${
      isActive(path)
        ? "text-black font-semibold border-b-2 border-green-500 pb-1"
        : "text-gray-400 hover:text-black"
    }`;

  const mobileLinkClass = (path: string) =>
    `cursor-pointer transition ${
      isActive(path)
        ? "text-green-500 font-semibold"
        : "text-gray-700 hover:text-black"
    }`;

  return (
    <header className="relative z-[1000] w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
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
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
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

      {open &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/50"
              style={{ zIndex: 9999 }}
              onClick={() => setOpen(false)}
            />
            <div
              className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transition duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ zIndex: 10000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 p-6">
                <button
                  className="self-end text-xl cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>

                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass("/")}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass("/about")}
                >
                  About
                </Link>

                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass("/services")}
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass("/contact")}
                >
                  Contact
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </header>
  );
}