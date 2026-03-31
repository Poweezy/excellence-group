import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Eye, Heart, Users, ShieldCheck, Zap, Award, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excellence Group (Pty) Ltd - a premium and resilient diversified enterprise driving growth across Africa.",
};

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue superior performance in all we do." },
  { icon: ShieldCheck, title: "Integrity", desc: "Ethical business practices guide everyday decisions." },
  { icon: Zap, title: "Innovation", desc: "We embrace modern solutions and strategic thinking." },
  { icon: Leaf, title: "Sustainability", desc: "Long-term environmental and economic responsibility." },
  { icon: Heart, title: "Impact", desc: "We create meaningful value for stakeholders and communities." },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero */}
      <section className="py-24 animated-bg relative min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Marble */}
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-55 z-0 absolute inset-0"
            priority
          />
          {/* Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
          {/* Slant Panels */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Digital Flagship</span>
            <h1 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Diversified Strength. <br />
              <span className="gold-shimmer italic font-light">Unified Vision.</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              Since our founding, Excellence Group (Pty) Ltd has served as a resilient, 
              forward-thinking enterprise anchored in the future economy of Eswatini.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left" className="p-10 rounded-2xl gold-border bg-dark-card backdrop-blur-sm group hover:shadow-gold-lg hover:bg-dark-elevated transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" strokeWidth={1} />
              </div>
              <h2 className="luxury-text-display text-4xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light luxury-text-sans">
                To deliver innovative, reliable, and value-driven solutions across our industries while creating opportunities,
                empowering communities, and maintaining the highest standard of integrity and performance.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="p-10 rounded-2xl gold-border bg-dark-card backdrop-blur-sm group hover:shadow-gold-lg hover:bg-dark-elevated transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-primary" strokeWidth={1} />
              </div>
              <h2 className="luxury-text-display text-4xl font-bold text-white mb-6 group-hover:gold-shimmer transition-all">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light luxury-text-sans">
                To become a leading diversified African enterprise recognized for operational excellence, 
                sustainable growth, and measurable social impact.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our DNA</span>
            <h2 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white">
              Core <span className="italic font-light">Values.</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl gold-border bg-dark backdrop-blur-sm h-full flex flex-col group hover:bg-dark-elevated hover:shadow-gold-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1} />
                  </div>
                  <h3 className="luxury-text-accent text-[11px] text-white/50 mb-3 tracking-widest group-hover:text-primary group-hover:gold-shimmer transition-all">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-grow luxury-text-sans font-light">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Leadership Team */}
      <section className="py-32 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest text-center block">Leadership Steering</span>
            <h2 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white text-center">
              The Visionary Behind <span className="italic font-light gold-shimmer">Excellence.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="relative">
            <div className="luxury-text-sans font-light text-slate-300 text-lg leading-relaxed text-left">
              
              {/* Floating Image Card */}
              <div className="float-none md:float-left w-full md:w-[45%] lg:w-[40%] mb-8 md:mb-6 md:mr-10 xl:mr-12">
                <div className="relative overflow-hidden rounded-2xl gold-border bg-dark-card shadow-gold-md group">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/assets/md-ginindza.jpg"
                      alt="Mr. Phiwayinkhosi E. Ginindza"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 h-full w-full via-dark-bg/20 to-transparent opacity-90" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                    <div className="w-10 h-[1px] bg-primary mb-3" />
                    <h3 className="luxury-text-display text-2xl text-white group-hover:gold-shimmer transition-all">Mr. Phiwayinkhosi E. Ginindza</h3>
                    <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-medium mt-1">Founding Managing Director</p>
                  </div>
                </div>
              </div>

              {/* Editorial Wrapped Text - One Continuous Flow */}
              <div className="space-y-6">
                <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-line:uppercase first-line:tracking-widest">
                  <strong className="text-white font-medium">Mr. Phiwayinkhosi E. Ginindza</strong> is the Founding Managing Director of Excellence Group (Pty) Ltd, a diversified enterprise operating across agriculture, butchery and meat processing, construction and heavy plant, insurance, logistics, water bottling, financial advisory, and retail infrastructure development.
                </p>
                <p>
                  A visionary architect of integrated business systems, he has built Excellence Group into a dynamic, multi-sector organisation rooted in sustainability, operational efficiency, and long-term value creation. His leadership reflects a rare combination of strategic foresight, disciplined execution, and entrepreneurial agility.
                </p>
                
                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Education</h4>
                <p>
                  Mr. Ginindza holds a Master of Arts (M.A.) in Economics from the University of Manchester. His academic grounding in economic theory and applied analysis informs his strategic decision-making, particularly in investment structuring, market expansion, and sustainable growth modelling.
                </p>

                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Core Expertise</h4>
                <p>Mr. Ginindza brings a well-rounded executive skill set that underpins his leadership effectiveness:</p>
                <ul className="space-y-3 ml-2 list-none">
                  {[
                    ["Strategic Planning & Execution", "Designing and implementing long-term growth strategies across diverse sectors."],
                    ["Research & Economic Analysis", "Leveraging data and market intelligence to inform investment decisions."],
                    ["Leadership & Management", "Building high-performance teams and driving operational excellence."],
                    ["Analytical Thinking", "Translating complex challenges into structured, actionable solutions."],
                    ["Customer-Centric Approach", "Embedding service excellence and value delivery across all business units."]
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <p><strong className="text-white font-medium">{title}</strong> – {desc}</p>
                    </li>
                  ))}
                </ul>

                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Strategic Impact</h4>
                <p>
                  Under Mr. Ginindza’s direction, Excellence Group has adopted a vertically integrated model—most notably within the agricultural and meat value chain—linking production, processing, and distribution into a seamless ecosystem. This approach has strengthened supply chain control, enhanced product quality, and unlocked new revenue streams.
                </p>
                <p>
                  He has successfully positioned the Group to respond to evolving market demands while maintaining a strong commitment to local economic development and industry advancement.
                </p>

                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Leadership Philosophy</h4>
                <p>Mr. Ginindza leads with a philosophy grounded in:</p>
                <ul className="space-y-2 ml-2 list-none">
                  {["Excellence in Execution", "Sustainable Growth", "Integrity & Accountability", "Innovation with Purpose"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  His approach prioritizes building resilient systems, empowering teams, and cultivating strategic partnerships that drive shared success.
                </p>

                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Vision for the Future</h4>
                <p>
                  With a clear focus on expansion and diversification, Mr. Ginindza is steering Excellence Group toward becoming a leading regional powerhouse. His vision is to create an interconnected portfolio of businesses that not only deliver commercial success but also contribute meaningfully to community upliftment, food security, and infrastructure development.
                </p>

                <h4 className="text-2xl luxury-text-display text-white gold-shimmer block w-fit pt-4">Board & Governance Roles</h4>
                <p>
                  In addition to his role at Excellence Group, Mr. Ginindza serves on multiple boards, contributing strategic oversight, governance expertise, and advisory leadership across various institutions. His board participation reflects a strong commitment to corporate governance, ethical leadership, and sustainable enterprise development. He is recognized for his ability to provide balanced, insight-driven perspectives that support sound decision-making and long-term organizational growth.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />
    </div>
  );
}

