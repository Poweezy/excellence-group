import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Insurance Division" };

export default function InsurancePage() {
  return (
    <DivisionLayout
      badge="Insurance Division"
      heroImage="/assets/marble-gold-bg.png"
      icon={ShieldCheck}
      title="Insurance Division"
      subtitle="Comprehensive Protection"
      description="The Group offers comprehensive risk protection and insurance solutions tailored to individuals, SMEs, and corporates, including:\n\nWe prioritize client-centric service, financial security, and responsive claims management."
      services={[
        { title: "Life and Health Insurance", desc: "Coverage for life assurance, personal health, disability, and medical expenses." },
        { title: "Agriculture Insurance Solutions", desc: "Tailored protection for crops, livestock, farms, and agricultural assets." },
        { title: "Asset & Property Insurance", desc: "Comprehensive cover for buildings, contents, equipment, and valuable assets." },
        { title: "Risk Management Consulting", desc: "Expert strategies to identify, assess, and mitigate business and operational risks." },
      ]}
    />
  );
}
