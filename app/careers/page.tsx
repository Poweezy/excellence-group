import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Excellence Group team and be part of Africa's most impactful conglomerate.",
};

const openings = [
  { title: "Senior Financial Analyst", division: "Financial Advisory", location: "Johannesburg", type: "Full-time" },
  { title: "Supply Chain Manager", division: "Logistics Division", location: "Durban", type: "Full-time" },
  { title: "Sustainability Officer", division: "Sustainability", location: "Cape Town", type: "Full-time" },
  { title: "Construction Project Manager", division: "Heavy Plant & Construction", location: "Johannesburg", type: "Full-time" },
  { title: "Agricultural Technologist", division: "Agriculture Division", location: "Limpopo", type: "Full-time" },
  { title: "Property Development Manager", division: "Mall & Property Development", location: "Sandton", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Careers</span>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Your Career with <span className="gold-shimmer">Excellence</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed">
              Join a team of 5,000+ professionals shaping Africa&apos;s economic future.
              We invest in our people as much as we invest in Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Current Openings</h2>
            <p className="text-slate-400 mt-2">Explore roles across our 8 business divisions.</p>
          </AnimatedSection>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.06}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl gold-border bg-dark-card hover:bg-dark-elevated transition-all">
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Briefcase className="w-3.5 h-3.5 text-primary" /> {job.division}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Clock className="w-3.5 h-3.5 text-primary" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-dark transition-all group-hover:border-primary"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
