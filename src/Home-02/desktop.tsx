import Section01Desktop from "./01_section/desktop";
import Section02Desktop from "./02_section/desktop";

export default function HomeDesktop() {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit']">
      <div className="w-full shrink-0">
        <Section01Desktop />
      </div>
      <div className="w-full shrink-0">
        <Section02Desktop />
      </div>
    </div>
  );
}
