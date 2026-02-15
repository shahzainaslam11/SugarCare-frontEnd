<<<<<<< HEAD
"use client";

=======
>>>>>>> 9fa9bd377c4b926dcfbba67987e7b20a80f51dd4
import {
  ChartIcon,
  PillIcon,
  AnalyticsIcon,
  CheckIcon,
} from "./components/icons";
<<<<<<< HEAD
import { Button } from "./components/ui/Button";
import { Badge } from "./components/ui/Badge";
import { SectionHeader } from "./components/ui/SectionHeader";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import {
  SPACING,
  TYPOGRAPHY,
  FEATURES,
  BENEFITS,
  STATS,
  TRUST_BADGES,
  TRUSTED_BY,
  TESTIMONIALS,
} from "./lib/constants";
import { AnimatedCounter } from "./components/AnimatedCounter";

const FEATURE_ICONS = [ChartIcon, PillIcon, AnalyticsIcon] as const;

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CtaSection />
      <MissionAndTestimonialsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className={`relative min-h-[85vh] sm:min-h-[90vh] flex items-center ${SPACING.section}`}
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400/12 rounded-full blur-[100px] motion-safe:animate-float-slow animate-gradient-drift" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-[120px] motion-safe:animate-float-slow delay-1000 animate-gradient-drift" />
        <div className="noise-overlay -z-10" aria-hidden />
      </div>

      <div className={`w-full ${SPACING.container}`}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fadeUp" duration={500} animateOnMount>
            <Badge
              variant="default"
              showDot={false}
              className="mb-6 md:mb-8 glass-card border-indigo-200/50 text-indigo-700 transition-transform duration-300 hover-scale"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 motion-safe:animate-pulse shrink-0" aria-hidden />
              AI-Powered Diabetes Management
            </Badge>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={100} duration={600} animateOnMount>
            <h1 className={`${TYPOGRAPHY.h1} text-slate-900 mb-6 md:mb-8 tracking-tight`}>
              <span className="block font-bold text-slate-900">Take Control of Your</span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_auto] motion-safe:animate-gradient">
                Diabetes Journey
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={200} duration={600} animateOnMount>
            <p className={`${TYPOGRAPHY.body} mb-8 md:mb-10 max-w-2xl mx-auto`}>
              Your trusted companion for managing diabetes. Track blood sugar,
              medications, and health data in one place with{" "}
              <span className="font-medium text-indigo-600">AI-powered insights</span>.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={300} duration={600} animateOnMount>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <Button variant="primary" size="lg" className="sm:min-w-[200px] group cta-primary">
                Get Started Free
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-10 md:mb-12">
              No credit card required · Takes 30 seconds
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={350} duration={600} animateOnMount>
            <div className="py-6 md:py-8 border-y border-slate-200/60 mb-12 md:mb-16">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Trusted by
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-slate-500">
                {TRUSTED_BY.map((name) => (
                  <span key={name} className="text-sm md:text-base font-medium">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={400} duration={600} animateOnMount>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
              {TRUST_BADGES.map((badge) => (
                <Badge
                  key={badge}
                  className="transition-transform duration-300 hover-scale cursor-default"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={500} duration={700} animateOnMount>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="card-premium rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/50 hover-lift tap-feedback cursor-default hover:border-indigo-200/60"
                >
                  <dt className="sr-only">{label}</dt>
                  <AnimatedCounter value={value} label={label} />
                </div>
              ))}
            </dl>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className={`relative ${SPACING.section} bg-gradient-to-b from-slate-50/80 to-white`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] -z-10" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(99,102,241,0.05),transparent)] -z-10" aria-hidden />
      <div className="noise-overlay -z-10" aria-hidden />
      <div className={SPACING.container}>
        <AnimateOnScroll animation="fadeUp">
          <div className="mb-6">
            <Badge variant="emerald" showDot={false} className="transition-transform duration-300 hover-scale">
              Trusted by Healthcare Professionals
            </Badge>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={50}>
          <SectionHeader
            titleId="features-heading"
            eyebrow="Core Features"
            title="Powerful Tools for Daily Control"
            subtitle="Everything you need to manage diabetes effectively."
          />
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => (
            <AnimateOnScroll key={feature.id} animation="fadeUp" delay={100 + i * 80} duration={500}>
              <article className="group relative h-full p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl hover-lift tap-feedback cursor-pointer transition-all duration-300 hover:border-slate-200/80">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
                    {(() => {
                      const Icon = FEATURE_ICONS[i];
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className={`${TYPOGRAPHY.h3} text-slate-900 mb-3 transition-colors duration-200 group-hover:text-indigo-600`}>
                    {feature.title}
                  </h3>
                  <p className={TYPOGRAPHY.bodySmall}>
                    {feature.description}
                  </p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className={`relative ${SPACING.section} bg-white`}
    >
      <div className="section-separator absolute top-0 left-0 right-0" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_80%_20%,rgba(99,102,241,0.04),transparent)] -z-10" aria-hidden />
      <div className={SPACING.container}>
        <AnimateOnScroll animation="fadeUp">
          <SectionHeader
            titleId="benefits-heading"
            eyebrow="Why Choose Us"
            title="Why SugarCare is Your Best Choice"
            subtitle="Trusted by patients and recommended by healthcare professionals."
          />
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 lg:gap-x-16 lg:gap-y-10">
          {BENEFITS.map((benefit, i) => (
            <AnimateOnScroll key={benefit.id} animation={i % 2 === 0 ? "slideRight" : "slideLeft"} delay={i * 60} duration={500}>
              <article className="flex gap-5 group cursor-default">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                  aria-hidden
                >
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className={`${TYPOGRAPHY.h3} text-slate-900 mb-2 transition-colors duration-300 group-hover:text-indigo-600`}>
                    {benefit.title}
                  </h3>
                  <p className={TYPOGRAPHY.bodySmall}>
                    {benefit.description}
                  </p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="fadeUp" delay={200} duration={500}>
          <div className="mt-16 md:mt-20 text-center">
            <Button variant="primary" size="lg" className="sm:min-w-[200px] group cta-primary">
              Get Started Free
              <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className={`relative ${SPACING.section} overflow-hidden`}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-700"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.04' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.1),transparent)]" aria-hidden />
      <div className="noise-overlay -z-10" aria-hidden />
      <div className={`${SPACING.container} text-center`}>
        <AnimateOnScroll animation="scaleIn" duration={600}>
          <h2 id="cta-heading" className={`${TYPOGRAPHY.h2} text-white mb-4`}>
            Ready to Take Control Today?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands managing diabetes more effectively with SugarCare.
          </p>
          <Button variant="white" size="lg" className="min-w-[240px] sm:min-w-[260px] group shadow-xl">
            Start Your Free Trial Now
            <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function MissionAndTestimonialsSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className={`relative ${SPACING.section} bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80`}
    >
      <div className="section-separator absolute top-0 left-0 right-0" aria-hidden />
      <div className="noise-overlay -z-10" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-indigo-100/25 rounded-full blur-[120px] -z-10"
        aria-hidden
      />
      <div className={SPACING.container}>
        <AnimateOnScroll animation="fadeUp">
          <SectionHeader
            titleId="mission-heading"
            eyebrow="Our Story"
            title="Our Mission"
            subtitle="SugarCare makes diabetes management simple, effective, and predictive. We empower individuals to take control of their health through easy-to-use tools and comprehensive tracking."
          />
        </AnimateOnScroll>

        <div className="mt-16 md:mt-20">
          <h3 id="testimonials-heading" className="sr-only">
            What our users say
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimateOnScroll key={t.id} animation="fadeUp" delay={i * 80} duration={500}>
                <blockquote className="group/card relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-lg hover:shadow-xl hover-lift tap-feedback cursor-default h-full flex flex-col transition-all duration-300 hover:border-indigo-200/50">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-indigo-500/0 group-hover/card:ring-indigo-500/10 transition-all duration-300 pointer-events-none" aria-hidden />
                  <div className="flex gap-0.5 text-amber-500 mb-4" aria-hidden>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} className="w-5 h-5" />
                    ))}
                  </div>
                  <p className={`${TYPOGRAPHY.bodySmall} text-slate-700 mb-6 flex-1`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic font-semibold text-slate-900">
                      {t.name}
                    </cite>
                    <p className="text-sm text-muted-foreground mt-0.5">{t.role}</p>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <AnimateOnScroll animation="fadeUp" delay={150} duration={500}>
          <div className="mt-16 md:mt-20 text-center">
            <Button variant="primary" size="lg" className="sm:min-w-[200px] group cta-primary">
              Get Started Free
              <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
=======

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative overflow-hidden pt-20 md:pt-32 lg:pt-40 pb-24 md:pb-36 lg:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-80"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400 opacity-5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 opacity-5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300 opacity-3 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/80 backdrop-blur-md rounded-full border border-indigo-200/50 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-indigo-600 font-semibold text-sm md:text-base tracking-wide">
              ✨ AI-Powered Diabetes Management
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">
            Take Control of Your
            <span className="block mt-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Diabetes Journey
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Your trusted companion for managing diabetes. Track your blood sugar
            levels, medications, and health data all in one convenient place
            with <span className="text-indigo-600 font-semibold">AI-powered insights</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
            <button className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-105 transition-all duration-300 transform overflow-hidden">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative border-2 border-indigo-600 text-indigo-600 px-12 py-5 rounded-full font-bold text-lg md:text-xl bg-white hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-20 md:mt-24 max-w-3xl mx-auto border-t border-gray-200/50 pt-10">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Active Users
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Prediction Accuracy
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="text-center mb-20 md:mb-24 px-4">
            <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-4">
              Powerful Tools for Daily Control
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to manage your diabetes effectively, designed
              for simplicity and accuracy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 sm:px-6 lg:px-8">
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <ChartIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Blood Sugar Tracking
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Easily log and monitor your blood sugar levels throughout the day
                  with intelligent reminders and pattern recognition.
                </p>
              </div>
            </div>
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <PillIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Smart Medication
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Never miss a dose with timely medication reminders and smart
                  scheduling that adapts to your daily routine.
                </p>
              </div>
            </div>
            <div className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <AnalyticsIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Personalized Insights
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Get valuable insights into your health trends and patterns with
                  AI-powered analytics and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 md:mb-24">
            <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-4">
              Why SugarCare is Your Best Choice
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by patients and recommended by healthcare professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            <div className="space-y-10">
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    AI-Powered Predictions
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Get personalized insights and predictive warnings about your
                    blood sugar levels using advanced machine learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Secure & HIPAA Compliant
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Your health data is encrypted and stored securely. We adhere
                    to top global standards to prioritize your privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Multi-Device Ecosystem
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Access your data from any device. Your information syncs
                    seamlessly across mobile and web platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div>
            <div className="space-y-10 md:col-start-2">
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Intuitive Data Entry
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Quick and intuitive interface for logging your health data.
                    Takes just seconds to record your readings accurately.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Shareable Reports
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Generate detailed, clean reports and share them with your
                    healthcare provider for better care coordination.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Get help when you need it with our expert support team
                    available 24/7 to assist you on your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 lg:p-20 text-center text-white shadow-2xl shadow-indigo-600/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight">
                Ready to Take Control Today?
              </h2>
              <p className="text-xl md:text-2xl mb-12 md:mb-14 max-w-3xl mx-auto opacity-95 leading-relaxed">
                Join thousands of users who are already managing their diabetes more
                effectively with <span className="font-bold">SugarCare's AI-powered platform</span>.
              </p>
              <button className="group relative bg-white text-indigo-600 px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Start Your Free Trial Now</span>
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold uppercase text-indigo-600 tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 mt-4">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            SugarCare is designed to make diabetes management <span className="text-indigo-600 font-semibold">simple, effective, and predictive</span>. Our mission is to empower individuals
            to take control of their health through easy-to-use tools and
            comprehensive, clinically-relevant tracking capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 9fa9bd377c4b926dcfbba67987e7b20a80f51dd4
