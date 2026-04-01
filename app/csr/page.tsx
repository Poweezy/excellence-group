import type { Metadata } from "next";
import CSRHero from "@/components/csr/CSRHero";
import CSRPillars from "@/components/csr/CSRPillars";

export const metadata: Metadata = {
  title: "Social Drive | Excellence Group",
  description:
    "At Excellence Group, our commitment to social responsibility is rooted in deliberate action. We aim to transform our core business activities into meaningful initiatives.",
};

export default function CSRPage() {
  return (
    <div className="overflow-hidden bg-dark-bg selection:bg-primary/30 selection:text-white">
      <CSRHero />
      <div className="section-divider opacity-50" />
      <CSRPillars />
      <div className="section-divider opacity-50" />
    </div>
  );
}
