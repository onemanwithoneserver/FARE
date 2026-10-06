import { motion } from "motion/react";
import { Video, Target, MessageSquare } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

const ICONS = [Target, Video, MessageSquare];
const TONES = [ACCENTS[7], ACCENTS[3], ACCENTS[5]];

export default function Mobile() {
  const s = data.duringSession;
  const flowSteps = s.practiceFlow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="tint" mobile ariaLabel="During the session">
      <SectionHeader mobile eyebrow="The Experience" icon={Video} accent={ACCENTS[3]} title={s.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mb-12">
        {s.phases.map((phase, i) => {
          const a = TONES[i];
          const isMiddle = i === 1;
          return (
            <motion.article
              key={phase.title}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-[16px] p-5 flex flex-col luxury-shadow-sm ${
                isMiddle ? "bg-white border border-[#E6EBF3] shadow-[0_8px_24px_-8px_rgba(11,29,58,0.1)]" : "bg-white/60 border border-[#E6EBF3]/70"
              }`}
            >
              {isMiddle && (
                <div aria-hidden="true" className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] pointer-events-none" style={{ background: a.glow }} />
              )}
              <div className="flex items-center gap-4 mb-3.5 relative z-10">
                <IconBadge icon={ICONS[i]} accent={a} size="sm" interactive={false} />
                <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-snug">{phase.title}</h3>
              </div>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-medium relative z-10">
                {phase.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.2}>
        <FlowStrip steps={flowSteps} mobile highlight="ROLE PLAY" />
      </Reveal>
    </Section>
  );
}
