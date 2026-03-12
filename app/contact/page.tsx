"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 animated-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact</span>
            <h1 className="mt-3 luxury-text-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get in <span className="gold-shimmer">Touch</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed luxury-text-sans font-light">
              Whether it&apos;s a business inquiry, partnership opportunity, or general query —
              our team is ready to assist you from our Manzini headquarters.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info: Three Column Layout */}
            <AnimatedSection direction="left" className="lg:col-span-5 grid md:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  icon: MapPin, 
                  label: "Physical Address", 
                  value: "Suite No. 1, First Floor, Eswatini Dairy Board Building, Manzini",
                },
                { 
                  icon: Phone, 
                  label: "Phone & Email", 
                  value: "+268 3502 3746",
                  subValue: "info@excellencegroup.co.sz"
                },
                { 
                  icon: CheckCircle, 
                  label: "Operating Status", 
                  value: "Official Business Headquarters",
                  subValue: "Monday – Friday: 08:00 – 17:00"
                },
              ].map(({ icon: Icon, label, value, subValue }) => (
                <div key={label} className="p-8 rounded-2xl gold-border bg-dark-card group hover:bg-dark-elevated transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-medium">{label}</div>
                  <div className="text-white text-sm font-semibold mb-1 leading-relaxed">{value}</div>
                  {subValue && <div className="text-slate-400 text-xs">{subValue}</div>}
                </div>
              ))}
            </AnimatedSection>

            {/* Form Column */}
            <div className="lg:col-span-1" /> {/* Spacer */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="up" delay={0.1}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20 gap-4 p-8 rounded-2xl gold-border bg-dark-card"
                  >
                    <CheckCircle className="w-16 h-16 text-primary" />
                    <h3 className="luxury-text-display text-2xl text-white font-bold">Message Sent!</h3>
                    <p className="text-slate-400 max-w-sm luxury-text-sans font-light">
                      Thank you for reaching out to Excellence Group. Our team will respond within 24–48 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="p-10 rounded-2xl gold-border bg-dark-card space-y-8"
                  >
                    <h3 className="luxury-text-display text-3xl text-white mb-2">Send an Official Inquiry</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { id: "name", label: "Full Name", placeholder: "John Smith" },
                        { id: "company", label: "Company", placeholder: "Acme Corp" },
                      ].map(({ id, label, placeholder }) => (
                        <div key={id} className="relative group">
                          <label htmlFor={id} className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                            {label}
                          </label>
                          <input
                            id={id}
                            type="text"
                            placeholder={placeholder}
                            required
                            className="w-full bg-dark border border-dark-border rounded-xl px-4 py-4 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Corporate Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="w-full bg-dark border border-dark-border rounded-xl px-4 py-4 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Nature of Inquiry</label>
                      <select
                        id="subject"
                        className="w-full bg-dark border border-dark-border rounded-xl px-4 py-4 text-slate-200 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light appearance-none"
                      >
                        <option value="">Select a topic</option>
                        <option>Business Partnership</option>
                        <option>Investment Inquiry</option>
                        <option>Procurement / Tenders</option>
                        <option>Careers</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        placeholder="Provide details on your inquiry..."
                        className="w-full bg-dark border border-dark-border rounded-xl px-4 py-4 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none font-light"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-5 rounded-xl bg-primary text-dark font-bold text-sm hover:bg-primary-light transition-all shadow-gold-sm hover:shadow-gold-md group uppercase tracking-widest"
                    >
                      Submit Official Inquiry
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
            <div className="lg:col-span-1" /> {/* Spacer */}
          </div>
        </div>
      </section>
    </div>
  );
}
