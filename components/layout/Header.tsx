"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, divisions } from "@/lib/data";


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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 h-20 flex items-center",
        isScrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Excellence Group Logo"
                fill
                sizes="2.5rem"
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="luxury-text-display text-xl sm:text-2xl font-medium text-white tracking-tight">
              Excellence Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group/dropdown">
                  <button
                    onMouseEnter={() => setDivisionsOpen(true)}
                    onMouseLeave={() => setDivisionsOpen(false)}
                    aria-expanded={divisionsOpen}
                    aria-haspopup="true"
                    className="luxury-text-accent flex items-center gap-2 text-[10px] text-white/50 hover:text-primary transition-all duration-300 py-4"
                  >
                    {link.name}
                    <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", divisionsOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {divisionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onMouseEnter={() => setDivisionsOpen(true)}
                        onMouseLeave={() => setDivisionsOpen(false)}
                        className="absolute top-full left-0 w-64 bg-dark/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl"
                      >
                        <div className="grid gap-2">
                          {link.dropdown.map((div) => (
                            <Link
                              key={div.href}
                              href={div.href}
                              className="luxury-text-accent text-[9px] text-white/40 hover:text-primary py-2 transition-all"
                            >
                              {div.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "luxury-text-accent text-[10px] py-4 transition-all duration-300",
                    pathname === link.href ? "text-primary tracking-[0.3em]" : "text-white/50 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="px-8 py-3 border border-primary/20 text-primary-light hover:bg-primary/5 transition-all duration-500 luxury-text-accent text-[10px]"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 bg-dark z-40 lg:hidden flex flex-col p-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="luxury-text-display text-4xl text-white/60 hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 text-primary luxury-text-accent text-lg"
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
