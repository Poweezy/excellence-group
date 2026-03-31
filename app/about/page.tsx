import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import LeadershipProfile from "@/components/about/LeadershipProfile";

export const metadata: Metadata = {
  title: "About Us | Excellence Group",
  description:
    "Learn about Excellence Group (Pty) Ltd - a premium and resilient diversified enterprise driving growth across Africa.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-dark-bg selection:bg-primary/30 selection:text-white">
      
      <AboutHero />
      <div className="section-divider opacity-50" />
      
      <MissionVision />
      <div className="section-divider opacity-50" />
      
      <CoreValues />
      <div className="section-divider opacity-50" />
      
      <LeadershipProfile />
      <div className="section-divider opacity-50" />

    </div>
  );
}
