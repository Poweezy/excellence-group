import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface Service {
  title: string;
  desc: string;
}

interface DivisionLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  services: Service[];
  color?: string;
  heroImage?: string;
}

export default function DivisionLayout({
  badge,
  title,
  subtitle,
  icon: Icon,
  description,
  services,
  heroImage,
}: DivisionLayoutProps) {
  // Helper to determine background animation based on title
  const getBackgroundAnimation = () => {
    const t = title.toLowerCase();
    if (t.includes("water")) return "animate-ripple";
    if (t.includes("logistics")) return "translate-x-[-2%] animate-pulse duration-[10s]"; // Simple movement feel
    if (t.includes("financial") || t.includes("insurance")) return "shimmer-luxury-overlay";
    if (t.includes("agriculture")) return "scale-105 animate-pulse duration-[15s]";
    if (t.includes("heavy plant")) return "brightness-[0.8] contrast-[1.1]";
    return "";
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Hero Image (New specific image) */}
            {heroImage && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  className="object-cover opacity-65"
                  priority
                />
              </div>
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
          {/* Slant Panels */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">{badge}</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-2xl text-secondary font-light luxury-text-sans tracking-wide italic gold-shimmer">{subtitle}</p>
            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl luxury-text-sans font-light">{description}</p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="group relative px-8 py-4 gold-metallic-solid min-w-[200px] inline-flex items-center gap-2"
              >
                <span className="relative z-10 text-dark font-bold luxury-text-accent tracking-[0.2em]">
                  Partner With Us
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#divisions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-slate-300 hover:border-primary/40 hover:text-primary transition-all hover:no-underline scroll-mt-24"
              >
                All Divisions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <span className="luxury-text-accent text-secondary text-sm font-medium uppercase tracking-[0.4em]">Our Expertise</span>
            <h2 className="mt-4 luxury-text-display text-4xl lg:text-6xl font-bold text-white">How We <span className="italic">Deliver Value.</span></h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl gold-border bg-dark-card backdrop-blur-sm shadow-gold-sm hover:shadow-gold-lg hover:bg-dark-elevated transition-all h-full">
                  <h3 className="luxury-text-display text-xl text-white mb-4 group-hover:text-primary gold-shimmer transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed luxury-text-sans font-light">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ready to engage with our <span className="gold-shimmer">{badge}</span> team?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact us to explore how we can create value together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-metallic-solid text-dark font-bold hover:brightness-110 transition-all shadow-gold-md hover:shadow-gold-lg group tracking-widest uppercase"
            >
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

