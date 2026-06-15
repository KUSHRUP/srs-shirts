import { getCatalogRequestLink } from "@/utils/whatsapp";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden">
      
      {/* Decorative radial background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,94,60,0.15),transparent)] z-0" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Subtitle / tag */}
        <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/10 text-brown font-extrabold text-xs uppercase tracking-widest">
          Catalog PDF Request
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
          Need the Latest Shirt Catalog?
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Get detailed photos, fabric details, size measurements, and absolute wholesale prices sent directly to your phone.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getCatalogRequestLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] text-white text-base sm:text-lg font-extrabold shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#20ba56] transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageSquare size={24} className="fill-current" />
            <span>Get Catalog on WhatsApp</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Small Trust Microcopy */}
        <p className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
          ⚡ Usually shared within 5 minutes • Standard PDF Format • 100% Free
        </p>

      </div>
    </section>
  );
}
