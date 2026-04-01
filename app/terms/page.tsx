import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Excellence Group",
  description: "Excellence Group website Terms of Service.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-dark-bg min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 selection:bg-primary/30 selection:text-white">
      <div className="max-w-4xl mx-auto bg-dark-card/40 border border-primary/20 backdrop-blur-md p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white luxury-text-display mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert prose-slate max-w-none luxury-text-sans font-light">
          <p className="text-slate-300 text-lg mb-6">Effective Date: April 2026</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-400 mb-6">
            By accessing or using the Excellence Group (Pty) Ltd website (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Governing Law</h2>
          <p className="text-slate-400 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Eswatini, without regard to its conflict of law provisions. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Eswatini.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use License</h2>
          <p className="text-slate-400 mb-6">
            Permission is granted to temporarily download one copy of the materials (information or software) on the Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <ul className="list-disc pl-6 text-slate-400 mb-6 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on the Site;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-slate-400 mb-6">
            The Site and its original content, features, and functionality are and will remain the exclusive property of Excellence Group (Pty) Ltd and its licensors. The Site is protected by copyright, trademark, and other laws of Eswatini and foreign countries.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-400 mb-6">
            In no event shall Excellence Group (Pty) Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes</h2>
          <p className="text-slate-400 mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
          <p className="text-slate-400 mb-6">
            If you have any questions about these Terms, please contact us at info@excellencegroup.co.sz.
          </p>
        </div>
      </div>
    </div>
  );
}
