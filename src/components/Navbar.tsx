import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Image
              src="/Thytus_Logo.png"
              alt="Thytus Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
            Thytus
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-600 dark:text-slate-300">
          
          <div className="relative dropdown-group py-4 group">
            <button className="nav-link hover:text-primary transition-colors flex items-center gap-1">
              Features{" "}
              <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl shadow-xl shadow-gray-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-4 z-50">
              <div className="mb-2 px-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Overview</span>
              </div>
              <div className="grid grid-cols-2 gap-1 mb-3">
                <Link href="/features#capabilities" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Capabilities</Link>
                <Link href="/features#context-tracking" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Context Tracking</Link>
                <Link href="/features#agent-collaboration" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Agent Collaboration</Link>
                <Link href="/features#model-agnostic" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Model Agnostic</Link>
              </div>
              <div className="border-t border-gray-100 dark:border-dark-border pt-3 mt-1">
                <div className="mb-2 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Workspace Tools</span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <Link href="/features/file-window" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">File Window</Link>
                  <Link href="/features/text-editor" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Text Editor</Link>
                  <Link href="/features/spreadsheets" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Spreadsheets</Link>
                  <Link href="/features/slides" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Slides</Link>
                  <Link href="/features/code-editor" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Code Editor</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative dropdown-group py-4 group">
            <button className="nav-link hover:text-primary transition-colors flex items-center gap-1">
              Solutions{" "}
              <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-[420px] bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl shadow-xl shadow-gray-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-3 z-50">
              <div className="grid grid-cols-2 gap-1">
                <Link href="/solutions/small-business" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Small Business</Link>
                <Link href="/solutions/legal" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Legal</Link>
                <Link href="/solutions/product-teams" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Product</Link>
                <Link href="/solutions/marketing" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Marketing</Link>
                <Link href="/solutions/research-academia" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Research</Link>
                <Link href="/solutions/sales" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Sales</Link>
                <Link href="/solutions/education" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Education</Link>
                <Link href="/solutions/healthcare" className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Healthcare</Link>
              </div>
            </div>
          </div>
          <Link
            href="/pricing"
            className="nav-link hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <div className="relative dropdown-group py-4 group">
            <button className="nav-link hover:text-primary transition-colors flex items-center gap-1">
              Resources{" "}
              <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl shadow-xl shadow-gray-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-2 z-50">
              <Link
                href="https://showcase.thytus.com/v1/guides"
                className="block px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm"
                >
                Documentation
              </Link>
              <a
                className="block px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle/>
          <Link
            href="https://showcase.thytus.com/v1/auth/signin"
            className="btn-pill bg-primary hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-md shadow-sky-500/20 dark:shadow-sky-500/30 flex items-center gap-2"
          >
            Get Started
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
