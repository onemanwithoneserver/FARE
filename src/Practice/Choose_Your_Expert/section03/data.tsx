export interface FilterableExpert {
  role: string;
  experience: string;
  reExperience?: string;
  specialisedIn: string[];
  canPractise: string[];
  languages: string[];
  nextAvailable: string;
}

const haystack = (e: FilterableExpert) =>
  [e.role, e.reExperience ?? "", ...e.specialisedIn, ...e.canPractise].join(" ").toLowerCase();

const KEYWORDS: Record<string, RegExp> = {
  Residential: /residential|apartment|villa|gated|homebuyer|home/,
  Plotted: /plot|land|layout|farmland/,
  Commercial: /commercial|leasing|b2b|retail|tech park/,
  "Corporate Real Estate": /corporate|c-suite|institutional/,
  "Sales Skills": /sales|closing|negotiation|objection/,
  "Digital & Technology": /virtual|digital|remote|online/,
  Communication: /presentation|communication|follow-up|pitch/,
  "Leadership & Management": /manager|team lead|lead|senior/,
  "Customer Experience": /customer|trust|consult/,
  Marketing: /marketing|campaign|lead gen/,
  "Product & Project Knowledge": /project|layout|valuation|villa|product|roi/,
  "Functional Skills": /analysis|profiling|follow-up|site visit/,
};

const years = (e: FilterableExpert) => parseInt(e.experience.match(/\d+/)?.[0] ?? "0", 10);

const MATCHERS: Record<string, Record<string, (e: FilterableExpert) => boolean>> = {
  "RE Segment": {},
  Expertise: {},
  "Delivery Mode": {
    "1-on-1 Live Video": () => true,
    "Group Simulation": () => false,
    "Audio Role-Play": () => false,
  },
  Availability: {
    Today: (e) => e.nextAvailable.toLowerCase().includes("today"),
    Tomorrow: (e) => e.nextAvailable.toLowerCase().includes("tomorrow"),
    "This Weekend": () => true,
    "Choose Date": () => true,
  },
  Language: {
    English: (e) => e.languages.includes("English"),
    Telugu: (e) => e.languages.includes("Telugu"),
    Hindi: (e) => e.languages.includes("Hindi"),
    Marathi: (e) => e.languages.includes("Marathi"),
    Other: (e) => e.languages.some((l) => !["English", "Telugu", "Hindi", "Marathi"].includes(l)),
  },
  Experience: {
    "3–5 Years": (e) => years(e) >= 3 && years(e) <= 5,
    "5–10 Years": (e) => years(e) > 5 && years(e) < 10,
    "10+ Years": (e) => years(e) >= 10,
  },
};

function optionMatches(group: string, option: string, e: FilterableExpert): boolean {
  const fn = MATCHERS[group]?.[option];
  if (fn) return fn(e);
  const re = KEYWORDS[option];
  return re ? re.test(haystack(e)) : true;
}

export function matchesFilters(e: FilterableExpert, selected: ReadonlySet<string>): boolean {
  if (selected.size === 0) return true;
  return data.filters.every((g) => {
    const picked = g.options.filter((o) => selected.has(o));
    return picked.length === 0 || picked.some((o) => optionMatches(g.name, o, e));
  });
}

export const data = {
  title: "Filters",
  searchPlaceholder: "Search by name, expertise, RE segment...",
  filters: [
    {
      name: "RE Segment",
      options: ["Residential", "Plotted", "Commercial", "Corporate Real Estate"],
    },
    {
      name: "Expertise",
      options: [
        "Sales Skills",
        "Digital & Technology",
        "Communication",
        "Leadership & Management",
        "Customer Experience",
        "Marketing",
        "Product & Project Knowledge",
        "Functional Skills",
      ],
    },
    {
      name: "Delivery Mode",
      options: ["1-on-1 Live Video", "Group Simulation", "Audio Role-Play"],
    },
    {
      name: "Availability",
      options: ["Today", "Tomorrow", "This Weekend", "Choose Date"],
    },
    {
      name: "Language",
      options: ["English", "Telugu", "Hindi", "Marathi", "Other"],
    },
    {
      name: "Experience",
      options: ["3–5 Years", "5–10 Years", "10+ Years"],
    },
  ],
};
