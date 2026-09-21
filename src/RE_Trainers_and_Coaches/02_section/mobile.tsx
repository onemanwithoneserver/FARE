import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Clock, MonitorX, Globe, Building2, FileEdit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const GOLD = '#C99A2E';

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

    const sectionTitle = data.title;

    return (
        <section className="w-full py-10 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
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
                    className="flex flex-col gap-4 mb-10"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded p-5 flex items-center gap-5 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)] relative overflow-hidden"
                            >
                                <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-[20px] rounded-bl-full pointer-events-none" style={{ background: color }}></motion.div>

                                <div 
                                    className="w-12 h-12 rounded flex items-center justify-center shrink-0 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.3)] relative z-10"
                                    style={{ backgroundColor: color, border: `1px solid ${color}30` }}
                                >
                                    <Icon size={20} style={{ color: '#ffffff' }} />
                                </div>
                                <div className="flex flex-col gap-1 relative z-10">
                                    <span className="text-[11px] font-bold tracking-[0.1em] text-white/20 font-serif">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-[14.5px] font-bold leading-[1.4] text-white/90">
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
