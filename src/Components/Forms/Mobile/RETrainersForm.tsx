import React, { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Upload,
  Tag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
export default function RETrainersForm() {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null,
  );
  const expertiseOptions = [
    "Sales Strategy",
    "Lead Generation",
    "Negotiation",
    "Market Analysis",
    "Digital Marketing",
    "Client Management",
    "Property Law",
    "Soft Skills",
  ];
  const toggleExpertise = (item: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };
  if (isSubmitted) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-[#10B981]" />
        </div>
        <h3 className="text-3xl font-black text-[#0B1D3A] mb-3">
          {language === "te" ? "నమోదు పూర్తయింది" : "Registration Complete"}
        </h3>
        <p className="text-[#475569] text-lg max-w-[400px]">
          {language === "te"
            ? "మీ ప్రొఫైల్ మాకు చేరింది. మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము."
            : "Your profile has been submitted successfully. We will review your details and get in touch soon."}
        </p>
      </div>
    );
  }
  return (
    <div className="p-8 md:p-12 bg-gradient-to-br from-white via-[#F8FAFD] to-[#EEF4FF] flex flex-col relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-radial from-[#3B82F6]/[0.05] to-transparent rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[50px] pointer-events-none" />
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
          <GraduationCap size={28} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1D3A] leading-tight">
            Trainer{" "}
            <span className="text-[#3B82F6] underline decoration-[#3B82F6]/30 decoration-[3px] underline-offset-4">
              Registration
            </span>
          </h2>
          <p className="text-[#475569] text-[14px]">
            Join the FARE network of elite real estate coaches
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Alex Johnson"
              className="w-full bg-white border border-[#3B82F6]/20 rounded-xl py-3 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/10 transition-all shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider flex items-center gap-1.5">
              Years of Experience
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              {["1-3 Years", "4-7 Years", "8-12 Years", "12+ Years"].map(
                (exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => setSelectedExperience(exp)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                      selectedExperience === exp
                        ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_4px_10px_rgba(59,130,246,0.3)]"
                        : "bg-white text-[#475569] border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:bg-[#F8FAFD]"
                    }`}
                  >
                    {exp}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider flex items-center gap-1.5">
            <Tag size={14} className="text-[#3B82F6]" /> Key Expertise Areas
          </label>
          <div className="flex flex-wrap gap-2 pt-1">
            {expertiseOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleExpertise(opt)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                  selectedExpertise.includes(opt)
                    ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_4px_10px_rgba(59,130,246,0.3)]"
                    : "bg-white text-[#475569] border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:bg-[#F8FAFD]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
            LinkedIn Profile URL
          </label>
          <input
            required
            type="url"
            placeholder="https://linkedin.com/in/username"
            className="w-full bg-white border border-[#3B82F6]/20 rounded-xl py-3 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/10 transition-all shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
            Upload Resume / Profile
          </label>
          <div className="w-full border-2 border-dashed border-[#3B82F6]/30 rounded-xl py-8 px-4 flex flex-col items-center justify-center bg-white/50 hover:bg-[#F8FAFD] transition-colors cursor-pointer group hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out">
            <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-3 group-hover:bg-[#3B82F6]/20 transition-colors">
              <Upload size={20} className="text-[#3B82F6]" />
            </div>
            <span className="text-[14px] font-medium text-[#0B1D3A]">
              Click to upload or drag & drop
            </span>
            <span className="text-[12px] text-[#475569] mt-1">
              PDF, DOCX up to 10MB
            </span>
          </div>
        </div>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-3 shadow-[0_8px_20px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_12px_24px_-8px_rgba(59,130,246,0.7)] transition-all"
        >
          Submit Application <ArrowRight size={18} />
        </motion.button>
      </form>
    </div>
  );
}
