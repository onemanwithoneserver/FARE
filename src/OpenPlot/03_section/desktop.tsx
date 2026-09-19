import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { CheckCircle2, ArrowRight, BookOpen, BarChart2, Target, Users } from 'lucide-react';

const GOLD = '#C99A2E';

const TAB_ICONS: Record<string, React.ReactNode> = {
    tab1: <BookOpen size={20} />,
    tab2: <BarChart2 size={20} />,
    tab3: <Target size={20} />,
    tab4: <Users size={20} />
};

const TAB_COLORS: Record<string, string> = {
    tab1: '#34D399',
    tab2: '#60A5FA',
    tab3: '#C99A2E',
    tab4: '#F472B6'
};

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const activeContent = data.tabContent[activeTab as keyof typeof data.tabContent] as any;
    const activeColor = TAB_COLORS[activeTab] || GOLD;

    return (
        <section className="w-full py-28 bg-[#0B1D3A] text-white relative font-['Outfit'] overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/8 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-[#60A5FA]/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                {/* Header — centered, 1-2 lines */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-[2.75rem] lg:text-[3.25rem] leading-[1.08] font-black tracking-[-0.02em] mb-5 max-w-[800px]">
                        {data.headline}
                    </h2>
                    <p className="text-[17px] font-medium leading-[1.6] text-white/60 max-w-[600px]">
                        {data.subtitle}
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-3 mb-12">
                    {data.tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 border ${
                                activeTab === tab.id
                                    ? 'bg-white/10 border-[#C99A2E]/40 text-white shadow-[0_4px_20px_rgba(201,154,46,0.12)]'
                                    : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white/80 hover:bg-white/[0.06]'
                            }`}
                        >
                            <span style={{ color: activeTab === tab.id ? TAB_COLORS[tab.id] : undefined }}>
                                {TAB_ICONS[tab.id]}
                            </span>
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm"
                    >
                        <div className="p-10 flex flex-col lg:flex-row gap-10">
                            {/* Left: Content */}
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-[26px] font-bold mb-4 leading-tight">{activeContent.title}</h3>
                                <p className="text-[15px] text-white/65 leading-relaxed mb-8">{activeContent.desc}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                                    {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                        <div key={idx}>
                                            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: activeColor }}>
                                                <div className="w-1 h-4 rounded-full" style={{ backgroundColor: activeColor }}></div>
                                                {section.heading}
                                            </h4>
                                            <ul className="flex flex-col gap-2">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-[14px] text-white/80">
                                                        <CheckCircle2 size={15} className="text-[#34D399] shrink-0 mt-0.5" />
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Journey + CTA */}
                            <div className="w-[300px] shrink-0 flex flex-col gap-5">
                                {activeContent.journey && (
                                    <div className="bg-white/[0.06] rounded-xl p-6 border border-white/[0.08]">
                                        <h4 className="text-[11px] font-bold text-white/45 uppercase tracking-[0.15em] mb-4">{data.journeyLabel}</h4>
                                        <div className="flex flex-col gap-2">
                                            {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                <div key={i} className="flex items-center gap-2.5">
                                                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold text-white/60">{i + 1}</div>
                                                    <span className="text-[14px] font-semibold" style={{ color: activeColor }}>{step}</span>
                                                    {i < arr.length - 1 && (
                                                        <ArrowRight size={12} className="text-white/30 ml-auto" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeContent.evaluateBasedOn && (
                                    <div className="bg-white/[0.06] rounded-xl p-6 border border-white/[0.08]">
                                        <h4 className="text-[11px] font-bold text-white/45 uppercase tracking-[0.15em] mb-3">{data.evaluateLabel}</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeContent.evaluateBasedOn.split(' · ').map((tag: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[12px] font-medium text-white/80">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Block */}
                                <div className="bg-gradient-to-br from-[#0F2751] to-[#071A49] rounded-xl p-6 border border-[#C99A2E]/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)] mt-auto">
                                    <p className="text-[14px] font-bold italic mb-5 text-white/85 text-center leading-snug">"{activeContent.footerText}"</p>
                                    <div className="flex flex-col gap-2.5 w-full">
                                        {activeContent.buttons.map((btn: string, idx: number) => (
                                            <button
                                                key={idx}
                                                className={`w-full py-3 px-4 rounded-lg text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                                    idx === 0
                                                        ? 'bg-[#C99A2E] text-[#0B1D3A] hover:bg-[#D5AA45] shadow-lg hover:shadow-xl'
                                                        : 'bg-white/10 text-white hover:bg-white/15'
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
