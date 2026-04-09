"use client";

import { useState } from "react";

export default function ContactPage() {
  const content = {
    title: "Contact Us",
    description: "We'd love to hear from you. Send us a message.",
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
    },
    buttonText: {
      idle: "Send Message",
      loading: "Sending...",
    },
    messages: {
      validation: "Please fill all fields",
      success: "Message sent successfully!",
    },
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setSuccess(content.messages.validation);
      return;
    }

    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess(content.messages.success);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen bg-[#0a1a3a] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-black mb-2 text-center">
          {content.title}
        </h1>

        <p className="text-gray-500 text-center mb-6">
          {content.description}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder={content.placeholders.name}
            value={form.name}
            onChange={handleChange}
            className="text-black px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder={content.placeholders.email}
            value={form.email}
            onChange={handleChange}
            className="text-black px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="message"
            placeholder={content.placeholders.message}
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
            {loading ? content.buttonText.loading : content.buttonText.idle}
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