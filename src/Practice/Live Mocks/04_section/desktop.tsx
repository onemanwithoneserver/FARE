import { motion } from "motion/react";
import { MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle, Lightbulb } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../ui";

const ICONS = [MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle];

export default function Desktop() {
  const s = data.howItWorks;
  const flowSteps = s.coreFlow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="soft" ariaLabel="How it works">
      <SectionHeader eyebrow="How It Works" icon={Lightbulb} accent={ACCENTS[7]} title={s.title} />

      <div className="relative mt-20 mb-24 max-w-[1100px] mx-auto">
        {/* Track Line */}
        <div aria-hidden="true" className="absolute top-6 left-[8%] right-[8%] h-[2px] bg-[#E2E8F0] z-0" />
        <motion.div
          aria-hidden="true"
          className="absolute top-6 left-[8%] right-[8%] h-[2px] z-0 origin-left"
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
          {s.steps.map((step, i) => {
            const a = accentAt(i);
            return (
              <motion.li key={step.step} variants={fadeScale} className="relative flex flex-col items-center flex-1 px-2 group">
                <div className="relative mb-6">
                  <IconBadge icon={ICONS[i]} accent={a} size="md" className="group-hover:-translate-y-1.5 transition-transform duration-500" />
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-white border border-[#E6EBF3] luxury-shadow-sm flex items-center justify-center text-[10px] font-black text-[#0B1D3A] z-20 transition-transform duration-500 group-hover:scale-110"
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2.5 leading-snug text-center transition-colors duration-300 group-hover:text-[#C99A2E]">
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-[#475569] leading-relaxed max-w-[180px] font-medium text-center">
                  {step.desc}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      <Reveal delay={0.6}>
        <FlowStrip steps={flowSteps} />
      </Reveal>
    </Section>
  );
}
