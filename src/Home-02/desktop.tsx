import Section01Desktop from "../Home/01_section/desktop";
import Section02Desktop from "./02_section/desktop";

export default function HomeDesktop() {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit']">
      <Section01Desktop />
      <Section02Desktop />
    </div>
  );
}
