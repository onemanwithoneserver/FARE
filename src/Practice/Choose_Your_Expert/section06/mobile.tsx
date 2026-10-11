import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronDown,
  Plus,
  Check,
  Scale,
  RotateCcw,
  Trash2,
  Sparkles,
} from "lucide-react";
import { data, CRITERIA_ITEMS } from "./data";
import { Section, PrimaryButton, accentAt, EASE, VerifiedBadge } from "../../ui";
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

  const dirClass = direction === "up" ? "bottom-full mb-1.5" : "top-full mt-1.5";

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
      transition={{ duration: 0.18, ease: EASE }}
      className={`absolute ${dirClass} ${alignClass} z-50 w-64 bg-white rounded-[14px] border border-[#CBD5E1] shadow-[0_18px_40px_-12px_rgba(11,29,58,0.3)] p-2 font-['Outfit'] select-none text-left`}
    >
      <div className="flex items-center justify-between px-2 py-1 border-b border-[#F0F4FA] mb-1">
        <div className="flex items-center gap-1">
          <Sparkles size={12} className="text-[#C99A2E]" />
          <span className="text-[11.5px] font-bold text-[#0B1D3A]">
            Select Mentor
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dropdown"
          className="w-5 h-5 rounded-full hover:bg-[#F1F5F9] text-[#7B8DAA] flex items-center justify-center cursor-pointer"
        >
          <X size={11} strokeWidth={2.4} />
        </button>
      </div>

      <div className="max-h-52 overflow-y-auto flex flex-col gap-1 [scrollbar-width:thin] pr-0.5">
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
              className={`p-1.5 rounded-[10px] transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                isCurrent
                  ? "bg-[#FFFDF7] border-[#C99A2E] ring-1 ring-[#C99A2E]/30"
                  : isAssignedElsewhere
                  ? "bg-[#F8FAFD] border-transparent opacity-70"
                  : "bg-white border-transparent hover:border-[#C99A2E]/50 hover:bg-[#FFFDF7]"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="relative shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#CBD5E1]"
                  />
                  <VerifiedBadge
                    size={11}
                    className="absolute -bottom-0.5 -right-0.5 ring-1 ring-white rounded-full"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-bold text-[#0B1D3A] truncate">
                      {exp.name}
                    </span>
                    {isCurrent && (
                      <span className="text-[8.5px] font-bold px-1 py-0.2 rounded-full bg-[#E4C46A]/25 text-[#8A5A00]">
                        Active
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#5A6B82] truncate block">
                    {exp.role.split("·")[0].trim()}
                  </span>
                </div>
              </div>

              <span className="text-[10.5px] font-bold text-[#8A5A00] bg-[#FFFBF0] px-1.5 py-0.5 rounded border border-[#C99A2E]/25 shrink-0">
                {exp.values[6]}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Mobile({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(false);

  // 4 slots fixed array allowing each slot to be filled or null
  const [slots, setSlots] = useState<(string | null)[]>([
    s.defaultCompareNames[0] || null,
    s.defaultCompareNames[1] || null,
    s.defaultCompareNames[2] || null,
    null,
  ]);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const activeCount = slots.filter(Boolean).length;
  const maxSlots = 4;

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
      const existingIdx = next.findIndex((n) => n === name);
      if (existingIdx !== -1 && existingIdx !== slotIdx) {
        next[existingIdx] = null;
      }
      next[slotIdx] = name;
      return next;
    });
    setOpenDropdown(null);
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
      mobile
      ariaLabel="Compare Experts"
      className="!pt-6 !pb-6 font-['Outfit']"
    >
      <div className="flex flex-col gap-4">
        {/* Toggle Card */}
        <div className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 shadow-xs flex flex-col gap-3 relative overflow-hidden">
          <div
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex items-center justify-between gap-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-[10px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Scale size={18} strokeWidth={2.3} />
              </span>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                  Side-by-Side Matrix
                </span>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight">
                  Compare Verified Mentors
                </h3>
              </div>
            </div>

            <ChevronDown
              size={18}
              strokeWidth={2.5}
              className={`text-[#7B8DAA] transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#F0F4FA] flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-[#0B1D3A]">
                {activeCount} / {maxSlots} Mentors Active
              </span>
            </div>

            <div className="flex items-center gap-2">
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-2.5 py-1 rounded-[8px] bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/80 text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1"
                >
                  <Trash2 size={11} strokeWidth={2.2} />
                  <span>Clear All</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleResetToDefault}
                className="px-2.5 py-1 rounded-[8px] bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[#475569] border border-[#E6EBF3] text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1"
              >
                <RotateCcw size={11} strokeWidth={2.2} />
                <span>Reset</span>
              </button>
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-[12px] font-bold text-[#C99A2E] pl-1 cursor-pointer"
              >
                {isExpanded ? "Hide Matrix" : "View Matrix"}
              </button>
            </div>
          </div>
        </div>

        {/* Matrix Body */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-visible"
            >
              <div className="w-full overflow-x-auto pb-4 pt-1 [scrollbar-width:thin]">
                <div className="min-w-[760px] bg-white rounded-[16px] border border-[#E6EBF3] shadow-xs overflow-visible">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        <th className="p-3.5 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[22%] text-[12px] font-bold text-[#0B1D3A]">
                          Criteria
                        </th>
                        {slots.map((mentorName, idx) => {
                          const exp = mentorName
                            ? s.allExperts.find((e) => e.name === mentorName)
                            : null;
                          const a = accentAt(idx + 1);

                          return (
                            <th
                              key={idx}
                              className="p-3.5 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[26%] text-center align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center gap-2 relative">
                                  {/* Allow user to clear all mentors down to 0 */}
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveExpert(idx)}
                                    aria-label={`Remove ${exp.name} from slot ${idx + 1}`}
                                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F3F6FB] hover:bg-red-50 hover:text-red-600 text-[#7B8DAA] flex items-center justify-center transition-colors cursor-pointer border border-[#E6EBF3] shadow-2xs"
                                  >
                                    <X size={10} strokeWidth={2.8} />
                                  </button>

                                  <div className="relative">
                                    <img
                                      src={exp.image}
                                      alt={exp.name}
                                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C99A2E]"
                                    />
                                    <VerifiedBadge
                                      size={18}
                                      className="absolute -bottom-1 -right-1 ring-1.5 ring-white rounded-full shadow-xs"
                                    />
                                  </div>

                                  <div className="min-w-0 w-full">
                                    <h4 className="text-[14px] font-bold text-[#0B1D3A] truncate leading-tight">
                                      {exp.name}
                                    </h4>
                                    <span
                                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 block truncate"
                                      style={{ background: a.soft, color: a.ink }}
                                    >
                                      {exp.role.split("·")[0]}
                                    </span>
                                  </div>

                                  <PrimaryButton
                                    full
                                    variant="gold"
                                    onClick={() => handleBook(exp.name)}
                                    className="!h-8 !py-0 !px-2 !text-[11.5px] !rounded-[8px] font-semibold mt-1"
                                  >
                                    Book Session
                                  </PrimaryButton>

                                  {/* Dropdown trigger to swap mentor */}
                                  <div className="relative mentor-dropdown-container w-full">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setOpenDropdown((prev) =>
                                          prev === idx ? null : idx
                                        )
                                      }
                                      aria-expanded={openDropdown === idx}
                                      className="text-[11px] font-medium text-[#7B8DAA] hover:text-[#0B1D3A] flex items-center justify-center gap-1 w-full pt-0.5 cursor-pointer"
                                    >
                                      <span>Swap</span>
                                      <ChevronDown
                                        size={10}
                                        className={openDropdown === idx ? "rotate-180" : ""}
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
                              ) : (
                                /* Empty Slot with dropdown trigger */
                                <div className="py-5 flex flex-col items-center justify-center text-center gap-1.5 relative mentor-dropdown-container">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenDropdown((prev) =>
                                        prev === idx ? null : idx
                                      )
                                    }
                                    className="w-10 h-10 rounded-full border-2 border-dashed border-[#CBD5E1] hover:border-[#C99A2E] bg-[#F8FAFD] hover:bg-[#FFFDF7] text-[#7B8DAA] flex items-center justify-center cursor-pointer"
                                  >
                                    <Plus size={16} strokeWidth={2.4} />
                                  </button>
                                  <span className="text-[11.5px] font-bold text-[#0B1D3A]">
                                    Slot {idx + 1}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenDropdown((prev) =>
                                        prev === idx ? null : idx
                                      )
                                    }
                                    className="text-[11px] font-bold text-[#8A5A00] bg-[#FFFDF7] px-2.5 py-0.5 rounded-full border border-[#C99A2E]/35 flex items-center gap-0.5 cursor-pointer shadow-2xs"
                                  >
                                    <span>Select</span>
                                    <ChevronDown size={10} />
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
                        return (
                          <tr
                            key={item.id}
                            className={rowIdx % 2 === 0 ? "bg-white" : "bg-[#FBFDFF]"}
                          >
                            <td className="p-3 px-3.5 bg-[#F8FAFD] border-r border-[#E6EBF3] text-[12px] font-bold text-[#0B1D3A]">
                              <div className="flex items-center gap-2">
                                <span
                                  className="w-6 h-6 rounded-[7px] text-white flex items-center justify-center shrink-0 shadow-2xs"
                                  style={{ background: item.bg }}
                                >
                                  <Icon size={12} strokeWidth={2.4} className="text-white" />
                                </span>
                                <span>{item.label}</span>
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
                                  className="p-3 px-3.5 text-[12px] font-medium text-[#475569] border-r border-[#E6EBF3] last:border-r-0 text-center"
                                >
                                  {exp ? (
                                    isCheck ? (
                                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E9FBF3] text-[#047857] font-bold text-[11px]">
                                        <Check size={11} strokeWidth={3} />
                                        <span>Yes</span>
                                      </span>
                                    ) : isPrice ? (
                                      <span className="font-bold text-[#0B1D3A] text-[12.5px] bg-[#FFFBF0] px-2 py-0.5 rounded-md border border-[#C99A2E]/30">
                                        {val}
                                      </span>
                                    ) : (
                                      <span>{val}</span>
                                    )
                                  ) : (
                                    <span className="text-[#CBD5E1]">—</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
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
