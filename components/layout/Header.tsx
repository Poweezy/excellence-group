"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const divisions = [
  { name: "Financial Advisory", href: "/financial" },
  { name: "Logistics Division", href: "/logistics" },
  { name: "Sustainability Division", href: "/sustainability" },
  { name: "Water Bottling Division", href: "/water" },
  { name: "Heavy Plant & Construction", href: "/heavy-plant" },
  { name: "Agriculture Division", href: "/agriculture" },
  { name: "Mall & Property Development", href: "/mall-property" },
  { name: "Insurance Division", href: "/insurance" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Divisions", href: "#", dropdown: divisions },
  { name: "Investors", href: "/investors" },
  { name: "Tenders", href: "/tenders" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Excellence Group Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wide group-hover:text-primary transition-colors duration-200">
              Excellence Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onMouseEnter={() => setDivisionsOpen(true)}
                    onMouseLeave={() => setDivisionsOpen(false)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "text-slate-300 hover:text-primary hover:bg-dark-elevated"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        divisionsOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {divisionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        onMouseEnter={() => setDivisionsOpen(true)}
                        onMouseLeave={() => setDivisionsOpen(false)}
                        className="absolute top-full left-0 mt-1 w-64 glass-card rounded-xl p-2 shadow-card"
                      >
                        {divisions.map((div) => (
                          <Link
                            key={div.href}
                            href={div.href}
                            className="block px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-primary hover:bg-dark-elevated transition-all duration-150"
                          >
                            {div.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-primary bg-dark-elevated"
                      : "text-slate-300 hover:text-primary hover:bg-dark-elevated"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded-lg bg-primary text-dark font-semibold text-sm hover:bg-primary-light transition-all duration-200 shadow-gold-sm hover:shadow-gold-md"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-primary hover:bg-dark-elevated transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-dark/95 backdrop-blur-xl border-t border-dark-border"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setDivisionsOpen(!divisionsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-primary hover:bg-dark-elevated"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", divisionsOpen && "rotate-180")}
                      />
                    </button>
                    {divisionsOpen &&
                      divisions.map((div) => (
                        <Link
                          key={div.href}
                          href={div.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2.5 text-sm text-slate-400 hover:text-primary"
                        >
                          {div.name}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-primary hover:bg-dark-elevated"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg bg-primary text-dark font-semibold text-sm text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
