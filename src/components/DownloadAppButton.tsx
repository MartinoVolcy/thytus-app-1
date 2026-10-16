"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  APP_STORE_URL,
  DEMO_URL,
  PLAY_STORE_URL,
  detectMobilePlatform,
  storeUrlForPlatform,
} from "@/lib/app-stores";

type Variant = "nav" | "cta" | "sidebar" | "pricing-muted" | "pricing-primary";

const variantClass: Record<Variant, string> = {
  nav: "btn-pill bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-5 py-2.5 rounded-none text-[14px] font-semibold transition-colors shadow-lg inline-flex items-center gap-2",
  cta: "w-full rounded-none bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto md:text-[15px] inline-flex items-center justify-center gap-2",
  sidebar:
    "block w-full text-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 py-3.5 rounded-none text-[15px] font-semibold transition-colors shadow-lg",
  "pricing-muted":
    "mb-6 block w-full rounded-none bg-slate-900/5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/10 dark:bg-dark-elevated dark:text-slate-200 dark:hover:bg-dark-border",
  "pricing-primary":
    "mb-6 block w-full rounded-none bg-slate-900 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/25 dark:hover:bg-slate-200",
};

const ghostClass: Record<Variant, string> = {
  nav: "inline-flex items-center justify-center px-5 py-2.5 rounded-none text-[14px] font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors",
  cta: "w-full sm:w-auto inline-flex items-center justify-center rounded-none border border-slate-300 dark:border-slate-600 bg-transparent px-8 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 transition-colors hover:bg-slate-100 dark:hover:bg-dark-elevated md:text-[15px]",
  sidebar:
    "block w-full text-center rounded-none border border-slate-300 dark:border-slate-600 bg-transparent py-3.5 text-[15px] font-semibold text-slate-800 dark:text-slate-100 transition-colors hover:bg-slate-100 dark:hover:bg-dark-elevated",
  "pricing-muted": variantClass["pricing-muted"],
  "pricing-primary": variantClass["pricing-primary"],
};

export function BookDemoButton({
  variant = "nav",
  className = "",
  onAfterClick,
}: {
  variant?: Variant;
  className?: string;
  onAfterClick?: () => void;
}) {
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onAfterClick}
      className={`${ghostClass[variant]} ${className}`.trim()}
    >
      Book Demo
    </a>
  );
}

export function StoreBadgeLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`.trim()}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
      >
        <Image
          src="/IOS.png"
          alt="Download on the App Store"
          width={180}
          height={54}
          className="h-11 w-auto object-contain sm:h-12"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
      >
        <Image
          src="/playStore.png"
          alt="Get it on Google Play"
          width={180}
          height={54}
          className="h-11 w-auto object-contain sm:h-12"
        />
      </a>
    </div>
  );
}

type DownloadAppButtonProps = {
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  label?: string;
  onAfterClick?: () => void;
};

export default function DownloadAppButton({
  variant = "nav",
  className = "",
  showArrow = false,
  label = "Download App",
  onAfterClick,
}: DownloadAppButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, closeModal]);

  const handleClick = () => {
    const platform = detectMobilePlatform();
    const url = storeUrlForPlatform(platform);
    onAfterClick?.();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    setModalOpen(true);
  };

  const modal =
    mounted && modalOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              aria-label="Close download options"
              onClick={closeModal}
            />
            <div className="relative z-10 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-dark-border dark:bg-dark-card sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2
                    id={titleId}
                    className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl"
                  >
                    Download Thytus
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Choose your app store</p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-dark-elevated"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>

              <StoreBadgeLinks />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button type="button" onClick={handleClick} className={`${variantClass[variant]} ${className}`.trim()}>
        {label}
        {showArrow ? (
          <span className="material-symbols-outlined text-[18px]" aria-hidden>
            arrow_forward
          </span>
        ) : null}
      </button>
      {modal}
    </>
  );
}
