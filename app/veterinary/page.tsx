import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Syringe,
  Activity,
  HeartPulse,
  TestTube,
  Truck,
  Users,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Leaf
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Veterinary Medication & Animal Health | Excellence Group",
  description:
    "Excellence Group's Veterinary Medication & Animal Health division provides high-quality products and scientifically formulated solutions for livestock productivity and welfare.",
};

const offerings = [
  {
    title: "Veterinary Medications",
    desc: "Comprehensive pharmaceutical solutions for animal health.",
    icon: <Syringe className="w-8 h-8 text-primary" />,
    items: [
      "Preventative and treatment-based animal medicines",
      "Disease control and livestock health management solutions",
      "Vaccines and therapeutic products"
    ]
  },
  {
    title: "Nutritional Supplements",
    desc: "Premium supplementation for optimal livestock growth.",
    icon: <TestTube className="w-8 h-8 text-primary" />,
    items: [
      "Growth and performance enhancers",
      "Immune system support supplements",
      "Mineral and vitamin blends for livestock health"
    ]
  },
  {
    title: "Livestock Performance Solutions",
    desc: "Strategic advisory and optimization initiatives.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    items: [
      "Productivity optimization programs",
      "Feed efficiency improvement solutions",
      "Animal health advisory support"
    ]
  }
];

const approach = [
  {
    title: "Scientific Formulation",
    desc: "We ensure all products are sourced or developed in line with industry standards and best practices.",
    icon: <Activity className="w-6 h-6 text-primary" />
  },
  {
    title: "Reliable Supply Chain",
    desc: "We maintain consistent product availability to support uninterrupted farming operations.",
    icon: <Truck className="w-6 h-6 text-primary" />
  },
  {
    title: "Farmer Support",
    desc: "We work closely with farmers to provide guidance on product usage, animal health management, and productivity improvement.",
    icon: <Users className="w-6 h-6 text-primary" />
  }
];

const impact = [
  "Improved livestock health and reduced disease outbreaks",
  "Increased agricultural productivity and farm profitability",
  "Enhanced food security",
  "Sustainable farming practices"
];

const clients = [
  "Small-scale and emerging farmers",
  "Commercial livestock producers",
  "Agricultural cooperatives",
  "Agribusinesses and distributors"
];

const compliance = [
  "Compliance with regulatory requirements",
  "Product safety and quality assurance",
  "Ethical and responsible distribution practices"
];

export default function VeterinaryPage() {
  return (
    <div className="overflow-hidden bg-dark-bg selection:bg-primary/30 selection:text-white">
      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/agriculture-bg.png"
                alt="Excellence Group Veterinary & Animal Health"
                fill
                className="object-cover opacity-50"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>

          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Animal Health</span>
            <div className="my-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-gold-sm">
                <HeartPulse className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Veterinary Medication &amp; <br />
              <span className="italic text-slate-300">Animal Health</span>
            </h1>
            <p className="mt-4 text-2xl text-secondary font-light luxury-text-sans tracking-wide italic gold-shimmer">
              Supporting Livestock Productivity &amp; Welfare
            </p>
            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl luxury-text-sans font-light">
              The Veterinary Medication & Animal Health division of Excellence Group is dedicated to supporting livestock productivity, animal welfare, and agricultural sustainability through the provision of high-quality veterinary products and scientifically formulated solutions.
            </p>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl luxury-text-sans font-light">
              We serve both emerging and commercial farmers across Eswatini, ensuring reliable access to essential veterinary medicines, supplements, and animal health products that enhance livestock performance and farm profitability.
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

      {/* Our Offering Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="luxury-text-accent text-primary text-sm font-medium uppercase tracking-[0.4em]">
              Comprehensive Portfolio
            </span>
            <h2 className="mt-4 luxury-text-display text-4xl lg:text-6xl font-bold text-white">
              Our <span className="italic">Offering.</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, i) => (
              <AnimatedSection key={offering.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl gold-border bg-dark-card backdrop-blur-sm shadow-gold-sm hover:shadow-gold-lg hover:bg-dark-elevated transition-all h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-dark/50 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {offering.icon}
                  </div>
                  <h3 className="luxury-text-display text-2xl text-white mb-2 group-hover:text-primary gold-shimmer transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-white/5">{offering.desc}</p>
                  <ul className="space-y-4 mt-auto">
                    {offering.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-dark-bg to-dark-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="mb-16">
            <div className="max-w-2xl">
              <span className="luxury-text-accent text-primary text-sm font-medium uppercase tracking-[0.4em]">
                Methodology
              </span>
              <h2 className="mt-4 luxury-text-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Our <span className="italic">Approach.</span>
              </h2>
              <p className="text-slate-400 text-lg luxury-text-sans font-light">
                At Excellence Group, we go beyond product distribution by delivering integrated livestock health solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-dark-border bg-dark/30 hover:border-primary/30 transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Impact and Who We Serve */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h3 className="luxury-text-display text-3xl font-bold text-white mb-6">
                Industry <span className="italic text-primary">Impact.</span>
              </h3>
              <p className="text-slate-400 mb-8 font-light luxury-text-sans">
                Our Veterinary Medication division plays a critical role in strengthening the agricultural value chain in Eswatini. Through our solutions, we contribute to:
              </p>
              <div className="space-y-4">
                {impact.map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-primary/30 transition-colors">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span className="text-slate-200">{text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="luxury-text-display text-3xl font-bold text-white mb-6">
                Who We <span className="italic text-primary">Serve.</span>
              </h3>
              <p className="text-slate-400 mb-8 font-light luxury-text-sans">
                We support a wide range of clients ensuring optimized health outcomes across the sector:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {clients.map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4">
                    <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-light">{text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-24 bg-dark-elevated relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="luxury-text-display text-3xl md:text-5xl font-bold text-white mb-6">
              Commitment to <span className="gold-shimmer">Quality & Compliance</span>
            </h2>
            <p className="text-slate-400 text-lg luxury-text-sans font-light mb-12">
              Excellence Group is committed to maintaining the highest standards in the sourcing and distribution of veterinary products. We ensure:
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {compliance.map((text, i) => (
                <div key={i} className="p-6 rounded-xl border border-primary/20 bg-dark/50 backdrop-blur-sm text-center">
                  <span className="text-slate-200 font-light block">{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-bg relative">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Partner With <span className="gold-shimmer">Us</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg luxury-text-sans font-light max-w-2xl mx-auto">
              Whether you are a farmer, distributor, or agribusiness, Excellence Group is your trusted partner in livestock health and productivity. Contact us today to learn more about our veterinary solutions and how we can support your operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl gold-metallic-solid text-dark font-bold hover:brightness-110 transition-all shadow-gold-md hover:shadow-gold-lg group tracking-widest uppercase"
            >
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
