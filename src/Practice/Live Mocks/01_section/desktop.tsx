import { motion, useReducedMotion } from "motion/react";
import { Clock, Video, Target, MessageSquare, Radio } from "lucide-react";
import { data } from "../data";
import liveMocksHero from "../../../assets/live_mocks_hero.jpg";
import { ACCENTS, EASE, IconBadge, PrimaryButton, SecondaryButton, accentAt, fadeUp, staggerContainer } from "../ui";

const CHIP_ICONS = [Clock, Video, Target, MessageSquare];

export default function Desktop() {
  const s = data.hero;
  const reduce = useReducedMotion();
  const [lead, stepsLine = ""] = s.description.split("\n\n");
  const steps = stepsLine.split(".").map((x) => x.trim()).filter(Boolean);
  const chips = s.supportingLine.split("|").map((x) => x.trim());

  return (
    <section
      aria-label="FARE Live Mock Sessions"
      className="w-full relative overflow-x-clip font-['Outfit'] fare-noise-overlay"
      style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 62%, #E6EEFF 100%)" }}
    >
      {/* ambient light */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[4%] right-[8%] w-[680px] h-[680px] rounded-full blur-[140px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.18)" }} />
        <div className="absolute bottom-[6%] left-[2%] w-[460px] h-[460px] rounded-full blur-[120px] animate-pulse-glow" style={{ background: "rgba(201,154,46,0.1)", animationDelay: "1.2s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(90deg, black 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(90deg, black 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 pt-6 lg:pt-10 pb-12 lg:pb-16 pl-6 sm:pl-10 lg:pl-14 xl:pl-20">
        {/* Copy */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start text-left shrink-0 py-4 lg:py-6 pr-6 lg:pr-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm mb-6"
          >
            <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full text-white" style={{ background: "linear-gradient(135deg,#FB7185,#E11D48)" }}>
              <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping bg-[#E11D48]/40" />
              <Radio size={12} strokeWidth={2.6} className="relative" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B1D3A]/75 leading-none">Live Practice Sessions</span>
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-[2.75rem] lg:text-[3.2rem] xl:text-[3.6rem] font-black tracking-[-0.025em] leading-[1.04] text-[#0B1D3A] mb-4"
          >
            {s.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[20px] xl:text-[22px] font-bold leading-snug mb-5">
            <span className="gold-gradient-text">{s.subtitle}</span>
          </motion.p>

          <motion.p variants={fadeUp} className="text-[16px] xl:text-[17px] font-medium text-[#475569] leading-[1.7] max-w-[540px] mb-6">
            {lead}
          </motion.p>

          {steps.length > 0 && (
            <motion.ol variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-9 max-w-[560px]" aria-label="How a live mock works">
              {steps.map((st, i) => {
                const a = accentAt(i);
                return (
                  <li key={st} className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/80 border border-[#E6EBF3] shadow-sm text-[13px] font-semibold text-[#0B1D3A]/85 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
                    <span className="w-5 h-5 rounded-full text-white text-[10px] font-black inline-flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}>
                      {i + 1}
                    </span>
                    {st}
                  </li>
                );
              })}
            </motion.ol>
          )}

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-9">
            <PrimaryButton icon={Target}>{s.cta}</PrimaryButton>
            <SecondaryButton icon={Video}>{s.secondaryCta}</SecondaryButton>
          </motion.div>

          <motion.ul variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-[520px]">
            {chips.map((c, i) => (
              <li key={c} className="group flex items-center gap-3 text-[14px] font-semibold text-[#0B1D3A]/80">
                <IconBadge icon={CHIP_ICONS[i % CHIP_ICONS.length]} accent={ACCENTS[[1, 3, 2, 5][i % 4]]} size="xs" />
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 48, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-end relative mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[540px] rounded-tl-[160px] lg:rounded-tl-[240px] xl:rounded-tl-[280px] rounded-bl-[70px] lg:rounded-bl-[100px] overflow-hidden luxury-shadow-float border-l border-t border-b border-white/80">
            <motion.img
              animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              src={liveMocksHero}
              alt="Learner practising a live mock session with a real estate expert"
              className="w-full h-full object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/35 via-[#0B1D3A]/5 to-transparent" />
          </div>

          {/* floating glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="absolute left-[6%] bottom-[10%] animate-float"
          >
            <div className="glass-light rounded-[16px] pl-3 pr-5 py-3 flex items-center gap-3 luxury-shadow-lg">
              <IconBadge icon={Video} accent={ACCENTS[3]} size="sm" interactive={false} />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A]/50">Session</span>
                <span className="text-[14px] font-bold text-[#0B1D3A]">{chips[1]}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="absolute right-[6%] top-[12%] animate-float-delayed"
          >
            <div className="glass-light rounded-[16px] pl-3 pr-5 py-3 flex items-center gap-3 luxury-shadow-lg">
              <IconBadge icon={MessageSquare} accent={ACCENTS[5]} size="sm" interactive={false} />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A]/50">After every mock</span>
                <span className="text-[14px] font-bold text-[#0B1D3A]">{chips[3]}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
