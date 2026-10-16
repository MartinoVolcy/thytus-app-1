"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StoreBadgeLinks } from "@/components/DownloadAppButton";

const HERO_PROMPTS = [
  "Run a $20-a-day Google ad for drain cleaning in North Austin.",
  "Find homeowners in Oak Hills who might need a fence quote this spring.",
  "Post on Facebook and Instagram that we have HVAC openings next week.",
  "Add this new lead to the CRM and let me know when they call back.",
  "Send a cold email to property managers about our lawn packages.",
  "Pull up everything on the Charles job before I head over.",
  "Add a note: Martinez wants the same stain as last time on the deck.",
  "Move the Lopez job to next Wednesday and text her something came up.",
  "What files and photos do we have for the Riverside kitchen remodel?",
  "Reschedule today's 2 PM to Thursday and update the calendar.",
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
        () =>
          setText(
            deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
          ),
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
    <div className="w-full text-left" aria-label="Example messages you can send to Thytus">
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] dark:border-dark-border dark:bg-dark-card dark:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 dark:border-dark-border">
          <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
          <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
          <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
          <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Thytus
          </span>
        </div>

        <div className="min-h-[5.5rem] px-5 pt-4 pb-2 sm:min-h-[6.5rem] sm:px-6 sm:pt-5">
          <p className="min-h-[1.75rem] text-[15px] leading-relaxed text-slate-900 dark:text-slate-100 sm:text-base">
            {typedText}
            <span
              className="ml-0.5 inline-block h-[1.05em] w-[2px] align-[-0.12em] bg-slate-900 animate-pulse dark:bg-slate-100"
              aria-hidden
            />
          </p>
        </div>

        <div className="flex items-center justify-between px-4 pb-3.5 pt-1 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 dark:border-dark-border dark:text-slate-500">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500">
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              <span className="material-symbols-outlined translate-x-px -translate-y-px text-[18px]">
                send
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

const CARD_W = 260;
const CARD_H = 160;

const Hero = () => {
  const services = SERVICE_IMAGES.map((file) => ({
    src: `/services/${file}`,
    label: filenameToLabel(file),
  }));

  return (
    <div className="overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-primary/20 dark:bg-dark-base dark:text-slate-100">
      <main className="relative flex min-h-[100svh] flex-col overflow-hidden">
        {/* Atmosphere: soft radial wash + faint grid, competitor-style depth without clutter */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.14),transparent_55%),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#ffffff_100%)] dark:bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(14,165,233,0.12),transparent_55%),linear-gradient(180deg,#080F1E_0%,#080F1E_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:pt-36">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="text-center lg:text-left">
              <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl lg:text-[3.15rem]">
                Everything to run your service business.
                <span className="mt-2 block font-medium text-slate-500 dark:text-slate-400 sm:mt-3">
                  Just by talking to it.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg lg:mx-0">
                Ads, follow-ups, schedules, invoices, and routes. Built for owners in the trades who
                want less desk work and more time on the job.
              </p>
            </div>

            <div className="w-full">
              <HeroChatInput />
              <div className="mt-6 flex justify-center sm:mt-7">
                <StoreBadgeLinks />
              </div>
            </div>
          </div>

          {/* Industry strip — Housecall / Jobber style proof of fit */}
          <div className="mt-14 w-full max-w-full flex-shrink-0 pt-2 sm:mt-16 md:mt-20">
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Built for owners in
            </p>
            <div className="hero-marquee-hover relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
              <div className="hero-services-track flex w-max gap-4">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 gap-4">
                    {services.map(({ src, label }) => (
                      <div
                        key={`${dup}-${src}`}
                        className="relative shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200/70 dark:ring-dark-border"
                        style={{ width: CARD_W, height: CARD_H }}
                      >
                        <Image
                          src={src}
                          alt={label}
                          width={CARD_W}
                          height={CARD_H}
                          className="h-full w-full object-cover"
                          sizes="(max-width: 768px) 70vw, 260px"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center px-2 pb-3">
                          <span className="text-sm font-semibold tracking-tight text-white drop-shadow-sm">
                            {label}
                          </span>
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

      {/* Problem section */}
      <section className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/80 py-16 dark:border-dark-border dark:from-dark-base dark:to-dark-base md:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
            <div className="text-left">
              <p className="mb-4 max-w-md text-sm font-semibold leading-snug text-slate-600 dark:text-slate-300">
                What desk work really costs
              </p>
              <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-[2.75rem]">
                You started this business to do the work,
                <span className="mt-2 block text-slate-600 dark:text-slate-300">
                  not to sit at a desk.
                </span>
              </h2>

              <div className="mt-7 inline-block">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-400 dark:text-red-500">
                  Each week, desk work takes
                </p>
                <div className="inline-flex items-baseline gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 dark:border-red-900/50 dark:bg-red-950/40">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">40%</span>
                  <span className="text-sm font-medium text-red-700 dark:text-red-300">of your time</span>
                  <span className="mx-1 text-slate-400 dark:text-slate-600">·</span>
                  <span className="text-sm font-bold text-red-600 dark:text-red-400">~$3,000</span>
                  <span className="text-sm font-medium text-red-700 dark:text-red-300">
                    in potential revenue
                  </span>
                </div>
              </div>

              <ul className="mt-6 max-w-xl space-y-2.5">
                {[
                  "Writing quotes after a long day",
                  "Chasing leads and following up",
                  "Posting online just to get noticed",
                  "Digging through paperwork and missed calls",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-snug text-slate-600 dark:text-slate-400 sm:text-base"
                  >
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                      <span className="block h-1.5 w-1.5 rounded-full bg-red-500 dark:bg-red-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                That is time and money you lose every week.
              </p>
            </div>

            <div className="w-full lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] max-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-slate-200/40 dark:border-dark-border dark:bg-dark-card dark:shadow-black/50 sm:max-h-[420px] lg:max-h-none">
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
