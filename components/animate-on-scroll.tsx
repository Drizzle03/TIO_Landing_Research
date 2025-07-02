"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const AnimateOnScroll = ({
  children,
  className,
  animationClass = "animate-fade-in-up",
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
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
  }, [threshold, triggerOnce, delay, mounted]);

  if (!mounted) {
    return (
      <div className={cn(className, "opacity-0")}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        className, 
        "transition-all duration-700 ease-out",
        isVisible ? `opacity-100 ${animationClass}` : "opacity-0 translate-y-8"
      )}
    >
      {children}
    </div>
  );
}; 