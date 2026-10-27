"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  PLATFORM_LABELS,
  WAITLIST_PLATFORMS,
  parseWaitlistPlatform,
  waitlistSchema,
  type WaitlistPlatform,
} from "@/lib/waitlist";

type FormState = {
  name: string;
  email: string;
  phone: string;
  platform: WaitlistPlatform | "";
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

export default function WaitlistForm() {
  const searchParams = useSearchParams();
  const platformFromUrl = useMemo(
    () => parseWaitlistPlatform(searchParams.get("platform")),
    [searchParams],
  );
  const showPlatformSelect = !platformFromUrl;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    platform: platformFromUrl ?? "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      platform: platformFromUrl ?? form.platform,
    };

    const parsed = waitlistSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in nextErrors)) {
          nextErrors[key as keyof FormState] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Check the form and try again.");
      return;
    }

    setStatus("loading");
    setFieldErrors({});

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        code?: string;
      };

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the waitlist. We'll reach out when your platform is ready.");
      setForm({
        name: "",
        email: "",
        phone: "",
        platform: platformFromUrl ?? "",
      });
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-dark-border dark:bg-dark-card sm:p-8">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          You&apos;re on the list
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{message}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="mt-5 inline-flex items-center justify-center rounded-none border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-dark-elevated dark:text-slate-100 dark:hover:bg-dark-border"
        >
          Join with another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-dark-border dark:bg-dark-card sm:p-8"
      noValidate
    >
      {platformFromUrl ? (
        <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
          Joining for{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {PLATFORM_LABELS[platformFromUrl]}
          </span>
        </p>
      ) : null}

      <div className="space-y-4">
        <div>
          <label htmlFor="waitlist-name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900 dark:border-slate-600 dark:bg-dark-elevated dark:text-white dark:focus:border-slate-300"
            placeholder="Jordan Lee"
          />
          {fieldErrors.name ? (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fieldErrors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="waitlist-email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900 dark:border-slate-600 dark:bg-dark-elevated dark:text-white dark:focus:border-slate-300"
            placeholder="you@company.com"
          />
          {fieldErrors.email ? (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fieldErrors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="waitlist-phone" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Phone
          </label>
          <input
            id="waitlist-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900 dark:border-slate-600 dark:bg-dark-elevated dark:text-white dark:focus:border-slate-300"
            placeholder="(555) 123-4567"
          />
          {fieldErrors.phone ? (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fieldErrors.phone}</p>
          ) : null}
        </div>

        {showPlatformSelect ? (
          <div>
            <label
              htmlFor="waitlist-platform"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Platform
            </label>
            <select
              id="waitlist-platform"
              name="platform"
              value={form.platform}
              onChange={(e) => updateField("platform", e.target.value)}
              className="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-900 dark:border-slate-600 dark:bg-dark-elevated dark:text-white dark:focus:border-slate-300"
            >
              <option value="">Select iOS or Android</option>
              {WAITLIST_PLATFORMS.map((platform) => (
                <option key={platform} value={platform}>
                  {PLATFORM_LABELS[platform]}
                </option>
              ))}
            </select>
            {fieldErrors.platform ? (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fieldErrors.platform}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      {status === "error" && message ? (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-none bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
      </button>
    </form>
  );
}
