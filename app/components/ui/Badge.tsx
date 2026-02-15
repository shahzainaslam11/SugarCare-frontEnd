interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "light";
  showDot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  showDot = true,
  className = "",
}: BadgeProps) {
  const styles = {
    default:
      "bg-white/90 backdrop-blur-md border border-slate-200/60 text-slate-700",
    emerald:
      "bg-indigo-50 text-indigo-700 border border-indigo-200/60",
    light: "bg-white/20 text-white border border-white/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${styles[variant]} ${className}`}
    >
      {showDot && variant !== "emerald" && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
