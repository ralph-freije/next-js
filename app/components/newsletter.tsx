"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-[#0a1a3a] py-12">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Stay Updated 🚀
        </h2>

        <p className="text-gray-400 mb-6">
          Subscribe to get the latest jobs, updates, and exclusive offers.
        </p>

        <div className="flex items-center justify-center">

          <div className="flex w-full max-w-md bg-white rounded-lg overflow-hidden shadow-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-black outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="bg-green-500 hover:bg-green-600 px-6 text-white font-medium transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}