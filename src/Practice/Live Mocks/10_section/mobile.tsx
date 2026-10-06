import { Repeat } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, Reveal, Section, SectionHeader } from "../ui";

export default function Mobile() {
  const s = data.multiplePractice;
  const flowSteps = s.flow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="soft" mobile ariaLabel="Multiple practice attempts">
      <SectionHeader mobile eyebrow="Keep Practising" icon={Repeat} accent={ACCENTS[2]} title={s.title} description={s.description} />
      
      <Reveal delay={0.1}>
        <FlowStrip steps={flowSteps} mobile highlight="Feedback" />
      </Reveal>
    </Section>
  );
}
