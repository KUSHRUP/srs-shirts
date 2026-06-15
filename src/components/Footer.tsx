import { getCatalogRequestLink } from "@/utils/whatsapp";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
              SRS<span className="text-brown"> SHIRTS</span>
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium wholesale shirts supplier in Madhya Pradesh. Selling high-quality men's shirts directly to retailers, clothing shops, and uniform distributors.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={getCatalogRequestLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-brown transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-brown transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-brown transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-brown uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors duration-200">Collections</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors duration-200">Featured Products</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-base font-bold text-brown uppercase tracking-wider mb-5">Our Offerings</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Formal Shirts</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Casual Wear</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Cotton Specials</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Classic Checked</a>
              </li>
              <li>
                <a href={getCatalogRequestLink()} className="hover:text-white transition-colors font-semibold text-brown">Get Latest Catalog PDF</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold text-brown uppercase tracking-wider mb-5">Wholesale Hub</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brown flex-shrink-0 mt-0.5" />
                <span>Sarafa Bazar, Jabalpur, Madhya Pradesh - 482002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brown flex-shrink-0" />
                <a href="tel:+917509847447" className="hover:text-white transition-colors">+91 75098 47447</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brown flex-shrink-0" />
                <a href="mailto:wholesale@srsshirts.com" className="hover:text-white transition-colors">wholesale@srsshirts.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} SRS Shirts. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#faq" className="hover:text-gray-300">FAQ</a>
            <a href="#contact" className="hover:text-gray-300">Privacy Policy</a>
            <p className="text-gray-600">Created for Retail Businesses across MP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
