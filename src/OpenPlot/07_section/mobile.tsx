import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import bgImage from '../../assets/bg-04.jpg';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const containerVariant: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            className="w-full py-20 px-5 flex items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
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

            <div className="absolute inset-0 bg-[#041029]/70 z-0"></div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-50px" }}
                className="w-full relative z-20"
            >
                <div
                    className="w-full rounded-[4px] pt-14 pb-12 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_30px_rgba(4,16,41,0.5)]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(8, 22, 51, 0.95) 0%, rgba(5, 15, 38, 0.98) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[60px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-3 mb-5 relative z-10">
                        <div className="h-[1px] w-8 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-[#E2C068] uppercase">{data.overline}</span>
                        <div className="h-[1px] w-8 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[2.25rem] leading-[1.1] font-black tracking-tight text-white mb-4 w-full relative z-10 px-4">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[14.5px] font-medium leading-[1.6] mb-8 text-white/70 px-6 relative z-10">
                        {data.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex flex-col gap-3 w-full px-6 relative z-10">
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full font-bold text-[13px] py-4 rounded-[4px] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-[#071A49]"
                            style={{ background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)', boxShadow: '0 8px 15px -5px rgba(213,170,69,0.2)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={15} strokeWidth={2.5} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-transparent text-white font-semibold text-[13px] py-4 rounded-[4px] border border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            {data.buttons.secondary}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
