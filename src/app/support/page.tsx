import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import SupportContact from "@/components/SupportContact";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with the Thytus app. Email support and we will get back to you.",
};

export default function SupportPage() {
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
          Thytus app
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Support
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          Questions about the Thytus iPhone or Android app, your account, or a subscription? Send us
          an email and we will reply from the same address.
        </p>

        <div className="mt-8">
          <SupportContact />
        </div>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-900 dark:hover:text-white">
            Privacy Policy
          </Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="underline underline-offset-2 hover:text-slate-900 dark:hover:text-white">
            Terms of Service
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
