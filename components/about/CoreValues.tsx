import { Heart, ShieldCheck, Zap, Award, Leaf } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue superior performance in all we do." },
  { icon: ShieldCheck, title: "Integrity", desc: "Ethical business practices guide everyday decisions." },
  { icon: Zap, title: "Innovation", desc: "We embrace modern solutions and strategic thinking." },
  { icon: Leaf, title: "Sustainability", desc: "Long-term environmental and economic responsibility." },
  { icon: Heart, title: "Impact", desc: "We create meaningful value for stakeholders and communities." },
];

export default function CoreValues() {
  return (
    <section className="py-32 bg-dark-card border-y border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20 lg:mb-24">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.3em] inline-block mb-3 border border-primary/20 rounded-full px-5 py-2 backdrop-blur-sm bg-primary/5">
            Our DNA
          </span>
          <h2 className="mt-4 luxury-text-display text-5xl lg:text-7xl font-bold text-white">
            Core <span className="italic font-light gold-shimmer">Values.</span>
          </h2>
        </AnimatedSection>

        {/* Masonry/Staggered Layout for 5 items: 3 top row, 2 bottom row */}
        <div className="flex flex-col gap-8 md:gap-10 items-center">
          
          {/* Top Row (3 items) */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 w-full max-w-6xl">
            {values.slice(0, 3).map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <ValueCard Icon={Icon} title={title} desc={desc} />
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom Row (2 items centered) */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 w-full max-w-4xl mt-2 md:mt-4">
             {values.slice(3, 5).map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={(i + 3) * 0.15}>
                <ValueCard Icon={Icon} title={title} desc={desc} />
              </AnimatedSection>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ValueCard({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
  return (
    <div className="p-10 lg:p-12 rounded-3xl gold-border bg-dark/80 backdrop-blur-xl h-full flex flex-col items-center text-center group hover:bg-dark-elevated hover:-translate-y-3 hover:shadow-[0_20px_40px_-20px_rgba(201,160,80,0.3)] transition-all duration-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700 shadow-inner">
        <Icon className="w-10 h-10 text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(201,160,80,0.6)] transition-all duration-700" strokeWidth={1.2} />
      </div>
      
      <h3 className="luxury-text-accent text-sm text-white/80 mb-5 tracking-[0.25em] uppercase group-hover:text-primary group-hover:gold-shimmer transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-slate-400 text-[15px] leading-relaxed flex-grow luxury-text-sans font-light group-hover:text-slate-300 transition-colors duration-500">
        {desc}
      </p>
    </div>
  );
}
