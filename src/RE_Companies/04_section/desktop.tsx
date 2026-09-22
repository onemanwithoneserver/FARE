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
        <section className="w-full py-16 text-[#0B1D3A] relative font-['Outfit'] overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}>
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>

            <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-8">
                    <h2 className="text-[3rem] lg:text-[3.5rem] leading-[1.05] font-black tracking-[-0.02em] mb-6 max-w-[850px] bg-clip-text text-transparent bg-gradient-to-b from-[#0B1D3A] to-[#0B1D3A]/70">
                        {data.headline}
                    </h2>
                    <p className="text-[18px] font-medium leading-[1.6] text-[#475569] max-w-[650px]">
                        {data.subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {data.tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group flex items-center gap-3 px-6 py-3.5 rounded text-[15px] font-bold transition-all duration-400 border relative overflow-hidden ${
                                activeTab === tab.id
                                    ? 'bg-[#0B1D3A]/[0.06] border-[#0B1D3A]/20 text-[#0B1D3A] shadow-[0_0_30px_rgba(11,29,58,0.08)] scale-[1.02]'
                                    : 'bg-[#0B1D3A]/[0.02] border-[#0B1D3A]/[0.06] text-[#7B8DAA] hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/15'
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div 
                                    layoutId="activeTabIndicator"
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ background: `linear-gradient(90deg, transparent, ${TAB_COLORS[tab.id]}, transparent)` }}
                                />
                            )}
                            <div
                                className={`w-8 h-8 rounded flex items-center justify-center text-white shrink-0 shadow-md transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}
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
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/80 border border-[#0B1D3A]/10 rounded overflow-hidden backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(11,29,58,0.12)] relative"
                    >
                        
                        <div 
                            className="absolute top-0 left-1/4 w-1/2 h-[1px] opacity-70 transition-colors duration-500" 
                            style={{ background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }} 
                        />
                        <div 
                            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 blur-[80px] pointer-events-none transition-colors duration-500 rounded-bl-full" 
                            style={{ background: activeColor }} 
                        />

                        <div className="p-12 lg:p-14 flex flex-col lg:flex-row gap-12 relative z-10">
                            
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded flex items-center justify-center shadow-lg" style={{ backgroundColor: activeColor }}>
                                        {TAB_ICONS[activeTab]}
                                    </div>
                                    <h3 className="text-[32px] font-bold leading-tight text-[#0B1D3A]">{activeContent.title}</h3>
                                </div>
                                <p className="text-[17px] text-[#475569] leading-relaxed mb-10 max-w-[800px] font-medium">{activeContent.desc}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {activeContent.sections.map((section: { heading: string; items: string[] }, idx: number) => (
                                        <div key={idx} className="bg-[#0B1D3A]/[0.03] rounded p-6 border border-[#0B1D3A]/[0.08]">
                                            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-5 flex items-center gap-3" style={{ color: activeColor }}>
                                                <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: activeColor }}></div>
                                                {section.heading}
                                            </h4>
                                            <ul className="flex flex-col gap-4">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3.5 text-[15.5px] text-[#334155] font-medium">
                                                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm bg-[#0B1D3A]/10" style={{ color: activeColor }}>
                                                            <CheckCircle2 size={14} strokeWidth={2.5} />
                                                        </div>
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            
                            <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6">
                                {activeContent.journey && (
                                    <div className="bg-[#0B1D3A]/[0.04] rounded p-7 border border-[#0B1D3A]/10 backdrop-blur-md">
                                        <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-5">{data.journeyLabel}</h4>
                                        <div className="flex flex-col gap-3">
                                            {activeContent.journey.split(' → ').map((step: string, i: number, arr: string[]) => (
                                                <div key={i} className="flex items-center gap-3.5 group">
                                                    <div className="w-8 h-8 rounded-full border-2 border-[#0B1D3A]/15 flex items-center justify-center text-[11px] font-bold text-[#7B8DAA] group-hover:border-[#0B1D3A]/40 group-hover:text-[#0B1D3A] transition-colors">{i + 1}</div>
                                                    <span className="text-[15.5px] font-bold transition-colors" style={{ color: i === arr.length - 1 ? activeColor : 'rgba(11,29,58,0.75)' }}>{step}</span>
                                                    {i < arr.length - 1 && (
                                                        <ArrowRight size={14} className="text-[#0B1D3A]/20 ml-auto" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeContent.evaluateBasedOn && (
                                    <div className="bg-[#0B1D3A]/[0.04] rounded p-7 border border-[#0B1D3A]/10 backdrop-blur-md flex-grow">
                                        <h4 className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-[0.2em] mb-4">{data.evaluateLabel}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeContent.evaluateBasedOn.split(' · ').map((tag: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 rounded bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/10 text-[13px] font-medium text-[#475569] hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/10 transition-colors cursor-default">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-gradient-to-b from-[#0B1D3A]/[0.05] to-[#0B1D3A]/[0.02] rounded p-8 border border-[#0B1D3A]/10 shadow-[0_15px_30px_rgba(11,29,58,0.08)] mt-2 relative overflow-hidden backdrop-blur-md">
                                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-[30px]" style={{ background: activeColor }}></motion.div>
                                    
                                    <p className="text-[15px] font-medium italic mb-6 text-[#0B1D3A]/85 text-center leading-relaxed relative z-10">"{activeContent.footerText}"</p>
                                    <div className="flex flex-col gap-3 w-full relative z-10">
                                        {activeContent.buttons.map((btn: string, idx: number) => (
                                            <button
                                                key={idx}
                                                className={`group relative overflow-hidden w-full py-4 px-5 rounded text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                                    idx === 0
                                                        ? 'text-white shadow-[0_8px_20px_-5px_rgba(11,29,58,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(11,29,58,0.4)] active:scale-[0.98]'
                                                        : 'bg-[#0B1D3A]/5 text-[#0B1D3A] hover:bg-[#0B1D3A]/10 border border-[#0B1D3A]/15 active:scale-[0.98]'
                                                }`}
                                                style={idx === 0 ? { backgroundColor: '#0B1D3A' } : {}}
                                            >
                                                <span className="relative z-10">{btn}</span>
                                                <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
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
