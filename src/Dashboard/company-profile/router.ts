/**
 * Centralized Common Router for the About the Company experience.
 * Handles canonical URL resolution, new-tab opening, and in-app navigation.
 */

export const COMPANY_PROFILE_PATH = "company-profile";

export interface CompanyProfileRouteOptions {
  companyName?: string;
  mode?: "desktop" | "mobile";
  inWindow?: boolean;
}

function getNormalizedCurrentPath(): string {
  if (typeof window === "undefined") return "";
  const rawBase = import.meta.env.BASE_URL || "/";
  const basePrefix = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  let pathname = window.location.pathname;
  if (basePrefix && pathname.startsWith(basePrefix)) {
    pathname = pathname.slice(basePrefix.length) || "/";
  }
  return pathname + window.location.search;
}

/**
 * Builds the canonical relative URL for the company profile without query parameters.
 */
export function buildCompanyProfileUrl(options?: CompanyProfileRouteOptions): string {
  let detectedMode: "desktop" | "mobile" = "desktop";
  if (options?.mode) {
    detectedMode = options.mode;
  } else if (typeof window !== "undefined") {
    if (window.location.pathname.includes("/mobile/")) {
      detectedMode = "mobile";
    } else if (window.location.pathname.includes("/desktop/")) {
      detectedMode = "desktop";
    } else if (window.innerWidth < 768) {
      detectedMode = "mobile";
    }
  }

  return `/${detectedMode}/${COMPANY_PROFILE_PATH}`;
}

/**
 * Opens the company profile in a new browser tab.
 * Respects Vite's base path for GitHub Pages and production hosting.
 */
export function openCompanyProfileInWindow(
  companyName?: string,
  mode?: "desktop" | "mobile"
): Window | null {
  if (typeof window === "undefined") return null;

  // Persist invoking path so that clicking back returns to the page where it was invoked
  const currentPath = getNormalizedCurrentPath();
  if (currentPath && !currentPath.includes(COMPANY_PROFILE_PATH)) {
    try {
      sessionStorage.setItem("fare_company_profile_return_url", currentPath);
      localStorage.setItem("fare_company_profile_return_url", currentPath);
    } catch {
      // ignore
    }
  }

  if (companyName) {
    try {
      sessionStorage.setItem("fare_company_profile_name", companyName);
      localStorage.setItem("fare_company_profile_name", companyName);
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

  // Use an anchor with target="_blank" to reliably open in a new browser tab
  try {
    const link = document.createElement("a");
    link.href = fullUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return window;
  } catch {
    return window.open(fullUrl, "_blank");
  }
}

/**
 * Unified Common Router function for opening / navigating to Company Profile.
 * By default, opens in a new tab per user requirement.
 */
export function openCompanyProfile(
  companyName?: string,
  options?: { inWindow?: boolean; mode?: "desktop" | "mobile" }
) {
  const currentPath = getNormalizedCurrentPath();
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
    openCompanyProfileInWindow(companyName, options?.mode);
    return;
  }

  // Only used when inWindow is explicitly false:
  window.dispatchEvent(
    new CustomEvent("open-fare-company-profile", {
      detail: { companyName, inWindow: false, returnUrl: currentPath },
    })
  );
}

/**
 * Backwards-compatible dispatch helper used across Dashboard sub-pages.
 * Always opens the Company Profile page in a new tab.
 */
export function dispatchOpenCompanyProfile(companyName?: string) {
  openCompanyProfile(companyName, { inWindow: true });
}
