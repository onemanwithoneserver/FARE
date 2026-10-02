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

export default function Mobile({ isOpen = false, onClose }: CorporateRequestFormProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const inputClasses = "w-full bg-white/50 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded-xl px-3.5 py-2.5 text-[12px] font-medium text-[#0B1D3A] hover:border-[#0B1D3A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 focus:border-[#C99A2E] focus:ring-1 focus:ring-[#C99A2E]/30 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30 aria-[invalid=false]:border-emerald-600/40 transition-all duration-300 ease-out placeholder:text-[#7B8DAA]";
  const labelClasses = "block text-[10px] font-bold text-[#0B1D3A] uppercase tracking-[0.05em] mb-1.5";

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
            className="absolute inset-0 bg-[#0B1D3A]/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-h-[90vh] overflow-y-auto bg-[#F8FAFD] rounded-2xl shadow-2xl flex flex-col p-5 font-['Outfit']"
            style={{ backgroundImage: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#0B1D3A]/5 hover:bg-[#0B1D3A]/10 text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors z-20"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="absolute top-[10%] right-[-10%] w-[200px] h-[200px] bg-gradient-radial from-[#DDEAFF]/50 to-transparent rounded-full blur-[60px] pointer-events-none z-0" />

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 w-full mt-4"
            >
              <motion.div variants={item} className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
                <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Corporate Request</h2>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white/80 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-4 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
              >
                <form className="flex flex-col gap-4">
                  <div>
                    <label className={labelClasses}>Organisation Name</label>
                    <input type="text" className={inputClasses} placeholder="Enter company name" />
                  </div>
                  
                  <div>
                    <label className={labelClasses}>Training Requirement</label>
                    <input type="text" className={inputClasses} placeholder="e.g. Sales Capability Workshop" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="z-20">
                      <label className={labelClasses}>Audience</label>
                      <CustomSelect
                        options={["Freshers", "Sales Executives", "Managers", "Leadership"]}
                        placeholder="Select Audience"
                        value={audience}
                        onChange={setAudience}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Participants</label>
                      <input type="number" className={inputClasses} placeholder="e.g. 20" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-1">
                    <div>
                      <label className={labelClasses}>Preferred Format</label>
                      <div className="flex flex-col gap-2.5 mt-1.5">
                        <CustomCheckbox label="Workshop" checked={formats.includes("Workshop")} onChange={() => toggleFormat("Workshop")} />
                        <CustomCheckbox label="Live Course" checked={formats.includes("Live Course")} onChange={() => toggleFormat("Live Course")} />
                        <CustomCheckbox label="Mock Sessions" checked={formats.includes("Mock Sessions")} onChange={() => toggleFormat("Mock Sessions")} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClasses}>Preferred Mode</label>
                      <div className="flex flex-col gap-2.5 mt-1.5">
                        <CustomRadio label="Offline / Classroom" name="mode_mobile" checked={mode === "Offline / Classroom"} onChange={() => setMode("Offline / Classroom")} />
                        <CustomRadio label="Online Live" name="mode_mobile" checked={mode === "Online Live"} onChange={() => setMode("Online Live")} />
                        <CustomRadio label="Blended" name="mode_mobile" checked={mode === "Blended"} onChange={() => setMode("Blended")} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <div className="flex flex-col z-10 mb-4">
                      <label className={labelClasses}>Preferred Date</label>
                      <CustomDatePicker selected={date} onChange={(d: Date) => setDate(d)} placeholderText="Select Date" />
                    </div>
                    <div>
                      <label className={labelClasses}>Location / Venue</label>
                      <input type="text" className={inputClasses} placeholder="City or Office location" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Message (Optional)</label>
                    <textarea
                      className={`${inputClasses} h-20 resize-none`}
                      placeholder="Specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="mt-2 w-full text-white px-5 py-3 rounded-xl font-bold text-[13px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 flex items-center justify-center gap-2 shadow-[0_4px_12px_-4px_rgba(11,29,58,0.25)] hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
                  >
                    Submit Request
                    <Send size={13} strokeWidth={2.5} style={{ color: GOLD_MID }} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
