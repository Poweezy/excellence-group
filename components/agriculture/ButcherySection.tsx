import AnimatedSection from "@/components/ui/AnimatedSection";
import { UtensilsCrossed, Settings, TrendingUp, ShoppingBag } from "lucide-react";

const pillars = [
  {
    icon: UtensilsCrossed,
    title: "Feedlot Operations: Quality from the Source",
    desc: "Our feedlot operations play a critical role in maintaining product consistency and quality. Livestock are carefully managed, nourished, and prepared under controlled conditions to ensure optimal health, weight, and meat quality. This allows us to meet market demand while maintaining high production standards.",
  },
  {
    icon: Settings,
    title: "Abattoir & Processing Excellence",
    desc: "Through our abattoir operations, we uphold strict standards of hygiene, safety, and humane handling. Our processing facilities are designed to ensure efficiency while maintaining the integrity and quality of each cut. Every stage – from slaughter to processing – is conducted in compliance with regulatory requirements and industry best practices.",
  },
  {
    icon: TrendingUp,
    title: "Driving Value Through Integration",
    desc: "By combining agriculture, feedlot management, abattoir processing, and retail, we create a seamless and efficient system that maximises value at every stage. This integrated model reduces dependence on external suppliers while enhancing quality control and operational resilience.",
  },
  {
    icon: ShoppingBag,
    title: "Customer-Centric Offering",
    desc: "Our butcheries are designed to serve both households and businesses with a wide range of fresh daily consumption or bulk supply. We prioritize convenience, consistency, and customer satisfaction. At its core, our butchery division reflects our broader philosophy – delivering excellence through quality, integrity, and purpose.",
  },
];

export default function ButcherySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-card/30">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <AnimatedSection className="mb-6">
          <span className="luxury-text-accent text-primary text-sm font-medium uppercase tracking-[0.4em]">
            Integrated Farm-to-Market
          </span>
        </AnimatedSection>

        <AnimatedSection className="mb-6" delay={0.05}>
          <h2 className="luxury-text-display text-4xl lg:text-6xl font-bold text-white leading-tight">
            Butchery, Feedlot &{" "}
            <span className="gold-shimmer italic font-light block mt-1">
              Meat Processing.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-slate-300 text-lg font-light leading-relaxed luxury-text-sans max-w-3xl mb-16 border-l-2 border-primary/40 pl-6">
            At Excellence Group, our Butchery, Feedlot &amp; Meat Processing division represents a fully integrated
            farm-to-market value chain – designed to deliver premium meat products with complete control, traceability,
            and efficiency at every stage.
          </p>
        </AnimatedSection>

        {/* Four Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={0.1 + idx * 0.08}>
                <div className="group h-full p-8 rounded-2xl border border-primary/20 bg-dark-card/60 backdrop-blur-sm hover:bg-dark-elevated hover:border-primary/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="luxury-text-display text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed luxury-text-sans font-light">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Closing Statement Banner */}
        <AnimatedSection delay={0.4}>
          <div className="relative p-8 md:p-10 rounded-3xl border border-primary/30 bg-gradient-to-r from-dark-card/80 to-dark-bg/60 backdrop-blur-md overflow-hidden">
            {/* Decorative gold line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-3xl">
              <p className="text-slate-200 text-lg leading-relaxed luxury-text-sans font-light mb-4">
                We are building more than a butchery – we are establishing a{" "}
                <span className="text-primary font-medium">reliable, scalable, and sustainable meat supply ecosystem</span>.
                Our investment in feedlot and abattoir operations positions us to deliver consistent excellence
                while contributing to food security, economic growth, and industry development.
              </p>
              <p className="text-slate-400 text-base leading-relaxed luxury-text-sans font-light">
                We are not just supplying meat – we are building a trusted food system that nourishes communities and supports sustainable growth.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
