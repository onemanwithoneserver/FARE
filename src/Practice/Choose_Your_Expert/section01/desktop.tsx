import { motion } from "motion/react";
import { Target, Users, Settings } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, SecondaryButton, Section, IconBadge } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Page Header">
      <div className="max-w-[1200px] mx-auto w-full pt-10 pb-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col md:flex-row gap-10 items-start md:items-center justify-between"
        >
          {/* Left Text */}
          <div className="flex-1 max-w-[640px]">
            <motion.h1
              variants={fadeUp}
              className="text-[3rem] lg:text-[3.6rem] font-black tracking-[-0.025em] leading-[1.04] text-[#0B1D3A] mb-5"
            >
              {s.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[20px] lg:text-[22px] font-bold leading-snug mb-4">
              <span className="gold-gradient-text">{s.subtitle}</span>
            </motion.p>
            <motion.p variants={fadeUp} className="text-[16px] font-medium text-[#475569] leading-relaxed max-w-[560px]">
              {s.description}
            </motion.p>
          </div>

          {/* Right Scenario Card */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-[440px] bg-white rounded-[16px] border border-[#E6EBF3] p-6 luxury-shadow-sm shrink-0"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#475569]">Selected Scenario</span>
              <IconBadge icon={Target} accent={ACCENTS[4]} size="sm" interactive={false} />
            </div>
            
            <h3 className="text-[22px] font-bold text-[#0B1D3A] mb-3 leading-tight">{s.scenarioInfo.title}</h3>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#E11D48]/10 text-[#BE123C] text-[13px] font-bold">
                <Target size={14} />
                {s.scenarioInfo.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#0B1D3A]/5 text-[#0B1D3A] text-[13px] font-bold">
                <Users size={14} />
                {s.scenarioInfo.role}
              </span>
            </div>

            <SecondaryButton full icon={Settings}>{s.cta}</SecondaryButton>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
