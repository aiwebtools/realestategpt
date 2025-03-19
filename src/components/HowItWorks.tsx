
import React from "react";
import { Search, Database, BarChart3, Home } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Provide Property Address",
      description: "Enter the exact property address including street name, city, and state for precise identification.",
      icon: Search,
      delay: 0,
    },
    {
      title: "Data Collection & Verification",
      description: "The AI searches and cross-checks multiple sources to gather comprehensive and accurate property details.",
      icon: Database,
      delay: 100,
    },
    {
      title: "Analysis & Insights Generation",
      description: "Advanced algorithms process the data to produce valuations, market trends, mortgage options, or investment strategies.",
      icon: BarChart3,
      delay: 200,
    },
    {
      title: "Receive Actionable Results",
      description: "Get detailed reports, property-specific insights, and customized recommendations for informed decision making.",
      icon: Home,
      delay: 300,
    },
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Simple Process</span>
            <h2 className="heading-lg mb-6">
              How <span className="text-gradient">Real Estate GPT</span> Works
            </h2>
            <p className="text-white/80">
              Our AI-powered system delivers precise property intelligence through a streamlined, 
              data-driven process designed for accuracy and completeness.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} animation="fade-in" delay={step.delay}>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(100%-16px)] w-full h-0.5 bg-gradient-to-r from-cyberpunk-accent to-transparent z-0"></div>
                )}
                <div className="glass-panel rounded-xl p-6 h-full relative z-10">
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyberpunk-accent to-cyberpunk-highlight flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-cyberpunk-dark border border-white/20 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center flex flex-col items-center">
            <p className="text-white/80 max-w-2xl mb-6">
              Real Estate GPT continually refines its analysis by monitoring market changes and incorporating 
              the latest property data, ensuring you always receive the most current insights.
            </p>
            <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="btn-cyberpunk">
              Get Property Data Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
