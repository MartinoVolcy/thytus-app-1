"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/martino-volcy02/business-subscription";

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
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-slate-900 dark:text-white">
              Run your whole business by talking to it.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Type what you need and get back to the work your customers pay you for. Thytus helps with customer follow-up,
              posting online, quotes, and more, so you can focus on the job itself.
            </p>

            <div className="flex flex-wrap items-center justify-center mb-0">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-none font-semibold text-sm transition-all hover:opacity-90"
              >
                <span className="inline-flex items-center gap-2">
                  Get Started for Free
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
                <span className="text-[11px] font-medium text-white/80 dark:text-slate-600">
                  No Credit Card Required
                </span>
              </Link>
            </div>
          </div>

          {/* Trusted by: infinite horizontal marquee */}
          <div className="text-center mt-14 md:mt-20 pt-2 pb-4 flex-shrink-0 w-full max-w-full">
            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
              Trusted by owners in
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
                The hidden cost of running a business
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                You started this business to provide a service,
                <span className="mt-2 block text-slate-600 dark:text-slate-300">
                  Not to get stuck at a desk.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm font-medium text-slate-700 dark:text-slate-200 sm:text-base leading-relaxed">
                <span className="font-semibold text-red-600 dark:text-red-400">40%</span> of the week is spent on desk
                work instead of actually providing a service.
              </p>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                When the job is done, your day is not over yet. There are still quotes to write, customers to call back,
                leads to follow up on, social media posts to make, and papers to sort through.
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
