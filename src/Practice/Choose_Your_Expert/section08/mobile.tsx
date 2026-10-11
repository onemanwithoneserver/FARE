import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Check,
  CheckCircle2,
  X,
  ArrowLeft,
  AlertCircle,
  User,
  Edit3,
  Sparkles,
  Sun,
  Moon,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { data, getExpertDurationPrice } from "./data";
import { data as allExpertsData, type Expert } from "../section05/data";
import { ACCENTS, Section, SectionHeader, PrimaryButton, SecondaryButton } from "../../ui";

interface Props {
  selectedExpert?: Expert | null;
  onSelectExpert?: (expert: Expert | null) => void;
}

const STEPS = [
  { id: 1, title: "Duration" },
  { id: 2, title: "Scenario" },
  { id: 3, title: "Slot" },
  { id: 4, title: "Review" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 24 : -24,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 24 : -24,
    opacity: 0,
  }),
};

export default function Mobile({ selectedExpert: propExpert, onSelectExpert }: Props) {
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
      { title: "Handling a Price Objection", tag: "Popular" },
      { title: "Negotiation & Margin Protection", tag: "Closing" },
      { title: "First-Time Homebuyer Pitch", tag: "Trust" },
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
      setValidationError("Please select a session duration.");
      return;
    }
    if (currentStep === 2 && !scenarioText.trim()) {
      setValidationError("Please select or describe a practice scenario.");
      return;
    }
    if (currentStep === 3 && (!selectedDate || !selectedSlot)) {
      setValidationError("Please pick a date and time slot.");
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
      setValidationError("Please select a mentor before confirming your reservation.");
      setIsSwitchExpertOpen(true);
      return;
    }
    if (!selectedDurationId) {
      setValidationError("Please select a session duration.");
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
    <Section tone="soft" mobile ariaLabel="Choose Session, Date & Time" id="booking-section" className="!pt-2.5 !pb-8 font-['Outfit']">
      <div className="flex flex-col gap-3">
        <SectionHeader
          mobile
          eyebrow="Reserve 1-on-1 Practice"
          icon={Calendar}
          accent={ACCENTS[7]}
          title="Choose Session, Date & Time"
          description="Select duration, realistic scenario, and preferred slot to practice with your mentor."
          className="!mb-2"
        />

        {activeExpert ? (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#163567] rounded-[16px] p-2.5 sm:p-3 text-white shadow-xs flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={activeExpert.image}
                alt={activeExpert.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/40 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#D5AA45] block">
                  Selected Mentor
                </span>
                <h4 className="text-[14px] font-medium truncate">{activeExpert.name}</h4>
                <p className="text-[10.5px] text-white/70 truncate font-normal">{activeExpert.role.split("·")[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleClearExpert}
                className="px-2 py-1 rounded-[7px] bg-white/10 text-white/80 text-[10.5px] font-medium"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsSwitchExpertOpen(true)}
                className="px-2.5 py-1 rounded-[7px] bg-[#C99A2E] text-white text-[10.5px] font-medium shadow-xs"
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#163567] rounded-[16px] p-2.5 sm:p-3 text-white shadow-xs flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#0B1D3A] text-white border border-[#C99A2E]/50 flex items-center justify-center shrink-0">
                <User size={16} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#D5AA45]">
                    Mentor Status
                  </span>
                  <span className="text-[9px] font-normal px-1.5 py-0.2 rounded-full bg-white/10 text-white/90">
                    0 Selected
                  </span>
                </div>
                <h4 className="text-[13.5px] font-medium truncate">No Mentor Selected</h4>
                <p className="text-[10.5px] text-white/70 truncate font-normal">Tap to pick your mentor</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSwitchExpertOpen(true)}
              className="px-2.5 py-1 rounded-[7px] bg-[#C99A2E] text-white text-[10.5px] font-medium shrink-0 shadow-xs"
            >
              + Choose
            </button>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-md rounded-[16px] border border-[#E6EBF3] p-2.5 shadow-xs relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-3.5 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2px] bg-[#E8EDF5] rounded-full pointer-events-none" />

            <motion.div
              className="absolute top-3.5 left-[12.5%] -translate-y-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#10B981] to-[#C99A2E] shadow-[0_0_8px_rgba(201,154,46,0.4)] pointer-events-none"
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
                    className="flex flex-col items-center group cursor-pointer select-none"
                  >
                    <div className="relative flex items-center justify-center w-7 h-7 mb-1">
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-full ring-2 ring-[#C99A2E] ring-offset-1 ring-offset-white pointer-events-none" />
                      )}

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10.5px] font-medium transition-all ${
                          isPast
                            ? "bg-[#10B981] text-white shadow-xs"
                            : isCurrent
                            ? "bg-[#0B1D3A] text-white shadow-xs"
                            : "bg-white border border-[#CBD5E1] text-[#7B8DAA]"
                        }`}
                      >
                        {isPast ? <Check size={12} strokeWidth={2.8} /> : step.id}
                      </div>
                    </div>

                    <span
                      className={`text-[10.5px] font-medium block leading-tight ${
                        isCurrent ? "text-[#0B1D3A]" : isPast ? "text-[#059669]" : "text-[#7B8DAA]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {validationError && (
          <div className="p-2.5 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-900 text-[11.5px] font-medium flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <AlertCircle size={10} />
            </span>
            <span>{validationError}</span>
          </div>
        )}

        <div className="bg-white rounded-[18px] border border-[#E6EBF3] p-3 shadow-xs min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={slideDirection}>
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3"
              >
                <div>
                  <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#C99A2E] block">
                    Step 1 of 4
                  </span>
                  <h3 className="text-[16px] font-medium text-[#0B1D3A]">Select Session Duration</h3>
                </div>

                <div className="flex flex-col gap-2">
                  {s.durations.map((dur) => {
                    const isSelected = selectedDurationId === dur.id;
                    const durPrice = getExpertDurationPrice(activeExpert?.price, dur.id);

                    return (
                      <motion.div
                        key={dur.id}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => {
                          setSelectedDurationId(dur.id);
                          setValidationError(null);
                        }}
                        className={`p-2.5 rounded-[14px] border transition-all relative overflow-hidden ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFFDF7] to-white border-[#C99A2E] ring-1 ring-[#C99A2E]/30 shadow-xs"
                            : "bg-white border-[#E6EBF3] active:bg-slate-50"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0">
                            <span className="inline-flex items-center gap-1 bg-[#0B1D3A] text-white text-[8.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-bl-[8px]">
                              <Check size={9} strokeWidth={2.6} />
                              Selected
                            </span>
                          </div>
                        )}

                        {!isSelected && dur.recommended && (
                          <span className="absolute top-0 right-0 bg-[#C99A2E]/15 text-[#C99A2E] text-[8px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-bl-[8px]">
                            Recommended
                          </span>
                        )}

                        <div className="flex items-center justify-between mb-0.5 mt-0.5">
                          <span className="text-[16px] font-medium text-[#0B1D3A]">{dur.duration}</span>

                          {activeExpert && durPrice ? (
                            <span className="text-[14px] font-medium text-[#C99A2E]">
                              {durPrice.price}
                            </span>
                          ) : (
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsSwitchExpertOpen(true);
                              }}
                              className="px-1.5 py-0.5 rounded-[6px] bg-[#F8FAFD] border border-[#E6EBF3] text-[9px] font-normal text-[#5A6B82]"
                            >
                              Fee on mentor select
                            </span>
                          )}
                        </div>
                        <h4 className="text-[12.5px] font-medium text-[#0B1D3A]">{dur.label}</h4>
                        <p className="text-[11px] text-[#5A6B82] mt-0.5 leading-snug font-normal">{dur.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {!activeExpert && (
                  <div className="p-2.5 rounded-[10px] bg-[#FFFDF7] border border-[#C99A2E]/35 flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                        <Sparkles size={9} />
                      </span>
                      <p className="text-[11px] text-[#5A6B82] font-normal">Select a mentor to view exact session rates.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSwitchExpertOpen(true)}
                      className="px-2 py-0.5 rounded-[6px] bg-[#0B1D3A] text-white text-[10px] font-medium shrink-0"
                    >
                      + Choose
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
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3"
              >
                <div>
                  <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#C99A2E] block">
                    Step 2 of 4
                  </span>
                  <h3 className="text-[16px] font-medium text-[#0B1D3A]">Select Practice Scenario</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  {quickScenarios.map((sc) => {
                    const isSelected = scenarioText === sc.title;
                    return (
                      <div
                        key={sc.title}
                        onClick={() => setScenarioText(sc.title)}
                        className={`p-2.5 rounded-[12px] border flex items-center justify-between gap-2 ${
                          isSelected
                            ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/20"
                            : "bg-[#F8FAFD] border-[#E6EBF3]"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#10B981] text-white" : "border border-[#CBD5E1]"
                            }`}
                          >
                            {isSelected && <Check size={9} strokeWidth={2.8} />}
                          </div>
                          <span className="text-[11.5px] font-medium text-[#0B1D3A] truncate">
                            {sc.title}
                          </span>
                        </div>
                        <span className="text-[9px] font-normal text-[#7B8DAA] shrink-0">{sc.tag}</span>
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-1 pt-0.5">
                    <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#7B8DAA] flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                        <Edit3 size={8.5} />
                      </span>
                      Custom Scenario Description
                    </span>
                    <textarea
                      value={scenarioText}
                      onChange={(e) => setScenarioText(e.target.value)}
                      rows={2}
                      placeholder="e.g., Objection handling regarding property pricing..."
                      className="w-full p-2 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3] text-[11.5px] font-medium outline-none"
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
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3"
              >
                <div>
                  <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#C99A2E] block">
                    Step 3 of 4
                  </span>
                  <h3 className="text-[16px] font-medium text-[#0B1D3A]">Select Date & Slot</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-3 gap-1.5">
                    {s.dates.slice(0, 6).map((d) => {
                      const isSelected = selectedDate === d.label;
                      return (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`p-1.5 rounded-[10px] border text-center ${
                            isSelected
                              ? "bg-[#0B1D3A] text-white border-[#0B1D3A]"
                              : "bg-[#F8FAFD] border-[#E6EBF3] text-[#0B1D3A]"
                          }`}
                        >
                          <span className={`text-[8.5px] font-medium block uppercase ${isSelected ? "text-[#D5AA45]" : "text-[#7B8DAA]"}`}>{d.day}</span>
                          <span className="text-[12px] font-medium block leading-none my-0.5">{d.date}</span>
                          <span className={`text-[8.5px] block ${isSelected ? "text-white/80" : "text-[#10B981]"}`}>{d.slotsCount} slots</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {s.timeSlots.map((period) => (
                      <div key={period.period} className="p-2 rounded-[10px] bg-[#F8FAFD] border border-[#E6EBF3]">
                        <span className="text-[9.5px] font-medium uppercase text-[#7B8DAA] block mb-1 flex items-center gap-1.5">
                          {period.period === "Morning" ? (
                            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#D97706] text-white flex items-center justify-center shrink-0">
                              <Sun size={8.5} />
                            </span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#4338CA] text-white flex items-center justify-center shrink-0">
                              <Moon size={8.5} />
                            </span>
                          )}
                          {period.period}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {period.slots.map((slot) => {
                            const isSelected = selectedSlot === slot.time;
                            return (
                              <button
                                key={slot.time}
                                type="button"
                                onClick={() => setSelectedSlot(slot.time)}
                                className={`px-2 py-0.5 rounded-[6px] text-[10.5px] font-medium ${
                                  isSelected
                                    ? "bg-[#C99A2E] text-white"
                                    : "bg-white border border-[#E6EBF3] text-[#0B1D3A]"
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
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3"
              >
                <div>
                  <span className="text-[9.5px] font-medium uppercase tracking-wider text-[#C99A2E] block">
                    Step 4 of 4
                  </span>
                  <h3 className="text-[16px] font-medium text-[#0B1D3A]">Review & Confirm</h3>
                </div>

                <div className="p-3 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] flex flex-col gap-2 text-[11.5px]">
                  {activeExpert ? (
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#E6EBF3]">
                      <div className="flex items-center gap-2">
                        <img src={activeExpert.image} alt={activeExpert.name} className="w-7 h-7 rounded-full object-cover" />
                        <div>
                          <span className="font-medium text-[#0B1D3A] block">{activeExpert.name}</span>
                          <span className="text-[10px] text-[#7B8DAA] font-normal">{activeExpert.role.split("·")[0]}</span>
                        </div>
                      </div>
                      <button onClick={() => setIsSwitchExpertOpen(true)} className="text-[10.5px] font-medium text-[#C99A2E]">
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className="p-1.5 rounded-[7px] bg-amber-50 text-amber-900 text-[10.5px] flex justify-between items-center">
                      <span>No mentor selected</span>
                      <button onClick={() => setIsSwitchExpertOpen(true)} className="font-medium underline">+ Select</button>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                        <Clock size={8.5} />
                      </span>
                      Duration
                    </span>
                    <span className="font-medium text-[#0B1D3A]">{selectedDuration?.duration || "45 MIN"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                        <Calendar size={8.5} />
                      </span>
                      Date & Time
                    </span>
                    <span className="font-medium text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#10B981] text-white flex items-center justify-center shrink-0">
                        <Check size={8.5} strokeWidth={2.5} />
                      </span>
                      Scenario
                    </span>
                    <span className="font-medium text-[#0B1D3A] truncate max-w-[140px]">{scenarioText}</span>
                  </div>

                  {activeExpert && currentDurationPrice && (
                    <div className="pt-1.5 border-t border-[#E6EBF3] flex justify-between font-medium text-[12px]">
                      <span>Total Investment</span>
                      <span className="text-[#C99A2E]">{currentDurationPrice.price}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[10.5px] text-[#475569] font-normal">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck size={8.5} />
                  </span>
                  <span>100% Satisfaction Guarantee.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-2.5 border-t border-[#F0F4FA] flex items-center justify-between mt-2.5">
            {currentStep > 1 ? (
              <SecondaryButton
                showArrow={false}
                onClick={handlePrevStep}
                className="!h-8.5 !px-2.5 text-[11.5px] !rounded-[8px] font-medium flex items-center gap-1 cursor-pointer hover:bg-white"
              >
                <ArrowLeft size={12} className="shrink-0" />
                <span>Back</span>
              </SecondaryButton>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                variant="gold"
                onClick={handleNextStep}
                className="!h-8.5 !px-3.5 text-[11.5px] !rounded-[8px] font-medium cursor-pointer"
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton
                variant="gold"
                icon={CheckCircle2}
                onClick={handleConfirmBooking}
                className="!h-8.5 !px-3.5 text-[11.5px] !rounded-[8px] font-medium cursor-pointer"
              >
                Confirm Slot
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSwitchExpertOpen && (
          <div className="fixed inset-0 z-50 flex items-end">
            <div
              onClick={() => setIsSwitchExpertOpen(false)}
              className="fixed inset-0 bg-black/50"
            />
            <div className="relative z-10 w-full bg-white rounded-t-[18px] p-4 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b mb-2">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-medium text-[13.5px] text-[#0B1D3A]">Choose Mentor</h4>
                  <span className="text-[10px] text-[#7B8DAA]">(Select 1)</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeExpert && (
                    <button
                      type="button"
                      onClick={handleClearExpert}
                      className="text-[10.5px] font-medium text-red-500 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                  <button onClick={() => setIsSwitchExpertOpen(false)} className="w-6 h-6 rounded-full bg-[#EF4444] text-white flex items-center justify-center cursor-pointer">
                    <X size={12} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {expertsList.map((exp, idx) => {
                  const isCurrent = activeExpert?.name === exp.name;
                  return (
                    <div
                      key={exp.name}
                      onClick={() => handleSelectExpert(exp, idx)}
                      className={`p-2 rounded-[10px] border flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? "border-[#C99A2E] bg-[#FFFDF7] ring-1 ring-[#C99A2E]/25"
                          : "border-[#E6EBF3] bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img src={exp.image} alt={exp.name} className="w-7 h-7 rounded-full object-cover" />
                        <span className="text-[12px] font-medium text-[#0B1D3A]">{exp.name}</span>
                      </div>
                      <span className="text-[10px] font-medium text-[#C99A2E]">{exp.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBooked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <div onClick={() => setIsBooked(false)} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />
            <div className="relative z-10 w-full max-w-sm bg-white rounded-[20px] p-5 text-center flex flex-col items-center gap-3 border border-[#E6EBF3] shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-[#0B1D3A]" />
              
              <button
                type="button"
                onClick={() => setIsBooked(false)}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#7B8DAA]"
              >
                <X size={12} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md">
                <Check size={24} strokeWidth={3} />
              </div>

              <div>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#C99A2E] block mb-0.5">
                  Booking Confirmed
                </span>
                <h3 className="text-[17px] font-medium text-[#0B1D3A]">Slot Confirmed!</h3>
                <p className="text-[11.5px] text-[#5A6B82] mt-0.5 leading-snug font-normal">
                  Your session with <span className="font-medium text-[#0B1D3A]">{activeExpert?.name || "your mentor"}</span> is reserved.
                </p>
              </div>

              <div className="w-full rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] p-2.5 flex flex-col gap-1.5 text-left text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                      <Calendar size={8.5} />
                    </span>
                    Date & Time
                  </span>
                  <span className="font-medium text-[#0B1D3A]">{selectedDate} · {selectedSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                      <Clock size={8.5} />
                    </span>
                    Duration
                  </span>
                  <span className="font-medium text-[#0B1D3A]">{selectedDuration?.duration || "45 MIN"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8DAA] flex items-center gap-1.5 font-normal">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#10B981] text-white flex items-center justify-center shrink-0">
                      <Check size={8.5} strokeWidth={2.5} />
                    </span>
                    Scenario
                  </span>
                  <span className="font-medium text-[#0B1D3A] truncate max-w-[140px]">{scenarioText}</span>
                </div>
              </div>

              <PrimaryButton
                variant="gold"
                onClick={() => {
                  setIsBooked(false);
                  goToStep(1);
                }}
                className="!w-36 !h-9 !rounded-[9px] font-medium text-[12px] mt-0.5 cursor-pointer shadow-xs"
              >
                Done
              </PrimaryButton>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
