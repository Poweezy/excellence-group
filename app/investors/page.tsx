import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { TrendingUp, FileText, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Investors",
  description: "Excellence Group investor relations, financial reports, and shareholder information.",
};

const highlights = [
  { label: "Market Cap", value: "R 8.4B", sub: "As of Q4 2024" },
  { label: "Revenue Growth", value: "32%", sub: "Year-on-Year" },
  { label: "EBITDA Margin", value: "24.5%", sub: "FY2024" },
  { label: "Dividend Yield", value: "4.2%", sub: "Annual" },
];

export default function InvestorsPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Investors</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Investor <span className="gold-shimmer">Relations</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed">
              Transparent governance, consistent performance, and long-term value creation
              for our shareholders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.label} delay={i * 0.08}>
                <div className="p-6 rounded-2xl gold-border bg-dark text-center">
                  <div className="font-display text-4xl font-bold gold-shimmer">{h.value}</div>
                  <div className="text-white text-sm font-semibold mt-2">{h.label}</div>
                  <div className="text-slate-500 text-xs mt-1">{h.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Reports & Filings</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Annual Report 2024", desc: "Comprehensive group performance review" },
              { icon: BarChart3, title: "Interim Results H2", desc: "Half-year financial highlights" },
              { icon: TrendingUp, title: "ESG Report 2024", desc: "Sustainability and governance metrics" },
            ].map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="group p-6 rounded-2xl gold-border bg-dark-card hover:bg-dark-elevated transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Download PDF <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-bold hover:bg-primary-light transition-all shadow-gold-sm hover:shadow-gold-md group">
              Contact Investor Relations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
