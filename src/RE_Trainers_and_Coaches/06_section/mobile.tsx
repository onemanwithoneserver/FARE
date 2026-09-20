import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Globe, Users, Shuffle, Wrench, PlayCircle, Radio, Flame, Target, UserCheck, UsersRound } from 'lucide-react';
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
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const modeIcons = {
        Globe: <Globe size={20} className="text-white" />,
        Users: <Users size={20} className="text-white" />,
        Shuffle: <Shuffle size={20} className="text-white" />
    };

    const typeIcons = {
        Wrench: <Wrench size={18} className="text-white" />,
        PlayCircle: <PlayCircle size={18} className="text-white" />,
        Radio: <Radio size={18} className="text-white" />,
        Flame: <Flame size={18} className="text-white" />,
        Target: <Target size={18} className="text-white" />,
        UserCheck: <UserCheck size={18} className="text-white" />,
        UsersRound: <UsersRound size={18} className="text-white" />
    };


    return (
        <section className="w-full py-20 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-16"
                >

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4 text-white">
                        {data.headline}
                    </motion.h2>
                </motion.div>

                {/* Delivery Modes Section */}
                <div className="mb-16">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[20px] font-bold mb-8 text-center text-white"
                    >
                        {data.modesHeading}
                    </motion.h3>

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
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden text-center"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 blur-[20px] rounded-bl-full" style={{ background: mode.color }}></div>

                                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-md mb-5" style={{ backgroundColor: mode.color }}>
                                    {modeIcons[mode.icon as keyof typeof modeIcons]}
                                </div>
                                <h4 className="text-[18px] font-bold mb-3 text-white">
                                    {mode.title}
                                </h4>
                                <p className="text-[14px] font-medium text-white/70 leading-relaxed">
                                    {mode.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Program Types Section */}
                <div className="relative">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[20px] font-bold mb-8 text-center text-white"
                    >
                        {data.typesHeading}
                    </motion.h3>

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
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-5"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: type.color }}>
                                        {typeIcons[type.icon as keyof typeof typeIcons]}
                                    </div>
                                    <h4 className="text-[15px] font-bold leading-tight text-white">
                                        {type.title}
                                    </h4>
                                </div>
                                <p className="text-[13.5px] font-medium text-white/70 leading-relaxed pl-14">
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
                    transition={{ duration: 0.8 }}
                    className="mt-16 w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden text-white"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></div>

                    <h3 className="text-[18px] font-bold text-white mb-6 relative z-10 leading-snug">
                        {data.footerTagline}
                    </h3>
                    
                    <div className="flex flex-col gap-5 relative z-10">
                        <div className="flex flex-wrap justify-center gap-2">
                            {data.footerModes.map((mode, i) => (
                                <span key={i} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm">
                                    {mode}
                                </span>
                            ))}
                        </div>
                        <div className="w-full h-[1px] bg-white/10 mx-auto"></div>
                        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1.5">
                            {data.footerTypes.map((type, i) => (
                                <span key={i} className="text-[#C99A2E] text-[11px] font-semibold flex items-center gap-2">
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
