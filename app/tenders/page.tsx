import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ClipboardList, Calendar, ArrowRight, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tenders",
  description: "Excellence Group procurement and tender opportunities across all divisions.",
};

const tenders = [
  { ref: "EG-TEN-2024-001", title: "Fleet Maintenance Services Contract", division: "Logistics Division", closing: "30 April 2025", value: "R 5M+" },
  { ref: "EG-TEN-2024-002", title: "Construction of Warehouse Facility", division: "Heavy Plant & Construction", closing: "15 May 2025", value: "R 25M+" },
  { ref: "EG-TEN-2024-003", title: "Agricultural Equipment Procurement", division: "Agriculture Division", closing: "01 June 2025", value: "R 8M+" },
  { ref: "EG-TEN-2024-004", title: "IT Systems Integration Services", division: "Group IT", closing: "22 May 2025", value: "R 3M+" },
];

export default function TendersPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Procurement</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tenders &amp; <span className="gold-shimmer">Procurement</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed">
              We are committed to fair, transparent procurement processes. View active tenders
              and submit your expression of interest below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-6 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm">
              All tender responses must be submitted via email to{" "}
              <span className="text-primary font-medium">tenders@excellencegroup.co.za</span>{" "}
              with the reference number in the subject line.
            </p>
          </AnimatedSection>

          <div className="space-y-4 mt-10">
            {tenders.map((tender, i) => (
              <AnimatedSection key={tender.ref} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl gold-border bg-dark-card hover:bg-dark-elevated transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                          {tender.ref}
                        </span>
                        <span className="text-slate-500 text-xs border border-dark-border px-2 py-0.5 rounded-full">
                          {tender.division}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {tender.title}
                      </h3>
                      <div className="flex gap-4 mt-3">
                        <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> Closes: {tender.closing}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <ClipboardList className="w-3.5 h-3.5 text-primary" /> Est. Value: {tender.value}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-dark transition-all"
                    >
                      Submit EOI <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
