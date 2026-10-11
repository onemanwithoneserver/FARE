import type { ReactNode } from "react";
import type { Scenario } from "../../section04/data";
import type { Expert } from "../data";

export interface ScenarioResultsProps {
  isMobile: boolean;
  scenarios: Scenario[];
  searchQuery: string;
  onClearSearch: () => void;
  onFindExperts: (keyword: string) => void;
  onPractice: (expert: Expert) => void;
}

export interface ScenarioCardProps {
  scenario: Scenario;
  index: number;
  onFindExperts: (keyword: string) => void;
  onPractice: (expert: Expert) => void;
}

export interface MetaProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const scenarioResultsLabels = {
  emptyTitle: "No Scenarios Found",
  getEmptyDescription: (query: string) =>
    `No scenarios for this question match “${query}”. Try a different keyword or pick another question.`,
  clearSearch: "Clear Search",
  personaTitle: "Customer Persona",
  skillsTitle: "Skills You'll Practise",
  verifiedExperts: "Verified experts available",
  viewExperts: "View Experts",
  bookSession: "Book Session",
  formatLabel: "Live Role-Play",
};
