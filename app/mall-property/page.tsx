import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Building2 } from "lucide-react";

export const metadata: Metadata = { title: "Mall & Property Development" };

export default function MallPage() {
  return (
    <DivisionLayout
      badge="Mall & Property"
      heroImage="/assets/mall-property-bg.jpg"
      icon={Building2}
      title="Mall & Property Development"
      subtitle="Creating Spaces Where Communities Thrive"
      description="Our Mall & Property Development Division develops, owns, and manages premium retail, commercial, and mixed-use properties across Southern Africa — creating dynamic spaces that drive economic activity."
      services={[
        { title: "Retail Space Leasing", desc: "Strategic retail space leasing solutions for shopping centers, malls, and standalone retail properties." },
        { title: "Commercial Property Management", desc: "Full-service property management including maintenance, operations, and facility management for commercial assets." },
        { title: "Mixed-Use Property Development", desc: "Integrated development of residential, retail, and commercial spaces creating vibrant community hubs." },
        { title: "Tenant Relationship Management", desc: "Dedicated tenant support, lease administration, and relationship management ensuring long-term partnerships." },
        { title: "Infrastructure Investment", desc: "Strategic investment in property infrastructure, upgrades, and value-enhancement projects." },
        { title: "Asset Optimization", desc: "Portfolio analysis, tenant mix curation, and strategic planning to maximize property value and returns." },
      ]}
    />
  );
}
