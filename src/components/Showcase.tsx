"use client";

import Image from "next/image";
import { AdviceSection, ProcessJourneySection } from "@/components/ServiceJourney";

export default function Showcase() {
  return (
    <>
      <section
        className="py-16 md:py-24 relative bg-slate-50 dark:bg-dark-base border-t border-slate-100 dark:border-dark-border"
        id="showcase"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-start mb-10 md:mb-14">
            <div className="text-left">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
                Thytus handles the desk work. You handle the job.
              </h2>
              {/* <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                Say what you need in plain language. Thytus can turn it into invoices, social posts, follow-ups, and
                customer updates, so you stay on the job while the desk work gets done.
              </p> */}
              <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-dark-border bg-slate-100 dark:bg-dark-card aspect-[4/3] max-h-[340px] sm:max-h-[380px]">
                <Image
                  src="/happy-plumber.png"
                  alt="Business owner feeling on top of work at the desk"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="relative w-full min-w-0">
              <div className="space-y-5 p-1 sm:p-2">
                {[
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
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {msg.role === "user" ? "You" : "Thytus"}
                    </span>
                    <div
                      className={`max-w-[min(100%,420px)] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-[15px] ${
                        msg.role === "user"
                          ? "rounded-br-md bg-sky-100 text-left text-slate-900 dark:bg-sky-100/95 dark:text-slate-900"
                          : "rounded-bl-md bg-slate-200 text-left text-slate-800 dark:bg-slate-200 dark:text-slate-900"
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
      <AdviceSection />
    </>
  );
}
