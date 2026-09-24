import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight, Zap, Sparkles } from 'lucide-react';
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
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
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

    const listContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.15 }
        }
    };

    const listItem: Variants = {
        hidden: { opacity: 0, x: -10 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const listItemReverse: Variants = {
        hidden: { opacity: 0, x: 10 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full py-10 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 40%, #EFF5FF 80%, #F4F8FF 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[12%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[130px] pointer-events-none z-0"
            />
            <motion.div
                animate={{ opacity: [0.3, 0.65, 0.3], scale: [1.06, 1, 1.06] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] left-[8%] w-[650px] h-[650px] bg-gradient-radial from-[#3B82F6]/[0.08] to-transparent rounded-full blur-[120px] pointer-events-none z-0"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-radial from-[#60A5FA]/[0.06] to-transparent rounded-full blur-[110px] pointer-events-none z-0"
            />

            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.03, 0.1, 0.03] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-[#C99A2E]/30 pointer-events-none z-0"
            />
            <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.02, 0.07, 0.02] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#3B82F6]/25 pointer-events-none z-0"
            />

            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '56px 56px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-8 lg:px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-60px" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.div variants={item} className="mb-5">
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C99A2E]/30 bg-gradient-to-r from-[#C99A2E]/[0.08] via-[#C99A2E]/[0.04] to-[#C99A2E]/[0.08] shadow-[0_2px_12px_rgba(201,154,46,0.12)] backdrop-blur-md">
                            <Sparkles size={13} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                            <span className="font-bold text-[11px] tracking-[0.2em] uppercase text-[#C99A2E]">
                                {data.overline}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={item}
                        className="text-[2.75rem] lg:text-[3.75rem] leading-[1.08] font-black tracking-[-0.03em] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0B1D3A] via-[#162E56] to-[#0B1D3A]"
                    >
                        {data.headline}
                    </motion.h2>

                    <motion.h2
                        variants={item}
                        className="text-[2.75rem] lg:text-[3.75rem] leading-[1.08] font-black tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-[#C99A2E] via-[#E2BA55] to-[#B88A22] drop-shadow-[0_4px_24px_rgba(201,154,46,0.25)]"
                    >
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col items-center max-w-[1140px] mx-auto mb-14 relative z-10">
                    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 justify-center relative">
                        {/* Card 1: You Bring */}

                        <motion.div
                            initial={{ opacity: 0, x: -35, y: 15 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, margin: "-60px" }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                            className="group flex-1 w-full bg-white/85 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#C99A2E]/35 rounded-2xl p-9 xl:p-11 transition-all duration-400 relative overflow-hidden shadow-[0_12px_36px_-12px_rgba(11,29,58,0.08)] hover:shadow-[0_24px_50px_-15px_rgba(201,154,46,0.18)] cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 pointer-events-none" />

                            <motion.div
                                animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.08, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-44 h-44 bg-[#C99A2E]/10 rounded-bl-full blur-[35px] transition-all duration-500 group-hover:scale-125 group-hover:bg-[#C99A2E]/15 pointer-events-none"
                            />

                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C99A2E] via-[#E2BA55] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

                            <div className="flex items-center gap-4 xl:gap-5 mb-8 relative z-10">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(201,154,46,0.35)] group-hover:scale-110 transition-transform duration-400 relative overflow-hidden">
                                    <User size={26} strokeWidth={2} className="relative z-10" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C99A2E] block mb-1">
                                        Your Contribution
                                    </span>
                                    <h3 className="text-[26px] xl:text-[28px] font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors duration-300">
                                        {data.youBring.title}
                                    </h3>
                                </div>
                            </div>

                            <motion.div
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                                className="flex flex-col gap-4 relative z-10"
                            >
                                {data.youBring.items.map((it, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={listItem}
                                        className="group/item flex items-start gap-3.5 text-[15px] xl:text-[16px] font-medium text-[#475569] hover:text-[#0B1D3A] transition-all duration-200 hover:translate-x-1.5"
                                    >
                                        <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#C99A2E] shadow-[0_0_8px_rgba(201,154,46,0.7)] group-hover/item:scale-125 transition-all duration-300" />
                                        <span className="leading-snug">{it}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Plus between cards */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-16 h-16 rounded-full bg-white border border-[#0B1D3A]/10 shadow-[0_8px_24px_-4px_rgba(11,29,58,0.12)] items-center justify-center z-20 text-[#C99A2E]">
                            <Plus size={30} strokeWidth={2.5} />
                        </div>

                        {/* Card 2: FARE Brings */}
                        <motion.div
                            initial={{ opacity: 0, x: 35, y: 15 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, margin: "-60px" }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                            className="group flex-1 w-full bg-white/85 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#3B82F6]/35 rounded-2xl p-9 xl:p-11 transition-all duration-400 relative overflow-hidden shadow-[0_12px_36px_-12px_rgba(11,29,58,0.08)] hover:shadow-[0_24px_50px_-15px_rgba(59,130,246,0.18)] cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 pointer-events-none" />

                            <motion.div
                                animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.08, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-44 h-44 bg-[#3B82F6]/10 rounded-bl-full blur-[35px] transition-all duration-500 group-hover:scale-125 group-hover:bg-[#3B82F6]/15 pointer-events-none"
                            />

                            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

                            <div className="flex items-center gap-4 xl:gap-5 mb-8 relative z-10">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(59,130,246,0.35)] group-hover:scale-110 transition-transform duration-400 relative overflow-hidden">
                                    <Server size={26} strokeWidth={2} className="relative z-10" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3B82F6] block mb-1">
                                        Our Infrastructure
                                    </span>
                                    <h3 className="text-[26px] xl:text-[28px] font-bold text-[#0B1D3A] group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {data.fareBrings.title}
                                    </h3>
                                </div>
                            </div>

                            <motion.div
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                                className="flex flex-col gap-4 relative z-10"
                            >
                                {data.fareBrings.items.map((it, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={listItemReverse}
                                        className="group/item flex items-start gap-3.5 text-[15px] xl:text-[16px] font-medium text-[#475569] hover:text-[#0B1D3A] transition-all duration-200 hover:translate-x-1.5"
                                    >
                                        <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.7)] group-hover/item:scale-125 transition-all duration-300" />
                                        <span className="leading-snug">{it}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Desktop Wiring - only visible on lg and up */}
                    <div className="hidden lg:block absolute left-0 right-0 top-[100%] h-[140px] pointer-events-none z-0 overflow-visible">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1140 140">
                            {/* Outer faint gold path */}
                            <path d="M 285 0 C 285 110, 550 120, 570 140" stroke="#C99A2E" strokeWidth="1.5" fill="none" className="opacity-30" />
                            {/* Inner strong gold path */}
                            <path d="M 285 12 C 285 95, 560 100, 570 140" stroke="#C99A2E" strokeWidth="2.5" fill="none" className="opacity-50" />
                            
                            {/* Outer faint blue path */}
                            <path d="M 855 0 C 855 110, 590 120, 570 140" stroke="#3B82F6" strokeWidth="1.5" fill="none" className="opacity-30" />
                            {/* Inner strong blue path */}
                            <path d="M 855 12 C 855 95, 580 100, 570 140" stroke="#3B82F6" strokeWidth="2.5" fill="none" className="opacity-50" />
                        </svg>
                    </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:mt-[140px] max-w-[1000px] w-full mx-auto rounded-3xl flex flex-col items-center relative transition-all duration-500 group shadow-[0_25px_60px_-15px_rgba(11,29,58,0.5)] hover:shadow-[0_30px_70px_-15px_rgba(201,154,46,0.15)] mt-12 z-20"
                >
                    {/* Inner wrapper for overflow-hidden backgrounds */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none border border-white/10 group-hover:border-[#C99A2E]/40 transition-colors duration-500" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0F2751 50%, #132D5F 100%)' }}>
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E]/80 to-transparent" />
                        
                        <div
                            className="absolute inset-0 opacity-[0.035] z-0"
                            style={{
                                backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        <motion.div
                            animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-1/2 left-[15%] w-[500px] h-[500px] bg-[#C99A2E]/20 rounded-full blur-[90px]"
                        />
                        <motion.div
                            animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.1, 1, 1.1] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-1/2 right-[15%] w-[500px] h-[500px] bg-[#3B82F6]/20 rounded-full blur-[90px]"
                        />
                    </div>

                    {/* Node circle on top of the bottom card - outside overflow-hidden */}
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#C99A2E] to-[#B88A22] border-[4px] border-white shadow-[0_8px_20px_rgba(201,154,46,0.35)] flex items-center justify-center z-30 font-black text-white text-3xl leading-none pb-1">
                        =
                    </div>

                    <div className="p-10 xl:p-14 flex flex-col items-center relative w-full">

                    <motion.div
                        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-1/2 left-[15%] w-[500px] h-[500px] bg-[#C99A2E]/20 rounded-full blur-[90px] pointer-events-none"
                    />
                    <motion.div
                        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.1, 1, 1.1] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-1/2 right-[15%] w-[500px] h-[500px] bg-[#3B82F6]/20 rounded-full blur-[90px] pointer-events-none"
                    />

                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-white/[0.08] shadow-inner backdrop-blur-md mb-11 relative z-10">
                        <Zap size={15} className="text-[#E2BA55] animate-pulse" />
                        <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.25em] text-center">
                            {data.together.title}
                        </h3>
                    </div>

                    <div className="relative z-10 w-full">
                        <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C99A2E]/30 to-transparent -translate-y-1/2 pointer-events-none z-0" />

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className="flex items-center justify-center gap-3 lg:gap-6 flex-wrap relative z-10 w-full"
                        >
                            {data.together.flow.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-3 lg:gap-6">
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20, scale: 0.94 },
                                            show: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                            }
                                        }}
                                        whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                                        className="group/chip text-[17px] xl:text-[19px] font-bold text-white bg-white/[0.07] hover:bg-white/[0.14] px-7 py-4.5 rounded-xl border border-white/10 hover:border-[#C99A2E]/60 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(201,154,46,0.25)] transition-all duration-300 cursor-default relative overflow-hidden backdrop-blur-md"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-120%] group-hover/chip:translate-x-[120%] transition-transform duration-700 pointer-events-none" />
                                        <span className="relative z-10 tracking-wide group-hover/chip:text-[#E2BA55] transition-colors">{step}</span>
                                    </motion.div>

                                    {idx < data.together.flow.length - 1 && (
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.5 },
                                                show: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { duration: 0.4 }
                                                }
                                            }}
                                            animate={{ x: [0, 6, 0] }}
                                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                            className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-sm relative"
                                        >
                                            <div className="absolute inset-0 rounded-full bg-[#C99A2E]/10 animate-pulse pointer-events-none" />
                                            <ArrowRight size={18} className="text-[#E2BA55] relative z-10" strokeWidth={2.5} />
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 lg:mt-[50px] text-center flex items-center justify-center gap-6 relative z-10"
                >
                    <div className="hidden lg:block w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent" />
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 border border-[#C99A2E]/25 shadow-[0_8px_30px_-4px_rgba(201,154,46,0.18)] backdrop-blur-md relative">
                        <Sparkles size={16} className="text-[#C99A2E]" strokeWidth={2.2} />
                        <p className="text-[20px] lg:text-[23px] font-black tracking-[-0.01em] bg-clip-text text-transparent bg-gradient-to-r from-[#0B1D3A] via-[#C99A2E] to-[#0B1D3A]">
                            {data.footerText}
                        </p>
                    </div>
                    <div className="hidden lg:block w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
