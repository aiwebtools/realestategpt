
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "scale-up" | "blur-in";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  animation = "fade-in",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && `animate-${animation}`,
        delay > 0 && `animate-delay-${delay}`,
        className
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        animationFillMode: "forwards"
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
