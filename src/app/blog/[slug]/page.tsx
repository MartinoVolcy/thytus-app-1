import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300 pt-20">
      <Navbar />

      {/* Post Header */}
      <section className="pt-16 pb-10 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-elevated px-2.5 py-1 rounded-full"
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

          <div className="flex items-center gap-4 pb-10">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0">
              <span className="text-slate-500 dark:text-slate-400 font-bold text-base">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <a
                href={post.author.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
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
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={mdxComponents}
          />
        </div>
      </section>

      {/* Author Card */}
      <section className="py-16 border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-base/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0">
                <span className="text-slate-500 dark:text-slate-400 font-bold text-lg">
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
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
      <section className="py-20 md:py-24 border-t border-slate-100 dark:border-dark-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Ready to run your own experiment?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Put multiple AI models to work in the same session and see what happens.
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
