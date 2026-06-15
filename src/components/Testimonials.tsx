"use client";

import { useEffect, useState, useRef } from "react";
import { TESTIMONIALS } from "@/utils/data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = TESTIMONIALS.length;

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Reset autoplay timer whenever activeIdx changes
  useEffect(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIdx]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-frame",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".testimonial-frame",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-20 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Retailer Feedback
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Trusted by Shop Owners Across MP
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            Read stories from actual garment shop owners and retail resellers in Madhya Pradesh who source their bulk shirt stocks from our Jabalpur warehouse.
          </p>
        </div>

        {/* Carousel Frame */}
        <div className="testimonial-frame relative max-w-4xl mx-auto bg-light-bg rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md">
          
          {/* Decorative Large Quote Icon */}
          <div className="absolute top-6 left-6 text-gray-200 pointer-events-none opacity-30">
            <Quote size={80} className="fill-current" />
          </div>

          {/* Testimonial Content with Slide transition effect */}
          <div className="relative min-h-[14rem] sm:min-h-[12rem] flex flex-col justify-center">
            {TESTIMONIALS.map((test, idx) => (
              <div
                key={test.id}
                className={`transition-all duration-500 ease-in-out absolute inset-0 flex flex-col justify-between ${
                  idx === activeIdx
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : "opacity-0 translate-x-10 scale-95 pointer-events-none z-0"
                }`}
              >
                {/* Review Text */}
                <p className="text-base sm:text-lg md:text-xl text-dark font-medium leading-relaxed italic mb-6">
                  "{test.text}"
                </p>

                {/* Reviewer Details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200/50 pt-5">
                  <div>
                    <h4 className="font-bold text-dark text-base sm:text-lg">
                      {test.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-grey-custom font-semibold">
                      {test.shopName} • <span className="text-navy">{test.city}, MP</span>
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < test.rating
                            ? "text-brown fill-brown"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute right-6 top-6 sm:top-auto sm:bottom-10 sm:right-10 flex gap-2 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-dark flex items-center justify-center hover:bg-navy hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-dark flex items-center justify-center hover:bg-navy hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIdx ? "w-8 bg-brown" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
