import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Globe, Users, Shuffle, Wrench, PlayCircle, Radio, Flame, Target, UserCheck, UsersRound, ArrowRight } from 'lucide-react';
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

    const modeIcons = {
        Globe: <Globe size={28} className="text-white relative z-10" />,
        Users: <Users size={28} className="text-white relative z-10" />,
        Shuffle: <Shuffle size={28} className="text-white relative z-10" />
    };

    const typeIcons = {
        Wrench: <Wrench size={24} className="text-white relative z-10" />,
        PlayCircle: <PlayCircle size={24} className="text-white relative z-10" />,
        Radio: <Radio size={24} className="text-white relative z-10" />,
        Flame: <Flame size={24} className="text-white relative z-10" />,
        Target: <Target size={24} className="text-white relative z-10" />,
        UserCheck: <UserCheck size={24} className="text-white relative z-10" />,
        UsersRound: <UsersRound size={24} className="text-white relative z-10" />
    };

    return (
        <section className="w-full py-32 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            {/* Dark premium background effects */}
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
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
                    className="flex flex-col items-center text-center mb-28"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.75rem] leading-[1.05] font-black tracking-[-0.02em] mb-8 max-w-[900px] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.65] text-white/60 max-w-[800px]">
                        {data.title}
                    </motion.p>
                </motion.div>

                <div className="mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-6 mb-12"
                    >
                        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#C99A2E]/50"></div>
                        <h3 className="text-[28px] font-bold text-white tracking-tight">
                            {data.modesHeading}
                        </h3>
                        <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#C99A2E]/50"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {data.modes.map((mode, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                                className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-[#0E1F42]/80 hover:border-white/20 transition-all duration-400 relative overflow-hidden text-center group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] cursor-default"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[40px] rounded-bl-full pointer-events-none" style={{ background: mode.color }}></div>

                                <div className="w-20 h-20 rounded-[20px] mx-auto flex items-center justify-center shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden" style={{ backgroundColor: mode.color }}>
                                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 rounded-[20px]"></div>
                                    {modeIcons[mode.icon as keyof typeof modeIcons]}
                                </div>
                                
                                <h4 className="text-[24px] font-bold mb-4 text-white">
                                    {mode.title}
                                </h4>
                                
                                <p className="text-[16px] font-medium text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {mode.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-6 mb-12"
                    >
                        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#3B82F6]/50"></div>
                        <h3 className="text-[28px] font-bold text-white tracking-tight">
                            {data.typesHeading}
                        </h3>
                        <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#3B82F6]/50"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-100px" }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {data.types.map((type, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-[#0A1630]/40 backdrop-blur-md border border-white/5 rounded-[24px] p-8 hover:bg-[#0E1F42]/60 hover:border-white/10 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-400 flex flex-col h-full group"
                            >
                                <div className="flex items-center gap-5 mb-5 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-md" style={{ backgroundColor: type.color }}>
                                        <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                                        {typeIcons[type.icon as keyof typeof typeIcons]}
                                    </div>
                                    <h4 className="text-[18px] font-bold leading-tight text-white group-hover:text-[#C99A2E] transition-colors duration-300">
                                        {type.title}
                                    </h4>
                                </div>
                                <p className="text-[15px] font-medium text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {type.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1000px] mx-auto bg-gradient-to-r from-[#0F2751]/80 via-[#132D5F]/60 to-[#0F2751]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-16 text-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/15 rounded-full blur-[60px] group-hover:bg-[#C99A2E]/25 transition-colors duration-700 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[60px] group-hover:bg-[#3B82F6]/20 transition-colors duration-700 pointer-events-none"></div>

                    <h3 className="text-[28px] font-bold text-white mb-10 relative z-10 tracking-tight">
                        {data.footerTagline}
                    </h3>
                    
                    <div className="flex flex-col gap-8 relative z-10 items-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            {data.footerModes.map((mode, i) => (
                                <span key={i} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-white text-[15px] font-bold backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm">
                                    {mode}
                                </span>
                            ))}
                        </div>
                        
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-[600px] mx-auto"></div>
                        
                        <div className="flex flex-wrap justify-center gap-4 items-center">
                            {data.footerTypes.map((type, i) => (
                                <span key={i} className="text-[#C99A2E] text-[15px] font-bold flex items-center gap-4 tracking-wide">
                                    {type}
                                    {i < data.footerTypes.length - 1 && <span className="text-white/20 text-[10px]">♦</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
