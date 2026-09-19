import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const activeContent = data.tabContent[activeTab as keyof typeof data.tabContent] as any;

    return (
        <section className="w-full py-24 bg-[#0B1D3A] text-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></div>
            
            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-[3rem] leading-[1.1] font-black tracking-[-0.02em] mb-4">
                        {data.headline}
                    </h2>
                    <p className="text-[17px] font-medium leading-[1.6] text-white/70">
                        {data.subtitle}
                    </p>
                </div>

                <div className="flex flex-col border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden">
                    {/* Tabs Header */}
                    <div className="flex border-b border-white/10 bg-white/[0.02]">
                        {data.tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-5 px-4 text-[15px] font-bold tracking-wide uppercase transition-all duration-300 relative ${
                                    activeTab === tab.id ? 'text-[#C99A2E] bg-white/[0.05]' : 'text-white/50 hover:text-white hover:bg-white/[0.02]'
                                }`}
                            >
                                {tab.title}
                                {activeTab === tab.id && (
                                    <motion.div 
                                        layoutId="activeTabIndicator" 
                                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C99A2E]" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-12 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row gap-12"
                            >
                                {/* Left Side: Text and Sections */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-[28px] font-bold mb-4 leading-tight">{activeContent.title}</h3>
                                    <p className="text-[16px] text-white/70 leading-relaxed mb-8">{activeContent.desc}</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                                        {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                            <div key={idx}>
                                                <h4 className="text-[14px] font-bold text-[#C99A2E] uppercase tracking-wider mb-3">{section.heading}</h4>
                                                <ul className="flex flex-col gap-2">
                                                    {section.items.map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2 text-[14px] text-white/80">
                                                            <CheckCircle2 size={16} className="text-[#34D399] shrink-0 mt-0.5" />
                                                            <span className="leading-snug">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Highlights and CTA */}
                                <div className="w-[320px] shrink-0 flex flex-col gap-6">
                                    {activeContent.journey && (
                                        <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                                            <h4 className="text-[12px] font-bold text-white/50 uppercase tracking-wider mb-4">Journey</h4>
                                            <div className="flex flex-wrap items-center gap-2 font-semibold text-[#C99A2E]">
                                                {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                    <React.Fragment key={i}>
                                                        <span>{step}</span>
                                                        {i < arr.length - 1 && <ArrowRight size={14} className="text-white/40" />}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeContent.evaluateBasedOn && (
                                        <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                                            <h4 className="text-[12px] font-bold text-white/50 uppercase tracking-wider mb-3">Evaluate Based On</h4>
                                            <p className="text-[13px] font-medium leading-relaxed text-white/90">
                                                {activeContent.evaluateBasedOn}
                                            </p>
                                        </div>
                                    )}

                                    <div className="bg-gradient-to-br from-[#102B63] to-[#071A49] rounded-xl p-6 border border-[#C99A2E]/20 shadow-xl flex flex-col justify-center items-center text-center mt-auto">
                                        <p className="text-[15px] font-bold italic mb-6 text-white/90">"{activeContent.footerText}"</p>
                                        <div className="flex flex-col gap-3 w-full">
                                            {activeContent.buttons.map((btn: string, idx: number) => (
                                                <button
                                                    key={idx}
                                                    className={`w-full py-3 px-4 rounded-md text-[13.5px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                                        idx === 0 
                                                            ? 'bg-[#C99A2E] text-[#0B1D3A] hover:bg-[#D5AA45] shadow-lg' 
                                                            : 'bg-white/10 text-white hover:bg-white/20'
                                                    }`}
                                                >
                                                    {btn} <ArrowRight size={14} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
