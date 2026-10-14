import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Clock, Video, Target, MessageSquare, Radio, ArrowRight, ChevronRight, Play } from "lucide-react";
import { data } from "../data";
import liveMocksHero from "../../../assets/live_mocks_hero.jpg";
import { ACCENTS, IconBadge, accentAt, fadeUp, staggerContainer } from "../../ui";
import VideoModal from "../../../Components/Forms/VideoModal";

const CHIP_ICONS = [Clock, Video, Target, MessageSquare];

export default function Mobile() {
  const s = data.hero;
  const navigate = useNavigate();
  const location = useLocation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const mode = location.pathname.startsWith("/mobile") ? "mobile" : "desktop";

  const handleExploreScenarios = () => {
    navigate(`/${mode}/choose-your-expert?tab=scenarios`);
  };

  const [lead, stepsLine = ""] = s.description.split("\n\n");
  const steps = stepsLine.split(".").map((x) => x.trim()).filter(Boolean);
  const chips = s.supportingLine.split("|").map((x) => x.trim());

  return (
    <section
      aria-label="FARE Live Mock Sessions"
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
          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#FB7185,#E11D48)" }}>
            <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping bg-[#E11D48]/40" />
            <Radio size={11} strokeWidth={2.6} className="relative" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A]/75 leading-none">Live Practice Sessions</span>
        </motion.span>

        <motion.h1 variants={fadeUp} className="text-[2rem] font-black text-[#0B1D3A] tracking-[-0.02em] leading-[1.1] mb-3">
          {s.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="text-[17px] font-bold leading-snug mb-4">
          <span className="gold-gradient-text">{s.subtitle}</span>
        </motion.p>

        <motion.p variants={fadeUp} className="text-[14.5px] text-[#475569] font-medium leading-[1.7] mb-5">
          {lead}
        </motion.p>

        <motion.div variants={fadeUp} className="relative w-full mb-6">
          <div className="w-full rounded-[20px] overflow-hidden luxury-shadow-float border border-white relative">
            <img src={liveMocksHero} alt="Learner practising a live mock session with a real estate expert" className="w-full h-[230px] object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-[#0B1D3A]/40 via-transparent to-transparent" />

            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Watch how live mock sessions work"
              className="group/watch absolute inset-0 m-auto w-18 h-18 rounded-full bg-[#0B1D3A]/85 hover:bg-[#0B1D3A] backdrop-blur-md border border-white/25 text-white flex flex-col items-center justify-center gap-1 shadow-[0_8px_26px_rgba(11,29,58,0.5)] active:scale-95 cursor-pointer z-10"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C99A2E] to-[#F4D068] flex items-center justify-center text-[#0B1D3A] shadow-xs">
                <Play size={14} className="fill-[#0B1D3A] text-[#0B1D3A] ml-0.5" />
              </div>
              <span className="text-[9.5px] font-black uppercase tracking-[0.16em] text-white">WATCH</span>
            </button>
          </div>
          <div className="absolute left-3 bottom-3 glass-light rounded-[12px] pl-2 pr-3.5 py-2 flex items-center gap-2.5 animate-float z-10">
            <IconBadge icon={Video} accent={ACCENTS[3]} size="xs" interactive={false} />
            <span className="text-[12px] font-bold text-[#0B1D3A]">{chips[1]}</span>
          </div>
        </motion.div>

        {steps.length > 0 && (
          <motion.ol variants={fadeUp} className="flex flex-wrap gap-1.5 mb-6" aria-label="How a live mock works">
            {steps.map((st, i) => {
              const a = accentAt(i);
              const isScenarioStep = i === 0;
              const isExpertStep = i === 1;
              return (
                <li
                  key={st}
                  onClick={() => {
                    if (isScenarioStep) handleExploreScenarios();
                    else if (isExpertStep) navigate(`/${mode}/choose-your-expert?tab=experts`);
                  }}
                  className={`inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full bg-white border border-[#E6EBF3] shadow-sm text-[12px] font-semibold text-[#0B1D3A]/85 ${
                    isScenarioStep || isExpertStep ? "cursor-pointer" : ""
                  }`}
                >
                  <span className="w-[18px] h-[18px] rounded-full text-white text-[9px] font-black inline-flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}>
                    {i + 1}
                  </span>
                  {st}
                </li>
              );
            })}
          </motion.ol>
        )}

        <motion.div variants={fadeUp} className="w-full flex flex-col gap-3 mb-7">
          <button
            type="button"
            onClick={handleExploreScenarios}
            aria-label="Explore Mock Scenarios"
            className="group w-full inline-flex items-center justify-between px-5 py-3.5 rounded-[14px] bg-[#0B1D3A] text-white font-bold text-[15px] shadow-[0_6px_20px_rgba(11,29,58,0.22)] active:scale-[0.99] cursor-pointer"
          >
            <span className="inline-flex items-center gap-3">
              <Target size={19} strokeWidth={2.2} className="text-white shrink-0" />
              <span>{s.cta}</span>
            </span>
            <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
              <ChevronRight
                size={18}
                strokeWidth={2.4}
                className="text-white/80 transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-1"
              />
              <ArrowRight
                size={18}
                strokeWidth={2.4}
                className="absolute text-white transition-all duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5"
              />
            </span>
          </button>
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

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Live Mock Sessions Demo"
      />
    </section>
  );
}
