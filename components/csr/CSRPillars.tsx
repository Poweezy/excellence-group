import AnimatedSection from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { UtensilsCrossed, Users, Wheat, Hammer, Building2, HelpingHand, Handshake } from "lucide-react";

const pillars = [
  {
    title: "Food Security and Nutrition Assistance",
    icon: UtensilsCrossed,
    desc: "Drawing from our agricultural and butchery operations, we actively run food parcel distribution programmes for vulnerable families. These parcels include essential staples and protein sources, ensuring balanced nutrition for households facing food insecurity. Beyond emergency relief, we are committed to sustaining dignity and stability within communities through reliable support."
  },
  {
    title: "Community Feeding Initiatives",
    icon: HelpingHand,
    desc: "We support community feeding schemes, such as soup kitchens, in collaboration with local stakeholders. Our initiatives provide prepared meals and food supplies to identified outreach programs and underserved areas. These efforts aim to assist children, the elderly, and families in need, helping to alleviate hunger."
  },
  {
    title: "Agricultural Empowerment & Starter Support",
    icon: Wheat,
    desc: "As a part of our commitment to long-term sustainability, we provide agricultural starter support to small-scale and emerging farmers. This includes access to basic inputs, knowledge-sharing, and guidance on productive farming practices – enabling households and communities to move from dependency to self-sufficiency. Our current footprint for this is in the Hhohho area."
  },
  {
    title: "Skills Development & Employment Pathways",
    icon: Hammer,
    desc: "Through our agriculture, butchery, and construction divisions, we create hands-on training and employment opportunities. We equip individuals with practical, income-generating skills in farming, meat processing, and heavy plant operations – opening pathways to long-term economic participation."
  },
  {
    title: "Livestock & Supply Chain Support",
    icon: Building2,
    desc: "We actively engage with local farmers by integrating them into our supply chain. By sourcing livestock and agricultural produce locally, we support smallholder farmers, stimulate rural economies, and promote inclusive participation in formal markets."
  },
  {
    title: "Infrastructure & Community Development",
    icon: Users,
    desc: "Through our construction and heavy plant division, we contribute to community-level infrastructure support, including small-scale projects that improve living conditions and accessibility. Where possible, we extend our expertise and resources to initiatives that benefit public and community spaces."
  },
  {
    title: "Partnership-Driven Impact",
    icon: Handshake,
    desc: "We collaborate with community leaders, local organizations, and stakeholders to ensure our initiatives are relevant, effective, and far-reaching. These partnerships strengthen our ability to deliver support with precision and accountability."
  }
];

export default function CSRPillars() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg/90 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="luxury-text-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            We achieve all this through <span className="gold-shimmer block mt-2">Targeted Pillars</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={idx * 0.1}>
                <Card className="h-full border border-primary/20 bg-dark-card/40 backdrop-blur-md p-8 hover:bg-dark-card/60 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 luxury-text-display group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed luxury-text-sans text-sm">
                    {pillar.desc}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
