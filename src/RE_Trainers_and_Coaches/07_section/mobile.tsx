import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { Rocket, BookOpen, Target, PenTool, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const tabIcons = {
        Rocket: <Rocket size={20} strokeWidth={2.2} />,
        BookOpen: <BookOpen size={20} strokeWidth={2.2} />,
        Target: <Target size={20} strokeWidth={2.2} />,
        PenTool: <PenTool size={20} strokeWidth={2.2} />
    };

    const activeTabData = data.tabs.find(t => t.id === activeTab) || data.tabs[0];

    return (
        <section className="w-full py-20 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i, arr) => (
                            <span key={i} className={i >= arr.length - 3 ? "text-[#C99A2E]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col gap-6">
                    
                    {/* Horizontal Scrollable Tabs */}
                    <div className="flex overflow-x-auto gap-3 pb-4 -mx-5 px-5 snap-x hide-scrollbar relative z-20">
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-5 py-4 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 min-w-[130px] shrink-0 snap-start overflow-hidden ${
                                        isActive 
                                        ? 'bg-gradient-to-br from-[#0B1D3A] to-[#132D5F] shadow-[0_8px_20px_-8px_rgba(11,29,58,0.4)] border border-transparent scale-[1.02]' 
                                        : 'bg-white border border-[#0B1D3A]/[0.06] hover:bg-[#F1F5FB] shadow-sm'
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute top-0 right-0 w-20 h-20 opacity-20 blur-[20px] rounded-bl-full" style={{ background: tab.color }}></div>
                                    )}
                                    <div 
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                                            isActive ? 'text-white shadow-md scale-110' : 'bg-[#F8FAFD] text-[#0B1D3A]/40'
                                        }`}
                                        style={isActive ? { backgroundColor: tab.color } : {}}
                                    >
                                        {isActive && <div className="absolute inset-0 bg-white/20 rounded-xl"></div>}
                                        {tabIcons[tab.icon as keyof typeof tabIcons]}
                                    </div>
                                    <span className={`text-[13px] font-bold leading-tight transition-colors duration-300 relative z-10 ${isActive ? 'text-white' : 'text-[#0B1D3A]'}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="bg-white border border-[#0B1D3A]/[0.06] rounded-[24px] p-6 sm:p-8 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(11,29,58,0.05)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.08] blur-[40px] pointer-events-none rounded-full" style={{ background: activeTabData.color }}></div>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 border backdrop-blur-md" style={{ backgroundColor: `${activeTabData.color}10`, borderColor: `${activeTabData.color}20`, color: activeTabData.color }}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeTabData.color }}></span>
                                    <span className="text-[11px] font-bold uppercase tracking-wider">{activeTabData.label}</span>
                                </div>

                                <h3 className="text-[24px] font-black mb-4 leading-tight" style={{ color: NAVY }}>
                                    {activeTabData.title}
                                </h3>
                                
                                <p className="text-[15px] font-medium text-[#475569] leading-relaxed mb-8">
                                    {activeTabData.desc}
                                </p>

                                <div className="flex flex-col gap-4">
                                    {activeTabData.features.map((feature, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className="bg-[#F8FAFD] p-4 rounded-xl border border-[#0B1D3A]/[0.03] flex items-start gap-3.5"
                                        >
                                            <div className="mt-0.5 shrink-0 p-1 rounded-md shadow-sm" style={{ backgroundColor: `${activeTabData.color}15`, color: activeTabData.color }}>
                                                <CheckCircle2 size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-[14px] font-bold text-[#0B1D3A] leading-snug">
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
