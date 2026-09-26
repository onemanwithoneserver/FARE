import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  TrendingUp,
  MessageCircle,
  Monitor,
  Shield,
  Heart,
  Megaphone,
  Database,
  Settings,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import Modal from "../../Components/Forms/Modal";
import RETrainersForm from "../../Components/Forms/Desktop/RETrainersForm";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Desktop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const data = getData(language);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const categoryIcons = {
    TrendingUp: <TrendingUp size={24} className="text-white relative z-10" />,
    MessageCircle: (
      <MessageCircle size={24} className="text-white relative z-10" />
    ),
    Monitor: <Monitor size={24} className="text-white relative z-10" />,
    Shield: <Shield size={24} className="text-white relative z-10" />,
    Heart: <Heart size={24} className="text-white relative z-10" />,
    Megaphone: <Megaphone size={24} className="text-white relative z-10" />,
    Database: <Database size={24} className="text-white relative z-10" />,
    Settings: <Settings size={24} className="text-white relative z-10" />,
  };
  return (
    <section className="w-full py-16 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <div className="max-w-[1320px] mx-auto px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={item} className="mb-6">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]"
              style={{ color: GOLD }}
            >
              {data.overline}
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[950px]"
            style={{ color: NAVY }}
          >
            {data.headline.split(" ").map((word, i, arr) => (
              <span
                key={i}
                className={i >= arr.length - 2 ? "text-[#C99A2E]" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-[18px] font-medium leading-[1.65] max-w-[750px] text-[#475569]"
          >
            {data.subtitle}
          </motion.p>
        </motion.div>
        <div className="columns-1 md:columns-2 gap-8 space-y-8 mb-12">
          {data.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#0B1D3A]/[0.06] rounded p-10 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(11,29,58,0.12)] transition-all duration-400 break-inside-avoid relative overflow-hidden group cursor-default"
            >
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 blur-[40px] rounded-bl-full pointer-events-none"
                style={{ background: category.color }}
              ></motion.div>
              <div
                className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 ease-out"
                style={{ background: category.color }}
              ></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div
                  className="w-16 h-16 rounded flex items-center justify-center shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative overflow-hidden"
                  style={{ backgroundColor: category.color }}
                >
                  <div className="absolute inset-0 bg-white/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                  {categoryIcons[category.icon as keyof typeof categoryIcons]}
                </div>
                <h3 className="text-[22px] font-bold" style={{ color: NAVY }}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-6 relative z-10">
                {category.subcategories.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFD]/50 rounded p-5 border border-[#0B1D3A]/[0.03]"
                  >
                    {sub.label && (
                      <h4
                        className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2"
                        style={{ color: category.color }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        {sub.label}
                      </h4>
                    )}
                    <div className="flex flex-wrap gap-2.5">
                      {sub.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-white border border-[#0B1D3A]/[0.06] px-3.5 py-1.5 rounded text-[14px] font-medium text-[#3A4A63] hover:border-[#C99A2E]/40 hover:text-[#C99A2E] hover:shadow-[0_2px_8px_rgba(201,154,46,0.1)] transition-all duration-300 shadow-sm cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[950px] mx-auto relative group"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-[#C99A2E]/25 via-transparent to-[#3B82F6]/25 blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          ></motion.div>
          <div
            className="rounded p-16 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,29,58,0.35)] border border-[#C99A2E]/30"
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 50%, #132D5F 100%)`,
            }}
          >
            <motion.div
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-72 h-72 bg-[#C99A2E]/15 rounded-full blur-[65px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-72 h-72 bg-[#3B82F6]/15 rounded-full blur-[65px] pointer-events-none"
            ></motion.div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-[28px] lg:text-[32px] font-bold text-white mb-4 flex items-center justify-center gap-3">
                {data.footerLine1}{" "}
                <Sparkles size={26} className="text-[#C99A2E]" />
              </h3>
              <p className="text-[16px] lg:text-[17px] font-bold text-[#CBD5E1] mb-10 uppercase tracking-[0.2em]">
                {data.footerLine2}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/[0.06] backdrop-blur-md border border-white/10 py-5 px-10 rounded shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/[0.1] hover:border-[#C99A2E]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 max-w-[850px] cursor-pointer group"
              >
                <p className="text-[20px] font-semibold text-white/95 leading-relaxed group-hover:text-white transition-colors">
                  {data.footerCta}
                </p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isModalOpen && <RETrainersForm />}
      </Modal>
    </section>
  );
}
