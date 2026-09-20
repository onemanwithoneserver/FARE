import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight } from 'lucide-react';
import bgImage from '../../assets/bg-04.jpg';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

    const containerVariant: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section
            className="w-full py-32 px-12 flex items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            <div className="absolute inset-0 bg-[#041029]/70 z-0"></div>

            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[20%] w-[600px] h-[350px] border-b-[1.5px] border-[#C99A2E]/60 rounded-[100%] rotate-12 z-0 pointer-events-none blur-[0.5px]"
            ></motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                className="max-w-[1000px] w-full relative z-20"
            >
                <div
                    className="w-full rounded-[4px] pt-20 pb-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_50px_rgba(4,16,41,0.5)]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(8, 22, 51, 0.95) 0%, rgba(5, 15, 38, 0.98) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[100px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-5 mb-7 relative z-10">
                        <div className="h-[1px] w-14 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[12px] font-bold tracking-[0.3em] text-[#E2C068] uppercase">{data.overline}</span>
                        <div className="h-[1px] w-14 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[3rem] lg:text-[3.5rem] leading-[1.1] font-black tracking-tight text-white mb-6 w-full relative z-10 max-w-[800px]">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[17px] font-medium max-w-[700px] leading-[1.6] mb-12 text-white/70 px-10 relative z-10">
                        {data.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex items-center justify-center gap-5 px-10 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(213,170,69,0.4)', y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="font-bold text-[14px] px-8 py-4 rounded-[4px] transition-all duration-300 flex items-center gap-2.5 cursor-pointer text-[#071A49] tracking-wide"
                            style={{ background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)', boxShadow: '0 10px 20px -5px rgba(213,170,69,0.2)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent text-white font-semibold text-[14px] px-8 py-4 rounded-[4px] border border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            {data.buttons.secondary}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
