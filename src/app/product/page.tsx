import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Product | Thytus",
  description: "See the Thytus product in action.",
};

export default function ProductPage() {
  return (
    <div className="bg-sky-50 dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}
