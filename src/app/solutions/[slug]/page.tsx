import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Thytus Solutions`,
    description: solution.tagline,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              {solution.icon}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Thytus for{" "}
            <span className="text-gradient">{solution.title}</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {solution.tagline}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">
            {solution.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Why teams choose Thytus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / How it works */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              What you can do
            </h2>
          </div>
          <div className="space-y-6">
            {solution.features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-extrabold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to transform your{" "}
            {solution.title.toLowerCase()} workflow?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Get started for free and see what AI agents can do for your team.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
