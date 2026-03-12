import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Excellence Group (Pty) Ltd – Diversified Conglomerate | Eswatini",
    template: "%s | Excellence Group",
  },
  description:
    "Excellence Group (Pty) Ltd is a premier diversified African enterprise built on integrity, innovation, and operational excellence, driving growth across Eswatini and Southern Africa.",
  keywords: ["Excellence Group", "Eswatini", "conglomerate", "Manzini", "diversified enterprise"],
  openGraph: {
    type: "website",
    locale: "en_SZ",
    url: "https://excellencegroup.co.sz",
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
