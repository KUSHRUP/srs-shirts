"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, FileText } from "lucide-react";
import { getCatalogRequestLink } from "@/utils/whatsapp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Collections", href: "#collections" },
    { name: "Products", href: "#products" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-us" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-navy">
              SRS<span className="text-brown"> SHIRTS</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-grey-custom uppercase">
              Wholesale Hub • Sarafa, JBP
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark hover:text-brown transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={getCatalogRequestLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-brown transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              <FileText size={16} />
              <span>Get Catalog</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+917509847447"
              className="p-2 rounded-full bg-light-bg text-navy hover:text-brown border border-gray-200"
              aria-label="Call Us"
            >
              <PhoneCall size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-dark hover:text-brown hover:bg-light-bg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-45 w-4/5 max-w-sm bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex flex-col h-full justify-between py-6 px-6">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <div className="flex flex-col">
                <span className="text-lg font-display font-extrabold text-navy">
                  SRS <span className="text-brown">SHIRTS</span>
                </span>
                <span className="text-[9px] tracking-widest text-grey-custom font-semibold">
                  SARAFA, JABALPUR
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full bg-light-bg text-dark hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-dark hover:text-brown py-2 border-b border-gray-50 block transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={getCatalogRequestLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-base font-bold shadow-md hover:bg-brown transition-all"
            >
              <FileText size={18} />
              <span>Get WhatsApp Catalog</span>
            </a>
            <a
              href="tel:+917509847447"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 text-dark text-base font-bold border border-gray-200"
            >
              <PhoneCall size={18} />
              <span>Call +91 75098 47447</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay background when drawer open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
        />
      )}
    </header>
  );
}
