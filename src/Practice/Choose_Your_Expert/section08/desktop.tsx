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
  Sparkles,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
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

  const [selectedDurationId, setSelectedDurationId] = useState<string | null>(null);
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
    () => (selectedDurationId ? s.durations.find((d) => d.id === selectedDurationId) || null : null),
    [selectedDurationId, s.durations]
  );

  const currentDurationPrice = useMemo(() => {
    return getExpertDurationPrice(activeExpert?.price, selectedDurationId);
  }, [activeExpert?.price, selectedDurationId]);

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
    if (!selectedDurationId) {
      setValidationError("Please select a session duration to confirm your reservation.");
      setCurrentStep(1);
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
    <Section tone="soft" ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-3 lg:!pt-4 !pb-10 lg:!pb-12 relative font-['Outfit']">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C99A2E]/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B1D3A]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader
        eyebrow="Reserve 1-on-1 Practice"
        icon={Calendar}
        accent={ACCENTS[7]}
        title="Choose Session, Date & Time"
        description="Select duration, realistic scenario, and preferred time slot to practice with your verified real estate mentor."
        className="!mb-4 lg:!mb-5"
      />

      <div className="max-w-[1200px] mx-auto w-full mb-3.5">
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] rounded-[20px] p-3.5 sm:p-4 text-white flex flex-col md:flex-row items-center justify-between gap-3.5 shadow-[0_12px_36px_rgba(11,29,58,0.12)] border border-[#C99A2E]/25 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#C99A2E]/15 blur-2xl pointer-events-none" />

          {activeExpert ? (
            <div className="flex items-center gap-3.5 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-white/40 shadow-md">
                  <img
                    src={activeExpert.image}
                    alt={activeExpert.name}
                    className="w-full h-full object-cover rounded-full bg-slate-800"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-[#0B1D3A] rounded-full" title="Online" />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[10px] font-medium text-white/50">·</span>
                  <span className="text-[11.5px] font-semibold text-white/80">{activeExpert.experience}</span>
                </div>
                <h4 className="text-[18px] font-bold tracking-tight leading-snug truncate">{activeExpert.name}</h4>
                <p className="text-[12px] text-white/70 truncate">{activeExpert.role}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3.5 relative z-10 w-full md:w-auto">
              <div className="w-13 h-13 rounded-full border-2 border-dashed border-[#C99A2E]/60 bg-white/5 flex items-center justify-center text-[#D5AA45] shrink-0 shadow-inner">
                <User size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[10px] font-medium text-white/50">·</span>
                  <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/90">
                    0 Selected
                  </span>
                </div>
                <h4 className="text-[18px] font-bold tracking-tight leading-snug">No Mentor Selected</h4>
                <p className="text-[12px] text-white/70">Choose an expert to practice 1-on-1 with customized feedback</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 relative z-10 shrink-0">
            {activeExpert && (
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-3 py-1.5 rounded-[11px] bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                title="Deselect mentor"
              >
                <X size={12} />
                <span>Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="px-3.5 py-1.5 rounded-[11px] bg-[#C99A2E] hover:bg-[#D5AA45] text-[#0B1D3A] font-bold text-[12px] transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
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
                  <span className="text-[13px] font-bold text-[#0B1D3A]">Available Mentors</span>
                  <span className="text-[11px] font-medium text-[#7B8DAA]">(Select an expert for your 1-on-1 session)</span>
                </div>
                {activeExpert && (
                  <button
                    type="button"
                    onClick={handleClearExpert}
                    className="text-[11.5px] font-semibold text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    Deselect Mentor
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                {expertsList.map((exp, idx) => {
                  const isCurrent = activeExpert?.name === exp.name;
                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpert(exp, idx)}
                      className={`p-2.5 rounded-[14px] border cursor-pointer transition-all flex items-center gap-2.5 ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-2 ring-[#C99A2E]/20"
                          : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#CBD5E1]"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[12px] font-bold text-[#0B1D3A] truncate">{exp.name}</span>
                        <span className="text-[10.5px] font-semibold text-[#C99A2E]">{exp.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-[1200px] mx-auto w-full mb-3.5">
        <div className="bg-white/95 backdrop-blur-md rounded-[20px] border border-[#E6EBF3] p-3.5 sm:p-4 shadow-[0_8px_24px_rgba(11,29,58,0.04)] relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent" />

          <div className="relative">
            <div className="absolute top-5 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2.5px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-5 left-[12.5%] -translate-y-1/2 h-[2.5px] rounded-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#C99A2E] shadow-[0_0_10px_rgba(201,154,46,0.45)] pointer-events-none"
              initial={false}
              animate={{
                width: `${((currentStep - 1) / (STEPS.length - 1)) * 75}%`,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            />

            <div className="grid grid-cols-4 relative z-10">
              {STEPS.map((step) => {
                const isPast = step.id < currentStep;
                const isCurrent = step.id === currentStep;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => isPast && setCurrentStep(step.id)}
                    disabled={!isPast}
                    className={`flex flex-col items-center group select-none transition-all duration-200 ${
                      isPast ? "cursor-pointer" : isCurrent ? "cursor-default" : "cursor-not-allowed opacity-65"
                    }`}
                  >
                    <div className="relative flex items-center justify-center w-10 h-10 mb-1.5">
                      {isCurrent && (
                        <>
                          <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.7, 0.35] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-1 rounded-full bg-[#C99A2E]/25 blur-xs pointer-events-none"
                          />
                          <span className="absolute -inset-0.5 rounded-full ring-2 ring-[#C99A2E] ring-offset-2 ring-offset-white pointer-events-none" />
                        </>
                      )}

                      <motion.div
                        whileHover={isPast ? { scale: 1.08, y: -1.5 } : {}}
                        whileTap={isPast ? { scale: 0.95 } : {}}
                        className={`w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 relative z-10 ${
                          isPast
                            ? "bg-gradient-to-tr from-[#059669] to-[#10B981] text-white shadow-[0_4px_14px_rgba(16,185,129,0.3)] ring-2 ring-white"
                            : isCurrent
                            ? "bg-gradient-to-tr from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-[#D5AA45] shadow-[0_6px_18px_rgba(11,29,58,0.25)] ring-2 ring-[#C99A2E]"
                            : "bg-white border-2 border-[#CBD5E1] text-[#7B8DAA] shadow-xs"
                        }`}
                      >
                        {isPast ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <Check size={16} strokeWidth={2.6} />
                          </motion.div>
                        ) : (
                          <span>{step.id}</span>
                        )}
                      </motion.div>
                    </div>

                    <div className="text-center px-1">
                      <span
                        className={`text-[12px] font-bold block tracking-tight transition-colors duration-200 ${
                          isCurrent
                            ? "text-[#0B1D3A]"
                            : isPast
                            ? "text-[#059669] group-hover:text-[#047857]"
                            : "text-[#64748B]"
                        }`}
                      >
                        {step.title}
                      </span>
                      <span
                        className={`text-[10px] font-medium hidden sm:block transition-colors duration-200 ${
                          isCurrent
                            ? "text-[#C99A2E] font-semibold"
                            : isPast
                            ? "text-[#10B981]/80"
                            : "text-[#94A3B8]"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full">
        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-3.5 rounded-[14px] bg-amber-50 border border-amber-200 text-amber-900 text-[13px] font-semibold flex items-center gap-2.5"
          >
            <AlertCircle size={17} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </motion.div>
        )}

        <div className="bg-white rounded-[22px] border border-[#E6EBF3] shadow-[0_10px_30px_rgba(11,29,58,0.04)] p-4 sm:p-5.5 min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A] tracking-tight">
                    Select Session Duration & Format
                  </h3>
                  <p className="text-[13px] font-normal text-[#5A6B82] mt-0.5">
                    Choose the duration that matches your practice objective and schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-5 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-2 ring-[#C99A2E]/35 shadow-[0_14px_32px_rgba(201,154,46,0.15)] -translate-y-1"
                            : "bg-white border-[#E6EBF3] hover:border-[#CBD5E1] hover:shadow-md hover:shadow-slate-100"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-[#D5AA45] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-[12px] shadow-xs">
                              <Check size={11} strokeWidth={2.6} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E]/15 border-b border-l border-[#C99A2E]/30 text-[#C99A2E] text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-[12px]">
                            Recommended
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-2.5 mt-1">
                            <span className="text-[26px] font-bold text-[#0B1D3A] leading-none tracking-tight">
                              {dur.duration}
                            </span>

                            {durPrice ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-baseline gap-1"
                              >
                                <span className="text-[20px] font-bold text-[#C99A2E]">
                                  {durPrice.price}
                                </span>
                                <span className="text-[10.5px] font-medium text-[#7B8DAA]">/session</span>
                              </motion.div>
                            ) : (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsSwitchExpertOpen(true);
                                }}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#0B1D3A]/5 hover:bg-[#C99A2E]/15 border border-[#E6EBF3] hover:border-[#C99A2E]/50 text-[11px] font-semibold text-[#5A6B82] hover:text-[#C99A2E] transition-all cursor-pointer"
                                title="Select a mentor to view exact session fee"
                              >
                                <User size={11} className="text-[#C99A2E]" />
                                <span>Fee on select</span>
                              </button>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-[15.5px] font-bold text-[#0B1D3A]">{dur.label}</h4>
                            {isSelected && dur.recommended && (
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#C99A2E]/15 text-[#C99A2E] uppercase tracking-wider">
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-[12px] text-[#5A6B82] leading-relaxed mb-3.5">{dur.desc}</p>
                        </div>

                        <div className="pt-3.5 border-t border-[#F0F4FA] flex flex-col gap-2">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[12px] text-[#3B4D66]">
                              <div
                                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected ? "bg-[#10B981] text-white" : "bg-[#10B981]/15 text-[#10B981]"
                                }`}
                              >
                                <Check size={9} strokeWidth={2.8} />
                              </div>
                              <span className={isSelected ? "font-semibold text-[#0B1D3A]" : "font-normal text-[#5A6B82]"}>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-[16px] bg-gradient-to-r from-[#FFFDF7] via-white to-[#F8FAFD] border border-[#C99A2E]/35 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C99A2E]/15 border border-[#C99A2E]/30 text-[#C99A2E] flex items-center justify-center shrink-0">
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <h5 className="text-[12.5px] font-bold text-[#0B1D3A]">No Mentor Selected Yet</h5>
                        <p className="text-[11.5px] font-normal text-[#5A6B82]">
                          Session fees are customized per verified mentor experience tier. Choose a mentor anytime to view exact rates.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="px-3.5 py-1.5 rounded-[10px] bg-[#0B1D3A] hover:bg-[#122B54] text-[#D5AA45] text-[12px] font-bold transition-all cursor-pointer shadow-xs shrink-0 flex items-center gap-1.5"
                    >
                      <User size={12} />
                      <span>+ Choose Mentor</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] text-[12px] text-[#5A6B82]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0B1D3A]">Custom mentor rates applied for:</span>
                      <span className="font-bold text-[#C99A2E]">{activeExpert.name}</span>
                      <span className="text-[#CBD5E1]">·</span>
                      <span className="font-medium text-[#0B1D3A]">{activeExpert.experience}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="text-[#C99A2E] font-bold hover:underline cursor-pointer"
                    >
                      Change Mentor
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A] tracking-tight">
                    Choose Your Practice Scenario
                  </h3>
                  <p className="text-[13px] font-normal text-[#5A6B82] mt-0.5">
                    Select a realistic role-play scenario for your session or describe a custom customer objection.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA]">
                    Quick Suggested Scenarios
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {quickScenarios.map((sc) => {
                      const isSelected = scenarioText === sc.title;
                      return (
                        <div
                          key={sc.title}
                          onClick={() => setScenarioText(sc.title)}
                          className={`p-3.5 rounded-[16px] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? "bg-[#FFFDF7] border-[#C99A2E] ring-2 ring-[#C99A2E]/20"
                              : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-[#C99A2E] text-white" : "border-2 border-[#CBD5E1]"
                              }`}
                            >
                              {isSelected && <Check size={12} strokeWidth={2.8} />}
                            </div>
                            <span className="text-[13px] font-bold text-[#0B1D3A] leading-snug">
                              {sc.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                            {sc.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1.5">
                      <Edit3 size={12} className="text-[#C99A2E]" />
                      Custom Scenario Description / Specific Goal
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={3}
                      placeholder="e.g., A client is comparing my luxury project in Jubilee Hills with a competitor..."
                      className="w-full p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] focus:bg-white focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 text-[13px] font-normal text-[#0B1D3A] outline-none transition-all resize-none font-['Outfit']"
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A] tracking-tight">
                    Select Date & Time Slot
                  </h3>
                  <p className="text-[13px] font-normal text-[#5A6B82] mt-0.5">
                    Pick an upcoming date and time slot that fits your schedule.
                  </p>
                </div>

                <div className="flex flex-col gap-4.5">
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] block mb-2">
                      1. Select Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {s.dates.map((d) => {
                        const isSelected = selectedDate === d.label;
                        return (
                          <button
                            key={d.label}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`p-2.5 rounded-[14px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-md -translate-y-0.5"
                                : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A]"
                            }`}
                          >
                            <span className={`text-[9.5px] font-semibold uppercase ${isSelected ? "text-[#D5AA45]" : "text-[#7B8DAA]"}`}>
                              {d.day}
                            </span>
                            <span className="text-[14px] font-bold leading-none">{d.date}</span>
                            <span className={`text-[9.5px] font-medium ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] block mb-2">
                      2. Select Available Slot
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {s.timeSlots.map((period) => (
                        <div key={period.period} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 p-3 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3]">
                          <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider w-22 shrink-0 flex items-center gap-1.5">
                            {period.period === "Morning" ? <Sun size={13} className="text-[#F59E0B]" /> : <Moon size={13} className="text-[#6366F1]" />}
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
                                  className={`px-3 py-1.5 rounded-[9px] text-[12px] font-semibold transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-[#C99A2E] text-white shadow-xs font-bold"
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A] tracking-tight">
                    Review & Confirm Your Reservation
                  </h3>
                  <p className="text-[13px] font-normal text-[#5A6B82] mt-0.5">
                    Verify session details and confirm to secure your mentor's calendar.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4.5 rounded-[18px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-3.5">
                    {activeExpert ? (
                      <div className="flex items-center justify-between pb-3 border-b border-[#E6EBF3]">
                        <div className="flex items-center gap-3">
                          <img
                            src={activeExpert.image}
                            alt={activeExpert.name}
                            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                          />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B1D3A]">{activeExpert.name}</h4>
                            <p className="text-[11.5px] font-medium text-[#7B8DAA]">{activeExpert.role}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="text-[11.5px] font-bold text-[#C99A2E] hover:underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-[13px] bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
                            <User size={16} />
                          </div>
                          <div>
                            <span className="text-[13px] font-bold text-amber-900 block leading-tight">No Mentor Selected</span>
                            <span className="text-[11px] font-normal text-amber-700">Please choose a mentor to confirm</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="px-2.5 py-1 rounded-[9px] bg-[#0B1D3A] text-[#D5AA45] text-[11px] font-bold cursor-pointer shadow-xs shrink-0"
                        >
                          + Select
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Duration:</span>
                        <span className="font-bold text-[#0B1D3A]">
                          {selectedDuration ? `${selectedDuration.duration} (${selectedDuration.label})` : "Not selected yet"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Date & Time:</span>
                        <span className="font-bold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Format:</span>
                        <span className="font-bold text-[#0B1D3A]">1-on-1 Live Role-Play (Google Meet)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-[12px] bg-white border border-[#E6EBF3]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B8DAA] block mb-1">
                        Practice Scenario:
                      </span>
                      <p className="text-[12px] font-semibold text-[#0B1D3A]">{scenarioText}</p>
                    </div>
                  </div>

                  <div className="p-4.5 rounded-[18px] bg-white border border-[#E6EBF3] shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-[14.5px] font-bold text-[#0B1D3A] mb-3">Investment Summary</h4>
                      {activeExpert && selectedDuration && currentDurationPrice ? (
                        <div className="flex flex-col gap-2 text-[12.5px]">
                          <div className="flex justify-between text-[#5A6B82]">
                            <span>Session Fee ({selectedDuration.duration}):</span>
                            <span className="font-bold text-[#0B1D3A]">{currentDurationPrice.price}</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82]">
                            <span>Platform & Meeting Setup:</span>
                            <span className="text-[#10B981] font-medium">Included</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82]">
                            <span>Detailed Rubric Scorecard:</span>
                            <span className="text-[#10B981] font-medium">Included</span>
                          </div>
                          <div className="pt-2.5 border-t border-[#E6EBF3] flex justify-between text-[15px] font-bold text-[#0B1D3A]">
                            <span>Total Investment:</span>
                            <span className="text-[#C99A2E]">{currentDurationPrice.price}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-[13px] bg-amber-50/70 border border-amber-200/80 flex flex-col gap-2">
                          <span className="text-[12.5px] font-bold text-amber-900">Fee Calculation Pending</span>
                          <p className="text-[11.5px] font-normal text-amber-800">
                            {!activeExpert
                              ? "Please choose a mentor to calculate your exact session fee."
                              : "Please choose a session duration in Step 1 to calculate the fee."}
                          </p>
                          {!activeExpert && (
                            <button
                              type="button"
                              onClick={() => setIsSwitchExpertOpen(true)}
                              className="mt-1 px-3 py-1.5 rounded-[9px] bg-[#0B1D3A] text-[#D5AA45] text-[11px] font-bold w-fit cursor-pointer shadow-xs"
                            >
                              + Choose Mentor
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-3.5 flex items-center gap-2 text-[11.5px] font-medium text-[#475569]">
                      <ShieldCheck size={16} className="text-[#10B981] shrink-0" />
                      <span>100% Satisfaction Guarantee. Full session retry if unsatisfied.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 border-t border-[#F0F4FA] flex items-center justify-between mt-4">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-10 !px-4 text-[12.5px] !rounded-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap cursor-pointer hover:bg-white"
              >
                <ArrowLeft size={14} className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-10.5 !px-5 text-[13px] !rounded-[11px] font-bold shadow-sm cursor-pointer"
              >
                Continue to Next Step
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-11 !px-7 text-[13.5px] !rounded-[11px] font-bold shadow-md cursor-pointer"
              >
                Confirm & Reserve Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
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
              className="relative z-10 w-full max-w-md bg-white rounded-[26px] p-6.5 border border-[#E6EBF3] shadow-2xl flex flex-col items-center text-center gap-3.5"
            >
              <div className="w-14 h-14 rounded-full bg-[#E8FBF3] border-3 border-[#A7F3D0] text-[#059669] flex items-center justify-center shadow-xs">
                <Check size={28} strokeWidth={2.6} />
              </div>

              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                  Booking Confirmed
                </span>
                <h3 className="text-[20px] font-bold text-[#0B1D3A] tracking-tight">
                  Your Slot is Reserved!
                </h3>
                <p className="text-[12.5px] text-[#5A6B82] mt-0.5">
                  A Google Meet invitation has been generated for your session with {activeExpert?.name || "your mentor"}.
                </p>
              </div>

              <div className="w-full p-3.5 rounded-[15px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2 text-left text-[12px]">
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-medium">Date & Time:</span>
                  <span className="font-bold text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-medium">Duration:</span>
                  <span className="font-bold text-[#0B1D3A]">{selectedDuration?.duration || "45 MIN"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7B8DAA] font-medium">Scenario:</span>
                  <span className="font-bold text-[#0B1D3A] truncate max-w-[180px]">{scenarioText}</span>
                </div>
              </div>

              <PrimaryButton
                full
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  setCurrentStep(1);
                }}
                className="!h-10.5 !rounded-[11px] font-bold mt-1.5 cursor-pointer"
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
