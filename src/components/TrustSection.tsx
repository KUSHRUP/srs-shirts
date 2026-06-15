"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Tag,
  Layers,
  Truck,
  UserCheck,
  Award,
  Zap,
  ShoppingBag,
  Users,
  Compass,
  TrendingUp,
} from "lucide-react";

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  // Counter States
  const [stats, setStats] = useState({
    years: 0,
    retailers: 0,
    designs: 0,
    orders: 0,
  });

  const cards = [
    {
      icon: <Tag className="text-white" size={24} />,
      title: "Bulk Pricing",
      desc: "Get maximum margins with our direct wholesale prices. Unbeatable rates for bulk quantities.",
      bg: "bg-navy",
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Large Variety",
      desc: "Choose from hundreds of unique designs in formals, casuals, checks, prints, and cottons.",
      bg: "bg-brown",
    },
    {
      icon: <Truck className="text-white" size={24} />,
      title: "Fast Supply",
      desc: "Quick dispatch to Bhopal, Indore, Katni, Rewa, Sagar, and all corners of MP within 24-48 hours.",
      bg: "bg-dark",
    },
    {
      icon: <UserCheck className="text-white" size={24} />,
      title: "Trusted Seller",
      desc: "A highly reputed local Jabalpur wholesale shop partner for hundreds of active retail stores.",
      bg: "bg-navy",
    },
    {
      icon: <Award className="text-white" size={24} />,
      title: "Quality Products",
      desc: "No loose threads or bad fits. Double stitching, high thread counts, and premium cuffs.",
      bg: "bg-brown",
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Easy Ordering",
      desc: "No complex procedures. Browse collections, choose on WhatsApp, confirm invoice, and receive goods.",
      bg: "bg-dark",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in cards on scroll
      gsap.fromTo(
        ".trust-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".trust-card-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stat Counters animation
      const statsTargets = { years: 12, retailers: 2500, designs: 600, orders: 15000 };
      const currentStats = { years: 0, retailers: 0, designs: 0, orders: 0 };

      gsap.to(currentStats, {
        years: statsTargets.years,
        retailers: statsTargets.retailers,
        designs: statsTargets.designs,
        orders: statsTargets.orders,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setStats({
            years: Math.floor(currentStats.years),
            retailers: Math.floor(currentStats.retailers),
            designs: Math.floor(currentStats.designs),
            orders: Math.floor(currentStats.orders),
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="py-20 sm:py-24 bg-white border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Partner Benefits
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Why Retailers Choose Us
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            We provide local retailers with the perfect balance of premium products, affordable wholesale rates, and friendly, quick service directly from Jabalpur.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="trust-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="trust-card bg-light-bg p-8 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <h4 className="text-lg font-bold text-dark mb-3 group-hover:text-navy transition-colors">
                {card.title}
              </h4>
              <p className="text-sm text-grey-custom leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Counters Banner */}
        <div
          ref={countersRef}
          className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border border-navy/20 relative overflow-hidden"
        >
          {/* Subtle decorative vector circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brown/10 blur-xl pointer-events-none" />

          {/* Stat 1 */}
          <div className="text-center flex flex-col justify-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <Compass size={18} className="text-brown" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
              {stats.years}+
            </p>
            <p className="text-[11px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold mt-2">
              Years In Business
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center flex flex-col justify-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <Users size={18} className="text-brown" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
              {stats.retailers.toLocaleString()}+
            </p>
            <p className="text-[11px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold mt-2">
              Happy Retailers
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center flex flex-col justify-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <ShoppingBag size={18} className="text-brown" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
              {stats.designs}+
            </p>
            <p className="text-[11px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold mt-2">
              Designs Available
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center flex flex-col justify-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={18} className="text-brown" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
              {stats.orders.toLocaleString()}+
            </p>
            <p className="text-[11px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold mt-2">
              Monthly Orders
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
