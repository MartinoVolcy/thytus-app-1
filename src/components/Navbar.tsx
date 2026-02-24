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
          
          <Link
            href="/features"
            className="nav-link hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/solutions"
            className="nav-link hover:text-primary transition-colors"
          >
            Solutions
          </Link>
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
          <ThemeToggle />
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
