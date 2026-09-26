import React, { useState } from "react";
import { motion } from "motion/react";
import { Building2, ChevronRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
export default function RECompaniesForm() {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };
  if (isSubmitted) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#0B1D3A]/10 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-[#0B1D3A]" />
        </div>
        <h3 className="text-3xl font-black text-[#0B1D3A] mb-3">
          {language === "te" ? "విజయవంతంగా సమర్పించబడింది" : "Request Received"}
        </h3>
        <p className="text-[#475569] text-lg max-w-[400px]">
          {language === "te"
            ? "మా కార్పొరేట్ బృందం మిమ్మల్ని త్వరలో సంప్రదిస్తుంది."
            : "Thank you for reaching out. Our corporate solutions team will contact you shortly to discuss your requirements."}
        </p>
      </div>
    );
  }
  return (
    <div className="p-8 md:p-12 bg-white flex flex-col relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-radial from-[#0B1D3A]/[0.03] to-transparent rounded-full blur-[60px] pointer-events-none" />
      <div className="max-w-2xl mx-auto w-full relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0B1D3A]/5 text-[#0B1D3A] mb-5">
            <Building2 size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1D3A] leading-tight mb-3">
            Partner with{" "}
            <span className="text-[#C99A2E] gold-underline">FARE</span>
          </h2>
          <p className="text-[#475569] text-[15px] max-w-lg mx-auto">
            Empower your sales team and channel partners with our
            industry-leading real estate training solutions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Company Name
              </label>
              <input
                required
                type="text"
                placeholder="Acme Real Estate"
                className="w-full bg-white border border-[#0B1D3A]/15 rounded-lg py-3.5 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition-all placeholder:text-[#0B1D3A]/30 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Contact Person
              </label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-white border border-[#0B1D3A]/15 rounded-lg py-3.5 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition-all placeholder:text-[#0B1D3A]/30 shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Work Email
              </label>
              <input
                required
                type="email"
                placeholder="jane@company.com"
                className="w-full bg-white border border-[#0B1D3A]/15 rounded-lg py-3.5 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition-all placeholder:text-[#0B1D3A]/30 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-[#0B1D3A]/15 rounded-lg py-3.5 px-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition-all placeholder:text-[#0B1D3A]/30 shadow-sm"
              />
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <label className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">
              Team Size (Sales & Channel Partners)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["1-10", "11-50", "51-200", "200+"].map((size) => (
                <label
                  key={size}
                  className="relative flex items-center justify-center p-3 bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-lg cursor-pointer hover:border-[#0B1D3A]/30 transition-colors group"
                >
                  <input
                    type="radio"
                    name="team_size"
                    className="peer sr-only"
                    value={size}
                  />
                  <span className="text-[13px] font-medium text-[#475569] peer-checked:text-[#0B1D3A] peer-checked:font-bold">
                    {size}
                  </span>
                  <div className="absolute inset-0 border-2 border-transparent peer-checked:border-[#0B1D3A] rounded-lg transition-all hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out" />
                </label>
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-8 bg-[#0B1D3A] text-white py-4 rounded-lg font-bold text-[15px] flex items-center justify-center gap-3 shadow-[0_8px_16px_-8px_rgba(11,29,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.5)] transition-all"
          >
            Request Consultation <ChevronRight size={18} />
          </motion.button>
        </form>
      </div>
    </div>
  );
}
