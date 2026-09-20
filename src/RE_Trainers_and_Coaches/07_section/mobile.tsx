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
        Rocket: <Rocket size={18} strokeWidth={2.2} />,
        BookOpen: <BookOpen size={18} strokeWidth={2.2} />,
        Target: <Target size={18} strokeWidth={2.2} />,
        PenTool: <PenTool size={18} strokeWidth={2.2} />
    };

    const sectionPrefix = data.title.includes(' — ') ? data.title.split(' — ')[0] : 'Section 7';

    const activeTabData = data.tabs.find(t => t.id === activeTab) || data.tabs[0];

    return (
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionPrefix}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {/* Tabs Dropdown/List for Mobile */}
                    <div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 snap-x hide-scrollbar">
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-4 py-3 rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 min-w-[110px] shrink-0 snap-start ${
                                        isActive 
                                        ? 'bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] shadow-lg border border-transparent' 
                                        : 'bg-white border border-[#0B1D3A]/10 hover:bg-[#F8FAFD]'
                                    }`}
                                >
                                    <div 
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                                            isActive ? 'text-white shadow-md' : 'bg-[#F8FAFD] text-[#0B1D3A]/50'
                                        }`}
                                        style={isActive ? { backgroundColor: tab.color } : {}}
                                    >
                                        {tabIcons[tab.icon as keyof typeof tabIcons]}
                                    </div>
                                    <span className={`text-[12px] font-bold leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#0B1D3A]'}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content Area */}
                    <div className="bg-[#F8FAFD] border border-[#0B1D3A]/5 rounded-2xl p-6 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-[30px] pointer-events-none rounded-full" style={{ background: activeTabData.color }}></div>

                                <h3 className="text-[22px] font-black mb-3" style={{ color: NAVY }}>
                                    {activeTabData.title}
                                </h3>
                                
                                <p className="text-[15px] font-medium text-[#596780] leading-relaxed mb-6">
                                    {activeTabData.desc}
                                </p>

                                <div className="flex flex-col gap-3">
                                    {activeTabData.features.map((feature, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className="bg-white p-3.5 rounded-xl shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] border border-[#0B1D3A]/5 flex items-start gap-3"
                                        >
                                            <div className="mt-0.5 shrink-0" style={{ color: activeTabData.color }}>
                                                <CheckCircle2 size={16} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[14px] font-semibold text-[#0B1D3A] leading-snug">
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
