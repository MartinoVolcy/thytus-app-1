import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Thytus brings multi-model AI agents, context tracking, agent collaboration, and built-in docs, spreadsheets, slides, code editor, and media generation into one workspace.",
  openGraph: {
    title: "Features | Thytus",
    description:
      "One workspace for AI agents, context tracking, collaboration, and built-in docs, spreadsheets, slides, code, and media.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
