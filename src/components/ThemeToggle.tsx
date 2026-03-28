"use client";

import { useEffect, useState } from "react";

type ThemePref = "system" | "light" | "dark";

export default function ThemeToggle() {
  const [pref, setPref] = useState<ThemePref>("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemePref | null;
    if (stored === "light" || stored === "dark") {
      setPref(stored);
    }

    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  function cycle() {
    const next: ThemePref =
      pref === "system" ? "dark" : pref === "dark" ? "light" : "system";

    setPref(next);

    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }

    window.dispatchEvent(new Event("theme-change"));
  }

  const icon = isDark ? "light_mode" : "dark_mode";
  const title =
    pref === "system"
      ? "Theme: System"
      : pref === "dark"
        ? "Theme: Dark"
        : "Theme: Light";

  return (
    <button
      onClick={cycle}
      title={title}
      className="w-9 h-9 flex items-center justify-center rounded-none border border-transparent hover:border-slate-200 dark:hover:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-elevated transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white"
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </button>
  );
}
