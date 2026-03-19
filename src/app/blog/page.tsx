import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, experiments, and insights on AI collaboration, multi-model agents, and team productivity from the Thytus community.",
  openGraph: {
    title: "Blog | Thytus",
    description:
      "Stories, experiments, and insights on AI collaboration and team productivity from the Thytus community.",
  },
};

export default function BlogPage() {
  const blogPosts = getAllPosts();
  return (
    <div className="bg-slate-50 dark:bg-dark-base text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 transition-colors duration-300 pt-20">
      <Navbar />

      <section className="pt-24 pb-16 border-b border-slate-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3 block">
            Insights
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Stories, experiments, and insights from the people building and using Thytus.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:shadow-lg hover:border-slate-300/80 dark:hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-elevated px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {post.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-elevated flex items-center justify-center shrink-0">
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">
                        {post.author.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {post.author.name}
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500">
                        {post.date} &middot; {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
