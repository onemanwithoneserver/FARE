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
  tab1: <BookOpen size={16} className="text-white" />,
  tab2: <BarChart2 size={16} className="text-white" />,
  tab3: <Target size={16} className="text-white" />,
  tab4: <Users size={16} className="text-white" />,
};
const TAB_COLORS: Record<string, string> = {
  tab1: "#10B981",
  tab2: "#3B82F6",
  tab3: "#F59E0B",
  tab4: "#EC4899",
};
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  return (
    <section
      className="w-full py-12 text-[#0B1D3A] relative font-['Outfit'] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none z-0"
      ></motion.div>
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="w-full px-5 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-[#0B1D3A] to-[#0B1D3A]/70">
            {data.headline}
          </h2>
          <p className="text-[14.5px] font-medium leading-[1.65] text-[#475569]">
            {data.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {data.tabs.map((tab) => {
            const activeContent = data.tabContent[
              tab.id as keyof typeof data.tabContent
            ] as any;
            const activeColor = TAB_COLORS[tab.id] || GOLD;
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 border border-[#0B1D3A]/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(11,29,58,0.08)] relative hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out"
              >
                <div
                  className="absolute top-0 right-0 w-[200px] h-[200px] opacity-[0.06] blur-[50px] pointer-events-none rounded-bl-full"
                  style={{ background: activeColor }}
                />
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-70"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                  }}
                />
                <div className="p-6 flex flex-col gap-8 relative z-10">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                        style={{ backgroundColor: activeColor }}
                      >
                        {TAB_ICONS[tab.id]}
                      </div>
                      <div>
                        <h4
                          className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-80"
                          style={{ color: activeColor }}
                        >
                          {tab.title}
                        </h4>
                        <h3 className="text-[24px] font-bold leading-tight text-[#0B1D3A]">
                          {activeContent.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[15px] text-[#475569] leading-relaxed mb-6 font-medium">
                      {activeContent.desc}
                    </p>
                    <div className="flex flex-col gap-4">
                      {activeContent.sections.map(
                        (
                          section: { heading: string; items: string[] },
                          idx: number,
                        ) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-b from-[#0B1D3A]/[0.02] to-transparent rounded-lg p-5 border border-[#0B1D3A]/[0.06] relative overflow-hidden"
                          >
                            <div
                              className="absolute top-0 right-0 w-20 h-20 opacity-10 blur-[20px] pointer-events-none"
                              style={{ background: activeColor }}
                            ></div>
                            <h4
                              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2 relative z-10"
                              style={{ color: activeColor }}
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                style={{ backgroundColor: activeColor }}
                              ></div>
                              {section.heading}
                            </h4>
                            <ul
                              className={`grid relative z-10 ${section.items.length > 3 ? "grid-cols-1 sm:grid-cols-2 gap-2.5" : "grid-cols-1 gap-2.5"}`}
                            >
                              {section.items.map((item: string, i: number) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-[13.5px] text-[#334155] font-medium"
                                >
                                  <div
                                    className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm bg-white border border-[#0B1D3A]/10"
                                    style={{ color: activeColor }}
                                  >
                                    <CheckCircle2
                                      size={11}
                                      strokeWidth={2.5}
                                      className="opacity-80"
                                    />
                                  </div>
                                  <span className="leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 border-t border-[#0B1D3A]/[0.08] pt-6">
                    {(activeContent.journey ||
                      activeContent.evaluateBasedOn) && (
                      <div className="bg-[#0B1D3A]/[0.03] rounded-lg p-4 border border-[#0B1D3A]/[0.06]">
                        {activeContent.journey && (
                          <div>
                            <h4 className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-4">
                              {data.journeyLabel}
                            </h4>
                            <div className="flex flex-col gap-2.5">
                              {activeContent.journey
                                .split(" → ")
                                .map(
                                  (step: string, i: number, arr: string[]) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-3"
                                    >
                                      <div className="w-7 h-7 rounded-full border-2 border-[#0B1D3A]/15 flex items-center justify-center text-[11px] font-bold text-[#7B8DAA] bg-white/50">
                                        {i + 1}
                                      </div>
                                      <span
                                        className="text-[14px] font-bold"
                                        style={{
                                          color:
                                            i === arr.length - 1
                                              ? activeColor
                                              : "rgba(11,29,58,0.75)",
                                        }}
                                      >
                                        {step}
                                      </span>
                                    </div>
                                  ),
                                )}
                            </div>
                          </div>
                        )}
                        {activeContent.journey &&
                          activeContent.evaluateBasedOn && (
                            <div className="my-4 border-t border-[#0B1D3A]/[0.08]" />
                          )}
                        {activeContent.evaluateBasedOn && (
                          <div>
                            <h4 className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-3">
                              {data.evaluateLabel}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {activeContent.evaluateBasedOn
                                .split(" · ")
                                .map((tag: string, i: number) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1.5 rounded-md bg-white border border-[#0B1D3A]/10 text-[12px] font-semibold text-[#475569] shadow-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-lg p-6 shadow-[0_10px_20px_rgba(11,29,58,0.15)] mt-2 relative overflow-hidden">
                      <div
                        className="absolute top-0 right-0 w-24 h-24 opacity-20 blur-[20px]"
                        style={{ background: activeColor }}
                      ></div>
                      <div
                        className="absolute bottom-0 left-0 w-20 h-20 opacity-10 blur-[15px]"
                        style={{ background: activeColor }}
                      ></div>
                      <p className="text-[14px] font-medium italic mb-6 text-center text-white/90 leading-snug relative z-10">
                        "{activeContent.footerText}"
                      </p>
                      <div className="flex flex-col gap-3 w-full relative z-10">
                        {activeContent.buttons.map(
                          (btn: string, idx: number) => (
                            <button
                              key={idx}
                              className={`w-full py-3.5 px-4 rounded-md text-[13.5px] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                idx === 0
                                  ? "text-[#0B1D3A] bg-white shadow-md active:scale-[0.98]"
                                  : "text-white border border-white/20 active:scale-[0.98]"
                              }`}
                            >
                              {btn} <ArrowRight size={15} strokeWidth={2.5} />
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
