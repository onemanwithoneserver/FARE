import { motion } from "motion/react";
import { Search, Compass, Users, UserCheck, Calendar, Video, Target, MessageSquare, Repeat } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../ui";

const ICONS = [Search, Compass, Users, UserCheck, Calendar, Video, Target, MessageSquare, Repeat];

export default function Desktop() {
  const s = data.learnerJourney;

  return (
    <Section tone="soft" ariaLabel="Learner Journey">
      <SectionHeader eyebrow="The Journey" icon={Compass} accent={ACCENTS[2]} title={s.title} />

      <div className="relative max-w-[1240px] mx-auto mt-20 mb-16">
        <div aria-hidden="true" className="absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-[#E2E8F0]" />
        
        <motion.ol
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative z-10 flex justify-between"
        >
          {s.steps.map((step, i) => {
            const a = accentAt(i);
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.li key={step.step} variants={fadeScale} className="flex flex-col items-center flex-1 px-1 group">
                <div className="relative mb-5 bg-white p-1 rounded-full">
                  <IconBadge icon={Icon} accent={a} size="md" className="group-hover:-translate-y-1 transition-transform duration-300" />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0B1D3A] text-white text-[10px] font-black flex items-center justify-center border border-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-[12px] font-bold text-[#0B1D3A]/50 tracking-widest uppercase mb-1.5">{step.step}</h3>
                <p className="text-[14.5px] font-bold text-[#0B1D3A] leading-snug text-center transition-colors group-hover:text-[#C99A2E]">{step.label}</p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
}
