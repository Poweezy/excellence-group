import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users, Briefcase, Zap, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Careers",
  description: "Join the Architects of Excellence. Future-focused careers with Excellence Group (Pty) Ltd."
};

export default function CareersPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-secondary text-sm font-medium uppercase tracking-[0.4em]">Future-Focused Careers</span>
            <h1 className="mt-6 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Join the <br />
              <span className="gold-shimmer italic font-light">Architects of Excellence.</span>
            </h1>
            <p className="mt-8 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              Diverse Talent. Unified Vision. We are looking for forward-thinking individuals 
              to help us anchor the future economy of Southern Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Join Us */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="left">
                 <h2 className="luxury-text-display text-4xl lg:text-6xl font-bold text-white mb-8">Cultivating <span className="italic font-light">Brilliance.</span></h2>
                 <p className="text-slate-400 text-lg font-light luxury-text-sans leading-relaxed mb-10">
                    At Excellence Group, your growth is our mission. We provide a platform for 
                    innovators, specialists, and leaders to drive meaningful transformation across 
                    our diversified portfolio.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-8">
                    {[
                       { icon: Zap, title: "Accelerated Growth", desc: "Global-standard training and mentorship programs." },
                       { icon: Star, title: "Inclusive Culture", desc: "A unified community built on mutual respect and shared values." }
                    ].map((item, i) => (
                       <div key={item.title}>
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                             <item.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <h4 className="text-white font-medium mb-2">{item.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                       </div>
                    ))}
                 </div>
              </AnimatedSection>
              <AnimatedSection direction="right" className="relative">
                 <div className="aspect-square rounded-3xl overflow-hidden gold-border bg-dark-card flex items-center justify-center p-12 text-center">
                    <div>
                       <Users className="w-20 h-20 text-secondary mx-auto mb-8 opacity-20" />
                       <h3 className="luxury-text-display text-3xl text-white mb-4">5,000+ Team Members</h3>
                       <p className="text-slate-400 text-sm font-light uppercase tracking-widest">Across Southern Africa</p>
                    </div>
                 </div>
              </AnimatedSection>
           </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="luxury-text-display text-4xl font-bold text-white">Current <span className="italic font-light">Openings.</span></h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { title: "Senior Logistics Coordinator", dept: "Logistics", type: "Full-Time" },
              { title: "Agricultural Data Analyst", dept: "Agriculture", type: "On-site" },
              { title: "Financial Risk Manager", dept: "Financial Advisory", type: "Hybrid" }
            ].map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.1}>
                 <div className="p-6 rounded-xl border border-white/5 bg-dark hover:border-secondary/30 transition-all flex items-center justify-between group cursor-pointer">
                    <div>
                       <h3 className="text-white font-medium luxury-text-sans group-hover:text-secondary transition-colors">{job.title}</h3>
                       <div className="flex gap-4 mt-2">
                          <span className="text-white/30 text-[10px] uppercase tracking-widest">{job.dept}</span>
                          <span className="text-secondary/50 text-[10px] uppercase tracking-widest">{job.type}</span>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                 </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
             <p className="text-slate-500 text-sm mb-6">Don&apos;t see a fit? Join our talent pool.</p>
             <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-secondary border border-secondary/20 px-8 py-4 hover:bg-secondary/5 transition-all luxury-text-accent text-[11px] uppercase tracking-[0.2em]"
              >
                Submit CV <Briefcase className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
