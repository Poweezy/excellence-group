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
      subtitle="Moving Africa Forward, Every Day"
      description="Our Logistics Division offers comprehensive end-to-end supply chain solutions, from freight management to last-mile delivery — ensuring goods move efficiently across Africa and beyond."
      stats={[
        { value: "120+", label: "Fleet Vehicles" },
        { value: "8", label: "Warehousing Hubs" },
        { value: "1,200+", label: "Deliveries/Day" },
        { value: "99.2%", label: "On-time Rate" },
      ]}
      services={[
        { title: "Road Freight", desc: "Primary and secondary distribution across Southern Africa's road network." },
        { title: "Warehousing & Storage", desc: "Secure, climate-controlled warehousing facilities at strategic hubs." },
        { title: "Supply Chain Consulting", desc: "Expert analysis and redesign of your end-to-end supply chain." },
        { title: "Cold Chain Logistics", desc: "Temperature-controlled solutions for perishable goods and pharmaceuticals." },
        { title: "Cross-border Clearing", desc: "Seamless customs clearance and documentation across African borders." },
        { title: "Last-Mile Delivery", desc: "Urban and rural last-mile distribution solutions for e-commerce and retail." },
      ]}
    />
  );
}
