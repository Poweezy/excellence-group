import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Construction } from "lucide-react";

export const metadata: Metadata = { title: "Heavy Plant & Construction" };

export default function HeavyPlantPage() {
  return (
    <DivisionLayout
      badge="Heavy Plant & Construction"
      icon={Construction}
      title="Heavy Plant & Construction"
      subtitle="Building Africa's Infrastructure, Steel by Steel"
      description="Our Heavy Plant & Construction Division delivers large-scale civil engineering, mining infrastructure, and commercial construction projects. We bring expertise, equipment, and execution excellence to every site."
      services={[
        { title: "Civil Engineering", desc: "Roads, bridges, dams, and large-scale civil infrastructure projects." },
        { title: "Mining Infrastructure", desc: "Mine development, plant construction, and tailings management." },
        { title: "Commercial Construction", desc: "Office parks, industrial complexes, and large commercial builds." },
        { title: "Plant Hire", desc: "Dry and wet plant hire including graders, excavators, and cranes." },
        { title: "Earthworks", desc: "Bulk earthworks, cut-and-fill, and site preparation for developments." },
        { title: "Project Management", desc: "End-to-end construction project management from design to handover." },
      ]}
    />
  );
}
