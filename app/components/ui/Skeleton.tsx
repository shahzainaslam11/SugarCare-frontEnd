import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-skeleton-shimmer rounded-lg bg-slate-200/50 ${className}`}
      aria-hidden
      {...props}
    />
  );
}
