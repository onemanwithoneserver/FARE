import { motion } from "motion/react";
import { Clock, CheckCircle } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

export default function Mobile() {
  const s = data.chooseSession;

  return (
    <Section tone="soft" mobile ariaLabel="Session Durations">
      <SectionHeader mobile eyebrow="Session Durations" icon={Clock} accent={ACCENTS[7]} title={s.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mb-10">
        {s.sessions.map((session, i) => {
          const a = ACCENTS[(i * 3 + 1) % ACCENTS.length];
          return (
            <motion.article key={session.duration} variants={fadeUp} className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-5 relative overflow-hidden flex items-center gap-5">
              <span aria-hidden="true" className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full" style={{ background: `linear-gradient(${a.from}, ${a.to})` }} />
              
              <div className="relative shrink-0 flex flex-col items-center justify-center w-16">
                <span className="text-[32px] font-black leading-none" style={{ color: a.to }}>
                  {session.duration.split(" ")[0]}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#0B1D3A]/40 mt-1">
                  {session.duration.split(" ")[1]}
                </span>
              </div>
              
              <div className="min-w-0 border-l border-[#E6EBF3] pl-5">
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5">{session.label}</h3>
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium">{session.desc}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <Reveal delay={0.1}>
        <div className="flex items-start gap-3 p-4 rounded-[12px] bg-white border border-[#E6EBF3] luxury-shadow-sm">
          <CheckCircle size={18} className="text-[#10B981] shrink-0 mt-0.5" strokeWidth={2.5} />
          <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
