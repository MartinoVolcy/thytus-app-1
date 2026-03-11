import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative bg-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Give your team the ability to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            start succeeding with AI.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bring every human and every AI agent into <span className="text-white font-bold">one shared workspace</span> so knowledge is never lost.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-md hover:scale-105 transition-transform shadow-2xl hover:bg-blue-50"
          >
            Get Started for Free
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-slate-500">
          <Link href="/ai-collaboration-platform" className="hover:text-white transition-colors">AI Collaboration Platform</Link>
          <Link href="/ai-tools-for-sales-teams" className="hover:text-white transition-colors">AI for Sales Teams</Link>
          <Link href="/ai-tools-for-marketing-teams" className="hover:text-white transition-colors">AI for Marketing</Link>
          <Link href="/ai-research-assistant" className="hover:text-white transition-colors">AI Research Assistant</Link>
          <Link href="/ai-tools-for-small-business" className="hover:text-white transition-colors">AI for Small Business</Link>
        </div>
      </div>
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
    </section>
  );
}
