import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CSRHero() {
  return (
    <section className="py-24 animated-bg relative min-h-[60vh] overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-16">
        <AnimatedSection className="max-w-4xl">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Social Drive (CSR)</span>
          <h1 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
            Commitment to <br />
            <span className="gold-shimmer italic font-light">Lasting Value.</span>
          </h1>
          <p className="mt-8 text-slate-300 text-xl font-light leading-relaxed luxury-text-sans">
            At Excellence Group, our commitment to social responsibility is rooted in deliberate action. 
            We aim to transform our core business activities into meaningful initiatives that directly benefit communities. 
            We believe that genuine corporate responsibility involves consistently using our strengths to address real societal needs 
            with dignity and measurable impact. Our approach is characterized not by isolated actions but by a sustained 
            commitment to making a difference. By aligning our corporate social responsibility (CSR) initiatives with our 
            operational strengths, we ensure that our contributions are both practical and transformative, creating lasting value 
            for the communities we serve.
          </p>
        </AnimatedSection>
      </div>

      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/csr-bg.png"
          alt="Excellence Group CSR Initiatives"
          fill
          className="object-cover opacity-[0.45] transition-transform duration-[20s] ease-linear scale-110 motion-safe:hover:scale-100"
          priority
        />
      </div>
      
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/80 via-dark-bg/40 to-dark-bg" />
      
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.6]">
        <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/20 skew-x-[-15deg] border-r border-primary/20 backdrop-blur-md shadow-[50px_0_100px_rgba(0,0,0,0.5)]" />
        <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/20 skew-x-[15deg] border-l border-primary/20 backdrop-blur-md shadow-[-50px_0_100px_rgba(0,0,0,0.5)]" />
      </div>
    </section>
  );
}
