
import React from "react";
import { Building, Home, Landmark, LineChart, BarChart3, Search, DollarSign, MapPin } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import ThreeDElement from "./ThreeDElement";

const Features: React.FC = () => {
  const features = [
    {
      title: "AI Property Valuation Calculator",
      description: "Get instant, accurate property valuations using advanced AI algorithms that analyze market data, comparable sales, and property characteristics for precise value estimates.",
      icon: Building,
      delay: 0,
    },
    {
      title: "Real Estate Market Analysis Tool",
      description: "Access real-time market trends, neighborhood analysis, price predictions, and comparative market studies to make informed investment decisions.",
      icon: LineChart,
      delay: 100,
    },
    {
      title: "Mortgage Calculator & Advisory",
      description: "Calculate mortgage payments, compare loan options, determine affordability, and get personalized financing recommendations based on your financial profile.",
      icon: DollarSign,
      delay: 200,
    },
    {
      title: "Rental Property Management Assistant",
      description: "Optimize rental pricing strategies, screen potential tenants, manage lease agreements, and schedule maintenance with AI-powered property management tools.",
      icon: Home,
      delay: 300,
    },
    {
      title: "Commercial Real Estate Investment Analysis",
      description: "Evaluate commercial properties with detailed ROI calculations, cash flow projections, market demand analysis, and investment risk assessments.",
      icon: Landmark,
      delay: 400,
    },
    {
      title: "Property Data & Location Intelligence",
      description: "Access comprehensive property information including satellite imagery, neighborhood demographics, school ratings, and local amenity data through integrated mapping tools.",
      icon: MapPin,
      delay: 500,
    },
  ];

  return (
    <section id="features" className="section bg-cyberpunk-darker/50">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Advanced Real Estate AI Features</span>
            <h2 className="heading-lg mb-6">
              Complete <span className="text-gradient">AI-Powered</span> Real Estate Analysis Suite
            </h2>
            <p className="text-white/80">
              Our comprehensive real estate AI platform combines machine learning, market data analysis, 
              and property intelligence to deliver the most accurate valuations and investment insights in the industry.
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
              Start Free Property Analysis
            </a>
            <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="btn-outline">
              Access Property Data Tools
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
