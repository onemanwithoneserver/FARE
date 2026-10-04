import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown, Sparkles } from "lucide-react";

const icons = [MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown];

const THEMES = [
  { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", lightGradient: "from-rose-50/60 to-transparent", dot: "bg-rose-500", solidBg: "bg-rose-500" },
  { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", lightGradient: "from-amber-50/60 to-transparent", dot: "bg-amber-500", solidBg: "bg-amber-500" },
  { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200", lightGradient: "from-sky-50/60 to-transparent", dot: "bg-sky-500", solidBg: "bg-sky-500" },
  { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", lightGradient: "from-purple-50/60 to-transparent", dot: "bg-purple-500", solidBg: "bg-purple-500" },
  { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", lightGradient: "from-emerald-50/60 to-transparent", dot: "bg-emerald-500", solidBg: "bg-emerald-500" },
  { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200", lightGradient: "from-pink-50/60 to-transparent", dot: "bg-pink-500", solidBg: "bg-pink-500" },
  { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", lightGradient: "from-blue-50/60 to-transparent", dot: "bg-blue-500", solidBg: "bg-blue-500" },
  { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", lightGradient: "from-indigo-50/60 to-transparent", dot: "bg-indigo-500", solidBg: "bg-indigo-500" }
];

export default function Mobile() {
  const sectionData = data.mockTypes;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-16 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex justify-center items-center opacity-70">
         <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[50%] bg-blue-100/40 rounded-full blur-[80px]" />
         <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[40%] bg-rose-100/40 rounded-full blur-[80px]" />
      </div>
      
      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white border border-slate-200 shadow-sm mb-6">
             <Sparkles size={14} className="text-blue-500" />
             <span className="text-[11px] font-bold tracking-wide text-slate-700 uppercase">Training Scenarios</span>
          </div>
          
          <h2 className="mb-4 text-[clamp(24px,6vw,32px)] font-black leading-tight tracking-tight text-[#0B1D3A]">
            {sectionData.title}
          </h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 rounded-full" />
          
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed max-w-[280px] mx-auto">
            {sectionData.description}
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-5"
        >
          {sectionData.types.map((type, index) => {
            const theme = THEMES[index % THEMES.length];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                className="group relative bg-white rounded-[4px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col"
              >
                {/* Subtle Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.lightGradient} opacity-50`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-3.5 mb-5">
                    <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center shrink-0 ${theme.solidBg} text-white shadow-sm border border-white`}>
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-[18px] font-bold text-[#0B1D3A] leading-tight">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[14.5px] text-slate-600 leading-relaxed font-medium">
                      "{type.scenario}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
