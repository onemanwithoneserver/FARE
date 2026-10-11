import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Check,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Moon,
  ArrowLeft,
  AlertCircle,
  User,
  X,
  Edit3,
} from "lucide-react";
import { data } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, Section, SectionHeader, PrimaryButton, SecondaryButton } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration", label: "Session Duration" },
  { id: 2, title: "Scenario", label: "Practice Scenario" },
  { id: 3, title: "Date & Time", label: "Select Slot" },
  { id: 4, title: "Review", label: "Review & Confirm" },
];

export default function Desktop({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [currentStep, setCurrentStep] = useState(1);
  const [internalExpertIndex, setInternalExpertIndex] = useState<number | null>(null);
  const activeExpert: Expert | null =
    propExpert !== undefined
      ? propExpert
      : internalExpertIndex !== null
      ? expertsList[internalExpertIndex]
      : null;

  const [selectedDurationId, setSelectedDurationId] = useState<string>("45");
  const [scenarioText, setScenarioText] = useState("Handling a Price Objection");
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedSlot, setSelectedSlot] = useState<string>("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const quickScenarios = useMemo(
    () => [
      { title: "Handling a Price Objection", tag: "Most Popular" },
      { title: "Negotiation & Margin Protection", tag: "Closing" },
      { title: "First-Time Homebuyer Pitch", tag: "Consultative" },
      { title: "Site Visit Urgency & Spot Booking", tag: "High-Ticket" },
      { title: "Skeptical Investor / ROI Challenge", tag: "Commercial" },
    ],
    []
  );

  const selectedDuration = useMemo(
    () => s.durations.find((d) => d.id === selectedDurationId) || s.durations[1],
    [selectedDurationId, s.durations]
  );

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedDurationId) {
      setValidationError("Please select a session duration to continue.");
      return;
    }
    if (currentStep === 2 && !scenarioText.trim()) {
      setValidationError("Please select or enter a practice scenario to continue.");
      return;
    }
    if (currentStep === 3 && (!selectedDate || !selectedSlot)) {
      setValidationError("Please select your preferred date and time slot to continue.");
      return;
    }
    setValidationError(null);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirmBooking = () => {
    if (!activeExpert) {
      setValidationError("Please select a mentor to practice with before confirming your reservation.");
      setIsSwitchExpertOpen(true);
      return;
    }
    setIsBooked(true);
  };

  const handleSelectExpert = (exp: Expert, idx: number) => {
    if (onSelectExpert) {
      onSelectExpert(exp);
    } else {
      setInternalExpertIndex(idx);
    }
    setValidationError(null);
    setIsSwitchExpertOpen(false);
  };

  const handleClearExpert = () => {
    if (onSelectExpert) {
      onSelectExpert(null);
    } else {
      setInternalExpertIndex(null);
    }
  };

  return (
    <Section tone="soft" ariaLabel="Choose Session, Date & Time" id="booking-section" className="!py-20 relative font-['Outfit']">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C99A2E]/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B1D3A]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader
        eyebrow="Reserve 1-on-1 Practice"
        icon={Calendar}
        accent={ACCENTS[7]}
        title="Choose Session, Date & Time"
        description="Select duration, realistic scenario, and preferred time slot to practice with your verified real estate mentor."
      />

      <div className="max-w-[1060px] mx-auto w-full mb-8 px-4 xl:px-0">
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] rounded-[22px] p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_14px_40px_rgba(11,29,58,0.14)] border border-[#C99A2E]/25 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#C99A2E]/15 blur-2xl pointer-events-none" />

          {activeExpert ? (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-white/40 shadow-md">
                  <img
                    src={activeExpert.image}
                    alt={activeExpert.name}
                    className="w-full h-full object-cover rounded-full bg-slate-800"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#10B981] border-2 border-[#0B1D3A] rounded-full" title="Online" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[11px] font-bold text-white/60">·</span>
                  <span className="text-[12px] font-bold text-white/80">{activeExpert.experience}</span>
                </div>
                <h4 className="text-[19px] font-black tracking-tight leading-snug">{activeExpert.name}</h4>
                <p className="text-[12.5px] text-white/70 truncate">{activeExpert.role}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#C99A2E]/60 bg-white/5 flex items-center justify-center text-[#D5AA45] shrink-0 shadow-inner">
                <User size={26} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[11px] font-bold text-white/60">·</span>
                  <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-white/10 text-white/90">
                    0 Selected
                  </span>
                </div>
                <h4 className="text-[19px] font-black tracking-tight leading-snug">No Mentor Selected</h4>
                <p className="text-[12.5px] text-white/70">Choose an expert to practice 1-on-1 with customized feedback</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 relative z-10">
            {activeExpert && (
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-3.5 py-2 rounded-[12px] bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 text-[12.5px] font-bold transition-all cursor-pointer flex items-center gap-1.5"
                title="Deselect mentor"
              >
                <X size={13} />
                <span>Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="px-4 py-2 rounded-[12px] bg-[#C99A2E] hover:bg-[#D5AA45] text-[#0B1D3A] font-black text-[12.5px] transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              <span>{activeExpert ? "Change Mentor" : "+ Choose Mentor"}</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isSwitchExpertOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-3 bg-white rounded-[20px] border border-[#E6EBF3] p-4 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6EBF3]">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-black text-[#0B1D3A]">Available Mentors</span>
                  <span className="text-[11px] font-bold text-[#7B8DAA]">(Select an expert for your 1-on-1 session)</span>
                </div>
                {activeExpert && (
                  <button
                    type="button"
                    onClick={handleClearExpert}
                    className="text-[11.5px] font-black text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    Deselect Mentor
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {expertsList.map((exp, idx) => {
                  const isCurrent = activeExpert?.name === exp.name;
                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpert(exp, idx)}
                      className={`p-3 rounded-[14px] border cursor-pointer transition-all flex items-center gap-3 ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-2 ring-[#C99A2E]/20"
                          : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#CBD5E1]"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13px] font-black text-[#0B1D3A] truncate">{exp.name}</span>
                        <span className="text-[11px] font-bold text-[#C99A2E]">{exp.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-[1060px] mx-auto w-full mb-8 px-4 xl:px-0">
        <div className="bg-white rounded-[20px] border border-[#E6EBF3] p-4 sm:p-5 shadow-sm">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-[#E6EBF3] z-0" />
            <div
              className="absolute top-1/2 left-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#0B1D3A] to-[#C99A2E] z-0 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />

            {STEPS.map((step) => {
              const isPast = step.id < currentStep;
              const isCurrent = step.id === currentStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => isPast && setCurrentStep(step.id)}
                  disabled={!isPast}
                  className={`relative z-10 flex flex-col items-center gap-2 group cursor-pointer ${
                    !isPast && !isCurrent ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-black transition-all duration-300 ${
                      isPast
                        ? "bg-[#10B981] text-white shadow-md shadow-[#10B981]/25"
                        : isCurrent
                        ? "bg-[#0B1D3A] text-[#D5AA45] ring-4 ring-[#C99A2E]/25 shadow-md shadow-[#0B1D3A]/25"
                        : "bg-white border-2 border-[#CBD5E1] text-[#7B8DAA]"
                    }`}
                  >
                    {isPast ? <Check size={16} strokeWidth={3} /> : step.id}
                  </div>
                  <div className="text-center">
                    <span
                      className={`text-[12px] font-black block tracking-tight ${
                        isCurrent ? "text-[#0B1D3A]" : isPast ? "text-[#10B981]" : "text-[#7B8DAA]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-[10px] font-bold text-[#7B8DAA] hidden sm:block">
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto w-full px-4 xl:px-0">
        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-[14px] bg-amber-50 border border-amber-200 text-amber-900 text-[13.5px] font-bold flex items-center gap-2.5"
          >
            <AlertCircle size={18} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </motion.div>
        )}

        <div className="bg-white rounded-[26px] border border-[#E6EBF3] shadow-[0_12px_40px_rgba(11,29,58,0.05)] p-6 sm:p-8 min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight">
                    Select Session Duration & Format
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#5A6B82]">
                    Choose the duration that matches your practice objective and schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    return (
                      <div
                        key={dur.id}
                        onClick={() => setSelectedDurationId(dur.id)}
                        className={`p-6 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-2 ring-[#C99A2E]/25 shadow-lg shadow-[#C99A2E]/10 -translate-y-1"
                            : "bg-white border-[#E6EBF3] hover:border-[#CBD5E1] hover:shadow-md"
                        }`}
                      >
                        {dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-[12px]">
                            Recommended
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[32px] font-black text-[#0B1D3A] leading-none">
                              {dur.duration}
                            </span>
                            <span className="text-[18px] font-black text-[#C99A2E]">
                              {dur.price}
                            </span>
                          </div>

                          <h4 className="text-[16px] font-black text-[#0B1D3A] mb-1.5">{dur.label}</h4>
                          <p className="text-[12.5px] text-[#5A6B82] leading-relaxed mb-4">{dur.desc}</p>
                        </div>

                        <div className="pt-4 border-t border-[#F0F4FA] flex flex-col gap-2">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[12px] font-semibold text-[#3B4D66]">
                              <Check size={13} className="text-[#10B981] shrink-0" strokeWidth={3} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight">
                    Choose Your Practice Scenario
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#5A6B82]">
                    Select a realistic role-play scenario for your session or describe a custom customer objection.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#7B8DAA]">
                    Quick Suggested Scenarios
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quickScenarios.map((sc) => {
                      const isSelected = scenarioText === sc.title;
                      return (
                        <div
                          key={sc.title}
                          onClick={() => setScenarioText(sc.title)}
                          className={`p-4 rounded-[16px] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? "bg-[#FFFDF7] border-[#C99A2E] ring-2 ring-[#C99A2E]/20"
                              : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-[#C99A2E] text-white" : "border-2 border-[#CBD5E1]"
                              }`}
                            >
                              {isSelected && <Check size={13} strokeWidth={3} />}
                            </div>
                            <span className="text-[13.5px] font-extrabold text-[#0B1D3A] leading-snug">
                              {sc.title}
                            </span>
                          </div>
                          <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                            {sc.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1.5">
                      <Edit3 size={13} className="text-[#C99A2E]" />
                      Custom Scenario Description / Specific Goal
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={3}
                      placeholder="e.g., A client is comparing my luxury project in Jubilee Hills with a competitor..."
                      className="w-full p-4 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] focus:bg-white focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 text-[13.5px] font-medium text-[#0B1D3A] outline-none transition-all resize-none font-['Outfit']"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight">
                    Select Date & Time Slot
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#5A6B82]">
                    Pick an upcoming date and time slot that fits your schedule.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#7B8DAA] block mb-2.5">
                      1. Select Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                      {s.dates.map((d) => {
                        const isSelected = selectedDate === d.label;
                        return (
                          <button
                            key={d.label}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`p-3 rounded-[16px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-md -translate-y-1"
                                : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A]"
                            }`}
                          >
                            <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-[#D5AA45]" : "text-[#7B8DAA]"}`}>
                              {d.day}
                            </span>
                            <span className="text-[15px] font-black leading-none">{d.date}</span>
                            <span className={`text-[10px] font-bold ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#7B8DAA] block mb-2.5">
                      2. Select Available Slot
                    </span>
                    <div className="flex flex-col gap-3">
                      {s.timeSlots.map((period) => (
                        <div key={period.period} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3.5 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3]">
                          <span className="text-[12px] font-black text-[#7B8DAA] uppercase tracking-wider w-24 shrink-0 flex items-center gap-1.5">
                            {period.period === "Morning" ? <Sun size={14} className="text-[#F59E0B]" /> : <Moon size={14} className="text-[#6366F1]" />}
                            {period.period}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {period.slots.map((slot) => {
                              const isSelected = selectedSlot === slot.time;
                              return (
                                <button
                                  key={slot.time}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot.time)}
                                  className={`px-3.5 py-1.5 rounded-[10px] text-[12.5px] font-black transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-[#C99A2E] text-white shadow-sm"
                                      : "bg-white border border-[#E6EBF3] text-[#0B1D3A] hover:border-[#CBD5E1]"
                                  }`}
                                >
                                  {slot.time}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight">
                    Review & Confirm Your Reservation
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#5A6B82]">
                    Verify session details and confirm to secure your mentor's calendar.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-[20px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-4">
                    {activeExpert ? (
                      <div className="flex items-center justify-between pb-3 border-b border-[#E6EBF3]">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={activeExpert.image}
                            alt={activeExpert.name}
                            className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          <div>
                            <h4 className="text-[16px] font-black text-[#0B1D3A]">{activeExpert.name}</h4>
                            <p className="text-[12px] font-bold text-[#7B8DAA]">{activeExpert.role}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="text-[12px] font-extrabold text-[#C99A2E] hover:underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 rounded-[14px] bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
                            <User size={18} />
                          </div>
                          <div>
                            <span className="text-[13.5px] font-black text-amber-900 block leading-tight">No Mentor Selected</span>
                            <span className="text-[11px] font-medium text-amber-700">Please choose a mentor to confirm</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="px-3 py-1.5 rounded-[10px] bg-[#0B1D3A] text-[#D5AA45] text-[11.5px] font-black cursor-pointer shadow-xs shrink-0"
                        >
                          + Select
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-2.5 text-[13px]">
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-bold">Duration:</span>
                        <span className="font-extrabold text-[#0B1D3A]">{selectedDuration.duration} ({selectedDuration.label})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-bold">Date & Time:</span>
                        <span className="font-extrabold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-bold">Format:</span>
                        <span className="font-extrabold text-[#0B1D3A]">1-on-1 Live Role-Play (Google Meet)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-[12px] bg-white border border-[#E6EBF3]">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#7B8DAA] block mb-1">
                        Practice Scenario:
                      </span>
                      <p className="text-[12.5px] font-bold text-[#0B1D3A]">{scenarioText}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-[20px] bg-white border border-[#E6EBF3] shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-[15px] font-black text-[#0B1D3A] mb-3">Investment Summary</h4>
                      <div className="flex flex-col gap-2 text-[13px]">
                        <div className="flex justify-between text-[#5A6B82]">
                          <span>Session Fee ({selectedDuration.duration}):</span>
                          <span>{selectedDuration.price}</span>
                        </div>
                        <div className="flex justify-between text-[#5A6B82]">
                          <span>Platform & Meeting Setup:</span>
                          <span className="text-[#10B981] font-bold">Included</span>
                        </div>
                        <div className="flex justify-between text-[#5A6B82]">
                          <span>Detailed Rubric Scorecard:</span>
                          <span className="text-[#10B981] font-bold">Included</span>
                        </div>
                        <div className="pt-3 border-t border-[#E6EBF3] flex justify-between text-[16px] font-black text-[#0B1D3A]">
                          <span>Total Investment:</span>
                          <span className="text-[#C99A2E]">{selectedDuration.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-2.5 text-[12px] font-bold text-[#475569]">
                      <ShieldCheck size={18} className="text-[#10B981] shrink-0" />
                      <span>100% Satisfaction Guarantee. Full session retry if unsatisfied.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 border-t border-[#F0F4FA] flex items-center justify-between mt-6">
            {currentStep > 1 ? (
              <SecondaryButton
                onClick={handlePrevStep}
                className="!h-11 !px-5 text-[13px] !rounded-[12px] font-extrabold flex items-center gap-2"
              >
                <ArrowLeft size={15} />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-11 !px-6 text-[13.5px] !rounded-[12px] font-extrabold shadow-md cursor-pointer"
              >
                Continue to Next Step
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-12 !px-8 text-[14px] !rounded-[12px] font-black shadow-lg cursor-pointer"
              >
                Confirm & Reserve Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBooked(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              className="relative z-10 w-full max-w-md bg-white rounded-[28px] p-7 border border-[#E6EBF3] shadow-2xl flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8FBF3] border-4 border-[#A7F3D0] text-[#059669] flex items-center justify-center shadow-md">
                <Check size={32} strokeWidth={3} />
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                  Booking Confirmed
                </span>
                <h3 className="text-[22px] font-black text-[#0B1D3A] tracking-tight">
                  Your Slot is Reserved!
                </h3>
                <p className="text-[13px] text-[#5A6B82] mt-1">
                  A Google Meet invitation has been generated for your session with {activeExpert?.name || "your mentor"}.
                </p>
              </div>

              <div className="w-full p-4 rounded-[16px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2 text-left text-[12.5px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-bold">Date & Time:</span>
                  <span className="font-extrabold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-bold">Duration:</span>
                  <span className="font-extrabold text-[#0B1D3A]">{selectedDuration.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-bold">Scenario:</span>
                  <span className="font-extrabold text-[#0B1D3A] truncate max-w-[180px]">{scenarioText}</span>
                </div>
              </div>

              <PrimaryButton
                full
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  setCurrentStep(1);
                }}
                className="!h-11 !rounded-[12px] font-black mt-2 cursor-pointer"
              >
                Done
              </PrimaryButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
