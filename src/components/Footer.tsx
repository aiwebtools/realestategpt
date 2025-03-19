
import React from "react";
import { Building, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center neo-blur rounded-lg overflow-hidden">
                <Building className="w-6 h-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-accent/20 to-cyberpunk-highlight/20 rounded-lg opacity-50"></div>
              </div>
              <div>
                <div className="font-bold text-white text-lg tracking-tight">Real Estate GPT</div>
                <div className="text-xs text-white/60">Presented by AiWebTools.Ai</div>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              AI-powered real estate intelligence providing detailed, data-driven property insights
              for informed decisions.
            </p>
            <div className="space-y-3">
              <a href="tel:4758008096" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="text-white/70 hover:text-white transition-colors">
                  Property Data Finder GPT
                </a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-67dafd3c6df481918ae17cdd004a4ba3-real-estate-gpt" className="text-white/70 hover:text-white transition-colors">
                  Real Estate GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-white/70 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-white/70 hover:text-white transition-colors">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">
                  Our Features
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-white/70 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Latest Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" className="text-white/70 hover:text-white transition-colors">
                  Property Data Finder GPT
                </a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-white/70 hover:text-white transition-colors">
                  Visit AiWebTools.Ai
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-block py-3 px-6 rounded-full bg-gradient-to-r from-cyberpunk-accent to-cyberpunk-highlight text-white font-medium hover:shadow-lg hover:shadow-cyberpunk-accent/20 transition-all duration-300 hover:scale-105"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://openai.com/policies/privacy-policy/" className="text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" className="text-white/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
