import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Construction } from "lucide-react";

export const metadata: Metadata = { title: "Heavy Plant & Construction" };

export default function HeavyPlantPage() {
  return (
    <DivisionLayout
      badge="Heavy Plant & Construction"
      heroImage="/assets/heavy-plant-bg.png"
      icon={Construction}
      title="Heavy Plant & Construction"
      subtitle="Building Africa's Infrastructure, Steel by Steel"
      description="Our Heavy Plant & Construction Division delivers large-scale civil works, earthmoving, and industrial construction projects. We bring expertise, equipment, and execution excellence to every site across Southern Africa."
      services={[
        { title: "Civil Works & Infrastructure", desc: "Roads, bridges, drainage systems, and large-scale civil infrastructure development projects." },
        { title: "Earthmoving & Excavation", desc: "Bulk earthworks, site preparation, cut-and-fill operations, and land development services." },
        { title: "Plant Hire Services", desc: "Comprehensive dry and wet plant hire including excavators, graders, bulldozers, and specialized equipment." },
        { title: "Industrial Construction", desc: "Industrial facilities, warehouses, and manufacturing plant construction and development." },
        { title: "Commercial Construction", desc: "Office buildings, retail complexes, and large-scale commercial property development." },
        { title: "Project Management", desc: "End-to-end construction project management from planning and design to handover and commissioning." },
      ]}
    />
  );
}
