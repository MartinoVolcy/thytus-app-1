import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { competitors } from "@/data/competitors";

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = competitors.find((c) => c.slug === slug);
  if (!comp) return {};
  return {
    title: `Thytus vs ${comp.name} | Compare AI Workspaces`,
    description: comp.tagline,
    openGraph: {
      title: `Thytus vs ${comp.name} | Compare AI Workspaces`,
      description: comp.tagline,
    },
    twitter: {
      title: `Thytus vs ${comp.name}`,
      description: comp.tagline,
    },
  };
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = competitors.find((c) => c.slug === slug);
  if (!comp) notFound();

  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-6"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            All comparisons
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Thytus vs {comp.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {comp.tagline}
          </p>
        </div>
      </section>

      {/* Side-by-side cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {/* Thytus card */}
          <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center">
                <Image
                  src="/Thytus_Logo.png"
                  alt="Thytus"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Thytus
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The collaborative AI workspace where your whole company works together. Teams and AI agents from any provider share one workspace to draft, research, create, and ship, with built-in docs, slides, spreadsheets, code editor, and media generation.
            </p>
          </div>

          {/* Competitor card */}
          <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center overflow-hidden">
                <Image
                  src={comp.logo}
                  alt={comp.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {comp.name}
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {comp.whatTheyDo}
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      {comp.painPoints && comp.painPoints.length > 0 && (
        <section className="py-16 md:py-20 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
                Compare
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Team collaboration with AI shouldn&apos;t be a hassle
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4">
                See how Thytus compares to {comp.name.split(" /")[0]}
              </p>
            </div>
            <div className="space-y-8">
              {comp.painPoints.map((pp) => (
                <div
                  key={pp.problem}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0 overflow-hidden">
                      <Image
                        src={comp.logo}
                        alt={comp.name}
                        width={28}
                        height={28}
                        className="object-contain opacity-60"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white mb-1.5 leading-snug">
                        {pp.problem}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {pp.problemDetail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0">
                      <Image
                        src="/Thytus_Logo.png"
                        alt="Thytus"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white mb-1.5 leading-snug">
                        {pp.solution}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {pp.solutionDetail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="https://showcase.thytus.com/v1/auth/signin"
                className="inline-flex px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Feature comparison table */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
              Features
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Feature comparison
            </h2>
          </div>
          <div className="rounded-2xl border border-slate-200/80 dark:border-dark-border overflow-hidden bg-white dark:bg-dark-card">
            <div className="grid grid-cols-[1fr_110px_110px] bg-slate-50 dark:bg-dark-surface px-6 py-4 border-b border-slate-100 dark:border-dark-border">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Feature
              </span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 text-center">
                Thytus
              </span>
              <span className="text-sm font-bold text-slate-400 dark:text-slate-500 text-center">
                {comp.name.split(" /")[0]}
              </span>
            </div>
            {comp.comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_110px_110px] px-6 py-4 ${
                  i < comp.comparison.length - 1
                    ? "border-b border-slate-100 dark:border-dark-border"
                    : ""
                }`}
              >
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {row.feature}
                </span>
                <span className="flex justify-center">
                  {row.thytus === true ? (
                    <span className="material-symbols-outlined text-lg text-emerald-500">
                      check_circle
                    </span>
                  ) : row.thytus === false ? (
                    <span className="material-symbols-outlined text-lg text-slate-300 dark:text-slate-600">
                      cancel
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                      {row.thytus}
                    </span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.competitor === true ? (
                    <span className="material-symbols-outlined text-lg text-emerald-500">
                      check_circle
                    </span>
                  ) : row.competitor === false ? (
                    <span className="material-symbols-outlined text-lg text-slate-300 dark:text-slate-600">
                      cancel
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                      {row.competitor}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Thytus wins */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
              Why teams choose Thytus
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why teams choose Thytus over {comp.name.split(" /")[0]}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {comp.thytusWins.map((win) => (
              <div
                key={win}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border"
              >
                <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {win}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Ready to switch from {comp.name.split(" /")[0]}?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            See why teams are choosing Thytus as their AI workspace.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="inline-flex px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
