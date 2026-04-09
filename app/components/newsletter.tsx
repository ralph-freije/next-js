"use client";

import { useState } from "react";

type NewsletterProps = {
  title: string;
  description?: string;
  className?: string;
  placeholder?: string;
  buttonText?: string;
};

export default function Newsletter({
  title,
  description,
  className,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#0a1a3a] py-12 text-center">
      <h2 className={`text-2xl font-semibold text-white mb-2 ${className ?? ""}`}>
        {title}
      </h2>

      {description && <p className="text-gray-400 mb-6">{description}</p>}

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-md bg-white rounded-lg overflow-hidden shadow-md">
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-4 py-3 text-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

         <button
  onClick={() => alert(`Subscribed: ${email}`)}
  className="bg-green-500 hover:bg-green-600 px-6 text-white font-medium transition"
>
  {buttonText}
</button>
        </div>
      </div>
    </section>
  );
}