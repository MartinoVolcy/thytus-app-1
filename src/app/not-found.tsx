import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200">
      <header className="border-b border-slate-100 dark:border-dark-border">
        <div className="mx-auto flex h-20 max-w-3xl items-center px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Thytus_Logo.png"
              alt="Thytus"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Thytus
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          This page does not exist or may have moved. Head back home to keep running your business.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-none bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Back to home
          <span className="material-symbols-outlined text-[18px]" aria-hidden>
            arrow_forward
          </span>
        </Link>
      </main>
    </div>
  );
}
