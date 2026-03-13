import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Eye, Heart, Users, ShieldCheck, Zap, Award, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excellence Group (Pty) Ltd - a premium and resilient diversified enterprise driving growth across Africa.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty and transparency guide every business decision and relationship we build." },
  { icon: Zap, title: "Innovation", desc: "Pioneering new technologies and methodologies to lead global markets." },
  { icon: Award, title: "Excellence", desc: "We set the highest standards in everything we do, from governance to client service." },
  { icon: Leaf, title: "Sustainability", desc: "Long-term thinking shapes every strategy to protect tomorrow's opportunities." },
  { icon: Heart, title: "Social Impact", desc: "Creating measurable value and upliftment for our local communities in Eswatini." },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Marble */}
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-30 brightness-[0.7] z-0 absolute inset-0"
            priority
          />
          {/* Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
          {/* Slant Panels */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Digital Flagship</span>
            <h1 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Diversified Strength. <br />
              <span className="gold-shimmer italic font-light">Unified Vision.</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              Since our founding, Excellence Group (Pty) Ltd has served as a resilient, 
              forward-thinking enterprise anchored in the future economy of Eswatini.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left" className="p-10 rounded-2xl gold-border bg-dark-card backdrop-blur-sm group hover:shadow-gold-lg hover:bg-dark-elevated transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" strokeWidth={1} />
              </div>
              <h2 className="luxury-text-display text-4xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light luxury-text-sans">
                To deliver exceptional, sustainable value to our stakeholders by leveraging our diversified
                business portfolio, world-class talent, and deep pan-African expertise to drive meaningful
                economic transformation.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="p-10 rounded-2xl gold-border bg-dark-card backdrop-blur-sm group hover:shadow-gold-lg hover:bg-dark-elevated transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-primary" strokeWidth={1} />
              </div>
              <h2 className="luxury-text-display text-4xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light luxury-text-sans">
                To be a leading diversified enterprise that anchors the future economy of Eswatini through 
                integrity, innovation, and unwavering operational excellence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our DNA</span>
            <h2 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white">
              Core <span className="italic font-light">Values.</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl gold-border bg-dark backdrop-blur-sm h-full flex flex-col group hover:bg-dark-elevated hover:shadow-gold-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1} />
                  </div>
                  <h3 className="luxury-text-accent text-[11px] text-white/50 mb-3 tracking-widest group-hover:text-primary group-hover:gold-shimmer transition-all">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-grow luxury-text-sans font-light">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Leadership Team */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-medium uppercase tracking-widest text-center block">Leadership Steering</span>
            <h2 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white text-center">
              The Visionaries Behind <span className="italic font-light gold-shimmer">Excellence.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl gold-border bg-dark-card backdrop-blur-sm aspect-[4/5] flex flex-col justify-end p-10 shadow-gold-sm hover:shadow-gold-lg transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
                  <div className="relative z-20">
                    <div className="w-12 h-[1px] bg-primary mb-6" />
                    <h3 className="luxury-text-display text-3xl text-white group-hover:gold-shimmer transition-all">Executive Member {i}</h3>
                    <p className="text-primary text-xs uppercase tracking-[0.3em] font-medium mt-3 mb-6">Board of Directors</p>
                    <p className="text-slate-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 luxury-text-sans font-light">
                      Senior leadership at Excellence Group ensures the unified vision remains anchored in operational excellence 
                      while driving social impact across Eswatini and Southern Africa.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />
    </div>
  );
}

