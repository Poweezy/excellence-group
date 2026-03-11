import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Leaf } from "lucide-react";

export const metadata: Metadata = { title: "Sustainability Division" };

export default function SustainabilityPage() {
  return (
    <DivisionLayout
      badge="Sustainability Division"
      icon={Leaf}
      title="Sustainability Division"
      subtitle="Green Growth for a Better Tomorrow"
      description="Our Sustainability Division leads Africa's transition to a greener economy through renewable energy, environmental consulting, and responsible business practices embedded across the entire group."
      stats={[
        { value: "500MW", label: "Clean Energy Capacity" },
        { value: "40%", label: "Carbon Reduction" },
        { value: "A+", label: "ESG Rating" },
        { value: "12", label: "Green Projects" },
      ]}
      services={[
        { title: "Renewable Energy", desc: "Solar, wind, and hybrid energy solutions for commercial and industrial clients." },
        { title: "Carbon Management", desc: "Measurement, reduction, and offsetting of your organisation's carbon footprint." },
        { title: "Environmental Consulting", desc: "EIA studies, environmental compliance, and sustainability strategy development." },
        { title: "Green Building", desc: "Eco-friendly construction design and LEED-certified building projects." },
        { title: "Waste Management", desc: "Integrated waste reduction, recycling, and circular economy solutions." },
        { title: "ESG Reporting", desc: "Comprehensive ESG disclosure frameworks aligned to global standards." },
      ]}
    />
  );
}
