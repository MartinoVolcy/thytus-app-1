import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "See the Thytus collaborative AI workspace in action. Multiple agents, one workspace, real-time team collaboration.",
  openGraph: {
    title: "Product | Thytus",
    description:
      "See the Thytus collaborative AI workspace in action. Multiple agents, one workspace, real-time team collaboration.",
  },
};

export default function ProductPage() {
  return (
    <div className="bg-white dark:bg-[#060B16] text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}
