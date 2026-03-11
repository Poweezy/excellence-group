import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Insurance Division" };

export default function InsurancePage() {
  return (
    <DivisionLayout
      badge="Insurance Division"
      icon={ShieldCheck}
      title="Insurance Division"
      subtitle="Comprehensive Risk Solutions for Businesses & Individuals"
      description="Our Insurance Division provides tailored short-term, life, and commercial insurance solutions, helping clients manage risk with confidence. We partner with leading underwriters to offer competitive, comprehensive cover."
      stats={[
        { value: "50,000+", label: "Policies Active" },
        { value: "R 2.3B", label: "Gross Written Premium" },
        { value: "24h", label: "Claims Response" },
        { value: "4.8/5", label: "Client Satisfaction" },
      ]}
      services={[
        { title: "Short-Term Insurance", desc: "Vehicle, property, and asset insurance for individuals and businesses." },
        { title: "Life & Funeral Cover", desc: "Comprehensive life assurance, disability, and funeral cover solutions." },
        { title: "Commercial Insurance", desc: "Business interruption, liability, and commercial property insurance." },
        { title: "Fleet Insurance", desc: "Comprehensive motor fleet management and insurance solutions." },
        { title: "Engineering Insurance", desc: "Specialised cover for construction, plant, and machinery risks." },
        { title: "Group Benefits", desc: "Employee benefits, medical aid, and group life schemes for organisations." },
      ]}
    />
  );
}
