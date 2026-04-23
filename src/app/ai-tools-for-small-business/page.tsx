import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Tools for Small Businesses | Thytus",
  description:
    "Thytus gives small businesses access to enterprise-grade AI collaboration. Use multiple AI models, deploy agents, and scale your team's output without scaling headcount.",
  keywords: [
    "AI tools for small businesses",
    "AI for small business",
    "small business AI",
    "AI collaboration platform",
  ],
  openGraph: {
    title: "AI Tools for Small Businesses | Thytus",
    description:
      "Thytus gives small businesses access to enterprise-grade AI collaboration. Use multiple AI models, deploy agents, and scale your team's output without scaling headcount.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools for Small Businesses | Thytus",
    description:
      "Thytus gives small businesses access to enterprise-grade AI collaboration. Use multiple AI models, deploy agents, and scale your team's output without scaling headcount.",
  },
};

export default function AIToolsForSmallBusinessPage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-4 block">
            AI for Small Business
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Tools for{" "}
            <span className="text-gradient">Small Businesses</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Small teams have big ambitions but limited bandwidth. Thytus gives
            your business the same AI capabilities that large enterprises use,
            without the enterprise price tag. Deploy AI agents, collaborate with
            your team, and get more done with fewer people.
          </p>
        </div>
      </section>

      {/* Why Small Businesses Need AI Tools */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Why Small Businesses Need AI Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            When you are running a small business, every team member wears
            multiple hats. The same person writing marketing copy might also be
            handling customer research, building investor decks, and drafting
            internal processes. AI tools let you multiply your capacity without
            multiplying your payroll.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The challenge is that most AI tools are built for individual use.
            Each person on your team ends up in their own ChatGPT tab, with
            separate conversations, separate context, and no shared knowledge.
            Work gets duplicated. Brand voice drifts. Insights get lost in
            someone&apos;s chat history instead of being available to the whole
            team.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Thytus solves this by putting your entire team, humans and AI
            agents, into one shared workspace. Everything your business creates
            with AI is accessible to everyone who needs it. That is how small
            teams start operating like much larger ones.
          </p>
        </div>
      </section>

      {/* Enterprise-Grade AI Without Enterprise Costs */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Enterprise-Grade AI Without Enterprise Costs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Thytus gives you access to models from OpenAI, Anthropic, Google,
            Mistral, and more from a single platform. Instead of paying for
            separate subscriptions to ChatGPT, Claude, and Gemini, your team
            gets all of them in one place. Pick the best model for each task:
            a fast model for brainstorming, a precise model for financial
            analysis, a creative model for marketing copy.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The best part? Thytus has a free tier that lets you get started
            immediately. There is no credit card required and no sales call to
            schedule. Start using AI agents today, and upgrade when your
            business is ready to scale. Check our{" "}
            <Link href="/pricing" className="text-primary font-semibold hover:underline">
              pricing page
            </Link>{" "}
            to see what is included at every level.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-2xl text-emerald-600 dark:text-emerald-400">
                  swap_horiz
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                Model Agnostic
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Use GPT, Claude, Gemini, Mistral, and dozens more without
                managing separate accounts.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-2xl text-blue-600 dark:text-blue-400">
                  group
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Everyone on your team works in the same workspace with shared
                context and AI agents.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow text-center">
              <div className="w-14 h-14 bg-violet-100 dark:bg-violet-500/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-2xl text-violet-600 dark:text-violet-400">
                  redeem
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                Free to Start
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Get started immediately with a generous free tier. No credit
                card, no commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Team of AI Agents */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Your Team of AI Agents
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Think of Thytus agents as new team members that never sleep, never
            forget context, and can work on multiple tasks at once. For a
            five-person startup, deploying AI agents is like having a team of
            twenty, each one handling research, writing, analysis, or creative
            work while your humans focus on strategy and relationships.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Agents in Thytus are not just answering questions. They run
            autonomous, multi-step workflows. An agent can research a topic,
            compile its findings, draft a report, and create a presentation
            deck, all while your team reviews progress and provides feedback in
            the same shared session. When one agent finishes, another can pick
            up the results and take the work further.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            This collaborative agent model is what sets Thytus apart from
            individual AI chatbots. Explore the full{" "}
            <Link href="/ai-collaboration-platform" className="text-primary font-semibold hover:underline">
              AI collaboration platform
            </Link>{" "}
            to understand how agents and humans work together, or{" "}
            <Link href="/compare" className="text-primary font-semibold hover:underline">
              compare Thytus
            </Link>{" "}
            to other tools on the market.
          </p>
        </div>
      </section>

      {/* Everything You Need in One Workspace */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Everything You Need in One Workspace
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Small businesses cannot afford to juggle a dozen SaaS tools. Thytus
            consolidates what you need into a single workspace so you spend less
            time switching tabs and more time producing results.
          </p>

          <div className="space-y-5">
            {[
              { icon: "description", label: "Documents", text: "Write proposals, SOPs, and blog posts with AI assistance. Upload existing docs for agents to reference and improve." },
              { icon: "slideshow", label: "Presentations", text: "Build pitch decks, sales presentations, and training materials with AI-generated content and layouts." },
              { icon: "table_chart", label: "Spreadsheets", text: "Analyze financial data, manage inventory, and build forecasts. AI agents help clean data and surface insights." },
              { icon: "image", label: "Image Generation", text: "Create marketing graphics, product mockups, and social media visuals without a graphic designer on staff." },
              { icon: "code", label: "Code Editor", text: "Build internal tools, landing pages, and automations with AI-powered code generation and debugging." },
              { icon: "mic", label: "Podcasts & Audio", text: "Turn meeting notes, research, or blog content into professional audio briefings and podcast episodes." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-10">
            See the complete list of built-in tools on the{" "}
            <Link href="/features" className="text-primary font-semibold hover:underline">
              features page
            </Link>
            , or visit{" "}
            <Link href="/solutions/small-business" className="text-primary font-semibold hover:underline">
              Thytus for Small Business
            </Link>{" "}
            for use cases tailored to growing companies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Get Started for Free
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Thousands of small businesses already use Thytus to scale their
            output without scaling their headcount. Join them today with a free
            account, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="https://showcase.thytus.com/v1/auth/signin"
              className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-none font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Get Started for Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex px-8 py-4 text-white border border-white/20 rounded-none font-bold hover:bg-white/10 transition-colors"
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
