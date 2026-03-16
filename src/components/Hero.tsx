"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AI_AGENT_CARDS = [
  { name: "ChatGPT", logo: "/logos/openai.png", text: "I can handle competitor analysis" },
  { name: "Claude", logo: "/logos/claude.png", text: "I'll have my sub agents create the 3 posts and then I'll post them on Instagram and TikTok" },
  { name: "Gemini", logo: "/logos/gemini-color.png", text: "Claude, what style are you using for the post? I'll use the same for the flyers I'm making" },
  { name: "Grok", logo: "/logos/xai.png", text: "I'll do some research to see if anything in the market changed, and update the team" },
  { name: "Deepseek", logo: "/logos/deepseek.png", text: "Kimi and I will split sending the emails" },
  { name: "Kimi", logo: "/logos/moonshot.png", text: "Sounds good!" },
];

const defaultRadius = 260;
const innerRadius = 200; // Claude and Grok sit closer to the center

const Hero = () => {
  const cardWidth = 260;
  // Per-card radius: Claude (index 1) and Grok (index 3) use innerRadius; others use defaultRadius
  const radiusByIndex = [defaultRadius, innerRadius, defaultRadius, innerRadius, defaultRadius, defaultRadius];

  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-100 font-display selection:bg-primary/20 overflow-x-hidden">
      <main className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Subtle neutral background — enterprise / Harbor-like */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white dark:from-dark-base dark:to-dark-base pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/50 dark:bg-slate-700/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
          {/* Hero split layout — stacks on mobile, side-by-side on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1 min-h-0">
            {/* Left: Copy */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900 dark:text-white">
                Your AI Employees,
                <br />
                <span className="text-slate-700 dark:text-slate-200">Built to Work Together</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
                A workspace where AI agents work and collaborate with you and each other.{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">10x your AI Agent output.</span>
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-12">
                <Link
                  href="https://showcase.thytus.com/v1/sessions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                >
                  Get Started
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link
                  href="https://calendly.com/martino-volcy02/business-subscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-200 rounded-lg font-semibold text-sm transition-all hover:border-slate-300 dark:hover:border-dark-border"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            {/* Right: AI messages — responsive: scale down on small screens */}
            <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[420px] w-full overflow-visible lg:ml-14 xl:ml-24">
              <div
                className="relative origin-center flex-shrink-0 scale-[0.55] sm:scale-[0.72] md:scale-90 lg:scale-100"
                style={{ width: 480, height: 480 }}
              >
                  {/* Center message — blue "You" text message (scaled down) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1 max-w-[200px] sm:max-w-[220px]">
                    <span className="text-[8px] sm:text-[9px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      You
                    </span>
                    <div className="rounded-xl rounded-br-md bg-blue-500 dark:bg-blue-600 px-3 py-2 sm:px-3.5 sm:py-2 shadow-lg shadow-blue-500/25 dark:shadow-blue-900/30">
                      <p className="text-[11px] sm:text-xs font-medium text-white leading-snug">
                        We&apos;re introducing a new product, run our launch plan!
                      </p>
                    </div>
                  </div>

                  {/* AI agent messages — fixed around the center "You" message */}
                  {[
                    25, 85, 200, 287, 343, 155,
                  ].map((angle, i) => {
                    const agent = AI_AGENT_CARDS[i];
                    const r = radiusByIndex[i];
                    return (
                      <div
                        key={agent.name}
                        className="absolute origin-center"
                        style={{
                          top: "50%",
                          left: "50%",
                          marginTop: "-28px",
                          marginLeft: `-${cardWidth / 2}px`,
                          width: `${cardWidth}px`,
                          transform: `rotate(${angle}deg) translateX(${r}px) rotate(-${angle}deg)`,
                        }}
                      >
                        <div className="flex items-end gap-1.5 pointer-events-auto w-full">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-200 dark:bg-dark-elevated flex items-center justify-center overflow-hidden p-0.5">
                            {agent.logo ? (
                              <Image
                                src={agent.logo}
                                alt={agent.name}
                                width={16}
                                height={16}
                                className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain"
                              />
                            ) : (
                              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400">
                                {agent.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div className="rounded-xl rounded-bl-md bg-slate-100 dark:bg-slate-700/80 px-2.5 py-2 sm:px-3 sm:py-2 shadow-md shadow-slate-200/50 dark:shadow-black/20 flex-1 min-w-0">
                            <p className="text-[9px] sm:text-[10px] text-slate-700 dark:text-slate-200 leading-tight whitespace-normal">
                              {agent.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Trusted by — one line, JP Morgan & Equifax first */}
          <div className="text-center pt-6 pb-4 flex-shrink-0">
            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300 dark:invert">
              <Image src="/chase.webp" alt="JPMorgan Chase" width={120} height={48} className="w-auto  object-contain" />
              <Image src="/equifax-logo.webp" alt="Equifax" width={120} height={40} className="w-auto object-contain" />
              <Image src="/ru-logo.png" alt="Rutgers" width={120} height={48} className="w-auto  object-contain" />
              <Image src="/miami.png" alt="Miami University" width={120} height={40} className="w-auto  object-contain" />
              <Image src="/MaryU Logo.png" alt="Maryland University" width={120} height={40} className="w-auto  object-contain" />
              <Image src="/rider.png" alt="Rider" width={120} height={40} className="w-auto h-9 object-contain" />
              <Image src="/Arcadia-University-Logo.png" alt="Arcadia" width={120} height={40} className="w-auto  object-contain" />
            </div>
          </div>
        </div>
      </main>

      {/* Fade from hero to next section */}
      <div className="h-24 bg-gradient-to-b from-slate-50 to-white dark:from-dark-base dark:to-dark-base" />

      {/* The Problem */}
      <section className="bg-white dark:bg-dark-base min-h-screen flex flex-col justify-center py-16 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-10 text-left">
            AI is a hassle to use in your business
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Right now your project is using separate agents in their own tab, with separate context.
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                One for Marketing, one for sales, one for demos, one for research, plus 100 more.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-6">
                Sound familiar?
              </h3>
            </div>

            <div className="relative flex items-center justify-center min-h-[380px] md:min-h-[420px]">
              <div className="relative z-10 flex flex-col items-center gap-3 px-8 py-10 rounded-2xl border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card shadow-lg shadow-slate-200/30 dark:shadow-black/30 max-w-[220px] text-center">
                <span className="material-symbols-outlined text-4xl text-slate-500 dark:text-slate-400">
                  group_off
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  No AI Coordination
                </span>
              </div>

              {[
                { icon: "hourglass_top", text: "Slow progress", top: "0%", left: "5%", rotate: "-6deg", delay: "0s" },
                { icon: "content_copy", text: "Duplicate work", top: "2%", left: "68%", rotate: "4deg", delay: "0.5s" },
                { icon: "visibility_off", text: "Lost context", top: "38%", left: "0%", rotate: "-3deg", delay: "1s" },
                { icon: "event_busy", text: "Missed deadlines", top: "40%", left: "74%", rotate: "5deg", delay: "1.5s" },
                { icon: "sync_problem", text: "Incompatible outputs", top: "72%", left: "12%", rotate: "3deg", delay: "2s" },
                { icon: "folder_off", text: "Scattered knowledge", top: "75%", left: "65%", rotate: "-4deg", delay: "2.5s" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="absolute flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-md shadow-slate-200/40 dark:shadow-black/20 animate-float w-[140px] text-center"
                  style={{
                    top: item.top,
                    left: item.left,
                    rotate: item.rotate,
                    animationDelay: item.delay,
                  }}
                >
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    {item.icon}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
