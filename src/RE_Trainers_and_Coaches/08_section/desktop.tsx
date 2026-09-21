import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
        <section className="w-full py-32 bg-[#040C1E] relative font-['Outfit'] overflow-hidden">
            {/* Dynamic Dark Premium Background */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#C99A2E]/[0.08] via-transparent to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-28"
                >
                    <motion.div variants={item} className="mb-6 flex gap-3">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[4rem] leading-[1.05] font-black tracking-[-0.02em] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        {data.headline}
                    </motion.h2>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[4rem] leading-[1.05] font-black tracking-[-0.02em] drop-shadow-[0_0_30px_rgba(201,154,46,0.3)]" style={{ color: GOLD }}>
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-[1100px] mx-auto mb-32 relative">

                    {/* Left Card - You Bring */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 hover:bg-[#0E1F42]/80 hover:border-white/20 transition-all duration-500 relative overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/10 rounded-bl-full blur-[40px] transition-all duration-700 group-hover:bg-[#C99A2E]/20 group-hover:scale-150 pointer-events-none"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C99A2E] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex items-center gap-5 mb-10 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(201,154,46,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                                <User size={28} strokeWidth={2.5} className="relative z-10" />
                            </div>
                            <h3 className="text-[28px] font-bold text-white group-hover:text-[#C99A2E] transition-colors duration-300">
                                {data.youBring.title}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-5 relative z-10">
                            {data.youBring.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-[16px] font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                    <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#C99A2E] shadow-[0_0_8px_rgba(201,154,46,0.8)]"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Plus Icon Divider */}
                    <div className="flex items-center justify-center py-4 lg:py-0">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shadow-inner backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors">
                            <div className="absolute inset-0 bg-white/5 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                            <Plus size={32} strokeWidth={2} className="relative z-10" />
                        </div>
                    </div>

                    {/* Right Card - FARE Brings */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#0A1630]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 hover:bg-[#0E1F42]/80 hover:border-white/20 transition-all duration-500 relative overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#60A5FA]/10 rounded-bl-full blur-[40px] transition-all duration-700 group-hover:bg-[#60A5FA]/20 group-hover:scale-150 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#60A5FA] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex items-center gap-5 mb-10 relative z-10 flex-row-reverse lg:flex-row">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                                <Server size={28} strokeWidth={2.5} className="relative z-10" />
                            </div>
                            <h3 className="text-[28px] font-bold text-white group-hover:text-[#60A5FA] transition-colors duration-300 flex-grow text-right lg:text-left">
                                {data.fareBrings.title}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-5 relative z-10">
                            {data.fareBrings.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-[16px] font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300 flex-row-reverse lg:flex-row text-right lg:text-left">
                                    <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1100px] mx-auto bg-gradient-to-r from-[#0F2751]/80 via-[#132D5F]/60 to-[#0F2751]/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-16 flex flex-col items-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group"
                >
                    <div className="absolute top-[-50%] left-[20%] w-[500px] h-[500px] bg-[#C99A2E]/5 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-[-50%] right-[20%] w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
                        <Zap size={16} className="text-[#C99A2E]" />
                        <h3 className="text-[14px] font-bold text-white uppercase tracking-[0.2em] text-center">
                            {data.together.title}
                        </h3>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 lg:gap-8 flex-wrap relative z-10 w-full">
                        {data.together.flow.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 lg:gap-8">
                                <span className="text-[20px] font-bold text-white bg-[#0A1630]/50 px-8 py-5 rounded-[20px] border border-white/10 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] hover:bg-[#0A1630]/80 hover:border-[#C99A2E]/40 hover:text-[#C99A2E] transition-all duration-300 cursor-default">
                                    {step}
                                </span>
                                {idx < data.together.flow.length - 1 && (
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <ArrowRight size={20} className="text-[#C99A2E]" strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 text-center flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
                    <p className="text-[20px] font-medium text-white/50 italic tracking-wide">
                        "{data.footerText}"
                    </p>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}
