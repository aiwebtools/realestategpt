
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-cyberpunk-accent transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Real Estate GPT?",
      answer: "Real Estate GPT is an AI-powered real estate expert that provides detailed, data-driven property intelligence including accurate property valuation, mortgage analysis, rental management insights, and commercial real estate investment strategies. It scans multiple sources for verified property data to ensure complete accuracy."
    },
    {
      question: "How accurate is the property valuation?",
      answer: "Our property valuation is highly accurate as it combines multiple data sources, recent comparable sales, current market trends, and local economic factors. The AI cross-checks information across verified databases and uses advanced algorithms to ensure precision."
    },
    {
      question: "What information do I need to provide to get property data?",
      answer: "To receive comprehensive property data, you need to provide the exact property address, including street name, city, and state. This ensures the AI can locate and analyze the specific property you're interested in."
    },
    {
      question: "Can Real Estate GPT help with mortgage planning?",
      answer: "Yes, Real Estate GPT offers comprehensive mortgage advisory services, including guidance on different loan types, interest rate tracking, mortgage qualification assistance, affordability planning, and refinancing strategies tailored to your financial situation."
    },
    {
      question: "Is the data sourced legally and ethically?",
      answer: "Absolutely. All data is sourced from publicly available information, legal property records, and reputable real estate databases. We prioritize data privacy and only provide information that is legally accessible and ethically sourced."
    },
    {
      question: "How can Real Estate GPT help with rental properties?",
      answer: "Real Estate GPT assists with rental management by providing optimal rental price recommendations, tenant screening guidance, lease management suggestions, rent collection strategies, and property maintenance scheduling to maximize your rental property's profitability."
    },
    {
      question: "What kind of commercial real estate analysis is available?",
      answer: "For commercial real estate, we offer cap rate and investment return calculations, market demand analysis, commercial loan guidance, zoning and legal compliance advisory, and information on tax incentives and opportunity zones to optimize your investment strategy."
    },
    {
      question: "Do you provide visual property data?",
      answer: "Yes, we provide properly formatted Google Maps links to satellite images for your property, allowing you to visualize the location and surroundings. These links are functional, clickable, and correctly formatted for easy access."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Questions & Answers</span>
            <h2 className="heading-lg mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/80">
              Find answers to common questions about Real Estate GPT and how it can help with your 
              property analysis, valuation, and investment needs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto glass-panel rounded-xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Have more questions about how Real Estate GPT can assist with your specific needs?
            </p>
            <a href="mailto:Contact@ai-webtools.com" className="btn-outline">
              Contact Our Support Team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
