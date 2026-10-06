import { motion } from "motion/react";
import { Clock, CheckCircle } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.chooseSession;

  return (
    <Section tone="soft" orbs ariaLabel="Session Durations">
      <SectionHeader eyebrow="Session Durations" icon={Clock} accent={ACCENTS[7]} title={s.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mb-16"
      >
        {s.sessions.map((session, i) => {
          const a = ACCENTS[(i * 3 + 1) % ACCENTS.length]; // skip around for varied colours
          return (
            <motion.article
              key={session.duration}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col items-center text-center overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              <div className="relative inline-flex items-center justify-center mb-6">
                <span className="text-[42px] font-black leading-none" style={{ color: a.to }}>
                  {session.duration.split(" ")[0]}
                </span>
                <span className="absolute -bottom-2 text-[12px] font-bold uppercase tracking-widest text-[#0B1D3A]/40">
                  {session.duration.split(" ")[1]}
                </span>
              </div>
              <h3 className="relative text-[18px] font-bold text-[#0B1D3A] mb-3">{session.label}</h3>
              <p className="relative text-[14.5px] text-[#475569] leading-relaxed font-medium">{session.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.2} className="max-w-[700px] mx-auto text-center">
        <div className="inline-flex items-start md:items-center gap-3 px-5 py-4 rounded-[12px] bg-white border border-[#E6EBF3] luxury-shadow-sm text-left md:text-center">
          <CheckCircle size={20} className="text-[#10B981] shrink-0 md:mt-0" strokeWidth={2.5} />
          <p className="text-[14px] text-[#475569] leading-relaxed font-medium">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
