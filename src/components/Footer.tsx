import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-white dark:bg-dark-base border-t border-gray-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
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
            <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
              Spend less time at the desk.
            </p>
          </div>

          {/* Product */}
          {/* <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/compare" className="hover:text-primary transition-colors">Why Thytus</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div> */}

          {/* Use Cases */}
          {/* <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Use Cases</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/ai-collaboration-platform" className="hover:text-primary transition-colors">AI Collaboration Platform</Link></li>
              <li><Link href="/ai-tools-for-sales-teams" className="hover:text-primary transition-colors">AI for Sales Teams</Link></li>
              <li><Link href="/ai-tools-for-marketing-teams" className="hover:text-primary transition-colors">AI for Marketing Teams</Link></li>
              <li><Link href="/ai-research-assistant" className="hover:text-primary transition-colors">AI Research Assistant</Link></li>
              <li><Link href="/ai-tools-for-small-business" className="hover:text-primary transition-colors">AI for Small Business</Link></li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="https://showcase.thytus.com/v1/guides" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="https://showcase.thytus.com/v1/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div> */}

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="https://x.com/showcase__ai" className="hover:text-primary transition-colors">Twitter</Link></li>
              <li><Link href="https://www.linkedin.com/company/thytus/" className="hover:text-primary transition-colors">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-dark-border pt-8 text-center text-sm text-slate-400 dark:text-slate-500 font-medium">
          © 2026 Thytus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
