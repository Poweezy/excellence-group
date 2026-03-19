"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <div className="overflow-hidden bg-dark-bg">
      {/* Hero with Marble */}
      <section className="py-24 animated-bg relative min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Marble */}
          <Image
            src="/assets/marble-gold-bg.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-55 z-0 absolute inset-0"
            priority
          />
          {/* Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
          {/* Slant Panels */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute -left-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[-15deg] border-r border-primary/10 backdrop-blur-sm" />
            <div className="absolute -right-[25%] top-0 h-[150%] w-[50%] bg-dark-card/40 skew-x-[15deg] border-l border-primary/10 backdrop-blur-sm" />
          </div>
          <AnimatedSection className="max-w-3xl relative z-30">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact Excellence Group</span>
            <h1 className="mt-3 luxury-text-display text-5xl lg:text-7xl font-bold text-white leading-tight">
              Get in <span className="gold-shimmer italic">Touch</span>
            </h1>
            <p className="mt-6 text-slate-400 text-xl font-light leading-relaxed luxury-text-sans">
              From our Manzini headquarters, our team is ready to discuss partnerships, investment opportunities, or general inquiries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <h2 className="luxury-text-display text-4xl font-bold text-white mb-8">Headquarters</h2>
              {[
                { 
                  icon: MapPin, 
                  title: "Physical Address", 
                  desc: "Suite No. 1, First Floor, Eswatini Dairy Board Building, Manzini, Eswatini" 
                },
                { 
                  icon: Phone, 
                  title: "Phone", 
                  desc: "+268 3502 3746" 
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  desc: "info@excellencegroup.co.sz" 
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.1}>
                  <div className="group p-8 rounded-2xl gold-border bg-dark-card backdrop-blur-sm hover:shadow-gold-lg hover:bg-dark-elevated transition-all">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1} />
                    </div>
                    <h3 className="luxury-text-accent text-lg font-bold text-white mb-3">{title}</h3>
                    <p className="text-slate-400 font-light luxury-text-sans">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </AnimatedSection>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="up" delay={0.2}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-2xl gold-border bg-dark-card backdrop-blur-sm text-center flex flex-col items-center gap-6"
                  >
                    <CheckCircle className="w-20 h-20 text-primary" />
                    <h3 className="luxury-text-display text-3xl text-white font-bold">Thank You</h3>
                    <p className="text-slate-400 max-w-md luxury-text-sans">
                      Your message has been sent successfully. Our team will respond within 24-48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      setError('');

                      const formData = new FormData(e.currentTarget);

                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          body: formData,
                        });

                        if (response.ok) {
                          setSubmitted(true);
                        } else {
                          const errorData = await response.json();
                          setError(errorData.error || 'Submission failed');
                        }
                      } catch (err) {
                        setError('Network error. Please try again.');
                      } finally {
                        setLoading(false);
                      }
                    }}
                    className="p-10 lg:p-12 rounded-2xl gold-border bg-dark-card backdrop-blur-sm space-y-6"
                  >
                    <div>
                      <h3 className="luxury-text-display text-3xl font-bold text-white mb-2">Official Inquiry</h3>
                      <p className="text-slate-400 luxury-text-sans">Get in touch with our leadership team.</p>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-300"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        {error}
                      </motion.div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-medium">Full Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          disabled={loading}
                          className="w-full p-4 rounded-xl border border-dark-border bg-dark-card text-slate-200 placeholder-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-medium">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          disabled={loading}
                          className="w-full p-4 rounded-xl border border-dark-border bg-dark-card text-slate-200 placeholder-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-medium">Subject</label>
                      <select
                        name="subject"
                        required
                        disabled={loading}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-4 rounded-xl border border-dark-border bg-dark-card text-slate-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-light appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option>Business Partnership</option>
                        <option>Investment Opportunity</option>
                        <option>Procurement & Tenders</option>
                        <option>Career Opportunities</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    {subject === "Career Opportunities" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-medium">Upload CV / Cover Letter (PDF, DOCX)</label>
                        <input
                          name="attachment"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          disabled={loading}
                          required
                          className="w-full p-3 rounded-xl border border-dark-border bg-dark-card text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all font-light"
                        />
                      </motion.div>
                    )}

                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-medium">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        disabled={loading}
                        className="w-full p-4 rounded-xl border border-dark-border bg-dark-card text-slate-200 placeholder-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-vertical font-light"
                        placeholder="Describe your inquiry..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full p-5 rounded-xl gold-metallic-solid text-dark font-bold uppercase tracking-widest text-sm shadow-gold-lg hover:shadow-gold-xl hover:brightness-105 transition-all flex items-center justify-center gap-3 group"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </AnimatedSection>
            </div>
            <div className="lg:col-span-1" /> {/* Spacer */}
          </div>
        </div>
      </section>

      <div className="section-divider" />
    </div>
  );
}

