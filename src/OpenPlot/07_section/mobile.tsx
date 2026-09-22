import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
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
            className="w-full py-12 px-5 flex items-center justify-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}
        >
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white z-0 pointer-events-none"></div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-50px" }}
                className="w-full relative z-20"
            >
                <div
                    className="w-full rounded pt-16 pb-12 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(11,29,58,0.15)] border border-[#0B1D3A]/10"
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,249,252,0.95) 100%)',
                    }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#0B1D3A]/15 to-transparent"></div>
                    
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-50px] right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[60px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="h-[1px] w-6 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <div className="px-3 py-1 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/10 flex items-center gap-1.5">
                            <Sparkles size={12} className="text-[#C99A2E]" />
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C99A2E] uppercase">{data.overline}</span>
                        </div>
                        <div className="h-[1px] w-6 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[2.25rem] leading-[1.1] font-black tracking-tight text-[#0B1D3A] mb-5 w-full relative z-10 px-5">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[15px] font-medium leading-[1.65] mb-10 text-[#475569] px-6 relative z-10">
                        {data.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex flex-col gap-3.5 w-full px-6 relative z-10">
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden w-full font-bold text-[14px] py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-[#071A49] shadow-[0_8px_20px_-5px_rgba(213,170,69,0.3)]"
                            style={{ background: 'linear-gradient(135deg, #D5AA45 0%, #F3D37F 50%, #D5AA45 100%)' }}
                        >
                            <span className="relative z-10">{data.buttons.primary}</span>
                            <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.4] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </motion.button>
                        
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#0B1D3A]/5 text-[#0B1D3A] font-bold text-[14px] py-4 rounded border border-[#0B1D3A]/15 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        >
                            {data.buttons.secondary}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
