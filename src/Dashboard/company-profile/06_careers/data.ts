import { careersData, type CareerOpening } from "../data";

export type { CareerOpening };
export { careersData };

export const careerDepartments = [
  "All",
  "Sales & Closings",
  "Channel Partners",
  "Operations",
  "Marketing",
] as const;
