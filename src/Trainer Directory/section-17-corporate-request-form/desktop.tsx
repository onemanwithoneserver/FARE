import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Send } from "lucide-react";
import { CustomSelect, CustomCheckbox, CustomRadio, CustomDatePicker } from "./FormControls";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const inputClasses = "w-full bg-white/50 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded-xl px-4 py-2.5 text-[13px] font-medium text-[#0B1D3A] hover:border-[#0B1D3A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 focus:border-[#C99A2E] focus:ring-1 focus:ring-[#C99A2E]/30 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30 aria-[invalid=false]:border-emerald-600/40 transition-all duration-300 ease-out placeholder:text-[#7B8DAA]";
  const labelClasses = "block text-[11px] font-bold text-[#0B1D3A] uppercase tracking-[0.05em] mb-1.5";

  const [audience, setAudience] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [formats, setFormats] = useState<string[]>([]);
  const [mode, setMode] = useState("Offline / Classroom");

  const toggleFormat = (fmt: string) => {
    if (formats.includes(fmt)) setFormats(formats.filter(f => f !== fmt));
    else setFormats([...formats, fmt]);
  };

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gradient-radial from-[#DDEAFF]/40 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-5 flex flex-col justify-center">
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
              <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Corporate Request Form</h2>
            </motion.div>
            <motion.p variants={item} className="text-[14px] text-[#5A6B82] leading-relaxed mb-8">
              Interested in booking Rajesh for your team? Fill out the form to share your training requirements. We'll get back to you within 24 hours to discuss details and pricing.
            </motion.p>

            <motion.div
              variants={item}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] group"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)` }}
            >
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 p-6 text-center group-hover:scale-105 transition-transform duration-700">
                 <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-2xl font-black" style={{ color: GOLD_MID }}>RK</span>
                 </div>
                 <h3 className="text-[16px] font-bold text-white mb-1">Rajesh Kumar</h3>
                 <p className="text-[12px] font-medium text-white/70">Real Estate Sales Trainer</p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-7">
            <motion.div
              variants={item}
              className="bg-white/80 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-8 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)]"
            >
              <form className="flex flex-col gap-5">
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
                  <div>
                    <label className={labelClasses}>Preferred Format (Multiple)</label>
                    <div className="flex flex-col gap-2.5 mt-2">
                      <CustomCheckbox label="Workshop" checked={formats.includes("Workshop")} onChange={() => toggleFormat("Workshop")} />
                      <CustomCheckbox label="Live Course" checked={formats.includes("Live Course")} onChange={() => toggleFormat("Live Course")} />
                      <CustomCheckbox label="Mock Sessions" checked={formats.includes("Mock Sessions")} onChange={() => toggleFormat("Mock Sessions")} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses}>Preferred Mode</label>
                    <div className="flex flex-col gap-2.5 mt-2">
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

                <button
                  type="button"
                  className="mt-2 text-white px-8 py-3.5 rounded-xl font-bold text-[14px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 flex items-center justify-center gap-2 shadow-[0_4px_16px_-4px_rgba(11,29,58,0.25)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group w-full md:w-max"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
                >
                  Submit Request
                  <Send size={15} strokeWidth={2.5} style={{ color: GOLD_MID }} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
