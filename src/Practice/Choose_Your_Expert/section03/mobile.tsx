import FilterPanel, { type FilterPanelProps } from "./panel";
import { Section } from "../../ui";

export default function Mobile(props: FilterPanelProps) {
  return (
    <Section tone="white" mobile ariaLabel="Filters" className="!pt-3 !pb-2">
      <FilterPanel {...props} compact />
    </Section>
  );
}
