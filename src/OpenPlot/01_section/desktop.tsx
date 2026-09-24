import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import openplotHero from '../../assets/openplot_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const GOLD_LIGHT = '#E2C068';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 22 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full -mt-8 lg:-mt-8 flex items-center justify-center overflow-x-clip relative font-['Outfit']"
            style={{ background: `linear-gradient(165deg, #FFFFFF 0%, #F6F9FF 35%, #EDF2FF 60%, #F0F4FF 100%)` }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#818CF8]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>

            
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-[1320px] w-full px-8 lg:px-14 py-10 lg:py-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 items-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="lg:col-span-8 flex flex-col items-start text-left w-full relative z-40"
                    >


                        <h1 className={`font-black mb-3 flex flex-col gap-1 md:gap-1.5 ${
                            language === 'te'
                                ? 'text-[3.6rem] leading-[1.1] tracking-wider'
                                : 'text-[4.85rem] leading-[1] tracking-[-0.03em]'
                        }`}>
                                <>
                                    <motion.span variants={item} className="inline-flex items-center self-start gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-2">
                                        <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
                                        <span className="font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">{language === 'te' ? 'FARE కోసం' : 'FARE FOR'}</span>
                                    </motion.span>
                                    <motion.span variants={item} className="block uppercase" style={{ color: NAVY }}>{language === 'te' ? 'ఓపెన్ ప్లాట్' : 'OPEN PLOT'}</motion.span>
                                    <motion.span variants={item} className={`inline-block text-[#C99A2E] gold-underline uppercase ${language === 'te' ? 'pb-1' : ''}`}>
                                        {language === 'te' ? 'కంపెనీల కోసం' : 'COMPANIES'}
                                    </motion.span>
                                </>
                        </h1>

                        <motion.div variants={item} className="mb-4 flex flex-col gap-1">
                            <p className="text-[17px] font-medium leading-[1.5]" style={{ color: '#3A4A63' }}>
                                {data.subheadline}
                            </p>
                            {data.subheadlineAccent && (
                                <p className="text-[17px] font-medium leading-[1.5]" style={{ color: GOLD }}>
                                    {data.subheadlineAccent}
                                </p>
                            )}
                            <p className="text-[17px] font-medium leading-[1.5] mt-1.5" style={{ color: '#3A4A63' }}>
                                {data.description}
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="flex items-center gap-4 mb-5">
                            <button
                                className="text-white text-[13.5px] font-semibold px-7 py-3 rounded hover:shadow-[0_12px_24px_rgba(11,29,58,0.2),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
                                style={{
                                    background: NAVY,
                                    boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`
                                }}
                            >
                                {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                            </button>
                            {data.buttons.secondary && (
                                <button
                                    className="text-[13.5px] font-semibold px-7 py-3 rounded hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border"
                                    style={{
                                        color: NAVY,
                                        borderColor: `${NAVY}15`,
                                        background: 'white',
                                        boxShadow: '0 1px 3px rgba(11,29,58,0.03)'
                                    }}
                                >
                                    {data.buttons.secondary}
                                </button>
                            )}
                        </motion.div>

                        <motion.div variants={item} className="flex flex-wrap gap-2 mb-2">
                            {data.features.map((cap, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }}></span>
                                    <span>{cap}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p variants={item} className="text-[12px] italic text-[#0B1D3A]/45 font-medium mt-2">
                            {data.footerText}
                        </motion.p>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 relative w-full flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[500px] flex items-center justify-center group mt-10 lg:mt-0">
                            <motion.div
                                className="w-full h-full absolute inset-0 z-0 rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_20px_60px_-15px_rgba(11,29,58,0.15)]"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                                }}
                            >
                                <motion.img
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                                    src={openplotHero}
                                    alt="Open Plot Hero"
                                    className="w-full h-full object-cover object-[center_35%]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -left-4 sm:-left-8 bottom-16 z-20 bg-white/95 backdrop-blur-xl p-4 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.2)] border border-white/80 rounded-[24px] rounded-tl-[8px]"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-[12px] rounded-br-[4px] bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-lg shadow-[#34D399]/30">
                                        <Sparkles size={18} className="text-white" />
                                    </div>
                                    <div className="pr-2">
                                        <div className="text-[14px] font-black text-[#0B1D3A] tracking-tight">{data.dashboard.floatingBadge.title}</div>
                                        <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">{data.dashboard.floatingBadge.subtitle}</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute -right-4 sm:-right-8 top-24 z-20 bg-white/95 backdrop-blur-xl p-3.5 shadow-[0_15px_50px_-12px_rgba(11,29,58,0.25)] border border-white/80 hidden lg:block rounded-[20px] rounded-tr-[6px]"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-[10px] rounded-bl-[4px] flex items-center justify-center text-[15px] font-black text-white shadow-lg shadow-[#C99A2E]/30" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                                        %
                                    </div>
                                    <div className="pr-3">
                                        <div className="text-[16px] font-black text-[#0B1D3A] leading-none">{data.dashboard.stats[0].progress}</div>
                                        <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mt-1">{data.dashboard.stats[0].title}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
