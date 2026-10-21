import Section01Mobile from "../Home/01_section/mobile";
import Section02Mobile from "./02_section/mobile";

export default function HomeMobile() {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit']">
      <Section01Mobile />
      <Section02Mobile />
    </div>
  );
}
