"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ModelsModal from "./ModelsModal";

const models = [
  { name: "GPT-4o", provider: "OpenAI", color: "bg-green-100 text-green-700" },
  {
    name: "Claude 3.6 Sonnet",
    provider: "Anthropic",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    color: "bg-blue-100 text-blue-700",
  },
  { name: "Llama 4", provider: "Meta", color: "bg-blue-100 text-blue-600" },
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    color: "bg-yellow-100 text-yellow-700",
  },
  { name: "Grok 4", provider: "xAI", color: "bg-slate-100 text-slate-700" },
  {
    name: "GPT 5.4",
    provider: "Perplexity",
    color: "bg-teal-100 text-teal-700",
  },
  { name: "Deepseek R1", provider: "Deepseek", color: "bg-red-100 text-red-700" },
];

const contextTrackingPoints: any[] = [
  // {
  //   heading: "Update one Agent & Team",
  //   text: "When something changes, teammates and agents use Context Tracking to update each other on the new goal. Everyone sees the same correction so human and AI work stay aligned.",
  // },
  // {
  //   heading: "Mid-Task Updates",
  //   text: "Requirements changed? Send fresh instructions directly through Context Tracking so the agent adjusts course without starting over.",
  // },
  // {
  //   heading: "Conversation Memory",
  //   text: "Agents remember past conversations but only surface the messages that matter for the current task. Relevant history is recalled, noisy context is filtered out, reducing hallucinations.",
  // },
];

const VISIBLE_SLOTS = 7;
const CENTER_SLOT = Math.floor(VISIBLE_SLOTS / 2);
const ITEM_HEIGHT = 75;
const SCROLL_SPEED = 0.5;

export default function Features() {
  const [offset, setOffset] = useState(0);
  const [modelsOpen, setModelsOpen] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    let animId: number;
    let lastTime: number | null = null;

    const animate = (time: number) => {
      if (lastTime !== null) {
        const dt = (time - lastTime) / 1000;
        setOffset((prev) => (prev + dt * SCROLL_SPEED) % models.length);
      }
      lastTime = time;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const baseIndex = Math.floor(offset);
  const frac = offset - baseIndex;

  const wheelItems = Array.from({ length: VISIBLE_SLOTS }, (_, i) => {
    const slot = i - CENTER_SLOT;
    const modelIdx =
      (((baseIndex + slot) % models.length) + models.length) % models.length;
    const distFromCenter = Math.abs(slot - frac);

    return {
      model: models[modelIdx],
      y: (slot - frac) * ITEM_HEIGHT,
      dist: distFromCenter,
      scale: Math.max(0.82, 1 - distFromCenter * 0.065),
      opacity: Math.max(0.15, 1 - distFromCenter * 0.3),
    };
  });

  return (
    <>
      <section className="py-24 bg-slate-50 dark:bg-dark-base/95 border-t border-slate-100 dark:border-dark-border" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 md:text-center max-w-3xl mx-auto">
            <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Everything your team needs to ship <span className="text-slate-800 dark:text-slate-100">real work.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Thytus is a <span className="font-bold text-slate-800 dark:text-slate-200">shared workspace for humans and AI</span>, not another chat box.
              Upload knowledge once, plug in your preferred models, and let agents research, analyze, and produce assets your teams can actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Feature 1: Grounded Knowledge */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  database
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Grounded Knowledge
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Centralize your documents, recordings, and links in one place.
                Agents reference the same trusted sources as your team—so answers stay consistent, auditable, and aligned with how your business actually works.
              </p>
            </div>

            {/* Feature 2: Visual Intelligence */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  visibility
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Visual Intelligence
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Give any model a vision layer. Thytus lets agents interpret decks, screenshots, and long-form video so insights aren&apos;t trapped in files your tools can&apos;t read today.
              </p>
            </div>

            {/* Feature 3: No Delay */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                No Delay
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Every change—human or AI—shows up in real time. See edits, comments, and agent updates as they happen so projects never stall waiting on the latest version.
              </p>
            </div>

            {/* Feature 4: Media Generation */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  image
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Media Generation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Let agents go from brief to output: decks, images, video clips, summaries, and more.
                Keep everything in the same workspace where it was planned and reviewed.
              </p>
            </div>

            {/* Feature 5: Model Agnostic */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Model Agnostic
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Mix open-source and premium models in the same workspace.
                Standardize workflows while still choosing the best model for each job, from fast drafting to high stakes analysis.
              </p>
            </div>

            {/* Feature 6: Deep Research */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  science
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Deep Research
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Spin up agents that read across sources, compare perspectives, and produce structured findings, not just long answers.
                Perfect for market landscapes, technical evaluations, or board ready briefs.
              </p>
            </div>

            {/* Feature 7: Email & Messaging */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Email & Messaging
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Agents send emails and message clients or other team members outside the workspace. Drafts, follow-ups, handoffs, and updates stay in context so you can track what was sent and where.
              </p>
            </div>

            {/* Feature 8: Social media post */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">share</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Social media post
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Agents create and publish social posts from the workspace. Draft copy, schedule, and maintain a consistent voice across channels without switching tools.
              </p>
            </div>

            {/* Feature 9: Calling */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Calling
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                AI can make calls to your team and other people from the workspace. Schedule check-ins, run standups, or reach out to clients—all with full context and a record of what was discussed.
              </p>
            </div>
          </div>

          {/* Multi-Agent Collaboration Section (moved above Context Tracking) */}
          <div className="mb-24 rounded-3xl bg-white/80 dark:bg-dark-card/90 border border-gray-200/70 dark:border-dark-border p-10 md:p-14" id="agent-collaboration">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
                  Multi-Agent Collaboration
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
                  Agents that coordinate like a real team.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                  Spin up multiple agents in a single workspace and let them share context, hand off work, and check each other&apos;s outputs while your team stays in control. Agents can talk to each other directly, discussing options, debating tradeoffs, and proposing next steps before your team decides what to ship.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">forum</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Shared context</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Agents pull from the same workspace history and knowledge, so each new task starts from what the others already know.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">diversity_3</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Specialized roles</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Assign agents to research, writing, analysis, or QA so complex projects move forward in parallel without losing quality.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">account_tree</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Parallel execution</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Let agents tackle different parts of a workflow at the same time while your team reviews and approves the final outputs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual (spinning circle, light cards, transparent center) */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320" fill="none">
                    <line x1="160" y1="60" x2="60" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.4" className="text-slate-300 dark:text-slate-600" />
                    <line x1="160" y1="60" x2="260" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.4" className="text-slate-300 dark:text-slate-600" />
                    <line x1="60" y1="220" x2="260" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.4" className="text-slate-300 dark:text-slate-600" />
                  </svg>

                  <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-600 shadow-lg shadow-slate-200/60 dark:shadow-black/40 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-2xl">smart_toy</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Researcher</span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-2 animate-float" style={{ animationDelay: "1.3s" }}>
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-600 shadow-lg shadow-slate-200/60 dark:shadow-black/40 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-2xl">edit_note</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Writer</span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-2 animate-float" style={{ animationDelay: "2.6s" }}>
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-600 shadow-lg shadow-slate-200/60 dark:shadow-black/40 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-2xl">analytics</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Analyst</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl animate-spin" style={{ animationDuration: "8s" }}>autorenew</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Context Tracking Section */}
          <div className="mb-24 rounded-3xl bg-white/90 dark:bg-dark-card border border-gray-200/70 dark:border-dark-border p-10 md:p-14" id="context-tracking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
                  Context Updates
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
                  Keep agents aligned with what changed.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                  When priorities, scope, or requirements shift, simply update the agent(s) instead of starting a new thread so every agent and teammate sees the latest direction.
                </p>
                <div className="space-y-4">
                  {contextTrackingPoints.map((item) => (
                      <div key={item.heading} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">psychology</span>
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-slate-900 dark:text-white">{item.heading}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{item.text}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl bg-slate-50 dark:bg-dark-elevated border border-slate-100 dark:border-dark-border p-6 md:p-8">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-dark-card flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-xl">chat</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">You</div>
                        <div className="text-sm text-slate-700 dark:text-slate-200 mt-0.5">Update the scope: focus on EMEA only.</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-2xl">arrow_downward</span>
                    </div>
                    <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 px-4 py-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg">track_changes</span>
                      <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Context updated</span>
                    </div>
                    <div className="flex justify-center">
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-2xl">arrow_downward</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-dark-card flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-xl">smart_toy</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Agent</div>
                        <div className="text-sm text-slate-700 dark:text-slate-200 mt-0.5">Sees latest direction and continues with EMEA focus.</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-5">
                    Same thread, updated context — no new conversation needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Carousel Section */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-dark-card p-10 md:p-14 overflow-hidden relative" id="model-agnostic">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 mb-3 block uppercase tracking-[0.25em]">
                  Model Agnostic Intelligence
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
                  One workspace, any model.
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  Connect OpenAI, Anthropic, Google, open source, and more into a single environment.
                  Swap models per task, keep outputs in one place, and standardize how AI work gets done.
                </p>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                  Your team focuses on quality and governance, not which tab a particular model lives in.
                </p>
                <Link
                  href="https://showcase.thytus.com/v1/sessions"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                >
                  Explore supported models
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </Link>
              </div>

              <div className="relative" style={{ height: ITEM_HEIGHT * 5 }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {wheelItems.map((item, i) => {
                    const isCenter = item.dist < 0.5;
                    return (
                      <div
                        key={`${item.model.name}-${i}`}
                        className="absolute left-0 right-0 px-1"
                        style={{
                          transform: `translateY(${item.y}px) scale(${item.scale})`,
                          opacity: item.opacity,
                          zIndex: isCenter ? 20 : 10 - Math.round(item.dist),
                          willChange: "transform, opacity",
                        }}
                      >
                        <div
                          className={`rounded-xl p-4 flex items-center justify-between backdrop-blur-sm transition-shadow duration-300 ${
                            isCenter
                              ? "bg-white shadow-[0_0_30px_rgba(15,23,42,0.18)] border border-slate-200 dark:bg-slate-900 dark:border-sky-400/40"
                              : "bg-slate-50 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-700/60"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 ${
                                isCenter
                                  ? "bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-200"
                                  : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {item.model.name.substring(0, 2)}
                            </div>
                            <div>
                              <div
                                className={`font-semibold transition-colors duration-300 ${
                                  isCenter ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-200/80"
                                }`}
                              >
                                {item.model.name}
                              </div>
                              <div
                                className={`text-[11px] transition-colors duration-300 ${
                                  isCenter ? "text-slate-500 dark:text-slate-300" : "text-slate-500 dark:text-slate-500"
                                }`}
                              >
                                {item.model.provider}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              isCenter
                                ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.75)]"
                                : "bg-emerald-400/70 shadow-none"
                            }`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent pointer-events-none z-30"></div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent pointer-events-none z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModelsModal isOpen={modelsOpen} onClose={() => setModelsOpen(false)} />
    </>
  );
}
