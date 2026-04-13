import { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrendingUp, Shield, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Investor Relations",
  description: "Transparency. Growth. Reliability. excellence Group's strategic foresight and financial integrity."
};

export default function InvestorsPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Investor Relations</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transparency. <br />
              <span className="gold-shimmer italic font-light">Growth. Reliability.</span>
            </h1>
            <p className="mt-8 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              Excellence Group (Pty) Ltd maintains a steadfast commitment to financial integrity 
              and strategic foresight — ensuring sustainable value for our global investment partners.
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
                icon: Shield, 
                title: "Financial Integrity", 
                desc: "Rigorous auditing and transparent reporting standards that build trust and ensure long-term stability."
              },
              { 
                icon: TrendingUp, 
                title: "Strategic Foresight", 
                desc: "Data-driven investment strategies that leverage African market trends and emerging opportunities."
              },
              { 
                icon: BarChart3, 
                title: "Operational Reliability", 
                desc: "Consistent delivery across our diversified portfolio, backed by world-class governance frameworks."
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

      {/* Resources */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
             <h2 className="luxury-text-display text-4xl font-bold text-white">Investor <span className="italic font-light">Resources.</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Annual Report 2025", 
                path: "/documents/investors/annual-report-2025.pdf" 
              },
              { 
                name: "Interim Financial Results", 
                path: "/documents/investors/interim-results.pdf" 
              },
              { 
                name: "Strategic Overview Document", 
                path: "/documents/investors/strategic-overview.pdf" 
              },
              { 
                name: "Corporate Governance Framework", 
                path: "/documents/investors/governance-framework.pdf" 
              }
            ].map((doc, i) => (
              <a 
                key={doc.name} 
                href={doc.path}
                download
                className="flex items-center justify-between p-6 rounded-xl border border-white/5 bg-dark hover:border-secondary/30 transition-all cursor-pointer group"
              >
                <span className="text-white font-medium luxury-text-sans">{doc.name}</span>
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-secondary/20 transition-colors">
                   <ArrowRight className="w-4 h-4 text-white group-hover:text-secondary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="luxury-text-display text-3xl font-bold text-white mb-8">
              Connect with our <span className="italic font-light">Investor Relations</span> team.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-secondary border border-secondary/20 px-10 py-5 hover:bg-secondary/5 transition-all luxury-text-accent text-[11px] uppercase tracking-[0.2em]"
            >
              Inquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
