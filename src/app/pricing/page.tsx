import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing | Thytus",
  description: "Choose the right plan for your team.",
};

export default function PricingPage() {
  return (
    <div className="bg-sky-50 dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
