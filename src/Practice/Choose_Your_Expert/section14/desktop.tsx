import { motion } from "motion/react";
import { Target, Users, Clock, Calendar, CreditCard, CheckCircle, Video, MessageSquare, RefreshCw, ChevronDown, type LucideIcon } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, IconBadge, accentAt, VIEWPORT } from "../../ui";

const ICON_MAP: Record<string, LucideIcon> = {
  Target, Users, Clock, Calendar, CreditCard, CheckCircle, Video, MessageSquare, RefreshCw,
};

export default function Desktop() {
  const s = data;

  return (
    <Section tone="tint" ariaLabel="Recommended Final Flow">
      <SectionHeader
        eyebrow="User Flow"
        icon={RefreshCw}
        accent={ACCENTS[2]}
        title={s.title}
      />

      <div className="max-w-[680px] mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-col items-center"
        >
          {s.steps.map((step, i) => {
            const a = accentAt(i);
            const Ic = ICON_MAP[step.icon] || Target;
            return (
              <motion.div key={step.step} variants={fadeUp} className="flex flex-col items-center w-full">
                <div className="w-full flex items-center gap-5 bg-white rounded-[16px] border border-[#E6EBF3] p-5 luxury-shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                  <IconBadge icon={Ic} accent={a} size="md" interactive={false} />
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-[#0B1D3A]">{step.step}</span>
                    {step.sub && <span className="text-[13px] font-medium text-[#475569] mt-0.5">{step.sub}</span>}
                  </div>
                </div>
                {i < s.steps.length - 1 && (
                  <ChevronDown size={20} className="text-[#CBD5E1] my-2" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
