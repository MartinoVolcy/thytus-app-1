"use client";

import Image from "next/image";
import DownloadAppButton, { BookDemoButton } from "@/components/DownloadAppButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-slate-900 py-24 dark:border-dark-border dark:bg-[#060B16]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_50%,rgba(14,165,233,0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 text-center lg:pr-4 lg:text-left">
            <p className="mb-3 text-sm font-semibold tracking-wide text-sky-300/90">
              Get started
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.5rem] xl:text-5xl">
              <span className="block text-balance">Do the work you are good at.</span>
              <span className="mt-2 block text-balance text-slate-300">
                Let Thytus handle the rest.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-400 lg:mx-0">
              Download the app or book a demo. See how service owners cut desk work and get back on the job.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <DownloadAppButton
                variant="cta"
                className="!bg-white !text-slate-900 hover:!bg-slate-100 dark:!bg-white dark:!text-slate-900"
              />
              <BookDemoButton
                variant="cta"
                className="!border-slate-500 !text-white hover:!bg-white/10 dark:!border-slate-500 dark:!text-white dark:hover:!bg-white/10"
              />
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] min-h-0 w-full max-w-lg shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 lg:mx-0 lg:max-w-none">
            <Image
              src="/business-group-picture.png"
              alt="Two professional technicians smiling beside their equipped work van"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
