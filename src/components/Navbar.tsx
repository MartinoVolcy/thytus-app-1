"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadAppButton, { BookDemoButton } from "@/components/DownloadAppButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
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

          <div className="hidden lg:flex items-center gap-3">
            <DownloadAppButton variant="nav" showArrow />
            <BookDemoButton variant="nav" />
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-white dark:bg-dark-base transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 dark:border-dark-border">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
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
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[26px]">close</span>
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-5rem)] overflow-y-auto">
          <div className="px-6 pt-6 pb-4 flex flex-col gap-3">
            <DownloadAppButton variant="sidebar" onAfterClick={closeMenu} />
            <BookDemoButton variant="sidebar" onAfterClick={closeMenu} />
          </div>
        </div>
      </div>
    </>
  );
}
