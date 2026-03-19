import Image from "next/image";
import type { MDXComponents } from "mdx/types";

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      {src ? (
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border shadow-sm">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="w-full aspect-video rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mb-2 block">
              image
            </span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              {alt}
            </span>
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="text-center text-sm text-slate-400 dark:text-slate-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-12 mb-4">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-dark-elevated rounded-r-xl px-6 py-5 my-8 [&>p]:text-slate-700 dark:[&>p]:text-slate-200 [&>p]:leading-relaxed [&>p]:whitespace-pre-line [&>p]:mb-0">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 my-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 my-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
      {children}
    </ol>
  ),
  Figure,
};
