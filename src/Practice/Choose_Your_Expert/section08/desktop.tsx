import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Clock, 
  Check, 
  CheckCircle2, 
  X,
  ExternalLink,
  ShieldCheck,
  Video,
  Sparkles
} from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

export default function Desktop() {
  const s = data;
  const [selectedDurationId, setSelectedDurationId] = useState("45");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);

  const selectedDuration = s.durations.find((d) => d.id === selectedDurationId) || s.durations[1];

  return (
    <Section tone="soft" ariaLabel="Choose Session, Date & Time">
      <SectionHeader 
        eyebrow="Schedule" 
        icon={Calendar} 
        accent={ACCENTS[7]} 
        title="Choose Session, Date & Time"
        description="Select your session duration, date & available time slot to reserve your live mock."
      />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Booking Controls (7 cols) */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Step 1: Duration Selector */}
          <motion.div 
            variants={fadeUp}
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] flex items-center gap-2">
                <Clock size={16} className="text-[#C99A2E]" />
                1. Select Session Duration
              </h3>
              <span className="text-[12px] font-bold text-[#C99A2E]">
                {selectedDuration.duration} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {s.durations.map((dur) => {
                const isSelected = dur.id === selectedDurationId;
                return (
                  <div
                    key={dur.id}
                    onClick={() => setSelectedDurationId(dur.id)}
                    className={`relative p-4 rounded-[16px] border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-2 border-[#C99A2E] bg-[#FFFDF7] shadow-sm ring-4 ring-[#C99A2E]/10"
                        : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                    }`}
                  >
                    {dur.recommended && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#E0B550] to-[#B8871F] text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
                        Popular
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[14px] font-black text-[#0B1D3A]">
                          {dur.duration}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-[#C99A2E] text-white"
                              : "border border-[#CBD5E1]"
                          }`}
                        >
                          {isSelected && <Check size={10} strokeWidth={3} />}
                        </div>
                      </div>

                      <h4 className="text-[13px] font-bold text-[#0B1D3A] mb-1">
                        {dur.label}
                      </h4>
                      <p className="text-[11.5px] font-medium text-[#7B8DAA] leading-relaxed mb-3">
                        {dur.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E6EBF3]/70">
                      <span className="text-[16px] font-black text-[#0B1D3A]">
                        {dur.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Step 2: Date Selector */}
          <motion.div 
            variants={fadeUp}
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7"
          >
            <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-[#C99A2E]" />
              2. Select a Date
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {s.dates.map((date) => {
                const isSelected = date.label === selectedDate;
                return (
                  <button
                    key={date.label}
                    onClick={() => setSelectedDate(date.label)}
                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-[14px] border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1D3A] border-[#0B1D3A] text-white shadow-md"
                        : "bg-white border-[#E6EBF3] text-[#475569] hover:border-[#C99A2E] hover:text-[#0B1D3A]"
                    }`}
                  >
                    <span className={`text-[11px] font-bold uppercase mb-0.5 ${isSelected ? "text-white/70" : "text-[#7B8DAA]"}`}>
                      {date.day}
                    </span>
                    <span className="text-[14px] font-black leading-tight">
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
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7"
          >
            <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-5 flex items-center gap-2">
              <Clock size={16} className="text-[#C99A2E]" />
              3. Available Time Slots
            </h3>

            <div className="flex flex-col gap-5">
              {s.timeSlots.map((periodGroup) => (
                <div key={periodGroup.period} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="w-24 text-[12px] font-black uppercase tracking-wider text-[#7B8DAA]">
                    {periodGroup.period}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {periodGroup.slots.map((slot) => {
                      const isSelected = slot === selectedSlot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-4 py-2.5 rounded-[10px] border text-[13px] font-bold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-[#E0B550] to-[#B8871F] border-[#B8871F] text-white shadow-sm"
                              : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A] hover:bg-white hover:border-[#C99A2E]"
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

            {/* Action Bar */}
            <div className="pt-6 border-t border-[#E6EBF3] mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                  Scheduled Session
                </span>
                <span className="text-[20px] font-black text-[#0B1D3A] leading-tight">
                  {selectedDuration.price}
                  <span className="text-[12px] font-medium text-[#7B8DAA] ml-2">
                    ({selectedDate} · {selectedSlot})
                  </span>
                </span>
              </div>

              <PrimaryButton
                variant="gold"
                onClick={() => setIsBooked(true)}
                className="!h-12 !px-7 text-[14px] font-bold shadow-md cursor-pointer shrink-0"
              >
                Confirm & Book Session
              </PrimaryButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Sticky Session Summary Card (5 cols) */}
        <div className="lg:col-span-5 sticky top-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-7 flex flex-col gap-5"
          >
            {/* Header */}
            <div className="pb-4 border-b border-[#E6EBF3]">
              <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#C99A2E] block mb-1">
                Reservation Summary
              </span>
              <h3 className="text-[20px] font-black text-[#0B1D3A] tracking-tight">
                Review Your Session
              </h3>
              <p className="text-[12.5px] font-medium text-[#7B8DAA] mt-0.5">
                Instant confirmation with Google Meet video link
              </p>
            </div>

            {/* Session Items Breakdown */}
            <div className="flex flex-col gap-3.5 text-[13px]">
              <div className="p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                  Practice Scenario
                </span>
                <span className="text-[14px] font-black text-[#0B1D3A]">
                  {s.defaultScenario}
                </span>
              </div>

              <div className="p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                  Assigned Expert
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-black text-[#0B1D3A]">
                    {s.defaultExpert.name}
                  </span>
                  <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    ✓ Verified Mentor
                  </span>
                </div>
                <span className="text-[11.5px] font-medium text-[#7B8DAA]">
                  {s.defaultExpert.role} · {s.defaultExpert.experience}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                    Date & Time
                  </span>
                  <span className="text-[13px] font-black text-[#0B1D3A]">
                    {selectedDate}
                  </span>
                  <span className="text-[12px] font-bold text-[#C99A2E]">
                    {selectedSlot} IST
                  </span>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                    Duration
                  </span>
                  <span className="text-[13px] font-black text-[#0B1D3A]">
                    {selectedDuration.duration}
                  </span>
                  <span className="text-[12px] font-bold text-[#7B8DAA]">
                    {selectedDuration.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Fee & Action Button */}
            <div className="pt-4 border-t border-[#E6EBF3] flex flex-col gap-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#7B8DAA] block">
                    Total Session Fee
                  </span>
                  <span className="text-[11px] text-[#7B8DAA]">
                    All taxes & mentor fee included
                  </span>
                </div>
                <span className="text-[26px] font-black text-[#0B1D3A]">
                  {selectedDuration.price}
                </span>
              </div>

              <PrimaryButton
                full
                variant="gold"
                onClick={() => setIsBooked(true)}
                className="!h-13 text-[14px] font-bold shadow-md cursor-pointer"
              >
                Confirm & Book Session
              </PrimaryButton>
            </div>

            {/* Trust and Guarantee Badges */}
            <div className="pt-2 flex flex-col gap-2 text-[11.5px] text-[#64748B]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#10B981] shrink-0" />
                <span>100% money-back satisfaction guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={14} className="text-[#3B82F6] shrink-0" />
                <span>Live 1-on-1 Google Meet video simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#C99A2E] shrink-0" />
                <span>Includes actionable rubric scorecard & feedback</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
              className="relative w-full max-w-[500px] bg-white rounded-[24px] shadow-2xl border border-[#E6EBF3] p-8 z-10 text-center flex flex-col items-center"
            >
              <button
                onClick={() => setIsBooked(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center text-[#475569] cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4">
                <CheckCircle2 size={36} strokeWidth={2.5} />
              </div>

              <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight mb-1">
                Your Mock Is Booked! 🎉
              </h3>
              <p className="text-[13px] font-medium text-[#7B8DAA] mb-6">
                You're all set to practise with {s.defaultExpert.name}.
              </p>

              <div className="w-full bg-[#F8FAFD] rounded-[16px] p-5 border border-[#E6EBF3] text-left flex flex-col gap-2.5 mb-6 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Scenario</span>
                  <span className="text-[#0B1D3A] font-bold">{s.defaultScenario}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Expert</span>
                  <span className="text-[#0B1D3A] font-bold">{s.defaultExpert.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">When</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Duration</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDuration.duration} ({selectedDuration.price})</span>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <PrimaryButton full variant="gold" className="!h-11 text-[13px] font-bold">
                  Join Google Meet <ExternalLink size={14} className="ml-1" />
                </PrimaryButton>
                <button
                  onClick={() => setIsBooked(false)}
                  className="h-11 px-5 rounded-[10px] border border-[#CBD5E1] text-[13px] font-bold text-[#0B1D3A] hover:bg-[#F8FAFD] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
