import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Maximize, User, Phone, Sparkles, Send } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
export default function OpenPlotForm() {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };
  if (isSubmitted) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#C99A2E]/10 flex items-center justify-center mb-6">
          <Sparkles size={32} className="text-[#C99A2E]" />
        </div>
        <h3 className="text-3xl font-black text-[#0B1D3A] mb-3">
          {language === "te"
            ? "విజయవంతంగా సమర్పించబడింది"
            : "Successfully Submitted"}
        </h3>
        <p className="text-[#475569] text-lg max-w-[400px]">
          {language === "te"
            ? "మీ వివరాలు మాకు చేరాయి. మా బృందం త్వరలో మిమ్మల్ని సంప్రదిస్తుంది."
            : "Thank you for your interest. Our team will get back to you shortly with the best open plot opportunities."}
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
      <div className="hidden lg:flex flex-col w-[40%] p-12 bg-gradient-to-b from-[#F8FAFD] to-[#EEF4FF] border-r border-[#0B1D3A]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[40px] pointer-events-none" />
        <h2 className="text-3xl font-black text-[#0B1D3A] leading-tight mb-4 relative z-10">
          Find Your Perfect{" "}
          <span className="text-[#C99A2E] gold-underline">Open Plot</span>
        </h2>
        <p className="text-[#475569] mb-10 leading-relaxed text-[15px] relative z-10">
          Discover premium open plots with FARE. Tell us your preferences and
          we'll match you with the best available properties.
        </p>
        <div className="mt-auto space-y-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <MapPin size={18} className="text-[#C99A2E]" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0B1D3A]">
                Prime Locations
              </div>
              <div className="text-[12px] text-[#475569]">
                Carefully vetted properties
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Maximize size={18} className="text-[#C99A2E]" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0B1D3A]">
                Any Size
              </div>
              <div className="text-[12px] text-[#475569]">
                From residential to commercial
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 lg:p-12 bg-white relative">
        <h3 className="text-2xl font-black text-[#0B1D3A] mb-8 lg:hidden">
          Request Info
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1D3A]/40"
                />
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-xl py-3.5 pl-11 pr-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E]/50 focus:ring-2 focus:ring-[#C99A2E]/10 transition-all placeholder:text-[#0B1D3A]/30"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wider">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1D3A]/40"
                />
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-xl py-3.5 pl-11 pr-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E]/50 focus:ring-2 focus:ring-[#C99A2E]/10 transition-all placeholder:text-[#0B1D3A]/30"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wider">
              Preferred Location
            </label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1D3A]/40"
              />
              <input
                required
                type="text"
                placeholder="e.g., Hyderabad, ORR..."
                className="w-full bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-xl py-3.5 pl-11 pr-4 text-[15px] text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E]/50 focus:ring-2 focus:ring-[#C99A2E]/10 transition-all placeholder:text-[#0B1D3A]/30"
              />
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <label className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wider">
              Plot Size Requirement
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "100-200 Sq Yds",
                "200-500 Sq Yds",
                "500-1000 Sq Yds",
                "1000+ Sq Yds",
              ].map((size) => (
                <label
                  key={size}
                  className="relative flex items-center justify-center p-3 border border-[#0B1D3A]/10 rounded-xl cursor-pointer hover:bg-[#F8FAFD] transition-colors group"
                >
                  <input
                    type="radio"
                    name="plot_size"
                    className="peer sr-only"
                    value={size}
                  />
                  <span className="text-[13px] font-medium text-[#475569] peer-checked:text-[#C99A2E] peer-checked:font-bold">
                    {size}
                  </span>
                  <div className="absolute inset-0 border-2 border-transparent peer-checked:border-[#C99A2E]/40 rounded-xl transition-all hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out" />
                </label>
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#0B1D3A] to-[#071A49] text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-3 shadow-[0_10px_20px_-10px_rgba(11,29,58,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(11,29,58,0.5)] transition-all"
          >
            Submit Request <Send size={16} />
          </motion.button>
        </form>
      </div>
    </div>
  );
}
