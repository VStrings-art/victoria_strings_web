/** Google Ads tag for victoriastrings.com. */
export const GOOGLE_ADS_ID = "AW-18335637445";

/**
 * Conversion actions defined in the Ads account. The labels were supplied
 * bare; a send_to is always `<ads id>/<label>`, so they are prefixed here.
 */
export const CONVERSIONS = {
  enquiryForm: `${GOOGLE_ADS_ID}/i4MBCLDEpPYcEMW_jqdE`,
  whatsapp: `${GOOGLE_ADS_ID}/4CTBCLPEpPYcEMW_jqdE`,
  email: `${GOOGLE_ADS_ID}/3zoGCLbEpPYcEMW_jqdE`,
} as const;

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/**
 * Reports a conversion. Safe to call before the tag loads, and when a visitor
 * blocks it — the call is simply dropped rather than throwing mid-click.
 */
export function trackConversion(sendTo: (typeof CONVERSIONS)[keyof typeof CONVERSIONS]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: sendTo });
}
