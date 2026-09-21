import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { CheckCircle2, ArrowRight, BookOpen, BarChart2, Target, Users } from 'lucide-react';

const GOLD = '#C99A2E';

const TAB_ICONS: Record<string, React.ReactNode> = {
    tab1: <BookOpen size={16} className="text-white" />,
    tab2: <BarChart2 size={16} className="text-white" />,
    tab3: <Target size={16} className="text-white" />,
    tab4: <Users size={16} className="text-white" />
};

const TAB_COLORS: Record<string, string> = {
    tab1: '#10B981',
    tab2: '#3B82F6',
    tab3: '#F59E0B',
    tab4: '#EC4899'
};

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const activeContent = data.tabContent[activeTab as keyof typeof data.tabContent] as any;
    const activeColor = TAB_COLORS[activeTab] || GOLD;

    return (
        <section className="w-full py-16 bg-[#0B1D3A] text-white relative font-['Outfit'] overflow-hidden">
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/8 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>

            <div className="w-full px-5 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-3">
                        {data.headline}
                    </h2>
                    <p className="text-[14px] font-medium leading-[1.6] text-white/60">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-8">
                    {data.tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded text-[12px] font-semibold transition-all duration-300 border ${
                                activeTab === tab.id
                                    ? 'bg-white/10 border-[#C99A2E]/40 text-white shadow-sm'
                                    : 'bg-white/[0.03] border-white/[0.08] text-white/50'
                            }`}
                        >
                            <div
                                className="w-6 h-6 rounded flex items-center justify-center text-white shrink-0 shadow-sm"
                                style={{ backgroundColor: TAB_COLORS[tab.id] }}
                            >
                                {TAB_ICONS[tab.id]}
                            </div>
                            <span className="truncate">{tab.title}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white/[0.04] border border-white/[0.08] rounded overflow-hidden backdrop-blur-sm"
                    >
                        <div className="p-6 flex flex-col gap-7">
                            <div className="flex flex-col">
                                <h3 className="text-[20px] font-bold mb-3 leading-tight">{activeContent.title}</h3>
                                <p className="text-[14px] text-white/65 leading-relaxed mb-6">{activeContent.desc}</p>

                                <div className="flex flex-col gap-5">
                                    {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                        <div key={idx}>
                                            <h4 className="text-[12px] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2" style={{ color: activeColor }}>
                                                <div className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: activeColor }}></div>
                                                {section.heading}
                                            </h4>
                                            <ul className="flex flex-col gap-2">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/80">
                                                        <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                                                            <CheckCircle2 size={10} strokeWidth={3} className="text-white" />
                                                        </div>
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-5">
                                {activeContent.journey && (
                                    <div>
                                        <h4 className="text-[11px] font-bold text-white/45 uppercase tracking-[0.15em] mb-2.5">{data.journeyLabel}</h4>
                                        <div className="flex flex-wrap items-center gap-2 font-semibold text-[13px]" style={{ color: activeColor }}>
                                            {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                <React.Fragment key={i}>
                                                    <span>{step}</span>
                                                    {i < arr.length - 1 && <ArrowRight size={12} className="text-white/30" />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeContent.evaluateBasedOn && (
                                    <div>
                                        <h4 className="text-[11px] font-bold text-white/45 uppercase tracking-[0.15em] mb-2">{data.evaluateLabel}</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeContent.evaluateBasedOn.split(' · ').map((tag: string, i: number) => (
                                                <span key={i} className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[11px] font-medium text-white/75">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-gradient-to-br from-[#0F2751] to-[#071A49] rounded p-5 border border-[#C99A2E]/20 mt-1">
                                    <p className="text-[13.5px] font-bold italic mb-4 text-center text-white/85 leading-snug">"{activeContent.footerText}"</p>
                                    <div className="flex flex-col gap-2.5 w-full">
                                        {activeContent.buttons.map((btn: string, idx: number) => (
                                            <button
                                                key={idx}
                                                className={`w-full py-3 px-4 rounded text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                                    idx === 0
                                                        ? 'bg-[#C99A2E] text-[#0B1D3A] shadow-lg'
                                                        : 'bg-white/10 text-white'
                                                }`}
                                            >
                                                {btn} <ArrowRight size={14} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
