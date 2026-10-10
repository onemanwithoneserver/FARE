import { motion } from "motion/react";
import { CheckCircle, Calendar, Video, Clock, ListChecks } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, Reveal, PrimaryButton, SecondaryButton, VIEWPORT } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="navy" orbs mobile ariaLabel="Booking Confirmation">
      <Reveal className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center mx-auto mb-5 shadow-[0_10px_30px_-8px_rgba(5,150,105,0.5)]"
        >
          <CheckCircle size={28} className="text-white" strokeWidth={2.4} />
        </motion.div>
        <h2 className="text-[26px] font-black text-white tracking-tight leading-tight mb-2">{s.title}</h2>
        <p className="text-[14px] font-medium text-white/60">{s.subtitle}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-white/[0.06] backdrop-blur-md rounded-[16px] border border-white/15 p-5 mb-6">
          <div className="flex flex-col gap-5 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Scenario</span>
              <span className="text-[16px] font-bold text-white">{s.scenario}</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Expert</span>
                <span className="text-[14px] font-bold text-white">{s.expert}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Date</span>
                <span className="text-[13px] font-bold text-white flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#E4C46A]" />
                  {s.date}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Time</span>
                <span className="text-[13px] font-bold text-white flex items-center gap-1.5">
                  <Clock size={13} className="text-[#E4C46A]" />
                  {s.time}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Mode</span>
                <span className="text-[13px] font-bold text-white flex items-center gap-1.5">
                  <Video size={13} className="text-[#E4C46A]" />
                  {s.mode}
                </span>
              </div>
            </div>
          </div>
          <PrimaryButton variant="gold" full mobile>{s.ctaJoin}</PrimaryButton>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="bg-white/[0.06] backdrop-blur-md rounded-[12px] border border-white/15 p-5 mb-6">
          <h3 className="text-[14px] font-bold text-white mb-4 flex items-center gap-2">
            <ListChecks size={16} className="text-[#E4C46A]" />
            Before Your Session
          </h3>
          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex flex-col gap-2"
          >
            {s.beforeSession.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2.5 bg-white/[0.05] border border-white/10 rounded-[8px] px-3.5 py-2.5"
              >
                <CheckCircle size={14} className="text-[#34D399] shrink-0" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-white/90">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="flex flex-col gap-2.5">
        <SecondaryButton dark full mobile icon={Calendar}>{s.ctaCalendar}</SecondaryButton>
        <SecondaryButton dark full mobile>{s.ctaSessions}</SecondaryButton>
      </Reveal>
    </Section>
  );
}
