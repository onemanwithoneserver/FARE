import { motion } from "motion/react";
import { Target, Users, Settings, Filter, Star, Clock, UserCheck } from "lucide-react";
import { data } from "./data";
import mockExpertHero from "../../../assets/mock_expert_hero_bg.jpg";
import { ACCENTS, IconBadge, SecondaryButton, fadeUp, staggerContainer } from "../../ui";

const CHIP_ICONS = [Target, Filter, Star, Clock];

export default function Mobile() {
  const s = data;
  const chips = ["Compare Experience", "Filter by Language", "Check Availability", "Read Reviews"];

  return (
    <section
      aria-label="Choose Your Mock Expert"
      className="w-full relative overflow-hidden font-['Outfit']"
      style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 62%, #E6EEFF 100%)" }}
    >
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[90px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.2)" }} />

      <motion.div
        variants={staggerContainer(0.07, 0.05)}
        initial="hidden"
        animate="show"
        className="relative z-10 pt-8 pb-12 px-5 flex flex-col items-start"
      >
        <motion.span variants={fadeUp} className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-5">
          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#6366F1,#4F46E5)" }}>
            <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping bg-[#4F46E5]/40" />
            <UserCheck size={11} strokeWidth={2.6} className="relative" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A]/75 leading-none">Choose Your Expert</span>
        </motion.span>

        <motion.h1 variants={fadeUp} className="text-[2rem] font-black text-[#0B1D3A] tracking-[-0.02em] leading-[1.1] mb-3">
          {s.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="text-[17px] font-bold leading-snug mb-4">
          <span className="gold-gradient-text">{s.subtitle}</span>
        </motion.p>

        <motion.p variants={fadeUp} className="text-[14.5px] text-[#475569] font-medium leading-[1.7] mb-5">
          {s.description}
        </motion.p>

        <motion.div variants={fadeUp} className="relative w-full mb-6">
          <div className="w-full rounded-[20px] overflow-hidden luxury-shadow-float border border-white">
            <img src={mockExpertHero} alt="Choose your real estate mock expert" className="w-full h-[230px] object-cover object-[center_30%]" />
            <div aria-hidden="true" className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-[#0B1D3A]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute left-3 bottom-3 glass-light rounded-[12px] pl-2 pr-3.5 py-2 flex items-center gap-2.5 animate-float">
            <IconBadge icon={UserCheck} accent={ACCENTS[3]} size="xs" interactive={false} />
            <span className="text-[12px] font-bold text-[#0B1D3A]">Top Experts</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white/70 backdrop-blur-md rounded-[16px] border border-[#E6EBF3] p-5 luxury-shadow-sm w-full mb-7">
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

        <motion.ul variants={fadeUp} className="w-full grid grid-cols-2 gap-2.5">
          {chips.map((c, i) => (
            <li key={c} className="flex items-center gap-2.5 bg-white/80 border border-[#E6EBF3] rounded-[12px] p-2.5 text-[12px] font-semibold text-[#0B1D3A]/85 leading-snug">
              <IconBadge icon={CHIP_ICONS[i % CHIP_ICONS.length]} accent={ACCENTS[[1, 3, 2, 5][i % 4]]} size="xs" interactive={false} />
              {c}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
