import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Excellence Group – Diversified Conglomerate | South Africa",
    template: "%s | Excellence Group",
  },
  description:
    "Excellence Group is a premier diversified conglomerate driving sustainable growth across financial advisory, logistics, sustainability, and more.",
  keywords: ["Excellence Group", "South Africa", "conglomerate", "financial advisory", "logistics"],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://excellencegroup.co.za",
    siteName: "Excellence Group",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark text-slate-200 min-h-screen">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
