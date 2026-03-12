import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About the Group", href: "/about" },
    { name: "Leadership Team", href: "/about#leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Tenders", href: "/tenders" },
  ],
  Divisions: [
    { name: "Financial Advisory", href: "/financial" },
    { name: "Logistics Division", href: "/logistics" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Water Bottling", href: "/water" },
    { name: "Insurance Division", href: "/insurance" },
  ],
  "More Divisions": [
    { name: "Heavy Plant & Construction", href: "/heavy-plant" },
    { name: "Agriculture Division", href: "/agriculture" },
    { name: "Mall & Property", href: "/mall-property" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="Excellence Group Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-bold text-xl text-white">Excellence Group</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A premium, resilient, forward-thinking diversified African enterprise built on integrity, innovation, and operational excellence. 
              Driving measurable social impact across Eswatini and Southern Africa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@excellencegroup.co.sz</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+268 3502 3746</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Manzini, Eswatini</span>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-dark-elevated transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-primary transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Excellence Group. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Building Africa&apos;s future through excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
