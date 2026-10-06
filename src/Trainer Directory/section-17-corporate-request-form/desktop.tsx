import { useProfileText } from "../profileData";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { Send, X } from "lucide-react";
import { CustomSelect, CustomCheckbox, CustomRadio, CustomDatePicker } from "./FormControls";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

interface CorporateRequestFormProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Desktop({ isOpen = false, onClose }: CorporateRequestFormProps) {
  const t = useProfileText();
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const inputClasses = "w-full bg-[#F8FAFD]/50 backdrop-blur-sm border border-[#0B1D3A]/[0.08] rounded-[4px] px-4 py-3 text-[14px] font-medium text-[#0B1D3A] hover:bg-white hover:border-[#0B1D3A]/[0.15] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/10 focus:border-[#8B5CF6] focus:bg-white aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20 aria-[invalid=false]:border-emerald-500/40 transition-all duration-300 ease-out placeholder:text-[#7B8DAA]/60 luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400";
  const labelClasses = "block text-[11px] font-black text-[#0B1D3A]/80 uppercase tracking-[0.08em] mb-2";

  const [audience, setAudience] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [formats, setFormats] = useState<string[]>([]);
  const [mode, setMode] = useState("Offline / Classroom");
  const [submitStatus, setSubmitStatus] = useState("");

  const toggleFormat = (fmt: string) => {
    if (formats.includes(fmt)) setFormats(formats.filter(f => f !== fmt));
    else setFormats([...formats, fmt]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const organisation = String(formData.get("organisation") ?? "").trim();
    const requirement = String(formData.get("requirement") ?? "").trim();
    const participants = Number(formData.get("participants"));
    const location = String(formData.get("location") ?? "").trim();

    if (!organisation) return setSubmitStatus(t("Please enter your organisation name."));
    if (!requirement) return setSubmitStatus(t("Please describe the training requirement."));
    if (!audience || !Number.isInteger(participants) || participants < 1) {
      return setSubmitStatus(t("Please choose an audience and enter a valid participant count."));
    }
    if (formats.length === 0) return setSubmitStatus(t("Please select at least one preferred format."));
    if (!location) return setSubmitStatus(t("Please provide a location or venue."));

    setSubmitStatus(t("Thank you. Your request has been submitted."));
    event.currentTarget.reset();
    setAudience("");
    setDate(null);
    setFormats([]);
    setMode("Offline / Classroom");
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
            className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded-[4px] luxury-shadow-float border border-white/40 flex flex-col p-8 md:p-10 font-['Outfit']"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[40px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[40px] pointer-events-none z-0" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#0B1D3A]/[0.06] hover:bg-[#F8FAFD] hover:border-[#0B1D3A]/10 text-[#7B8DAA] hover:text-[#0B1D3A] transition-all duration-300 luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 z-20"
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
                  <h2 className=" text-[#0B1D3A] text-[24px] font-black tracking-[-0.02em]">{t("Corporate Request Form")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
                  <p className="text-[13px] text-[#5A6B82] font-medium mt-0.5">{t("Fill out the details below to initiate a training request.")}</p>
                </div>
              </motion.div>

              <motion.form variants={item} className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>{t("Organisation Name")}</label>
                    <input type="text" name="organisation" className={inputClasses} placeholder={t("Enter company name")} />
                  </div>
                  <div>
                    <label className={labelClasses}>{t("Training Requirement")}</label>
                    <input type="text" name="requirement" className={inputClasses} placeholder={t("e.g. Sales Capability Workshop")} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>{t("Audience")}</label>
                    <CustomSelect
                      options={["Freshers", "Sales Executives", "Managers", "Leadership"].map(t)}
                      placeholder={t("Select Audience")}
                      value={audience}
                      onChange={setAudience}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>{t("Participants (Approx)")}</label>
                    <input type="number" name="participants" min="1" className={inputClasses} placeholder={t("e.g. 20")} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-[#F8FAFD]/50 rounded-[4px] p-5 border border-[#0B1D3A]/[0.06]">
                    <label className={labelClasses}>{t("Preferred Format (Multiple)")}</label>
                    <div className="flex flex-col gap-3 mt-3">
                      <CustomCheckbox label={t("Workshop")} checked={formats.includes("Workshop")} onChange={() => toggleFormat("Workshop")} />
                      <CustomCheckbox label={t("Live Course")} checked={formats.includes("Live Course")} onChange={() => toggleFormat("Live Course")} />
                      <CustomCheckbox label={t("Mock Sessions")} checked={formats.includes("Mock Sessions")} onChange={() => toggleFormat("Mock Sessions")} />
                    </div>
                  </div>
                  <div className="bg-[#F8FAFD]/50 rounded-[4px] p-5 border border-[#0B1D3A]/[0.06]">
                    <label className={labelClasses}>{t("Preferred Mode")}</label>
                    <div className="flex flex-col gap-3 mt-3">
                      <CustomRadio label={t("Offline / Classroom")} name="mode" checked={mode === "Offline / Classroom"} onChange={() => setMode("Offline / Classroom")} />
                      <CustomRadio label={t("Online Live")} name="mode" checked={mode === "Online Live"} onChange={() => setMode("Online Live")} />
                      <CustomRadio label={t("Blended")} name="mode" checked={mode === "Blended"} onChange={() => setMode("Blended")} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col z-10">
                    <label className={labelClasses}>{t("Preferred Date")}</label>
                    <CustomDatePicker selected={date} onChange={(d: Date | null) => setDate(d)} placeholderText={t("Select Date")} />
                  </div>
                  <div>
                    <label className={labelClasses}>{t("Location / Venue")}</label>
                    <input type="text" name="location" className={inputClasses} placeholder={t("City or Office location")} />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>{t("Additional Message (Optional)")}</label>
                  <textarea
                    className={`${inputClasses} h-24 resize-none`}
                    placeholder={t("Describe any specific requirements or focus areas for the training...")}
                  ></textarea>
                </div>

                <div className="pt-2 border-t border-[#0B1D3A]/[0.06] mt-2 flex justify-end">
                  {submitStatus && (
                    <p role="status" aria-live="polite" className={`mb-4 text-sm font-semibold ${submitStatus === t("Thank you. Your request has been submitted.") ? "text-emerald-700" : "text-red-600"}`}>
                      {submitStatus}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="text-white px-8 py-3.5 rounded-[8px] font-bold text-[14px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 flex items-center justify-center gap-2.5 luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group  md:w-auto"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
                  >
                    {t("Submit Request")}
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
