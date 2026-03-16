import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Tools for Marketing Teams | Thytus",
  description:
    "Thytus helps marketing teams create campaigns, generate content, and analyze performance with collaborative multi-model AI agents in one workspace.",
  keywords: [
    "AI tools for marketing teams",
    "AI for marketing",
    "marketing AI workspace",
    "AI collaboration platform",
  ],
  openGraph: {
    title: "AI Tools for Marketing Teams | Thytus",
    description:
      "Thytus helps marketing teams create campaigns, generate content, and analyze performance with collaborative multi-model AI agents in one workspace.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools for Marketing Teams | Thytus",
    description:
      "Thytus helps marketing teams create campaigns, generate content, and analyze performance with collaborative multi-model AI agents in one workspace.",
  },
};

export default function AIToolsForMarketingTeamsPage() {
  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-4 block">
            AI for Marketing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Tools for{" "}
            <span className="text-gradient">Marketing Teams</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Your marketing team juggles campaigns, content calendars, competitive
            research, and brand assets every day. Thytus brings all of that work
            into a single AI-powered workspace where your people and AI agents
            collaborate side by side.
          </p>
        </div>
      </section>

      {/* How Marketing Teams Use Thytus */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            How Marketing Teams Use Thytus
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Modern marketing requires speed, creativity, and data. Thytus gives
            your team an unfair advantage by pairing human strategists with
            autonomous AI agents that can handle the heavy lifting. Here are the
            most common ways marketing teams put Thytus to work.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary text-2xl">campaign</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Campaign Creation
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Brief an AI agent on your goals, audience, and budget. It drafts
                ad copy, email sequences, and social posts while your team reviews
                and iterates in real time. Every version lives in the same shared
                thread so nothing gets lost.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl">edit_note</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Content Generation
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Generate blog posts, product descriptions, landing page copy, and
                video scripts. Use different AI models for different tasks: one
                for long-form writing, another for punchy headlines, a third for
                SEO optimization. All in one workspace.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-2xl">monitoring</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Competitive Analysis
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Deploy research agents that track competitor messaging, pricing
                changes, and feature launches. Thytus agents can browse the web,
                summarize findings, and surface insights your team can act on
                immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/15 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">palette</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                Brand Consistency
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Upload your brand guidelines, tone-of-voice documents, and style
                guides to the workspace. Every AI agent in the session references
                your brand context, so outputs stay on-brand from the first draft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple AI Models */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Multiple AI Models for Every Marketing Need
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            No single AI model excels at everything. GPT might write great
            long-form content, while Claude handles nuanced brand voice, and
            Gemini shines at analyzing visual assets. With Thytus, your team
            is not locked into one provider. You can use models from OpenAI,
            Anthropic, Google, Mistral, and more, switching between them in the
            same conversation.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This model-agnostic approach means you always pick the right tool
            for the job. Need a quick brainstorm? Use a fast, creative model.
            Producing a polished white paper? Switch to a model known for
            accuracy and depth. Your marketing team gets access to the entire AI
            ecosystem from a single interface.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Compare how Thytus stacks up against single-model tools on our{" "}
            <Link href="/compare/juma" className="text-primary font-semibold hover:underline">
              Thytus vs Juma
            </Link>{" "}
            page, or explore the full{" "}
            <Link href="/features" className="text-primary font-semibold hover:underline">
              features overview
            </Link>{" "}
            to see every capability available to your team.
          </p>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Team Collaboration Built for Marketers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Marketing is a team sport. Thytus is the only AI workspace where
            your entire marketing department can work together in real time.
            Copywriters, designers, analysts, and managers all share the same
            sessions. You can @mention a teammate, react to an AI-generated
            draft, start a reply thread for feedback, or run a poll to decide
            between headline options.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            AI agents participate in these conversations too. Ask an agent to
            join a brainstorm, review a teammate&apos;s copy, or fact-check claims
            in a press release. Because every agent has access to the full
            conversation history and uploaded brand assets, the output is
            context-aware and consistent.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Learn more about how collaborative AI works on the{" "}
            <Link href="/ai-collaboration-platform" className="text-primary font-semibold hover:underline">
              AI collaboration platform
            </Link>{" "}
            page, or see{" "}
            <Link href="/solutions/marketing" className="text-primary font-semibold hover:underline">
              Thytus for Marketing
            </Link>{" "}
            for a deeper look at marketing-specific workflows.
          </p>
        </div>
      </section>

      {/* Create Marketing Assets */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Create Marketing Assets Without Leaving the Workspace
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Most AI tools stop at text. Thytus goes further. Your team can
            create presentation slides, documents, spreadsheets, images, video
            content, and even AI-generated podcasts directly inside the
            workspace. That means fewer tool switches, faster turnaround, and a
            single source of truth for every marketing asset.
          </p>

          <div className="space-y-5">
            {[
              { icon: "slideshow", label: "Slides", text: "Build pitch decks and campaign presentations with AI-generated layouts, copy, and visuals." },
              { icon: "description", label: "Documents", text: "Draft blog posts, briefs, and case studies in a rich editor with AI assistance at every step." },
              { icon: "image", label: "Images", text: "Generate social media graphics, ad creatives, and hero images without opening a separate design tool." },
              { icon: "videocam", label: "Video", text: "Produce short-form video content and storyboards for campaigns across YouTube, TikTok, and Instagram." },
              { icon: "mic", label: "Podcasts", text: "Turn research, blog posts, or meeting notes into polished audio content your audience can listen to." },
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Creating Better Campaigns
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join marketing teams that are using Thytus to produce more content,
            launch faster campaigns, and keep every asset on-brand. Get started
            for free and see the difference collaborative AI makes.
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
