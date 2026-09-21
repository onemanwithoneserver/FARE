import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import reCompaniesHero from '../../assets/re_companies_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
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
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full -mt-8 lg:-mt-16 flex items-center justify-center overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
        >
            {/* Soft Background Orbs */}
            <div className="absolute top-1/4 right-[15%] w-[800px] h-[800px] bg-gradient-radial from-[#DBEAFE]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 left-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            
            {/* Decorative dot mesh */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="max-w-[1320px] w-full px-8 lg:px-12 py-20 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="lg:col-span-6 flex flex-col items-start text-left relative z-10"
                    >
                        <motion.div variants={item} className="flex items-center gap-3 mb-6">
                            <div className="px-4 py-1.5 rounded-full border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05] flex items-center gap-2 backdrop-blur-sm">
                                <Sparkles size={14} className="text-[#C99A2E]" />
                                <span className="font-bold text-[11px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                                    {data.tagline}
                                </span>
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className={`font-black mb-6 text-[#0B1D3A] ${
                                language === 'te'
                                    ? 'text-[2.5rem] xl:text-[3rem] leading-[1.15] tracking-wider'
                                    : 'text-[3.25rem] xl:text-[4rem] leading-[1.05] tracking-[-0.03em]'
                            }`}
                        >
                            {data.headline.split(' ').map((word, i) => (
                                <span key={i} className={i >= 3 ? "text-[#C99A2E] relative inline-block" : ""}>
                                    {word}{' '}
                                    {i >= 3 && <svg className="absolute w-full h-[6px] -bottom-1 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.div variants={item} className="mb-6">
                            <h2 className={`font-bold text-[#0B1D3A] ${
                                language === 'te' ? 'text-[18px] xl:text-[20px] leading-normal tracking-wider' : 'text-[20px] xl:text-[24px] leading-tight'
                            }`}>
                                {data.subheadline}
                            </h2>
                            <h2 className={`font-bold mt-1 ${
                                language === 'te' ? 'text-[18px] xl:text-[20px] leading-normal tracking-wider' : 'text-[20px] xl:text-[24px] leading-tight'
                            }`} style={{ color: GOLD }}>
                                {data.subheadlineAccent}
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={item}
                            className="text-[17px] font-medium leading-[1.7] text-[#475569] mb-10 max-w-[550px]"
                        >
                            {data.description}
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap items-center gap-5 mb-10">
                            <button
                                className="group relative overflow-hidden text-white text-[15px] font-bold px-9 py-4 rounded-xl shadow-[0_8px_20px_rgba(11,29,58,0.2)] active:scale-[0.98] transition-all duration-300 flex items-center gap-3"
                                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #132D5F 100%)` }}
                            >
                                <span className="relative z-10">{data.buttons.primary}</span> 
                                <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </button>
                        </motion.div>

                        <motion.div variants={item} className="flex flex-wrap gap-3 mb-6">
                            {data.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] text-[#0B1D3A]/80 hover:text-[#0B1D3A] hover:bg-white transition-all cursor-default group">
                                    <ShieldCheck size={16} className="text-[#10B981] group-hover:scale-110 transition-transform" />
                                    <span className="text-[13px] font-bold">{f}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p variants={item} className="text-[13px] font-medium italic text-[#64748B]">
                            {data.footerText}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 relative w-full flex justify-end"
                    >
                        {/* Premium Hero Image Container */}
                        <div className="relative w-full max-w-[650px] aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(11,29,58,0.4)] group z-20">
                            {/* Inner Border */}
                            <div className="absolute inset-0 border-[2px] border-white/20 rounded-[32px] z-20 pointer-events-none mix-blend-overlay"></div>
                            
                            {/* Image with subtle zoom on hover */}
                            <motion.img 
                                whileHover={{ scale: 1.05 }} 
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src={reCompaniesHero} 
                                alt="Real Estate Companies Hero" 
                                className="w-full h-full object-cover relative z-10" 
                            />

                            {/* Floating glassmorphism element */}
                            <div className="absolute bottom-10 left-[-20px] lg:left-10 bg-white/80 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] z-30 flex items-center gap-4 group-hover:translate-y-[-5px] transition-transform duration-500">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-lg">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider mb-1">Trusted By</p>
                                    <p className="text-[18px] font-black text-[#0B1D3A]">Top Enterprises</p>
                                </div>
                            </div>
                        </div>

                        {/* Behind-image decorative blobs */}
                        <div className="absolute top-[10%] right-[-10%] w-[80%] h-[80%] rounded-[40px] border-2 border-[#C99A2E]/20 rotate-6 z-10 pointer-events-none"></div>
                        <div className="absolute top-[5%] right-[-5%] w-[80%] h-[80%] rounded-[40px] border border-[#3B82F6]/20 -rotate-3 z-10 pointer-events-none"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
