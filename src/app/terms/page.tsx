import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TermsOfServiceContent from "@/components/TermsOfServiceContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Thytus. Read the terms that apply when you use our website and mobile app.",
};

export default function TermsOfServicePage() {
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
        <h1 className="mb-8 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Terms of Service
        </h1>
        <TermsOfServiceContent />
      </main>

      <Footer />
    </div>
  );
}
