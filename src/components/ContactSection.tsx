"use client";

import { useForm } from "react-hook-form";
import { getContactFormWhatsAppLink } from "@/utils/whatsapp";
import { Phone, Mail, MapPin, MessageSquare, Send, Check } from "lucide-react";
import { useState } from "react";

interface ContactFormData {
  name: string;
  mobile: string;
  shopName: string;
  city: string;
  message: string;
}

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Generate WhatsApp link and open in new tab
    const waLink = getContactFormWhatsAppLink(data);
    window.open(waLink, "_blank");
    
    setIsSuccess(true);
    reset();
    
    // Hide success alert after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-brown uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark tracking-tight">
            Connect With Our Sourcing Team
          </h3>
          <p className="text-base text-grey-custom leading-relaxed">
            Fill out the form below or reach us directly. Our Sarafa Bazar team will help you configure your initial wholesale pack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Cards Info */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base mb-1">Our Stock Point</h4>
                  <p className="text-sm text-grey-custom leading-relaxed">
                    Sarafa Bazar, Jabalpur, Madhya Pradesh - 482002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base mb-1">Call Supplier</h4>
                  <p className="text-sm text-grey-custom font-semibold">
                    <a href="tel:+917509847447" className="hover:text-navy transition-colors">+91 75098 47447</a>
                  </p>
                  <p className="text-xs text-grey-custom mt-0.5">Mon - Sat: 10:00 AM to 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base mb-1">Email Inquiry</h4>
                  <p className="text-sm text-grey-custom font-semibold">
                    <a href="mailto:wholesale@srsshirts.com" className="hover:text-navy transition-colors">wholesale@srsshirts.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-150 h-64 sm:h-72 shadow-inner relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.7454238515743!2d79.92487447602058!3d23.170366610811902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae112e3e5661%3A0x2a061405e3be1630!2sSarafa%20Bazar%2C%20Jabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1718360000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SRS Shirts Map Location"
              />
            </div>

          </div>

          {/* Right: Lead Generation Form (7 cols) */}
          <div className="lg:col-span-7 bg-light-bg rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs">
            <h4 className="text-xl font-bold text-dark mb-6">
              Send Wholesale Inquiry
            </h4>

            {isSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <span className="font-bold">Inquiry Prepared!</span> We've opened a WhatsApp window to send your details directly to our agent.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Grid: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                    className="w-full bg-white rounded-xl border border-gray-200 py-3.5 px-4 text-sm text-dark placeholder-gray-400 focus:outline-hidden focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">
                    Mobile Number *
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    {...register("mobile", {
                      required: "Mobile is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Invalid Indian mobile number (10 digits starting 6-9)",
                      },
                    })}
                    className="w-full bg-white rounded-xl border border-gray-200 py-3.5 px-4 text-sm text-dark placeholder-gray-400 focus:outline-hidden focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                  />
                  {errors.mobile && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.mobile.message}</span>
                  )}
                </div>
              </div>

              {/* Grid: Shop Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="shopName" className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">
                    Shop Name *
                  </label>
                  <input
                    id="shopName"
                    type="text"
                    placeholder="e.g. Kumar Garments"
                    {...register("shopName", { required: "Shop Name is required" })}
                    className="w-full bg-white rounded-xl border border-gray-200 py-3.5 px-4 text-sm text-dark placeholder-gray-400 focus:outline-hidden focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                  />
                  {errors.shopName && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.shopName.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">
                    City / Town *
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g. Jabalpur, Bhopal, Sagar"
                    {...register("city", { required: "City is required" })}
                    className="w-full bg-white rounded-xl border border-gray-200 py-3.5 px-4 text-sm text-dark placeholder-gray-400 focus:outline-hidden focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                  />
                  {errors.city && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.city.message}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">
                  Inquiry Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what types of shirts and quantities you are interested in..."
                  {...register("message")}
                  className="w-full bg-white rounded-xl border border-gray-200 py-3.5 px-4 text-sm text-dark placeholder-gray-400 focus:outline-hidden focus:border-navy focus:ring-1 focus:ring-navy transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-navy text-white hover:bg-brown text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Send size={16} />
                <span>Submit Form & Chat WhatsApp</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
