
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import ConsentPopup from "@/components/ConsentPopup";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Real Estate GPT - AI-Powered Real Estate Intelligence";
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
