import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Clock, MonitorX, Globe, Building2, FileEdit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const iconData = [
        { Icon: Unlink, color: "#EF4444" },
        { Icon: UserX, color: "#F59E0B" },
        { Icon: ListChecks, color: "#3B82F6" },
        { Icon: Clock, color: "#8B5CF6" },
        { Icon: MonitorX, color: "#EC4899" },
        { Icon: Globe, color: "#10B981" },
        { Icon: Building2, color: "#6366F1" },
        { Icon: FileEdit, color: "#F97316" }
    ];

    const challengeEmojis = ['🔌', '👥', '📋', '🧗', '🚫', '📣', '🏢', '⏳'];

    const bgFloatingElements = [
        { emoji: '⚠️', top: '5%', left: '4%', size: 'text-xl', duration: 7 },
        { emoji: '📉', top: '18%', right: '5%', size: 'text-2xl', duration: 8 },
        { emoji: '⏳', top: '45%', left: '3%', size: 'text-xl', duration: 6 },
        { emoji: '❓', top: '68%', right: '4%', size: 'text-xl', duration: 7.5 },
    ];

    const sectionTitle = data.title;

    return (
        <section className="w-full py-12 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #13070E 0%, #1A0914 40%, #150811 75%, #0B1124 100%)' }}
        >
            {/* Ambient Negative Glow Orbs */}
            <motion.div animate={{ opacity: [0.22, 0.42, 0.22], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 right-0 w-[350px] h-[350px] bg-gradient-radial from-red-600/25 via-rose-600/10 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.18, 0.35, 0.18], scale: [1.05, 1, 1.05] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-gradient-radial from-rose-700/20 via-red-600/10 to-transparent rounded-full blur-[70px] pointer-events-none z-0"></motion.div>

            {/* Subtle Negative-State Dot Matrix */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#EF4444 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Subtle Background Floating Emojis */}
            {bgFloatingElements.map((item, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        y: [0, -12, 0],
                        rotate: [-5, 5, -5],
                        opacity: [0.18, 0.35, 0.18]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute pointer-events-none select-none z-0 ${item.size} filter drop-shadow-[0_0_8px_rgba(239,68,68,0.35)]`}
                    style={{ top: item.top, left: item.left, right: item.right }}
                >
                    {item.emoji}
                </motion.div>
            ))}

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-red-500/40 bg-red-950/60 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.25)] backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            {data.overline}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[14.5px] font-medium leading-[1.65] text-white/60">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-3.5 mb-10"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        const emoji = challengeEmojis[index] || '⚠️';
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-gradient-to-r from-[#1E0B16]/95 via-[#180A18]/85 to-[#0F142A]/80 backdrop-blur-xl border border-red-900/40 rounded p-4 flex items-center gap-4 shadow-[0_4px_16px_-4px_rgba(220,38,38,0.2)] relative overflow-hidden"
                            >
                                {/* Watermark Emoji */}
                                <span className="absolute -bottom-1 -right-1 text-[32px] opacity-[0.08] select-none pointer-events-none filter blur-[0.2px]">
                                    {emoji}
                                </span>

                                {/* Unchanged Material UI Icon */}
                                <div 
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md relative z-10 border border-red-500/30 ring-1 ring-red-500/20"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon size={20} className="text-white relative z-10" />
                                </div>
                                <div className="flex flex-col gap-0.5 relative z-10 flex-1">
                                    <span className="text-[10px] font-bold tracking-[0.1em] text-red-400/50">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-[14px] font-bold leading-snug text-red-50/90">
                                        {challenge}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full bg-gradient-to-br from-[#0F2751]/90 to-[#132D5F]/90 backdrop-blur-xl border border-white/10 rounded p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden text-center">
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/15 rounded-full blur-[40px] pointer-events-none"></motion.div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-white mb-5 leading-tight">
                                {data.transitionTitle}
                            </h3>
                            <div className="inline-flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 px-5 py-2.5 rounded backdrop-blur-md w-full">
                                <span className="text-[15px] font-bold text-[#C99A2E] tracking-wide">
                                    {data.transitionSubtitle}
                                </span>
                                <ArrowRight size={18} className="text-[#C99A2E] animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
