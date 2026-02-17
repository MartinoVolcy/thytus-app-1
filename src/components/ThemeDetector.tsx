"use client";

import { useEffect } from "react";

export default function ThemeDetector() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    function apply(dark: boolean) {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    apply(mq.matches);

    mq.addEventListener("change", (e) => apply(e.matches));

    return () => {
      mq.removeEventListener("change", (e) => apply(e.matches));
    };
  }, []);

  return null;
}
