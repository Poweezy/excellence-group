import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excellence Group's history, vision, values, and the leadership team driving Africa's growth.",
};

const values = [
  { icon: Target, title: "Excellence", desc: "We set the highest standards in everything we do, from governance to client service." },
  { icon: Eye, title: "Integrity", desc: "Honesty and transparency guide every business decision and relationship we build." },
  { icon: Heart, title: "Sustainability", desc: "Long-term thinking shapes every strategy to protect tomorrow's opportunities." },
  { icon: Users, title: "People First", desc: "Our 5,000+ team members are our greatest asset and competitive advantage." },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">About Us</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Story Behind <span className="gold-shimmer">Excellence</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed">
              Since our founding, Excellence Group has been on a mission to build a world-class
              diversified conglomerate rooted in African values and global ambitions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left" className="p-8 rounded-2xl gold-border bg-dark-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed">
                To deliver exceptional, sustainable value to our stakeholders by leveraging our diversified
                business portfolio, world-class talent, and deep pan-African expertise to drive meaningful
                economic transformation.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="p-8 rounded-2xl gold-border bg-dark-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To be Africa&apos;s most respected and impactful diversified conglomerate — a beacon of
                excellence that inspires the next generation of African business leaders and entrepreneurs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Values</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white">
              Principles That Guide Us
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl gold-border bg-dark h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
