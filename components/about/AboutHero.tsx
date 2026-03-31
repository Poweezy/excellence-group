import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutHero() {
  return (
    <section className="py-24 animated-bg relative min-h-[60vh] overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <AnimatedSection className="max-w-3xl">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Digital Flagship</span>
          <h1 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
            Diversified Strength. <br />
            <span className="gold-shimmer italic font-light">Unified Vision.</span>
          </h1>
          <p className="mt-8 text-slate-300 text-xl font-light leading-relaxed luxury-text-sans">
            Since our founding, Excellence Group (Pty) Ltd has served as a resilient, 
            forward-thinking enterprise anchored in the future economy of Eswatini.
          </p>
        </AnimatedSection>
      </div>

      {/* Parallax Marble Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/marble-gold-bg.png"
          alt="Premium Marble Texture"
          fill
          className="object-cover opacity-[0.45] transition-transform duration-[20s] ease-linear scale-110 motion-safe:hover:scale-100"
          priority
        />
      </div>
      
      {/* Dynamic Gradient Depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/80 via-dark-bg/40 to-dark-bg" />
      
      {/* Frosted Glass Architectonic Slants */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.6]">
        <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/20 skew-x-[-15deg] border-r border-primary/20 backdrop-blur-md shadow-[50px_0_100px_rgba(0,0,0,0.5)]" />
        <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/20 skew-x-[15deg] border-l border-primary/20 backdrop-blur-md shadow-[-50px_0_100px_rgba(0,0,0,0.5)]" />
      </div>
    </section>
  );
}
