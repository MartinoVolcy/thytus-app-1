import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="py-24 relative bg-white dark:bg-dark-base" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Youre Team. Multiple Agents. <span className="text-gradient-blue">One workspace.</span>
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

        {/* Features strip */}
        <div className="grid md:grid-cols-3 gap-16 mt-24">
          <div className="group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">
                sync_alt
              </span>
            </div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
              Autonomous Sync
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Agents automatically update your project state based on
              real-time conversations and code changes.
            </p>
          </div>
          <div className="group">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/15 rounded-xl flex items-center justify-center mb-8 border border-purple-100 dark:border-purple-500/20 group-hover:bg-purple-600 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors">
                psychology
              </span>
            </div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
              Contextual Intelligence
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Your agents learn from your team's past decisions, ensuring
              every output aligns with your unique style.
            </p>
          </div>
          <div className="group">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/15 rounded-xl flex items-center justify-center mb-8 border border-emerald-100 dark:border-emerald-500/20 group-hover:bg-emerald-600 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors">
                security
              </span>
            </div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
              Enterprise Privacy
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Enterprise-grade encryption and SOC2 compliance. Your proprietary
              data never leaves your workspace.
            </p>
          </div>
        </div>
      </div>

      {/* Enhance Team Collaboration */}
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
            Built for Teams
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Enhance Team <span className="text-gradient-blue">Collaboration</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your team can communicate, react, and make decisions together without AI getting in the way.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card dark-glow text-center">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-2xl text-blue-600 dark:text-blue-400">
                alternate_email
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
              @Mentions &amp; Reactions
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Tag teammates and react to messages without AI interference. Keep human conversations human.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card dark-glow text-center">
            <div className="w-14 h-14 bg-violet-100 dark:bg-violet-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-2xl text-violet-600 dark:text-violet-400">
                poll
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
              Polls
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Send quick polls to gauge team input and make decisions together, right inside the session.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card dark-glow text-center">
            <div className="w-14 h-14 bg-teal-100 dark:bg-teal-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-2xl text-teal-600 dark:text-teal-400">
                forum
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
              Reply Threads
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Keep side conversations in threaded replies so the main chat stays clean and focused.
            </p>
          </div>
        </div>
      </div>

      {/* Easy to Use */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3 block">
            Easy to Use
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Simply tell an agent to <span className="text-gradient-purple">get it done</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Create slides, documents, spreadsheets, images, videos, and more, all from a single workspace.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {[
            { icon: "slideshow", label: "Slides", href: "/features/slides", color: "orange" },
            { icon: "edit_document", label: "Docs", href: "/features/text-editor", color: "purple" },
            { icon: "table_chart", label: "Spreadsheets", href: "/features/spreadsheets", color: "green" },
            { icon: "image", label: "Images", href: "/features/media-generation", color: "pink" },
            { icon: "videocam", label: "Videos", href: "/features/media-generation", color: "red" },
            { icon: "podcasts", label: "Podcasts", href: "/features/media-generation", color: "violet" },
            { icon: "code", label: "Code", href: "/features/code-editor", color: "cyan" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary/40 dark:hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-500/15 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className={`material-symbols-outlined text-2xl text-${item.color}-600 dark:text-${item.color}-400`}>
                  {item.icon}
                </span>
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
