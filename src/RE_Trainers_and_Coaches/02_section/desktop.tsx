import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Globe, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

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

    const iconData = [
        { Icon: Unlink, color: "#EF4444" }, 
        { Icon: UserX, color: "#F59E0B" }, 
        { Icon: ListChecks, color: "#3B82F6" }, 
        { Icon: Globe, color: "#10B981" }, 
        { Icon: Building2, color: "#6366F1" }
    ];

    const challengeEmojis = ['🔌', '👥', '📋', '📣', '🏢'];

    const bgFloatingElements = [
        { emoji: '⚠️', top: '8%', left: '4%', size: 'text-2xl', duration: 7, delay: 0 },
        { emoji: '📉', top: '15%', right: '5%', size: 'text-3xl', duration: 8.5, delay: 1 },
        { emoji: '⏳', top: '38%', left: '3%', size: 'text-2xl', duration: 6.5, delay: 2 },
        { emoji: '❓', top: '42%', right: '4%', size: 'text-2xl', duration: 9, delay: 0.5 },
        { emoji: '🧩', top: '72%', left: '6%', size: 'text-3xl', duration: 7.5, delay: 1.5 },
        { emoji: '🛑', top: '76%', right: '6%', size: 'text-2xl', duration: 8, delay: 2.2 },
        { emoji: '⚡', top: '24%', left: '10%', size: 'text-xl', duration: 6, delay: 0.8 },
        { emoji: '❌', top: '62%', right: '11%', size: 'text-xl', duration: 7.2, delay: 1.2 },
    ];

    const sectionTitle = data.title;

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFF1F2 0%, #FFE4E6 25%, #FDF2F4 60%, #FFF5F7 100%)' }}
        >
            <motion.div animate={{ opacity: [0.22, 0.45, 0.22], scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[10%] right-[-5%] w-[800px] h-[800px] bg-gradient-radial from-rose-500/25 via-red-500/10 to-transparent rounded-full blur-[130px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.18, 0.38, 0.18], scale: [1.05, 1, 1.05] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] left-[-5%] w-[650px] h-[650px] bg-gradient-radial from-red-600/20 via-rose-500/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-gradient-radial from-red-400/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>

            <motion.div animate={{ scale: [1, 1.35, 1], opacity: [0.06, 0.18, 0.06] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-red-500/30 pointer-events-none z-0" />
            <motion.div animate={{ scale: [1, 1.55, 1], opacity: [0.03, 0.12, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-rose-500/20 pointer-events-none z-0" />

            <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#EF4444 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {bgFloatingElements.map((item, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        y: [0, -16, 0],
                        rotate: [-6, 6, -6],
                        opacity: [0.15, 0.32, 0.15],
                        scale: [1, 1.08, 1]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay
                    }}
                    className={`absolute pointer-events-none select-none z-0 ${item.size} filter drop-shadow-[0_0_12px_rgba(239,68,68,0.3)]`}
                    style={{ top: item.top, left: item.left, right: item.right }}
                >
                    {item.emoji}
                </motion.div>
            ))}

            <div className="max-w-[1000px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-red-300/80 bg-red-100/70 text-red-700 shadow-[0_2px_10px_rgba(239,68,68,0.12)] backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.65] max-w-[700px] text-[#475569]">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-4 relative mb-10"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        const emoji = challengeEmojis[index] || '⚠️';
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                                className="w-[calc(33.333%-11px)] min-w-[200px] group bg-gradient-to-b from-white/95 via-red-50/60 to-red-100/40 backdrop-blur-md border border-red-200/90 hover:border-red-400 rounded p-4 shadow-[0_4px_16px_-4px_rgba(220,38,38,0.08)] hover:shadow-[0_16px_36px_-8px_rgba(220,38,38,0.22)] transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center h-[170px] justify-center cursor-default"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/90 transition-all duration-400" />
                                
                                <motion.div animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-red-500/20 to-transparent rounded-bl-full blur-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></motion.div>
                                <span className="absolute -bottom-2 -right-1 text-[38px] opacity-[0.08] group-hover:opacity-[0.2] group-hover:scale-115 transition-all duration-500 select-none pointer-events-none filter blur-[0.2px]">
                                    {emoji}
                                </span>
                                <div 
                                    className="mb-3 w-10 h-10 rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative overflow-hidden ring-2 ring-red-100/60"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon size={20} className="text-white relative z-10" />
                                </div>
                                <h3 className="text-[14px] font-bold leading-tight relative z-10 px-1" style={{ color: NAVY }}>
                                    {challenge}
                                </h3>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[850px] mx-auto text-center rounded p-14 shadow-[0_20px_60px_-15px_rgba(11,29,58,0.3)] relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 50%, #132D5F 100%)` }}
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-72 h-72 bg-[#C99A2E]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-72 h-72 bg-[#60A5FA]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#C99A2E]/5 rounded-full blur-[80px] pointer-events-none"></motion.div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-[28px] lg:text-[32px] font-bold text-white mb-5 relative z-10 leading-snug">
                        {data.transitionTitle}
                    </h3>
                    <p className="text-[20px] font-semibold text-[#C99A2E] flex items-center justify-center gap-3 relative z-10">
                        {data.transitionSubtitle}
                        <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={22} />
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

