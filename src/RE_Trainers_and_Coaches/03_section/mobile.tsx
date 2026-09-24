import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Rocket, Link2, Target, PenTool } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
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
  const icons = {
    Rocket: (
      <Rocket
        size={20}
        strokeWidth={2.2}
        className="text-white relative z-10"
      />
    ),
    Link2: (
      <Link2 size={20} strokeWidth={2.2} className="text-white relative z-10" />
    ),
    Target: (
      <Target
        size={20}
        strokeWidth={2.2}
        className="text-white relative z-10"
      />
    ),
    PenTool: (
      <PenTool
        size={20}
        strokeWidth={2.2}
        className="text-white relative z-10"
      />
    ),
  };
  const sectionTitle = data.title;
  return (
    <section
      className="w-full py-10 relative font-['Outfit'] overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#F1F5FB] to-transparent rounded-full blur-[60px] pointer-events-none"
      ></motion.div>
      <div className="px-5 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={item} className="mb-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]"
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
            className="text-[15px] font-medium leading-[1.6] text-[#475569]"
          >
            {sectionTitle}
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 relative"
        >
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white border border-[#0B1D3A]/[0.06] rounded-lg p-3.5 shadow-[0_2px_10px_-4px_rgba(11,29,58,0.05)] relative overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out"
            >
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-24 h-24 opacity-[0.06] blur-[24px] rounded-bl-full pointer-events-none"
                style={{ background: card.color }}
              ></motion.div>
              <div
                className="absolute left-0 top-0 bottom-0 w-1 opacity-100"
                style={{ background: card.color }}
              ></div>
              <div>
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center shadow-xs relative overflow-hidden"
                    style={{ backgroundColor: card.color }}
                  >
                    {icons[card.icon as keyof typeof icons]}
                  </div>
                  <div
                    className="px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase border flex items-center gap-1"
                    style={{
                      color: card.color,
                      backgroundColor: `${card.color}12`,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: card.color }}
                    ></span>
                    {card.tag}
                  </div>
                </div>
                <h3
                  className="text-[13.5px] font-bold mb-1.5 leading-snug relative z-10"
                  style={{ color: NAVY }}
                >
                  {card.title}
                </h3>
                <p className="text-[11px] font-medium leading-[1.5] text-[#475569] relative z-10 line-clamp-4">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
