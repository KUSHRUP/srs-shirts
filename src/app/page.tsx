import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowOrderingWorks from "@/components/HowOrderingWorks";
import WhoWeServe from "@/components/WhoWeServe";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <TrustSection />
        <Collections />
        <FeaturedProducts />
        <HowOrderingWorks />
        <WhoWeServe />
        <AboutUs />
        <Testimonials />
        <FaqSection />
        <WhatsAppCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
