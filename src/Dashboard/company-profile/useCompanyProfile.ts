import { useState, useEffect } from "react";
import {
  openCompanyProfile as commonOpenCompanyProfile,
  openCompanyProfileInWindow,
  buildCompanyProfileUrl,
  dispatchOpenCompanyProfile as commonDispatchOpenCompanyProfile,
  COMPANY_PROFILE_PATH,
  type CompanyProfileRouteOptions,
} from "./router";

export type { CompanyProfileRouteOptions };
export {
  openCompanyProfileInWindow,
  buildCompanyProfileUrl,
  COMPANY_PROFILE_PATH,
};

export interface CompanyProfileViewState {
  isOpen: boolean;
  companyName?: string;
}

/**
 * Common dispatch function used across Dashboard sub-pages.
 * Opens in a new window by default ("it should open in window. give one common router").
 */
export const dispatchOpenCompanyProfile = commonDispatchOpenCompanyProfile;

/**
 * Listens for "open-fare-company-profile" events when active (e.g. root Dashboard
 * or standalone sub-pages rendered without the root Dashboard shell).
 */
export function useCompanyProfile(enabled = true) {
  const [state, setState] = useState<CompanyProfileViewState>({
    isOpen: false,
    companyName: undefined,
  });

  useEffect(() => {
    if (!enabled) return;

    const handleOpen = (e: Event) => {
      const custom = e as CustomEvent<{ companyName?: string }>;
      setState({
        isOpen: true,
        companyName: custom.detail?.companyName,
      });
    };

    const handleAdAction = (e: Event) => {
      const custom = e as CustomEvent<{ action?: "apply" | "join"; title?: string }>;
      if (custom.detail?.action === "join") {
        setState({
          isOpen: true,
          companyName: custom.detail?.title,
        });
      }
    };

    window.addEventListener("open-fare-company-profile", handleOpen);
    window.addEventListener("open-fare-ad-action", handleAdAction);
    return () => {
      window.removeEventListener("open-fare-company-profile", handleOpen);
      window.removeEventListener("open-fare-ad-action", handleAdAction);
    };
  }, [enabled]);

  const openCompanyProfile = (companyName?: string) => {
    commonOpenCompanyProfile(companyName, { inWindow: true });
    setState({ isOpen: true, companyName });
  };

  const closeCompanyProfile = () =>
    setState({ isOpen: false, companyName: undefined });

  return {
    companyProfileState: state,
    openCompanyProfile,
    closeCompanyProfile,
  };
}
