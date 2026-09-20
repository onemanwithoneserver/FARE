import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

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
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-5">
                        <div className="bg-[#F8FAFD] border border-[#0B1D3A]/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            <Sparkles size={14} className="text-[#C99A2E]" />
                        </div>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.1] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6] text-[#596780]">
                        {data.description}
                    </motion.p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.05)] relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#C99A2E]/5 rounded-full blur-2xl"></div>
                        
                        <h3 className="text-[18px] font-bold mb-6" style={{ color: NAVY }}>
                            {data.exploreHeading}
                        </h3>

                        <div className="flex flex-col gap-4 relative z-10">
                            {data.exploreItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#F8FAFD] flex items-center justify-center shrink-0 border border-[#0B1D3A]/5">
                                        <CheckCircle2 size={12} className="text-[#C99A2E]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#3A4A63] leading-snug">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-[40px]"></div>

                        <h3 className="text-[22px] font-black text-white mb-8 relative z-10 leading-[1.2]">
                            {data.footerText}
                        </h3>

                        <button className="w-full bg-[#C99A2E] hover:bg-[#D5AA45] text-white px-6 py-3.5 rounded-xl font-bold text-[15px] shadow-[0_8px_16px_-4px_rgba(201,154,46,0.3)] flex items-center justify-center gap-2 relative z-10">
                            {data.ctaButton} <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
