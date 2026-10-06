import { motion } from "motion/react";
import { MousePointerClick, Calendar, User, MessageCircle, PlayCircle, Lightbulb } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer, accentAt } from "../../ui";

const flowIcons = [MousePointerClick, Calendar, User, MessageCircle, PlayCircle];

export default function Mobile() {
  const sectionData = data.solution;
  
  return (
    <Section tone="navy" mobile ariaLabel="The Solution">
      <SectionHeader mobile eyebrow="The Solution" icon={Lightbulb} accent={ACCENTS[7]} title={sectionData.title} description={sectionData.description} dark />

      <div className="relative mb-12 ml-2">
        <div aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-[2px] bg-white/10 z-0" />
        <motion.div
          aria-hidden="true"
          className="absolute left-5 top-5 bottom-5 w-[2px] z-0 origin-top"
          style={{ background: "linear-gradient(180deg, #C99A2E, #E4C46A, #C99A2E)" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.ol
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative z-10 flex flex-col gap-6"
        >
          {sectionData.flow.map((item, index) => {
            const a = accentAt(index);
            const Icon = flowIcons[index];
            return (
              <motion.li key={index} variants={fadeScale} className="relative flex items-start gap-5">
                <div className="relative shrink-0 pt-1">
                  <IconBadge icon={Icon} accent={a} size="sm" interactive={false} className="border-white/20" />
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#0B1D3A] border border-[#C99A2E] flex items-center justify-center text-[9px] font-black text-white z-20"
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="pt-1.5 pb-1">
                  <div className="text-[9px] font-bold tracking-widest text-[#E2C068] uppercase mb-1">
                    {item.step}
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
}
