/*
 * HIGH BUSINESS — Home Page
 * Design: Apple iMac product page aesthetic — white canvas, Inter, tinted rounded cards
 * Section order: Navbar → Hero → StatStrip → About → InfoRibbon → Clients → Services → Contact → Footer
 */

import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoRibbon from "@/components/InfoRibbon";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import StatStrip from "@/components/StatStrip";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatStrip />
      <AboutSection />
      <InfoRibbon />
      <ClientsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
