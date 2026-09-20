import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Globe, Users, Shuffle, Wrench, PlayCircle, Radio, Flame, Target, UserCheck, UsersRound } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';


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
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const modeIcons = {
        Globe: <Globe size={24} className="text-white" />,
        Users: <Users size={24} className="text-white" />,
        Shuffle: <Shuffle size={24} className="text-white" />
    };

    const typeIcons = {
        Wrench: <Wrench size={24} className="text-white" />,
        PlayCircle: <PlayCircle size={24} className="text-white" />,
        Radio: <Radio size={24} className="text-white" />,
        Flame: <Flame size={24} className="text-white" />,
        Target: <Target size={24} className="text-white" />,
        UserCheck: <UserCheck size={24} className="text-white" />,
        UsersRound: <UsersRound size={24} className="text-white" />
    };

    const sectionTitle = data.title;

    return (
        <section className="w-full py-20 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-24"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[800px] text-white">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.6] text-white/70">
                        {sectionTitle}
                    </motion.p>
                </motion.div>

                {/* Delivery Modes Section */}
                <div className="mb-24">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[22px] font-bold mb-10 text-center text-white"
                    >
                        {data.modesHeading}
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {data.modes.map((mode, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden text-center group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 blur-[30px] rounded-bl-full transition-opacity duration-500 group-hover:opacity-20" style={{ background: mode.color }}></div>

                                <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: mode.color }}>
                                    {modeIcons[mode.icon as keyof typeof modeIcons]}
                                </div>
                                <h4 className="text-[20px] font-bold mb-3 text-white">
                                    {mode.title}
                                </h4>
                                <p className="text-[15px] font-medium text-white/70 leading-relaxed">
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
                        className="text-[22px] font-bold mb-10 text-center text-white"
                    >
                        {data.typesHeading}
                    </motion.h3>

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
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: type.color }}>
                                        {typeIcons[type.icon as keyof typeof typeIcons]}
                                    </div>
                                    <h4 className="text-[16px] font-bold leading-tight text-white">
                                        {type.title}
                                    </h4>
                                </div>
                                <p className="text-[14px] font-medium text-white/70 leading-relaxed">
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
                    className="mt-24 max-w-[900px] mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-[60px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-[60px]"></div>

                    <h3 className="text-[24px] font-bold text-white mb-8 relative z-10">
                        {data.footerTagline}
                    </h3>
                    
                    <div className="flex flex-col gap-6 relative z-10">
                        <div className="flex flex-wrap justify-center gap-3">
                            {data.footerModes.map((mode, i) => (
                                <span key={i} className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-[13px] font-semibold backdrop-blur-sm">
                                    {mode}
                                </span>
                            ))}
                        </div>
                        <div className="w-full h-[1px] bg-white/10 max-w-[400px] mx-auto"></div>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {data.footerTypes.map((type, i) => (
                                <span key={i} className="text-[#C99A2E] text-[13px] font-semibold flex items-center gap-2.5">
                                    {type}
                                    {i < data.footerTypes.length - 1 && <span className="text-white/20">•</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
