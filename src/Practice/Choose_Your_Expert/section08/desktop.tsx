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
  { id: 1, title: "Duration", label: "Session Duration", icon: Clock },
  { id: 2, title: "Scenario", label: "Practice Scenario", icon: Layers },
  { id: 3, title: "Date & Time", label: "Select Slot", icon: Calendar },
  { id: 4, title: "Review", label: "Review & Confirm", icon: CheckCircle2 },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
  }),
};

export default function Desktop({ selectedExpert: propExpert, onSelectExpert }: Props) {
  const s = data;
  const expertsList = allExpertsData.experts;

  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState(1);
  const [internalExpertIndex, setInternalExpertIndex] = useState<number | null>(null);
  const activeExpert: Expert | null =
    propExpert !== undefined
      ? propExpert
      : internalExpertIndex !== null
      ? expertsList[internalExpertIndex]
      : null;

  const [selectedDurationId, setSelectedDurationId] = useState<string | null>("45");
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

  const goToStep = (stepId: number) => {
    setSlideDirection(stepId > currentStep ? 1 : -1);
    setValidationError(null);
    setCurrentStep(stepId);
  };

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
    setSlideDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setSlideDirection(-1);
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
      goToStep(1);
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
    <Section
      tone="soft"
      ariaLabel="Choose Session, Date & Time"
      id="booking-section"
      className="!pt-4 lg:!pt-6 !pb-12 lg:!pb-14 relative font-['Outfit']"
    >
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

      <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-4">
        <div className="bg-gradient-to-r from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] rounded-[22px] p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_12px_36px_rgba(11,29,58,0.12)] border border-[#C99A2E]/25 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#C99A2E]/15 blur-2xl pointer-events-none" />

          {activeExpert ? (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full p-[2.5px] bg-gradient-to-tr from-[#C99A2E] to-white/40 shadow-md">
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
                  <span className="text-[10.5px] font-black tracking-wider uppercase text-[#D5AA45]">
                    Selected Mentor
                  </span>
                  <span className="text-[10px] font-medium text-white/50">·</span>
                  <span className="text-[11.5px] font-bold text-white/90">{activeExpert.experience.split(" ")[0]} Experience</span>
                </div>
                <h4 className="text-[19px] font-black tracking-tight leading-snug truncate">{activeExpert.name}</h4>
                <p className="text-[12.5px] text-white/70 truncate">{activeExpert.role}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="w-13 h-13 rounded-full border-2 border-dashed border-[#C99A2E]/60 bg-white/5 flex items-center justify-center text-[#D5AA45] shrink-0">
                <User size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-black tracking-wider uppercase text-[#D5AA45]">
                    Mentor Status
                  </span>
                  <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                    Not Selected
                  </span>
                </div>
                <h4 className="text-[18px] font-bold tracking-tight leading-snug">No Mentor Selected Yet</h4>
                <p className="text-[12.5px] text-white/70">Pick a mentor anytime to see customized pricing and reserved time slots</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2.5 relative z-10 shrink-0">
            {activeExpert && (
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-3.5 py-2 rounded-[11px] bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5"
                title="Deselect mentor"
              >
                <X size={13} />
                <span>Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen((prev) => !prev)}
              className="px-4 py-2 rounded-[11px] bg-[#C99A2E] hover:bg-[#D5AA45] text-[#0B1D3A] font-extrabold text-[12.5px] transition-all cursor-pointer flex items-center gap-1.5 shadow-md hover:shadow-lg"
            >
              <User size={13} />
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
              className="overflow-hidden bg-white rounded-[22px] border border-[#E6EBF3] p-5 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E6EBF3]">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#0B1D3A]">Available Verified Mentors</span>
                  <span className="text-[12px] text-[#7B8DAA]">(Select a mentor for your 1-on-1 session)</span>
                </div>
                {activeExpert && (
                  <button
                    type="button"
                    onClick={handleClearExpert}
                    className="text-[12px] font-bold text-red-500 hover:text-red-600 cursor-pointer"
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
                      className={`p-3 rounded-[16px] border cursor-pointer transition-all flex items-center gap-3 ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-2 ring-[#C99A2E]/25 shadow-xs"
                          : "border-[#E6EBF3] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#CBD5E1]"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[12.5px] font-bold text-[#0B1D3A] truncate">{exp.name}</span>
                        <span className="text-[11px] font-extrabold text-[#C99A2E]">{exp.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white/95 backdrop-blur-md rounded-[20px] border border-[#E6EBF3] p-3.5 sm:p-4 shadow-[0_8px_24px_rgba(11,29,58,0.03)] relative overflow-hidden">
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
                    onClick={() => isPast && goToStep(step.id)}
                    disabled={!isPast}
                    className={`flex flex-col items-center group select-none transition-all duration-200 ${
                      isPast ? "cursor-pointer" : isCurrent ? "cursor-default" : "cursor-not-allowed opacity-65"
                    }`}
                  >
                    <div className="relative flex items-center justify-center w-10 h-10 mb-1.5">
                      {isCurrent && (
                        <span className="absolute -inset-0.5 rounded-full ring-2 ring-[#C99A2E] ring-offset-2 ring-offset-white pointer-events-none" />
                      )}

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 relative z-10 ${
                          isPast
                            ? "bg-[#10B981] text-white shadow-xs"
                            : isCurrent
                            ? "bg-[#0B1D3A] text-[#D5AA45] shadow-md ring-2 ring-[#C99A2E]"
                            : "bg-white border-2 border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? <Check size={16} strokeWidth={2.8} /> : <span>{step.id}</span>}
                      </div>
                    </div>

                    <div className="text-center px-1">
                      <span
                        className={`text-[12px] font-bold block tracking-tight ${
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
                        className={`text-[10px] hidden sm:block ${
                          isCurrent ? "text-[#C99A2E] font-semibold" : "text-[#94A3B8]"
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

        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 rounded-[14px] bg-amber-50 border border-amber-200 text-amber-900 text-[13px] font-semibold flex items-center gap-2.5"
          >
            <AlertCircle size={17} className="text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </motion.div>
        )}

        <div className="bg-white rounded-[24px] border border-[#E6EBF3] shadow-[0_10px_30px_rgba(11,29,58,0.04)] p-5 sm:p-7 min-h-[380px] flex flex-col justify-between">
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[21px] font-black text-[#0B1D3A] tracking-tight">
                    Select Session Duration & Format
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] mt-0.5">
                    Choose the duration that matches your practice objective and depth of feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-5 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-2 ring-[#C99A2E]/35 shadow-[0_12px_28px_rgba(201,154,46,0.12)]"
                            : "bg-white border-[#E6EBF3] hover:border-[#CBD5E1]"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-[#D5AA45] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-[12px]">
                              <Check size={11} strokeWidth={2.8} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E]/15 text-[#C99A2E] text-[9.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-bl-[12px]">
                            Recommended
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-2.5 mt-1">
                            <span className="text-[26px] font-black text-[#0B1D3A] leading-none tracking-tight">
                              {dur.duration}
                            </span>

                            {activeExpert && durPrice ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-baseline gap-1"
                              >
                                <span className="text-[20px] font-black text-[#C99A2E]">
                                  {durPrice.price}
                                </span>
                                <span className="text-[10.5px] font-medium text-[#7B8DAA]">/session</span>
                              </motion.div>
                            ) : (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsSwitchExpertOpen(true);
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] bg-[#F8FAFD] border border-[#E6EBF3] text-[10.5px] font-bold text-[#5A6B82] hover:text-[#C99A2E]"
                              >
                                <User size={10} className="text-[#C99A2E]" />
                                <span>Fee on select</span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-[16px] font-bold text-[#0B1D3A]">{dur.label}</h4>
                          </div>
                          <p className="text-[12.5px] text-[#5A6B82] leading-relaxed mb-4">{dur.desc}</p>
                        </div>

                        <div className="pt-3.5 border-t border-[#F0F4FA] flex flex-col gap-2">
                          {dur.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[12px] text-[#3B4D66]">
                              <div
                                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                                  isSelected ? "bg-[#10B981] text-white" : "bg-[#10B981]/15 text-[#10B981]"
                                }`}
                              >
                                <Check size={9} strokeWidth={2.8} />
                              </div>
                              <span className={isSelected ? "font-bold text-[#0B1D3A]" : "font-medium text-[#5A6B82]"}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert ? (
                  <div className="p-3.5 rounded-[16px] bg-gradient-to-r from-[#FFFDF7] via-white to-[#F8FAFD] border border-[#C99A2E]/35 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C99A2E]/15 text-[#C99A2E] flex items-center justify-center shrink-0">
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <h5 className="text-[13px] font-bold text-[#0B1D3A]">Custom Mentor Pricing</h5>
                        <p className="text-[12px] text-[#5A6B82]">
                          Session rates adapt to each mentor's verified seniority. Select a mentor to preview exact rates.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="px-3.5 py-1.5 rounded-[10px] bg-[#0B1D3A] text-[#D5AA45] text-[12px] font-bold cursor-pointer shrink-0"
                    >
                      + Choose Mentor
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] text-[12px] text-[#5A6B82]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0B1D3A]">Custom mentor rates applied:</span>
                      <span className="font-bold text-[#C99A2E]">{activeExpert.name}</span>
                      <span className="text-[#CBD5E1]">·</span>
                      <span className="font-medium text-[#0B1D3A]">{activeExpert.experience}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="text-[#C99A2E] font-bold hover:underline cursor-pointer"
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[21px] font-black text-[#0B1D3A] tracking-tight">
                    Choose Your Practice Scenario
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] mt-0.5">
                    Select a realistic objection drill or enter a custom customer challenge to practice live.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA]">
                    Recommended Simulation Scenarios
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
                    <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center gap-1.5">
                      <Edit3 size={12} className="text-[#C99A2E]" />
                      Custom Scenario Description / Specific Goal
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={3}
                      placeholder="e.g., A client is comparing my project with a cheaper competitor and refuses to pay the booking token..."
                      className="w-full p-3.5 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] focus:bg-white focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 text-[13px] font-medium text-[#0B1D3A] outline-none transition-all resize-none font-['Outfit']"
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[21px] font-black text-[#0B1D3A] tracking-tight">
                    Select Date & Time Slot
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] mt-0.5">
                    Pick an upcoming date and time slot that fits your schedule.
                  </p>
                </div>

                <div className="flex flex-col gap-4.5">
                  <div>
                    <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA] block mb-2">
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
                            className={`p-2.5 rounded-[14px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                              isSelected
                                ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-md -translate-y-0.5"
                                : "bg-[#F8FAFD] border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A]"
                            }`}
                          >
                            <span className={`text-[9.5px] font-bold uppercase ${isSelected ? "text-[#D5AA45]" : "text-[#7B8DAA]"}`}>
                              {d.day}
                            </span>
                            <span className="text-[14px] font-black leading-none">{d.date}</span>
                            <span className={`text-[9.5px] font-semibold ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>
                              {d.slotsCount} slots
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA] block mb-2">
                      2. Choose Time Slot
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {s.timeSlots.map((period) => (
                        <div
                          key={period.period}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 p-3 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3]"
                        >
                          <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-wider w-24 shrink-0 flex items-center gap-1.5">
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
                                  className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all cursor-pointer ${
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
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#C99A2E] block mb-1">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[21px] font-black text-[#0B1D3A] tracking-tight">
                    Review & Confirm Your Reservation
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] mt-0.5">
                    Verify session details and confirm to secure your mentor's Google Meet schedule.
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
                          <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <User size={16} />
                          </div>
                          <div>
                            <span className="text-[13px] font-bold text-amber-900 block leading-tight">No Mentor Selected</span>
                            <span className="text-[11px] text-amber-700">Please choose a mentor to confirm</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSwitchExpertOpen(true)}
                          className="px-2.5 py-1 rounded-[9px] bg-[#0B1D3A] text-[#D5AA45] text-[11px] font-bold cursor-pointer"
                        >
                          + Select
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-[#7B8DAA] font-medium">Duration:</span>
                        <span className="font-bold text-[#0B1D3A]">
                          {selectedDuration ? `${selectedDuration.duration} (${selectedDuration.label})` : "45 MIN"}
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
                            <span className="text-[#10B981] font-semibold">Included</span>
                          </div>
                          <div className="flex justify-between text-[#5A6B82]">
                            <span>Detailed Rubric Scorecard:</span>
                            <span className="text-[#10B981] font-semibold">Included</span>
                          </div>
                          <div className="pt-2.5 border-t border-[#E6EBF3] flex justify-between text-[15px] font-bold text-[#0B1D3A]">
                            <span>Total Investment:</span>
                            <span className="text-[#C99A2E]">{currentDurationPrice.price}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-[13px] bg-amber-50/70 border border-amber-200/80 flex flex-col gap-2">
                          <span className="text-[12.5px] font-bold text-amber-900">Fee Calculation Pending</span>
                          <p className="text-[11.5px] text-amber-800">
                            Please select a mentor to calculate your exact session fee.
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsSwitchExpertOpen(true)}
                            className="mt-1 px-3 py-1.5 rounded-[9px] bg-[#0B1D3A] text-[#D5AA45] text-[11px] font-bold w-fit cursor-pointer"
                          >
                            + Choose Mentor
                          </button>
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

          <div className="pt-5 border-t border-[#F0F4FA] flex items-center justify-between mt-5">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-10.5 !px-4 text-[13px] !rounded-[11px] font-bold flex items-center gap-1.5 cursor-pointer hover:bg-white"
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
                className="!h-10.5 !px-5 text-[13px] !rounded-[11px] font-extrabold shadow-sm cursor-pointer"
              >
                Continue to Next Step
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-11 !px-7 text-[13.5px] !rounded-[11px] font-extrabold shadow-md cursor-pointer"
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
                <h3 className="text-[20px] font-black text-[#0B1D3A] tracking-tight">
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
                  goToStep(1);
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
