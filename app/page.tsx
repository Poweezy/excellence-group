"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { divisions, values } from "@/lib/data";
import { cn } from "@/lib/utils";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Base Layer: Deep Navy Marble */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
        </div>

        {/* Architectural Framing */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
          <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-l border-primary/10 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Excellence Group Logo"
              width={180}
              height={180}
              className="h-48 sm:h-64 w-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="luxury-text-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[0.9]">
              <span className="luxury-gradient-gold block pb-2">Diversified Strength.</span>
              <span className="text-white italic block">Unified Vision.</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg font-light max-w-2xl mx-auto mb-10 luxury-text-sans tracking-wide">
              A premium, resilient, forward-thinking diversified African enterprise driving sustainable growth across Eswatini and Southern Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="/about"
                className="group relative px-12 py-5 gold-metallic-solid min-w-[240px]"
              >
                <span className="relative z-10 text-dark font-bold luxury-text-accent tracking-[0.2em]">
                  OUR CORE POSITIONING
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>

              <Link
                href="/contact"
                className="group relative px-12 py-5 border border-primary/40 hover:border-primary transition-all duration-500 min-w-[240px]"
              >
                <span className="relative z-10 text-primary group-hover:text-white luxury-text-accent tracking-[0.2em] transition-colors">
                  CONSULT WITH US
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-primary/40">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* ───── VISION QUOTE ───── */}
      <section className="py-32 bg-dark-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-12" />
            <blockquote className="luxury-text-display text-3xl sm:text-5xl lg:text-6xl text-white italic font-light leading-snug">
              "To become a leading diversified African enterprise recognized for operational excellence, sustainable growth, and measurable social impact."
            </blockquote>
            <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-12" />
          </AnimatedSection>
        </div>
      </section>

      {/* ───── DIVISIONS (World Class Catalog Style) ───── */}
      <section id="divisions" className="py-32 bg-dark relative border-t border-white/5 scroll-mt-20">
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
                    className="flex flex-col items-center justify-center p-8 h-full transition-all duration-700 hover:bg-white/[0.02] relative"
                  >
                    {/* Faint Background Image */}
                    {div.image && (
                      <div className="absolute inset-0 z-0 overflow-hidden opacity-55 group-hover:opacity-75 transition-opacity duration-700">
                        <Image
                          src={div.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Base Content (Fades out on hover) */}
                    <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 relative z-10">
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 blur-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <Icon className="w-10 h-10 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-700 relative z-10" strokeWidth={1} />
                      </div>
                      <h3 className="luxury-text-accent text-white/80 group-hover:text-white transition-colors text-center">
                        {div.name}
                      </h3>
                      <div className="mt-4 w-0 group-hover:w-8 h-[1px] bg-primary/40 transition-all duration-700" />
                    </div>

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
                For over a decade, Excellence Group has redefined conglomerate management through a unique blend of traditional values and aggressive innovation. We don&apos;t just lead industries—we evolve them.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" strokeWidth={1} />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed luxury-text-sans pt-2">Consistent capital appreciation across multiple asset classes</p>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-primary" strokeWidth={1} />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed luxury-text-sans pt-2">Strategic expansion across Southern Africa</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="relative">
              <div className="absolute -inset-20 bg-primary/5 blur-[100px] rounded-full" />
              <div className="aspect-square rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center p-12 relative z-10">
                <div className="text-center">
                  <div className="luxury-text-display text-6xl font-medium text-white mb-4">Excellence</div>
                  <div className="luxury-text-accent text-[10px] text-primary/60 tracking-[0.3em]">Driven by Integrity</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───── CORE VALUES (Refined Cards) ───── */}
      <section className="py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="luxury-text-accent text-primary tracking-[0.4em] mb-4 block">Institutional Framework</span>
            <h2 className="luxury-text-display text-5xl lg:text-7xl text-white">
              Core <span className="italic font-light">Values.</span>
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
        <div className="absolute inset-0 bg-marble-luxury bg-cover bg-bottom opacity-55" />

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
