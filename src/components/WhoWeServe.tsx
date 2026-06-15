"use client";

import { useEffect, useRef } from "react";
import { Store, ShoppingBag, Landmark, ArrowRight, UserCheck, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeServe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const targets = [
    {
      icon: <Store className="text-navy" size={28} />,
      title: "Garment Shops",
      desc: "Local clothing stores who want to stock high-margin, fast-moving shirt designs directly in their display counters.",
    },
    {
      icon: <ShoppingBag className="text-navy" size={28} />,
      title: "Clothing Stores",
      desc: "Exclusive or multi-brand showrooms looking for premium stitch, quality fabrics, and consistent size profiles.",
    },
    {
      icon: <UserCheck className="text-navy" size={28} />,
      title: "Resellers & Boutique Owners",
      desc: "Independent home resellers and boutique entrepreneurs seeking trendy designs with flexible low MOQ orders.",
    },
    {
      icon: <Landmark className="text-navy" size={28} />,
      title: "Uniform Suppliers",
      desc: "Agencies requiring bulk solid-colored cotton or poly-cotton shirts for schools, hotels, offices, and institutions.",
    },
    {
      icon: <Shield className="text-navy" size={28} />,
      title: "Garment Distributors",
      desc: "Regional wholesalers and network distributors looking for large quantities at special discounted contract rates.",
    },
    {
      icon: <Store className="text-navy" size={28} />,
      title: "Online Sellers",
      desc: "E-commerce store owners sourcing premium shirts to catalog, pack, and list across retail digital platforms.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".serve-card",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".serve-grid",
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
      id="who-we-serve"
      ref={containerRef}
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Our Partners
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Who We Serve
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            Whether you run a small local retail outlet in Jabalpur, a regional uniform agency, or a massive distributor network in Indore, we supply tailored packages for you.
          </p>
        </div>

        {/* Card Grid */}
        <div className="serve-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targets.map((tgt, idx) => (
            <div
              key={idx}
              className="serve-card bg-light-bg p-8 rounded-3xl border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-150 relative z-10 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <span className="group-hover:text-white text-navy transform group-hover:rotate-6 transition-all duration-300">
                    {tgt.icon}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-dark mb-3 relative z-10 group-hover:text-navy transition-colors">
                  {tgt.title}
                </h4>
                
                <p className="text-sm text-grey-custom leading-relaxed mb-6">
                  {tgt.desc}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-brown transition-colors"
                >
                  <span>Inquire for {tgt.title}</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
