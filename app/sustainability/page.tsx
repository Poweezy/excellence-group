import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Leaf, Heart, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Sustainability & Social Impact",
  description: "Excellence Group's commitment to sustainable growth and measurable social impact across Eswatini."
};

export default function SustainabilityPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-secondary text-sm font-medium uppercase tracking-[0.4em]">Environmental & Social Governance</span>
            <h1 className="mt-6 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Growth That <br />
              <span className="gold-shimmer italic font-light">Uplifts Communities.</span>
            </h1>
            <p className="mt-8 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              Our success is measured by the progress of the people we serve. We are committed to Eswatini&apos;s 
              long-term prosperity through sustainable innovation and social progress.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pillars */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                icon: Leaf, 
                title: "Sustainable Innovation", 
                desc: "Implementing green technologies across our divisions to minimize environmental footprint while maximizing efficiency."
              },
              { 
                icon: Heart, 
                title: "Social Progress", 
                desc: "Investing in education, healthcare, and infrastructure projects that create lasting value for the Eswatini community."
              },
              { 
                icon: ShieldCheck, 
                title: "Integrity & Governance", 
                desc: "Maintaining the highest standards of corporate governance and ethical business practices in all our operations."
              }
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1} className="p-10 rounded-2xl gold-border bg-dark-card group hover:bg-dark-elevated transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1} />
                </div>
                <h3 className="luxury-text-display text-2xl text-white mb-6">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light luxury-text-sans">
                  {pillar.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Youth Scholarships" },
              { value: "100%", label: "Local Sourcing" },
              { value: "30%", label: "Carbon Reduction" },
              { value: "12", label: "Community Hubs" }
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="luxury-text-display text-5xl font-bold text-secondary mb-4">{stat.value}</div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] luxury-text-accent">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="luxury-text-display text-4xl font-bold text-white mb-8">
              Want to learn more about our <span className="italic font-light">Impact?</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-secondary border border-secondary/20 px-10 py-5 hover:bg-secondary/5 transition-all luxury-text-accent text-[11px] uppercase tracking-[0.2em]"
            >
              Request Impact Report <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
