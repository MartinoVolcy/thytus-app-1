"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ChatExample = { user: string; thytus: string };

function ExampleCarousel({ examples }: { examples: ChatExample[] }) {
  const [i, setI] = useState(0);
  const n = examples.length;
  const atStart = i <= 0;
  const atEnd = i >= n - 1;

  const prev = useCallback(() => {
    setI((x) => Math.max(0, x - 1));
  }, []);

  const next = useCallback(() => {
    setI((x) => Math.min(n - 1, x + 1));
  }, [n]);

  const ex = examples[i];

  const btnBase =
    "inline-flex size-9 items-center justify-center rounded-lg border transition dark:border-dark-border";
  const btnEnabled =
    "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:bg-dark-card dark:text-slate-200 dark:hover:bg-dark-elevated";
  const btnDisabled =
    "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300 dark:border-dark-border dark:bg-dark-elevated/50 dark:text-slate-600";

  return (
    <div
      className="flex flex-col outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft" && !atStart) {
          e.preventDefault();
          prev();
        }
        if (e.key === "ArrowRight" && !atEnd) {
          e.preventDefault();
          next();
        }
      }}
    >
      <div className="flex flex-col justify-center space-y-5 p-1 sm:p-2">
        <div className="flex flex-col items-end gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">You</span>
          <div className="max-w-[min(100%,420px)] rounded-2xl rounded-br-md bg-sky-100 px-4 py-3 text-left text-sm leading-relaxed text-slate-900 sm:text-[15px] dark:bg-sky-100/95 dark:text-slate-900">
            {ex.user}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Thytus</span>
          <div className="max-w-[min(100%,420px)] rounded-2xl rounded-bl-md bg-slate-200 px-4 py-3 text-left text-sm leading-relaxed text-slate-800 sm:text-[15px] dark:bg-slate-200 dark:text-slate-900">
            {ex.thytus}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={prev}
          disabled={atStart}
          aria-label="Previous example"
          aria-disabled={atStart}
          className={`${btnBase} ${atStart ? btnDisabled : btnEnabled}`}
        >
          <span className="material-symbols-outlined text-xl">keyboard_arrow_left</span>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={atEnd}
          aria-label="Next example"
          aria-disabled={atEnd}
          className={`${btnBase} ${atEnd ? btnDisabled : btnEnabled}`}
        >
          <span className="material-symbols-outlined text-xl">keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  );
}

type LogoDef = { src: string; alt: string };

function LogoStrip({ logos }: { logos: LogoDef[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="group relative flex h-11 w-11 shrink-0 cursor-default items-center justify-center rounded-xl border border-slate-200/80 bg-white p-1.5 dark:border-dark-border dark:bg-dark-elevated sm:h-12 sm:w-12"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={36}
            height={36}
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
          <span
            role="tooltip"
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-150 group-hover:opacity-100 dark:bg-slate-700 dark:ring-white/5"
          >
            {logo.alt}
          </span>
        </div>
      ))}
    </div>
  );
}

const PROCESS_STEPS = [
  {
    title: "Before the job",
    chipClass: "inline-flex w-fit rounded-full border border-amber-200 bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-950 dark:border-amber-400/40 dark:bg-amber-500/20 dark:text-amber-100",
    body: "Never miss a lead. New callers get added to your CRM and you get a heads up. Thytus can run Google, Meta, and Reddit ads, find prospects, send cold emails, and make cold calls.",
    logos: [
      { src: "/logos/google-ads.png", alt: "Google Ads" },
      { src: "/logos/meta.png", alt: "Meta Ads (Facebook & Instagram)" },
      { src: "/logos/reddit.png", alt: "Reddit Ads" },
      { src: "/logos/gmail.png", alt: "Email" },
      { src: "/logos/phone-call.png", alt: "Phone calls" },
    ] satisfies LogoDef[],
    examples: [
      { user: "Run a $20-a-day Google ad for drain cleaning in North Austin. Keep it simple.", thytus: "Draft is ready with ad text, three headlines to test, and keywords. Want it to go live Monday at 7 AM?" },
      { user: "Find 20 homeowners in Oak Hills who might need a fence quote this spring.", thytus: "Found 18 good leads with addresses and remodel dates. Should I send an intro email or call first?" },
      { user: "Post on Facebook and Instagram that we have openings next week for HVAC tune-ups.", thytus: "Posted to both with the same image and a booking link. Your service area is set." },
    ] satisfies ChatExample[],
    z: 10,
  },
  {
    title: "During the job",
    chipClass: "inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-950 dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100",
    body: "Keep every customer, file, photo, estimate, and service record in one place. Pull up job history before you walk in. Add notes without digging through drawers.",
    logos: [
      { src: "/logos/folders.png", alt: "Files and folders" },
      { src: "/logos/google-drive.png", alt: "Google Drive" },
      { src: "/logos/calendar.png", alt: "Calendar" },
      { src: "/logos/dropbox.png", alt: "Dropbox" },
      // { src: "/logos/notion.png", alt: "Notion" },
      // { src: "/logos/description.png", alt: "Documents" },
    ] satisfies LogoDef[],
    examples: [
      { user: "Pull up everything on the Charles job before I head over.", thytus: "Last visit was March 4: replaced the pressure valve. They prefer text, not calls. Invoice #1042 is paid. No open issues." },
      { user: "Add a note: Martinez wants the same stain as last time on the deck.", thytus: "Saved under Martinez, deck refinish. I attached the photo from the last job." },
      { user: "Move the Lopez job to next Wednesday and text her something came up.", thytus: "Done. Lopez is moved to next Wednesday and she got a text." },
    ] satisfies ChatExample[],
    z: 20,
  },
  {
    title: "After the job",
    chipClass: "inline-flex w-fit rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-950 dark:border-violet-400/40 dark:bg-violet-500/20 dark:text-violet-100",
    body: "When the job is done, Thytus can post before and after photos, send follow-ups, and make flyers so more people see your work. No late nights at the desk.",
    logos: [
      // { src: "/logos/phone-call.png", alt: "Phone calls" },
      // { src: "/logos/gmail.png", alt: "Gmail" },
      { src: "/logos/sms.png", alt: "Text messages" },
      { src: "/logos/instagram.png", alt: "Instagram" },
      { src: "/logos/tiktok.png", alt: "TikTok" },
      { src: "/logos/whatsapp.png", alt: "WhatsApp" },
      { src: "/logos/facebook.png", alt: "Facebook" },
      // { src: "/logos/google-calendar.png", alt: "Google Calendar" },
      { src: "/logos/messenger.png", alt: "Messenger" },
    ] satisfies LogoDef[],
    examples: [
      { user: "Job is done at the Martinez house. Send the invoice and post the before and after.", thytus: "Invoice sent with a payment link. Before and after is live on Instagram and Facebook. Want a follow-up in three months?" },
      { user: "Make a 15-second reel from today's bathroom photos.", thytus: "Reel is ready with music and your logo at the end. Post now or schedule it?" },
      { user: "Half-page flyer for spring lawn packages, something I can leave at the hardware store.", thytus: "PDF is in your files with pricing, your phone number, and a QR code to book. Want a black and white version for cheap printing?" },
    ] satisfies ChatExample[],
    z: 30,
  },
] as const;

const N = PROCESS_STEPS.length;

export function ProcessJourneySection() {
  // Outer scroll-distance div — its scroll position drives the animation
  const containerRef = useRef<HTMLDivElement>(null);
  // Direct DOM refs so style updates bypass React and hit 60fps
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // Pixels available to scroll while the sticky frame is active
      const totalScroll = el.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      // 0 = just entered sticky zone  |  1 = just leaving sticky zone
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));

      for (let idx = 1; idx < N; idx++) {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) continue;

        // Each card owns an equal slice of [0, 1]
        // Card 1: 0 → 0.5  |  Card 2: 0.5 → 1
        const start = (idx - 1) / (N - 1);
        const end = idx / (N - 1);

        let fraction: number; // 1 = hiding below  |  0 = fully on top
        if (progress >= end)        fraction = 0;
        else if (progress <= start) fraction = 1;
        else fraction = 1 - (progress - start) / (end - start);

        // vh units: 100vh below = completely off-screen below the sticky frame.
        // overflow-hidden on the sticky frame ensures nothing leaks through.
        cardEl.style.transform = `translateY(${fraction * 100}vh)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // correct initial state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white dark:bg-dark-base border-t border-slate-100 dark:border-dark-border">
      {/* ── Section header — scrolls normally above the sticky zone ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white tracking-tight text-center max-w-3xl mx-auto mb-4">
          Thytus helps at every step
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Tell Thytus what you need. It gets it done.
        </p>
      </div>

      {/*
        ── Scroll-distance container ──────────────────────────────────────────
        N * 100vh tall → (N-1) * 100vh of active scroll distance (100vh per transition).
        The user "uses up" scroll here, but the viewport never moves because
        the sticky frame inside is full-viewport height.
      */}
      <div ref={containerRef} style={{ height: `${N * 100}vh` }}>

        {/*
          ── Sticky full-viewport frame ──────────────────────────────────────
          sticky top-0 h-screen: locks to the top of the viewport and fills it.
          overflow-hidden: clips any card that is below (translateY > 0) so it
            is completely invisible until it slides into view.
          No page movement is visible while the user is in this scroll zone.
        */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">

            {/*
              ── Card stack ──────────────────────────────────────────────────
              Card 0  →  position:relative  →  sizes this wrapper to card height.
              Cards 1+ →  position:absolute, top/left/right:0  →  same origin.
                          Initial transform: translateY(100vh) = below the viewport.
                          JS drives them to translateY(0) = covering card 0.
              z-index increases so each new card visually sits on top.
            */}
            <div className="relative">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  style={{
                    position: idx === 0 ? "relative" : "absolute",
                    ...(idx > 0 ? { top: 0, left: 0, right: 0 } : {}),
                    zIndex: step.z,
                    // 100vh initial offset pushes cards fully below the viewport.
                    // overflow-hidden on the parent frame hides them completely.
                    transform: idx > 0 ? "translateY(100vh)" : undefined,
                    willChange: idx > 0 ? "transform" : undefined,
                  }}
                >
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/40 dark:border-dark-border dark:bg-dark-card dark:shadow-black/40 sm:p-8 md:p-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                      <div className="flex flex-col">
                        <span className={step.chipClass}>{step.title}</span>
                        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:mt-5 md:text-lg">
                          {step.body}
                        </p>
                        <LogoStrip logos={[...step.logos]} />
                      </div>
                      <div className="flex flex-col lg:border-l lg:border-slate-100 lg:pl-10 dark:lg:border-dark-border">
                        <ExampleCarousel examples={[...step.examples]} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function AdviceSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-dark-base py-20 md:py-28 border-t border-slate-100 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white tracking-tight mb-5 md:mb-6">
              See how your business is doing without digging through papers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              Ask for totals, trends, or who still owes you. No filing cabinets or old text threads. Thytus pulls your jobs, invoices, and notes together and answers in plain language.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-white dark:border-dark-border dark:bg-dark-card p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">You</p>
              <div className="rounded-2xl rounded-br-md bg-sky-100 px-4 py-3 text-sm text-slate-900 dark:bg-sky-100/95 dark:text-slate-900">
                How much did we bill last month, and who still has not paid?
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Thytus</p>
              <div className="flex max-w-[min(100%,420px)] flex-col items-start gap-2">
                <div className="overflow-hidden rounded-xl border border-slate-300/90 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800/50">
                  <Image
                    src="/blank-sreadsheet.png"
                    alt="Chart: trends over recent months"
                    width={120}
                    height={80}
                    className="h-auto w-full max-w-[94px] object-contain sm:max-w-[100px]"
                    sizes="100px"
                  />
                </div>
                <div className="w-full rounded-2xl rounded-bl-md bg-slate-200 px-4 py-3 text-sm text-slate-900 dark:bg-slate-200 dark:text-slate-900">
                  Last month you billed $42,800. About $9,200 is still open on six invoices. The oldest is Riverside Properties at 38 days ($2,400). Want me to draft a payment reminder you can send as a text?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}