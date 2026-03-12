import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Building2 } from "lucide-react";

export const metadata: Metadata = { title: "Mall & Property Development" };

export default function MallPage() {
  return (
    <DivisionLayout
      badge="Mall & Property"
      icon={Building2}
      title="Mall & Property Development"
      subtitle="Creating Spaces Where Communities Thrive"
      description="Our Mall & Property Development Division develops, owns, and manages premium retail, commercial, and mixed-use properties across Southern Africa — creating dynamic spaces that drive economic activity."
      services={[
        { title: "Retail Mall Development", desc: "Ground-up development of community, regional, and super-regional malls." },
        { title: "Commercial Office Parks", desc: "A-grade commercial office developments in prime business nodes." },
        { title: "Mixed-Use Developments", desc: "Integrated residential, retail, and commercial precinct development." },
        { title: "Property Management", desc: "Full-service property management including tenant relations and maintenance." },
        { title: "Leasing & Tenant Mix", desc: "Strategic retail and commercial tenant mix curation and leasing." },
        { title: "Property Finance", desc: "Development finance and structured property investment solutions." },
      ]}
    />
  );
}
