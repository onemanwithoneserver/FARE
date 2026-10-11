import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Plus,
  X,
  ChevronDown,
  Scale,
  RotateCcw,
  Sparkles,
  Trash2,
} from "lucide-react";
import { data, CRITERIA_ITEMS } from "./data";
import {
  ACCENTS,
  Section,
  SectionHeader,
  PrimaryButton,
  HoverGlow,
  accentAt,
  EASE,
  FOCUS_RING,
  accentGradient,
  VerifiedBadge,
} from "../../ui";
import { data as allExpertsData, type Expert } from "../section05/data";

interface Props {
  onBookExpert?: (expert: Expert) => void;
}

interface MentorDropdownProps {
  slots: (string | null)[];
  currentSlotIdx?: number;
  onSelect: (name: string) => void;
  onClose: () => void;
  align?: "left" | "center" | "right";
  direction?: "down" | "up";
}

function MentorDropdownMenu({
  slots,
  currentSlotIdx,
  onSelect,
  onClose,
  align = "center",
  direction = "down",
}: MentorDropdownProps) {
  const alignClass =
    align === "right"
      ? "right-0 left-auto"
      : align === "left"
      ? "left-0 right-auto"
      : "left-1/2 -translate-x-1/2";

  const dirClass = direction === "up" ? "bottom-full mb-2" : "top-full mt-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
      transition={{ duration: 0.18, ease: EASE }}
      className={`absolute ${dirClass} ${alignClass} z-50 w-72 sm:w-80 bg-white rounded-[16px] border border-[#CBD5E1] shadow-[0_22px_48px_-12px_rgba(11,29,58,0.28)] p-2.5 font-['Outfit'] select-none text-left`}
    >
      <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#F0F4FA] mb-1.5">
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#C99A2E]" />
          <span className="text-[12px] font-bold text-[#0B1D3A] tracking-tight">
            Select Mentor for Comparison
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dropdown"
          className="w-5 h-5 rounded-full hover:bg-[#F1F5F9] text-[#7B8DAA] flex items-center justify-center cursor-pointer transition-colors"
        >
          <X size={12} strokeWidth={2.4} />
        </button>
      </div>

      <div className="max-h-64 overflow-y-auto flex flex-col gap-1 [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent] pr-0.5">
        {data.allExperts.map((exp) => {
          const isCurrent =
            currentSlotIdx !== undefined && slots[currentSlotIdx] === exp.name;
          const assignedSlotIdx = slots.findIndex((name) => name === exp.name);
          const isAssignedElsewhere =
            assignedSlotIdx !== -1 && assignedSlotIdx !== currentSlotIdx;

          return (
            <div
              key={exp.name}
              onClick={() => onSelect(exp.name)}
              className={`p-2 rounded-[12px] transition-all cursor-pointer flex items-center justify-between gap-2.5 border ${
                isCurrent
                  ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/30"
                  : isAssignedElsewhere
                  ? "bg-[#F8FAFD] border-transparent opacity-75 hover:opacity-100 hover:border-[#CBD5E1]"
                  : "bg-white border-transparent hover:border-[#C99A2E]/50 hover:bg-[#FFFDF7]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#CBD5E1]"
                  />
                  <VerifiedBadge
                    size={13}
                    className="absolute -bottom-0.5 -right-0.5 ring-1.5 ring-white rounded-full"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-[#0B1D3A] truncate">
                      {exp.name}
                    </span>
                    {isCurrent && (
                      <span className="text-[9.5px] font-bold px-1.5 py-0.2 rounded-full bg-[#E4C46A]/25 text-[#8A5A00]">
                        Current
                      </span>
                    )}
                    {isAssignedElsewhere && (
                      <span className="text-[9.5px] font-bold px-1.5 py-0.2 rounded-full bg-[#E2E8F0] text-[#475569]">
                        Slot {assignedSlotIdx + 1}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#5A6B82] truncate block">
                    {exp.role.split("·")[0].trim()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[11.5px] font-bold text-[#8A5A00] bg-[#FFFBF0] px-2 py-0.5 rounded border border-[#C99A2E]/25">
                  {exp.values[6]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Desktop({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(true);

  // 4 slots fixed array allowing each slot to be filled or null
  const [slots, setSlots] = useState<(string | null)[]>([
    s.defaultCompareNames[0] || null,
    s.defaultCompareNames[1] || null,
    s.defaultCompareNames[2] || null,
    null,
  ]);

  // Tracks active open dropdown: index 0-3 for slots, "toolbar" for header, or `footer-${index}`
  const [openDropdown, setOpenDropdown] = useState<
    number | "toolbar" | `footer-${number}` | null
  >(null);

  const activeCount = slots.filter(Boolean).length;
  const maxSlots = 4;
  const hasEmptySlot = slots.some((name) => name === null);

  // Listen for clicks outside open dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".mentor-dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectExpertForSlot = (name: string, slotIdx: number) => {
    setSlots((prev) => {
      const next = [...prev];
      // If mentor was in another slot, clear that previous slot
      const existingIdx = next.findIndex((n) => n === name);
      if (existingIdx !== -1 && existingIdx !== slotIdx) {
        next[existingIdx] = null;
      }
      next[slotIdx] = name;
      return next;
    });
    setOpenDropdown(null);
  };

  const handleToolbarAddMentor = (name: string) => {
    const firstEmpty = slots.findIndex((s) => s === null);
    if (firstEmpty !== -1) {
      handleSelectExpertForSlot(name, firstEmpty);
    }
  };

  const handleRemoveExpert = (slotIdx: number) => {
    setSlots((prev) => {
      const next = [...prev];
      next[slotIdx] = null;
      return next;
    });
  };

  const handleClearAll = () => {
    setSlots([null, null, null, null]);
    setOpenDropdown(null);
  };

  const handleResetToDefault = () => {
    setSlots([
      s.defaultCompareNames[0] || null,
      s.defaultCompareNames[1] || null,
      s.defaultCompareNames[2] || null,
      null,
    ]);
    setOpenDropdown(null);
  };

  const handleBook = (expertName: string) => {
    const found = allExpertsData.experts.find((e) => e.name === expertName);
    if (found && onBookExpert) {
      onBookExpert(found);
    } else {
      document
        .getElementById("booking-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section
      tone="soft"
      ariaLabel="Side-by-Side Evaluation"
      className="!pt-12 lg:!pt-16 !pb-12 font-['Outfit'] relative overflow-hidden"
    >
      <div className="flex flex-col gap-6 max-w-[1240px] mx-auto w-full">
        <SectionHeader
          eyebrow="Side-by-Side Evaluation"
          icon={Scale}
          accent={ACCENTS[1]}
          title="Compare Verified Mentors"
          className="!mb-4 lg:!mb-6"
        />

        {/* Toolbar Header Card */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 sm:p-5 luxury-shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#C99A2E] via-[#E4C46A] to-[#0B1D3A] rounded-t-[16px]" />
          <HoverGlow accent={ACCENTS[1]} />

          <div className="relative z-10 flex items-center gap-3.5 w-full md:w-auto">
            <span
              aria-hidden="true"
              className="w-11 h-11 rounded-[12px] text-white flex items-center justify-center shrink-0 shadow-xs"
              style={{ background: accentGradient(ACCENTS[0]) }}
            >
              <Scale size={20} strokeWidth={2.3} />
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C99A2E]">
                  Interactive Comparison Matrix
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EEF2F9] text-[#0B1D3A]">
                  {activeCount} / {maxSlots} Mentors Active
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-[#0B1D3A] tracking-tight">
                Benchmark Mentors Before Booking
              </h3>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
            {hasEmptySlot && (
              <div className="relative mentor-dropdown-container">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === "toolbar" ? null : "toolbar"))
                  }
                  aria-expanded={openDropdown === "toolbar"}
                  className={`h-9 px-3.5 rounded-[10px] bg-[#0B1D3A] text-white hover:bg-[#122A50] text-[12.5px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${FOCUS_RING}`}
                >
                  <Plus size={14} strokeWidth={2.6} />
                  <span>Add Mentor</span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2.6}
                    className={`transition-transform duration-200 ${
                      openDropdown === "toolbar" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === "toolbar" && (
                    <MentorDropdownMenu
                      slots={slots}
                      onSelect={handleToolbarAddMentor}
                      onClose={() => setOpenDropdown(null)}
                      align="right"
                    />
                  )}
                </AnimatePresence>
              </div>
            )}

            {activeCount > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className={`h-9 px-3 rounded-[10px] bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/80 text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${FOCUS_RING}`}
                title="Clear all mentors from comparison"
              >
                <Trash2 size={12} strokeWidth={2.4} />
                <span>Clear All</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleResetToDefault}
              className={`h-9 px-3 rounded-[10px] bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[#475569] hover:text-[#0B1D3A] border border-[#E6EBF3] text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${FOCUS_RING}`}
              title="Reset comparison to default mentors"
            >
              <RotateCcw size={12} strokeWidth={2.4} />
              <span>Reset</span>
            </button>

            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className={`h-9 px-3.5 rounded-[10px] text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${FOCUS_RING} ${
                isExpanded
                  ? "bg-[#FFFBF0] text-[#8A5A00] border border-[#C99A2E]/50"
                  : "bg-white text-[#0B1D3A] border border-[#E6EBF3] hover:border-[#CBD5E1]"
              }`}
            >
              <span>{isExpanded ? "Collapse Matrix" : "Expand Matrix"}</span>
              <ChevronDown
                size={14}
                strokeWidth={2.6}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Comparison Table View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-visible"
            >
              <div className="w-full overflow-x-auto pb-4 pt-1 [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent]">
                <div className="min-w-[1040px] bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-visible">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        {/* Criteria header column */}
                        <th className="p-5 bg-gradient-to-b from-[#F8FAFD] to-[#F1F5F9] border-b border-r border-[#E6EBF3] w-[24%] align-bottom">
                          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7B8DAA] block mb-1">
                            Matrix Dimensions
                          </span>
                          <span className="text-[16px] font-bold text-[#0B1D3A] block">
                            Direct Comparison
                          </span>
                          <span className="text-[12px] font-medium text-[#5A6B82] mt-0.5 block">
                            Verified real estate performance data
                          </span>
                        </th>

                        {/* 4 Expert header columns */}
                        {slots.map((mentorName, idx) => {
                          const exp = mentorName
                            ? s.allExperts.find((e) => e.name === mentorName)
                            : null;
                          const a = accentAt(idx + 1);

                          return (
                            <th
                              key={idx}
                              className="p-5 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[19%] align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center text-center gap-3 relative">
                                  {/* Allow user to clear ANY mentor down to 0 */}
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveExpert(idx)}
                                    aria-label={`Remove ${exp.name} from slot ${idx + 1}`}
                                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F3F6FB] hover:bg-red-50 hover:text-red-600 text-[#7B8DAA] flex items-center justify-center transition-colors cursor-pointer border border-[#E6EBF3] shadow-xs"
                                    title="Remove from comparison"
                                  >
                                    <X size={12} strokeWidth={2.8} />
                                  </button>

                                  <div className="relative">
                                    <div
                                      className="w-16 h-16 rounded-full p-[2.5px] transition-transform duration-300 hover:scale-105"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, #C99A2E, #F4D068 50%, #0B1D3A)",
                                        boxShadow:
                                          "0 8px 18px -6px rgba(201,154,46,0.5)",
                                      }}
                                    >
                                      <img
                                        src={exp.image}
                                        alt={exp.name}
                                        className="w-full h-full object-cover rounded-full bg-slate-100"
                                      />
                                    </div>
                                    <VerifiedBadge
                                      size={20}
                                      className="absolute -bottom-1 -right-1 ring-2 ring-white rounded-full shadow-xs"
                                    />
                                  </div>

                                  <div className="flex flex-col min-w-0 w-full">
                                    <h4 className="text-[16px] font-bold text-[#0B1D3A] truncate leading-tight">
                                      {exp.name}
                                    </h4>
                                    <span
                                      className="text-[11px] font-semibold mt-1 px-2.5 py-0.5 rounded-full truncate block"
                                      style={{ background: a.soft, color: a.ink }}
                                    >
                                      {exp.role.split("·")[0].trim()}
                                    </span>
                                  </div>

                                  <div className="w-full flex flex-col gap-2 pt-1">
                                    <PrimaryButton
                                      full
                                      variant="gold"
                                      onClick={() => handleBook(exp.name)}
                                      className="!h-9 !py-0 !px-2.5 !text-[12.5px] !rounded-[10px] font-semibold"
                                    >
                                      Book Session
                                    </PrimaryButton>

                                    {/* Inline Dropdown trigger for swapping mentor */}
                                    <div className="relative mentor-dropdown-container w-full">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setOpenDropdown((prev) =>
                                            prev === idx ? null : idx
                                          )
                                        }
                                        aria-expanded={openDropdown === idx}
                                        className="text-[11.5px] font-medium text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors cursor-pointer flex items-center justify-center gap-1 w-full"
                                      >
                                        <span>Swap Mentor</span>
                                        <ChevronDown
                                          size={11}
                                          strokeWidth={2.4}
                                          className={`transition-transform duration-200 ${
                                            openDropdown === idx ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {openDropdown === idx && (
                                          <MentorDropdownMenu
                                            slots={slots}
                                            currentSlotIdx={idx}
                                            onSelect={(name) =>
                                              handleSelectExpertForSlot(name, idx)
                                            }
                                            onClose={() => setOpenDropdown(null)}
                                            align={
                                              idx === 3
                                                ? "right"
                                                : idx === 0
                                                ? "left"
                                                : "center"
                                            }
                                          />
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Empty Slot with inline dropdown */
                                <div className="py-7 flex flex-col items-center justify-center text-center gap-2 relative mentor-dropdown-container">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenDropdown((prev) =>
                                        prev === idx ? null : idx
                                      )
                                    }
                                    aria-expanded={openDropdown === idx}
                                    className={`w-12 h-12 rounded-full border-2 border-dashed border-[#CBD5E1] hover:border-[#C99A2E] bg-[#F8FAFD] hover:bg-[#FFFDF7] text-[#7B8DAA] hover:text-[#C99A2E] flex items-center justify-center transition-all cursor-pointer shadow-xs ${FOCUS_RING}`}
                                    title="Choose a mentor for this slot"
                                  >
                                    <Plus size={20} strokeWidth={2.5} />
                                  </button>
                                  <span className="text-[13px] font-bold text-[#0B1D3A] mt-0.5">
                                    Slot {idx + 1} Available
                                  </span>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenDropdown((prev) =>
                                        prev === idx ? null : idx
                                      )
                                    }
                                    className="text-[11.5px] font-bold text-[#8A5A00] hover:text-[#0B1D3A] bg-[#FFFDF7] hover:bg-[#FFFBF0] px-3 py-1 rounded-full border border-[#C99A2E]/35 transition-all cursor-pointer flex items-center gap-1 shadow-2xs mt-1"
                                  >
                                    <span>Select Mentor</span>
                                    <ChevronDown
                                      size={12}
                                      strokeWidth={2.4}
                                      className={`transition-transform duration-200 ${
                                        openDropdown === idx ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {openDropdown === idx && (
                                      <MentorDropdownMenu
                                        slots={slots}
                                        currentSlotIdx={idx}
                                        onSelect={(name) =>
                                          handleSelectExpertForSlot(name, idx)
                                        }
                                        onClose={() => setOpenDropdown(null)}
                                        align={
                                          idx === 3
                                            ? "right"
                                            : idx === 0
                                            ? "left"
                                            : "center"
                                        }
                                      />
                                    )}
                                  </AnimatePresence>
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>

                    <tbody>
                      {CRITERIA_ITEMS.map((item, rowIdx) => {
                        const Icon = item.icon;
                        const isEven = rowIdx % 2 === 0;

                        return (
                          <tr
                            key={item.id}
                            className={`border-b border-[#E6EBF3] transition-colors hover:bg-[#F8FAFD]/70 ${
                              isEven ? "bg-white" : "bg-[#FBFDFF]"
                            }`}
                          >
                            <td className="p-4 px-5 bg-gradient-to-r from-[#F8FAFD] to-transparent border-r border-[#E6EBF3] align-middle">
                              <div className="flex items-center gap-2.5">
                                <span
                                  className="w-8 h-8 rounded-[10px] text-white flex items-center justify-center shrink-0 shadow-xs"
                                  style={{ background: item.bg }}
                                >
                                  <Icon size={15} strokeWidth={2.4} className="text-white" />
                                </span>
                                <div>
                                  <span className="text-[13px] font-bold text-[#0B1D3A] block">
                                    {item.label}
                                  </span>
                                  <span className="text-[11px] text-[#7B8DAA] font-medium block">
                                    {item.hint}
                                  </span>
                                </div>
                              </div>
                            </td>

                            {slots.map((mentorName, idx) => {
                              const exp = mentorName
                                ? s.allExperts.find((e) => e.name === mentorName)
                                : null;
                              const val = exp?.values[rowIdx] || "—";
                              const isCheck = val.includes("✓");
                              const isPrice = item.id === "price";

                              return (
                                <td
                                  key={idx}
                                  className="p-4 px-5 text-center border-r border-[#E6EBF3] last:border-r-0 align-middle"
                                >
                                  {exp ? (
                                    isCheck ? (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9FBF3] text-[#047857] font-bold text-[12px] border border-[#10B981]/20">
                                        <Check size={13} strokeWidth={3} />
                                        <span>Yes</span>
                                      </span>
                                    ) : isPrice ? (
                                      <span className="inline-block font-bold text-[#0B1D3A] text-[14px] bg-[#FFFBF0] px-3 py-1 rounded-full border border-[#C99A2E]/40 text-shadow-xs">
                                        {val}
                                      </span>
                                    ) : (
                                      <span className="text-[13px] font-semibold text-[#334155]">
                                        {val}
                                      </span>
                                    )
                                  ) : (
                                    <span className="text-[#CBD5E1] text-[14px] font-medium">
                                      —
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>

                    <tfoot>
                      <tr className="bg-gradient-to-b from-[#FAFBFD] to-[#F1F5F9]">
                        <td className="p-4 px-5 border-r border-[#E6EBF3] text-[12px] font-bold uppercase tracking-wider text-[#7B8DAA]">
                          Ready to Practise?
                        </td>
                        {slots.map((mentorName, idx) => {
                          const exp = mentorName
                            ? s.allExperts.find((e) => e.name === mentorName)
                            : null;

                          return (
                            <td
                              key={idx}
                              className="p-4 px-5 border-r border-[#E6EBF3] last:border-r-0 text-center relative"
                            >
                              {exp ? (
                                <PrimaryButton
                                  full
                                  variant="gold"
                                  onClick={() => handleBook(exp.name)}
                                  className="!h-8 !py-0 !px-2 !text-[12px] !rounded-[8px] font-semibold"
                                >
                                  Book Session
                                </PrimaryButton>
                              ) : (
                                <div className="relative mentor-dropdown-container">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenDropdown((prev) =>
                                        prev === `footer-${idx}` ? null : `footer-${idx}`
                                      )
                                    }
                                    className="text-[11.5px] font-semibold text-[#8A5A00] hover:text-[#0B1D3A] flex items-center justify-center gap-1 w-full py-1 cursor-pointer"
                                  >
                                    <span>+ Select Mentor</span>
                                    <ChevronDown size={11} strokeWidth={2.4} />
                                  </button>

                                  <AnimatePresence>
                                    {openDropdown === `footer-${idx}` && (
                                      <MentorDropdownMenu
                                        slots={slots}
                                        currentSlotIdx={idx}
                                        onSelect={(name) =>
                                          handleSelectExpertForSlot(name, idx)
                                        }
                                        onClose={() => setOpenDropdown(null)}
                                        align={
                                          idx === 3
                                            ? "right"
                                            : idx === 0
                                            ? "left"
                                            : "center"
                                        }
                                        direction="up"
                                      />
                                    )}
                                  </AnimatePresence>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
