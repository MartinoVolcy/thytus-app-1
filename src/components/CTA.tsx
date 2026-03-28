import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-dark-base border-t border-slate-100/80 dark:border-dark-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 text-slate-900 dark:text-white tracking-tight">
          Give your team the ability to
          <br />
          <span className="text-slate-700 dark:text-slate-200">
            start succeeding with AI.
          </span>
        </h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bring every human and every AI agent into{" "}
          <span className="font-semibold text-slate-900 dark:text-slate-100">one shared workspace</span> so context and decisions stay in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="https://showcase.thytus.com/v1/sessions"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-none font-semibold text-sm md:text-[15px] hover:bg-slate-800 dark:hover:bg-slate-200 transition-transform shadow-lg hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
