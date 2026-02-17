import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-sky-50 dark:bg-dark-base border-t border-sky-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/Thytus_Logo.png"
                alt="Thytus Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white font-display">
              Thytus
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              Twitter
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              LinkedIn
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
          </div>
          <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            © 2026 Thytus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
