import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { CheckCircle2, ArrowRight, BookOpen, BarChart2, Target, Users } from 'lucide-react';

const GOLD = '#C99A2E';

const TAB_ICONS: Record<string, React.ReactNode> = {
    tab1: <BookOpen size={18} className="text-white" />,
    tab2: <BarChart2 size={18} className="text-white" />,
    tab3: <Target size={18} className="text-white" />,
    tab4: <Users size={18} className="text-white" />
};

const TAB_COLORS: Record<string, string> = {
    tab1: '#10B981',
    tab2: '#3B82F6',
    tab3: '#F59E0B',
    tab4: '#EC4899'
};

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const activeContent = data.tabContent[activeTab as keyof typeof data.tabContent] as any;
    const activeColor = TAB_COLORS[activeTab] || GOLD;

    return (
        <section className="w-full py-32 bg-[#0B1D3A] text-white relative font-['Outfit'] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] left-1/3 w-[600px] h-[600px] bg-gradient-radial from-[#60A5FA]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#10B981]/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></div>

            {/* Subtle mesh grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1280px] mx-auto px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="mb-5"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]"
                    >
                        {data.headline}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-[18px] font-medium leading-[1.6] text-white/70 max-w-[650px]"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center flex-wrap gap-4 mb-16 relative">
                    {/* Animated active indicator background */}
                    <div className="absolute inset-0 pointer-events-none flex justify-center">
                        <div className="flex gap-4">
                            {data.tabs.map(tab => (
                                <div key={`indicator-${tab.id}`} className="w-[180px] opacity-0"></div>
                            ))}
                        </div>
                    </div>

                    {data.tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group relative flex items-center gap-3 w-[180px] px-5 py-4 rounded-2xl text-[14px] font-bold transition-all duration-400 border overflow-hidden ${
                                activeTab === tab.id
                                    ? 'bg-white/10 border-white/20 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]'
                                    : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:text-white/90 hover:bg-white/[0.05] hover:border-white/10'
                            }`}
                        >
                            {/* Active Tab Glow */}
                            {activeTab === tab.id && (
                                <motion.div 
                                    layoutId="activeTabGlow"
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )}
                            
                            {/* Active Top Border */}
                            {activeTab === tab.id && (
                                <motion.div 
                                    layoutId="activeTabBorder"
                                    className="absolute top-0 left-0 right-0 h-[2px]"
                                    style={{ backgroundColor: TAB_COLORS[tab.id] }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )}

                            <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}
                                style={{ 
                                    backgroundColor: activeTab === tab.id ? TAB_COLORS[tab.id] : 'rgba(255,255,255,0.1)',
                                    color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.5)'
                                }}
                            >
                                {TAB_ICONS[tab.id]}
                            </div>
                            <span className="relative z-10 leading-tight text-left">{tab.title}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-[32px] overflow-hidden backdrop-blur-md shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative"
                    >
                        {/* Tab Content Background Glow */}
                        <div 
                            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.07] blur-[80px] pointer-events-none transition-colors duration-500 rounded-bl-full"
                            style={{ backgroundColor: activeColor }}
                        ></div>

                        <div className="p-14 flex flex-col lg:flex-row gap-16 relative z-10">
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-[32px] font-bold mb-5 leading-[1.1]">{activeContent.title}</h3>
                                <p className="text-[16px] text-white/70 leading-relaxed mb-10 max-w-[650px]">{activeContent.desc}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                        <div key={idx} className="group">
                                            <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-4 flex items-center gap-3" style={{ color: activeColor }}>
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeColor }}></div>
                                                {section.heading}
                                            </h4>
                                            <ul className="flex flex-col gap-3.5">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3 text-[15px] text-white/80 group-hover:text-white/95 transition-colors duration-300">
                                                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 mt-[2px] shadow-sm bg-white/10" style={{ color: activeColor }}>
                                                            <CheckCircle2 size={13} strokeWidth={2.5} />
                                                        </div>
                                                        <span className="leading-[1.6]">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-[340px] shrink-0 flex flex-col gap-6">
                                {activeContent.journey && (
                                    <div className="bg-white/[0.04] rounded-2xl p-7 border border-white/[0.08] hover:bg-white/[0.06] transition-colors duration-300">
                                        <h4 className="text-[12px] font-bold text-white/50 uppercase tracking-[0.15em] mb-5">{data.journeyLabel}</h4>
                                        <div className="flex flex-col gap-3">
                                            {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                <div key={i} className="flex items-center gap-3.5 group/step">
                                                    <div 
                                                        className="w-7 h-7 rounded-full border flex items-center justify-center text-[11px] font-bold transition-colors duration-300"
                                                        style={{ 
                                                            borderColor: `${activeColor}40`, 
                                                            color: activeColor,
                                                            backgroundColor: `${activeColor}10`
                                                        }}
                                                    >
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-[15px] font-semibold text-white/90 group-hover/step:text-white transition-colors">{step}</span>
                                                    {i < arr.length - 1 && (
                                                        <div className="w-px h-6 bg-white/10 absolute left-[31px] -mt-8 pointer-events-none hidden"></div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeContent.evaluateBasedOn && (
                                    <div className="bg-white/[0.04] rounded-2xl p-7 border border-white/[0.08] hover:bg-white/[0.06] transition-colors duration-300">
                                        <h4 className="text-[12px] font-bold text-white/50 uppercase tracking-[0.15em] mb-4">{data.evaluateLabel}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeContent.evaluateBasedOn.split(' · ').map((tag: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[13px] font-medium text-white/85 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-gradient-to-br from-[#0F2751] to-[#071A49] rounded-2xl p-8 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] mt-auto relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[30px]"></div>
                                    
                                    <p className="text-[15px] font-bold italic mb-6 text-white/90 text-center leading-[1.6] relative z-10">"{activeContent.footerText}"</p>
                                    
                                    <div className="flex flex-col gap-3 w-full relative z-10">
                                        {activeContent.buttons.map((btn: string, idx: number) => (
                                            <button
                                                key={idx}
                                                className={`group relative w-full py-3.5 px-5 rounded-xl text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                                                    idx === 0
                                                        ? 'text-[#0B1D3A] shadow-[0_8px_20px_rgba(201,154,46,0.3)] hover:shadow-[0_12px_25px_rgba(201,154,46,0.4)] hover:-translate-y-0.5'
                                                        : 'bg-white/10 text-white hover:bg-white/15 border border-white/10 hover:border-white/20'
                                                }`}
                                                style={idx === 0 ? { background: `linear-gradient(135deg, ${GOLD} 0%, #D5AA45 100%)` } : {}}
                                            >
                                                <span className="relative z-10">{btn}</span>
                                                <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                                
                                                {/* Button hover shimmer */}
                                                {idx === 0 && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.3] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                )}
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
