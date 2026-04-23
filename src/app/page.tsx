import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const HOME_DESCRIPTION =
  "Run your whole service business by talking to it. Thytus handles customer follow-up, quotes, social posts, and the admin that pulls you off the job—built for owners in the trades.";

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
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  );
}
