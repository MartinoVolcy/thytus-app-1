"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CALENDLY_URL = "https://cal.com/martino-volcy-phwgox/thytus-demo";

const HERO_PROMPTS = [
  // Before the job: leads, ads, CRM, outreach
  "Run a $20-a-day Google ad for drain cleaning in North Austin.",
  "Find homeowners in Oak Hills who might need a fence quote this spring.",
  "Post on Facebook and Instagram that we have HVAC openings next week.",
  "Add this new lead to the CRM and let me know when they call back.",
  "Send a cold email to property managers about our lawn packages.",
  // During the job: CRM, history, notes, scheduling
  "Pull up everything on the Charles job before I head over.",
  "Add a note: Martinez wants the same stain as last time on the deck.",
  "Move the Lopez job to next Wednesday and text her something came up.",
  "What files and photos do we have for the Riverside kitchen remodel?",
  "Reschedule today's 2 PM to Thursday and update the calendar.",
  // After the job: invoices, social, follow-ups, marketing
  "Job is done at Martinez. Send the invoice and post the before and after.",
  "Make a 15-second reel from today's bathroom photos.",
  "Half-page flyer for spring lawn packages for the hardware store.",
  "Send a follow-up in three months and ask for a Google review.",
  "How much did we bill last month, and who still owes us?",
] as const;

function useTypingAnimation(
  sentences: readonly string[],
  typingMs = 42,
  deletingMs = 24,
  pauseMs = 2200,
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % sentences.length);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? deletingMs : typingMs,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, sentences, typingMs, deletingMs, pauseMs]);

  return text;
}

function HeroChatInput() {
  const typedText = useTypingAnimation(HERO_PROMPTS);

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-14 sm:mt-16 mb-8 sm:mb-10 text-left"
      aria-label="Example messages you can send to Thytus"
    >
      <div className="rounded-[1.75rem] bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-[0_12px_48px_-12px_rgba(14,165,233,0.28)] dark:shadow-[0_12px_48px_-12px_rgba(14,165,233,0.15)] overflow-hidden">
        <div className="min-h-[5.5rem] px-5 sm:px-6 pt-5 sm:pt-6 pb-3">
          <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-relaxed min-h-[1.75rem]">
            {typedText}
            <span
              className="inline-block w-[2px] h-[1.1em] align-[-0.15em] ml-0.5 bg-slate-900 dark:bg-slate-100 animate-pulse"
              aria-hidden
            />
          </p>
        </div>

        <div className="flex items-center justify-between px-4 sm:px-5 pb-4 pt-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Add attachment"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-dark-border text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-dark-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
            <button
              type="button"
              aria-label="Adjust settings"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-dark-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Voice input"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-dark-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">mic</span>
            </button>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a demo"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-500/20 text-slate-700 dark:text-sky-200 hover:bg-sky-200 dark:hover:bg-sky-500/30 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] translate-x-px -translate-y-px">send</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Images in /public/services; label from filename (e.g. electrical.png → Electrical). */
const SERVICE_IMAGES = [
  "appliance.png",
  "auto-detailing.png",
  "carpentry.png",
  "carpet-cleaning.png",
  "concrete.png",
  "custom-home-building.png",
  "custom-remodeling.png",
  "electrical.png",
  "fireplace-and-chimney.png",
  "flooring.png",
  "garage-door.png",
  "handyman.png",
  "home-cleaning.png",
  "HVAC.png",
  "irrigation.png",
  "janitorial.png",
  "junk-removal.png",
  "landscaping.png",
  "lawncare.png",
  "locksmith.png",
  "mechanical.png",
  "moving.png",
  "painting.png",
  "pest-control.png",
  "plumbing.png",
  "pool-and-spa.png",
  "property-maintenance.png",
  "restoration.png",
  "roofing.png",
  "septic.png",
  "snow-removal.png",
  "window-cleaning.png",
] as const;

function filenameToLabel(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const CARD_W = 300;
const CARD_H = 188;

const Hero = () => {
  const services = SERVICE_IMAGES.map((file) => ({
    src: `/services/${file}`,
    label: filenameToLabel(file),
  }));

  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-100 font-sans selection:bg-primary/20 overflow-x-hidden">
      <main className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white dark:from-dark-base dark:to-dark-base pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/50 dark:bg-slate-700/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center w-full min-h-0 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
          {/* Hero: centered copy */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white text-balance max-w-3xl">
              Say what you need.
              <span className="block mt-2 text-slate-600 dark:text-slate-300">
                Get back on the job.
              </span>
            </h1>

            <HeroChatInput />
          </div>

          {/* Trusted by: infinite horizontal marquee */}
          <div className="text-center mt-14 md:mt-20 pt-2 pb-4 flex-shrink-0 w-full max-w-full">
            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
              Built for owners in
            </p>
            <div className="hero-marquee-hover relative w-full overflow-hidden">
              <div className="hero-services-track flex w-max gap-5">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex gap-5 shrink-0">
                    {services.map(({ src, label }) => (
                      <div
                        key={`${dup}-${src}`}
                        className="relative shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200/60 dark:ring-dark-border"
                        style={{ width: CARD_W, height: CARD_H }}
                      >
                        <Image
                          src={src}
                          alt={label}
                          width={CARD_W}
                          height={CARD_H}
                          className="h-full w-full object-cover"
                          sizes="(max-width: 768px) 85vw, 300px"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-3 px-2">
                          <span className="text-base font-bold text-white tracking-tight drop-shadow-sm">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="h-24 bg-gradient-to-b from-slate-50 to-white dark:from-dark-base dark:to-dark-base" />

      {/* The Problem: service owners and admin overload */}
<section className="bg-gradient-to-b from-slate-50/80 to-white dark:from-dark-base dark:to-dark-base py-16 md:py-24 lg:py-28 border-t border-slate-100 dark:border-dark-border">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start lg:items-center">
      <div className="text-left">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4 leading-snug max-w-md">
          What desk work really costs
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
          You started this business to do the work,
          <span className="mt-2 block text-slate-600 dark:text-slate-300">
            not to sit at a desk.
          </span>
        </h2>

        {/* Cost callout */}
        <div className="mt-7 inline-block">
   <p className="text-xs font-semibold uppercase tracking-widest text-red-400 dark:text-red-500 mb-2">Each week, desk work takes</p>
   <div className="inline-flex items-baseline gap-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 px-4 py-3">
     <span className="text-2xl font-bold text-red-600 dark:text-red-400">40%</span>
     <span className="text-sm text-red-700 dark:text-red-300 font-medium">of your time</span>
     <span className="text-slate-400 dark:text-slate-600 mx-1">·</span>
     <span className="text-sm font-bold text-red-600 dark:text-red-400">~$3,000</span>
     <span className="text-sm text-red-700 dark:text-red-300 font-medium">in potential revenue</span>
   </div>
 </div>

        {/* Pain point list */}
        <ul className="mt-6 space-y-2.5 max-w-xl">
          {[
            "Writing quotes after a long day",
            "Chasing leads and following up",
            "Posting online just to get noticed",
            "Digging through paperwork and missed calls",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-snug">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                <span className="block w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
          That is time and money you lose every week.
        </p>
      </div>

      <div className="w-full lg:sticky lg:top-28">
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-dark-border bg-slate-100 dark:bg-dark-card shadow-xl shadow-slate-200/40 dark:shadow-black/50 aspect-[4/3] max-h-[380px] sm:max-h-[420px] lg:max-h-none">
          <Image
            src="/fustrated-guy-at-work.png"
            alt="Tired business owner at a desk with paperwork and a laptop"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Hero;
