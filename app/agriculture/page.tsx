import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sprout, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ButcherySection from "@/components/agriculture/ButcherySection";

export const metadata: Metadata = {
  title: "Agriculture Division | Excellence Group",
  description:
    "Excellence Group's Agriculture & Agri-processing division – from crop production and livestock farming to a fully integrated butchery, feedlot, and meat processing value chain.",
};

const services = [
  { title: "Crop Production", desc: "High-yield cultivation of grains, vegetables, fruits, and cash crops." },
  { title: "Livestock Farming", desc: "Sustainable rearing of cattle, poultry, goats, and dairy production." },
  { title: "Agribusiness Development", desc: "Farm-to-market value chains and business incubation support." },
  { title: "Agri-processing Initiatives", desc: "Value-added processing, milling, and packaging facilities." },
  {
    title: "Modern Farming Technologies",
    desc: "Mechanized farming solutions using high-performance tractors and tractor-driven machinery for large-scale operations.",
  },
  {
    title: "Animal Feed & Veterinary Medication",
    desc: "The Group manufactures and distributes high-quality nutrient-balanced animal feed, veterinary medications and supplements, and livestock performance enhancers.",
  },
];

export default function AgriculturePage() {
  return (
    <div className="overflow-hidden bg-dark-bg selection:bg-primary/30 selection:text-white">

      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/agriculture-bg.png"
                alt="Excellence Group Agriculture"
                fill
                className="object-cover opacity-55"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>

          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Agriculture</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Agriculture &amp; Agri-processing
            </h1>
            <p className="mt-4 text-2xl text-secondary font-light luxury-text-sans tracking-wide italic gold-shimmer">
              Excellence in Agricultural Systems
            </p>
            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl luxury-text-sans font-light">
              Our agriculture arm focuses on enhancing food security and commercial farming productivity through
              integrated, sustainable, and scalable operations. We promote sustainable agriculture practices and
              partner with emerging and commercial farmers to improve yields and profitability.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="group relative px-8 py-4 gold-metallic-solid min-w-[200px] inline-flex items-center gap-2"
              >
                <span className="relative z-10 text-dark font-bold luxury-text-accent tracking-[0.2em]">
                  Partner With Us
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#divisions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-slate-300 hover:border-primary/40 hover:text-primary transition-all"
              >
                All Divisions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <span className="luxury-text-accent text-primary text-sm font-medium uppercase tracking-[0.4em]">
              Our Expertise
            </span>
            <h2 className="mt-4 luxury-text-display text-4xl lg:text-6xl font-bold text-white">
              How We <span className="italic">Deliver Value.</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl gold-border bg-dark-card backdrop-blur-sm shadow-gold-sm hover:shadow-gold-lg hover:bg-dark-elevated transition-all h-full">
                  <h3 className="luxury-text-display text-xl text-white mb-4 group-hover:text-primary gold-shimmer transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed luxury-text-sans font-light">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Butchery, Feedlot & Meat Processing */}
      <ButcherySection />

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ready to engage with our <span className="gold-shimmer">Agriculture</span> team?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact us to explore how we can create value together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-metallic-solid text-dark font-bold hover:brightness-110 transition-all shadow-gold-md hover:shadow-gold-lg group tracking-widest uppercase"
            >
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
