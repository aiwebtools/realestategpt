
import React, { useEffect, useState } from "react";
import { Building, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Property Data Finder GPT", href: "https://propertydatafindergpt.lovable.app/?via=aiwebtools", external: true },
    { name: "Real Estate GPT", href: "https://chatgpt.com/g/g-67dafd3c6df481918ae17cdd004a4ba3-real-estate-gpt", external: true },
    { name: "Real Estate Investor GPT", href: "https://chatgpt.com/g/g-67db517cdfe88191a2fe81a1a0fe4e06-real-estate-investor-gpt", external: true },
    { name: "FAQ", href: "#faq", external: false },
    { name: "Disclaimer", href: "#disclaimer", external: false },
    { name: "More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools", highlight: true, external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-cyberpunk-darker/80 backdrop-blur-lg border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center neo-blur rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
            <Building className="w-6 h-6 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-accent/20 to-cyberpunk-highlight/20 rounded-lg opacity-50"></div>
          </div>
          <div>
            <div className="font-bold text-white text-lg tracking-tight">Real Estate GPT</div>
            <div className="text-xs text-white/60">Presented by AiWebTools.Ai</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`px-3 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
                link.highlight
                  ? "bg-gradient-to-r from-cyberpunk-accent to-cyberpunk-highlight text-white hover:shadow-lg hover:shadow-cyberpunk-accent/20"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-cyberpunk-darker/95 backdrop-blur-lg z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 top-16" : "opacity-0 -top-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 pt-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`px-4 py-3 rounded-md transition-all duration-300 text-base font-medium ${
                link.highlight
                  ? "bg-gradient-to-r from-cyberpunk-accent to-cyberpunk-highlight text-white hover:shadow-lg hover:shadow-cyberpunk-accent/20"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
