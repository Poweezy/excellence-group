import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Droplets } from "lucide-react";

export const metadata: Metadata = { title: "Water Bottling Division" };

export default function WaterPage() {
  return (
    <DivisionLayout
      badge="Water Bottling"
      heroImage="/assets/water-bg.png"
      icon={Droplets}
      title="Water Bottling"
      subtitle="Purity in Every Drop. Sustainable. Refreshing."
      description="Our Water Bottling Division sources, purifies, and distributes premium-quality drinking water, meeting the growing demand for clean, safe water across Africa with world-class bottling facilities."
      services={[
        { title: "Premium Water Brands", desc: "Still water products for retail and hospitality." },
        { title: "Private Label Bottling", desc: "Custom-branded bottling solutions for corporate, hotel, and event clients." },
        { title: "Bulk Water Supply", desc: "Industrial and municipal bulk water supply and distribution." },
        { title: "Eco Packaging", desc: "Sustainable, recyclable, and biodegradable packaging options." },
        { title: "Distribution Network", desc: "Nationwide distribution to retail chains, restaurants, and hospitality groups." },
      ]}
    />
  );
}
