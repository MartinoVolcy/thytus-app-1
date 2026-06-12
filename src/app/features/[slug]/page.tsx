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
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400">
              {tool.icon}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            {tool.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {tool.tagline}
          </p>
        </div>
      </section>

      {/* Overview + Screenshot */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center mb-12 max-w-2xl mx-auto">
            {tool.description}
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm">
            <Image
              src={tool.image}
              alt={`${tool.title} in Thytus`}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-12">
            What this tool delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tool.content.map((item) => (
              <div
                key={item.heading}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400">
                    {tool.icon}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">
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

      {/* Use cases */}
      <section className="py-16 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block text-center">
            Use cases
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-10">
            What you can do
          </h2>
          <div className="space-y-4">
            {tool.features.map((feature, i) => (
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
            Use {tool.title} in your workspace
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Bring your team and AI agents into one place. No extra tools, no context switching.
          </p>
          <Link
            href="https://showcase.thytus.com/v1/sessions"
            className="inline-flex px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-none font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
