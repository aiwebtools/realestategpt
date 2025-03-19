
import React from "react";
import { Building, Home, Landmark, LineChart, BarChart3, Search, DollarSign, MapPin } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import ThreeDElement from "./ThreeDElement";

const Features: React.FC = () => {
  const features = [
    {
      title: "Comprehensive Property Data",
      description: "Collect and analyze extensive property details including valuation, topography, living area, construction year, and more.",
      icon: Building,
      delay: 0,
    },
    {
      title: "Advanced Market Analysis",
      description: "Get real-time market trends, comparative market analysis, and location-based valuations for informed decisions.",
      icon: LineChart,
      delay: 100,
    },
    {
      title: "Mortgage Advisory",
      description: "Receive guidance on loan types, interest rates, mortgage qualification, and budget planning tailored to your needs.",
      icon: DollarSign,
      delay: 200,
    },
    {
      title: "Rental Management",
      description: "Optimize rental prices, screen tenants, manage leases, and schedule property maintenance with AI assistance.",
      icon: Home,
      delay: 300,
    },
    {
      title: "Commercial Investment Strategy",
      description: "Calculate investment returns, analyze market demand, receive financing guidance, and ensure legal compliance.",
      icon: Landmark,
      delay: 400,
    },
    {
      title: "Visual Data & Satellite Imaging",
      description: "Access satellite images and visual property data through fully formatted Google Maps links for complete context.",
      icon: MapPin,
      delay: 500,
    },
  ];

  return (
    <section id="features" className="section bg-cyberpunk-darker/50">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Powerful Features</span>
            <h2 className="heading-lg mb-6">
              Comprehensive <span className="text-gradient">AI-Powered</span> Real Estate Tools
            </h2>
            <p className="text-white/80">
              RealEstateGPT combines advanced data analysis with artificial intelligence to deliver accurate, 
              actionable insights for all your real estate needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="scale-up" delay={feature.delay}>
              <div className="glass-panel rounded-xl p-6 h-full hover:border-cyberpunk-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyberpunk-accent/10">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyberpunk-accent to-cyberpunk-highlight/70 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
            <a href="https://chatgpt.com/g/g-67dafd3c6df481918ae17cdd004a4ba3-real-estate-gpt" className="btn-cyberpunk">
              Select Real Estate GPT
            </a>
            <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="btn-outline">
              Select Property Data Finder
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
