import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };


    return (
        <section className="w-full py-32 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="max-w-[900px] mx-auto text-center"
                >
                    <motion.div variants={item} className="mb-6 flex justify-center">
                        <div className="bg-[#F8FAFD] border border-[#0B1D3A]/5 px-4 py-1.5 rounded-full flex items-center gap-2">
                            <Sparkles size={16} className="text-[#C99A2E]" />
                        </div>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[3.25rem] lg:text-[4rem] leading-[1.05] font-black tracking-[-0.03em] mb-8" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[20px] font-medium leading-[1.6] text-[#596780] mb-16 max-w-[800px] mx-auto">
                        {data.description}
                    </motion.p>
                </motion.div>

                <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="bg-white border border-[#0B1D3A]/10 rounded-3xl p-10 shadow-[0_10px_40px_-10px_rgba(11,29,58,0.06)] relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C99A2E]/5 rounded-full blur-3xl"></div>
                        
                        <h3 className="text-[22px] font-bold mb-8" style={{ color: NAVY }}>
                            {data.exploreHeading}
                        </h3>

                        <div className="flex flex-col gap-5 relative z-10">
                            {data.exploreItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#F8FAFD] flex items-center justify-center shrink-0 group-hover:bg-[#C99A2E]/10 transition-colors border border-[#0B1D3A]/5">
                                        <CheckCircle2 size={14} className="text-[#C99A2E]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[17px] font-semibold text-[#3A4A63] group-hover:text-[#0B1D3A] transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-3xl p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center h-full justify-center min-h-[400px]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/15 rounded-full blur-[60px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-[60px]"></div>

                        <h3 className="text-[28px] lg:text-[32px] font-black text-white mb-10 relative z-10 leading-[1.2]">
                            {data.footerText}
                        </h3>

                        <button className="bg-[#C99A2E] hover:bg-[#D5AA45] text-white px-8 py-4 rounded-xl font-bold text-[16px] shadow-[0_10px_20px_-5px_rgba(201,154,46,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(201,154,46,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 relative z-10 w-full justify-center max-w-[300px]">
                            {data.ctaButton} <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
