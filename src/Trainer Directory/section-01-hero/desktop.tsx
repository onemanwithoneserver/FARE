import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ShieldCheck, Share2, Heart, MapPin, Globe, Briefcase, GraduationCap, Users, ArrowRight } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const tabs = ["Overview", "Expertise", "RE Segments", "Programs", "Methodology", "Experience", "Delivery", "Pricing"];

  return (
    <section
      className="w-full font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)" }}
    >
            <div className="absolute top-0 right-[15%] w-[500px] h-[500px] bg-gradient-radial from-[#DDEAFF]/50 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10 pt-10 pb-0 px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex items-start justify-between mb-8"
        >
          <div className="flex items-start gap-5">
                        <motion.div
              variants={item}
              className="w-[100px] h-[100px] rounded flex items-center justify-center text-4xl font-bold shrink-0 shadow-md"
              style={{
                background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`,
                color: "white",
                border: `2px solid ${GOLD}30`,
              }}
            >
              {data.initials}
            </motion.div>

            <div>
              <motion.div variants={item} className="flex items-center gap-3 mb-1.5">
                <h1 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{data.name}</h1>
                {data.isVerified && (
                  <span
                    className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase"
                    style={{ background: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}30` }}
                  >
                    <ShieldCheck size={12} strokeWidth={2.5} />
                    FARE Verified
                  </span>
                )}
              </motion.div>

              <motion.p variants={item} className="text-[15px] font-medium text-[#5A6B82] mb-1.5">{data.title}</motion.p>
              <motion.p variants={item} className="text-[14px] text-[#7B8DAA] mb-5 max-w-[600px] leading-relaxed">{data.positioningStatement}</motion.p>

                            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-4">
                {[
                  { icon: <Briefcase size={13} strokeWidth={2.5} />, text: "15+ Years Industry", color: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
                  { icon: <GraduationCap size={13} strokeWidth={2.5} />, text: "8+ Years Training", color: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
                  { icon: <Users size={13} strokeWidth={2.5} />, text: "500+ Trained", color: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)" },
                  { icon: <MapPin size={13} strokeWidth={2.5} />, text: "Hyderabad", color: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
                  { icon: <Globe size={13} strokeWidth={2.5} />, text: "EN · TE · HI", color: "#F59E0B", bg: "linear-gradient(135deg, #F59E0B, #D97706)" },
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.06] shadow-[0_1px_3px_rgba(11,29,58,0.03)]">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center text-white shadow-sm"
                      style={{ background: badge.bg }}
                    >
                      {badge.icon}
                    </div>
                    <span className="text-[12px] font-semibold text-[#0B1D3A]/70">{badge.text}</span>
                  </div>
                ))}
              </motion.div>

                            <motion.div variants={item} className="flex items-center gap-3 text-[13px]">
                <span
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(16,185,129,0.08)", color: "#059669", border: "1px solid rgba(16,185,129,0.2)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  {data.status.label}
                </span>
                <span className="text-[#7B8DAA] font-medium">{data.status.notice}</span>
              </motion.div>
            </div>
          </div>

                    <motion.div variants={item} className="flex flex-col gap-2.5 items-end shrink-0">
            <button
              className="w-48 text-white px-6 py-2.5 rounded font-bold text-[13px] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_16px_-4px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_24px_-4px_rgba(11,29,58,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
            >
              Request This Trainer
              <ArrowRight size={14} strokeWidth={2.5} style={{ color: GOLD_MID }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            </button>
            <button
              className="w-48 px-6 py-2.5 rounded font-bold text-[13px] border border-[#0B1D3A]/[0.12] hover:border-[#0B1D3A]/25 transition-all duration-300 flex items-center justify-center gap-2 bg-white hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              style={{ color: NAVY }}
            >
              <Heart size={14} strokeWidth={2.5} /> Shortlist
            </button>
            <button className="text-[#7B8DAA] hover:text-[#0B1D3A] text-[12px] font-semibold flex items-center gap-1.5 mt-1 transition-colors duration-200">
              <Share2 size={13} strokeWidth={2.5} /> Share Profile
            </button>
          </motion.div>
        </motion.div>

                <div className="flex items-center gap-0 border-t border-[#0B1D3A]/[0.06]">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className={`py-3.5 px-5 cursor-pointer text-[13px] font-semibold relative transition-colors duration-200 ${
                idx === 0 ? "text-[#0B1D3A] font-bold" : "text-[#7B8DAA] hover:text-[#0B1D3A]"
              }`}
            >
              {tab}
              {idx === 0 && (
                <div
                  className="absolute bottom-0 left-0 w-full h-[2.5px] rounded-t"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
