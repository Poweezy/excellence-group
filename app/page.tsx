"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Award, Users, ChevronDown, Landmark, Truck, Leaf, Droplets, Construction, Sprout, Building2, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const divisions = [
  { name: "Financial Advisory", icon: Landmark, href: "/financial", desc: "Expert wealth management and capital solutions" },
  { name: "Logistics Division", icon: Truck, href: "/logistics", desc: "End-to-end supply chain excellence" },
  { name: "Sustainability", icon: Leaf, href: "/sustainability", desc: "Green energy and environmental solutions" },
  { name: "Water Bottling", icon: Droplets, href: "/water", desc: "Premium water bottling and distribution" },
  { name: "Heavy Plant & Construction", icon: Construction, href: "/heavy-plant", desc: "Large-scale construction and infrastructure" },
  { name: "Agriculture", icon: Sprout, href: "/agriculture", desc: "Modern farming and agri-processing" },
  { name: "Mall & Property", icon: Building2, href: "/mall-property", desc: "Premium real estate development" },
  { name: "Insurance Division", icon: ShieldCheck, href: "/insurance", desc: "Comprehensive risk management solutions" },
];

const stats = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Countries Active", value: "12" },
  { label: "Divisions", value: "8" },
  { label: "Employees", value: "5,000+" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-dark">
      {/* ───── HERO ───── */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Base Layer: Dark Marble */}
        <div className="absolute inset-0">
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-40 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark" />
        </div>
        
        {/* Architectural Slanted Panels (Reference style) */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute -left-[10%] top-0 h-[150%] w-[60%] bg-dark/80 skew-x-[-12deg] border-r border-primary/20 shadow-[20px_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            style={{ transform: 'translateX(-10%) skewX(-15deg)' }}
          />
          <div 
            className="absolute -right-[15%] top-0 h-[150%] w-[50%] bg-dark/60 skew-x-[-12deg] border-l border-primary/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            style={{ transform: 'translateX(10%) skewX(-15deg)' }}
          />
        </div>

        {/* Floating Grain & Depth Overlay */}
        <div className="absolute inset-0 z-0 noise-overlay opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative"
          >
            {/* Logo Glow Ring */}
            <div className="absolute -inset-16 bg-primary/10 blur-[100px] rounded-full opacity-40 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent blur-xl rounded-full opacity-30" />
            
            <Image 
              src="/logo.png" 
              alt="Excellence Group Logo" 
              width={256}
              height={256}
              className="h-48 sm:h-72 w-auto object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl pt-8"
          >
            <h1 className="luxury-text-display text-4xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
              <span className="luxury-gradient-gold block">Diversified Strength.</span>
              <span className="text-white/90 italic mt-2 block">Unified Vision.</span>
            </h1>
            
            <div className="flex items-center gap-6 justify-center mb-12">
              <div className="h-[1px] w-12 bg-primary/30" />
              <p className="luxury-text-accent text-primary-light/60 text-[10px] sm:text-xs">
                AFRICA&apos;S PREMIER DIVERSIFIED CONGLOMERATE
              </p>
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            >
              <Link
                href="/about"
                className="px-12 py-5 bg-gold-metallic text-dark font-black luxury-text-accent text-[11px] tracking-[0.3em] hover:brightness-110 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,53,0.2)]"
              >
                DISCOVER OUR STORY
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 border border-white/20 text-white/50 luxury-text-accent text-[11px] tracking-[0.3em] hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-500"
              >
                GET IN TOUCH
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-primary/40">
          <span className="luxury-text-accent text-[10px]">Explore Excellence</span>
          <motion.div 
            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ───── DIVISIONS (World Class Catalog Style) ───── */}
      <section className="py-32 bg-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-24">
            <span className="luxury-text-accent text-primary tracking-[0.4em] mb-4 block">Institutional Portfolio</span>
            <h2 className="luxury-text-display text-5xl lg:text-7xl text-white font-medium">
              Strategic Excellence
            </h2>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mt-8" />
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          >
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <motion.div key={div.href} variants={staggerItem} className="group border-[0.5px] border-white/5 aspect-square relative overflow-hidden">
                  <Link
                    href={div.href}
                    className="flex flex-col items-center justify-center p-8 h-full transition-all duration-700 hover:bg-white/[0.02]"
                  >
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 blur-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <Icon className="w-10 h-10 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-700 relative z-10" strokeWidth={1} />
                    </div>
                    <h3 className="luxury-text-accent text-white/80 group-hover:text-white transition-colors text-center">
                      {div.name}
                    </h3>
                    <div className="mt-4 w-0 group-hover:w-8 h-[1px] bg-primary/40 transition-all duration-700" />
                    
                    {/* Hover Description overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-dark/95 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1} />
                      <h4 className="luxury-text-accent text-primary mb-4">{div.name}</h4>
                      <p className="text-slate-400 text-xs text-center leading-relaxed luxury-text-sans font-light tracking-wide">{div.desc}</p>
                      <div className="mt-6 luxury-text-accent text-[10px] text-white/40 flex items-center gap-2">
                        View Department <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <section className="bg-dark relative py-24 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-radial-luxury opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="luxury-text-display text-4xl lg:text-6xl font-medium text-white mb-4">
                  {stat.value}
                </div>
                <div className="luxury-text-accent text-[10px] text-primary/60 tracking-[0.3em] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── MISSION ───── */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="luxury-text-accent text-primary tracking-[0.4em] mb-6 block">Our Legacy</span>
              <h2 className="luxury-text-display text-5xl lg:text-7xl text-white leading-tight mb-8">
                Uncompromising<br />
                <span className="italic">Execution.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light luxury-text-sans max-w-xl">
                For over two decades, Excellence Group has redefined conglomerate management through a unique blend of traditional values and aggressive innovation. We don&apos;t just lead industries—we evolve them.
              </p>
              
              <div className="mt-12 space-y-8">
                {[
                  { icon: TrendingUp, text: "Consistent capital appreciation across multiple asset classes" },
                  { icon: Globe, text: "Strategic market penetration in 12 emerging economies" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed luxury-text-sans pt-2">{text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="relative">
              <div className="absolute -inset-20 bg-primary/5 blur-[100px] rounded-full" />
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {[
                  { label: "Revenue Grow", value: "32%" },
                  { label: "Countries", value: "12" },
                  { label: "Satisfaction", value: "98%" },
                  { label: "Rating", value: "A+" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm text-center"
                  >
                    <div className="luxury-text-display text-4xl font-medium text-white mb-2">{card.value}</div>
                    <div className="luxury-text-accent text-[8px] text-primary/60">{card.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-48 bg-dark relative overflow-hidden text-center">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-marble-luxury bg-cover bg-bottom opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="luxury-text-display text-6xl lg:text-8xl text-white mb-12 leading-tight">
              Begin Your Journey In <br />
              <span className="bg-gold-metallic bg-clip-text text-transparent italic">Excellence.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gold-metallic text-dark font-bold luxury-text-accent tracking-widest hover:brightness-110 transition-all duration-500 shadow-gold-lg"
            >
              Consult With Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
