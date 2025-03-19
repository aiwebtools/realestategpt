
import React, { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

const ConsentPopup: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("realEstateGPT-consent");
    
    if (!hasConsented) {
      // If no consent found, show popup after a short delay
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    // Save consent to localStorage
    localStorage.setItem("realEstateGPT-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="glass-panel rounded-xl max-w-md w-full p-6 animate-scale-up shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-cyberpunk-pink" />
            <h3 className="text-xl font-semibold">Important Notice</h3>
          </div>
          <button 
            onClick={handleConsent}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-white/90 mb-4">
          By using Real Estate GPT, you acknowledge that:
        </p>
        
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
          <li>Information provided is for informational purposes only</li>
          <li>All data should be independently verified</li>
          <li>This is not a substitute for professional advice</li>
          <li>You have read and agreed to our full disclaimer</li>
        </ul>
        
        <button 
          onClick={handleConsent}
          className="w-full btn-cyberpunk"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentPopup;
