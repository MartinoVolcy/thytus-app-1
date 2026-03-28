"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const moreLinkClass =
  "text-[10px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 uppercase tracking-wider transition-colors";

const FLOW_GRID_ITEMS = [
  { icon: "call", src: null, title: "Calls" },
  { icon: "slideshow", src: null, title: "Slides" },
  { icon: "table_chart", src: null, title: "Spreadsheets" },
  { icon: "edit_document", src: null, title: "Docs" },
  { icon: "code", src: null, title: "Code" },
  { icon: "mail", src: "/logos/gmail.png", title: "Email" },
  { icon: "photo_camera", src: "/logos/instagram.png", title: "Instagram" },
  { icon: "videocam", src: "/logos/tiktok.png", title: "Tiktok" },
  { icon: "image", src: null, title: "AI Images" },
  { icon: "videocam", src: null, title: "AI Videos" },
  { icon: "chat", src: "/logos/whatsapp.png", title: "Whats App" },
  { icon: "chat_bubble", src: "/logos/messenger.png", title: "Messenger" },
  { icon: "groups", src: "/logos/teams.png", title: "Microsoft Teams" },
  { icon: "chat", src: "/logos/slack.png", title: "Slack" },
  { icon: "podcasts", src: null, title: "AI Podcast" },
  { icon: "calendar_today", src: "/logos/calendar.png", title: "Calendar" },
  { icon: "folder", src: "/logos/google-drive.png", title: "Google drive" },
  { icon: "folder", src: "/logos/dropbox.png", title: "Dropbox" },
  { icon: "code", src: '/logos/github.png', title: "Github" },
  { icon: "description", src: "/logos/notion.png", title: "Notion" },
  { icon: "send", src: "/logos/telegram.png", title: "Telegram" },
];

export default function Showcase() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    const pickRandom = () => setHighlightedIndex(Math.floor(Math.random() * FLOW_GRID_ITEMS.length));
    pickRandom();
    const id = setInterval(pickRandom, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="min-h-screen py-16 md:py-24 relative bg-slate-50 dark:bg-dark-base border-t border-slate-100 dark:border-dark-border" id="showcase">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-screen">
        <div className="text-left mb-10 md:mb-14">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Your Team. Your Agents. <span className="text-slate-700 dark:text-slate-200">One workspace.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            One place where your team and your AI agents work together. Connect the tools you already use, such as search, docs, slides, email, chat, calendar, and more, so everyone and every agent stays in sync.
          </p>
        </div>

        {/* One workspace: team + agents working together */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central "One workspace" card with Team and Agents inside, working together */}
          <div className="rounded-2xl border-2 border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-xl shadow-slate-200/30 dark:shadow-black/30 overflow-hidden">
            <div className="px-5 py-3 bg-slate-50 dark:bg-dark-elevated border-b border-slate-100 dark:border-dark-border">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">One workspace</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-dark-elevated border border-slate-100 dark:border-dark-border px-5 py-3.5">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-dark-card flex items-center justify-center overflow-hidden p-1">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-2xl">group</span>
                </div>
                <span className="text-base md:text-lg font-medium text-slate-900 dark:text-white">Your team</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <span className="material-symbols-outlined text-2xl">sync_alt</span>
                <span className="text-xs font-medium uppercase tracking-widest">working together</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-dark-elevated border border-slate-100 dark:border-dark-border px-5 py-3.5">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-card flex items-center justify-center overflow-hidden p-1">
                    <Image src="/logos/openai.png" alt="" width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-card flex items-center justify-center overflow-hidden p-1">
                    <Image src="/logos/claude.png" alt="" width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-card flex items-center justify-center overflow-hidden p-1">
                    <Image src="/logos/gemini-color.png" alt="" width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                </div>
                <span className="text-base md:text-lg font-medium text-slate-900 dark:text-white">Your AI agents</span>
              </div>
            </div>
          </div>

          {/* Connector to tools grid */}
          <div className="flex justify-center mt-6">
            <div className="w-px h-10 border-l border-dashed border-slate-300 dark:border-slate-600" />
          </div>

          {/* Tools grid - Logo/icon + title cards, random highlight every 3s */}
          <div className="mt-10 md:mt-12">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 md:gap-5 lg:gap-6">
            {FLOW_GRID_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl border p-3 flex flex-col items-center justify-center gap-2 min-h-[88px] md:min-h-[96px] transition-all duration-300 ${
                  highlightedIndex === i
                    ? "border-slate-400 dark:border-slate-500 bg-slate-100 dark:bg-slate-700/60 shadow-lg shadow-slate-300/30 dark:shadow-slate-500/20 ring-2 ring-slate-300/50 dark:ring-slate-500/30"
                    : "border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-md shadow-slate-200/20 dark:shadow-black/20"
                }`}
              >
                <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center overflow-hidden p-1">
                  {item.src ? (
                    <Image src={item.src} alt="" width={24} height={24} className="w-6 h-6 object-contain" />
                  ) : (
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-xl md:text-2xl">
                      {item.icon}
                    </span>
                  )}
                </div>
                <span className="text-[10px] md:text-xs font-medium text-slate-700 dark:text-slate-200 text-center leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
            </div>
            <div className="flex justify-center mt-6 md:mt-8">
              <Link href="/features" className={moreLinkClass}>
                + more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Built for Teams — enterprise styling */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
        <div className="rounded-3xl border border-slate-100 dark:border-dark-border bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm px-8 sm:px-10 md:px-12 py-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
                Built for Teams
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white mb-5 md:mb-6 tracking-tight">
                Collaboration your whole company can trust.
              </h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 md:mb-8 max-w-xl">
                Thytus gives every function a shared workspace where humans and AI stay in sync.
                Keep discussions structured, decisions documented, and work moving forward without losing control of the conversation.
              </p>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                From leadership reviews to daily standups, your team sees the same context, the same history, and the same outputs so aligning around what happens next is effortless.
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-dark-border bg-slate-50/80 dark:bg-dark-elevated dark-glow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    alternate_email
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Human first conversations
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Use @mentions and reactions to bring the right people in, while agents stay in the background until you need them.
                  Keep human discussion readable and separate from automated activity.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 dark:border-dark-border bg-slate-50/80 dark:bg-dark-elevated dark-glow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    poll
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Decisions with a clear record
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Run quick polls for approvals or prioritization, and keep outcomes tied to the full conversation and AI outputs for future reference.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 dark:border-dark-border bg-slate-50/80 dark:bg-dark-elevated dark-glow">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    forum
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Threads that mirror how teams work
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Use reply threads to keep side discussions organized—so status updates, escalations, and deep dives each have a clean place to live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
