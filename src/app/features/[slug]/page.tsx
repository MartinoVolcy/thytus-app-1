import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { workspaceTools } from "@/data/workspace-tools";

export function generateStaticParams() {
  return workspaceTools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = workspaceTools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.title} | Thytus Features`,
    description: tool.tagline,
    openGraph: {
      title: `${tool.title} | Thytus Features`,
      description: tool.tagline,
      images: [{ url: tool.image, alt: `${tool.title} screenshot` }],
    },
    twitter: {
      title: tool.title,
      description: tool.tagline,
    },
  };
}

export default async function WorkspaceToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = workspaceTools.find((t) => t.slug === slug);
  if (!tool) notFound();

  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mx-auto mb-6`}>
            <span className="material-symbols-outlined text-3xl">
              {tool.icon}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {tool.title}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {tool.tagline}
          </p>
        </div>
      </section>

      {/* Description + Screenshot */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center mb-12">
            {tool.description}
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border shadow-lg">
            <Image
              src={tool.image}
              alt={`${tool.title} screenshot`}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50/50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Key Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tool.content.map((item) => (
              <div
                key={item.heading}
                className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-2xl">
                    {tool.icon}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              What you can do
            </h2>
          </div>
          <div className="space-y-6">
            {tool.features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border dark-glow"
              >
                <div className={`w-10 h-10 rounded-xl ${tool.color} flex items-center justify-center shrink-0 mt-0.5`}>
                  <span className="font-extrabold text-sm">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Try the {tool.title} today
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Get started for free and experience {tool.title.toLowerCase()} powered by collaborative AI.
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
