"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Award, Users, ChevronDown, Landmark, Truck, Leaf, Droplets, Construction, Sprout, Building2, ShieldCheck, MapPin, Heart, Zap, Target } from "lucide-react";
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

const values = [
  { name: "Integrity", icon: ShieldCheck, desc: "Upholding the highest moral and ethical standards in every transaction." },
  { name: "Innovation", icon: Zap, desc: "Pioneering new technologies and methodologies to lead global markets." },
  { name: "Impact", icon: Target, desc: "Creating sustainable value for our shareholders and communities." },
  { name: "Excellence", icon: Award, desc: "A relentless pursuit of perfection in all our diversified ventures." },
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="overflow-hidden bg-dark">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      {/* ───── HERO ───── */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Base Layer: Dark Marble */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-30 brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
        </div>
        
        {/* Architectural Slanted Panels (Frame style - No overlap with center) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute -left-[20%] top-0 h-[150%] w-[50%] bg-dark/60 skew-x-[-15deg] border-r border-primary/20 shadow-[20px_0_50px_rgba(0,0,0,0.8)] backdrop-blur-[2px]"
          />
          <div 
            className="absolute -right-[20%] top-0 h-[150%] w-[50%] bg-dark/40 skew-x-[-15deg] border-l border-primary/20 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] backdrop-blur-[2px]"
          />
        </div>

        {/* Dynamic Light Casting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-10 relative"
          >
            <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full opacity-30 animate-pulse" />
            <Image 
              src="/logo.png" 
              alt="Excellence Group Logo" 
              width={220}
              height={220}
              className="h-40 sm:h-56 w-auto object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="luxury-text-display text-5xl sm:text-8xl lg:text-[9rem] font-bold mb-10 tracking-tighter leading-[0.85]">
              <span className="luxury-gradient-gold block pb-4">Diversified Strength.</span>
              <span className="text-white/80 italic block">Unified Vision.</span>
            </h1>
            
            <div className="flex items-center gap-8 justify-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <p className="luxury-text-accent text-primary-light/70 text-[11px] sm:text-sm tracking-[0.4em]">
                PREMIER MULTIDISCIPLINARY CONGLOMERATE
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col sm:flex-row gap-10 justify-center items-center"
            >
              <Link
                href="/about"
                className="group relative px-14 py-6 overflow-hidden"
              >
                <div className="absolute inset-0 gold-metallic-solid" />
                <span className="relative z-10 text-dark font-black luxury-text-accent text-[12px] tracking-[0.3em]">
                  DISCOVER THE GROUP
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
              
              <Link
                href="/contact"
                className="group relative px-14 py-6 border border-white/20 hover:border-primary/40 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                <span className="relative z-10 text-white/60 group-hover:text-white luxury-text-accent text-[12px] tracking-[0.3em] transition-colors">
                  GET IN TOUCH
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-primary/30">
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="flex flex-col items-center"
          >
            <span className="luxury-text-accent text-[9px] mb-4">Architecture of Excellence</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
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

      {/* ───── GLOBAL PRESENCE (Minimalist Footprint) ───── */}
      <section className="py-32 bg-dark-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-marble-luxury opacity-5 contrast-125" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <AnimatedSection className="lg:w-1/2" direction="left">
              <span className="luxury-text-accent text-primary tracking-[0.4em] mb-4 block">Global Footprint</span>
              <h2 className="luxury-text-display text-5xl lg:text-7xl text-white mb-8">
                Strategic <span className="italic">Saturation.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 luxury-text-sans">
                With a presence in 12 countries, Excellence Group operates at the intersection of emerging opportunities and established markets, ensuring diversified resilience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-primary text-2xl font-display mb-2">Johannesburg</div>
                  <div className="text-slate-500 text-xs luxury-text-accent">Global Headquarters</div>
                </div>
                <div>
                  <div className="text-primary text-2xl font-display mb-2">Dubai</div>
                  <div className="text-slate-500 text-xs luxury-text-accent">Financial Hub</div>
                </div>
                <div>
                  <div className="text-primary text-2xl font-display mb-2">London</div>
                  <div className="text-slate-500 text-xs luxury-text-accent">European Relations</div>
                </div>
                <div>
                  <div className="text-primary text-2xl font-display mb-2">Singapore</div>
                  <div className="text-slate-500 text-xs luxury-text-accent">Asia-Pacific Logistics</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2 relative" direction="right">
              {/* Minimalist Map Visualization Placeholder with Icons */}
              <div className="aspect-[4/3] border border-white/5 bg-white/[0.01] rounded-2xl flex items-center justify-center p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                <Globe className="w-64 h-64 text-primary/10 animate-pulse-slow" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-full h-full">
                      {/* Abstract Dots for Presence */}
                      <MapPin className="absolute top-[30%] left-[20%] w-4 h-4 text-primary animate-bounce" />
                      <MapPin className="absolute top-[60%] left-[45%] w-4 h-4 text-primary animate-bounce [animation-delay:0.5s]" />
                      <MapPin className="absolute top-[40%] left-[70%] w-4 h-4 text-primary animate-bounce [animation-delay:1s]" />
                      <MapPin className="absolute top-[15%] left-[55%] w-4 h-4 text-primary animate-bounce [animation-delay:1.5s]" />
                   </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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

      {/* ───── CORE VALUES (Refined Cards) ───── */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="luxury-text-accent text-primary tracking-[0.4em] mb-4 block">Our DNA</span>
            <h2 className="luxury-text-display text-5xl lg:text-7xl text-white">
              Institutional <span className="italic font-light">Integrity.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.name} delay={i * 0.1}>
                <div className="group p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 border border-primary/20 rotate-45 flex items-center justify-center mb-10 group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-700">
                    <v.icon className="-rotate-45 w-6 h-6 text-primary" strokeWidth={1} />
                  </div>
                  <h3 className="luxury-text-accent text-white mb-4 text-lg">{v.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light luxury-text-sans">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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
