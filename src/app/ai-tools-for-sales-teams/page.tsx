import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Tools for Sales Teams | Thytus",
  description:
    "Thytus gives sales teams AI-powered tools to research prospects, draft proposals, and close deals faster with collaborative multi-model AI agents.",
  openGraph: {
    title: "AI Tools for Sales Teams | Thytus",
    description:
      "Thytus gives sales teams AI-powered tools to research prospects, draft proposals, and close deals faster with collaborative multi-model AI agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools for Sales Teams | Thytus",
    description:
      "Thytus gives sales teams AI-powered tools to research prospects, draft proposals, and close deals faster with collaborative multi-model AI agents.",
  },
  keywords: [
    "AI tools for sales teams",
    "AI for sales",
    "sales AI workspace",
    "AI collaboration platform",
  ],
};

export default function AIToolsForSalesTeamsPage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 block">
            AI for Sales
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Tools for{" "}
            <span className="text-gradient">Sales Teams</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Research prospects, draft proposals, run competitive analysis, and
            close deals faster — all inside one collaborative AI workspace built
            for revenue teams.
          </p>
        </div>
      </section>

      {/* How Sales Teams Use Thytus */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            How Sales Teams Use Thytus
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Sales moves fast. Between researching accounts, tailoring outreach,
            preparing decks, and responding to RFPs, reps spend more time on
            preparation than actual selling. Thytus changes that equation by
            giving your sales team a shared AI workspace where agents handle the
            heavy lifting and every team member can see — and build on — what
            others have already done.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "person_search",
                title: "Prospect Research",
                text: "Deploy AI agents to research companies, identify decision-makers, surface recent news, and compile account briefs — automatically. Your reps walk into every call prepared.",
              },
              {
                icon: "draft",
                title: "Proposal Drafting",
                text: "Generate first drafts of proposals, SOWs, and pricing summaries from templates and deal context. Reps review and refine instead of starting from a blank page.",
              },
              {
                icon: "analytics",
                title: "Competitive Analysis",
                text: "AI agents monitor competitor positioning, pull relevant battlecards, and highlight differentiators — so your team always has the latest intelligence at hand.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
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

      {/* Multi-Model AI for Smarter Selling */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Multi-Model AI for Smarter Selling
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Different sales tasks demand different strengths. A single AI model
            can&apos;t be the best at everything — so Thytus doesn&apos;t force
            you to pick just one. Your team gets access to models from OpenAI,
            Anthropic, Google, Mistral, and more, and can assign the best model
            to each part of the workflow.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "GPT for Persuasive Writing",
                text: "Draft outreach emails, follow-ups, and proposal narratives that sound natural and compelling. GPT excels at adapting tone and structure to your brand voice.",
              },
              {
                num: "02",
                title: "Claude for Deal Analysis",
                text: "Analyze lengthy RFPs, contracts, and procurement documents. Claude's strength in nuanced comprehension helps your team catch critical details that others miss.",
              },
              {
                num: "03",
                title: "Gemini for Market Research",
                text: "Pull together industry reports, company financials, and market trends into structured research briefs. Gemini's broad knowledge base makes it ideal for deep-dive research.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-extrabold text-sm">
                    {item.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-8">
            Thytus is{" "}
            <Link
              href="/ai-collaboration-platform"
              className="text-primary font-semibold hover:underline"
            >
              the AI collaboration platform
            </Link>{" "}
            that lets your sales org use every model where it performs best,
            without juggling separate subscriptions or losing context between
            tools.
          </p>
        </div>
      </section>

      {/* Collaborate With Your Sales Team in Real Time */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Collaborate With Your Sales Team in Real Time
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Sales is a team sport. SDRs research accounts, AEs build
            relationships, sales engineers handle technical questions, and
            managers review pipeline — yet most AI tools treat each person as if
            they&apos;re working alone. Thytus is different.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            In Thytus, every AI interaction happens inside a shared workspace.
            When an SDR asks an agent to compile a prospect brief, the AE can
            see it immediately. When the sales engineer generates a technical
            comparison, the whole deal team has access. Mention teammates with
            @mentions, discuss agent outputs in reply threads, and make group
            decisions with built-in polls — all without leaving the platform.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The result is a sales team that moves as one unit, with AI amplifying
            every member instead of siloing them.{" "}
            <Link
              href="/compare"
              className="text-primary font-semibold hover:underline"
            >
              See how this compares to single-user AI tools
            </Link>
            .
          </p>
        </div>
      </section>

      {/* From Research to Presentation in One Workspace */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            From Research to Presentation in One Workspace
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            A typical deal involves research, outreach, proposals, presentations,
            and contracts. In most organizations, those artifacts live across
            five or six different applications. Thytus consolidates the entire
            workflow into a single workspace with built-in tools designed for
            sales.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "description",
                title: "Proposals & SOWs",
                text: "Draft, edit, and finalize proposals with AI co-authoring. Export to PDF or share a live link with your prospect.",
              },
              {
                icon: "slideshow",
                title: "Sales Decks",
                text: "Generate pitch decks from deal notes and competitive intelligence. Customize slides for each prospect without starting over.",
              },
              {
                icon: "table_chart",
                title: "Pricing Models",
                text: "Build pricing comparisons and ROI calculators in the built-in spreadsheet. AI agents can populate formulas and format tables.",
              },
              {
                icon: "auto_awesome",
                title: "AI Research Agents",
                text: "Deploy agents that autonomously research accounts, compile news, and deliver structured briefs directly into your workspace.",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {tool.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-1">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tool.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-8">
            Explore all built-in tools on the{" "}
            <Link
              href="/features"
              className="text-primary font-semibold hover:underline"
            >
              features page
            </Link>
            , or learn how Thytus works for{" "}
            <Link
              href="/ai-tools-for-marketing-teams"
              className="text-primary font-semibold hover:underline"
            >
              marketing teams
            </Link>{" "}
            and{" "}
            <Link
              href="/ai-research-assistant"
              className="text-primary font-semibold hover:underline"
            >
              AI-powered research
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Start Closing Deals Faster */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Closing Deals Faster
          </h2>
          <p className="text-lg text-slate-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Your competitors are already using AI. The difference is whether your
            team uses it together or in silos. Thytus gives your entire sales
            organization a shared AI workspace — free to start, with plans that
            scale as you grow.
          </p>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            See{" "}
            <Link
              href="/pricing"
              className="text-white font-semibold hover:underline"
            >
              pricing
            </Link>{" "}
            or check out{" "}
            <Link
              href="/solutions/sales"
              className="text-white font-semibold hover:underline"
            >
              Thytus for Sales
            </Link>{" "}
            for a deeper look at how revenue teams use the platform.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-none font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
