
import React, { useEffect } from "react";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import LocationsSection from "@/components/home/LocationsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/home/CtaSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Oestesul Refrigeração | Soluções em Refrigeração Comercial e Industrial";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <LocationsSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
