import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="soft" mobile ariaLabel="Choose Date and Time">
      <SectionHeader 
        mobile
        eyebrow="Schedule" 
        icon={CalendarIcon} 
        accent={ACCENTS[7]} 
        title={s.title}
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-5 flex flex-col gap-6"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-3 flex items-center gap-1.5">
            <CalendarIcon size={14} /> Select a Date
          </h3>
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5">
            {s.dates.map((date) => (
              <button 
                key={date.label}
                className={`flex flex-col items-center justify-center min-w-[80px] py-3 rounded-[10px] border shrink-0 ${
                  date.active 
                    ? "bg-[#0B1D3A] border-[#0B1D3A] text-white shadow-sm" 
                    : "bg-white border-[#E6EBF3] text-[#475569]"
                }`}
              >
                <span className={`text-[13px] font-bold ${date.active ? "text-white" : ""}`}>{date.label.split(',')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-px bg-[#E6EBF3]" />

        <motion.div variants={fadeUp}>
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mb-4 flex items-center gap-1.5">
            <Clock size={14} /> Available Time Slots
          </h3>
          
          <div className="flex flex-col gap-5">
            {s.timeSlots.map((periodGroup) => (
              <div key={periodGroup.period} className="flex flex-col gap-2.5">
                <div className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wide">
                  {periodGroup.period}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {periodGroup.slots.map((slot, i) => (
                    <button 
                      key={slot}
                      className={`py-2 rounded-[6px] border text-[13px] font-semibold ${
                        i === 1 && periodGroup.period === "Evening"
                          ? "bg-[#C99A2E]/10 border-[#C99A2E] text-[#8A5A00]"
                          : "bg-white border-[#E6EBF3] text-[#0B1D3A]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="pt-4 border-t border-[#E6EBF3]">
          <PrimaryButton full mobile>{s.cta}</PrimaryButton>
        </motion.div>
      </motion.div>
    </Section>
  );
}
