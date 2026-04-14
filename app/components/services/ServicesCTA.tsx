"use client";

import { useState } from "react";

type ServicesCTAProps = {
  title: string;
  description: string;
  buttonText: string;
};

export default function ServicesCTA({
  title,
  description,
  buttonText,
}: ServicesCTAProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full py-16 bg-[#0a1a3a] text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>

        <p className="text-gray-400 mb-6">{description}</p>

        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg cursor-pointer"
        >
          {buttonText}
        </button>
      </section>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative text-black">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded outline-none"
              />

              <textarea
                placeholder="Your Message"
                className="border p-3 rounded outline-none"
                rows={4}
              />

              <button
                type="submit"
                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white py-3 rounded"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}