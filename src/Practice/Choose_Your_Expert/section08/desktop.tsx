import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Check, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Video, 
  Sparkles,
  Sun, 
  Moon, 
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

export default function Desktop({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  // Active expert (controlled or fallback to first expert)
  const [internalExpertIndex, setInternalExpertIndex] = useState(0);
  const activeExpert: Expert = propExpert || expertsList[internalExpertIndex] || (s.defaultExpert as unknown as Expert);

  // Booking options - UNSELECTED BY DEFAULT
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
      setValidationError("Please enter or select a practice scenario in the right panel.");
      return;
    }
    setValidationError(null);
    setIsBooked(true);
  };

  return (
    <Section tone="soft" ariaLabel="Choose Session, Date & Time" id="booking-section" className="!py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C99A2E]/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B1D3A]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader 
        eyebrow="Reserve 1-on-1 Practice" 
        icon={Calendar} 
        accent={ACCENTS[7]} 
        title="Choose Session, Date & Time"
        description="Select duration, realistic scenario, and preferred time slot to practice with your verified real estate mentor."
      />

      {/* Active Mentor Bar */}
      <div className="max-w-[1200px] mx-auto w-full mb-10 px-4 xl:px-0">
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] rounded-[20px] p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_12px_36px_rgba(11,29,58,0.12)] border border-[#C99A2E]/20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#C99A2E]/15 blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
            {/* Mentor Avatar */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-white/40 shadow-md">
                <img 
                  src={activeExpert.image} 
                  alt={activeExpert.name} 
                  className="w-full h-full object-cover rounded-full bg-slate-800"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#10B981] border-2 border-[#0B1D3A] rounded-full" title="Online & Available" />
            </div>

            {/* Mentor Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black tracking-wider uppercase text-[#D5AA45]">
                  Selected Mentor
                </span>
                <span className="text-[11px] font-bold text-white/60">·</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full">
                  <ShieldCheck size={11} /> Verified
                </span>
              </div>
              <h3 className="text-[19px] font-black text-white tracking-tight flex items-center gap-2">
                {activeExpert.name}
                <span className="text-[13px] font-semibold text-white/70 font-normal">
                  (Age: {activeExpert.age || 38} yrs)
                </span>
              </h3>
              <p className="text-[12.5px] text-white/80 line-clamp-1">
                {activeExpert.role} · <span className="text-[#D5AA45] font-semibold">{activeExpert.experience}</span> · <span className="text-white/70">{activeExpert.sessionsCompleted || 126}+ Live Mocks</span>
              </p>
            </div>
          </div>

          {/* Quick Mentor Switcher Button */}
          <div className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-end">
            <button
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="px-4 py-2 rounded-[12px] bg-white/10 hover:bg-white/15 border border-white/20 text-white text-[12.5px] font-bold flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
            >
              <Users size={14} className="text-[#D5AA45]" />
              <span>Change Mentor</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">
                5 Available
              </span>
            </button>
          </div>
        </div>

        {/* Dropdown list for changing mentor */}
        <AnimatePresence>
          {isSwitchExpertOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-3 bg-white rounded-[18px] border border-[#E6EBF3] p-4 shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3"
            >
              {expertsList.map((exp, idx) => {
                const isCurrent = exp.name === activeExpert.name;
                return (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpert(exp, idx)}
                    className={`p-3 rounded-[14px] border cursor-pointer transition-all flex items-center gap-3 ${
                      isCurrent
                        ? "border-[#C99A2E] bg-[#FFFDF7] shadow-xs ring-2 ring-[#C99A2E]/20"
                        : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                    }`}
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.name} 
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#CBD5E1]" 
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[13px] font-black text-[#0B1D3A] truncate">
                        {exp.name}
                      </span>
                      <span className="text-[11px] font-bold text-[#C99A2E]">
                        Age: {exp.age || 35} yrs
                      </span>
                      <span className="text-[10px] text-[#7B8DAA] truncate">
                        {exp.role.split("·")[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 xl:px-0">
        
        {/* LEFT COLUMN: 2 Steps (Step 1 Duration, Step 2 Date & Time Slot moved second) (7 cols) */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Validation Alert */}
          {validationError && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-[14px] bg-amber-50 border border-amber-200 text-amber-900 text-[13px] font-bold flex items-center gap-2"
            >
              <AlertCircle size={16} className="text-amber-600 shrink-0" />
              <span>{validationError}</span>
            </motion.div>
          )}

          {/* STEP 1: Duration Selector (Unselected by default) */}
          <motion.div 
            variants={fadeUp}
            className="bg-white rounded-[24px] border border-[#0B1D3A]/[0.08] shadow-[0_6px_24px_rgba(11,29,58,0.04)] p-6 sm:p-7"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[12px] font-black shadow-xs">
                  1
                </span>
                <h3 className="text-[15px] font-black text-[#0B1D3A] tracking-tight">
                  Select Session Duration & Format
                </h3>
              </div>
              <span className={`text-[12px] font-bold px-2.5 py-1 rounded-full border ${
                selectedDuration 
                  ? "text-[#C99A2E] bg-[#FFFDF7] border-[#C99A2E]/30" 
                  : "text-[#7B8DAA] bg-[#F8FAFD] border-[#E6EBF3]"
              }`}>
                {selectedDuration ? `${selectedDuration.duration} Selected` : "Choose duration"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {s.durations.map((dur) => {
                const isSelected = dur.id === selectedDurationId;
                return (
                  <div
                    key={dur.id}
                    onClick={() => {
                      setSelectedDurationId(dur.id);
                      setValidationError(null);
                    }}
                    className={`relative p-4 rounded-[18px] border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-2 border-[#C99A2E] bg-[#FFFDF7] shadow-md ring-4 ring-[#C99A2E]/10"
                        : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                    }`}
                  >
                    {dur.recommended && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#E0B550] to-[#B8871F] text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[15px] font-black text-[#0B1D3A]">
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

                      <h4 className="text-[13px] font-black text-[#0B1D3A] mb-1">
                        {dur.label}
                      </h4>
                      <p className="text-[11.5px] font-medium text-[#7B8DAA] leading-relaxed mb-3">
                        {dur.desc}
                      </p>

                      <div className="space-y-1 mb-3">
                        {dur.features?.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-[#475569]">
                            <Check size={11} className="text-[#10B981] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#E6EBF3]/70 flex items-baseline justify-between">
                      <span className="text-[18px] font-black text-[#0B1D3A]">
                        {dur.price}
                      </span>
                      <span className="text-[11px] font-semibold text-[#7B8DAA]">
                        Live 1-on-1
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* STEP 2: MOVED TO THE SECOND - Merged Date & Time Slot Selector */}
          <motion.div 
            variants={fadeUp}
            className="bg-white rounded-[24px] border border-[#0B1D3A]/[0.08] shadow-[0_6px_24px_rgba(11,29,58,0.04)] p-6 sm:p-7 flex flex-col gap-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[12px] font-black shadow-xs">
                  2
                </span>
                <h3 className="text-[15px] font-black text-[#0B1D3A] tracking-tight">
                  Select Date & Available Time Slot
                </h3>
              </div>
              <span className={`text-[12px] font-bold px-2.5 py-1 rounded-full border ${
                selectedDate && selectedSlot
                  ? "text-[#10B981] bg-emerald-50 border-emerald-200"
                  : "text-[#7B8DAA] bg-[#F8FAFD] border-[#E6EBF3]"
              }`}>
                {selectedDate && selectedSlot ? `${selectedDate} · ${selectedSlot}` : "Choose date & slot"}
              </span>
            </div>

            {/* Part A: Date Strip */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11.5px] font-black uppercase tracking-wider text-[#7B8DAA]">
                  Step 2A · Choose Date
                </span>
                <span className="text-[11.5px] font-bold text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Live Mentor Calendar
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
                {s.dates.map((date) => {
                  const isSelected = date.label === selectedDate;
                  return (
                    <button
                      key={date.label}
                      onClick={() => {
                        setSelectedDate(date.label);
                        setValidationError(null);
                      }}
                      className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-[14px] border transition-all cursor-pointer relative ${
                        isSelected
                          ? "bg-[#0B1D3A] border-[#0B1D3A] text-white shadow-md scale-[1.02]"
                          : "bg-white border-[#E6EBF3] text-[#475569] hover:border-[#C99A2E] hover:text-[#0B1D3A]"
                      }`}
                    >
                      <span className={`text-[10px] font-black uppercase mb-0.5 ${isSelected ? "text-white/70" : "text-[#7B8DAA]"}`}>
                        {date.day}
                      </span>
                      <span className="text-[14px] font-black leading-tight mb-1">
                        {date.label.includes(",") ? date.label.split(",")[1].trim() : date.label}
                      </span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-[#F1F5F9] text-[#64748B]"
                      }`}>
                        {date.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E6EBF3]" />

            {/* Part B: Time Slots */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11.5px] font-black uppercase tracking-wider text-[#7B8DAA]">
                  Step 2B · Available Time Slots
                </span>
                <span className="text-[11px] font-bold text-[#7B8DAA]">
                  All slots in IST (Indian Standard Time)
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {s.timeSlots.map((periodGroup) => (
                  <div key={periodGroup.period} className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="w-28 flex items-center gap-1.5 text-[12px] font-black uppercase tracking-wider text-[#7B8DAA]">
                      {periodGroup.period === "Morning" ? (
                        <Sun size={13} className="text-[#C99A2E]" />
                      ) : periodGroup.period === "Afternoon" ? (
                        <Sun size={13} className="text-[#E0B550]" />
                      ) : (
                        <Moon size={13} className="text-[#1E3A74]" />
                      )}
                      {periodGroup.period}
                    </div>

                    <div className="flex flex-wrap gap-2.5 flex-1">
                      {periodGroup.slots.map((slotObj) => {
                        const isSelected = slotObj.time === selectedSlot;
                        return (
                          <button
                            key={slotObj.time}
                            onClick={() => {
                              setSelectedSlot(slotObj.time);
                              setValidationError(null);
                            }}
                            className={`px-4 py-2.5 rounded-[12px] border text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                              isSelected
                                ? "bg-gradient-to-r from-[#0B1D3A] to-[#1E3A74] border-[#0B1D3A] text-white shadow-sm"
                                : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A] hover:bg-white hover:border-[#C99A2E]"
                            }`}
                          >
                            <span>{slotObj.time}</span>
                            {slotObj.status === "Filling fast" && (
                              <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-black ${
                                isSelected ? "bg-red-400 text-white" : "bg-red-50 text-red-600"
                              }`}>
                                Fast
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: "Choose Practice Scenario" REPLACES "Assigned Mentor" (5 cols) */}
        <div className="lg:col-span-5 sticky top-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] border border-[#0B1D3A]/[0.1] shadow-[0_16px_48px_rgba(11,29,58,0.08)] p-6 sm:p-7 flex flex-col gap-5 overflow-hidden relative"
          >
            {/* Top gold header shimmer */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1D3A] via-[#C99A2E] to-[#0B1D3A]" />

            {/* Title */}
            <div className="pb-3 border-b border-[#E6EBF3]">
              <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#C99A2E] block mb-1">
                Reservation Overview
              </span>
              <h3 className="text-[20px] font-black text-[#0B1D3A] tracking-tight">
                Review & Confirm Session
              </h3>
              <p className="text-[12px] font-medium text-[#7B8DAA] mt-0.5">
                Practicing with <span className="font-bold text-[#0B1D3A]">{activeExpert.name}</span> (Age: {activeExpert.age || 38} yrs)
              </p>
            </div>

            {/* REPLACING "Assigned Mentor" WITH "Choose Practice Scenario" */}
            <div className="p-4 rounded-[18px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[12px] font-black uppercase text-[#0B1D3A] tracking-wider">
                  <Edit3 size={13} className="text-[#C99A2E]" />
                  <span>Choose Practice Scenario</span>
                </div>
                <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                  scenarioText.trim() ? "bg-emerald-100 text-emerald-800" : "bg-[#E2E8F0] text-[#64748B]"
                }`}>
                  {scenarioText.trim() ? "Scenario Added" : "Required"}
                </span>
              </div>

              {/* Quick suggestions pills (Name only) */}
              <div>
                <span className="text-[10.5px] font-bold text-[#7B8DAA] uppercase block mb-1.5">
                  Quick Suggestions:
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
                            : "bg-white hover:bg-[#F1F5F9] border border-[#E6EBF3] text-[#475569] hover:text-[#0B1D3A]"
                        }`}
                      >
                        {sc.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Multi-line edit field */}
              <div className="relative">
                <textarea
                  value={scenarioText}
                  onChange={(e) => {
                    setScenarioText(e.target.value);
                    setValidationError(null);
                  }}
                  rows={3}
                  placeholder="Describe the objection or scenario you want to drill (e.g. Price mismatch objection, discount pressure)..."
                  className="w-full p-3 rounded-[12px] border border-[#E6EBF3] bg-white focus:bg-white text-[12.5px] font-medium text-[#0B1D3A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C99A2E] leading-relaxed resize-none"
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

            {/* Session Schedule Breakdown */}
            <div className="grid grid-cols-2 gap-2.5 text-[12px]">
              <div className="p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col">
                <span className="text-[10px] font-bold uppercase text-[#7B8DAA]">When</span>
                <span className="text-[13px] font-black text-[#0B1D3A]">
                  {selectedDate || "Select date"}
                </span>
                <span className="text-[11.5px] font-bold text-[#C99A2E]">
                  {selectedSlot ? `${selectedSlot} IST` : "Select time slot"}
                </span>
              </div>

              <div className="p-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col">
                <span className="text-[10px] font-bold uppercase text-[#7B8DAA]">Duration</span>
                <span className="text-[13px] font-black text-[#0B1D3A]">
                  {selectedDuration ? selectedDuration.duration : "Select duration"}
                </span>
                <span className="text-[11.5px] font-bold text-[#10B981] flex items-center gap-1">
                  <Video size={11} /> Google Meet
                </span>
              </div>
            </div>

            {/* Total Fee & Action Button */}
            <div className="pt-2 border-t border-[#E6EBF3] flex flex-col gap-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#7B8DAA] block">
                    Total Session Fee
                  </span>
                  <span className="text-[11px] text-[#10B981] font-semibold">
                    ✓ Scorecard & Rubrics included FREE
                  </span>
                </div>
                <span className="text-[26px] font-black text-[#0B1D3A]">
                  {selectedDuration ? selectedDuration.price : "—"}
                </span>
              </div>

              <PrimaryButton
                full
                variant="gold"
                onClick={handleConfirmBooking}
                className="!h-13 text-[14px] font-bold shadow-lg cursor-pointer"
              >
                {selectedDuration 
                  ? `Confirm & Book with ${activeExpert.name.split(" ")[0]} (${selectedDuration.price})`
                  : `Select Duration & Slot to Book`}
              </PrimaryButton>
            </div>

            {/* Trust and Guarantee Badges */}
            <div className="pt-1 flex flex-col gap-1.5 text-[11px] text-[#64748B]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#10B981] shrink-0" />
                <span>100% money-back satisfaction guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={13} className="text-[#3B82F6] shrink-0" />
                <span>Live 1-on-1 Google Meet video simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-[#C99A2E] shrink-0" />
                <span>Actionable rubric scorecard & recorded review</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Confirmation Success Modal */}
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
                Your Mock Session is Confirmed! 🎉
              </h3>
              <p className="text-[13px] font-medium text-[#7B8DAA] mb-6">
                You're scheduled to practice live with {activeExpert.name}.
              </p>

              <div className="w-full bg-[#F8FAFD] rounded-[16px] p-5 border border-[#E6EBF3] text-left flex flex-col gap-2.5 mb-6 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Scenario</span>
                  <span className="text-[#0B1D3A] font-bold max-w-[240px] truncate text-right">
                    {scenarioText.trim() || "Price Objection Role-play"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Mentor</span>
                  <span className="text-[#0B1D3A] font-bold">{activeExpert.name} (Age: {activeExpert.age || 38})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Scheduled At</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDate} · {selectedSlot} IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-semibold">Duration & Fee</span>
                  <span className="text-[#0B1D3A] font-bold">{selectedDuration.duration} ({selectedDuration.price})</span>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <PrimaryButton full variant="gold" className="!h-11 text-[13px] font-bold">
                  Join Google Meet Room <ExternalLink size={14} className="ml-1" />
                </PrimaryButton>
                <button
                  onClick={() => setIsBooked(false)}
                  className="h-11 px-5 rounded-[10px] border border-[#CBD5E1] text-[13px] font-bold text-[#0B1D3A] hover:bg-[#F8FAFD] transition-colors cursor-pointer"
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
