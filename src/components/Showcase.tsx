import Image from "next/image";

export default function Showcase() {
  return (
    <section className="py-24 relative bg-slate-50" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight">
            Multiple agents. One workspace.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The collaborative workspace where teams and AI agents work side by
            side. Deploy multiple autonomous agents on tasks simultaneously,
            while your team edits, reviews, and creates all in real time.
          </p>
        </div>
        <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-200/40 mx-auto max-w-6xl ring-1 ring-slate-900/5">
          <div className="h-11 border-b border-slate-100 bg-slate-50 flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
            </div>
            <div className="bg-white border border-slate-200 rounded px-3 py-1 text-[11px] text-slate-400 font-medium shadow-sm flex items-center gap-1.5 min-w-[200px] justify-center">
              <span className="material-symbols-outlined text-[12px]">
                lock
              </span>
              app.Showcase.com/workspace
            </div>
            <div className="w-10"></div>
          </div>
          <div className="relative overflow-hidden group border-t border-slate-100">
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
