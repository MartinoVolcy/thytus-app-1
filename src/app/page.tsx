import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const HOME_DESCRIPTION =
  "Tell Thytus what you need. It handles follow-ups, quotes, social posts, and desk work so you can get back on the job. Built for service and trade business owners.";

export const metadata: Metadata = {
  title: "Run your service business without drowning in desk work",
  description: HOME_DESCRIPTION,
  openGraph: {
    title: "Run your service business without drowning in desk work | Thytus",
    description: HOME_DESCRIPTION,
  },
  twitter: {
    title: "Run your service business without drowning in desk work | Thytus",
    description: HOME_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#060B16] text-text-dark dark:text-slate-200 antialiased transition-colors duration-300 selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Showcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}


