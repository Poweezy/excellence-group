import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Sprout } from "lucide-react";

export const metadata: Metadata = { title: "Agriculture Division" };

export default function AgriculturePage() {
  return (
    <DivisionLayout
      badge="Agriculture Division"
      icon={Sprout}
      title="Agriculture Division"
      subtitle="Feeding Africa Through Modern Farming"
      description="Our Agriculture Division combines cutting-edge agri-technology with deep African farming knowledge to improve food security and create sustainable, profitable agricultural enterprises across the continent."
      stats={[
        { value: "25,000ha", label: "Land Under Production" },
        { value: "15+", label: "Crop Varieties" },
        { value: "R 400M+", label: "Annual Revenue" },
        { value: "8", label: "Processing Facilities" },
      ]}
      services={[
        { title: "Crop Production", desc: "Large-scale commercial farming of grains, vegetables, and specialty crops." },
        { title: "Agri-Processing", desc: "On-site milling, packing, and value-added processing facilities." },
        { title: "Livestock Management", desc: "Commercial cattle, poultry, and small-stock farming operations." },
        { title: "Irrigation Systems", desc: "Design and installation of modern drip and pivot irrigation infrastructure." },
        { title: "Agri-Finance", desc: "Financing solutions for smallholder and commercial farmer development." },
        { title: "Market Access", desc: "Connecting farmers to retail, export, and processing market channels." },
      ]}
    />
  );
}
