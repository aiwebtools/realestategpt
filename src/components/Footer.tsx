
import React from "react";
import { Building, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-darker pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center neo-blur rounded-lg overflow-hidden">
                <Building className="w-5 h-5 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-accent/20 to-cyberpunk-highlight/20 rounded-lg opacity-50"></div>
              </div>
              <div>
                <div className="font-bold text-white text-base tracking-tight">Real Estate GPT</div>
                <div className="text-xs text-white/60">Presented by AiWebTools.Ai</div>
              </div>
            </div>
            <p className="text-white/70 mb-4 text-sm">
              AI-powered real estate intelligence providing detailed, data-driven property insights
              for informed decisions.
            </p>
            <div className="space-y-2 text-sm">
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
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">
                  Key Features
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
            
            <div className="mt-4">
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-block py-2 px-5 rounded-full bg-gradient-to-r from-cyberpunk-accent to-cyberpunk-highlight text-white text-sm font-medium hover:shadow-lg hover:shadow-cyberpunk-accent/20 transition-all duration-300 hover:scale-105"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-xs mb-3 sm:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://openai.com/policies/privacy-policy/" className="text-white/60 text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" className="text-white/60 text-xs hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
