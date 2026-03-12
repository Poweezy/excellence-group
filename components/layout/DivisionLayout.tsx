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
}

export default function DivisionLayout({
  badge,
  title,
  subtitle,
  icon: Icon,
  description,
  services,
}: DivisionLayoutProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">{badge}</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-2xl text-secondary font-light luxury-text-sans tracking-wide italic">{subtitle}</p>
            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl luxury-text-sans font-light">{description}</p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-dark font-bold hover:bg-primary-light transition-all shadow-gold-sm group"
              >
                Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-slate-300 hover:border-primary/40 hover:text-primary transition-all"
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
                <div className="group p-6 rounded-2xl gold-border bg-dark-card hover:bg-dark-elevated transition-all h-full">
                  <h3 className="luxury-text-display text-xl text-white mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed luxury-text-sans font-light">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-bold hover:bg-primary-light transition-all shadow-gold-md hover:shadow-gold-lg group"
            >
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
