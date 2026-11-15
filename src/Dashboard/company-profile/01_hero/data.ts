import { companyHeroData, type CompanyStat } from "../data";

export type { CompanyStat };

export const heroData = {
  ...companyHeroData,
  category: "Tier-1 Real Estate Developer & Mandate Partner",
  established: "Est. 2012 · Hyderabad",
  website: "www.horizonrealty.fare.in",
  highlightChips: [
    "100% Clear-Title Layouts",
    "48-Hr Partner Payouts",
    "SBI & HDFC Approved",
  ],
};

export const statAccentMap: Record<
  "indigo" | "gold" | "cyan" | "emerald",
  { bar: string; iconBg: string }
> = {
  indigo: {
    bar: "from-[#6366F1] to-[#4F46E5]",
    iconBg: "from-[#6366F1] to-[#4F46E5]",
  },
  gold: {
    bar: "from-[#C99A2E] to-[#B88A22]",
    iconBg: "from-[#C99A2E] to-[#B88A22]",
  },
  cyan: {
    bar: "from-[#06B6D4] to-[#0891B2]",
    iconBg: "from-[#06B6D4] to-[#0891B2]",
  },
  emerald: {
    bar: "from-[#10B981] to-[#059669]",
    iconBg: "from-[#10B981] to-[#059669]",
  },
};
