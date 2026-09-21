import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import bgImage from '../../assets/bg-04.jpg';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section
            className="w-full min-h-screen py-16 px-4 flex flex-col items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            <div className="absolute inset-0 bg-[#071a49]/70 backdrop-blur-[2px] z-0"></div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-50px" }}
                className="w-full max-w-[460px] relative z-40"
            >
                <div
                    className="w-full rounded pt-10 pb-6 flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(11, 29, 58, 0.85) 0%, rgba(7, 26, 73, 0.95) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-3 mb-5 relative z-10">
                        <div className="h-[1px] w-8 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#E2C068] uppercase">{data.academyText}</span>
                        <div className="h-[1px] w-8 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[1.8rem] leading-[1.1] font-black tracking-tight text-white uppercase mb-4 px-2 w-full relative z-10">
                        {data.headline.line1} <span className="text-[#C99A2E]">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[13px] font-medium leading-[1.6] mb-8 text-white/70 px-5 relative z-10">
                        {data.headline.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex flex-col items-center gap-3 mb-10 w-full px-5 relative z-10">
                        {data.buttons.map((btn, idx) => (
                            <motion.button
                                key={idx}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                                    idx === 0 
                                    ? 'font-bold text-[12px] text-[#071A49] uppercase tracking-[0.05em] shadow-[0_10px_20px_-5px_rgba(213,170,69,0.2)]'
                                    : 'bg-[#071A49]/50 text-white font-semibold text-[13px] border border-white/10'
                                }`}
                                style={idx === 0 ? { background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)' } : {}}
                            >
                                <span>{btn}</span>
                                {idx === 0 && <ArrowRight size={15} strokeWidth={2.5} />}
                            </motion.button>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariant} className="flex flex-col items-center w-full px-2 relative z-10">
                        {data.trustBadges.map((badge, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center w-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <div className="flex items-center gap-4 p-4">
                                    <motion.div
                                        className="shrink-0"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {i === 0 && <ShieldCheck size={24} strokeWidth={2} className="text-[#34D399]" />}
                                        {i === 1 && <Users size={24} strokeWidth={2} className="text-[#6B8AFF]" />}
                                        {i === 2 && <BarChart2 size={24} strokeWidth={2} className="text-[#D5AA45]" />}
                                    </motion.div>
                                    <div className="text-left flex-1">
                                        <div className="text-[13px] font-bold text-white mb-1 leading-[1.2]">{badge.title}</div>
                                        {badge.subtitle && (
                                            <div className="text-[11px] text-white/50 font-medium">{badge.subtitle}</div>
                                        )}
                                    </div>
                                </div>
                                {i !== 2 && (
                                    <div className="w-[80%] h-[1px] bg-white/10 my-1"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
