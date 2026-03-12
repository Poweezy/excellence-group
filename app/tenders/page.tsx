import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Gavel, ClipboardList, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Tenders & Procurement",
  description: "Official procurement Gate for Excellence Group (Pty) Ltd. Partnering with excellence through operational integrity."
};

export default function TendersPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-secondary text-sm font-medium uppercase tracking-[0.4em]">Official Procurement Gate</span>
            <h1 className="mt-6 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Partnering with <br />
              <span className="gold-shimmer italic font-light">Excellence.</span>
            </h1>
            <p className="mt-8 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              We seek partners who share our commitment to operational integrity and innovation. 
              Explore active opportunities to collaborate with our diversified group.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Active Tenders */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="luxury-text-display text-4xl font-bold text-white">Active <span className="italic font-light">Opportunities.</span></h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { id: "EG-LOG-2026-001", title: "Heavy Plant Fleet Maintenance", deadline: "March 30, 2026", category: "Logistics" },
              { id: "EG-AGR-2026-004", title: "Smart Irrigation Infrastructure", deadline: "April 15, 2026", category: "Agriculture" },
              { id: "EG-FIN-2026-009", title: "Corporate Audit Services", deadline: "May 10, 2026", category: "Corporate" }
            ].map((tender, i) => (
              <AnimatedSection key={tender.id} delay={i * 0.1}>
                <div className="p-8 rounded-2xl gold-border bg-dark-card flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-dark-elevated transition-all group">
                   <div>
                      <div className="flex items-center gap-3 mb-3">
                         <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest rounded-full">{tender.category}</span>
                         <span className="text-white/40 text-[10px] uppercase tracking-widest">ID: {tender.id}</span>
                      </div>
                      <h3 className="luxury-text-display text-2xl text-white group-hover:text-secondary transition-colors">{tender.title}</h3>
                   </div>
                   <div className="flex items-center gap-8">
                      <div className="text-right hidden sm:block">
                         <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Deadline</div>
                         <div className="text-white text-sm font-light">{tender.deadline}</div>
                      </div>
                      <button className="flex items-center gap-2 text-secondary text-xs uppercase tracking-[0.2em] font-medium border-b border-secondary/20 pb-1 hover:border-secondary transition-all">
                         View Details <FileText className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="left">
                 <h2 className="luxury-text-display text-4xl font-bold text-white mb-8">Onboarding <span className="italic font-light">Standards.</span></h2>
                 <p className="text-slate-400 text-lg font-light luxury-text-sans leading-relaxed mb-8">
                    To ensure operational excellence, all prospective partners must undergo a rigorous 
                    due diligence process focused on integrity, sustainability, and quality performance.
                 </p>
                 <ul className="space-y-4">
                    {[
                       "Valid Eswatini Business Registration",
                       "Tax Compliance Certification",
                       "Demonstrated Industry Expertise",
                       "Alignment with ESG Standards"
                    ].map(item => (
                       <li key={item} className="flex items-center gap-4 text-white/70 text-sm luxury-text-sans">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0" /> {item}
                       </li>
                    ))}
                 </ul>
              </AnimatedSection>
              <AnimatedSection direction="right" className="p-10 rounded-3xl bg-dark gold-border">
                 <h3 className="luxury-text-display text-2xl text-white mb-6">Vendor Registration</h3>
                 <p className="text-slate-400 text-sm font-light mb-8">
                    Start your journey as an official partner of Excellence Group by completing our 
                    digital vendor registration portal.
                 </p>
                 <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-3 bg-secondary text-dark font-bold py-5 rounded-xl hover:bg-secondary-light transition-all uppercase tracking-widest text-xs"
                 >
                    Register as Vendor <ArrowRight className="w-4 h-4" />
                 </Link>
              </AnimatedSection>
           </div>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle } from "lucide-react";
