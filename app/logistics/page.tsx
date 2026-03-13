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
      heroImage="/assets/hero-logistics.jpg" // Download truck convoy image
services={[
        { title: "Agriculture produce transportation", desc: "Refrigerated and climate-controlled transport for fresh fruits, vegetables, and perishables to markets nationwide." },
        { title: "Animal feed, veterinary supply, and distribution", desc: "Specialized dry and temperature-controlled logistics for feed, vaccines, medicines, and equipment delivery." },
        { title: "Bulk goods and haulage", desc: "Heavy-duty tipper trucks and trailers for aggregates, liquids, and oversized cargo with rapid turnaround." },
        { title: "Fleet management services", desc: "Comprehensive maintenance, tracking, GPS, driver training, and compliance for optimized fleet operations." },
        { title: "Safe and reliable transportation for school children, providing a round trip from Mbabane to Manzini", desc: "Licensed school shuttles with safety protocols, trained drivers, daily inspections, and parent tracking app." },
      ]}
    />
  );
}
