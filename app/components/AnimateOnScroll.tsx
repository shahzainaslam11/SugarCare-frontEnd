"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

type Animation = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  /** Animate on mount (for above-fold hero). Uses delay for stagger, ignores scroll. */
  animateOnMount?: boolean;
}

export function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
  animateOnMount = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animateOnMount) {
      const t = setTimeout(() => setIsVisible(true), 80);
      return () => clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, animateOnMount]);

  const animationClasses: Record<Animation, { base: string; visible: string }> = {
    fadeUp: { base: "opacity-0 translate-y-8", visible: "opacity-100 translate-y-0" },
    fadeIn: { base: "opacity-0", visible: "opacity-100" },
    scaleIn: { base: "opacity-0 scale-95", visible: "opacity-100 scale-100" },
    slideLeft: { base: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
    slideRight: { base: "opacity-0 translate-x-8", visible: "opacity-100 translate-x-0" },
  };

  const { base, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transition-premium ${isVisible ? visible : base} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
