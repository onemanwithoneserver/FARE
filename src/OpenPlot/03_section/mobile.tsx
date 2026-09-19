import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { data } from './data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const activeContent = data.tabContent[activeTab as keyof typeof data.tabContent] as any;

    return (
        <section className="w-full py-16 bg-[#0B1D3A] text-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></div>
            
            <div className="w-full px-5 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-[2.25rem] leading-[1.1] font-black tracking-[-0.02em] mb-3">
                        {data.headline}
                    </h2>
                    <p className="text-[15px] font-medium leading-[1.6] text-white/70">
                        {data.subtitle}
                    </p>
                </div>

                <div className="flex flex-col border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden">
                    {/* Tabs Header - Scrollable */}
                    <div className="flex overflow-x-auto hide-scrollbar border-b border-white/10 bg-white/[0.02]">
                        {data.tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`whitespace-nowrap py-4 px-5 text-[13px] font-bold tracking-wide uppercase transition-all duration-300 relative ${
                                    activeTab === tab.id ? 'text-[#C99A2E] bg-white/[0.05]' : 'text-white/50'
                                }`}
                            >
                                {tab.title}
                                {activeTab === tab.id && (
                                    <motion.div 
                                        layoutId="activeTabIndicatorMobile" 
                                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C99A2E]" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="flex flex-col">
                                    <h3 className="text-[22px] font-bold mb-3 leading-tight">{activeContent.title}</h3>
                                    <p className="text-[14.5px] text-white/70 leading-relaxed mb-6">{activeContent.desc}</p>
                                    
                                    <div className="flex flex-col gap-6 mb-2">
                                        {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                            <div key={idx}>
                                                <h4 className="text-[13px] font-bold text-[#C99A2E] uppercase tracking-wider mb-2.5">{section.heading}</h4>
                                                <ul className="flex flex-col gap-2">
                                                    {section.items.map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2 text-[13.5px] text-white/80">
                                                            <CheckCircle2 size={16} className="text-[#34D399] shrink-0 mt-0.5" />
                                                            <span className="leading-snug">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5 border-t border-white/10 pt-6 mt-2">
                                    {activeContent.journey && (
                                        <div>
                                            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">Journey</h4>
                                            <div className="flex flex-wrap items-center gap-1.5 font-semibold text-[#C99A2E] text-[13px]">
                                                {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                    <React.Fragment key={i}>
                                                        <span>{step}</span>
                                                        {i < arr.length - 1 && <ArrowRight size={12} className="text-white/40" />}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeContent.evaluateBasedOn && (
                                        <div>
                                            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">Evaluate Based On</h4>
                                            <p className="text-[12px] font-medium leading-relaxed text-white/90">
                                                {activeContent.evaluateBasedOn}
                                            </p>
                                        </div>
                                    )}

                                    <div className="bg-gradient-to-br from-[#102B63] to-[#071A49] rounded-xl p-5 border border-[#C99A2E]/20 mt-2">
                                        <p className="text-[14px] font-bold italic mb-5 text-center text-white/90">"{activeContent.footerText}"</p>
                                        <div className="flex flex-col gap-2.5 w-full">
                                            {activeContent.buttons.map((btn: string, idx: number) => (
                                                <button
                                                    key={idx}
                                                    className={`w-full py-3 px-4 rounded-md text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
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
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
