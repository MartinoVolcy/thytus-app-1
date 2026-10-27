import { z } from "zod";

export const WAITLIST_PLATFORMS = ["ios", "android"] as const;
export type WaitlistPlatform = (typeof WAITLIST_PLATFORMS)[number];

export const PLATFORM_LABELS: Record<WaitlistPlatform, string> = {
  ios: "iOS",
  android: "Android",
};

export function parseWaitlistPlatform(value: string | null | undefined): WaitlistPlatform | null {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  if (normalized === "ios" || normalized === "iphone" || normalized === "apple") return "ios";
  if (normalized === "android" || normalized === "play" || normalized === "google") return "android";
  return null;
}

export function waitlistPathForPlatform(platform: WaitlistPlatform) {
  return `/waitlist?platform=${platform}`;
}

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(254, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(30, "Phone number is too long")
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  platform: z.enum(WAITLIST_PLATFORMS, {
    message: "Select iOS or Android",
  }),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
