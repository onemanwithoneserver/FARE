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
        <section className="w-full py-10 bg-[#040C1E] text-white relative font-['Outfit'] overflow-hidden">
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="w-full px-5 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        {data.headline}
                    </h2>
                    <p className="text-[14.5px] font-medium leading-[1.65] text-white/60">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {data.tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center justify-center gap-2 px-3 py-4 rounded text-[12px] font-bold transition-all duration-300 border relative overflow-hidden ${
                                activeTab === tab.id
                                    ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                    : 'bg-white/[0.02] border-white/[0.05] text-white/50'
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div 
                                    layoutId="activeTabIndicatorMobile"
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ background: `linear-gradient(180deg, transparent, ${TAB_COLORS[tab.id]}40)` }}
                                />
                            )}
                            <div
                                className={`w-8 h-8 rounded flex items-center justify-center text-white shadow-md transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : ''}`}
                                style={{ backgroundColor: TAB_COLORS[tab.id] }}
                            >
                                {TAB_ICONS[tab.id]}
                            </div>
                            <span className="relative z-10">{tab.title}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#0A1630]/60 border border-white/10 rounded overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] relative"
                    >
                        <div 
                            className="absolute top-0 right-0 w-[200px] h-[200px] opacity-10 blur-[50px] pointer-events-none transition-colors duration-500 rounded-bl-full" 
                            style={{ background: activeColor }} 
                        />
                        <div 
                            className="absolute top-0 left-0 w-full h-[2px] opacity-70 transition-colors duration-500" 
                            style={{ background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }} 
                        />

                        <div className="p-6 flex flex-col gap-8 relative z-10">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded flex items-center justify-center shadow-lg" style={{ backgroundColor: activeColor }}>
                                        {TAB_ICONS[activeTab]}
                                    </div>
                                    <h3 className="text-[20px] font-bold leading-tight text-white">{activeContent.title}</h3>
                                </div>
                                <p className="text-[14.5px] text-white/70 leading-relaxed mb-6 font-medium">{activeContent.desc}</p>

                                <div className="flex flex-col gap-6">
                                    {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                        <div key={idx} className="bg-white/[0.02] rounded p-5 border border-white/[0.05]">
                                            <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2" style={{ color: activeColor }}>
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeColor }}></div>
                                                {section.heading}
                                            </h4>
                                            <ul className="flex flex-col gap-3.5">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3 text-[14px] text-white/80">
                                                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/10" style={{ color: activeColor }}>
                                                            <CheckCircle2 size={11} strokeWidth={2.5} />
                                                        </div>
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 border-t border-white/[0.05] pt-6">
                                {activeContent.journey && (
                                    <div className="bg-[#040C1E]/50 rounded p-5 border border-white/5">
                                        <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">{data.journeyLabel}</h4>
                                        <div className="flex flex-col gap-2.5">
                                            {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/50">{i + 1}</div>
                                                    <span className="text-[14px] font-bold" style={{ color: i === arr.length - 1 ? activeColor : 'rgba(255,255,255,0.8)' }}>{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeContent.evaluateBasedOn && (
                                    <div className="bg-[#040C1E]/50 rounded p-5 border border-white/5">
                                        <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">{data.evaluateLabel}</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeContent.evaluateBasedOn.split(' · ').map((tag: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-white/70">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-gradient-to-b from-white/10 to-white/5 rounded p-6 border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.3)] mt-2">
                                    <p className="text-[14px] font-medium italic mb-5 text-center text-white/90 leading-snug">"{activeContent.footerText}"</p>
                                    <div className="flex flex-col gap-3 w-full">
                                        {activeContent.buttons.map((btn: string, idx: number) => (
                                            <button
                                                key={idx}
                                                className={`w-full py-3.5 px-4 rounded text-[13.5px] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                                    idx === 0
                                                        ? 'text-[#040C1E] shadow-md active:scale-[0.98]'
                                                        : 'bg-white/5 text-white border border-white/10 active:scale-[0.98]'
                                                }`}
                                                style={idx === 0 ? { backgroundColor: 'white' } : {}}
                                            >
                                                {btn} <ArrowRight size={15} strokeWidth={2.5} />
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
