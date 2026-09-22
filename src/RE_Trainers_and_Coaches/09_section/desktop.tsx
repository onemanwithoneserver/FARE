import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

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
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full py-16 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] right-[10%] w-[800px] h-[800px] bg-gradient-radial from-[#3B82F6]/[0.04] to-transparent rounded-full blur-[120px] pointer-events-none"></motion.div>

            <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="max-w-[1000px] mx-auto text-center"
                >
                    <motion.div variants={item} className="mb-8 flex justify-center">
                        <div className="bg-white border border-[#0B1D3A]/[0.08] px-6 py-2.5 rounded-full flex items-center gap-3 shadow-[0_4px_20px_-5px_rgba(11,29,58,0.08)] backdrop-blur-md">
                            <Sparkles size={18} className="text-[#C99A2E]" />
                            <span className="text-[13px] font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
                                {data.overline}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-black tracking-[-0.03em] mb-8" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i) => (
                            <span key={i} className={i === 2 ? "text-[#C99A2E]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>

                    <motion.p variants={item} className="text-[22px] font-medium leading-[1.65] text-[#475569] mb-10 max-w-[850px] mx-auto">
                        {data.description}
                    </motion.p>
                </motion.div>

                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    
                    
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-[#0B1D3A]/[0.06] rounded p-12 shadow-[0_20px_50px_-20px_rgba(11,29,58,0.08)] relative overflow-hidden group hover:border-[#0B1D3A]/10 hover:shadow-[0_30px_60px_-20px_rgba(11,29,58,0.12)] transition-all duration-500 h-full flex flex-col"
                    >
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -right-10 w-48 h-48 bg-[#C99A2E]/[0.08] rounded-full blur-[40px] group-hover:bg-[#C99A2E]/[0.12] transition-colors duration-500"></motion.div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                        
                        <h3 className="text-[26px] font-bold mb-10 relative z-10" style={{ color: NAVY }}>
                            {data.exploreHeading}
                        </h3>

                        <div className="flex flex-col gap-6 relative z-10 mt-auto">
                            {data.exploreItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group/item">
                                    <div className="mt-1 w-7 h-7 rounded-full bg-[#F8FAFD] flex items-center justify-center shrink-0 group-hover/item:bg-[#C99A2E]/15 group-hover/item:scale-110 transition-all duration-300 border border-[#0B1D3A]/[0.05] shadow-sm">
                                        <CheckCircle2 size={16} className="text-[#C99A2E]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[18px] font-bold text-[#3A4A63] group-hover/item:text-[#0B1D3A] transition-colors duration-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-gradient-to-br from-[#0B1D3A] via-[#132D5F] to-[#0B1D3A] rounded p-12 shadow-[0_30px_60px_-15px_rgba(11,29,58,0.4)] relative overflow-hidden flex flex-col items-center text-center h-full justify-center group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-80 h-80 bg-[#C99A2E]/20 rounded-full blur-[80px] group-hover:bg-[#C99A2E]/30 group-hover:scale-110 transition-all duration-700 pointer-events-none"></motion.div>
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B82F6]/15 rounded-full blur-[80px] group-hover:bg-[#3B82F6]/25 group-hover:scale-110 transition-all duration-700 pointer-events-none"></motion.div>

                        <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 shadow-xl relative z-10">
                            <Sparkles size={32} className="text-[#C99A2E]" />
                        </div>

                        <h3 className="text-[32px] lg:text-[40px] font-black text-white mb-12 relative z-10 leading-[1.1] tracking-tight">
                            {data.footerText}
                        </h3>

                        <button className="bg-gradient-to-r from-[#C99A2E] to-[#B88A22] hover:from-[#D5AA45] hover:to-[#C99A2E] text-white px-10 py-5 rounded font-bold text-[18px] shadow-[0_15px_30px_-5px_rgba(201,154,46,0.5)] hover:shadow-[0_20px_40px_-5px_rgba(201,154,46,0.7)] group-hover:-translate-y-2 transition-all duration-400 flex items-center gap-4 relative z-10 w-full justify-center max-w-[360px] overflow-hidden">
                            <span className="relative z-10">{data.ctaButton}</span>
                            <ArrowRight size={22} strokeWidth={3} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-white/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 rounded pointer-events-none"></div>
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

