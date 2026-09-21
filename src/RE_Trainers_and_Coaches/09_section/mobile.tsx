import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full py-20 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-[20%] right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-6">
                        <div className="bg-white border border-[#0B1D3A]/[0.08] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm backdrop-blur-md inline-flex">
                            <Sparkles size={14} className="text-[#C99A2E]" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                                {data.overline}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] sm:text-[2.5rem] leading-[1.1] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i, arr) => (
                            <span key={i} className={i === 2 ? "text-[#C99A2E]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>

                    <motion.p variants={item} className="text-[16px] font-medium leading-[1.6] text-[#475569]">
                        {data.description}
                    </motion.p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    
                    {/* Checklist Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-[#0B1D3A]/[0.06] rounded-[24px] p-8 shadow-[0_10px_30px_-10px_rgba(11,29,58,0.08)] relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C99A2E]/[0.08] rounded-full blur-3xl"></div>
                        
                        <h3 className="text-[20px] font-bold mb-6 relative z-10" style={{ color: NAVY }}>
                            {data.exploreHeading}
                        </h3>

                        <div className="flex flex-col gap-5 relative z-10">
                            {data.exploreItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#F8FAFD] flex items-center justify-center shrink-0 border border-[#0B1D3A]/[0.05] shadow-sm">
                                        <CheckCircle2 size={14} className="text-[#C99A2E]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[15.5px] font-bold text-[#3A4A63] leading-snug">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dark CTA Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-[#0B1D3A] via-[#132D5F] to-[#0B1D3A] rounded-[24px] p-8 sm:p-10 shadow-[0_20px_40px_-10px_rgba(11,29,58,0.4)] relative overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/20 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3B82F6]/15 rounded-full blur-[50px] pointer-events-none"></div>

                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-lg relative z-10">
                            <Sparkles size={24} className="text-[#C99A2E]" />
                        </div>

                        <h3 className="text-[26px] font-black text-white mb-8 relative z-10 leading-[1.15]">
                            {data.footerText}
                        </h3>

                        <button className="w-full bg-gradient-to-r from-[#C99A2E] to-[#B88A22] active:scale-95 text-white px-6 py-4 rounded-xl font-bold text-[16px] shadow-[0_10px_20px_-5px_rgba(201,154,46,0.4)] flex items-center justify-center gap-3 relative z-10 transition-transform">
                            {data.ctaButton} <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
