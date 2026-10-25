import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 dark:border-dark-border dark:bg-dark-base md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <Image
                  src="/Thytus_Logo.png"
                  alt="Thytus Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Thytus
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Desk work automation for service businesses. Less time at the desk. More time on the job.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <Link href="/#showcase" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-sm font-medium text-slate-400 dark:border-dark-border dark:text-slate-500 md:text-left">
          © 2026 Thytus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
