import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Excellence Group",
  description: "Excellence Group Privacy Policy in compliance with Eswatini data protection regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-dark-bg min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 selection:bg-primary/30 selection:text-white">
      <div className="max-w-4xl mx-auto bg-dark-card/40 border border-primary/20 backdrop-blur-md p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white luxury-text-display mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-slate max-w-none luxury-text-sans font-light">
          <p className="text-slate-300 text-lg mb-6">Last Updated: April 2026</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-slate-400 mb-6">
            Excellence Group (Pty) Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you, in compliance with the Eswatini Data Protection Act (2022) and other relevant regulations.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. The Data We Collect About You</h2>
          <p className="text-slate-400 mb-6">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Technical Data (internet protocol (IP) address, browser type and version, time zone setting).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p className="text-slate-400 mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-slate-400 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation under Eswatini law.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-400 mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Legal Rights</h2>
          <p className="text-slate-400 mb-6">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Details</h2>
          <p className="text-slate-400 mb-6">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:<br /><br />
            Excellence Group (Pty) Ltd<br />
            Manzini, Eswatini<br />
            Email: info@excellencegroup.co.sz
          </p>
        </div>
      </div>
    </div>
  );
}
