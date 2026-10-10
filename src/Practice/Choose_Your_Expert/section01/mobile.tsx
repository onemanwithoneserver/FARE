import { motion } from "motion/react";
import { Target, Users, Settings } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, SecondaryButton, Section, IconBadge } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Page Header">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <motion.h1
            variants={fadeUp}
            className="text-[2.2rem] font-black tracking-[-0.02em] leading-tight text-[#0B1D3A] mb-4"
          >
            {s.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[17px] font-bold leading-snug mb-3">
            <span className="gold-gradient-text">{s.subtitle}</span>
          </motion.p>
          <motion.p variants={fadeUp} className="text-[14.5px] font-medium text-[#475569] leading-relaxed">
            {s.description}
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 luxury-shadow-sm w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#475569]">Selected Scenario</span>
            <IconBadge icon={Target} accent={ACCENTS[4]} size="xs" interactive={false} />
          </div>
          
          <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3 leading-tight">{s.scenarioInfo.title}</h3>
          
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-[4px] bg-[#E11D48]/10 text-[#BE123C] text-[12px] font-bold">
              <Target size={12} />
              {s.scenarioInfo.type}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] text-[12px] font-bold">
              <Users size={12} />
              {s.scenarioInfo.role}
            </span>
          </div>

          <SecondaryButton full mobile icon={Settings}>{s.cta}</SecondaryButton>
        </motion.div>
      </motion.div>
    </Section>
  );
}
