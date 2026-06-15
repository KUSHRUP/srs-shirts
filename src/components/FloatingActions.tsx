"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { getCatalogRequestLink } from "@/utils/whatsapp";

export default function FloatingActions() {
  const [showWidget, setShowWidget] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Sticky Bottom Actions for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] py-2.5 px-4 flex gap-3">
        <a
          href="tel:+917509847447"
          className="flex-1 flex items-center justify-center gap-2 bg-dark text-white font-semibold text-sm py-3 px-4 rounded-xl active:scale-95 transition-transform"
        >
          <Phone size={16} />
          <span>Call Supplier</span>
        </a>
        <a
          href={getCatalogRequestLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3 px-4 rounded-xl active:scale-95 transition-transform shadow-[0_4px_10px_rgba(37,211,102,0.3)]"
        >
          <MessageCircle size={16} />
          <span>WhatsApp Catalog</span>
        </a>
      </div>

      {/* Floating Widget (Desktop & Mobile Offset) */}
      <div
        className={`fixed right-6 bottom-20 lg:bottom-8 z-50 transition-all duration-500 transform ${
          showWidget ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Tooltip / Popup */}
        <div
          className={`absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-bottom-right ${
            showPopup ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="bg-navy p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold font-display text-sm">
                SRS
              </div>
              <div>
                <h4 className="font-bold text-sm">SRS Shirts</h4>
                <p className="text-[10px] text-gray-300">Typically replies in 5 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-light-bg space-y-3">
            <div className="bg-white p-3 rounded-2xl text-xs text-dark shadow-sm leading-relaxed max-w-[85%] border border-gray-100">
              Namaste! 🙏 Sourcing shirts for your shop or business? Send a message to get our latest wholesale catalog PDF and pricing.
            </div>
          </div>

          {/* Footer Input Link */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center">
            <a
              href={getCatalogRequestLink()}
              onClick={() => setShowPopup(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-md"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={14} />
                Ask for Catalog on WhatsApp
              </span>
              <Send size={12} />
            </a>
          </div>
        </div>

        {/* Pulse Ring Indicator */}
        {!showPopup && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping z-0" />
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300"
          aria-label="Open chat widget"
        >
          {showPopup ? <X size={26} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  );
}
