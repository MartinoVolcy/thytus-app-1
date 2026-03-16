"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type Section = "features" | "solutions" | "resources" | null;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<Section>(null);

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
    setOpenSection(null);
  }, []);

  const toggleSection = useCallback((s: Section) => {
    setOpenSection((prev) => (prev === s ? null : s));
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-600 dark:text-slate-300">
            <div className="relative dropdown-group py-4 group">
              <button className="nav-link hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                Features{" "}
                <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl shadow-xl shadow-slate-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-4 z-50">
                <div className="mb-2 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Overview</span>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  <Link href="/features#capabilities" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Capabilities</Link>
                  <Link href="/features#context-tracking" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Context Tracking</Link>
                  <Link href="/features#agent-collaboration" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Agent Collaboration</Link>
                  <Link href="/features#model-agnostic" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Model Agnostic</Link>
                </div>
                <div className="border-t border-slate-100 dark:border-dark-border pt-3 mt-1">
                  <div className="mb-2 px-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Workspace Tools</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <Link href="/features/file-window" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">File Window</Link>
                    <Link href="/features/text-editor" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Text Editor</Link>
                    <Link href="/features/spreadsheets" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Spreadsheets</Link>
                    <Link href="/features/slides" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Slides</Link>
                    <Link href="/features/code-editor" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Code Editor</Link>
                    <Link href="/features/media-generation" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Media Generation</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative dropdown-group py-4 group">
              <button className="nav-link hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                Solutions{" "}
                <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-[420px] bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl shadow-xl shadow-slate-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-3 z-50">
                <div className="grid grid-cols-2 gap-1">
                  <Link href="/solutions/small-business" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Small Business</Link>
                  <Link href="/solutions/legal" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Legal</Link>
                  <Link href="/solutions/product-teams" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Product</Link>
                  <Link href="/solutions/marketing" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Marketing</Link>
                  <Link href="/solutions/research-academia" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Research</Link>
                  <Link href="/solutions/sales" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Sales</Link>
                  <Link href="/solutions/education" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Education</Link>
                  <Link href="/solutions/healthcare" className="block px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg transition-colors text-sm text-slate-700 dark:text-slate-300 font-medium">Healthcare</Link>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="nav-link hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/enterprise"
              className="nav-link hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Enterprise
            </Link>
            <div className="relative dropdown-group py-4 group">
              <button className="nav-link hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                Resources{" "}
                <span className="material-symbols-outlined text-sm opacity-50 transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border rounded-2xl shadow-xl shadow-slate-200/30 dark:shadow-black/40 opacity-0 invisible translate-y-2 p-2 z-50">
                <Link
                  href="/compare"
                  className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Why us
                </Link>
                <Link
                  href="https://showcase.thytus.com/v1/guides"
                  className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Documentation
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-dark-elevated rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://showcase.thytus.com/v1/sessions"
              className="btn-pill bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors shadow-lg flex items-center gap-2"
            >
              Get Started
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Mobile: hamburger */}
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

      {/* ===== Mobile overlay (outside nav to avoid backdrop-filter containment) ===== */}
      <div
        className={`fixed inset-0 z-[100] bg-white dark:bg-dark-base transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
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

        {/* Scrollable body */}
        <div className="flex flex-col h-[calc(100%-5rem)] overflow-y-auto">
          <div className="flex-1 px-6 py-4">
            {/* Features */}
            <MobileDropdown
              label="Features"
              isOpen={openSection === "features"}
              onToggle={() => toggleSection("features")}
            >
              <div className="mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Overview
                </span>
              </div>
              <MobileLink href="/features#capabilities" onClick={closeMenu}>Capabilities</MobileLink>
              <MobileLink href="/features#context-tracking" onClick={closeMenu}>Context Tracking</MobileLink>
              <MobileLink href="/features#agent-collaboration" onClick={closeMenu}>Agent Collaboration</MobileLink>
              <MobileLink href="/features#model-agnostic" onClick={closeMenu}>Model Agnostic</MobileLink>
              <div className="mt-4 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Workspace Tools
                </span>
              </div>
              <MobileLink href="/features/file-window" onClick={closeMenu}>File Window</MobileLink>
              <MobileLink href="/features/text-editor" onClick={closeMenu}>Text Editor</MobileLink>
              <MobileLink href="/features/spreadsheets" onClick={closeMenu}>Spreadsheets</MobileLink>
              <MobileLink href="/features/slides" onClick={closeMenu}>Slides</MobileLink>
              <MobileLink href="/features/code-editor" onClick={closeMenu}>Code Editor</MobileLink>
              <MobileLink href="/features/media-generation" onClick={closeMenu}>Media Generation</MobileLink>
            </MobileDropdown>

            {/* Solutions */}
            <MobileDropdown
              label="Solutions"
              isOpen={openSection === "solutions"}
              onToggle={() => toggleSection("solutions")}
            >
              <MobileLink href="/solutions/small-business" onClick={closeMenu}>Small Business</MobileLink>
              <MobileLink href="/solutions/legal" onClick={closeMenu}>Legal</MobileLink>
              <MobileLink href="/solutions/product-teams" onClick={closeMenu}>Product</MobileLink>
              <MobileLink href="/solutions/marketing" onClick={closeMenu}>Marketing</MobileLink>
              <MobileLink href="/solutions/research-academia" onClick={closeMenu}>Research</MobileLink>
              <MobileLink href="/solutions/sales" onClick={closeMenu}>Sales</MobileLink>
              <MobileLink href="/solutions/education" onClick={closeMenu}>Education</MobileLink>
              <MobileLink href="/solutions/healthcare" onClick={closeMenu}>Healthcare</MobileLink>
            </MobileDropdown>

            {/* Resources */}
            <MobileDropdown
              label="Resources"
              isOpen={openSection === "resources"}
              onToggle={() => toggleSection("resources")}
            >
              <MobileLink href="/compare" onClick={closeMenu}>Why us</MobileLink>
              <MobileLink href="https://showcase.thytus.com/v1/guides" onClick={closeMenu}>Documentation</MobileLink>
              <MobileLink href="/blog" onClick={closeMenu}>Blog</MobileLink>
            </MobileDropdown>

            {/* Pricing (plain link) */}
            <Link
              href="/pricing"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-dark-border text-lg font-semibold text-slate-900 dark:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/enterprise"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-dark-border text-lg font-semibold text-slate-900 dark:text-white"
            >
              Enterprise
            </Link>
          </div>

          {/* Footer CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-slate-100 dark:border-dark-border mt-auto">
            <Link
              href="https://showcase.thytus.com/v1/sessions"
              onClick={closeMenu}
              className="block w-full text-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 py-3.5 rounded-full text-[15px] font-semibold transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Helper components ─────────────────────────── */

function MobileDropdown({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-100 dark:border-dark-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-lg font-semibold text-slate-900 dark:text-white"
      >
        {label}
        <span
          className={`material-symbols-outlined text-xl text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-4 pl-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2.5 text-[15px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
