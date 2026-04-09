"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type AboutFAQProps = {
  title: string;
  faqs: FAQItem[];
};

export default function AboutFAQ({ title, faqs }: AboutFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-black mb-10">
          {title}
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-black">
                  {faq.question}
                </span>

                <span className="text-xl text-black cursor-pointer">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}