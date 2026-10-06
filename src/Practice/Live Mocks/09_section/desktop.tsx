import { motion } from "motion/react";
import { Video, Target, MessageSquare } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const ICONS = [Target, Video, MessageSquare];
const TONES = [ACCENTS[7], ACCENTS[3], ACCENTS[5]];

export default function Desktop() {
  const s = data.duringSession;
  const flowSteps = s.practiceFlow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="tint" ariaLabel="During the session">
      <SectionHeader eyebrow="The Experience" icon={Video} accent={ACCENTS[3]} title={s.title} />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        {s.phases.map((phase, i) => {
          const a = TONES[i];
          const isMiddle = i === 1;
          return (
            <motion.article
              key={phase.title}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-[20px] p-8 flex flex-col items-center text-center luxury-shadow-sm ${
                isMiddle ? "bg-white border-2 border-[#E6EBF3] shadow-[0_12px_40px_-12px_rgba(11,29,58,0.1)] -mt-4 mb-4" : "bg-white/60 border border-[#E6EBF3] backdrop-blur-sm"
              }`}
            >
              {isMiddle && (
                <div aria-hidden="true" className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[50px] pointer-events-none" style={{ background: a.glow }} />
              )}
              <IconBadge icon={ICONS[i]} accent={a} size="lg" className="mb-6" />
              <h3 className={`text-[20px] font-bold text-[#0B1D3A] mb-4 leading-snug`}>{phase.title}</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed font-medium">{phase.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.3}>
        <FlowStrip steps={flowSteps} highlight="ROLE PLAY" />
      </Reveal>
    </Section>
  );
}
