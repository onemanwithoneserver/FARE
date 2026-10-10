import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="soft" ariaLabel="Choose Date and Time">
      <SectionHeader 
        eyebrow="Schedule" 
        icon={CalendarIcon} 
        accent={ACCENTS[7]} 
        title={s.title}
      />

      <div className="max-w-[800px] mx-auto w-full bg-white rounded-[24px] border border-[#E6EBF3] luxury-shadow p-10">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {/* Dates */}
          <motion.div variants={fadeUp}>
            <h3 className="text-[15px] font-bold uppercase tracking-widest text-[#475569] mb-4 flex items-center gap-2">
              <CalendarIcon size={16} /> Select a Date
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {s.dates.map((date) => (
                <button 
                  key={date.label}
                  className={`flex flex-col items-center justify-center min-w-[100px] py-4 rounded-[12px] border transition-all ${
                    date.active 
                      ? "bg-[#0B1D3A] border-[#0B1D3A] text-white shadow-md" 
                      : "bg-white border-[#E6EBF3] text-[#475569] hover:border-[#C99A2E] hover:text-[#0B1D3A]"
                  }`}
                >
                  <span className={`text-[15px] font-bold ${date.active ? "text-white" : ""}`}>{date.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="w-full h-px bg-[#E6EBF3]" />

          {/* Time Slots */}
          <motion.div variants={fadeUp}>
            <h3 className="text-[15px] font-bold uppercase tracking-widest text-[#475569] mb-6 flex items-center gap-2">
              <Clock size={16} /> Available Time Slots
            </h3>
            
            <div className="flex flex-col gap-6">
              {s.timeSlots.map((periodGroup) => (
                <div key={periodGroup.period} className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-24 text-[14px] font-bold text-[#7B8DAA] uppercase tracking-wide">
                    {periodGroup.period}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {periodGroup.slots.map((slot, i) => (
                      <button 
                        key={slot}
                        className={`px-5 py-2.5 rounded-[8px] border text-[14px] font-semibold transition-all ${
                          i === 1 && periodGroup.period === "Evening"
                            ? "bg-[#C99A2E]/10 border-[#C99A2E] text-[#8A5A00]"
                            : "bg-white border-[#E6EBF3] text-[#0B1D3A] hover:border-[#C99A2E] hover:shadow-sm"
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

          <motion.div variants={fadeUp} className="flex justify-end pt-6 border-t border-[#E6EBF3]">
            <PrimaryButton>{s.cta}</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
