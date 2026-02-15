"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

function parseValue(value: string): { target: number; suffix: string } | null {
  if (value.includes("/")) return null;
  const numMatch = value.match(/(\d+)/);
  if (!numMatch) return null;
  const suffix = value.replace(numMatch[1], "");
  let target = parseInt(numMatch[1], 10);
  if (value.toUpperCase().includes("K")) target *= 1000;
  return { target, suffix };
}

export function AnimatedCounter({ value, label, duration = 1800 }: AnimatedCounterProps) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const p = parseValue(value);
    if (!p) {
      setDisplay(value);
      return;
    }
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const displaySuffix = value.includes("K") ? "K+" : p.suffix;
    const maxVal = p.target >= 1000 ? Math.round(p.target / 1000) : p.target;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(maxVal * eased);
      const shown = p.target >= 1000 ? `${current}${displaySuffix}` : `${current}${displaySuffix}`;
      setDisplay(shown);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, duration]);

  return (
    <>
      <dd className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent tabular-nums">
        {display}
      </dd>
      <dd className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </dd>
    </>
  );
}
