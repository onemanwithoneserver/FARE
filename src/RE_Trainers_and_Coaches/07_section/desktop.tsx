import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { Rocket, BookOpen, Target, PenTool, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const tabIcons = {
        Rocket: <Rocket size={24} strokeWidth={2} />,
        BookOpen: <BookOpen size={24} strokeWidth={2} />,
        Target: <Target size={24} strokeWidth={2} />,
        PenTool: <PenTool size={24} strokeWidth={2} />
    };

    const activeTabData = data.tabs.find(t => t.id === activeTab) || data.tabs[0];

    return (
        <section className="w-full py-16 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#3B82F6]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i, arr) => (
                            <span key={i} className={i >= arr.length - 3 ? "text-[#C99A2E]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-[1100px] mx-auto">
                    
                    
                    <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4">
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative p-6 rounded flex items-center gap-5 text-left transition-all duration-500 w-full overflow-hidden group ${
                                        isActive 
                                        ? 'bg-gradient-to-r from-[#0B1D3A] to-[#132D5F] shadow-[0_20px_40px_-10px_rgba(11,29,58,0.3)] border border-transparent scale-[1.02]' 
                                        : 'bg-white border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/10 hover:bg-white shadow-sm hover:shadow-md'
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                    )}
                                    {isActive && (
                                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-[30px] rounded-bl-full" style={{ background: tab.color }}></motion.div>
                                    )}
                                    <div 
                                        className={`w-14 h-14 rounded flex items-center justify-center shrink-0 transition-all duration-500 relative overflow-hidden ${
                                            isActive ? 'text-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] scale-110' : 'bg-[#F8FAFD] text-[#0B1D3A]/40 group-hover:scale-105'
                                        }`}
                                        style={isActive ? { backgroundColor: tab.color } : {}}
                                    >
                                        {isActive && <div className="absolute inset-0 bg-white/20"></div>}
                                        <div className="relative z-10">{tabIcons[tab.icon as keyof typeof tabIcons]}</div>
                                    </div>
                                    <span className={`text-[18px] font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#0B1D3A] group-hover:text-[#C99A2E]'}`}>
                                        {tab.label}
                                    </span>
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeTabIndicator"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full"
                                            style={{ backgroundColor: tab.color }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    
                    <div className="flex-1 w-full bg-white border border-[#0B1D3A]/[0.06] rounded p-10 lg:p-14 min-h-[550px] flex flex-col relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,29,58,0.05)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 flex flex-col h-full"
                            >
                                
                                <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -right-10 w-64 h-64 opacity-10 blur-[60px] pointer-events-none rounded-full" style={{ background: activeTabData.color }}></motion.div>
                                <div className="absolute top-0 right-0 text-[#0B1D3A]/[0.02] -mt-4 -mr-4 pointer-events-none">
                                    {tabIcons[activeTabData.icon as keyof typeof tabIcons]}
                                </div>

                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded mb-8 border backdrop-blur-md" style={{ backgroundColor: `${activeTabData.color}10`, borderColor: `${activeTabData.color}20`, color: activeTabData.color }}>
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTabData.color }}></span>
                                    <span className="text-[13px] font-bold uppercase tracking-wider">{activeTabData.label}</span>
                                </div>

                                <h3 className="text-[32px] lg:text-[40px] font-black mb-6 leading-tight" style={{ color: NAVY }}>
                                    {activeTabData.title}
                                </h3>
                                
                                <p className="text-[18px] font-medium text-[#475569] leading-relaxed mb-12 max-w-[650px]">
                                    {activeTabData.desc}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-auto">
                                    {activeTabData.features.map((feature, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                                            className="group flex items-start gap-4 p-4 rounded hover:bg-[#F8FAFD] transition-colors duration-300 border border-transparent hover:border-[#0B1D3A]/5 cursor-default"
                                        >
                                            <div className="mt-1 shrink-0 p-1.5 rounded transition-colors duration-300 shadow-sm" style={{ backgroundColor: `${activeTabData.color}15`, color: activeTabData.color }}>
                                                <CheckCircle2 size={18} strokeWidth={3} />
                                            </div>
                                            <span className="text-[16px] font-bold text-[#0B1D3A] leading-snug group-hover:text-[#C99A2E] transition-colors">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
