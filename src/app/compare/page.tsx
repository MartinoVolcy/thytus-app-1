import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { competitors } from "@/data/competitors";

export const metadata: Metadata = {
  title: "Why Thytus | Compare AI Workspaces",
  description:
    "See how Thytus compares to ChatGPT, Claude, Gemini, Juma, Manus, and more. The AI workspace built for your whole company.",
  openGraph: {
    title: "Why Thytus | Compare AI Workspaces",
    description:
      "See how Thytus compares to ChatGPT, Claude, Gemini, Juma, Manus, and more.",
  },
};

const collabFeatures = [
  { feature: "Shared AI workspace", thytus: true, others: false },
  { feature: "Multi-agent sessions", thytus: true, others: false },
  { feature: "Agents collaborate with each other", thytus: true, others: false },
  { feature: "@Mentions & reactions", thytus: true, others: false },
  { feature: "Polls for team decisions", thytus: true, others: false },
  { feature: "Reply threads", thytus: true, others: false },
  { feature: "Real-time co-editing", thytus: true, others: false },
  { feature: "Model agnostic (use any provider)", thytus: true, others: false },
  { feature: "Built-in docs, slides, spreadsheets, code editor", thytus: true, others: false },
  { feature: "Media generation (podcasts, images, video)", thytus: true, others: false },
];

export default function ComparePage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 block">
            Thytus vs Everyone Else
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            How Are We <span className="text-gradient-blue pr-1 pb-1 inline-block">Different? </span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            See how Thytus stacks up against the tools your team already knows.
          </p>
        </div>
      </section>

      {/* Featured Thytus Card + Competitor Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Thytus featured card */}
          <div className="mb-8 p-8 rounded-2xl border-2 border-primary/30 dark:border-primary/20 bg-gradient-to-br from-sky-50/80 via-white to-white dark:from-primary/[0.06] dark:via-dark-card dark:to-dark-card shadow-lg shadow-primary/5 dark:shadow-primary/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center shrink-0">
              <Image
                src="/Thytus_Logo.png"
                alt="Thytus"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Thytus
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-200">Thytus</span> is the collaborative AI workspace where your whole company works together. Teams and AI agents from any provider share one workspace to draft, research, create, and ship, with built-in docs, slides, spreadsheets, code editor, and media generation. It&apos;s AI that doesn&apos;t just chat, it does the work.
              </p>
            </div>
            <Link
              href="https://showcase.thytus.com/v1/auth/signin"
              className="shrink-0 px-6 py-3 bg-primary hover:bg-sky-600 text-white rounded-full font-bold text-sm transition-colors shadow-md shadow-sky-500/20"
            >
              Start for Free
            </Link>
          </div>

          {/* Competitor cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {competitors.map((c) => (
              <div
                key={c.slug}
                className="p-6 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card dark-glow flex flex-col hover:border-gray-200 dark:hover:border-dark-border transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 overflow-hidden">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {c.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {c.description}
                </p>
                <Link
                  href={`/compare/${c.slug}`}
                  className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Compare {c.name.split(" /")[0]} to Thytus
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Thytus */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface" id="why-thytus">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
              The Thytus Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why customers are choosing Thytus
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-2xl text-emerald-600 dark:text-emerald-400">
                  menu_book
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Grounded Knowledge
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                AI responses are built on your team&apos;s actual files,
                conversations, and context, not generic internet data. Every
                answer is relevant to your work.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-2xl text-blue-600 dark:text-blue-400">
                  swap_horiz
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Model Agnostic
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Use GPT, Claude, Gemini, Mistral, and dozens more. Pick the best
                model for each task instead of being locked into a single
                provider.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-violet-100 dark:bg-violet-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-2xl text-violet-600 dark:text-violet-400">
                  travel_explore
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Deep Research
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Agents go beyond surface-level answers. They run multi-step
                research workflows, cross-reference sources, and deliver
                thorough, reliable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration: Thytus vs Others */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
              Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Team collaboration with{" "}
              <span className="text-gradient-blue">Thytus</span> vs. others
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
              Most AI tools are built for individuals. Thytus is built for teams.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 dark:border-dark-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] bg-gray-50 dark:bg-dark-surface px-6 py-4 border-b border-gray-100 dark:border-dark-border">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Feature
              </span>
              <span className="text-sm font-bold text-primary text-center">
                Thytus
              </span>
              <span className="text-sm font-bold text-slate-400 dark:text-slate-500 text-center">
                Others
              </span>
            </div>
            {/* Rows */}
            {collabFeatures.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_100px_100px] px-6 py-4 ${
                  i < collabFeatures.length - 1
                    ? "border-b border-gray-50 dark:border-dark-border"
                    : ""
                }`}
              >
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {row.feature}
                </span>
                <span className="flex justify-center">
                  <span className="material-symbols-outlined text-lg text-emerald-500">
                    check_circle
                  </span>
                </span>
                <span className="flex justify-center">
                  <span className="material-symbols-outlined text-lg text-slate-300 dark:text-slate-600">
                    cancel
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to see the difference?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join the teams already using Thytus to bring their people and AI
            agents together in one workspace.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Try Thytus for Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
