import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, type ContentBlock } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Thytus Blog`,
    description: post.subtitle,
    openGraph: {
      title: `${post.title} | Thytus Blog`,
      description: post.subtitle,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
    },
  };
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-xl px-6 py-5 my-8">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
            {block.text}
          </p>
        </blockquote>
      );
    case "image":
      if (!block.src) {
        return (
          <figure className="my-8">
            <div className="w-full aspect-video rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mb-2 block">image</span>
                <span className="text-sm text-slate-400 dark:text-slate-500">{block.alt}</span>
              </div>
            </div>
            {block.caption && (
              <figcaption className="text-center text-sm text-slate-400 dark:text-slate-500 mt-3">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      return (
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-dark-border shadow-sm">
            <Image
              src={block.src}
              alt={block.alt}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-slate-400 dark:text-slate-500 mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol className="list-decimal list-inside space-y-2 my-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="list-disc list-inside space-y-2 my-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-white dark:bg-dark-base text-text-dark dark:text-slate-200 antialiased selection:bg-primary/20 pt-20">
      <Navbar />

      {/* Post Header */}
      <section className="pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-400 dark:text-slate-500 hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-4 pb-10 border-b border-gray-100 dark:border-dark-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-base">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <a
                href={post.author.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
              >
                {post.author.name}
              </a>
              <div className="text-xs text-slate-400 dark:text-slate-500">
                {post.date} &middot; {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Body */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {post.content.map((block, i) => (
            <ContentRenderer key={i} block={block} />
          ))}
        </div>
      </section>

      {/* Author Card */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-gray-50/50 dark:bg-dark-card border border-gray-100 dark:border-dark-border">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-lg">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                  {post.author.name}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {post.author.role}
                </div>
                <a
                  href={post.author.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Connect on LinkedIn
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to run your own experiment?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Put multiple AI models to work in the same session and see what happens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://showcase.thytus.com/v1/auth/signin"
              className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Get Started for Free
            </Link>
            <Link
              href="/compare"
              className="inline-flex px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Why Thytus?
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-slate-500">
            <Link href="/ai-collaboration-platform" className="hover:text-white transition-colors">AI Collaboration Platform</Link>
            <Link href="/ai-tools-for-sales-teams" className="hover:text-white transition-colors">AI for Sales Teams</Link>
            <Link href="/ai-tools-for-marketing-teams" className="hover:text-white transition-colors">AI for Marketing</Link>
            <Link href="/ai-research-assistant" className="hover:text-white transition-colors">AI Research Assistant</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
