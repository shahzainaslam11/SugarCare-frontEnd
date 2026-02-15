export const SPACING = {
  section: "py-14 sm:py-16 md:py-20 lg:py-24",
  sectionGap: "space-y-16 md:space-y-24",
  container: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
  contentGap: "space-y-6 md:space-y-8",
  headingGap: "mb-4 md:mb-6",
  bodyGap: "mb-6 md:mb-8",
} as const;

export const TYPOGRAPHY = {
  h1: "text-5xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.1]",
  h2: "text-3xl md:text-4xl font-semibold tracking-[-0.02em]",
  h3: "text-xl font-semibold",
  body: "text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl",
  bodySmall: "text-sm md:text-base text-muted-foreground leading-relaxed",
} as const;

export const FEATURES = [
  {
    id: "blood-sugar",
    title: "Blood Sugar Tracking",
    description:
      "Easily log and monitor your blood sugar levels with intelligent reminders and pattern recognition.",
  },
  {
    id: "medication",
    title: "Smart Medication",
    description:
      "Never miss a dose with timely medication reminders and smart scheduling that adapts to your routine.",
  },
  {
    id: "insights",
    title: "Personalized Insights",
    description:
      "Get valuable insights into your health trends with AI-powered analytics and recommendations.",
  },
] as const;

export const BENEFITS = [
  {
    id: "predictions",
    title: "AI-Powered Predictions",
    description:
      "Get personalized insights and predictive warnings about your blood sugar levels.",
  },
  {
    id: "secure",
    title: "Secure & HIPAA Compliant",
    description:
      "Your health data is encrypted and stored securely with top global standards.",
  },
  {
    id: "multi-device",
    title: "Multi-Device Ecosystem",
    description:
      "Access your data from any device. Seamless sync across mobile and web.",
  },
  {
    id: "intuitive",
    title: "Intuitive Data Entry",
    description:
      "Quick, intuitive interface for logging health data in seconds.",
  },
  {
    id: "reports",
    title: "Shareable Reports",
    description:
      "Generate detailed reports to share with your healthcare provider.",
  },
  {
    id: "support",
    title: "Dedicated Support",
    description:
      "Expert support team available 24/7 to assist you.",
  },
] as const;

export const STATS = [
  { value: "10K+", label: "Active Users" },
  { value: "99%", label: "Prediction Accuracy" },
  { value: "24/7", label: "Expert Support" },
] as const;

export const TRUST_BADGES = [
  "HIPAA Compliant",
  "UK GDPR",
  "10K+ Users",
] as const;

export const TRUSTED_BY = [
  "Healthcare Providers",
  "NHS Trusts",
  "Diabetes UK",
  "Private Clinics",
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Game-changer for managing my type 2 diabetes. The AI insights help me understand patterns I never noticed.",
    name: "Sarah M.",
    role: "SugarCare User",
  },
  {
    id: 2,
    quote:
      "Finally, an app that feels designed for real people. Simple, powerful, and actually useful.",
    name: "James T.",
    role: "Healthcare Professional",
  },
  {
    id: 3,
    quote:
      "The predictions are surprisingly accurate. It has helped me avoid several sugar spikes.",
    name: "Emma L.",
    role: "SugarCare User",
  },
] as const;
