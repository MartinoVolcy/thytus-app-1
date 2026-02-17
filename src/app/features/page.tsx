import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Features | Thytus",
  description: "Explore the core functionality of the Thytus platform.",
};

export default function FeaturesPage() {
  return (
    <div className="bg-sky-50 dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
