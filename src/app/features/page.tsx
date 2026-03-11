import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Thytus capabilities: multi-model AI agents, context tracking, agent collaboration, docs, spreadsheets, slides, code editor, and media generation.",
  openGraph: {
    title: "Features | Thytus",
    description:
      "Explore Thytus capabilities: multi-model AI agents, context tracking, agent collaboration, and a full suite of workspace tools.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="bg-white dark:bg-[#060B16] text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
