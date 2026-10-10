import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Clock, 
  Check, 
  Video, 
  CheckCircle2, 
  X,
  ExternalLink
} from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Mobile() {
  const s = data;
  const [selectedDurationId, setSelectedDurationId] = useState("45");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);

  const selectedDuration = s.durations.find((d) => d.id === selectedDurationId) || s.durations[1];

  return (
    <Section tone="soft" mobile ariaLabel="Choose Session, Date & Time" className="!pt-6 !pb-12">
      <SectionHeader 
        mobile
        eyebrow="Schedule" 
        icon={Calendar} 
        accent={ACCENTS[7]} 
        title="Choose Session, Date & Time"
        description="Select duration, date & available time slot to reserve your mock."
      />

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-5"
      >
        {/* Step 1: Duration Selector */}
        <motion.div 
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5"
        >
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] flex items-center gap-1.5">
              <Clock size={15} className="text-[#C99A2E]" />
              1. Session Duration
            </h3>
            <span className="text-[11px] font-bold text-[#C99A2E]">
              {selectedDuration.duration}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {s.durations.map((dur) => {
              const isSelected = dur.id === selectedDurationId;
              return (
                <div
                  key={dur.id}
                  onClick={() => setSelectedDurationId(dur.id)}
                  className={`relative p-3.5 rounded-[14px] border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-2 border-[#C99A2E] bg-[#FFFDF7] shadow-xs"
                      : "border-[#E6EBF3] bg-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-black text-[#0B1D3A]">
                        {dur.duration}
                      </span>
                      <span className="text-[12px] font-bold text-[#475569]">
                        · {dur.label}
                      </span>
                      {dur.recommended && (
                        <span className="px-1.5 py-0.2 rounded-full bg-[#C99A2E] text-white text-[9px] font-black uppercase">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#7B8DAA] mt-0.5">
                      {dur.desc}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[15px] font-black text-[#0B1D3A]">
                      {dur.price}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        isSelected
                          ? "bg-[#C99A2E] text-white"
                          : "border border-[#CBD5E1]"
                      }`}
                    >
                      {isSelected && <Check size={10} strokeWidth={3} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Step 2: Date Selector */}
        <motion.div 
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5"
        >
          <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-3 flex items-center gap-1.5">
            <Calendar size={15} className="text-[#C99A2E]" />
            2. Select Date
          </h3>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {s.dates.map((date) => {
              const isSelected = date.label === selectedDate;
              return (
                <button
                  key={date.label}
                  onClick={() => setSelectedDate(date.label)}
                  className={`flex flex-col items-center justify-center py-2.5 px-3.5 rounded-[12px] border transition-all whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-[#0B1D3A] border-[#0B1D3A] text-white shadow-sm"
                      : "bg-white border-[#E6EBF3] text-[#475569]"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-white/70" : "text-[#7B8DAA]"}`}>
                    {date.day}
                  </span>
                  <span className="text-[13px] font-black">
                    {date.label.includes(",") ? date.label.split(",")[1].trim() : date.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Step 3: Time Slot Selector */}
        <motion.div 
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5"
        >
          <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-3.5 flex items-center gap-1.5">
            <Clock size={15} className="text-[#C99A2E]" />
            3. Available Slots
          </h3>

          <div className="flex flex-col gap-3.5">
            {s.timeSlots.map((periodGroup) => (
              <div key={periodGroup.period} className="flex flex-col gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7B8DAA]">
                  {periodGroup.period}
                </span>
                <div className="flex flex-wrap gap-2">
                  {periodGroup.slots.map((slot) => {
                    const isSelected = slot === selectedSlot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3.5 py-2 rounded-[8px] border text-[12px] font-bold transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-[#E0B550] to-[#B8871F] border-[#B8871F] text-white shadow-xs"
                            : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E6EBF3] mt-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-[#7B8DAA]">
                Selected Session
              </span>
              <span className="text-[20px] font-black text-[#0B1D3A]">
                {selectedDuration.price}
              </span>
            </div>

            <PrimaryButton
              variant="gold"
              full
              mobile
              onClick={() => setIsBooked(true)}
              className="!h-11 text-[14px] font-bold"
            >
              Confirm & Book Mock ({selectedDuration.duration})
            </PrimaryButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Booking Confirmation Success Modal */}
      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBooked(false)}
              className="fixed inset-0 bg-[#0B1D3A]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-[420px] bg-white rounded-[24px] shadow-2xl border border-[#E6EBF3] p-6 z-10 text-center flex flex-col items-center"
            >
              <button
                onClick={() => setIsBooked(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#475569]"
              >
                <X size={14} />
              </button>

              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
                <CheckCircle2 size={30} strokeWidth={2.5} />
              </div>

              <h3 className="text-[20px] font-black text-[#0B1D3A] tracking-tight mb-1">
                Your Mock Is Booked! 🎉
              </h3>
              <p className="text-[12px] font-medium text-[#7B8DAA] mb-5">
                Session confirmed with {s.defaultExpert.name}.
              </p>

              <div className="w-full bg-[#F8FAFD] rounded-[14px] p-4 border border-[#E6EBF3] text-left flex flex-col gap-2 mb-5 text-[12px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Scheduled</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Duration</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDuration.duration} ({selectedDuration.price})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Platform</span>
                  <span className="text-[#10B981] font-bold flex items-center gap-1">
                    <Video size={12} /> Google Meet
                  </span>
                </div>
              </div>

              <PrimaryButton full mobile variant="gold" className="!h-11 text-[13px] font-bold">
                Join Google Meet <ExternalLink size={13} className="ml-1" />
              </PrimaryButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
