import { useState, useMemo, useEffect } from "react";
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
  Clock,
  Layers,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, Section, SectionHeader, PrimaryButton, SecondaryButton } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration", subtitle: "Session Length", icon: Clock },
  { id: 2, title: "Scenario", subtitle: "Practice Topic", icon: Sparkles },
  { id: 3, title: "Date & Time", subtitle: "Schedule Slot", icon: Calendar },
  { id: 4, title: "Review", subtitle: "Confirmation", icon: Layers },
];

export default function Desktop({ selectedExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [activeExpert, setActiveExpert] = useState<Expert | null>(selectedExpert || null);
  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (selectedExpert !== undefined) {
      setActiveExpert(selectedExpert);
    }
  }, [selectedExpert]);

  const [selectedDurationId, setSelectedDurationId] = useState<string>(
    s.durations.find((d) => d.recommended)?.id || s.durations[0]?.id || ""
  );
  const [scenarioText, setScenarioText] = useState("Handling a Price Objection");
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedSlot, setSelectedSlot] = useState<string>("6:30 PM");
  const [isBooked, setIsBooked] = useState(false);
  const [isSwitchExpertOpen, setIsSwitchExpertOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (!isBooked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isBooked]);

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
    if (!activeExpert || !selectedDurationId) return null;
    return getExpertDurationPrice(activeExpert.price, selectedDurationId);
  }, [activeExpert, selectedDurationId]);

  const handleSelectExpert = (expert: Expert, _idx: number) => {
    setActiveExpert(expert);
    if (onSelectExpert) onSelectExpert(expert);
    setIsSwitchExpertOpen(false);
  };

  const handleClearExpert = () => {
    setActiveExpert(null);
    if (onSelectExpert) onSelectExpert(null);
  };

  const goToStep = (stepNumber: number) => {
    setValidationError(null);
    setSlideDirection(stepNumber > currentStep ? "forward" : "backward");
    setCurrentStep(stepNumber);
  };

  const handleNextStep = () => {
    setValidationError(null);
    if (currentStep === 1) {
      if (!selectedDurationId) {
        setValidationError("Please select a session duration to continue.");
        return;
      }
    } else if (currentStep === 2) {
      if (!scenarioText.trim()) {
        setValidationError("Please specify or choose a practice scenario.");
        return;
      }
    } else if (currentStep === 3) {
      if (!selectedDate || !selectedSlot) {
        setValidationError("Please choose both a date and a time slot.");
        return;
      }
    }
    setSlideDirection("forward");
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setSlideDirection("backward");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirmBooking = () => {
    setIsBooked(true);
  };

  const slideVariants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? 28 : -28,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? -28 : 28,
      opacity: 0,
    }),
  };

  return (
    <Section tone="soft" ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-6 !pb-14 relative font-['Outfit']">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C99A2E]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0B1D3A]/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <SectionHeader
        eyebrow="Reserve 1-on-1 Practice"
        icon={Calendar}
        accent={ACCENTS[7]}
        title="Choose Session, Date & Time"
        description="Select duration, realistic scenario, and preferred time slot to practice with your verified real estate mentor."
        className="!mb-3 lg:!mb-4"
      />

      <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-3">
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] rounded-[18px] p-3 sm:p-3.5 text-white flex flex-col md:flex-row items-center justify-between gap-3 shadow-md border border-[#C99A2E]/25 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C99A2E]/10 blur-xl pointer-events-none" />

          {activeExpert ? (
            <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-white/40 shadow-xs">
                  <img
                    src={activeExpert.image}
                    alt={activeExpert.name}
                    className="w-full h-full object-cover rounded-full bg-slate-800"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#0B1D3A] rounded-full" title="Online" />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[9px] font-normal text-white/50">·</span>
                  <span className="text-[11px] font-medium text-white/90">{activeExpert.experience.split(" ")[0]} Experience</span>
                </div>
                <h4 className="text-[16px] font-medium tracking-tight leading-snug truncate">{activeExpert.name}</h4>
                <p className="text-[11.5px] text-white/70 truncate font-normal">{activeExpert.role}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
              <span className="w-10 h-10 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                <User size={18} strokeWidth={2} />
              </span>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-[#D5AA45]">
                    Mentor Status
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                    Not Selected
                  </span>
                </div>
                <h4 className="text-[15px] font-medium tracking-tight leading-snug">No Mentor Selected Yet</h4>
                <p className="text-[11.5px] text-white/70 font-normal">Pick a mentor anytime to see customized pricing and reserved time slots</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 relative z-10 shrink-0">
            {activeExpert && (
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-3 py-1.5 rounded-[9px] bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 text-[11.5px] font-medium transition-all cursor-pointer flex items-center gap-1.5"
                title="Deselect mentor"
              >
                <X size={12} />
                <span>Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="px-3.5 py-1.5 rounded-[9px] bg-[#C99A2E] hover:bg-[#D5AA45] text-[#0B1D3A] font-medium text-[12px] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span className="w-4 h-4 rounded-[3px] bg-[#0B1D3A] text-white flex items-center justify-center">
                <User size={10} />
              </span>
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
              className="overflow-hidden bg-white rounded-[18px] border border-[#E6EBF3] p-4 shadow-lg"
            >
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E6EBF3]">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-[#0B1D3A]">Available Verified Mentors</span>
                  <span className="text-[11.5px] text-[#7B8DAA] font-normal">(Select a mentor for your 1-on-1 session)</span>
                </div>
                {activeExpert && (
                  <button
                    type="button"
                    onClick={handleClearExpert}
                    className="text-[11.5px] font-medium text-red-500 hover:text-red-600 cursor-pointer"
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
                      className={`p-2.5 rounded-[13px] border cursor-pointer transition-all flex items-center gap-2.5 ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-1 ring-[#C99A2E]/25 shadow-2xs"
                          : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#CBD5E1]"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11.5px] font-medium text-[#0B1D3A] truncate">{exp.name}</span>
                        <span className="text-[10.5px] font-medium text-[#C99A2E]">{exp.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white/95 backdrop-blur-md rounded-[16px] border border-[#E6EBF3] p-2.5 sm:p-3 shadow-2xs relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-4 left-[12.5%] -translate-y-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#C99A2E] pointer-events-none"
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
                    onClick={() => isPast && goToStep(step.id)}
                    disabled={!isPast}
                    className={`flex flex-col items-center group select-none transition-all duration-200 ${
                      isPast ? "cursor-pointer" : isCurrent ? "cursor-default" : "cursor-not-allowed opacity-65"
                    }`}
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 mb-1">
                      {isCurrent && (
                        <span className="absolute -inset-0.5 rounded-full ring-1 ring-[#C99A2E] ring-offset-1 ring-offset-white pointer-events-none" />
                      )}

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-medium transition-all duration-300 relative z-10 ${
                          isPast
                            ? "bg-[#10B981] text-white shadow-2xs"
                            : isCurrent
                            ? "bg-[#0B1D3A] text-white shadow-xs ring-1 ring-[#C99A2E]"
                            : "bg-white border border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? <Check size={13} strokeWidth={3} /> : <span>{step.id}</span>}
                      </div>
                    </div>

                    <div className="text-center px-1">
                      <span
                        className={`text-[11px] font-medium block tracking-tight ${
                          isCurrent
                            ? "text-[#0B1D3A]"
                            : isPast
                            ? "text-[#059669]"
                            : "text-[#64748B]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2.5 rounded-[11px] bg-red-50 border border-red-200 text-red-700 text-[12px] font-medium flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
              <AlertCircle size={10} />
            </span>
            <span>{validationError}</span>
          </motion.div>
        )}

        <div className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_10px_30px_rgba(11,29,58,0.04)] p-5 sm:p-6 overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C99A2E] block mb-0.5">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[18px] font-medium text-[#0B1D3A] tracking-tight">
                    Select Session Duration & Format
                  </h3>
                  <p className="text-[12px] text-[#5A6B82] mt-0.5 font-normal">
                    Choose the duration that matches your practice objective and depth of feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-3.5 rounded-[16px] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-1 ring-[#C99A2E]/30 shadow-xs"
                            : "bg-white border-[#E6EBF3] hover:border-[#CBD5E1]"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-white text-[9.5px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-bl-[10px]">
                              <Check size={9} strokeWidth={3} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E]/15 text-[#C99A2E] text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-bl-[10px]">
                            Recommended
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-2 mt-0.5">
                            <span className="text-[20px] font-medium text-[#0B1D3A] leading-none tracking-tight">
                              {dur.duration}
                            </span>

                            {activeExpert && durPrice ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-baseline gap-1"
                              >
                                <span className="text-[17px] font-medium text-[#C99A2E]">
                                  {durPrice.price}
                                </span>
                                <span className="text-[10px] font-normal text-[#7B8DAA]">/session</span>
                              </motion.div>
                            ) : (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsSwitchExpertOpen(true);
                                }}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-[#F8FAFD] border border-[#E6EBF3] text-[10px] font-medium text-[#5A6B82]"
                              >
                                <span className="w-3.5 h-3.5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center">
                                  <User size={8} />
                                </span>
                                <span>Fee on select</span>
                              </span>
                            )}
                          </div>

                          <span className="text-[11.5px] font-medium text-[#0B1D3A] block mb-1">
                            {dur.label}
                          </span>
                          <p className="text-[11px] text-[#5A6B82] leading-relaxed mb-3 font-normal">
                            {dur.desc}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-[#F0F4FA] flex flex-col gap-1 text-[11px]">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-1.5 text-[#334155] font-normal">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                                <Check size={8} strokeWidth={3} />
                              </span>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert ? (
                  <div className="p-3 rounded-[13px] bg-gradient-to-r from-[#FFFDF7] via-white to-[#F8FAFD] border border-[#C99A2E]/30 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                        <Sparkles size={13} />
                      </span>
                      <div>
                        <h5 className="text-[12px] font-medium text-[#0B1D3A]">Custom Mentor Pricing</h5>
                        <p className="text-[11px] text-[#5A6B82] font-normal">
                          Session rates adapt to each mentor's verified seniority. Select a mentor to preview exact rates.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="px-3 py-1 rounded-[8px] bg-[#0B1D3A] text-white text-[11px] font-medium cursor-pointer shrink-0"
                    >
                      + Choose Mentor
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 rounded-[11px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11.5px] text-[#5A6B82]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-[#0B1D3A]">Custom mentor rates applied:</span>
                      <span className="font-medium text-[#C99A2E]">{activeExpert.name}</span>
                      <span className="text-[#CBD5E1]">·</span>
                      <span className="font-normal text-[#0B1D3A]">{activeExpert.experience}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="text-[#C99A2E] font-medium hover:underline cursor-pointer"
                    >
                      Change
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C99A2E] block mb-0.5">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[18px] font-medium text-[#0B1D3A] tracking-tight">
                    Choose Your Practice Scenario
                  </h3>
                  <p className="text-[12px] text-[#5A6B82] mt-0.5 font-normal">
                    Select a realistic objection drill or enter a custom customer challenge to practice live.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA]">
                    Recommended Simulation Scenarios
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {quickScenarios.map((sc) => {
                      const isSelected = scenarioText === sc.title;
                      return (
                        <div
                          key={sc.title}
                          onClick={() => setScenarioText(sc.title)}
                          className={`p-2.5 rounded-[13px] border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                            isSelected
                              ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/20"
                              : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-[#C99A2E] text-white" : "border border-[#CBD5E1]"
                              }`}
                            >
                              {isSelected && <Check size={10} strokeWidth={3} />}
                            </span>
                            <span className="text-[12px] font-medium text-[#0B1D3A] leading-snug">
                              {sc.title}
                            </span>
                          </div>
                          <span className="text-[9.5px] font-normal px-1.5 py-0.5 rounded-full bg-white border border-[#E6EBF3] text-[#7B8DAA] shrink-0">
                            {sc.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center">
                        <Edit3 size={9} />
                      </span>
                      Custom Scenario Description / Specific Goal
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={2.5}
                      placeholder="e.g., A client is comparing my project with a cheaper competitor and refuses to pay the booking token..."
                      className="w-full p-2.5 rounded-[11px] bg-[#F8FAFD] border border-[#E6EBF3] focus:bg-white focus:border-[#C99A2E] text-[12.5px] font-normal text-[#0B1D3A] outline-none transition-all resize-none font-['Outfit']"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C99A2E] block mb-0.5">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[18px] font-medium text-[#0B1D3A] tracking-tight">
                    Select Date & Time Slot
                  </h3>
                  <p className="text-[12px] text-[#5A6B82] mt-0.5 font-normal">
                    Pick an upcoming date and time slot that fits your schedule.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA] block mb-1.5">
                      1. Choose Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {s.dates.map((d) => {
                        const isSelected = selectedDate === d.label;
                        return (
                          <button
                            key={d.label}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`p-2 rounded-[11px] border text-center transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-xs"
                                : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A]"
                            }`}
                          >
                            <span className={`text-[9px] font-medium uppercase ${isSelected ? "text-[#D5AA45]" : "text-[#7B8DAA]"}`}>
                              {d.day}
                            </span>
                            <span className="text-[13px] font-medium leading-none">{d.date}</span>
                            <span className={`text-[9px] font-normal ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA] block mb-1.5">
                      2. Choose Time Slot
                    </span>
                    <div className="flex flex-col gap-2">
                      {s.timeSlots.map((period) => (
                        <div
                          key={period.period}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-2.5 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3]"
                        >
                          <span className="text-[10.5px] font-medium text-[#7B8DAA] uppercase tracking-wider w-24 shrink-0 flex items-center gap-1.5">
                            {period.period === "Morning" ? (
                              <span className="w-4 h-4 rounded-[3px] bg-[#D97706] text-white flex items-center justify-center">
                                <Sun size={9} />
                              </span>
                            ) : (
                              <span className="w-4 h-4 rounded-[3px] bg-[#4338CA] text-white flex items-center justify-center">
                                <Moon size={9} />
                              </span>
                            )}
                            {period.period}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {period.slots.map((slot) => {
                              const isSelected = selectedSlot === slot.time;
                              return (
                                <button
                                  key={slot.time}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot.time)}
                                  className={`px-2.5 py-1 rounded-[7px] text-[11px] font-medium transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-[#C99A2E] text-white shadow-xs"
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
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C99A2E] block mb-0.5">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[18px] font-medium text-[#0B1D3A] tracking-tight">
                    Review & Confirm Your Reservation
                  </h3>
                  <p className="text-[12px] text-[#5A6B82] mt-0.5 font-normal">
                    Verify session details and confirm to secure your mentor's Google Meet schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-[15px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2.5">
                    {activeExpert ? (
                      <div className="flex items-center justify-between pb-2.5 border-b border-[#E6EBF3]">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={activeExpert.image}
                            alt={activeExpert.name}
                            className="w-9 h-9 rounded-full object-cover border border-[#CBD5E1]"
                          />
                          <div>
                            <h4 className="text-[13.5px] font-medium text-[#0B1D3A]">{activeExpert.name}</h4>
                            <p className="text-[11px] font-normal text-[#7B8DAA]">{activeExpert.role}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="text-[11px] font-medium text-[#C99A2E] hover:underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-[11px] bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                            <User size={13} />
                          </span>
                          <div>
                            <span className="text-[12px] font-medium text-amber-900 block leading-tight">No Mentor Selected</span>
                            <span className="text-[10.5px] text-amber-700 font-normal">Please choose a mentor to confirm</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="px-2 py-0.5 rounded-[7px] bg-[#0B1D3A] text-white text-[10.5px] font-medium cursor-pointer"
                        >
                          + Select
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5 text-[11.5px]">
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-normal">Duration:</span>
                        <span className="font-medium text-[#0B1D3A]">
                          {selectedDuration ? `${selectedDuration.duration} (${selectedDuration.label})` : "45 MIN"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-normal">Date & Time:</span>
                        <span className="font-medium text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-normal">Format:</span>
                        <span className="font-medium text-[#0B1D3A]">1-on-1 Live Role-Play (Google Meet)</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-[10px] bg-white border border-[#E6EBF3]">
                      <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#7B8DAA] block mb-0.5">
                        Practice Scenario:
                      </span>
                      <p className="text-[11.5px] font-medium text-[#0B1D3A]">{scenarioText}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[15px] bg-white border border-[#E6EBF3] shadow-2xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-[13px] font-medium text-[#0B1D3A] mb-2.5">Investment Summary</h4>
                      {activeExpert && selectedDuration && currentDurationPrice ? (
                        <div className="flex flex-col gap-1.5 text-[11.5px]">
                          <div className="flex justify-between text-[#5A6B82] font-normal">
                            <span>Session Fee ({selectedDuration.duration}):</span>
                            <span className="font-medium text-[#0B1D3A]">{currentDurationPrice.price}</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82] font-normal">
                            <span>Platform & Meeting Setup:</span>
                            <span className="text-[#10B981] font-medium">Included</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82] font-normal">
                            <span>Detailed Rubric Scorecard:</span>
                            <span className="text-[#10B981] font-medium">Included</span>
                          </div>
                          <div className="pt-2 border-t border-[#E6EBF3] flex justify-between text-[13.5px] font-medium text-[#0B1D3A]">
                            <span>Total Investment:</span>
                            <span className="text-[#C99A2E]">{currentDurationPrice.price}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-2.5 rounded-[11px] bg-amber-50/70 border border-amber-200/80 flex flex-col gap-1.5">
                          <span className="text-[11.5px] font-medium text-amber-900">Fee Calculation Pending</span>
                          <p className="text-[11px] text-amber-800 font-normal">
                            Please select a mentor to calculate your exact session fee.
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsSwitchExpertOpen(true)}
                            className="mt-0.5 px-2.5 py-1 rounded-[7px] bg-[#0B1D3A] text-white text-[10.5px] font-medium w-fit cursor-pointer"
                          >
                            + Choose Mentor
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="pt-2.5 flex items-center gap-1.5 text-[11px] font-normal text-[#475569]">
                      <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                        <ShieldCheck size={9} />
                      </span>
                      <span>100% Satisfaction Guarantee. Full session retry if unsatisfied.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#F0F4FA] flex items-center justify-between mt-3.5">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-9 !px-3.5 text-[12px] !rounded-[10px] font-medium flex items-center gap-1.5 cursor-pointer hover:bg-white"
              >
                <ArrowLeft size={13} className="shrink-0" />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-9 !px-4 text-[12px] !rounded-[10px] font-medium shadow-xs cursor-pointer"
              >
                Continue to Next Step
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-9.5 !px-5 text-[12.5px] !rounded-[10px] font-medium shadow-xs cursor-pointer"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[400px] bg-white rounded-[24px] p-6 border border-[#E6EBF3] shadow-[0_20px_50px_-12px_rgba(11,29,58,0.2)] overflow-hidden flex flex-col items-center text-center gap-3.5"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />

              <button
                type="button"
                onClick={() => setIsBooked(false)}
                aria-label="Close"
                className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#F3F6FB] hover:bg-[#E2E8F0] text-[#7B8DAA] hover:text-[#0B1D3A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={12} />
              </button>

              <div className="w-13 h-13 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md mb-0.5">
                <Check size={26} strokeWidth={3} />
              </div>

              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#C99A2E] block mb-0.5">
                  Booking Confirmed
                </span>
                <h3 className="text-[19px] font-medium text-[#0B1D3A] tracking-tight leading-tight">
                  Your Slot is Reserved!
                </h3>
                <p className="text-[12px] text-[#5A6B82] mt-0.5 leading-relaxed max-w-[300px] font-normal">
                  A Google Meet invitation has been generated for your session with <span className="font-medium text-[#0B1D3A]">{activeExpert?.name || "your mentor"}</span>.
                </p>
              </div>

              <div className="w-full rounded-[15px] bg-[#F8FAFD] border border-[#E6EBF3] p-3 flex flex-col gap-2 text-left text-[11.5px] shadow-2xs">
                {activeExpert && (
                  <div className="flex items-center gap-2 pb-2 border-b border-[#E6EBF3]/70">
                    <img
                      src={activeExpert.image}
                      alt={activeExpert.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#CBD5E1]"
                    />
                    <div className="min-w-0">
                      <span className="block text-[12px] font-medium text-[#0B1D3A] truncate leading-tight">
                        {activeExpert.name}
                      </span>
                      <span className="block text-[10.5px] text-[#7B8DAA] truncate font-normal">
                        {activeExpert.role.split("·")[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] font-normal flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                      <Calendar size={9} />
                    </span>
                    Date & Time
                  </span>
                  <span className="font-medium text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] font-normal flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                      <Clock size={9} />
                    </span>
                    Duration
                  </span>
                  <span className="font-medium text-[#0B1D3A] bg-white px-2 py-0.5 rounded-[5px] border border-[#E6EBF3]">
                    {selectedDuration?.duration || "45 MIN"}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#7B8DAA] font-normal flex items-center gap-1.5 shrink-0">
                    <span className="w-4 h-4 rounded-[3px] bg-[#7C3AED] text-white flex items-center justify-center shrink-0">
                      <Sparkles size={9} />
                    </span>
                    Scenario
                  </span>
                  <span className="font-medium text-[#0B1D3A] text-right truncate max-w-[180px]">
                    {scenarioText}
                  </span>
                </div>
              </div>

              <div className="pt-0.5">
                <PrimaryButton
                  variant="gold"
                  onClick={() => {
                    setIsBooked(false);
                    goToStep(1);
                  }}
                  className="!w-40 !h-9.5 !rounded-[10px] font-medium text-[12.5px] shadow-xs cursor-pointer"
                >
                  Done
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
