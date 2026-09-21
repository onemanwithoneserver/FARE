import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import reCompaniesHero from '../../assets/re_companies_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
        <section className="w-full pt-[60px] -mt-6 pb-20 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#DBEAFE]/50 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>
            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="w-full px-5 flex flex-col items-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center w-full relative z-40"
                >
                    <motion.div variants={item} className="flex items-center gap-2 mb-6">
                        <div className="px-3.5 py-1.5 rounded-full border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05] flex items-center gap-1.5 backdrop-blur-sm">
                            <Sparkles size={12} className="text-[#C99A2E]" />
                            <span className="font-bold text-[10px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                                {data.tagline}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className={`font-black mb-5 text-[#0B1D3A] ${
                            language === 'te'
                                ? 'text-[2rem] leading-[1.15] tracking-wider'
                                : 'text-[2.25rem] sm:text-[2.75rem] leading-[1.08] tracking-[-0.03em]'
                        }`}
                    >
                        {data.headline.split(' ').map((word, i) => (
                            <span key={i} className={i >= 3 ? "text-[#C99A2E] relative inline-block" : ""}>
                                {word}{' '}
                                {i >= 3 && <svg className="absolute w-full h-[4px] -bottom-0.5 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.div variants={item} className="mb-6 flex flex-col gap-1.5">
                        <h2 className={`font-bold text-[#0B1D3A] ${
                            language === 'te' ? 'text-[15px] leading-normal tracking-wider' : 'text-[16px] sm:text-[18px] leading-snug'
                        }`}>
                            {data.subheadline}
                        </h2>
                        <h2 className={`font-bold ${
                            language === 'te' ? 'text-[15px] leading-normal tracking-wider' : 'text-[16px] sm:text-[18px] leading-snug'
                        }`} style={{ color: GOLD }}>
                            {data.subheadlineAccent}
                        </h2>
                    </motion.div>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.65] mb-8 max-w-[420px] text-[#475569]">
                        {data.description}
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col gap-3 mb-8 w-full max-w-[300px] mx-auto">
                        <button
                            className="group relative overflow-hidden text-white text-[14px] font-bold w-full py-4 rounded active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_-8px_rgba(11,29,58,0.3)]"
                            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #132D5F 100%)` }}
                        >
                            <span className="relative z-10">{data.buttons.primary}</span>
                            <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] transition-transform duration-700"></div>
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5 mb-6">
                        {data.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_2px_5px_-1px_rgba(11,29,58,0.05)] text-[#0B1D3A]/80">
                                <ShieldCheck size={14} className="text-[#10B981]" />
                                <span className="text-[12px] font-bold">{f}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.p variants={item} className="text-[12px] italic text-[#64748B]">
                        {data.footerText}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full mt-12 relative z-20 flex items-center justify-center px-2"
                >
                    <div className="relative w-full aspect-square max-w-[400px] rounded overflow-hidden shadow-[0_20px_40px_-10px_rgba(11,29,58,0.3)] border-[2px] border-white/60 group">
                        <img src={reCompaniesHero} alt="Real Estate Companies Hero" className="w-full h-full object-cover relative z-10" />
                        
                        
                        <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl border border-white p-4 rounded shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] z-30 flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-md shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-0.5">Trusted By</p>
                                <p className="text-[15px] font-black text-[#0B1D3A] leading-none">Top Enterprises</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
