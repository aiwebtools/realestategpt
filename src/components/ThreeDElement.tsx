
import React, { useEffect, useRef } from "react";
import { Building } from "lucide-react";

interface ThreeDElementProps {
  className?: string;
}

export const ThreeDElement: React.FC<ThreeDElementProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let rotateX = 0;
    let rotateY = 0;
    const perspective = 1000;
    const sensitivity = 0.1;
    const restingPosition = { x: 0, y: 0 };
    let requestId: number;
    
    const updateTransform = () => {
      if (!container) return;
      
      // Apply the 3D transform
      container.style.transform = `
        perspective(${perspective}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
      `;
      
      // Gradually return to resting position when not being interacted with
      if (!isInteracting) {
        rotateX = rotateX * 0.95;
        rotateY = rotateY * 0.95;
        
        if (Math.abs(rotateX) < 0.01 && Math.abs(rotateY) < 0.01) {
          rotateX = 0;
          rotateY = 0;
          cancelAnimationFrame(requestId);
          return;
        }
      }
      
      requestId = requestAnimationFrame(updateTransform);
    };
    
    let isInteracting = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      rotateY = (e.clientX - centerX) * sensitivity;
      rotateX = (centerY - e.clientY) * sensitivity;
      
      if (!isInteracting) {
        isInteracting = true;
        requestId = requestAnimationFrame(updateTransform);
      }
    };
    
    const handleMouseLeave = () => {
      isInteracting = false;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestId);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`relative transition-transform duration-300 ${className || ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-full h-full relative" style={{ transform: "translateZ(20px)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-accent/30 to-cyberpunk-highlight/30 rounded-xl opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center p-8">
          <Building className="w-16 h-16 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ThreeDElement;
