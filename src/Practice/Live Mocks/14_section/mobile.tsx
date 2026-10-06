import { motion } from "motion/react";
import { Search, Compass, Users, UserCheck, Calendar, Video, Target, MessageSquare, Repeat } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../ui";

const ICONS = [Search, Compass, Users, UserCheck, Calendar, Video, Target, MessageSquare, Repeat];

export default function Mobile() {
  const s = data.learnerJourney;

  return (
    <Section tone="soft" mobile ariaLabel="Learner Journey">
      <SectionHeader mobile eyebrow="The Journey" icon={Compass} accent={ACCENTS[2]} title={s.title} />

      <div className="relative ml-4 mt-6 mb-8">
        <div aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-[2px] bg-[#E2E8F0]" />
        
        <motion.ol variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="relative z-10 flex flex-col gap-7">
          {s.steps.map((step, i) => {
            const a = accentAt(i);
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.li key={step.step} variants={fadeUp} className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="bg-white p-1 rounded-full inline-block">
                    <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                  </div>
                  <span className="absolute 0 top-0 -right-1 w-4 h-4 rounded-full bg-[#0B1D3A] text-white text-[9px] font-black flex items-center justify-center border border-white">
                    {i + 1}
                  </span>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[10px] font-bold text-[#0B1D3A]/50 tracking-widest uppercase mb-0.5">{step.step}</span>
                  <span className="text-[15px] font-bold text-[#0B1D3A]">{step.label}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
}
