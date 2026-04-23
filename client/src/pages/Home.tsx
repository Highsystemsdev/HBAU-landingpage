/*
 * HIGH BUSINESS — Home Page
 * Design: "Precision Craft" — Apple-style, Playfair Display + DM Sans
 * Assembles all sections in order per the brief
 */

import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoRibbon from "@/components/InfoRibbon";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InfoRibbon />
      <ClientsSection />
      <ServicesSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
