"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/utils/data";
import { getProductInquiryLink } from "@/utils/whatsapp";
import { ShoppingBag, ArrowUpRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Formal Shirts",
    "Casual Shirts",
    "Cotton Shirts",
    "Check Shirts",
    "Printed Shirts",
    "Premium Collection",
    "Budget Collection",
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (filter === "All") return true;
    return prod.category === filter;
  });

  // Re-run animation when filtering changes
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Clear previous animations if any
      gsap.killTweensOf(".product-card");
      
      gsap.fromTo(
        ".product-card",
        { 
          opacity: 0, 
          y: 50,
          clipPath: "inset(25% 0% 0% 0%)"
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-card",
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Product Catalog
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Featured Wholesale Shirts
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            Premium shirt designs in bulk packaging. Standard wholesale bundles include assorted sizes (M, L, XL, XXL) or single-size packs as per your requirement.
          </p>
        </div>

        {/* Filter Badges (Horizontal scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none justify-start lg:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-navy text-white shadow-md"
                  : "bg-light-bg text-dark hover:bg-gray-200 border border-gray-150"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="product-card flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image box */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Badge if exists */}
                {prod.badge && (
                  <span className="absolute top-4 left-4 bg-brown text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-xs">
                    {prod.badge}
                  </span>
                )}

                {/* Category overlay */}
                <span className="absolute bottom-4 left-4 bg-dark/65 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  {prod.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-base font-bold text-dark mb-1.5 group-hover:text-navy transition-colors line-clamp-1">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-grey-custom line-clamp-2 mb-4 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Specs list */}
                  <div className="space-y-1.5 border-t border-gray-50 pt-3 mb-4 text-[11px] text-grey-custom">
                    <p className="flex justify-between">
                      <span>Fabric:</span>
                      <span className="font-semibold text-dark">{prod.fabric}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sizes available:</span>
                      <span className="font-semibold text-dark">
                        {prod.sizes.join(", ")}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  {/* Price Banner */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-[10px] text-grey-custom uppercase tracking-wider font-semibold">Bulk Rate</span>
                    <span className="text-lg font-bold text-brown font-display">
                      {prod.priceRange} <span className="text-[10px] text-grey-custom font-normal">/ pc</span>
                    </span>
                  </div>

                  {/* WhatsApp Quick CTA */}
                  <a
                    href={getProductInquiryLink(prod.name, prod.fabric, prod.priceRange)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-navy hover:bg-navy text-navy hover:text-white text-xs font-bold transition-all duration-300"
                  >
                    <ShoppingBag size={14} />
                    <span>Inquire WhatsApp</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-grey-custom text-sm">No shirts found in this category. Contact us to request customizable designs.</p>
          </div>
        )}

      </div>
    </section>
  );
}
