import { SUPPORT_MAILTO } from "@/lib/contact";

export default function SupportContact() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-dark-border dark:bg-dark-card sm:p-6">
      <a
        href={SUPPORT_MAILTO}
        className="inline-flex items-center justify-center rounded-none bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Email support
      </a>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Email support opens the mail app on your phone or computer with a message already addressed
        to us.
      </p>
    </div>
  );
}
