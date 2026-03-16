import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise | Security & Compliance | Thytus",
  description:
    "Enterprise-grade security for Thytus: SSO, dedicated infrastructure, zero data retention. HIPAA and SOC 2 compliance in progress.",
  openGraph: {
    title: "Enterprise | Thytus",
    description:
      "Security is our baseline. Enterprise SSO, military-grade encryption, and dedicated infrastructure for your team and AI agents.",
  },
};

const securityFeatures = [
  {
    title: "Enterprise SSO & IAM",
    icon: "badge",
    text: "Integrate with your existing identity providers—Okta, Azure AD, and others—for single sign-on and centralized access control. Role-based permissions keep the right people and agents in the right workspace.",
  },
  {
    title: "Military-grade security",
    icon: "lock",
    text: "Data is encrypted at rest and in transit. We use industry-standard encryption (AES-256 at rest, TLS in transit) and secure, audited infrastructure so your company's work stays protected.",
  },
  {
    title: "Zero data retention",
    icon: "delete_forever",
    text: "Your organization's data is used only for the workloads you run in Thytus. We do not train on your content or retain it beyond what's needed to deliver the service. Clear data use policies and optional retention controls.",
  },
  {
    title: "Dedicated infrastructure",
    icon: "dns",
    text: "Enterprise plans can run on dedicated infrastructure tailored to your data residency and compliance requirements. Isolated environments reduce risk and simplify audits.",
  },
  {
    title: "Audit logs & transparency",
    icon: "history",
    text: "Full activity tracking and audit logs so you can see who did what and when. Essential for compliance and internal governance.",
  },
];

const compliancePending = [
  { name: "HIPAA", description: "Health care data and BAA requirements" },
  { name: "SOC 2 Type I", description: "Security, availability, processing integrity" },
  { name: "SOC 2 Type II", description: "Ongoing operational controls" },
];

export default function EnterprisePage() {
  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
            Enterprise
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Security is our baseline, not a feature
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Thytus is built for teams that need enterprise-grade control: SSO, encryption, zero data retention, and dedicated infrastructure. Your data and your workflows stay in your control.
          </p>
        </div>
      </section>

      {/* Security features */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Security & compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-12">
            How we protect your workspace
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-2xl text-slate-500 dark:text-slate-400">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance: pending */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-4">
            Certifications in progress
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-xl mx-auto">
            We are committed to the highest standards of security and availability. The following certifications are currently pending.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {compliancePending.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border text-center"
              >
                <div className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                  {c.name}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {c.description}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Ready for enterprise-grade AI?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Talk to us about dedicated infrastructure, SSO, and custom compliance requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://calendly.com/martino-volcy02/business-subscription"
              className="inline-flex px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg"
            >
              Contact sales
            </Link>
            <Link
              href="/pricing"
              className="inline-flex px-8 py-3.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold text-sm hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
