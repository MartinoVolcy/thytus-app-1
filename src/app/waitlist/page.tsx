import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join the Thytus waitlist for iOS or Android and get notified when the app is ready.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-dark-base dark:text-slate-200">
      <header className="border-b border-slate-100 dark:border-dark-border">
        <div className="mx-auto flex h-20 max-w-3xl items-center px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Thytus_Logo.png" alt="Thytus" width={36} height={36} className="object-contain" />
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Thytus
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
          Early access
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Join the waitlist
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          Thytus is coming soon to the App Store and Google Play. Leave your details and we&apos;ll
          notify you when your platform is ready.
        </p>

        <div className="mt-8 max-w-md">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-dark-border dark:bg-dark-card sm:p-8">
                <p className="text-sm text-slate-500 dark:text-slate-400">Loading form...</p>
              </div>
            }
          >
            <WaitlistForm />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
