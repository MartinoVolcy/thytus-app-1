import Image from "next/image";

export default function Showcase() {
  return (
    <section className="py-24 relative bg-white dark:bg-dark-base" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Multiple agents. <span className="text-gradient-blue">One workspace.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The collaborative workspace where teams and AI agents work <span className="font-bold text-slate-700 dark:text-slate-200">side by side</span>. Deploy multiple autonomous agents on tasks simultaneously,
            while your team edits, reviews, and creates in <span className="font-bold text-primary">real time</span>.
          </p>
        </div>
          <div className="relative rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card overflow-hidden shadow-2xl shadow-gray-200/40 dark:shadow-black/50 mx-auto max-w-6xl ring-1 ring-gray-900/5 dark:ring-sky-400/5">
          <div className="h-11 border-b border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-dark-surface flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-300 dark:bg-red-400/80 border border-red-400/50 dark:border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-400/80 border border-yellow-400/50 dark:border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-300 dark:bg-green-400/80 border border-green-400/50 dark:border-green-500/50"></div>
            </div>
            <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border rounded px-3 py-1 text-[11px] text-slate-400 font-medium shadow-sm flex items-center gap-1.5 min-w-[200px] justify-center">
              <span className="material-symbols-outlined text-[12px]">
                lock
              </span>
              showcase.thytus.com
            </div>
            <div className="w-10"></div>
          </div>
          <div className="relative overflow-hidden group border-t border-gray-100 dark:border-dark-border">
            <Image
              src="/Thytus-Visual-Demo.webp"
              alt="Thytus product demo"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
