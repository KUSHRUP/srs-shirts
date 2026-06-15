"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, ArrowDown, ShieldCheck } from "lucide-react";
import { getCatalogRequestLink } from "@/utils/whatsapp";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const gridLeftRef = useRef<HTMLDivElement>(null);
  const gridRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        textRevealRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          buttonsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        );

      // Grid items staggered entry
      tl.fromTo(
        ".hero-img-card",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: "back.out(1.2)" },
        "-=1"
      );

      // 2. Parallax Scroll Animations
      if (gridLeftRef.current && gridRightRef.current) {
        gsap.to(gridLeftRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(gridRightRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Scrollytelling: Fade out and move text block upwards on scroll
      gsap.to(".lg-col-span-7", {
        opacity: 0.1,
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-light-bg via-white to-gray-50 flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-brown/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text Contents */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">

            {/* Local Trust Badge */}
            <div
              ref={badgesRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-semibold text-xs sm:text-sm max-w-fit shadow-xs"
            >
              <ShieldCheck size={16} className="text-brown" />
              <span>Madhya Pradesh's Direct Shirt Wholesale Hub</span>
            </div>

            {/* Headline */}
            <h1
              ref={textRevealRef}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-dark leading-tight tracking-tight"
            >
              Wholesale Shirts for Retailers Across <span className="text-navy">Madhya Pradesh</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-grey-custom max-w-xl leading-relaxed"
            >
              Quality shirts at wholesale rates. Perfect for garment shops, resellers, uniform suppliers, and retail businesses looking for high margins.
            </p>

            {/* CTAs */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href={getCatalogRequestLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brown hover:bg-navy text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageSquare size={20} />
                <span>Request Catalog on WhatsApp</span>
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-colors duration-300 text-base"
              >
                <span>View Collections</span>
                <ArrowDown size={18} className="animate-bounce" />
              </a>
            </div>

            {/* Microstats indicator */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 mt-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-navy">Premium</p>
                <p className="text-[11px] text-grey-custom uppercase tracking-wider font-semibold">Quality Stitch</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-brown">Direct</p>
                <p className="text-[11px] text-grey-custom uppercase tracking-wider font-semibold">Bulk Rates</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-dark">Sarafa</p>
                <p className="text-[11px] text-grey-custom uppercase tracking-wider font-semibold">JBP</p>
              </div>
            </div>

          </div>

          {/* Right: Premium Shirt Visuals Grid (Parallax effect) */}
          <div className="lg:col-span-5 h-[35rem] sm:h-[42rem] lg:h-[45rem] grid grid-cols-2 gap-4 relative">

            {/* Column Left (moves down on scroll) */}
            <div ref={gridLeftRef} className="flex flex-col gap-4 justify-center">

              <div className="hero-img-card rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg group">
                <img
                  src="/shirt image/formal shirt.jpg"
                  alt="Formal White Shirt"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Formal Wear</span>
                </div>
              </div>

              <div className="hero-img-card rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop"
                  alt="Checked Cotton Shirt"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Casual Checks</span>
                </div>
              </div>

            </div>

            {/* Column Right (moves up on scroll) */}
            <div ref={gridRightRef} className="flex flex-col gap-4">

              <div className="hero-img-card rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&auto=format&fit=crop"
                  alt="Casual Dark Shirt"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Premium Casuals</span>
                </div>
              </div>

              <div className="hero-img-card rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=400&auto=format&fit=crop"
                  alt="Cotton Wear Shirt"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">100% Pure Cotton</span>
                </div>
              </div>

              <div className="hero-img-card rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop"
                  alt="Trendy Printed Shirt"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Modern Prints</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
