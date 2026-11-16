export type SponsorBrandId =
  | "northstone"
  | "kalpavana"
  | "riverbend"
  | "skyline"
  | "greenacre"
  | "amaravana";

export interface SponsorBrandConfig {
  id: SponsorBrandId;
  name: string;
  title: string;
  subtitle: string;
  bg: string;
  titleColor: string;
  subtitleColor: string;
  accentColor: string;
}

export const SPONSOR_BRANDS: Record<SponsorBrandId, SponsorBrandConfig> = {
  northstone: {
    id: "northstone",
    name: "Northstone Projects",
    title: "Northstone",
    subtitle: "PROJECTS",
    bg: "#1B355A",
    titleColor: "#E0AB38",
    subtitleColor: "#E2E8F0",
    accentColor: "#E0AB38",
  },
  kalpavana: {
    id: "kalpavana",
    name: "Kalpavana Group",
    title: "Kalpavana",
    subtitle: "GROUP",
    bg: "#19542C",
    titleColor: "#8CE26E",
    subtitleColor: "#E2F5EA",
    accentColor: "#8CE26E",
  },
  riverbend: {
    id: "riverbend",
    name: "Riverbend Layouts",
    title: "Riverbend",
    subtitle: "LAYOUTS",
    bg: "#125E73",
    titleColor: "#D8F5FF",
    subtitleColor: "#CBEAF2",
    accentColor: "#D8F5FF",
  },
  skyline: {
    id: "skyline",
    name: "Skyline Plotworks",
    title: "Skyline",
    subtitle: "PLOTWORKS",
    bg: "#6E2711",
    titleColor: "#F7C873",
    subtitleColor: "#FCE8D5",
    accentColor: "#F3B552",
  },
  greenacre: {
    id: "greenacre",
    name: "Greenacre Developers",
    title: "Greenacre",
    subtitle: "DEVELOPERS",
    bg: "#435E1B",
    titleColor: "#F5D061",
    subtitleColor: "#ECF5D6",
    accentColor: "#F5D061",
  },
  amaravana: {
    id: "amaravana",
    name: "Amaravana Estates",
    title: "Amaravana",
    subtitle: "ESTATES",
    bg: "#4B1953",
    titleColor: "#EBD5F0",
    subtitleColor: "#E5D0EB",
    accentColor: "#EBD5F0",
  },
};
