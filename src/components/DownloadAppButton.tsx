"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DEMO_URL, detectMobilePlatform } from "@/lib/app-stores";
import { waitlistPathForPlatform } from "@/lib/waitlist";

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
      <Link
        href={waitlistPathForPlatform("ios")}
        className="transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
      >
        <Image
          src="/IOS.png"
          alt="Join the iOS waitlist"
          width={180}
          height={54}
          className="h-11 w-auto object-contain sm:h-12"
        />
      </Link>
      <Link
        href={waitlistPathForPlatform("android")}
        className="transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
      >
        <Image
          src="/playStore.png"
          alt="Join the Android waitlist"
          width={180}
          height={54}
          className="h-11 w-auto object-contain sm:h-12"
        />
      </Link>
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
  const router = useRouter();

  const handleClick = () => {
    const platform = detectMobilePlatform();
    onAfterClick?.();
    if (platform) {
      router.push(waitlistPathForPlatform(platform));
      return;
    }
    router.push("/waitlist");
  };

  return (
    <button type="button" onClick={handleClick} className={`${variantClass[variant]} ${className}`.trim()}>
      {label}
      {showArrow ? (
        <span className="material-symbols-outlined text-[18px]" aria-hidden>
          arrow_forward
        </span>
      ) : null}
    </button>
  );
}
