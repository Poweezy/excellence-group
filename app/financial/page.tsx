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
      stats={[
        { value: "R 50B+", label: "Assets Under Advisory" },
        { value: "500+", label: "Corporate Clients" },
        { value: "15+", label: "Years Experience" },
        { value: "98%", label: "Client Retention" },
      ]}
      services={[
        { title: "Wealth Management", desc: "Bespoke investment strategies tailored to your financial goals and risk appetite." },
        { title: "Capital Raising", desc: "Debt and equity solutions for growth-stage and established enterprises." },
        { title: "M&A Advisory", desc: "End-to-end mergers, acquisitions, and corporate restructuring support." },
        { title: "Project Finance", desc: "Structured finance for large-scale infrastructure and development projects." },
        { title: "Treasury Management", desc: "Optimise liquidity, mitigate risk, and maximise returns on surplus funds." },
        { title: "Financial Planning", desc: "Comprehensive financial planning for individuals and family offices." },
      ]}
    />
  );
}
