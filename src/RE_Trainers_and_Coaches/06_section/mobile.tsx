import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Globe, Users, Shuffle, Wrench, PlayCircle, Radio, Flame, Target, UserCheck, UsersRound, Video, Layers, Zap, Award, Smartphone } from 'lucide-react';
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
        Globe: <Globe size={24} className="text-white relative z-10" />,
        Users: <Users size={24} className="text-white relative z-10" />,
        Shuffle: <Shuffle size={24} className="text-white relative z-10" />,
        Video: <Video size={24} className="text-white relative z-10" />,
        PlayCircle: <PlayCircle size={24} className="text-white relative z-10" />,
        Layers: <Layers size={24} className="text-white relative z-10" />
    };

    const typeIcons = {
        Wrench: <Wrench size={20} className="relative z-10" />,
        PlayCircle: <PlayCircle size={20} className="relative z-10" />,
        Radio: <Radio size={20} className="relative z-10" />,
        Flame: <Flame size={20} className="relative z-10" />,
        Target: <Target size={20} className="relative z-10" />,
        UserCheck: <UserCheck size={20} className="relative z-10" />,
        UsersRound: <UsersRound size={20} className="relative z-10" />,
        Zap: <Zap size={20} className="relative z-10" />,
        Award: <Award size={20} className="relative z-10" />,
        Users: <Users size={20} className="relative z-10" />,
        Smartphone: <Smartphone size={20} className="relative z-10" />
    };

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
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
                    
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4 text-[#0B1D3A]">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[14.5px] font-medium leading-[1.65] text-[#475569]">
                        {data.title}
                    </motion.p>
                </motion.div>

                <div className="mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#C99A2E]/50"></div>
                        <h3 className="text-[20px] font-bold text-[#0B1D3A]">
                            {data.modesHeading}
                        </h3>
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#C99A2E]/50"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-5 px-5"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {data.modes.map((mode, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="shrink-0 w-[85%] snap-center bg-gradient-to-b from-white/90 to-[#F8FAFD]/70 backdrop-blur-xl border border-[#0B1D3A]/10 rounded-2xl p-6 relative overflow-hidden shadow-[0_10px_20px_-5px_rgba(11,29,58,0.12)]"
                            >
                                <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-[25px] rounded-bl-full pointer-events-none" style={{ background: mode.color }}></motion.div>

                                <div className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg relative z-10 border border-[#0B1D3A]/10" style={{ backgroundColor: mode.color }}>
                                        {modeIcons[mode.icon as keyof typeof modeIcons]}
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-bold mb-2 text-[#0B1D3A] relative z-10">
                                            {mode.title}
                                        </h4>
                                        <p className="text-[14.5px] font-medium text-[#475569] leading-relaxed relative z-10">
                                            {mode.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#0B1D3A]/20"></div>
                        <h3 className="text-[20px] font-bold text-[#0B1D3A]">
                            {data.typesHeading}
                        </h3>
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#0B1D3A]/20"></div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="grid grid-cols-2 gap-3"
                    >
                        {data.types.map((type, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className={`bg-gradient-to-br from-[#0B1D3A]/[0.03] to-[#0B1D3A]/[0.01] backdrop-blur-md border border-[#0B1D3A]/[0.08] rounded-xl p-5 shadow-sm flex flex-col relative overflow-hidden ${index === data.types.length - 1 && data.types.length % 2 !== 0 ? 'col-span-2' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.15] blur-[20px] rounded-full pointer-events-none" style={{ background: type.color }}></div>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mb-4 relative z-10 border border-[#0B1D3A]/10 shadow-inner" style={{ backgroundColor: type.color }}>
                                    <div className="text-white">
                                        {typeIcons[type.icon as keyof typeof typeIcons]}
                                    </div>
                                </div>
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <h4 className="text-[15px] font-bold leading-tight text-[#0B1D3A] mb-2">
                                        {type.title}
                                    </h4>
                                    <p className="text-[13px] font-medium text-[#475569] leading-relaxed mt-auto">
                                        {type.desc}
                                    </p>
                                </div>
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
                    <div className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] border border-white/10 rounded p-8 text-center relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(11,29,58,0.35)]">
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/15 rounded-full blur-[40px]"></motion.div>

                        <h3 className="text-[20px] font-bold text-white mb-8 relative z-10 leading-snug">
                            {data.footerTagline}
                        </h3>
                        
                        <div className="flex flex-col gap-6 relative z-10">
                            <div className="flex flex-wrap justify-center gap-2.5">
                                {data.footerModes.map((mode, i) => (
                                    <span key={i} className="bg-white/5 border border-white/15 px-3.5 py-1.5 rounded text-white text-[12px] font-bold backdrop-blur-sm shadow-sm">
                                        {mode}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                            
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
