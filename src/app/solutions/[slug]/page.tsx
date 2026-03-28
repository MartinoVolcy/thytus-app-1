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
    openGraph: {
      title: `${solution.title} | Thytus Solutions`,
      description: solution.tagline,
    },
    twitter: {
      title: solution.title,
      description: solution.tagline,
    },
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
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400">
              {solution.icon}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Thytus for <span className="text-slate-700 dark:text-slate-200">{solution.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {solution.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center">
            {solution.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Why teams choose Thytus
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-12">
            Built for how you work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {solution.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">
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

      {/* What you can do */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Use cases
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-10">
            What you can do
          </h2>
          <div className="space-y-4">
            {solution.features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-1">
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
      <section className="py-20 md:py-24 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Ready to transform your {solution.title.toLowerCase()} workflow?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            One workspace for your team and AI agents. No extra tools, no context switching.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="inline-flex px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-none font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
