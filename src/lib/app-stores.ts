/** Dummy store links until App Store / Play Store listings go live. */
export const APP_STORE_URL = "https://apps.apple.com/app/thytus";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.thytus.app";
export const DEMO_URL = "https://cal.com/martino-volcy-phwgox/thytus-demo";

export type MobilePlatform = "ios" | "android" | null;

export function detectMobilePlatform(
  userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "",
): MobilePlatform {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return null;
}

export function storeUrlForPlatform(platform: MobilePlatform): string | null {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return PLAY_STORE_URL;
  return null;
}
