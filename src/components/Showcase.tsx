"use client";

import Image from "next/image";
import {
  AdviceSection,
  MarketingSection,
  ProcessJourneySection,
  SmartRoutesSection,
} from "@/components/ServiceJourney";

const DEMO_MESSAGES = [
  {
    role: "user" as const,
    text: "Job is done at the Martinez house. Send the invoice and post the before and after.",
  },
  {
    role: "assistant" as const,
    text: "Done. Invoice sent to Maria Martinez for $485 with a payment link. Before and after photos posted to Instagram and Facebook. Want a follow-up in three months?",
  },
  {
    role: "user" as const,
    text: "Yes, and ask her to leave a Google review.",
  },
  {
    role: "assistant" as const,
    text: "Done. I sent a text asking for a Google review and set a follow-up call for November 30 at 9 AM. Anything else?",
  },
];

export default function Showcase() {
  return (
    <>
      <section
        className="relative border-t border-slate-100 bg-slate-50 py-20 dark:border-dark-border dark:bg-dark-base md:py-28"
        id="showcase"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              How it works
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              Thytus handles the desk work. You handle the job.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Say what you need in plain language. Thytus turns it into invoices, posts, follow-ups,
              and customer updates while you stay on the tools.
            </p>
          </div>

          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="relative aspect-[4/3] min-h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg shadow-slate-200/30 dark:border-dark-border dark:bg-dark-card dark:shadow-black/40 lg:min-h-0 lg:aspect-auto">
              <Image
                src="/happy-plumber.png"
                alt="Business owner feeling on top of work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-dark-border dark:bg-dark-card sm:p-7">
              <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-dark-border">
                <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Live example
                </span>
              </div>
              <div className="space-y-5">
                {DEMO_MESSAGES.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {msg.role === "user" ? "You" : "Thytus"}
                    </span>
                    <div
                      className={`max-w-[min(100%,420px)] rounded-2xl px-4 py-3 text-left text-sm leading-relaxed sm:text-[15px] ${
                        msg.role === "user"
                          ? "rounded-br-md bg-sky-100 text-slate-900 dark:bg-sky-100/95 dark:text-slate-900"
                          : "rounded-bl-md bg-slate-100 text-slate-800 dark:bg-slate-200 dark:text-slate-900"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessJourneySection />
      <SmartRoutesSection />
      <AdviceSection />
      <MarketingSection />
    </>
  );
}
