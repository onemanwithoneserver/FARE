import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Clock, MonitorX, Globe, Building2, FileEdit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const GOLD = '#C99A2E';

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
        { Icon: Unlink, color: "#EF4444" }, // Red
        { Icon: UserX, color: "#F59E0B" }, // Amber
        { Icon: ListChecks, color: "#3B82F6" }, // Blue
        { Icon: Clock, color: "#8B5CF6" }, // Purple
        { Icon: MonitorX, color: "#EC4899" }, // Pink
        { Icon: Globe, color: "#10B981" }, // Emerald
        { Icon: Building2, color: "#6366F1" }, // Indigo
        { Icon: FileEdit, color: "#F97316" } // Orange
    ];

    const sectionTitle = data.title;

    return (
        <section className="w-full py-16 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>

            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.05] font-black tracking-[-0.02em] mb-8 max-w-[850px] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.65] max-w-[700px] text-white/60">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative mb-28"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group relative"
                            >
                                
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded blur-xl" style={{ mixBlendMode: 'overlay' }}></div>
                                
                                <div className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded p-8 hover:bg-[#0E1F42]/80 hover:border-white/20 transition-all duration-400 relative overflow-hidden flex flex-col h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] group-hover:-translate-y-2">
                                    
                                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[30px] rounded-bl-full pointer-events-none" style={{ background: color }}></motion.div>

                                    <div className="flex items-center justify-between mb-8 relative z-10">
                                        <div 
                                            className="w-14 h-14 rounded flex items-center justify-center shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden"
                                            style={{ backgroundColor: color, border: `1px solid ${color}30` }}
                                        >
                                            <Icon size={24} style={{ color: '#ffffff' }} className="relative z-10" />
                                        </div>
                                        <span className="text-[14px] font-bold tracking-[0.1em] text-white/20 group-hover:text-white/40 transition-colors font-serif">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-[17px] font-bold leading-[1.4] text-white/90 group-hover:text-white transition-colors relative z-10">
                                        {challenge}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[850px] mx-auto"
                >
                    <div className="bg-gradient-to-r from-[#0F2751]/80 via-[#132D5F] to-[#0F2751]/80 backdrop-blur-xl border border-white/10 rounded p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden text-center group cursor-default">
                        
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/15 rounded-full blur-[60px] group-hover:bg-[#C99A2E]/25 transition-colors duration-700 pointer-events-none"></motion.div>
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[60px] group-hover:bg-[#3B82F6]/20 transition-colors duration-700 pointer-events-none"></motion.div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-[28px] font-bold text-white mb-6 leading-tight">
                                {data.transitionTitle}
                            </h3>
                            <div className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded backdrop-blur-md group-hover:bg-white/10 transition-colors duration-300">
                                <span className="text-[18px] font-bold text-[#C99A2E] tracking-wide">
                                    {data.transitionSubtitle}
                                </span>
                                <ArrowRight size={20} className="text-[#C99A2E] animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
