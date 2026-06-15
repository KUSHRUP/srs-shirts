"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCatalogRequestLink } from "@/utils/whatsapp";
import { ArrowRight, MessageSquare } from "lucide-react";

interface ShirtCategory {
  bgWord: string;
  image: string;
  tagline: string;
  details: Record<string, string>;
}

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const categories: ShirtCategory[] = [
    {
      bgWord: "FORMAL",
      image: "/shirt image/formal shirt.jpg",
      tagline: "Made for Office Wear",
      details: {
        Fabric: "Cotton",
        Fit: "Regular Fit",
        Sizes: "S to XXXL",
        Sleeve: "Full Sleeve",
      },
    },
    {
      bgWord: "CASUAL",
      image: "/shirt image/casual checked shirt.jpg",
      tagline: "Everyday Comfort",
      details: {
        Fabric: "Cotton Blend",
        Fit: "Relaxed Fit",
        Sizes: "S to XXXL",
        Patterns: "Checks and Solids",
      },
    },
    {
      bgWord: "LINEN",
      image: "/shirt image/beige linen shirt.jpg",
      tagline: "Light and Breathable",
      details: {
        Fabric: "Pure Linen",
        Fit: "Comfort Fit",
        Sizes: "S to XXXL",
        "Best For": "Summer Wear",
      },
    },
    {
      bgWord: "CHECKS",
      image: "/shirt image/premium checked shirt.jpg",
      tagline: "Classic Style",
      details: {
        Fabric: "Cotton",
        Fit: "Regular Fit",
        Sizes: "S to XXXL",
        Patterns: "Large and Small Checks",
      },
    },
    {
      bgWord: "PRINTED",
      image: "/shirt image/printed shirt.jpg",
      tagline: "Modern Designs",
      details: {
        Fabric: "Cotton",
        Fit: "Slim Fit",
        Sizes: "S to XXXL",
        Prints: "Floral and Abstract",
      },
    },
    {
      bgWord: "DENIM",
      image: "/shirt image/blue denim shirt.jpg",
      tagline: "Strong and Stylish",
      details: {
        Fabric: "Denim Cotton",
        Fit: "Regular Fit",
        Sizes: "S to XXXL",
        Wash: "Light and Dark",
      },
    },
    {
      bgWord: "PARTY",
      image: "/shirt image/party wear shirt.jpg",
      tagline: "Ready for Every Occasion",
      details: {
        Fabric: "Premium Blend",
        Fit: "Slim Fit",
        Sizes: "S to XXXL",
        Finish: "Soft Touch",
      },
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slidesCount = categories.length + 1; // +1 for the final screen

    const ctx = gsap.context(() => {
      // Create ScrollTrigger Timeline to pin the showcase container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${slidesCount * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Calculate active slide index based on progress
            const rawIndex = self.progress * slidesCount;
            const index = Math.min(Math.floor(rawIndex), slidesCount - 1);
            setActiveSlide(index);
          },
        },
      });

      // Animate transition of each slide
      categories.forEach((_, idx) => {
        // Timeline animations for slide elements
        tl.to(
          `.slide-image-${idx}`,
          {
            opacity: 0,
            scale: 1.05,
            yPercent: -10,
            ease: "power1.inOut",
          },
          idx // Time matching scroll position offset
        )
          .to(
            `.slide-text-${idx}`,
            {
              opacity: 0,
              xPercent: -15,
              ease: "power1.inOut",
            },
            idx
          )
          .to(
            `.slide-bgword-${idx}`,
            {
              opacity: 0,
              yPercent: 15,
              scale: 0.9,
              ease: "power1.inOut",
            },
            idx
          );

        // Slide IN next item
        if (idx < categories.length - 1) {
          tl.fromTo(
            `.slide-image-${idx + 1}`,
            { opacity: 0, scale: 0.9, yPercent: 10 },
            { opacity: 1, scale: 1, yPercent: 0, ease: "power1.inOut" },
            idx + 0.5 // staggered entry half-way through scroll of previous card
          )
            .fromTo(
              `.slide-text-${idx + 1}`,
              { opacity: 0, xPercent: 15 },
              { opacity: 1, xPercent: 0, ease: "power1.inOut" },
              idx + 0.5
            )
            .fromTo(
              `.slide-bgword-${idx + 1}`,
              { opacity: 0, yPercent: -15, scale: 1.1 },
              { opacity: 1, yPercent: 0, scale: 1, ease: "power1.inOut" },
              idx + 0.5
            );
        }
      });

      // Transition to final SRS Shirts slide
      const finalIdx = categories.length;
      tl.fromTo(
        `.slide-final`,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, ease: "power1.inOut" },
        finalIdx - 0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Wrapper to control overall scroll duration */}
      <div ref={triggerRef} className="relative w-full h-screen overflow-hidden bg-white">
        
        {/* Render each category slide */}
        {categories.map((cat, idx) => (
          <div
            key={cat.bgWord}
            className={`absolute inset-0 w-full h-full flex items-center justify-center py-20 px-6 sm:px-12 md:px-20 select-none transition-all duration-300 ${
              idx === activeSlide ? "z-20 pointer-events-auto" : "z-10 opacity-0 pointer-events-none"
            }`}
          >
            {/* Giant vertical background word */}
            <div
              className={`slide-bgword-${idx} absolute inset-0 flex items-center justify-center pointer-events-none z-0`}
            >
              <span className="text-[20vw] sm:text-[25vh] font-display font-black tracking-widest text-zinc-100/90 select-none uppercase rotate-90 md:rotate-0 md:[writing-mode:vertical-lr] scale-y-110">
                {cat.bgWord}
              </span>
            </div>

            {/* Split content frame */}
            <div className="relative z-10 w-full max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Details block */}
              <div className={`slide-text-${idx} md:col-span-4 text-left flex flex-col justify-center space-y-6 md:pr-10`}>
                <div className="space-y-2">
                  <span className="text-xs tracking-[0.2em] font-bold text-brown uppercase">
                    SRS Premium Catalog
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-extrabold text-black leading-none">
                    {cat.bgWord} SHIRT
                  </h2>
                  <p className="text-sm italic font-medium text-gray-500 font-display">
                    — {cat.tagline}
                  </p>
                </div>

                {/* Spec Points list */}
                <div className="border-y border-zinc-100 py-6 space-y-4">
                  {Object.entries(cat.details).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400 font-semibold uppercase tracking-wider">{key}</span>
                      <span className="text-black font-bold">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Slide Inquiry Actions */}
                <a
                  href={getCatalogRequestLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full md:w-auto md:max-w-fit gap-6 px-6 py-3.5 rounded-xl border border-black hover:bg-black hover:text-white text-black text-xs font-extrabold transition-all duration-300 tracking-wider uppercase group"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Center Float Image Stage */}
              <div className="md:col-span-8 flex justify-center items-center h-full relative">
                <div
                  className={`slide-image-${idx} relative w-80 sm:w-[26rem] md:w-[32rem] aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100/50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] animate-float p-4 flex justify-center items-center`}
                >
                  <img
                    src={cat.image}
                    alt={`${cat.bgWord} Shirt`}
                    className="object-contain w-full h-[92%] mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:scale-102 transition-transform duration-500 ease-out"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  {/* Subtle light reflect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Final screen section */}
        <div
          className={`slide-final absolute inset-0 w-full h-full bg-white z-20 flex items-center justify-center flex-col px-6 select-none transition-all duration-300 ${
            activeSlide === categories.length ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Logo Frame */}
          <div className="max-w-3xl text-center space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-extrabold text-brown uppercase block">
                Sarafa Bazar • Jabalpur
              </span>
              <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter text-black">
                SRS SHIRTS
              </h2>
              <div className="w-16 h-1 bg-brown mx-auto rounded-full" />
            </div>

            {/* highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto py-4">
              {[
                { title: "500+ Designs", desc: "Latest collections" },
                { title: "Wholesale Prices", desc: "Direct manufacturer rates" },
                { title: "Premium Quality", desc: "Assured double stitch" },
                { title: "Fast Delivery", desc: "Transport all over MP" },
              ].map((hl, i) => (
                <div key={i} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-center">
                  <h4 className="text-base sm:text-lg font-black text-black">{hl.title}</h4>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">{hl.desc}</p>
                </div>
              ))}
            </div>

            {/* final CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getCatalogRequestLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-black hover:bg-brown text-white text-sm font-extrabold shadow-md transition-colors group"
              >
                <MessageSquare size={16} />
                <span>Request WhatsApp Catalog</span>
              </a>
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-black text-black hover:bg-black hover:text-white text-sm font-bold transition-all"
              >
                <span>View Full Catalog List</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Floating animation keyframes embedded */}
      <style jsx global>{`
        @keyframes float-shirt {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float-shirt 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
