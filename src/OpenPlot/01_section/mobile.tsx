import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import openplotHero from '../../assets/openplot_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full pt-[50px] -mt-6 pb-14 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(165deg, #FFFFFF 0%, #F6F9FF 35%, #EDF2FF 100%)` }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C5D9FF]/50 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-[-50px] w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[50px] pointer-events-none z-0"></motion.div>

            <div className="w-full px-5 flex flex-col items-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center w-full relative z-40"
                >
                    
                    <motion.div variants={item} className="mb-5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02]">
                            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
                            <span className="font-bold text-[9px] tracking-[0.18em] uppercase text-[#C99A2E]">
                                {data.tagline}
                            </span>
                        </div>
                    </motion.div>

                    
                    <motion.h1
                        variants={item}
                        className={`font-black mb-4 ${
                            language === 'te'
                                ? 'text-[1.85rem] sm:text-[2.1rem] leading-[1.15] tracking-wider py-1'
                                : 'text-[2.25rem] sm:text-[2.5rem] leading-[1.08] tracking-[-0.03em]'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {language === 'te' ? (
                            <span>
                                ఓపెన్ ప్లాట్ కంపెనీల కోసం{' '}
                                <span className="text-[#C99A2E] relative inline-block">
                                    FARE
                                </span>
                            </span>
                        ) : (
                            <span>
                                FARE for <br />
                                <span className="text-[#C99A2E] relative inline-block mt-1">
                                    Open Plot Companies
                                    <svg className="absolute w-full h-[4px] -bottom-0.5 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                                    </svg>
                                </span>
                            </span>
                        )}
                    </motion.h1>

                    
                    <motion.div variants={item} className="mb-1.5">
                        <h2 className={`font-bold ${
                            language === 'te' ? 'text-[15px] leading-normal tracking-wider py-0.5' : 'text-[16px] leading-snug'
                        }`} style={{ color: NAVY }}>
                            {data.subheadline}
                        </h2>
                    </motion.div>
                    {data.subheadlineAccent && (
                        <motion.div variants={item} className="mb-5">
                            <h2 className={`font-bold ${
                                language === 'te' ? 'text-[15px] leading-normal tracking-wider py-0.5' : 'text-[16px] leading-snug'
                            }`} style={{ color: GOLD }}>
                                {data.subheadlineAccent}
                            </h2>
                        </motion.div>
                    )}

                    
                    <motion.p variants={item} className="text-[14.5px] font-medium leading-[1.7] mb-8 max-w-[420px] text-[#475569]">
                        {data.description}
                    </motion.p>

                    
                    <motion.div variants={item} className="flex flex-col gap-3 mb-8 w-full max-w-[280px] mx-auto">
                        <button
                            className="group text-white text-[13px] font-semibold w-full py-3.5 rounded active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_24px_-6px_rgba(11,29,58,0.25)] relative overflow-hidden"
                            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                        >
                            <span className="relative z-10">{data.buttons.primary}</span>
                            <ArrowRight size={14} strokeWidth={2.5} className="relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                    </motion.div>

                    
                    <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-4">
                        {data.features.map((f, i) => (
                            <span key={i} className="px-3 py-1.5 rounded text-[11px] font-semibold border border-[#0B1D3A]/[0.08] bg-white/80 text-[#475569] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06)]">
                                {f}
                            </span>
                        ))}
                    </motion.div>

                    
                    <motion.p variants={item} className="text-[10.5px] italic text-[#0B1D3A]/45 font-medium">
                        {data.footerText}
                    </motion.p>
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-10 relative z-20 flex items-center justify-center px-4"
                >
                    <div className="relative w-full aspect-[4/3] max-w-[400px] rounded-2xl overflow-hidden shadow-[0_25px_50px_-15px_rgba(11,29,58,0.3),0_0_0_1px_rgba(255,255,255,0.5)_inset] group">
                        <motion.div
                            className="w-full h-full absolute inset-0 z-0"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img src={openplotHero} alt="Open Plot Hero" className="w-full h-full object-cover object-[center_35%]" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/20 via-transparent to-transparent pointer-events-none"></div>

                        
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl rounded p-3.5 shadow-[0_8px_24px_-6px_rgba(11,29,58,0.2)] border border-white/60"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-md">
                                    <Sparkles size={16} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-[12px] font-bold text-[#0B1D3A]">{data.dashboard.floatingBadge.title}</div>
                                    <div className="text-[10px] font-medium text-[#64748B]">{data.dashboard.floatingBadge.subtitle}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
