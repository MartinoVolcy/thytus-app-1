"use client";

import { useState, useEffect, useRef } from "react";
import ModelsModal from "./ModelsModal";

const models = [
  { name: "GPT-4o", provider: "OpenAI", color: "bg-green-100 text-green-700" },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google",
    color: "bg-blue-100 text-blue-700",
  },
  { name: "Llama 3", provider: "Meta", color: "bg-blue-100 text-blue-600" },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    color: "bg-yellow-100 text-yellow-700",
  },
  { name: "Grok-1.5", provider: "xAI", color: "bg-slate-100 text-slate-700" },
  {
    name: "Perplexity Sonar",
    provider: "Perplexity",
    color: "bg-teal-100 text-teal-700",
  },
  { name: "Command R+", provider: "Cohere", color: "bg-red-100 text-red-700" },
];

const workspaceTools = [
  {
    icon: "folder_open",
    title: "File Window",
    subtitle: "File Management",
    color: "bg-sky-100/60 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400",
    content: [
      { heading: "Drag & Drop Uploads", text: "Click to browse or drag files directly into the window. Supports PDFs, documents, spreadsheets, images, video, audio, and code files." },
      { heading: "Instant Session Sharing", text: "Every file you upload is immediately visible to all participants and AI agents in the session \u2014 no separate sharing step required." },
      { heading: "Persistent Knowledge Base", text: "Uploaded files are automatically saved to your Knowledge Base, so you can reference them across future sessions without re-uploading." },
    ],
  },
  {
    icon: "edit_document",
    title: "Text Editor",
    subtitle: "Collaborative Writing",
    color: "bg-purple-100/50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400",
    content: [
      { heading: "Real-Time Co-Authoring", text: "Write alongside teammates and AI agents simultaneously. Every edit appears instantly \u2014 no version conflicts, no waiting." },
      { heading: "AI-Assisted Drafting", text: "Let agents draft, expand, summarize, or rewrite sections on demand while you focus on the bigger picture." },
      { heading: "Rich Formatting", text: "Full support for headings, lists, tables, and embedded media so your documents are presentation-ready without leaving the workspace." },
    ],
  },
  {
    icon: "table_chart",
    title: "Spreadsheets",
    subtitle: "Data & Analysis",
    color: "bg-green-100/50 dark:bg-green-500/15 text-green-600 dark:text-green-400",
    content: [
      { heading: "Live Data Editing", text: "Create and manipulate spreadsheets directly in the session. Organize data, apply formulas, and sort columns in real time." },
      { heading: "AI-Powered Analysis", text: "Ask an agent to analyze trends, generate pivot summaries, or clean messy datasets \u2014 results appear right in the sheet." },
      { heading: "Import & Export", text: "Bring in existing CSV or Excel files and export finished spreadsheets to share with stakeholders outside the workspace." },
    ],
  },
  {
    icon: "slideshow",
    title: "Slides",
    subtitle: "Presentations",
    color: "bg-orange-100/50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400",
    content: [
      { heading: "Slide Creation & Editing", text: "Build polished slide decks directly in the workspace. Add text, images, charts, and layouts without switching to another app." },
      { heading: "AI-Generated Decks", text: "Give an agent a topic or outline and it will generate a full presentation draft \u2014 complete with structure, talking points, and visuals." },
      { heading: "Team Collaboration", text: "Multiple people can review, comment on, and refine slides at the same time, keeping everyone aligned before the final presentation." },
    ],
  },
  {
    icon: "code",
    title: "Code Editor",
    subtitle: "Development Tools",
    color: "bg-cyan-100/50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    content: [
      { heading: "Syntax-Highlighted Editing", text: "Write and edit code with full syntax highlighting, auto-indentation, and language detection for dozens of programming languages." },
      { heading: "AI Pair Programming", text: "Get real-time suggestions, have agents write boilerplate, debug errors, or refactor functions \u2014 all within the same session." },
      { heading: "Inline Code Review", text: "Share code with teammates and agents for instant feedback. Review diffs, suggest changes, and iterate without leaving the workspace." },
    ],
  },
  {
    icon: "psychology",
    title: "Context Tracking",
    subtitle: "Guide Your AI Assistant",
    color: "bg-pink-100/50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400",
    content: [
      { heading: "Re-Focus the Agent", text: "When an agent drifts off-task, open Context Tracking to review the full conversation and send a correction that steers it back to the original goal." },
      { heading: "Mid-Task Updates", text: "Requirements changed? Send fresh instructions directly through Context Tracking so the agent adjusts course without starting over." },
      { heading: "Conversation Memory", text: "Think of it as a direct line to the agent\u2019s memory. Use it whenever responses feel off-topic or your priorities shift and the agent needs to know immediately." },
    ],
  },
];

const VISIBLE_SLOTS = 7;
const CENTER_SLOT = Math.floor(VISIBLE_SLOTS / 2);
const ITEM_HEIGHT = 75;
const SCROLL_SPEED = 0.5;

export default function Features() {
  const [offset, setOffset] = useState(0);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [openTool, setOpenTool] = useState<number | null>(null);
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
      <section className="py-24 bg-white dark:bg-dark-base" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Everything you need to build <span className="text-gradient">complex outputs.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Thytus isn&apos;t just a chatbot. It&apos;s a <span className="font-bold text-slate-700 dark:text-slate-200">full-stack workspace</span> equipped
              with the tools AI needs to do real work — from reading entire
              knowledge bases to generating visual reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Feature 1: Grounded Knowledge */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-sky-100/60 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  database
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Grounded Knowledge
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Upload once, use everywhere. Your files persist across sessions
                without re-uploading. Support for PDFs, Docs, Spreadsheets,
                Images, Videos, Audio, Websites, and Code.
              </p>
            </div>

            {/* Feature 2: Visual Intelligence */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-purple-100/50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  visibility
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Visual Intelligence
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Thytus provides the vision layer. Even if a model (like Llama or
                GPT-5) doesn't natively support video input, our workspace
                enables them to "watch" and analyze your video files instantly.
              </p>
            </div>

            {/* Feature 3: No Delay */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-green-100/50 dark:bg-green-500/15 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                No Delay
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Everything is real-time. Whether you, a teammate, or an AI agent
                sends a message or edits a document, everyone sees it
                immediately. Zero lag, zero refreshing. Just seamless
                synchronization.
              </p>
            </div>

            {/* Feature 4: Media Generation */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-orange-100/50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  image
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Media Generation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Generate visuals using models like Nano Banana Pro and Wan 2.5.
                Have agents automatically create images, videos, and even full
                podcasts and audio clips.
              </p>
            </div>

            {/* Feature 5: Model Agnostic */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-pink-100/50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Model Agnostic
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Enjoy unlimited messages and use powerful Open Source models or
                tap into the bleeding edge. Supported premium models include o1
                Pro, Claude Opus 4.5, GPT 5.2 Pro, and Perplexity Sonar Pro.
              </p>
            </div>

            {/* Feature 6: Deep Research */}
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-sky-500/5 transition-all duration-300 group dark-glow">
              <div className="w-12 h-12 rounded-xl bg-cyan-100/50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  science
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white">
                Deep Research
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Thytus agents have instant access to millions of academic papers
                and can scour the entire internet to find exactly what you need.
              </p>
            </div>
          </div>

          {/* Agent Collaboration Section */}
          <div className="mb-24 rounded-3xl bg-gradient-to-br from-gray-50 via-white to-white dark:from-dark-card dark:via-dark-surface dark:to-dark-base border border-gray-200/60 dark:border-dark-border p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/[0.06] dark:bg-sky-500/[0.06] rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-200/20 dark:bg-primary/[0.05] rounded-full blur-[80px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
                  Multi-Agent Collaboration
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                  Your agents don&apos;t just work. <span className="text-gradient-purple">They work together.</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  In Thytus, AI agents aren&apos;t isolated. They <span className="font-bold text-slate-700 dark:text-slate-200">share context, exchange findings, and build on each other&apos;s work</span> within the same session. A research agent can hand off its discoveries to a writing agent, while an analyst cross-checks the data — all autonomously, all in real time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-lg">forum</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Cross-Agent Communication</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Agents talk to each other within your session, sharing insights and coordinating tasks without any manual handoffs.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-lg">diversity_3</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Collective Intelligence</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Multiple agents means multiple perspectives. They debate, verify, and refine each other&apos;s outputs for dramatically more accurate results.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-lg">account_tree</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Parallel Task Execution</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Split complex projects across agents that work simultaneously — research, draft, review, and publish all happening at once.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <line x1="160" y1="60" x2="60" y2="220" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.3" />
                    <line x1="160" y1="60" x2="260" y2="220" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.3" />
                    <line x1="60" y1="220" x2="260" y2="220" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.3" />
                  </svg>

                  {/* Agent 1 */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border-2 border-sky-200 dark:border-sky-500/30 shadow-xl shadow-sky-200/20 dark:shadow-sky-500/10 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Researcher</span>
                    </div>
                  </div>

                  {/* Agent 2 */}
                  <div className="absolute bottom-8 left-2 animate-float" style={{ animationDelay: "1.3s" }}>
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border-2 border-purple-200 dark:border-purple-500/30 shadow-xl shadow-purple-500/10 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-2xl">edit_note</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Writer</span>
                    </div>
                  </div>

                  {/* Agent 3 */}
                  <div className="absolute bottom-8 right-2 animate-float" style={{ animationDelay: "2.6s" }}>
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-card border-2 border-emerald-200 dark:border-emerald-500/30 shadow-xl shadow-emerald-500/10 flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl">analytics</span>
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1">Analyst</span>
                    </div>
                  </div>

                  {/* Center sync indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl animate-spin" style={{ animationDuration: "8s" }}>sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workspace Tools Section */}
          <div className="mb-24">
            <div className="md:text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
                Workspace Tools
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                What's inside <span className="text-gradient-blue">your workspace?</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                From file management to live code editing, every tool your team needs is built right into the session.
              </p>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {workspaceTools.map((tool, i) => {
                const isOpen = openTool === i;
                return (
                  <div
                    key={tool.title}
                    className={`rounded-2xl border bg-white dark:bg-dark-card dark-glow transition-[border-color,box-shadow] duration-200 ${
                      isOpen
                        ? "border-primary/30 shadow-lg shadow-primary/5 dark:shadow-primary/10"
                        : "border-gray-100 dark:border-dark-border hover:border-gray-200 dark:hover:border-dark-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpenTool(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-xl ${tool.color} flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-xl">
                          {tool.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-extrabold text-slate-900 dark:text-white">
                          {tool.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {tool.subtitle}
                        </div>
                      </div>
                      <span
                        className={`material-symbols-outlined text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-1 space-y-4">
                          {tool.content.map((item) => (
                            <div key={item.heading} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">
                                  {item.heading}
                                </div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                  {item.text}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Model Carousel Section */}
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 overflow-hidden relative">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-sm font-extrabold text-primary mb-3 block uppercase tracking-widest">
                  Model Agnostic Intelligence
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Make any model <span className="text-gradient">your agent.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Why limit yourself to one provider? Thytus gives you instant
                  access to the world's most powerful AI models. Switch between
                  them instantly or deploy them simultaneously in the same
                  workflow.
                </p>
                <button
                  onClick={() => setModelsOpen(true)}
                  className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors"
                >
                  Explore All Models
                </button>
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
                              ? "bg-white/[0.12] border border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.35),0_8px_24px_rgba(0,0,0,0.4)]"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 ${
                                item.model.color
                              } ${isCenter ? "scale-110" : ""}`}
                            >
                              {item.model.name.substring(0, 2)}
                            </div>
                            <div>
                              <div
                                className={`font-bold transition-colors duration-300 ${
                                  isCenter ? "text-white" : "text-white/70"
                                }`}
                              >
                                {item.model.name}
                              </div>
                              <div
                                className={`text-xs transition-colors duration-300 ${
                                  isCenter ? "text-slate-300" : "text-slate-500"
                                }`}
                              >
                                {item.model.provider}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              isCenter
                                ? "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                : "bg-green-500/50 shadow-none"
                            }`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-30"></div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModelsModal isOpen={modelsOpen} onClose={() => setModelsOpen(false)} />
    </>
  );
}
