"use client";

import Link from "next/link";
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
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ───── HERO ───── */}
      <section className="relative min-h-[90vh] flex items-center animated-bg noise-overlay">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,53,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(212,175,53,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              Africa&apos;s Premier Diversified Conglomerate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Building a Legacy of{" "}
              <span className="gold-shimmer">Excellence</span>{" "}
              Across Africa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl"
            >
              A diversified conglomerate with operations spanning 8 key industries,
              driving sustainable economic growth and prosperity through innovation
              and integrity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base hover:bg-primary-light transition-all duration-200 shadow-gold-sm hover:shadow-gold-md group"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-dark-border text-slate-300 font-semibold text-base hover:border-primary/40 hover:text-primary hover:bg-dark-elevated transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
          <span>Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <section className="bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold gold-shimmer mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── DIVISIONS ───── */}
      <section className="py-24 bg-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Divisions</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-white">
              Diverse. Resilient. Growing.
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Eight strategic business divisions working in synergy to deliver comprehensive value
              across Africa and international markets.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <motion.div key={div.href} variants={staggerItem}>
                  <Link
                    href={div.href}
                    className="group block p-6 rounded-2xl gold-border bg-dark-card hover:bg-dark-elevated transition-all duration-300 h-full"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {div.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{div.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </section>

      {/* ───── WHY EXCELLENCE ───── */}
      <section className="py-24 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Why Excellence Group</span>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
                Trusted. Proven. <br />
                <span className="gold-shimmer">Unmatched.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                For over two decades, Excellence Group has been at the forefront of Africa&apos;s
                economic development, delivering exceptional results through disciplined
                governance, innovation, and a commitment to sustainable growth.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: TrendingUp, text: "Consistent year-on-year revenue growth across all divisions" },
                  { icon: Globe, text: "Active operations in 12 countries across Africa and beyond" },
                  { icon: Users, text: "Over 5,000 talented professionals in our global team" },
                  { icon: Award, text: "Multiple industry awards for governance and sustainability" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-dark font-bold text-sm hover:bg-primary-light transition-all group"
              >
                About Our Group <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Revenue Growth", value: "32%", sub: "Year-on-year" },
                  { label: "Countries", value: "12", sub: "Active Markets" },
                  { label: "Client Satisfaction", value: "98%", sub: "Retention Rate" },
                  { label: "ESG Score", value: "A+", sub: "Sustainability Rating" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="p-6 rounded-2xl gold-border bg-dark text-center"
                  >
                    <div className="font-display text-3xl font-bold gold-shimmer">{card.value}</div>
                    <div className="text-white text-sm font-semibold mt-1">{card.label}</div>
                    <div className="text-slate-500 text-xs mt-1">{card.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Partner with <span className="gold-shimmer">Excellence</span>?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re an investor, business partner, or prospective employee —
              we&apos;d love to explore how we can grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base hover:bg-primary-light transition-all shadow-gold-md hover:shadow-gold-lg group"
              >
                Contact Us Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-dark-border text-slate-300 font-semibold hover:border-primary/40 hover:text-primary hover:bg-dark-elevated transition-all"
              >
                Investor Relations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
