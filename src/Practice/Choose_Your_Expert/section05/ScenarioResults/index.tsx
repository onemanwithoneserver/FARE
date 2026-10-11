import Desktop from "./desktop";
import Mobile from "./mobile";
import type { ScenarioResultsProps } from "./data";

export default function ScenarioResults(props: ScenarioResultsProps) {
  return props.isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
}

export { Desktop, Mobile };
export * from "./data";
