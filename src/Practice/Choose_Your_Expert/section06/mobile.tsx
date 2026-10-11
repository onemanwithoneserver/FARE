import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronDown,
  Plus,
  Check,
  Scale,
} from "lucide-react";
import { data, CRITERIA_ITEMS } from "./data";
import { Section, PrimaryButton, accentAt, EASE, VerifiedBadge } from "../../ui";
import { data as allExpertsData, type Expert } from "../section05/data";

interface Props {
  onBookExpert?: (expert: Expert) => void;
}

export default function Mobile({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNames, setSelectedNames] = useState<string[]>(s.defaultCompareNames);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerSlotIndex, setPickerSlotIndex] = useState<number | null>(null);

  const maxSlots = 4;
  const slots = [0, 1, 2, 3];

  const selectedExperts = selectedNames
    .map((name) => s.allExperts.find((exp) => exp.name === name))
    .filter(Boolean) as typeof s.allExperts;

  const handleSwapExpert = (slotIdx: number) => {
    setPickerSlotIndex(slotIdx);
    setIsPickerOpen(true);
  };

  const handleSelectExpertForSlot = (name: string) => {
    if (pickerSlotIndex !== null) {
      setSelectedNames((prev) => {
        const next = [...prev];
        next[pickerSlotIndex] = name;
        return next;
      });
    } else {
      setSelectedNames((prev) => {
        if (prev.length < maxSlots && !prev.includes(name)) {
          return [...prev, name];
        }
        return prev;
      });
    }
    setIsPickerOpen(false);
    setPickerSlotIndex(null);
  };

  const handleRemoveExpert = (slotIdx: number) => {
    setSelectedNames((prev) => {
      const next = [...prev];
      next.splice(slotIdx, 1);
      return next;
    });
  };

  const handleBook = (expertName: string) => {
    const found = allExpertsData.experts.find((e) => e.name === expertName);
    if (found && onBookExpert) {
      onBookExpert(found);
    } else {
      document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section tone="soft" mobile ariaLabel="Compare Experts" className="!pt-6 !pb-6 font-['Outfit']">
      <div className="flex flex-col gap-4">
        {/* Toggle Card */}
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="bg-white rounded-[16px] border border-[#E6EBF3] p-4 shadow-xs active:bg-[#F8FAFD] transition-all cursor-pointer flex flex-col gap-3 relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-[10px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Scale size={18} strokeWidth={2.3} />
              </span>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C99A2E] block">
                  Side-by-Side Matrix
                </span>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight">
                  Compare Top Mentors
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

          <div className="flex items-center justify-between pt-2 border-t border-[#F0F4FA]">
            <div className="flex -space-x-2 items-center">
              {selectedExperts.map((exp) => (
                <img
                  key={exp.name}
                  src={exp.image}
                  alt={exp.name}
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                />
              ))}
              <span className="text-[12px] font-semibold text-[#475569] pl-3">
                {selectedExperts.length} Mentors Loaded
              </span>
            </div>

            <span className="text-[12.5px] font-bold text-[#C99A2E]">
              {isExpanded ? "Hide Matrix" : "View Matrix"}
            </span>
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
              className="overflow-hidden"
            >
              <div className="w-full overflow-x-auto pb-4 pt-1 [scrollbar-width:thin]">
                <div className="min-w-[760px] bg-white rounded-[16px] border border-[#E6EBF3] shadow-xs overflow-hidden">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        <th className="p-3.5 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[22%] text-[12px] font-bold text-[#0B1D3A]">
                          Criteria
                        </th>
                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          const a = accentAt(idx + 1);

                          return (
                            <th
                              key={idx}
                              className="p-3.5 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[26%] text-center align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center gap-2 relative">
                                  {selectedExperts.length > 2 && (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveExpert(idx)}
                                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F3F6FB] hover:bg-red-50 hover:text-red-600 text-[#7B8DAA] flex items-center justify-center transition-colors"
                                    >
                                      <X size={10} strokeWidth={2.8} />
                                    </button>
                                  )}

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
                                    Book
                                  </PrimaryButton>
                                </div>
                              ) : (
                                <div className="py-6 flex flex-col items-center justify-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => handleSwapExpert(idx)}
                                    className="w-9 h-9 rounded-full bg-[#F8FAFD] border-2 border-dashed border-[#CBD5E1] text-[#7B8DAA] flex items-center justify-center cursor-pointer"
                                  >
                                    <Plus size={16} />
                                  </button>
                                  <span className="text-[11px] font-bold text-[#0B1D3A]">
                                    + Add
                                  </span>
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#E6EBF3]">
                      {CRITERIA_ITEMS.map((item, rowIdx) => (
                        <tr key={item.id} className={rowIdx % 2 === 0 ? "bg-white" : "bg-[#FBFDFF]"}>
                          <td className="p-3 px-3.5 bg-[#F8FAFD] border-r border-[#E6EBF3] text-[12px] font-bold text-[#0B1D3A]">
                            {item.label}
                          </td>

                          {slots.map((idx) => {
                            const exp = selectedExperts[idx];
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
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Picker modal */}
      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-sm bg-white rounded-[20px] p-5 border border-[#E6EBF3] shadow-xl flex flex-col gap-3 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#F0F4FA]">
                <h3 className="text-[16px] font-bold text-[#0B1D3A]">
                  Choose Mentor
                </h3>
                <button
                  type="button"
                  onClick={() => setIsPickerOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#5A6B82]"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {s.allExperts.map((exp) => (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpertForSlot(exp.name)}
                    className="p-3 rounded-[12px] border border-[#E6EBF3] hover:border-[#C99A2E] flex items-center justify-between gap-2.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border"
                      />
                      <div className="min-w-0">
                        <h4 className="text-[13px] font-bold text-[#0B1D3A] truncate">
                          {exp.name}
                        </h4>
                        <p className="text-[11px] text-[#7B8DAA] truncate">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#C99A2E] shrink-0">
                      {exp.values[6]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
