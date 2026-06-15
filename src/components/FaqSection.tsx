"use client";

import { useState } from "react";
import { FAQS } from "@/utils/data";
import { Plus, Minus, FileText } from "lucide-react";
import { getCatalogRequestLink } from "@/utils/whatsapp";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Questions & Answers
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm sm:text-base text-grey-custom leading-relaxed max-w-xl mx-auto">
            Find answers to common questions about our wholesale orders, transportation networks, catalog access, and payment procedures.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden transition-all duration-300 hover:border-gray-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-dark text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-light-bg flex items-center justify-center text-dark transition-all duration-300 ${
                      isOpen ? "bg-navy text-white rotate-180" : ""
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Body using CSS grid transition for height */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-xs sm:text-sm text-grey-custom border-t border-gray-50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-xs max-w-2xl mx-auto">
          <p className="text-sm text-dark font-semibold mb-4">
            Still have questions about custom sizing, shipping, or special wholesale prices?
          </p>
          <a
            href={getCatalogRequestLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-md hover:bg-[#20ba56] transition-colors"
          >
            <FileText size={16} />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
