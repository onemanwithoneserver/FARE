import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Globe, Users, Shuffle, Wrench, PlayCircle, Radio, Flame, Target, UserCheck, UsersRound } from 'lucide-react';
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
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const modeIcons = {
        Globe: <Globe size={20} className="text-white relative z-10" />,
        Users: <Users size={20} className="text-white relative z-10" />,
        Shuffle: <Shuffle size={20} className="text-white relative z-10" />
    };

    const typeIcons = {
        Wrench: <Wrench size={18} className="text-white relative z-10" />,
        PlayCircle: <PlayCircle size={18} className="text-white relative z-10" />,
        Radio: <Radio size={18} className="text-white relative z-10" />,
        Flame: <Flame size={18} className="text-white relative z-10" />,
        Target: <Target size={18} className="text-white relative z-10" />,
        UserCheck: <UserCheck size={18} className="text-white relative z-10" />,
        UsersRound: <UsersRound size={18} className="text-white relative z-10" />
    };

    return (
        <section className="w-full py-20 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

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
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[14.5px] font-medium leading-[1.65] text-white/60">
                        {data.title}
                    </motion.p>
                </motion.div>

                <div className="mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#C99A2E]/50"></div>
                        <h3 className="text-[20px] font-bold text-white">
                            {data.modesHeading}
                        </h3>
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#C99A2E]/50"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-col gap-5"
                    >
                        {data.modes.map((mode, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden text-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)]"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-[20px] rounded-bl-full" style={{ background: mode.color }}></div>

                                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-md mb-5 relative z-10" style={{ backgroundColor: mode.color }}>
                                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                                    {modeIcons[mode.icon as keyof typeof modeIcons]}
                                </div>
                                <h4 className="text-[18px] font-bold mb-3 text-white relative z-10">
                                    {mode.title}
                                </h4>
                                <p className="text-[14px] font-medium text-white/70 leading-relaxed relative z-10">
                                    {mode.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#3B82F6]/50"></div>
                        <h3 className="text-[20px] font-bold text-white">
                            {data.typesHeading}
                        </h3>
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#3B82F6]/50"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-col gap-4"
                    >
                        {data.types.map((type, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-[#0A1630]/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md" style={{ backgroundColor: type.color }}>
                                        {typeIcons[type.icon as keyof typeof typeIcons]}
                                    </div>
                                    <h4 className="text-[15.5px] font-bold leading-tight text-white">
                                        {type.title}
                                    </h4>
                                </div>
                                <p className="text-[14px] font-medium text-white/60 leading-relaxed">
                                    {type.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-br from-[#0F2751]/80 to-[#132D5F]/60 backdrop-blur-2xl border border-white/10 rounded-[24px] p-8 text-center relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] text-white">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/15 rounded-full blur-[40px]"></div>

                        <h3 className="text-[20px] font-bold text-white mb-8 relative z-10 leading-snug">
                            {data.footerTagline}
                        </h3>
                        
                        <div className="flex flex-col gap-6 relative z-10">
                            <div className="flex flex-wrap justify-center gap-2.5">
                                {data.footerModes.map((mode, i) => (
                                    <span key={i} className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg text-white text-[12px] font-bold backdrop-blur-sm shadow-sm">
                                        {mode}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            
                            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 items-center">
                                {data.footerTypes.map((type, i) => (
                                    <span key={i} className="text-[#C99A2E] text-[12px] font-bold flex items-center gap-2">
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
