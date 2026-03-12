import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Excellence Group (Pty) Ltd | Diversified Excellence in Eswatini",
    template: "%s | Excellence Group",
  },
  description:
    "Excellence Group (Pty) Ltd is a premier diversified African enterprise built on integrity, innovation, and ivory-standard excellence, driving growth across Eswatini and Southern Africa.",
  keywords: ["Excellence Group", "Eswatini", "Conglomerate", "Manzini", "Investment", "Logistics", "Sustainability"],
  authors: [{ name: "Excellence Group (Pty) Ltd" }],
  creator: "Excellence Group (Pty) Ltd",
  publisher: "Excellence Group (Pty) Ltd",
  metadataBase: new URL('https://excellencegroup.co.sz'),
  openGraph: {
    type: "website",
    locale: "en_SZ",
    url: "https://excellencegroup.co.sz",
    siteName: "Excellence Group",
    title: "Excellence Group (Pty) Ltd | Diversified Excellence in Eswatini",
    description: "A premier diversified African enterprise built on integrity, innovation, and excellence.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Excellence Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Excellence Group (Pty) Ltd",
    description: "A premier diversified African enterprise built on integrity, innovation, and excellence.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SZ" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark text-slate-200 min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-dark focus:rounded-lg focus:font-bold">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
