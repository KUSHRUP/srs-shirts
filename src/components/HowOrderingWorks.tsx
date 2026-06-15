"use client";

import { useEffect, useRef } from "react";
import { Search, FileDown, CheckSquare, Layers, Truck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowOrderingWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      icon: <Search className="text-white" size={20} />,
      title: "Browse Collections",
      desc: "Check our available categories online. Explore casuals, formals, checked patterns, prints, and budget options.",
    },
    {
      num: "02",
      icon: <FileDown className="text-white" size={20} />,
      title: "Request WhatsApp Catalog",
      desc: "Click any WhatsApp CTA to request our latest PDF catalog. We will instantly share detailed design catalogs and live wholesale prices.",
    },
    {
      num: "03",
      icon: <Layers className="text-white" size={20} />,
      title: "Select Designs & Sizes",
      desc: "Choose the design codes and quantities you need. Mix and match styles across different sizes (M, L, XL, XXL) as per your local demand.",
    },
    {
      num: "04",
      icon: <CheckSquare className="text-white" size={20} />,
      title: "Confirm Quantity",
      desc: "We verify the stock availability and send you a final commercial invoice. Settle the payment using UPI, Bank Transfer, or Cash.",
    },
    {
      num: "05",
      icon: <Truck className="text-white" size={20} />,
      title: "Delivery Process",
      desc: "We pack your shirts securely and ship them within 24 hours. Safe transit through leading local transport buses, trains, or courier services.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate line growth on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 40%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }

      // Animate step blocks
      steps.forEach((_, idx) => {
        gsap.fromTo(
          `.step-block-${idx}`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: `.step-block-${idx}`,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Scrollytelling active focus indicator
        gsap.fromTo(
          `.step-card-${idx}`,
          { opacity: 0.4, scale: 0.96, borderColor: "#E5E7EB" },
          {
            opacity: 1,
            scale: 1.04,
            borderColor: "#8B5E3C",
            boxShadow: "0 10px 30px -10px rgba(139, 94, 60, 0.15)",
            ease: "none",
            scrollTrigger: {
              trigger: `.step-block-${idx}`,
              start: "top 60%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-20 sm:py-24 bg-light-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Order Flow
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            How Sourcing Works
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            A simple, fast, and secure 5-step process designed specifically for busy retailers and clothing store owners in Madhya Pradesh.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Vertical Timeline Background Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[3px] bg-gray-200 z-0 transform md:-translate-x-1/2" />
          
          {/* Animated Green Line Overlay */}
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[3px] bg-brown z-0 transform md:-translate-x-1/2 origin-top"
          />

          {/* Steps List */}
          <div className="w-full space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`step-block-${idx} flex flex-col md:flex-row items-start md:items-center w-full`}
                >
                  {/* Left spacer on desktop / main box on desktop for even steps */}
                  <div
                    className={`w-full md:w-1/2 flex pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:justify-end" : "md:order-last md:pl-12"
                    }`}
                  >
                    <div className={`step-card-${idx} bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-xs hover:shadow-md transition-all duration-300 max-w-md w-full relative group`}>
                      
                      {/* Mobile Step Badge */}
                      <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-light-bg text-navy border border-gray-200 flex items-center justify-center text-xs font-bold font-display group-hover:bg-brown group-hover:text-white transition-colors duration-300">
                        {step.num}
                      </span>

                      <h4 className="text-lg font-bold text-dark mb-2 group-hover:text-navy transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-grey-custom leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node Point */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-9 h-9 rounded-full bg-navy border-4 border-white flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                  </div>

                  {/* Right spacer for even steps, left spacer for odd steps */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
