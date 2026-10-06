import { motion } from "motion/react";
import { MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle, Lightbulb } from "lucide-react";
import { data } from "../data";
import { ACCENTS, FlowStrip, IconBadge, Reveal, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../ui";

const ICONS = [MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle];

export default function Mobile() {
  const s = data.howItWorks;
  const flowSteps = s.coreFlow.split("→").map(x => x.trim()).filter(Boolean);

  return (
    <Section tone="soft" mobile ariaLabel="How it works">
      <SectionHeader mobile eyebrow="How It Works" icon={Lightbulb} accent={ACCENTS[7]} title={s.title} />

      <div className="relative mb-12 ml-2">
        <div aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-[2px] bg-[#E2E8F0] z-0" />
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
          {s.steps.map((step, i) => {
            const a = accentAt(i);
            return (
              <motion.li key={step.step} variants={fadeScale} className="relative flex items-start gap-5">
                <div className="relative shrink-0 pt-1">
                  <IconBadge icon={ICONS[i]} accent={a} size="sm" interactive={false} />
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1.5 w-4.5 h-4.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm flex items-center justify-center text-[9px] font-black text-[#0B1D3A] z-20"
                  >
                    {step.step.replace('0','')}
                  </span>
                </div>
                <div className="pt-2 pb-1">
                  <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      <Reveal delay={0.3}>
        <FlowStrip steps={flowSteps} mobile />
      </Reveal>
    </Section>
  );
}
