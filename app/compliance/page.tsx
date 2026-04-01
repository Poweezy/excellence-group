import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | Excellence Group",
  description: "Excellence Group's regulatory compliance and corporate governance commitments in Eswatini.",
};

export default function CompliancePage() {
  return (
    <div className="bg-dark-bg min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 selection:bg-primary/30 selection:text-white">
      <div className="max-w-4xl mx-auto bg-dark-card/40 border border-primary/20 backdrop-blur-md p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white luxury-text-display mb-8">
          Compliance & Governance
        </h1>
        <div className="prose prose-invert prose-slate max-w-none luxury-text-sans font-light">
          <p className="text-slate-300 text-lg mb-6">Effective Date: April 2026</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Corporate Governance Overview</h2>
          <p className="text-slate-400 mb-6">
            Excellence Group (Pty) Ltd is dedicated to strictly adhering to the highest standards of corporate governance, business integrity, and regulatory compliance. We operate in full accordance with the laws of the Kingdom of Eswatini and international best practices that govern diversified holding companies and enterprise management.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Financial Integrity & Anti-Money Laundering (AML)</h2>
          <p className="text-slate-400 mb-6">
            We are fully committed to complying with the Money Laundering and Financing of Terrorism (Prevention) Act of Eswatini. All financial and advisory operations within Excellence Group adhere to strict Know Your Customer (KYC) requirements, robust internal monitoring, and transparent reporting channels to prevent money laundering, fraud, and illicit activities.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Employment & Labor Practices</h2>
          <p className="text-slate-400 mb-6">
            The Group conducts all hiring, training, and operational management in accordance with the Eswatini Employment Act. We uphold fair labor practices, ensure occupational health and safety across our construction, logistics, and agriculture sites, and do not tolerate forced labor, child labor, or discrimination in any form.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Tax & Environmental Compliance</h2>
          <p className="text-slate-400 mb-6">
            Excellence Group is a registered taxpayer fully compliant with the Eswatini Revenue Service (ERS). Furthermore, our agricultural, heavy plant, and manufacturing divisions adhere to the Eswatini Environment Management Act, emphasizing sustainable operations, minimal ecological disruption, and proper waste management.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Whistleblowing & Ethical Conduct</h2>
          <p className="text-slate-400 mb-6">
            Integrity is one of our core pillars. We maintain a zero-tolerance policy against bribery, extortion, and corruption. Employees, partners, and stakeholders are encouraged to report unethical behavior or regulatory violations through our designated, confidential whistleblowing channels.
          </p>

           <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. General Inquiries</h2>
          <p className="text-slate-400 mb-6">
            For questions or detailed disclosures regarding our compliance operations, certifications, or governance frameworks, please direct all formal inquiries to info@excellencegroup.co.sz.
          </p>
        </div>
      </div>
    </div>
  );
}
