interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "light";
  titleId?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "default",
  titleId,
}: SectionHeaderProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-slate-900";
  const subColor = isLight ? "text-white/90" : "text-muted-foreground";
  const badgeBg = isLight ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-600";

  return (
    <header className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <span
          className={`inline-block mb-4 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider ${badgeBg}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={titleId}
        className={`text-3xl md:text-4xl font-semibold tracking-tight ${textColor} mb-4 leading-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${subColor} max-w-2xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
