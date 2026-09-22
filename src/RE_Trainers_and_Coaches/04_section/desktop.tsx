import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Home, Map, Building2, Layers, GraduationCap, Briefcase, RefreshCcw, Crown, Handshake } from 'lucide-react';
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

    const segmentIcons = {
        Home: <Home size={22} className="text-white relative z-10" />,
        Map: <Map size={22} className="text-white relative z-10" />,
        Building2: <Building2 size={22} className="text-white relative z-10" />,
        Layers: <Layers size={22} className="text-white relative z-10" />
    };

    const learnerIcons = {
        GraduationCap: <GraduationCap size={24} className="text-white relative z-10" />,
        Briefcase: <Briefcase size={24} className="text-white relative z-10" />,
        RefreshCcw: <RefreshCcw size={24} className="text-white relative z-10" />,
        Crown: <Crown size={24} className="text-white relative z-10" />,
        Handshake: <Handshake size={24} className="text-white relative z-10" />
    };

    return (
        <section className="w-full py-16 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>

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
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.75rem] leading-[1.05] font-black tracking-[-0.02em] max-w-[950px] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <div className="mb-16">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="text-[28px] font-bold mb-12 text-center text-white flex items-center justify-center gap-4"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#C99A2E]/50"></div>
                        {data.segmentsHeading}
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#C99A2E]/50"></div>
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-100px" }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {data.segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded p-8 hover:bg-[#0E1F42]/80 hover:border-white/20 transition-all duration-400 group relative overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col"
                            >
                                <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[20px] rounded-bl-full pointer-events-none" style={{ background: segment.color }}></motion.div>
                                <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: segment.color }}></div>

                                <div className="w-14 h-14 rounded flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden" style={{ backgroundColor: segment.color }}>
                                    <div className="absolute inset-0 bg-white/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                                    {segmentIcons[segment.icon as keyof typeof segmentIcons]}
                                </div>
                                
                                <h4 className="text-[22px] font-bold mb-6 text-white leading-tight">
                                    {segment.title}
                                </h4>
                                
                                <div className="flex flex-col gap-3.5 mt-auto relative z-10">
                                    {segment.items.map((it, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-[15px] font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                            <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ backgroundColor: segment.color }}></div>
                                            <span className="leading-snug">{it}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-gradient-to-br from-[#0F2751]/80 to-[#132D5F]/40 backdrop-blur-2xl border border-white/10 rounded p-16 lg:p-20 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                    >
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C99A2E]/10 rounded-full blur-[100px] pointer-events-none"></motion.div>
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[80px] pointer-events-none"></motion.div>
                        
                        <h3 className="text-[32px] font-bold mb-8 text-center text-white relative z-10 tracking-tight">
                            {data.learnersHeading}
                        </h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, margin: "-100px" }}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                        >
                            {data.learners.map((learner, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="bg-white/5 border border-white/10 rounded p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-400 group cursor-default"
                                >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                                        <div className="w-14 h-14 rounded flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]" style={{ backgroundColor: learner.color }}>
                                            <div className="absolute inset-0 bg-white/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 rounded"></div>
                                            {learnerIcons[learner.icon as keyof typeof learnerIcons]}
                                        </div>
                                        <h4 className="text-[20px] font-bold text-white leading-tight">
                                            {learner.title}
                                        </h4>
                                    </div>
                                    <p className="text-[15.5px] font-medium text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                        {learner.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}


