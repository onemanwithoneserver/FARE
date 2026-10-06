import { Repeat } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, Reveal, Section, SectionHeader } from "../../ui";

export default function Desktop() {
  const s = data.multiplePractice;
  const flowSteps = s.flow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="soft" ariaLabel="Multiple practice attempts">
      <SectionHeader eyebrow="Keep Practising" icon={Repeat} accent={ACCENTS[2]} title={s.title} description={s.description} />
      
      <Reveal delay={0.1}>
        <FlowStrip steps={flowSteps} highlight="Feedback" />
      </Reveal>
    </Section>
  );
}
