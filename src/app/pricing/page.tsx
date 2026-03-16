import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the right Thytus plan for your team. Free, Pro, Ultra, Business, and Enterprise tiers for every team size.",
  openGraph: {
    title: "Pricing | Thytus",
    description:
      "Choose the right Thytus plan for your team. Free, Pro, Ultra, Business, and Enterprise tiers for every team size.",
  },
};

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-[#060B16] text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
