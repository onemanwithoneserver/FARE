import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { Send, X } from "lucide-react";
import { CustomSelect, CustomCheckbox, CustomRadio, CustomDatePicker } from "./FormControls";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

interface CorporateRequestFormProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Desktop({ isOpen = false, onClose }: CorporateRequestFormProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const inputClasses = "w-full bg-[#F8FAFD]/50 backdrop-blur-sm border border-[#0B1D3A]/[0.08] rounded px-4 py-3 text-[14px] font-medium text-[#0B1D3A] hover:bg-white hover:border-[#0B1D3A]/[0.15] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/10 focus:border-[#8B5CF6] focus:bg-white aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20 aria-[invalid=false]:border-emerald-500/40 transition-all duration-300 ease-out placeholder:text-[#7B8DAA]/60 shadow-[0_2px_10px_-4px_rgba(11,29,58,0.02)]";
  const labelClasses = "block text-[11px] font-black text-[#0B1D3A]/80 uppercase tracking-[0.08em] mb-2";

  const [audience, setAudience] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [formats, setFormats] = useState<string[]>([]);
  const [mode, setMode] = useState("Offline / Classroom");

  const toggleFormat = (fmt: string) => {
    if (formats.includes(fmt)) setFormats(formats.filter(f => f !== fmt));
    else setFormats([...formats, fmt]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#0B1D3A]/40 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded shadow-[0_24px_80px_-12px_rgba(11,29,58,0.3)] border border-white/40 flex flex-col p-8 md:p-10 font-['Outfit']"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[40px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[40px] pointer-events-none z-0" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#0B1D3A]/[0.06] hover:bg-[#F8FAFD] hover:border-[#0B1D3A]/10 text-[#7B8DAA] hover:text-[#0B1D3A] transition-all duration-300 shadow-sm z-20"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 w-full"
            >
              <motion.div variants={item} className="flex items-center gap-4 mb-8">
                <div className="w-[4px] h-9 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
                <div>
                  <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Corporate Request Form</h2>
                  <p className="text-[13px] text-[#5A6B82] font-medium mt-0.5">Fill out the details below to initiate a training request.</p>
                </div>
              </motion.div>

              <motion.form variants={item} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Organisation Name</label>
                    <input type="text" className={inputClasses} placeholder="Enter company name" />
                  </div>
                  <div>
                    <label className={labelClasses}>Training Requirement</label>
                    <input type="text" className={inputClasses} placeholder="e.g. Sales Capability Workshop" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Audience</label>
                    <CustomSelect
                      options={["Freshers", "Sales Executives", "Managers", "Leadership"]}
                      placeholder="Select Audience"
                      value={audience}
                      onChange={setAudience}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Participants (Approx)</label>
                    <input type="number" className={inputClasses} placeholder="e.g. 20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-[#F8FAFD]/50 rounded p-5 border border-[#0B1D3A]/[0.06]">
                    <label className={labelClasses}>Preferred Format (Multiple)</label>
                    <div className="flex flex-col gap-3 mt-3">
                      <CustomCheckbox label="Workshop" checked={formats.includes("Workshop")} onChange={() => toggleFormat("Workshop")} />
                      <CustomCheckbox label="Live Course" checked={formats.includes("Live Course")} onChange={() => toggleFormat("Live Course")} />
                      <CustomCheckbox label="Mock Sessions" checked={formats.includes("Mock Sessions")} onChange={() => toggleFormat("Mock Sessions")} />
                    </div>
                  </div>
                  <div className="bg-[#F8FAFD]/50 rounded p-5 border border-[#0B1D3A]/[0.06]">
                    <label className={labelClasses}>Preferred Mode</label>
                    <div className="flex flex-col gap-3 mt-3">
                      <CustomRadio label="Offline / Classroom" name="mode" checked={mode === "Offline / Classroom"} onChange={() => setMode("Offline / Classroom")} />
                      <CustomRadio label="Online Live" name="mode" checked={mode === "Online Live"} onChange={() => setMode("Online Live")} />
                      <CustomRadio label="Blended" name="mode" checked={mode === "Blended"} onChange={() => setMode("Blended")} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col z-10">
                    <label className={labelClasses}>Preferred Date</label>
                    <CustomDatePicker selected={date} onChange={(d: Date) => setDate(d)} placeholderText="Select Date" />
                  </div>
                  <div>
                    <label className={labelClasses}>Location / Venue</label>
                    <input type="text" className={inputClasses} placeholder="City or Office location" />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Additional Message (Optional)</label>
                  <textarea
                    className={`${inputClasses} h-24 resize-none`}
                    placeholder="Describe any specific requirements or focus areas for the training..."
                  ></textarea>
                </div>

                <div className="pt-2 border-t border-[#0B1D3A]/[0.06] mt-2 flex justify-end">
                  <button
                    type="button"
                    className="text-white px-8 py-3.5 rounded font-bold text-[14px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 flex items-center justify-center gap-2.5 shadow-[0_8px_24px_-8px_rgba(139,92,246,0.5)] hover:shadow-[0_12px_32px_-12px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group w-full md:w-auto"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
                  >
                    Submit Request
                    <Send size={16} strokeWidth={2.5} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                  </button>
                </div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
