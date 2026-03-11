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
            <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let&apos;s Start a <span className="gold-shimmer">Conversation</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl leading-relaxed">
              Whether it&apos;s a business inquiry, partnership opportunity, or general query —
              our team is ready to assist you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">Get in Touch</h2>
                {[
                  { icon: Mail, label: "Email Us", value: "info@excellencegroup.co.za" },
                  { icon: Phone, label: "Call Us", value: "+27 (0) 11 000 0000" },
                  { icon: MapPin, label: "Visit Us", value: "Sandton, Johannesburg, South Africa" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-slate-200 text-sm font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl gold-border bg-dark-card">
                <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                <div className="text-slate-400 text-sm space-y-1">
                  <p>Monday – Friday: 08:00 – 17:00</p>
                  <p>Saturday: 09:00 – 13:00</p>
                  <p className="text-slate-500">Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 gap-4 p-8 rounded-2xl gold-border bg-dark-card"
                >
                  <CheckCircle className="w-16 h-16 text-primary" />
                  <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will respond within 24–48 business hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="p-8 rounded-2xl gold-border bg-dark-card space-y-6"
                >
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
                          className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Subject</label>
                    <select
                      id="subject"
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
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
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-dark font-bold text-sm hover:bg-primary-light transition-all shadow-gold-sm hover:shadow-gold-md group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
