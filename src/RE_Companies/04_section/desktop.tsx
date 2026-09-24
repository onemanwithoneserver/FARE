import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  BarChart2,
  Target,
  Users,
} from "lucide-react";
const GOLD = "#C99A2E";
const TAB_ICONS: Record<string, React.ReactNode> = {
  tab1: <BookOpen size={18} className="text-white" />,
  tab2: <BarChart2 size={18} className="text-white" />,
  tab3: <Target size={18} className="text-white" />,
  tab4: <Users size={18} className="text-white" />,
};
const TAB_COLORS: Record<string, string> = {
  tab1: "#10B981",
  tab2: "#3B82F6",
  tab3: "#F59E0B",
  tab4: "#EC4899",
};
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section
      className="w-full py-16 text-[#0B1D3A] relative font-['Outfit'] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      ></motion.div>
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-[1320px] mx-auto px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[3rem] lg:text-[3.5rem] leading-[1.05] font-black tracking-[-0.02em] mb-6 max-w-[850px] bg-clip-text text-transparent bg-gradient-to-b from-[#0B1D3A] to-[#0B1D3A]/70">
            {data.headline}
          </h2>
          <p className="text-[18px] font-medium leading-[1.6] text-[#475569] max-w-[650px]">
            {data.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10">
          {data.tabs.map((tab, index) => {
            const activeContent = data.tabContent[
              tab.id as keyof typeof data.tabContent
            ] as any;
            const activeColor = TAB_COLORS[tab.id] || GOLD;
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 border border-[#0B1D3A]/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(11,29,58,0.1)] hover:shadow-[0_30px_80px_-20px_rgba(11,29,58,0.15)] transition-shadow duration-500 relative group/card"
              >
                <div
                  className="absolute top-0 left-1/4 w-1/2 h-[2px] opacity-70 group-hover/card:w-2/3 group-hover/card:left-1/6 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                  }}
                />
                <div
                  className={`absolute top-0 ${isEven ? "left-0 rounded-br-full" : "right-0 rounded-bl-full"} w-[400px] h-[400px] opacity-[0.06] group-hover/card:opacity-[0.1] blur-[80px] pointer-events-none transition-opacity duration-700`}
                  style={{ background: activeColor }}
                />
                <div
                  className={`p-8 lg:p-10 flex flex-col lg:flex-row gap-8 relative z-10 ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover/card:scale-105 transition-transform duration-500"
                        style={{ backgroundColor: activeColor }}
                      >
                        {TAB_ICONS[tab.id]}
                      </div>
                      <div>
                        <h4
                          className="text-[14px] font-bold uppercase tracking-[0.15em] mb-1 opacity-80"
                          style={{ color: activeColor }}
                        >
                          {tab.title}
                        </h4>
                        <h3 className="text-[28px] lg:text-[32px] font-bold leading-tight text-[#0B1D3A]">
                          {activeContent.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[16px] lg:text-[17px] text-[#475569] leading-relaxed mb-6 max-w-[800px] font-medium">
                      {activeContent.desc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                      {activeContent.sections.map(
                        (
                          section: { heading: string; items: string[] },
                          idx: number,
                        ) => {
                          const isWideSection =
                            activeContent.sections.length === 1 ||
                            section.items.length > 4;
                          const isMultiColumnList =
                            isWideSection || section.items.length > 3;
                          return (
                            <div
                              key={idx}
                              className={`bg-gradient-to-b from-[#0B1D3A]/[0.02] to-transparent rounded-xl p-5 lg:p-6 border border-[#0B1D3A]/[0.06] hover:bg-white hover:border-[#0B1D3A]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group/section relative overflow-hidden ${isWideSection ? "md:col-span-2" : "md:col-span-1"}`}
                            >
                              <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover/section:opacity-10 blur-[30px] transition-opacity duration-500 pointer-events-none"
                                style={{ background: activeColor }}
                              ></div>
                              <h4
                                className="text-[13px] font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-3 relative z-10"
                                style={{ color: activeColor }}
                              >
                                <div
                                  className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover/section:scale-150 transition-transform duration-300"
                                  style={{ backgroundColor: activeColor }}
                                ></div>
                                {section.heading}
                              </h4>
                              <ul
                                className={`grid relative z-10 ${isMultiColumnList ? "grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5" : "grid-cols-1 gap-2.5"}`}
                              >
                                {section.items.map(
                                  (item: string, i: number) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-3 text-[14.5px] lg:text-[15px] text-[#334155] font-medium group/item hover:text-[#0B1D3A] transition-colors p-1.5 -ml-1.5 rounded-lg hover:bg-[#0B1D3A]/[0.02]"
                                    >
                                      <div
                                        className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm bg-white border border-[#0B1D3A]/10 group-hover/item:scale-110 group-hover/item:border-transparent transition-all duration-300"
                                        style={{ color: activeColor }}
                                      >
                                        <CheckCircle2
                                          size={13}
                                          strokeWidth={2.5}
                                          className="opacity-70 group-hover/item:opacity-100 transition-opacity"
                                        />
                                      </div>
                                      <span className="leading-snug group-hover/item:translate-x-1 transition-transform duration-300">
                                        {item}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4">
                    {(activeContent.journey ||
                      activeContent.evaluateBasedOn) && (
                      <div className="bg-[#0B1D3A]/[0.03] rounded-xl p-6 border border-[#0B1D3A]/[0.08] backdrop-blur-md flex-grow flex flex-col justify-center">
                        {activeContent.journey && (
                          <div>
                            <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-6">
                              {data.journeyLabel}
                            </h4>
                            <div className="flex flex-col gap-4">
                              {activeContent.journey
                                .split(" → ")
                                .map(
                                  (step: string, i: number, arr: string[]) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-4 group"
                                    >
                                      <div className="w-8 h-8 rounded-full border-2 border-[#0B1D3A]/15 flex items-center justify-center text-[12px] font-bold text-[#7B8DAA] group-hover:border-[#0B1D3A]/40 group-hover:text-[#0B1D3A] transition-colors bg-white/50">
                                        {i + 1}
                                      </div>
                                      <span
                                        className="text-[16px] font-bold transition-colors"
                                        style={{
                                          color:
                                            i === arr.length - 1
                                              ? activeColor
                                              : "rgba(11,29,58,0.75)",
                                        }}
                                      >
                                        {step}
                                      </span>
                                      {i < arr.length - 1 && (
                                        <ArrowRight
                                          size={14}
                                          className="text-[#0B1D3A]/20 ml-auto group-hover:translate-y-1 transition-transform rotate-90 sm:rotate-0 sm:group-hover:translate-y-0 sm:group-hover:translate-x-1"
                                        />
                                      )}
                                    </div>
                                  ),
                                )}
                            </div>
                          </div>
                        )}
                        {activeContent.journey &&
                          activeContent.evaluateBasedOn && (
                            <div className="my-6 border-t border-[#0B1D3A]/[0.08]" />
                          )}
                        {activeContent.evaluateBasedOn && (
                          <div>
                            <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-4">
                              {data.evaluateLabel}
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                              {activeContent.evaluateBasedOn
                                .split(" · ")
                                .map((tag: string, i: number) => (
                                  <span
                                    key={i}
                                    className="px-3.5 py-2 rounded-lg bg-white border border-[#0B1D3A]/10 text-[13px] font-semibold text-[#475569] shadow-sm hover:text-[#0B1D3A] hover:border-[#0B1D3A]/20 hover:shadow-md transition-all cursor-default"
                                  >
                                    {tag}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-xl p-6 shadow-[0_20px_40px_rgba(11,29,58,0.2)] mt-2 relative overflow-hidden flex flex-col justify-center min-h-[200px]">
                      <div
                        className="absolute top-0 right-0 w-40 h-40 opacity-20 blur-[30px]"
                        style={{ background: activeColor }}
                      ></div>
                      <div
                        className="absolute bottom-0 left-0 w-32 h-32 opacity-10 blur-[20px]"
                        style={{ background: activeColor }}
                      ></div>
                      <p className="text-[16px] font-medium italic mb-8 text-white/90 text-center leading-relaxed relative z-10">
                        "{activeContent.footerText}"
                      </p>
                      <div className="flex flex-col gap-3 w-full relative z-10 mt-auto">
                        {activeContent.buttons.map(
                          (btn: string, idx: number) => (
                            <button
                              key={idx}
                              className={`group relative overflow-hidden w-full py-4 px-6 rounded-lg text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                                idx === 0
                                  ? "text-[#0B1D3A] shadow-lg active:scale-[0.98] bg-white hover:bg-[#F8FAFD]"
                                  : "text-white border border-white/20 hover:bg-white/10 active:scale-[0.98]"
                              }`}
                            >
                              <span className="relative z-10">{btn}</span>
                              <ArrowRight
                                size={16}
                                strokeWidth={2.5}
                                className="relative z-10 group-hover:translate-x-1 transition-transform"
                              />
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
