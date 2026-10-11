import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Clock, 
  Check, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  Video, 
  Users,
  AlertCircle,
  Edit3
} from "lucide-react";
import { data } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, PrimaryButton } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert) => void;
}

export default function Mobile({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [internalExpertIndex, setInternalExpertIndex] = useState(0);
  const activeExpert: Expert = propExpert || expertsList[internalExpertIndex] || (s.defaultExpert as unknown as Expert);

  const [selectedDurationId, setSelectedDurationId] = useState<string | null>(null);
  const [scenarioText, setScenarioText] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const quickScenarios = useMemo(() => [
    { title: "Handling a Price Objection" },
    { title: "Negotiation & Margin Protection" },
    { title: "First-Time Homebuyer Consultation" },
    { title: "Site Visit Urgency & Spot Booking" },
    { title: "Skeptical Investor / ROI Defense" },
  ], []);

  const selectedDuration = useMemo(
    () => s.durations.find((d) => d.id === selectedDurationId) || null,
    [selectedDurationId, s.durations]
  );

  const handleSelectExpert = (exp: Expert, idx: number) => {
    if (onSelectExpert) {
      onSelectExpert(exp);
    } else {
      setInternalExpertIndex(idx);
    }
    setIsSwitchExpertOpen(false);
  };

  const handleSelectQuickScenario = (sc: typeof quickScenarios[0]) => {
    setScenarioText(sc.title);
    setValidationError(null);
  };

  const handleConfirmBooking = () => {
    if (!selectedDurationId) {
      setValidationError("Please select a session duration from Step 1.");
      return;
    }
    if (!selectedDate || !selectedSlot) {
      setValidationError("Please select your preferred date and time slot from Step 2.");
      return;
    }
    if (!scenarioText.trim()) {
      setValidationError("Please choose or enter a practice scenario.");
      return;
    }
    setValidationError(null);
    setIsBooked(true);
  };

  return (
    <Section tone="soft" mobile ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-6 !pb-14 relative">
      <SectionHeader 
        mobile
        eyebrow="Reserve 1-on-1 Practice" 
        icon={Calendar} 
        accent={ACCENTS[7]} 
        title="Choose Session, Date & Time"
        description="Select duration, scenario & available time slot to reserve your live mock."
      />

      <div className="w-full mb-6 px-1">
        <div className="bg-[#0B1D3A] rounded-[18px] p-4 text-white flex flex-col gap-3 shadow-md border border-[#C99A2E]/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black tracking-wider uppercase text-[#D5AA45]">
              Active Mentor
            </span>
            <button
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="text-[11px] font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/15 cursor-pointer"
            >
              <Users size={11} className="text-[#D5AA45]" /> Change Mentor
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-white/40">
                <img 
                  src={activeExpert.image} 
                  alt={activeExpert.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-[#0B1D3A] rounded-full" />
            </div>

            <div className="flex flex-col min-w-0">
              <h4 className="text-[16px] font-black text-white tracking-tight leading-none mb-1 flex items-center gap-1.5">
                {activeExpert.name}
                <span className="text-[12px] font-semibold text-[#D5AA45]">
                  (Age: {activeExpert.age || 38})
                </span>
              </h4>
              <p className="text-[11.5px] text-white/80 truncate">
                {activeExpert.role} · <span className="text-[#D5AA45] font-semibold">{activeExpert.experience}</span>
              </p>
              <span className="text-[10px] text-white/60 mt-0.5 flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[#10B981]" /> {activeExpert.sessionsCompleted || 126}+ Live Mocks Completed
              </span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isSwitchExpertOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-2 bg-white rounded-[16px] border border-[#E6EBF3] p-3 shadow-lg flex flex-col gap-2"
            >
              {expertsList.map((exp, idx) => {
                const isCurrent = exp.name === activeExpert.name;
                return (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpert(exp, idx)}
                    className={`p-2.5 rounded-[12px] border cursor-pointer flex items-center justify-between ${
                      isCurrent ? "border-[#C99A2E] bg-[#FFFDF7]" : "border-[#E6EBF3] bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <img src={exp.image} alt={exp.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <div className="text-[13px] font-black text-[#0B1D3A]">
                          {exp.name} <span className="text-[11px] text-[#C99A2E]">(Age: {exp.age})</span>
                        </div>
                        <div className="text-[10px] text-[#7B8DAA]">{exp.role.split("·")[0]}</div>
                      </div>
                    </div>
                    {isCurrent && <Check size={14} className="text-[#C99A2E]" />}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-5"
      >
        {validationError && (
          <div className="p-3 rounded-[12px] bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-bold flex items-center gap-2">
            <AlertCircle size={15} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <motion.div 
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 sm:p-5"
        >
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] flex items-center gap-1.5">
              <Clock size={15} className="text-[#C99A2E]" />
              1. Session Duration
            </h3>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
              selectedDuration ? "bg-[#FFFDF7] text-[#C99A2E] border border-[#F5D98B]" : "text-[#7B8DAA]"
            }`}>
              {selectedDuration ? selectedDuration.duration : "Select"}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {s.durations.map((dur) => {
              const isSelected = dur.id === selectedDurationId;
              return (
                <div
                  key={dur.id}
                  onClick={() => {
                    setSelectedDurationId(dur.id);
                    setValidationError(null);
                  }}
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

        <motion.div 
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 sm:p-5 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] flex items-center gap-1.5">
              <Calendar size={15} className="text-[#C99A2E]" />
              2. Select Date & Available Time Slot
            </h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              selectedDate && selectedSlot ? "bg-emerald-100 text-emerald-800" : "text-[#7B8DAA]"
            }`}>
              {selectedDate && selectedSlot ? `${selectedDate} · ${selectedSlot}` : "Select date & slot"}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#7B8DAA] block mb-2">
              Select Date
            </span>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {s.dates.map((date) => {
                const isSelected = date.label === selectedDate;
                return (
                  <button
                    key={date.label}
                    onClick={() => {
                      setSelectedDate(date.label);
                      setValidationError(null);
                    }}
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
          </div>

          <div className="border-t border-[#E6EBF3]" />

          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#7B8DAA] block mb-2">
              Available Slots (IST)
            </span>
            <div className="flex flex-col gap-3">
              {s.timeSlots.map((periodGroup) => (
                <div key={periodGroup.period} className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#7B8DAA]">
                    {periodGroup.period}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {periodGroup.slots.map((slotObj) => {
                      const isSelected = slotObj.time === selectedSlot;
                      return (
                        <button
                          key={slotObj.time}
                          onClick={() => {
                            setSelectedSlot(slotObj.time);
                            setValidationError(null);
                          }}
                          className={`px-3 py-1.5 rounded-[8px] border text-[12px] font-bold transition-all ${
                            isSelected
                              ? "bg-gradient-to-r from-[#0B1D3A] to-[#1E3A74] border-[#0B1D3A] text-white shadow-xs"
                              : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                          }`}
                        >
                          {slotObj.time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-[20px] border border-[#E6EBF3] p-5 flex flex-col gap-4 shadow-sm"
        >
          <div className="pb-3 border-b border-[#E6EBF3]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#C99A2E] block">
              Reservation Review
            </span>
            <h4 className="text-[17px] font-black text-[#0B1D3A]">
              Selected Session Details
            </h4>
            <p className="text-[11.5px] font-medium text-[#7B8DAA] mt-0.5">
              Practicing with <span className="font-bold text-[#0B1D3A]">{activeExpert.name}</span> (Age: {activeExpert.age || 38} yrs)
            </p>
          </div>

          <div className="p-3.5 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11.5px] font-black uppercase text-[#0B1D3A] tracking-wider">
                <Edit3 size={13} className="text-[#C99A2E]" />
                <span>Choose Practice Scenario</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                scenarioText.trim() ? "bg-emerald-100 text-emerald-800" : "bg-[#E2E8F0] text-[#64748B]"
              }`}>
                {scenarioText.trim() ? "Added" : "Required"}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase block mb-1">
                Suggestions (tap to fill):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickScenarios.map((sc, scIdx) => {
                  const isMatching = scenarioText.includes(sc.title);
                  return (
                    <button
                      key={scIdx}
                      type="button"
                      onClick={() => handleSelectQuickScenario(sc)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        isMatching
                          ? "bg-[#0B1D3A] text-white shadow-xs"
                          : "bg-white hover:bg-[#F1F5F9] border border-[#E6EBF3] text-[#475569]"
                      }`}
                    >
                      {sc.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <textarea
                value={scenarioText}
                onChange={(e) => {
                  setScenarioText(e.target.value);
                  setValidationError(null);
                }}
                rows={3}
                placeholder="Describe what specific objection you want to role-play with your mentor..."
                className="w-full p-3 rounded-[12px] border border-[#E6EBF3] bg-white focus:bg-white text-[12px] font-medium text-[#0B1D3A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C99A2E] leading-relaxed resize-none"
              />
              {scenarioText && (
                <button
                  type="button"
                  onClick={() => setScenarioText("")}
                  className="absolute right-2.5 top-2.5 text-[10px] font-bold text-red-500 hover:text-red-700 bg-white/90 px-1 rounded cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[12px]">
            <div className="p-2.5 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3]">
              <span className="text-[10px] text-[#7B8DAA] block">Date & Time</span>
              <span className="font-bold text-[#0B1D3A] text-[12.5px] block">
                {selectedDate && selectedSlot ? `${selectedDate} · ${selectedSlot}` : "Select date/slot"}
              </span>
            </div>
            <div className="p-2.5 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3]">
              <span className="text-[10px] text-[#7B8DAA] block">Duration</span>
              <span className="font-bold text-[#0B1D3A] text-[12.5px] block">
                {selectedDuration ? selectedDuration.duration : "Select duration"}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E6EBF3] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold text-[#7B8DAA] uppercase">Total Fee</span>
              <span className="text-[22px] font-black text-[#0B1D3A]">
                {selectedDuration ? selectedDuration.price : "—"}
              </span>
            </div>

            <PrimaryButton
              variant="gold"
              full
              mobile
              onClick={handleConfirmBooking}
              className="!h-12 text-[14px] font-bold shadow-md cursor-pointer"
            >
              {selectedDuration
                ? `Confirm & Book Mock (${activeExpert.name.split(" ")[0]})`
                : "Select Options to Book"}
            </PrimaryButton>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isBooked && selectedDuration && (
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
                Session confirmed with {activeExpert.name}.
              </p>

              <div className="w-full bg-[#F8FAFD] rounded-[14px] p-4 border border-[#E6EBF3] text-left flex flex-col gap-2 mb-5 text-[12px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Scenario</span>
                  <span className="text-[#0B1D3A] font-bold truncate max-w-[180px]">{scenarioText.trim() || "Price Objection Role-play"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA]">Mentor</span>
                  <span className="text-[#0B1D3A] font-bold">{activeExpert.name} (Age: {activeExpert.age || 38})</span>
                </div>
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
