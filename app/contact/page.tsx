"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setSuccess("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen bg-[#0a1a3a] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-semibold text-black mb-2 text-center">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mb-6">
          We'd love to hear from you. Send us a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="text-black px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="text-black px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="text-black px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-3 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-sm text-center text-green-500 mt-2">
              {success}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}