import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "lg",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

  const variants: Record<string, string> = {
    primary:
      "animate-btn-shimmer bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover-glow hover:scale-[1.01] [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:translate-x-0.5",
    secondary:
      "bg-transparent border-2 border-slate-200/80 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-premium hover:scale-[1.01] [&>svg]:transition-transform group-hover:[&>svg]:translate-x-0.5",
    outline:
      "bg-transparent border-2 border-slate-200/80 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-premium hover:scale-[1.01] [&>svg]:transition-transform group-hover:[&>svg]:translate-x-0.5",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-premium [&>svg]:transition-transform group-hover:[&>svg]:translate-x-0.5",
    white:
      "bg-white text-indigo-600 shadow-lg hover:bg-white/95 hover:shadow-xl hover:scale-[1.01] border border-white/20 [&>svg]:transition-transform group-hover:[&>svg]:translate-x-0.5",
  };

  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 md:px-10 py-4 text-lg",
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
