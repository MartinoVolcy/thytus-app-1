import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Collaboration Platform for Teams | Thytus",
  description:
    "Thytus is the AI collaboration platform that brings your entire team and AI agents together in one workspace. Work with multiple models, collaborate in real time, and ship faster.",
  openGraph: {
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is the AI collaboration platform that brings your entire team and AI agents together in one workspace. Work with multiple models, collaborate in real time, and ship faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is the AI collaboration platform that brings your entire team and AI agents together in one workspace. Work with multiple models, collaborate in real time, and ship faster.",
  },
  keywords: [
    "AI collaboration platform",
    "collaborative AI workspace",
    "team AI tools",
    "multi AI model platform",
  ],
};

export default function AICollaborationPlatformPage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 block">
            AI Collaboration
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Collaboration Platform{" "}
            <span className="text-gradient">for Teams</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Thytus brings your entire team and multiple AI models into one shared
            workspace so everyone — humans and agents alike — works from the same
            context.
          </p>
        </div>
      </section>

      {/* What Is an AI Collaboration Platform? */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            What Is an AI Collaboration Platform?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            An AI collaboration platform is a shared digital workspace where
            people and AI agents work side by side on the same tasks, documents,
            and projects. Unlike standalone chatbots that serve one person at a
            time, a collaboration platform lets multiple team members interact
            with multiple AI models in a single, persistent environment. Every
            conversation, file, and decision lives in one place — so nothing gets
            lost when work moves between people or between meetings.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Think of it as the difference between everyone on your team sending
            separate emails to different AI assistants and having an open office
            floor where your team and those assistants sit together, share the
            same whiteboards, and build on each other&apos;s contributions in
            real time.
          </p>
        </div>
      </section>

      {/* Why Teams Need Collaborative AI */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Why Teams Need Collaborative AI
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Most organizations already use AI in some form. The problem is that
            each team member uses it in isolation — separate accounts, separate
            contexts, separate outputs. The result is duplicated work,
            conflicting information, and a complete lack of visibility into what
            AI is actually doing across the company. When one person asks an AI
            to draft a competitive analysis and another asks a different model to
            do the same thing an hour later, that&apos;s wasted time and
            inconsistent results.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "visibility",
                title: "Shared Context",
                text: "Every team member and AI agent works from the same files, conversations, and history. No more re-explaining context in every new chat.",
              },
              {
                icon: "sync",
                title: "Eliminate Duplicate Work",
                text: "When AI outputs are visible to the whole team, people build on existing work instead of starting from scratch.",
              },
              {
                icon: "speed",
                title: "Ship Faster",
                text: "Real-time collaboration between humans and agents means research, drafting, and review happen concurrently instead of sequentially.",
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

      {/* How Thytus Works */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            How Thytus Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Thytus is built around one idea: your team and your AI agents should
            share the same workspace. When you create a project in Thytus, you
            invite your colleagues and deploy AI agents from providers like
            OpenAI, Anthropic, Google, Mistral, and more — all in the same room.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Multi-Model Agents",
                text: "Choose the right model for each task. Use GPT for long-form writing, Claude for nuanced analysis, Gemini for research, and Mistral for fast iteration — all within the same conversation. Agents can even hand off context to each other.",
              },
              {
                num: "02",
                title: "Shared Workspace",
                text: "Every document, spreadsheet, presentation, and code file lives in your team workspace. AI agents read and write into those same artifacts, so outputs are immediately available to every person on the team without copy-pasting between tools.",
              },
              {
                num: "03",
                title: "Real-Time Collaboration",
                text: "See what your teammates and AI agents are working on as it happens. Reply to agent outputs, mention colleagues in conversations, react with emoji, and run polls to make group decisions — all in one place.",
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
            Want to see how Thytus stacks up against tools like ChatGPT, Claude,
            or Gemini?{" "}
            <Link
              href="/compare"
              className="text-primary font-semibold hover:underline"
            >
              Compare Thytus to other AI platforms
            </Link>{" "}
            and see why teams are making the switch.
          </p>
        </div>
      </section>

      {/* Built-in Workspace Tools */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Built-in Workspace Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Thytus isn&apos;t just a chat window — it&apos;s a full productivity
            suite powered by AI. Every workspace comes with native tools so your
            team can go from idea to finished deliverable without leaving the
            platform.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "description",
                title: "Documents",
                text: "Draft, edit, and co-author long-form documents with AI assistance. Export to PDF, Word, or share directly.",
              },
              {
                icon: "slideshow",
                title: "Slides",
                text: "Create presentation decks from scratch or let an AI agent generate a first draft from your project notes.",
              },
              {
                icon: "table_chart",
                title: "Spreadsheets",
                text: "Analyze data, build models, and generate charts. AI agents can populate and format spreadsheets for you.",
              },
              {
                icon: "code",
                title: "Code Editor",
                text: "Write, review, and debug code collaboratively. Multiple AI models can suggest fixes, refactor functions, and explain logic.",
              },
              {
                icon: "image",
                title: "Image Generation",
                text: "Generate marketing assets, diagrams, and creative visuals directly inside your workspace with AI-powered image models.",
              },
              {
                icon: "mic",
                title: "Podcasts & Audio",
                text: "Turn documents, meeting notes, or research into podcast-style audio content that your team can listen to on the go.",
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
            Explore the full list of capabilities on the{" "}
            <Link
              href="/features"
              className="text-primary font-semibold hover:underline"
            >
              features page
            </Link>
            , or see how specific teams use these tools:{" "}
            <Link
              href="/ai-tools-for-sales-teams"
              className="text-primary font-semibold hover:underline"
            >
              sales teams
            </Link>
            ,{" "}
            <Link
              href="/ai-tools-for-marketing-teams"
              className="text-primary font-semibold hover:underline"
            >
              marketing teams
            </Link>
            , and{" "}
            <Link
              href="/solutions/small-business"
              className="text-primary font-semibold hover:underline"
            >
              small businesses
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Book a Demo
          </h2>
          <p className="text-lg text-slate-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Thytus is free to start and scales with your team. Create your
            workspace in under a minute, invite your colleagues, and deploy your
            first AI agents today. No credit card required.
          </p>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Check out our{" "}
            <Link
              href="/pricing"
              className="text-white font-semibold hover:underline"
            >
              pricing plans
            </Link>{" "}
            to find the right fit for your organization, or jump straight in.
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
