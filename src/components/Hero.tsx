
import React, { useEffect, useRef } from "react";
import { Building, ChevronDown } from "lucide-react";
import ThreeDElement from "./ThreeDElement";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set up YouTube iframe with autoplay parameters
    if (videoRef.current) {
      videoRef.current.src = "https://www.youtube.com/embed/0ZGBGn9yYwY?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=window.location.origin&widgetid=1&hd=1";
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-cyberpunk-accent/20 rounded-full filter blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-cyberpunk-highlight/20 rounded-full filter blur-[120px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block animate-fade-in">
              <span className="chip mb-4">AI-Powered Real Estate Intelligence</span>
            </div>
            
            <h1 className="heading-xl animate-fade-in mb-6">
              <span className="text-gradient">Intelligent</span> Real Estate
              <br />Analysis & Insights
            </h1>
            
            <p className="text-lg text-white/80 mb-8 animate-fade-in animate-delay-200">
              RealEstateGPT provides detailed, data-driven, and actionable property intelligence
              for accurate valuation, mortgage analysis, rental management, and
              commercial real estate investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-300">
              <a
                href="https://chatgpt.com/g/g-67dafd3c6df481918ae17cdd004a4ba3-real-estate-gpt"
                className="btn-cyberpunk"
              >
                Choose Real Estate GPT
              </a>
              <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="btn-outline">
                Choose Property Data Finder
              </a>
            </div>
            
            <p className="text-xs text-white/50 mt-6 animate-fade-in animate-delay-400">
              Powered by advanced AI to deliver precise property valuations and insights
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="absolute inset-0 -left-4 -top-4 -right-4 -bottom-4 bg-gradient-to-br from-cyberpunk-accent/30 to-cyberpunk-highlight/30 rounded-2xl blur-2xl"></div>
              <div className="glass-panel rounded-2xl relative overflow-hidden aspect-video shadow-2xl border border-white/20">
                <iframe 
                  ref={videoRef} 
                  id="youtube-player"
                  title="Real Estate GPT Demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in animate-delay-500">
          <a 
            href="#features" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
