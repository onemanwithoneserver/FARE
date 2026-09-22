import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, Sparkles } from 'lucide-react';
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
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            className="w-full py-40 px-12 flex items-center justify-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}
        >
            
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white z-0 pointer-events-none"></div>
            
            
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#3B82F6]/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"
            ></motion.div>
            
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[120px] z-0 pointer-events-none"
            ></motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                className="max-w-[1040px] w-full relative z-20"
            >
                <div
                    className="w-full rounded pt-24 pb-20 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(11,29,58,0.15)] border border-[#0B1D3A]/10"
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,249,252,0.95) 100%)',
                    }}
                >
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#0B1D3A]/15 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/30 to-transparent"></div>
                    
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[80px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="h-[1px] w-12 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <div className="px-4 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/10 flex items-center gap-2">
                            <Sparkles size={14} className="text-[#C99A2E]" />
                            <span className="text-[12px] font-bold tracking-[0.25em] text-[#C99A2E] uppercase">{data.overline}</span>
                        </div>
                        <div className="h-[1px] w-12 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[3.5rem] lg:text-[4rem] leading-[1.05] font-black tracking-[-0.02em] text-[#0B1D3A] mb-8 w-full relative z-10 max-w-[850px]">
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[18px] font-medium max-w-[700px] leading-[1.65] mb-14 text-[#475569] px-10 relative z-10">
                        {data.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex items-center justify-center gap-6 px-10 relative z-10">
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden font-bold text-[15px] px-10 py-4 rounded transition-all duration-300 flex items-center gap-3 cursor-pointer text-[#071A49] tracking-wide shadow-[0_10px_25px_-5px_rgba(213,170,69,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(213,170,69,0.4)]"
                            style={{ background: 'linear-gradient(135deg, #D5AA45 0%, #F3D37F 50%, #D5AA45 100%)' }}
                        >
                            <span className="relative z-10">{data.buttons.primary}</span>
                            <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.4] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(11,29,58,0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#0B1D3A]/5 text-[#0B1D3A] font-bold text-[15px] px-10 py-4 rounded border border-[#0B1D3A]/15 hover:border-[#0B1D3A]/25 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-sm"
                        >
                            {data.buttons.secondary}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
