import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users, Briefcase, Zap, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Careers",
  description: "Join the Architects of Excellence. Future-focused careers with Excellence Group (Pty) Ltd."
};

const MotionDivClient = dynamic(() => import("react").then(() => {
  const { motion } = require("framer-motion");
  return { default: motion.div };
}), { ssr: false });

export default function CareersPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero with Marble */}
      <section className="py-24 animated-bg relative min-h-[70vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-30 brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Future-Focused Careers</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
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
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <h2 className="luxury-text-display text-4xl lg:text-6xl font-bold text-white mb-8">Cultivating <span className="italic gold-shimmer">Brilliance.</span></h2>
              <p className="text-slate-400 text-lg font-light luxury-text-sans leading-relaxed mb-10">
                At Excellence Group, your growth is our mission. We provide a platform for 
                innovators, specialists, and leaders to drive meaningful transformation across 
                our diversified portfolio.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Accelerated Growth", desc: "Global-standard training and mentorship programs with career progression paths." },
                  { icon: Star, title: "Inclusive Culture", desc: "Unified community built on mutual respect, diversity, and shared values." }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="p-6 rounded-xl gold-border bg-dark-card hover:bg-dark-elevated transition-all group animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:gold-shimmer transition-all">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden gold-border bg-dark-card backdrop-blur-sm flex items-center justify-center p-12 text-center relative hover:scale-102 transition-transform hover:rotate-1">
                <div>
                  <Users className="w-20 h-20 text-primary mx-auto mb-8" />
                  <h3 className="luxury-text-display text-3xl font-bold text-white mb-4 gold-shimmer">5,000+</h3>
                  <p className="text-slate-400 text-lg font-light uppercase tracking-widest">Team Members Across Southern Africa</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Open Roles */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="luxury-text-display text-4xl font-bold text-white">Current <span className="italic gold-shimmer">Openings.</span></h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto luxury-text-sans">
              Strategic roles driving Excellence Group's diversified operations.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="p-12 text-center rounded-3xl border border-white/5 bg-dark-bg/40 backdrop-blur-sm shadow-gold-sm hover:shadow-gold-md hover:border-primary/20 transition-all duration-500">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-primary/60" />
                </div>
                <h3 className="luxury-text-display text-2xl lg:text-3xl font-bold text-white mb-4">No Current Vacancies</h3>
                <p className="text-slate-400 text-lg luxury-text-sans max-w-lg mx-auto leading-relaxed font-light">
                  Our teams are currently at full capacity across all divisions. However, Excellence Group is continuously evolving.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto luxury-text-sans font-light">
              We proactively seek visionary talent. Submit your CV to our talent pool to be notified of future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl gold-metallic-solid text-dark font-bold uppercase tracking-widest text-sm shadow-gold-lg hover:shadow-gold-xl hover:brightness-105 transition-all group"
            >
              Submit CV <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

