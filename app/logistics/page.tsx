import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Truck } from "lucide-react";

export const metadata: Metadata = { title: "Logistics Division" };

export default function LogisticsPage() {
  return (
    <DivisionLayout
      badge="Logistics Division"
      icon={Truck}
      title="Logistics Division"
      subtitle="Specialized Logistics Solutions"
      description="Excellence Group provides specialized logistics solutions, including:"
      services={[
        { title: "Agriculture produce transportation", desc: "" },
        { title: "Animal feed, veterinary supply, and distribution", desc: "" },
        { title: "Bulk goods and haulage", desc: "" },
        { title: "Fleet management services", desc: "" },
        { title: "Safe and reliable transportation for school children, providing a round trip from Mbabane to Manzini", desc: "" },
      ]}
    />
  );
}
