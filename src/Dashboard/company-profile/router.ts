/**
 * Centralized Common Router for the About the Company experience.
 * Handles canonical URL resolution, new-window opening, and in-app navigation.
 */

export const COMPANY_PROFILE_PATH = "company-profile";

export interface CompanyProfileRouteOptions {
  companyName?: string;
  mode?: "desktop" | "mobile";
  inWindow?: boolean;
}

/**
 * Builds the canonical relative URL for the company profile without query parameters.
 */
export function buildCompanyProfileUrl(options?: CompanyProfileRouteOptions): string {
  const mode =
    options?.mode ||
    (typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop");

  return `/${mode}/${COMPANY_PROFILE_PATH}`;
}

/**
 * Opens the company profile in a new browser window.
 * Respects Vite's base path for GitHub Pages and production hosting.
 */
export function openCompanyProfileInWindow(
  companyName?: string,
  mode?: "desktop" | "mobile"
): Window | null {
  if (typeof window === "undefined") return null;

  // Persist invoking path so that clicking back returns to the page where it was invoked
  const currentPath = window.location.pathname + window.location.search;
  if (!currentPath.includes(COMPANY_PROFILE_PATH)) {
    try {
      sessionStorage.setItem("fare_company_profile_return_url", currentPath);
      localStorage.setItem("fare_company_profile_return_url", currentPath);
    } catch {
      // ignore
    }
  }

  const relativeUrl = buildCompanyProfileUrl({
    companyName,
    mode,
    inWindow: true,
  });

  const rawBase = import.meta.env.BASE_URL || "/";
  const baseUrl = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  const fullUrl = `${window.location.origin}${baseUrl}${relativeUrl}`;

  const newWindow = window.open(fullUrl, "_blank");

  return newWindow;
}

/**
 * Unified Common Router function for opening / navigating to Company Profile.
 * By default, opens in a new window per user requirement ("it should open in window").
 */
export function openCompanyProfile(
  companyName?: string,
  options?: { inWindow?: boolean; mode?: "desktop" | "mobile" }
) {
  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname + window.location.search
      : "";
  if (currentPath && !currentPath.includes(COMPANY_PROFILE_PATH)) {
    try {
      sessionStorage.setItem("fare_company_profile_return_url", currentPath);
      localStorage.setItem("fare_company_profile_return_url", currentPath);
    } catch {
      // ignore
    }
  }

  const shouldOpenInWindow = options?.inWindow ?? true;

  if (shouldOpenInWindow) {
    const opened = openCompanyProfileInWindow(companyName, options?.mode);
    if (opened) return;
  }

  // Fallback if popup was blocked or in-window was explicitly disabled:
  window.dispatchEvent(
    new CustomEvent("open-fare-company-profile", {
      detail: { companyName, inWindow: false, returnUrl: currentPath },
    })
  );
}

/**
 * Backwards-compatible dispatch helper used across Dashboard sub-pages.
 * Automatically delegates to openCompanyProfileInWindow.
 */
export function dispatchOpenCompanyProfile(companyName?: string) {
  openCompanyProfile(companyName, { inWindow: true });
}
