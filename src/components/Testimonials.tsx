
import React from "react";
import { Star } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Investor",
      content: "Real Estate GPT transformed how I analyze potential investments. The data accuracy and comprehensive market analysis saved me countless hours of research and helped me identify high-performing properties.",
      rating: 5,
      delay: 0,
    },
    {
      name: "David Chen",
      role: "First-time Homebuyer",
      content: "As someone new to real estate, this tool was invaluable. It gave me clear property valuations and mortgage options that matched my budget. The neighborhood insights helped me feel confident about my purchase decision.",
      rating: 5,
      delay: 100,
    },
    {
      name: "Michael Rodriguez",
      role: "Property Manager",
      content: "The rental management features are exceptional. I use Real Estate GPT to optimize rental pricing and tenant screening. The detailed property reports impress my clients and give us a competitive edge.",
      rating: 5,
      delay: 200,
    },
    {
      name: "Emily Foster",
      role: "Real Estate Agent",
      content: "This AI tool has become essential for my client presentations. The property valuation accuracy and comparative market analysis features provide data-backed insights that help close sales faster.",
      rating: 5,
      delay: 300,
    },
  ];

  return (
    <section className="section bg-cyberpunk-darker/50">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Client Experiences</span>
            <h2 className="heading-lg mb-6">
              What Our <span className="text-gradient">Users Say</span>
            </h2>
            <p className="text-white/80">
              Hear from real estate professionals and property owners who have transformed
              their decision-making process with our AI-powered intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-in" delay={testimonial.delay}>
              <div className="glass-panel rounded-xl p-8 h-full hover:border-cyberpunk-accent/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cyberpunk-accent text-cyberpunk-accent" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyberpunk-accent to-cyberpunk-highlight flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Join thousands of satisfied users who are making smarter real estate decisions
              with AI-powered insights and analysis.
            </p>
            <a href="https://chatgpt.com/g/g-67dafd3c6df481918ae17cdd004a4ba3-real-estate-gpt" className="btn-cyberpunk">
              Start Your Property Analysis
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
