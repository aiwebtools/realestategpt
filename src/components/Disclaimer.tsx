import React from "react";
import { AlertTriangle } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="section bg-cyberpunk-darker/50">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Important Information</span>
            <h2 className="heading-lg mb-6">
              Legal <span className="text-gradient">Disclaimer</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto glass-panel rounded-xl p-6 md:p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-cyberpunk-pink" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Information Accuracy Statement</h3>
                <p className="text-white/80 mb-3">
                  RealEstateGPT strives to provide accurate, up-to-date information by utilizing multiple data sources and verification methods. However, despite our best efforts, we cannot guarantee absolute accuracy or completeness of all information presented.
                </p>
                <p className="text-white/80">
                  The data provided is for informational purposes only and should not be considered as legal, financial, or professional advice. Users should independently verify all property information before making any real estate decisions.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Disclaimers and Limitations</h3>
              
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>No Professional Advice:</strong> The information provided by Real Estate GPT does not constitute professional advice in real estate, legal, financial, or tax matters. Users should consult with qualified professionals for advice specific to their situation.
                </p>
                
                <p>
                  <strong>Limitation of Liability:</strong> AI Web Tools LLC and its affiliates are not responsible for any decisions made based on the information provided by Real Estate GPT. We shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this tool.
                </p>
                
                <p>
                  <strong>Market Fluctuations:</strong> Real estate markets are subject to fluctuations and changes influenced by numerous factors. Valuations and market analyses provided by Real Estate GPT represent estimates at a specific point in time and may change.
                </p>
                
                <p>
                  <strong>Data Sources:</strong> While we make efforts to use reliable sources, we do not guarantee the accuracy, currency, or completeness of the data sources used by Real Estate GPT.
                </p>
                
                <p>
                  <strong>No Guarantee of Results:</strong> We do not guarantee any specific results or outcomes from using Real Estate GPT, including but not limited to successful property transactions, investment returns, or mortgage approvals.
                </p>
                
                <p>
                  <strong>Subject to Terms of Service:</strong> Use of Real Estate GPT is subject to our Terms of Service and Privacy Policy. By using this tool, you acknowledge and agree to these terms.
                </p>
                
                <p>
                  <strong>Not a Substitute for Professional Inspection:</strong> The property information provided is not a substitute for professional property inspections or appraisals conducted by licensed professionals.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/60 text-sm">
                By using Real Estate GPT, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using our services.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Disclaimer;
