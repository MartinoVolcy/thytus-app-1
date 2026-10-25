"use client";

import { useState } from "react";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/contact";

export default function SupportContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
    } catch {
      const input = document.createElement("textarea");
      input.value = SUPPORT_EMAIL;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-dark-border dark:bg-dark-card sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Email
      </p>
      <p className="mt-2 break-all font-display text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
        {SUPPORT_EMAIL}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={SUPPORT_MAILTO}
          className="inline-flex items-center justify-center rounded-none bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Email support
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center rounded-none border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-dark-elevated dark:text-slate-100 dark:hover:bg-dark-border"
        >
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Email support opens the mail app on your phone or computer with a message already addressed
        to us. If nothing opens, copy the address and paste it into Mail, Gmail, or Outlook.
      </p>
    </div>
  );
}
