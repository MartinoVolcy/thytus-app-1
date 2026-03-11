import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Collaboration Platform for Teams",
  description:
    "Thytus is a collaborative AI workspace where teams and AI agents work side by side. Deploy multiple models, collaborate in real time, and ship faster.",
  openGraph: {
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is a collaborative AI workspace where teams and AI agents work side by side. Deploy multiple models, collaborate in real time, and ship faster.",
  },
  twitter: {
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is a collaborative AI workspace where teams and AI agents work side by side.",
  },
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#060B16] text-text-dark dark:text-slate-200 antialiased transition-colors duration-300 selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
