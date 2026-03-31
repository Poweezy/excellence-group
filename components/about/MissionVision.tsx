import { Target, Eye } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function MissionVision() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Mission Card */}
          <AnimatedSection direction="left" className="h-full p-12 lg:p-14 rounded-3xl gold-border bg-dark-card backdrop-blur-xl group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,160,80,0.2)] transition-all duration-700 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-inner">
              <Target className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(201,160,80,0.5)]" strokeWidth={1.5} />
            </div>
            <h2 className="luxury-text-display text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Mission</h2>
            <p className="text-slate-300 leading-[2] text-lg font-light luxury-text-sans flex-grow">
              To deliver innovative, reliable, and value-driven solutions across our industries while creating opportunities,
              empowering communities, and maintaining the highest standard of integrity and performance.
            </p>
          </AnimatedSection>

          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.2} className="h-full p-12 lg:p-14 rounded-3xl gold-border bg-dark-card backdrop-blur-xl group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,160,80,0.2)] transition-all duration-700 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-inner">
              <Eye className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(201,160,80,0.5)]" strokeWidth={1.5} />
            </div>
            <h2 className="luxury-text-display text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Vision</h2>
            <p className="text-slate-300 leading-[2] text-lg font-light luxury-text-sans flex-grow">
              To become a leading diversified African enterprise recognized for operational excellence, 
              sustainable growth, and measurable social impact.
            </p>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
}
