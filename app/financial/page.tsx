import { Metadata } from "next";
import DivisionLayout from "@/components/layout/DivisionLayout";

import { Landmark } from "lucide-react";

export const metadata: Metadata = { title: "Financial Advisory" };

export default function FinancialPage() {
  return (
    <DivisionLayout
      badge="Financial Advisory"
      icon={Landmark}
      title="Financial Advisory"
      subtitle="Capital Solutions for Africa's Ambitions"
      description="Our Financial Advisory division delivers world-class wealth management, capital raising, and strategic financial consulting to corporates, governments, and high-net-worth individuals across Africa."
      services={[
{ title: "Investment Advisory", desc: "Strategic investment guidance for optimal portfolio performance and growth." },
        { title: "Wealth Management", desc: "Bespoke investment strategies tailored to your financial goals and risk appetite." },
        { title: "Business Financial Structuring", desc: "Optimized capital structures for sustainable business expansion and efficiency." },
        { title: "Financial Planning & Risk Assessment", desc: "Comprehensive planning with robust risk mitigation strategies." },
        { title: "Corporate Advisory Services", desc: "Expert guidance on mergers, funding, and strategic financial decisions." },
      ]}
    />
  );
}
