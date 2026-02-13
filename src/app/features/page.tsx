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
        <div className="bg-white text-text-dark antialiased selection:bg-primary/20 pt-20">
            <Navbar />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}
