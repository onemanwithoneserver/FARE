import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Users, Plus, X, ChevronDown, ShieldCheck } from "lucide-react";
import { data } from "./data";
import { ACCENTS, Section, PrimaryButton, HoverGlow } from "../../ui";
import { data as allExpertsData, type Expert } from "../section05/data";

interface Props {
  onBookExpert?: (expert: Expert) => void;
}

export default function Desktop({ onBookExpert }: Props) {
  const s = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerSlotIndex, setPickerSlotIndex] = useState<number | null>(null);

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
        if (prev.length < 4 && !prev.includes(name)) {
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
    <Section tone="soft" ariaLabel="Compare Experts" className="!pt-4 lg:!pt-6 !pb-2 font-['Outfit']">
      <div className="flex flex-col gap-4 max-w-[1240px] mx-auto w-full">
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="bg-white rounded-[20px] border border-[#E6EBF3] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#C99A2E]/40 hover:shadow-[0_8px_24px_rgba(11,29,58,0.06)] transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden group"
        >
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#C99A2E] via-[#E0B550] to-[#0B1D3A]" />
          <HoverGlow accent={ACCENTS[0]} />

          <div className="relative z-10 flex items-center gap-3.5 w-full md:w-auto">
            <div className="w-10 h-10 rounded-[12px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Users size={19} strokeWidth={2.2} />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#C99A2E]">
                  Side-by-Side Evaluation
                </span>
                <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-[#EEF2F9] text-[#1E3A74]">
                  {selectedNames.length} / 4 Selected
                </span>
              </div>
              <h3 className="text-[17px] font-medium text-[#0B1D3A] tracking-tight group-hover:text-[#C99A2E] transition-colors">
                Compare Experts
              </h3>
              <p className="text-[12.5px] font-normal text-[#5A6B82] max-w-xl">
                {s.subtitle}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {selectedExperts.length > 0 ? (
              <div className="flex -space-x-2.5 items-center">
                {selectedExperts.slice(0, 4).map((exp) => (
                  <img
                    key={exp.name}
                    src={exp.image}
                    alt={exp.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-2xs"
                    title={exp.name}
                  />
                ))}
              </div>
            ) : (
              <span className="text-[11.5px] font-medium text-[#7B8DAA] italic">
                0 mentors selected
              </span>
            )}

            <button
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-[12px] font-medium transition-all duration-300 cursor-pointer ${
                isExpanded
                  ? "bg-[#0B1D3A] text-white shadow-xs"
                  : "bg-[#F3F6FB] hover:bg-[#E6EBF3] text-[#0B1D3A] border border-[#CBD5E1]"
              }`}
            >
              <span>
                {isExpanded
                  ? "Collapse Comparison"
                  : selectedNames.length === 0
                  ? "Compare Experts (Select up to 4)"
                  : `Expand Comparison (${selectedNames.length}/4)`}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                strokeWidth={2.4}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="w-full overflow-x-auto pb-3 scrollbar-hide pt-1">
                <div className="min-w-[960px] bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_8px_24px_rgba(11,29,58,0.04)] overflow-hidden">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        <th className="p-3.5 bg-[#F8FAFD] border-b border-r border-[#E6EBF3] w-[20%] align-bottom">
                          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#7B8DAA] block mb-0.5">
                            Evaluation Criteria
                          </span>
                          <span className="text-[14px] font-medium text-[#0B1D3A]">
                            Compare 4 Experts
                          </span>
                        </th>

                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          return (
                            <th
                              key={idx}
                              className="p-3.5 bg-white border-b border-r border-[#E6EBF3] last:border-r-0 w-[20%] align-top relative"
                            >
                              {exp ? (
                                <div className="flex flex-col items-center text-center gap-2 relative">
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveExpert(idx)}
                                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#EF4444] text-white flex items-center justify-center transition-colors cursor-pointer"
                                    title="Remove from comparison"
                                  >
                                    <X size={10} strokeWidth={2.5} />
                                  </button>

                                  <div className="relative">
                                    <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-[#C99A2E] to-[#0B1D3A] shadow-xs">
                                      <img
                                        src={exp.image}
                                        alt={exp.name}
                                        className="w-full h-full object-cover rounded-full"
                                      />
                                    </div>
                                    <span
                                      className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#10B981] text-white shadow-xs border border-white flex items-center justify-center"
                                      title="Verified"
                                    >
                                      <ShieldCheck size={9} />
                                    </span>
                                  </div>

                                  <div className="flex flex-col min-w-0 w-full">
                                    <h4 className="text-[13.5px] font-medium text-[#0B1D3A] truncate leading-tight">
                                      {exp.name}
                                    </h4>
                                    <p className="text-[11px] font-normal text-[#7B8DAA] truncate mt-0.5">
                                      {exp.role.split("·")[0]}
                                    </p>
                                  </div>

                                  <div className="w-full flex items-center gap-1.5 pt-0.5">
                                    <button
                                      type="button"
                                      onClick={() => handleSwapExpert(idx)}
                                      className="flex-1 h-7 px-2 rounded-[7px] bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[10.5px] font-medium text-[#5A6B82] border border-[#E6EBF3] transition-colors cursor-pointer flex items-center justify-center"
                                    >
                                      Change
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleBook(exp.name)}
                                      className="flex-1 h-7 px-2 rounded-[7px] bg-[#C99A2E] hover:bg-[#D5AA45] text-white text-[10.5px] font-medium shadow-xs border border-[#C99A2E]/30 transition-all cursor-pointer flex items-center justify-center"
                                    >
                                      Book
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="py-5 flex flex-col items-center justify-center text-center">
                                  <button
                                    type="button"
                                    onClick={() => handleSwapExpert(idx)}
                                    className="w-10 h-10 rounded-full bg-[#C99A2E] text-white flex items-center justify-center transition-all cursor-pointer mb-1.5 shadow-xs"
                                  >
                                    <Plus size={16} />
                                  </button>
                                  <span className="text-[11.5px] font-medium text-[#0B1D3A]">
                                    + Add Mentor
                                  </span>
                                  <span className="text-[9.5px] text-[#7B8DAA] font-normal">
                                    Slot {idx + 1} of 4
                                  </span>
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#E6EBF3]">
                      {s.criteria.map((crit, rowIdx) => (
                        <tr key={crit} className={rowIdx % 2 === 0 ? "bg-white" : "bg-[#FBFDFF]"}>
                          <td className="p-3 px-4 font-medium text-[12px] text-[#0B1D3A] bg-[#F8FAFD] border-r border-[#E6EBF3]">
                            {crit}
                          </td>

                          {slots.map((idx) => {
                            const exp = selectedExperts[idx];
                            const val = exp?.values[rowIdx] || "—";
                            const isCheck = val === "✓";
                            const isPrice = crit.includes("Price");

                            return (
                              <td
                                key={idx}
                                className="p-3 px-4 text-[12px] font-normal text-[#475569] border-r border-[#E6EBF3] last:border-r-0 text-center"
                              >
                                {isCheck ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981] text-white">
                                    <Check size={11} strokeWidth={3} />
                                  </span>
                                ) : isPrice && exp ? (
                                  <span className="font-medium text-[#0B1D3A] text-[13px]">
                                    {val}
                                  </span>
                                ) : (
                                  <span className={!exp ? "text-[#CBD5E1]" : ""}>{val}</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td className="p-3 px-4 bg-[#F8FAFD] border-r border-[#E6EBF3] text-[11px] font-medium uppercase tracking-wider text-[#7B8DAA]">
                          Action
                        </td>
                        {slots.map((idx) => {
                          const exp = selectedExperts[idx];
                          return (
                            <td
                              key={idx}
                              className="p-3 px-4 border-r border-[#E6EBF3] last:border-r-0 text-center bg-white"
                            >
                              {exp ? (
                                <PrimaryButton
                                  full
                                  variant="gold"
                                  onClick={() => handleBook(exp.name)}
                                  className="!h-8 !py-0 !px-2.5 text-[11.5px] !rounded-[8px] font-medium cursor-pointer"
                                >
                                  Reserve Slot
                                </PrimaryButton>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleSwapExpert(idx)}
                                  className="text-[11px] font-medium text-[#7B8DAA] hover:text-[#C99A2E] cursor-pointer"
                                >
                                  + Select Mentor
                                </button>
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

      <AnimatePresence>
        {isPickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit']">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPickerOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-lg bg-white rounded-[20px] p-5 border border-[#E6EBF3] shadow-xl flex flex-col gap-3.5 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-[#F0F4FA]">
                <h3 className="text-[15.5px] font-medium text-[#0B1D3A]">
                  Select Mentor for Comparison
                </h3>
                <button
                  onClick={() => setIsPickerOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#5A6B82] cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {s.allExperts.map((exp) => (
                  <div
                    key={exp.name}
                    onClick={() => handleSelectExpertForSlot(exp.name)}
                    className="p-2.5 rounded-[12px] border border-[#E6EBF3] hover:border-[#C99A2E] hover:bg-[#FFFDF7] flex items-center justify-between gap-3 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-9 h-9 rounded-full object-cover border border-[#CBD5E1]"
                      />
                      <div>
                        <h4 className="text-[13px] font-medium text-[#0B1D3A]">{exp.name}</h4>
                        <p className="text-[11px] text-[#7B8DAA] font-normal">{exp.role}</p>
                      </div>
                    </div>
                    <span className="text-[11.5px] font-medium text-[#C99A2E]">{exp.values[6]}</span>
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
