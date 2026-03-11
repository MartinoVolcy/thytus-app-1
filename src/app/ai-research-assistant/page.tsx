import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Research Assistant for Teams | Thytus",
  description:
    "Thytus is the AI research assistant that helps teams run deep, multi-step research workflows with collaborative AI agents and grounded knowledge.",
  keywords: [
    "AI research assistant",
    "AI for research",
    "research AI tools",
    "collaborative AI workspace",
  ],
  openGraph: {
    title: "AI Research Assistant for Teams | Thytus",
    description:
      "Thytus is the AI research assistant that helps teams run deep, multi-step research workflows with collaborative AI agents and grounded knowledge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research Assistant for Teams | Thytus",
    description:
      "Thytus is the AI research assistant that helps teams run deep, multi-step research workflows with collaborative AI agents and grounded knowledge.",
  },
};

export default function AIResearchAssistantPage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-4 block">
            AI-Powered Research
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Research Assistant{" "}
            <span className="text-gradient">for Teams</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Research is the backbone of good decisions, but it takes time your
            team does not always have. Thytus gives every team member an AI
            research assistant that goes beyond simple Q&amp;A to run thorough,
            multi-step investigations grounded in your own data.
          </p>
        </div>
      </section>

      {/* Deep Research With AI Agents */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Deep Research With AI Agents
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Most AI chatbots give you a single response and call it done. Thytus
            agents work differently. When you assign a research task, the agent
            breaks it into sub-questions, searches the web and your uploaded
            documents, cross-references sources, and synthesizes findings into a
            structured report. It is the difference between getting a surface-level
            answer and receiving a comprehensive briefing you can act on.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Agents can run multi-step workflows autonomously. Ask an agent to
            research market sizing for a new product category, and it will
            identify relevant reports, extract key data points, compare
            projections across sources, and flag contradictions. The entire
            research trail is visible to your team in the shared workspace, so
            anyone can verify sources or pick up where the agent left off.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Because Thytus is{" "}
            <Link href="/features" className="text-primary font-semibold hover:underline">
              model agnostic
            </Link>
            , you can route different research tasks to different AI models. Use a
            model with strong reasoning for financial analysis, one with large
            context windows for reviewing long documents, and a fast model for
            quick fact-checks, all in the same session.
          </p>
        </div>
      </section>

      {/* Grounded in Your Knowledge Base */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Grounded in Your Knowledge Base
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Generic AI tools only know what is on the public internet. Thytus
            lets you upload PDFs, internal documents, spreadsheets, and past
            research directly into the workspace. Every agent in the session can
            reference these files, which means your research outputs are
            grounded in the data that actually matters to your organization.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This grounded approach dramatically reduces hallucinations. When an
            agent cites a number, your team can trace it back to the original
            source document. When it summarizes a competitor&apos;s product, the
            summary is based on the spec sheet you uploaded, not on outdated web
            data. The result is research you can trust and present to
            stakeholders with confidence.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            See how this compares to tools like NotebookLM on our{" "}
            <Link href="/compare/notebooklm" className="text-primary font-semibold hover:underline">
              Thytus vs NotebookLM
            </Link>{" "}
            comparison, or explore how Thytus differs from Genspark on the{" "}
            <Link href="/compare/genspark" className="text-primary font-semibold hover:underline">
              Thytus vs Genspark
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Collaborate on Research as a Team */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Collaborate on Research as a Team
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Research is rarely a solo activity. Product managers need input from
            engineers. Analysts need context from sales. Strategy teams need
            validation from finance. Thytus makes collaborative research
            seamless by putting everyone, human and AI, in the same
            shared session.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Team members can @mention each other to request input, react to
            agent findings, start threaded discussions around a specific data
            point, or run polls to align on next steps. Multiple AI agents can
            work in the same session simultaneously, so you can have one agent
            researching market data while another drafts a summary document.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            This is the kind of{" "}
            <Link href="/ai-collaboration-platform" className="text-primary font-semibold hover:underline">
              AI collaboration
            </Link>{" "}
            that single-user chatbots simply cannot provide. Every insight,
            source, and conversation lives in one place, building an
            institutional knowledge base that grows with every project.
          </p>
        </div>
      </section>

      {/* From Research to Deliverables */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            From Research to Deliverables in One Workspace
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Research is only valuable when it leads to action. Thytus bridges
            the gap between discovery and delivery by giving your team built-in
            creation tools. Once your agents gather findings, you can
            immediately turn them into polished outputs without switching apps.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">description</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Research Reports
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Convert agent findings into formatted documents with citations,
                charts, and executive summaries your stakeholders can read
                immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-2xl">slideshow</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Presentations
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Generate slide decks from research data. AI agents structure the
                narrative, pull key statistics, and create visual layouts you
                can present the same day.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl">table_chart</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Data Analysis
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Analyze spreadsheets and datasets inside the workspace. Agents
                can build pivot tables, run comparisons, and generate charts
                without exporting to external tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">mic</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Audio Summaries
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Turn research reports into AI-generated podcasts and audio
                briefings. Share them with busy executives who prefer listening
                over reading.
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-10">
            Sales teams also benefit from this research-to-action workflow. See
            how on the{" "}
            <Link href="/ai-tools-for-sales-teams" className="text-primary font-semibold hover:underline">
              AI tools for sales teams
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Researching Smarter
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Give your team AI research agents that go deep, stay grounded in
            your data, and turn findings into deliverables. Thytus is free to
            start with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="https://showcase.thytus.com/v1/auth/signin"
              className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Get Started for Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex px-8 py-4 text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
