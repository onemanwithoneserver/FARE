import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import Modal from "../../Components/Forms/Modal";
import RETrainersForm from "../../Components/Forms/Mobile/RETrainersForm";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const categoryIcons = {
    TrendingUp: <TrendingUp size={20} className="text-white relative z-10" />,
    MessageCircle: (
      <MessageCircle size={20} className="text-white relative z-10" />
    ),
    Monitor: <Monitor size={20} className="text-white relative z-10" />,
    Shield: <Shield size={20} className="text-white relative z-10" />,
    Heart: <Heart size={20} className="text-white relative z-10" />,
    Megaphone: <Megaphone size={20} className="text-white relative z-10" />,
    Database: <Database size={20} className="text-white relative z-10" />,
    Settings: <Settings size={20} className="text-white relative z-10" />,
  };
  return (
    <section className="w-full py-10 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[60px] pointer-events-none"
      ></motion.div>
      <div className="px-5 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-8"
        >
          <motion.div variants={item} className="mb-4">
            <span
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]"
              style={{ color: GOLD }}
            >
              {data.overline}
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4"
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
            className="text-[14.5px] font-medium leading-[1.65] text-[#475569]"
          >
            {data.subtitle}
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-6 mb-10">
          {data.categories.map((category, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white border border-[#0B1D3A]/[0.06] rounded shadow-[0_4px_15px_-4px_rgba(11,29,58,0.05)] relative overflow-hidden"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] blur-[30px] rounded-bl-full pointer-events-none"
                  style={{ background: category.color }}
                ></motion.div>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between relative z-10 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded flex items-center justify-center shadow-md shrink-0 transition-transform duration-300"
                      style={{
                        backgroundColor: category.color,
                        transform: isOpen ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {
                        categoryIcons[
                          category.icon as keyof typeof categoryIcons
                        ]
                      }
                    </div>
                    <h3
                      className="text-[18px] font-bold"
                      style={{ color: NAVY }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 ml-4 w-8 h-8 rounded-full border border-[#0B1D3A]/10 flex items-center justify-center bg-[#F8FAFD]"
                  >
                    <ChevronDown size={18} className="text-[#0B1D3A]/60" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 flex flex-col gap-5 relative z-10 border-t border-[#0B1D3A]/[0.03] pt-4">
                        {category.subcategories.map((sub, idx) => (
                          <div
                            key={idx}
                            className="bg-[#F8FAFD]/50 rounded p-4 border border-[#0B1D3A]/[0.03]"
                          >
                            {sub.label && (
                              <h4
                                className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3 flex items-center gap-2"
                                style={{ color: category.color }}
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: category.color }}
                                ></div>
                                {sub.label}
                              </h4>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {sub.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="bg-white border border-[#0B1D3A]/[0.06] px-3 py-1.5 rounded text-[13px] font-medium text-[#3A4A63] shadow-sm hover:shadow transition-shadow duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="rounded p-8 text-center relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(11,29,58,0.35)] border border-[#C99A2E]/30"
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 50%, #132D5F 100%)`,
            }}
          >
            <motion.div
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-36 h-36 bg-[#C99A2E]/15 rounded-full blur-[40px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-36 h-36 bg-[#3B82F6]/15 rounded-full blur-[40px] pointer-events-none"
            ></motion.div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-[20px] font-bold text-white mb-3 flex items-center justify-center gap-2.5">
                {data.footerLine1}{" "}
                <Sparkles size={18} className="text-[#C99A2E]" />
              </h3>
              <p className="text-[13px] font-bold text-[#CBD5E1] mb-6 uppercase tracking-[0.16em]">
                {data.footerLine2}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/[0.06] backdrop-blur-md border border-white/10 py-4 px-5 rounded w-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/[0.1] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <p className="text-[15px] font-semibold text-white/95 leading-snug">
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
