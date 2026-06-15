"use client";

import { useEffect, useRef } from "react";
import { getCatalogRequestLink } from "@/utils/whatsapp";
import { CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in text block from left
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Fade in images from right
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    "Located in Sarafa Bazar, Jabalpur's leading clothing wholesale point.",
    "Ready-to-dispatch stock of 10,000+ shirts at any given day.",
    "Tied up with 15+ local transport bus and cargo networks.",
    "Zero hidden fees. Net wholesale billing with GST options.",
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 sm:py-24 bg-light-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting */}
          <div ref={textRef} className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
                About Our Hub
              </h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
                Serving Retail Businesses from Sarafa, Jabalpur
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-grey-custom leading-relaxed">
              We help retailers, garment shop owners, and clothing resellers get quality men's shirts at competitive wholesale rates without intermediate margins. Based in the heart of Sarafa Bazar, Jabalpur, we act as the direct stock-point for buyers across Madhya Pradesh.
            </p>

            <p className="text-sm sm:text-base text-grey-custom leading-relaxed">
              Our business model is simple: **we do not manufacture shirts ourselves.** Instead, we source directly from the country's finest shirt hubs in bulk, filter out poor-stitch pieces, and stock the best varieties locally. This gives you top-tier quality at wholesale rates, with the convenience of local delivery.
            </p>

            {/* List of Highlights */}
            <ul className="space-y-3 pt-2">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-dark font-medium">
                  <CheckCircle2 size={18} className="text-brown flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            {/* CTA block */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={getCatalogRequestLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy text-white text-sm font-bold shadow-md hover:bg-brown transition-colors duration-300"
              >
                <MessageSquare size={16} />
                <span>Contact Our Sarafa Office</span>
              </a>
              <div className="flex items-center gap-2.5 text-xs text-grey-custom font-semibold">
                <ShieldCheck size={18} className="text-brown" />
                <span>100% Reliable Transport Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery Grid */}
          <div ref={imageRef} className="lg:col-span-6 grid grid-cols-12 gap-4">
            {/* Large main image */}
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-lg aspect-[4/5] relative group">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
                alt="Wholesale Stock Room"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-100 p-6 flex items-end">
                <div>
                  <h4 className="text-white text-base font-bold">SRS Shirts Stock Point</h4>
                  <p className="text-gray-300 text-xs">Serving Madhya Pradesh Retailers</p>
                </div>
              </div>
            </div>

            {/* Column with 2 small stacked images */}
            <div className="col-span-4 flex flex-col gap-4">
              
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[1/1] relative group bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1620012253295-c05cb3e65228?q=80&w=300&auto=format&fit=crop"
                  alt="Checked shirts stock"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md aspect-[1/1] relative group bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=300&auto=format&fit=crop"
                  alt="Folded shirts collection"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="bg-navy rounded-2xl p-4 flex flex-col justify-center text-center text-white aspect-[1/1] shadow-md">
                <span className="text-2xl font-bold font-display text-brown">10k+</span>
                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-1">Ready Shirts</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
