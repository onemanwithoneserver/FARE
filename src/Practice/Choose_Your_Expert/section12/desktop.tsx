import { motion } from "motion/react";
import { CheckCircle, Calendar, Video, Clock, ListChecks } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, Reveal, PrimaryButton, SecondaryButton, VIEWPORT } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="navy" orbs ariaLabel="Booking Confirmation">
      <div className="max-w-[760px] mx-auto w-full">
        <Reveal className="text-center mb-14">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_-8px_rgba(5,150,105,0.5)]"
          >
            <CheckCircle size={36} className="text-white" strokeWidth={2.4} />
          </motion.div>
          <h2 className="text-[36px] lg:text-[44px] font-black text-white tracking-tight leading-[1.08] mb-3">{s.title}</h2>
          <p className="text-[18px] font-medium text-white/60">{s.subtitle}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white/[0.06] backdrop-blur-md rounded-[24px] border border-white/15 p-10 mb-10">
            <div className="grid grid-cols-2 gap-y-7 gap-x-10 mb-8">
              <div className="col-span-2">
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 block mb-1">Scenario</span>
                <span className="text-[20px] font-bold text-white">{s.scenario}</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 block mb-1">Expert</span>
                <span className="text-[17px] font-bold text-white">{s.expert}</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 block mb-1">Date</span>
                <span className="text-[17px] font-bold text-white flex items-center gap-2">
                  <Calendar size={16} className="text-[#E4C46A]" />
                  {s.date}
                </span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 block mb-1">Time</span>
                <span className="text-[17px] font-bold text-white flex items-center gap-2">
                  <Clock size={16} className="text-[#E4C46A]" />
                  {s.time}
                </span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 block mb-1">Mode</span>
                <span className="text-[17px] font-bold text-white flex items-center gap-2">
                  <Video size={16} className="text-[#E4C46A]" />
                  {s.mode}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <PrimaryButton variant="gold">{s.ctaJoin}</PrimaryButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="bg-white/[0.06] backdrop-blur-md rounded-[20px] border border-white/15 p-8 mb-10">
            <h3 className="text-[16px] font-bold text-white mb-5 flex items-center gap-2.5">
              <ListChecks size={20} className="text-[#E4C46A]" />
              Before Your Session
            </h3>
            <motion.ul
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="grid grid-cols-2 gap-3"
            >
              {s.beforeSession.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-[10px] px-4 py-3"
                >
                  <CheckCircle size={16} className="text-[#34D399] shrink-0" strokeWidth={2.5} />
                  <span className="text-[14px] font-semibold text-white/90">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="flex justify-center gap-4">
          <SecondaryButton dark icon={Calendar}>{s.ctaCalendar}</SecondaryButton>
          <SecondaryButton dark>{s.ctaSessions}</SecondaryButton>
        </Reveal>
      </div>
    </Section>
  );
}
