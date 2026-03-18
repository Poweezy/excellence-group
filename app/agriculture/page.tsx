import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Sprout } from "lucide-react";

export const metadata: Metadata = { title: "Agriculture Division" };

export default function AgriculturePage() {
  return (
    <DivisionLayout
      badge="Agriculture"
      heroImage="/assets/agriculture-bg.png"
      icon={Sprout}
      title="Agriculture & Agri-processing"
      subtitle="Excellence in Agricultural Systems"
      description="Our agriculture arm focuses on enhancing food security and commercial farming productivity through:\n\nWe promote sustainable agriculture practices and partner with emerging and commercial farmers to improve yields and profitability."
      services={[
        { title: "Crop Production", desc: "High-yield cultivation of grains, vegetables, fruits, and cash crops." },
        { title: "Livestock Farming", desc: "Sustainable rearing of cattle, poultry, goats, and dairy production." },
        { title: "Agribusiness Development", desc: "Farm-to-market value chains and business incubation support." },
        { title: "Agri-processing Initiatives", desc: "Value-added processing, milling, and packaging facilities." },
        { title: "Modern Farming Technologies", desc: "Precision agriculture, IoT, drones, and automated irrigation." },
        { title: "Animal Feed & Veterinary Medication", desc: "The Group manufactures and distributes high-quality: Nutrient-balanced animal feed. Veterinary medications and supplements. Livestock performance enhancers." },
      ]}
    />
  );
}
