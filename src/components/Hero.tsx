"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const orbitTools = [
  { icon: "description", ring: "inner", angle: 0, label: "Documents", desc: "Upload and analyze PDFs, docs, and spreadsheets across sessions" },
  { icon: "visibility", ring: "inner", angle: 72, label: "Vision", desc: "Let any model see, watch, and understand images and video" },
  { icon: "image", ring: "inner", angle: 144, label: "Image Creator", desc: "Generate stunning visuals and graphics with AI models" },
  { icon: "chat", ring: "inner", angle: 216, label: "Chat", desc: "Collaborate in real-time with teammates and AI agents" },
  { icon: "code", ring: "inner", angle: 288, label: "Code Editor", desc: "Write, edit, and debug code with AI-powered assistance" },
  { icon: "mic", ring: "outer", angle: 30, label: "Podcasts", desc: "Create AI-generated podcasts and audio content from any source" },
  { icon: "auto_awesome", ring: "outer", angle: 120, label: "AI Agents", desc: "Deploy autonomous agents to research, write, and build for you" },
  { icon: "bar_chart", ring: "outer", angle: 210, label: "Analytics", desc: "Generate reports, charts, and data insights in seconds" },
  { icon: "photo_library", ring: "outer", angle: 300, label: "Gallery", desc: "Browse and manage all AI-generated media in one place" },
];

const Hero = () => {
  const [activeAgents, setActiveAgents] = useState("10,000");
  const [isExpanded, setIsExpanded] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [labelVisible, setLabelVisible] = useState(false);
  const cycleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const min = 10000;
    const max = 1000000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setActiveAgents(randomNum.toLocaleString());
  }, []);

  const pickRandom = useCallback((excludeIndex: number) => {
    let next = excludeIndex;
    while (next === excludeIndex) {
      next = Math.floor(Math.random() * orbitTools.length);
    }
    return next;
  }, []);

  useEffect(() => {
    if (isExpanded && hoveredIndex === null) {
      setFeaturedIndex(pickRandom(featuredIndex));
      setLabelVisible(true);

      cycleRef.current = setInterval(() => {
        setLabelVisible(false);
        setTimeout(() => {
          setFeaturedIndex((prev) => pickRandom(prev));
          setLabelVisible(true);
        }, 300);
      }, 3000);
    } else if (!isExpanded) {
      setLabelVisible(false);
      setHoveredIndex(null);
      if (cycleRef.current) clearInterval(cycleRef.current);
    } else if (hoveredIndex !== null) {
      if (cycleRef.current) clearInterval(cycleRef.current);
      setLabelVisible(true);
    }

    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded, hoveredIndex, pickRandom]);

  const displayIndex = hoveredIndex ?? featuredIndex;

  const innerRadius = isExpanded ? 130 : 0;
  const outerRadius = isExpanded ? 200 : 0;
  const iconScale = isExpanded ? 1 : 0.5;
  const iconOpacity = isExpanded ? 1 : 0;

  return (
    <div className="bg-sky-50 dark:bg-dark-base text-slate-900 dark:text-slate-100 font-display selection:bg-primary/20 overflow-x-hidden">
      <main className="relative pt-32 pb-16 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sky-200/30 dark:bg-sky-500/[0.06] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-sky-300/20 dark:bg-primary/[0.05] rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span suppressHydrationWarning>
                  {activeAgents} Agents Currently Running
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 text-slate-900 dark:text-white">
                Where Human Ingenuity Meets{" "}
                <span className="text-gradient">Autonomous Precision</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
                The first workspace where <span className="font-bold text-slate-700 dark:text-slate-200">AI agents collaborate with your team</span> in real-time. Boost your output by <span className="font-bold text-primary">10x</span> with autonomous workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link
                  href="https://showcase.thytus.com/v1/auth/signin"
                  className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-[15px] transition-all shadow-lg shadow-primary/25 dark:shadow-primary/40 flex items-center gap-2"
                >
                  Get Started for Free
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Orbiting tools */}
            <div className="relative flex items-center justify-center">
              <div
                className="relative w-[420px] h-[420px] md:w-[480px] md:h-[480px] cursor-pointer"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
              >
                {/* Orbit ring traces */}
                <div
                  className="absolute rounded-full border border-sky-200/60 dark:border-sky-400/15 transition-all duration-700 ease-out"
                  style={{
                    inset: isExpanded ? "60px" : "calc(50% - 64px)",
                  }}
                ></div>
                <div
                  className="absolute rounded-full border border-sky-100/40 dark:border-sky-400/10 transition-all duration-700 ease-out"
                  style={{
                    inset: isExpanded ? "0px" : "calc(50% - 64px)",
                  }}
                ></div>

                {/* Center logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 dark:shadow-primary/50 transition-shadow duration-500">
                    <div className="text-center">
                      <Image
                        src="/Thytus_Logo.png"
                        alt="Thytus"
                        width={40}
                        height={40}
                        className="mx-auto mb-1 brightness-0 invert"
                      />
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                        Thytus
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inner orbit */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    animation: isExpanded
                      ? "orbit 30s linear infinite"
                      : "none",
                  }}
                >
                  {orbitTools
                    .filter((t) => t.ring === "inner")
                    .map((tool) => {
                      const idx = orbitTools.indexOf(tool);
                      return (
                        <div
                          key={tool.icon}
                          className="absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            marginTop: "-24px",
                            marginLeft: "-24px",
                            transform: `rotate(${tool.angle}deg) translateX(${innerRadius}px) rotate(-${tool.angle}deg)`,
                            transition:
                              "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          }}
                        >
                          <div
                            className={`w-12 h-12 rounded-2xl bg-white dark:bg-dark-card border shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto ${hoveredIndex === idx ? "border-primary shadow-primary/30 scale-110" : "border-sky-200 dark:border-dark-border shadow-sky-200/40 dark:shadow-sky-500/10"}`}
                            style={{
                              animation: isExpanded
                                ? "counter-orbit 30s linear infinite"
                                : "none",
                              transform: `scale(${iconScale})`,
                              opacity: iconOpacity,
                              transition:
                                "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease",
                            }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            <span className="material-symbols-outlined text-primary text-xl">
                              {tool.icon}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Outer orbit */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    animation: isExpanded
                      ? "orbit 40s linear infinite reverse"
                      : "none",
                  }}
                >
                  {orbitTools
                    .filter((t) => t.ring === "outer")
                    .map((tool) => {
                      const idx = orbitTools.indexOf(tool);
                      return (
                        <div
                          key={tool.icon}
                          className="absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            marginTop: "-24px",
                            marginLeft: "-24px",
                            transform: `rotate(${tool.angle}deg) translateX(${outerRadius}px) rotate(-${tool.angle}deg)`,
                            transition:
                              "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          }}
                        >
                          <div
                            className={`w-12 h-12 rounded-2xl bg-white dark:bg-dark-card border shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto ${hoveredIndex === idx ? "border-primary shadow-primary/30 scale-110" : "border-sky-200 dark:border-dark-border shadow-sky-200/40 dark:shadow-sky-500/10"}`}
                            style={{
                              animation: isExpanded
                                ? "counter-orbit 40s linear infinite reverse"
                                : "none",
                              transform: `scale(${iconScale})`,
                              opacity: iconOpacity,
                              transition:
                                "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease",
                            }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            <span className="material-symbols-outlined text-primary text-xl">
                              {tool.icon}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Hover hint */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-500"
                  style={{
                    opacity: isExpanded ? 0 : 0.7,
                    transform: `translateX(-50%) translateY(${isExpanded ? "8px" : "0"})`,
                  }}
                >
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest whitespace-nowrap">
                    Hover to explore tools
                  </span>
                </div>

                {/* Featured label — randomly cycles through tools */}
                <div
                  className="absolute bottom-6 left-1/2 z-30"
                  style={{
                    opacity: labelVisible ? 1 : 0,
                    transform: `translateX(-50%) translateY(${labelVisible ? "0px" : "10px"})`,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  <div className="bg-white dark:bg-dark-card rounded-xl px-4 py-2.5 shadow-lg dark:shadow-black/40 border border-sky-100 dark:border-dark-border min-w-[220px]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg shrink-0">
                        {orbitTools[displayIndex].icon}
                      </span>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {orbitTools[displayIndex].label}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                          {orbitTools[displayIndex].desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by */}
          <div className="text-center mb-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              TRUSTED BY TEAMS AT
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 dark:invert">
              <Image src="/ru-logo.png" alt="Rutgers" width={100} height={100} className="w-auto h-18 object-contain" />
              <Image src="/chase.webp" alt="Chase" width={200} height={200} className="w-auto h-18 object-contain" />
              <Image src="/mu-logo.png" alt="Maryland University" width={200} height={200} className="w-auto h-10 object-contain" />
              <Image src="/rider.png" alt="Rider" width={100} height={100} className="w-auto h-10 object-contain" />
              <Image src="/arcadia.jpg" alt="Arcadia" width={100} height={100} className="w-auto h-10 object-contain" />
              <Image src="/miami.png" alt="Miami U" width={100} height={100} className="w-auto h-10 object-contain" />
              
            </div>
          </div>
        </div>
      </main>

      {/* Fade from hero color to white */}
      <div className="h-32 bg-gradient-to-b from-sky-50 to-white dark:from-dark-base dark:to-dark-base"></div>

      {/* Features strip */}
      <section className="bg-white dark:bg-dark-base py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">
                  sync_alt
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
                Autonomous Sync
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Agents automatically update your project state based on
                real-time conversations and code changes.
              </p>
            </div>
            <div className="group">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/15 rounded-xl flex items-center justify-center mb-8 border border-purple-100 dark:border-purple-500/20 group-hover:bg-purple-600 transition-all duration-300">
                <span className="material-symbols-outlined text-xl text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors">
                  psychology
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
                Contextual Intelligence
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Your agents learn from your team&apos;s past decisions, ensuring
                every output aligns with your unique style.
              </p>
            </div>
            <div className="group">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/15 rounded-xl flex items-center justify-center mb-8 border border-emerald-100 dark:border-emerald-500/20 group-hover:bg-emerald-600 transition-all duration-300">
                <span className="material-symbols-outlined text-xl text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors">
                  security
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
                Enterprise Privacy
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Enterprise-grade encryption and SOC2 compliance. Your proprietary
                data never leaves your workspace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
