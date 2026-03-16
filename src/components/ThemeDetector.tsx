"use client";

import { useEffect } from "react";

function applyTheme(dark: boolean, animate = false) {
  if (animate) {
    document.documentElement.classList.add("theme-transition");
  }
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  if (animate) {
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);
  }
}

function resolveAndApply(animate = false) {
  // Force light mode regardless of stored or system preference
  applyTheme(false, animate);
}

export default function ThemeDetector() {
  useEffect(() => {
    resolveAndApply();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      // Always switch back to light if system toggles to dark
      applyTheme(false, true);
    };
    mq.addEventListener("change", onSystemChange);

    const onManualChange = () => resolveAndApply(true);
    window.addEventListener("theme-change", onManualChange);

    return () => {
      mq.removeEventListener("change", onSystemChange);
      window.removeEventListener("theme-change", onManualChange);
    };
  }, []);

  return null;
}
