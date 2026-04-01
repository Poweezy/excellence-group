import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function LeadershipProfile() {
  return (
    <section className="py-32 bg-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20 lg:mb-24">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.3em] inline-block mb-3 border border-primary/20 rounded-full px-5 py-2 backdrop-blur-sm bg-primary/5">
            Leadership
          </span>
          <h2 className="mt-4 luxury-text-display text-5xl lg:text-7xl font-bold text-white text-center">
            The Visionary Behind <span className="italic font-light gold-shimmer">Excellence.</span>
          </h2>
        </AnimatedSection>

        {/* Mmax width container centered for optimal reading measure */}
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection delay={0.1} className="relative">
            <div className="luxury-text-sans font-light text-slate-300 text-[18px] leading-[1.8] text-left">

              {/* Floating Image Card */}
              <div className="float-none md:float-left w-full sm:w-[80%] md:w-[45%] lg:w-[40%] mx-auto md:mx-0 mb-10 md:mb-8 md:mr-10 xl:mr-12">
                <div className="relative overflow-hidden rounded-3xl gold-border bg-dark-card shadow-[0_20px_50px_-15px_rgba(201,160,80,0.15)] group">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/assets/md-ginindza.jpg"
                      alt="Mr. Phiwayinkhosi E. Ginindza"
                      fill
                      className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 h-full w-full via-dark-bg/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-8 z-20">
                    <div className="w-10 h-[1px] bg-primary mb-4 shadow-[0_0_10px_rgba(201,160,80,1)]" />
                    <h3 className="luxury-text-display text-2xl lg:text-3xl text-white group-hover:gold-shimmer transition-all duration-500 delay-75">Mr. Phiwayinkhosi E. Ginindza</h3>
                    <p className="text-primary text-[11px] lg:text-xs uppercase tracking-[0.25em] font-medium mt-2">Founding Managing Director</p>
                  </div>
                </div>
              </div>

              {/* Editorial Wrapped Text - One Continuous Flow */}
              <div className="space-y-7">
                <p className="first-letter:text-[90px] first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                  <strong className="text-white font-medium">Mr. Phiwayinkhosi E. Ginindza</strong> is the Founding Managing Director of Excellence Group (Pty) Ltd, a diversified enterprise operating across agriculture, butchery and meat processing, construction and heavy plant, insurance, logistics, water bottling, financial advisory, and retail infrastructure development.
                </p>
                <p>
                  A visionary architect of integrated business systems, he has built Excellence Group into a dynamic, multi-sector organisation rooted in sustainability, operational efficiency, and long-term value creation. His leadership reflects a rare combination of strategic foresight, disciplined execution, and entrepreneurial agility.
                </p>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Education</h4>
                <p>
                  Mr. Ginindza holds a Master of Arts (M.A.) in Economics from the University of Manchester. His academic grounding in economic theory and applied analysis informs his strategic decision-making, particularly in investment structuring, market expansion, and sustainable growth modelling.
                </p>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Core Expertise</h4>
                <p>Mr. Ginindza brings a well-rounded executive skill set that underpins his leadership effectiveness:</p>
                <ul className="space-y-4 ml-1 list-none mt-4">
                  {[
                    ["Strategic Planning & Execution", "Designing and implementing long-term growth strategies across diverse sectors."],
                    ["Research & Economic Analysis", "Leveraging data and market intelligence to inform investment decisions."],
                    ["Leadership & Management", "Building high-performance teams and driving operational excellence."],
                    ["Analytical Thinking", "Translating complex challenges into structured, actionable solutions."],
                    ["Customer-Centric Approach", "Embedding service excellence and value delivery across all business units."]
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-5">
                      {/* Luxury custom bullet SVG */}
                      <svg className="w-3.5 h-3.5 text-primary mt-2 flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" />
                      </svg>
                      <p><strong className="text-white font-medium">{title}</strong> – <span className="text-slate-400">{desc}</span></p>
                    </li>
                  ))}
                </ul>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Strategic Impact</h4>
                <p>
                  Under Mr. Ginindza’s direction, Excellence Group has adopted a vertically integrated model—most notably within the agricultural and meat value chain—linking production, processing, and distribution into a seamless ecosystem. This approach has strengthened supply chain control, enhanced product quality, and unlocked new revenue streams.
                </p>
                <p>
                  He has successfully positioned the Group to respond to evolving market demands while maintaining a strong commitment to local economic development and industry advancement.
                </p>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Leadership Philosophy</h4>
                <p>Mr. Ginindza leads with a philosophy grounded in:</p>
                <ul className="space-y-3 ml-2 list-none mt-4">
                  {["Excellence in Execution", "Sustainable Growth", "Integrity & Accountability", "Innovation with Purpose"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <svg className="w-2.5 h-2.5 text-primary flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,0 24,12 12,24 0,12" />
                      </svg>
                      <p className="text-white/90 font-medium tracking-wide">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="pt-4 text-slate-400">
                  His approach prioritizes building resilient systems, empowering teams, and cultivating strategic partnerships that drive shared success.
                </p>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Vision for the Future</h4>
                <p>
                  With a clear focus on expansion and diversification, Mr. Ginindza is steering Excellence Group toward becoming a leading regional powerhouse. His vision is to create an interconnected portfolio of businesses that not only deliver commercial success but also contribute meaningfully to community upliftment, food security, and infrastructure development.
                </p>

                <h4 className="text-[26px] luxury-text-display text-white gold-shimmer block w-fit pt-6 pb-2 border-b border-white/5">Board & Governance Roles</h4>
                <p>
                  In addition to his role at Excellence Group, Mr. Ginindza serves on multiple boards, contributing strategic oversight, governance expertise, and advisory leadership across various institutions. His board participation reflects a strong commitment to corporate governance, ethical leadership, and sustainable enterprise development. He is recognized for his ability to provide balanced, insight-driven perspectives that support sound decision-making and long-term organizational growth.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
