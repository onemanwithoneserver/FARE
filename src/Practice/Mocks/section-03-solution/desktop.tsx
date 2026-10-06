import { motion } from "motion/react";
import { MousePointerClick, Calendar, User, MessageCircle, PlayCircle, Lightbulb } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer, accentAt } from "../../ui";

const flowIcons = [MousePointerClick, Calendar, User, MessageCircle, PlayCircle];

export default function Desktop() {
  const sectionData = data.solution;
  
  return (
    <Section tone="navy" ariaLabel="The Solution">
      <SectionHeader eyebrow="The Solution" icon={Lightbulb} accent={ACCENTS[7]} title={sectionData.title} description={sectionData.description} dark />

      <div className="relative mt-20 mb-12 max-w-[1240px] mx-auto">
        {/* Track Line */}
        <div aria-hidden="true" className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
        <motion.div
          aria-hidden="true"
          className="absolute top-6 left-[10%] right-[10%] h-[2px] z-0 origin-left"
          style={{ background: "linear-gradient(90deg, #C99A2E, #E4C46A, #C99A2E)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.ol
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative z-10 flex justify-between items-start"
        >
          {sectionData.flow.map((item, index) => {
            const a = accentAt(index);
            const Icon = flowIcons[index];
            return (
              <motion.li key={index} variants={fadeScale} className="relative flex flex-col items-center flex-1 px-2 group">
                <div className="relative mb-6">
                  <IconBadge icon={Icon} accent={a} size="md" className="group-hover:-translate-y-1.5 transition-transform duration-500 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#0B1D3A] border border-[#C99A2E] flex items-center justify-center text-[10px] font-black text-white z-20 transition-transform duration-500 group-hover:scale-110"
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-[#E2C068] uppercase mb-2">
                  {item.step}
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2.5 leading-snug text-center transition-colors duration-300 group-hover:text-[#E2C068]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-white/60 leading-relaxed max-w-[200px] font-medium text-center">
                  {item.desc}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
}
