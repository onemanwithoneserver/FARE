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
                        className="lg:col-span-7 flex flex-col items-start text-left"
                    >
                        
                        <motion.div variants={item} className="mb-6">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm">
                                <Sparkles size={13} className="text-[#C99A2E]" strokeWidth={2.5} />
                                <span className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#C99A2E]">
                                    {data.tagline}
                                </span>
                            </div>
                        </motion.div>

                        
                        <motion.h1
                            variants={item}
                            className={`font-black mb-5 ${
                                language === 'te'
                                    ? 'text-[2.4rem] xl:text-[3rem] leading-[1.15] tracking-wider py-1'
                                    : 'text-[2.85rem] xl:text-[3.6rem] leading-[1.08] tracking-[-0.03em]'
                            }`}
                            style={{ color: NAVY }}
                        >
                            {data.headline}
                        </motion.h1>

                        
                        <motion.div variants={item} className="mb-5">
                            <h2 className={`font-bold ${
                                language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[22px] leading-snug'
                            }`} style={{ color: NAVY }}>
                                {data.subheadline}
                            </h2>
                            {data.subheadlineAccent && (
                                <h2 className={`font-bold mt-1 ${
                                    language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[22px] leading-snug'
                                }`} style={{ color: GOLD }}>
                                    {data.subheadlineAccent}
                                </h2>
                            )}
                        </motion.div>

                        
                        <motion.p
                            variants={item}
                            className="text-[16px] font-medium leading-[1.75] text-[#475569] mb-9 max-w-[560px]"
                        >
                            {data.description}
                        </motion.p>

                        
                        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
                            <button
                                className="group text-white text-[14px] font-semibold px-8 py-4 rounded hover:shadow-[0_20px_40px_-10px_rgba(11,29,58,0.35)] active:scale-[0.97] transition-all duration-300 flex items-center gap-3 shadow-[0_8px_24px_-6px_rgba(11,29,58,0.25)] relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                            >
                                <span className="relative z-10">{data.buttons.primary}</span>
                                <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </button>
                        </motion.div>

                        
                        <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-5">
                            {data.features.map((f, i) => (
                                <span
                                    key={i}
                                    className="group/pill px-4 py-2 rounded text-[12px] font-semibold border border-[#0B1D3A]/[0.08] bg-white/80 backdrop-blur-sm text-[#475569] shadow-[0_2px_8px_-2px_rgba(11,29,58,0.06)] hover:border-[#C99A2E]/40 hover:text-[#C99A2E] hover:shadow-[0_4px_16px_-4px_rgba(201,154,46,0.15)] transition-all duration-300 cursor-default"
                                >
                                    {f}
                                </span>
                            ))}
                        </motion.div>

                        
                        <motion.p variants={item} className="text-[12px] italic text-[#0B1D3A]/45 font-medium">
                            {data.footerText}
                        </motion.p>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative w-full flex items-center justify-center"
                    >
                        
                        <div className="absolute -top-4 -right-4 w-[calc(100%+8px)] h-[calc(100%+8px)] max-w-[520px] aspect-square rounded border-2 border-[#C99A2E]/15 pointer-events-none"></div>
                        <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded bg-gradient-to-br from-[#C99A2E]/20 to-[#C99A2E]/5 blur-sm pointer-events-none"></div>

                        <div className="relative w-full aspect-square max-w-[500px] rounded overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,29,58,0.3),0_0_0_1px_rgba(255,255,255,0.5)_inset] group">
                            <img
                                src={openplotHero}
                                alt="Open Plot Hero"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/20 via-transparent to-transparent pointer-events-none"></div>

                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl rounded p-4 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.2)] border border-white/60"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-md">
                                        <Sparkles size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[13px] font-bold text-[#0B1D3A]">{data.dashboard.floatingBadge.title}</div>
                                        <div className="text-[11px] font-medium text-[#64748B]">{data.dashboard.floatingBadge.subtitle}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute -right-6 top-[20%] bg-white/90 backdrop-blur-xl rounded p-3.5 shadow-[0_12px_40px_-10px_rgba(11,29,58,0.18)] border border-white/60 hidden xl:block"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded flex items-center justify-center text-[14px] font-black text-white" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                                    %
                                </div>
                                <div>
                                    <div className="text-[12px] font-bold text-[#0B1D3A]">{data.dashboard.stats[0].progress}</div>
                                    <div className="text-[10px] font-medium text-[#94A3B8]">{data.dashboard.stats[0].title}</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
