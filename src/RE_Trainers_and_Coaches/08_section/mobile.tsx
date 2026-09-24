import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight, Zap, Sparkles } from 'lucide-react';
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
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const listContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const listItem: Variants = {
        hidden: { opacity: 0, x: -8 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full py-12 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 45%, #EFF5FF 85%, #F4F8FF 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[-60px] w-[320px] h-[320px] bg-gradient-radial from-[#C99A2E]/15 to-transparent rounded-full blur-[60px] pointer-events-none z-0"
            />
            <motion.div
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [1.06, 1, 1.06] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-[-60px] w-[280px] h-[280px] bg-gradient-radial from-[#3B82F6]/15 to-transparent rounded-full blur-[50px] pointer-events-none z-0"
            />

            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '36px 36px'
                }}
            />

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-40px" }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <motion.div variants={item} className="mb-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C99A2E]/30 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] shadow-[0_2px_10px_rgba(201,154,46,0.1)] backdrop-blur-sm">
                            <Sparkles size={12} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#C99A2E]">
                                {data.overline}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={item}
                        className="text-[1.95rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.03em] mb-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#0B1D3A] via-[#162E56] to-[#0B1D3A]"
                    >
                        {data.headline}
                    </motion.h2>

                    <motion.h2
                        variants={item}
                        className="text-[1.95rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-[#C99A2E] via-[#E2BA55] to-[#B88A22] drop-shadow-[0_2px_16px_rgba(201,154,46,0.25)]"
                    >
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col gap-5 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-40px" }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-6 relative overflow-hidden shadow-[0_10px_30px_-10px_rgba(11,29,58,0.08)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-bl-full blur-[25px] pointer-events-none" />
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C99A2E] to-transparent opacity-80" />

                        <div className="flex items-center gap-3.5 mb-5 relative z-10">
                            <div className="w-13 h-13 rounded bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(201,154,46,0.35)] shrink-0">
                                <User size={24} strokeWidth={2.4} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C99A2E] block mb-0.5">
                                    Your Contribution
                                </span>
                                <h3 className="text-[21px] font-bold text-[#0B1D3A]">
                                    {data.youBring.title}
                                </h3>
                            </div>
                        </div>

                        <motion.div
                            variants={listContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className="flex flex-col gap-3 relative z-10"
                        >
                            {data.youBring.items.map((it, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={listItem}
                                    className="flex items-start gap-3 text-[14.5px] font-medium text-[#475569]"
                                >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C99A2E] shrink-0 shadow-[0_0_6px_rgba(201,154,46,0.8)]" />
                                    <span className="leading-snug">{it}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-3xl p-6 relative overflow-hidden shadow-[0_10px_30px_-10px_rgba(11,29,58,0.08)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/10 rounded-bl-full blur-[25px] pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#3B82F6] to-transparent opacity-80" />

                        <div className="flex items-center gap-3.5 mb-5 relative z-10 flex-row-reverse text-right">
                            <div className="w-13 h-13 rounded bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(59,130,246,0.35)] shrink-0">
                                <Server size={24} strokeWidth={2.4} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3B82F6] block mb-0.5">
                                    Our Infrastructure
                                </span>
                                <h3 className="text-[21px] font-bold text-[#0B1D3A]">
                                    {data.fareBrings.title}
                                </h3>
                            </div>
                        </div>

                        <motion.div
                            variants={listContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className="flex flex-col gap-3 relative z-10"
                        >
                            {data.fareBrings.items.map((it, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={listItem}
                                    className="flex items-start gap-3 text-[14.5px] font-medium text-[#475569] flex-row-reverse text-right"
                                >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                                    <span className="leading-snug">{it}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* FARE brings the audience pill - mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 mb-6 text-center flex items-center justify-center relative z-10 w-full"
                >
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 border border-[#C99A2E]/30 shadow-[0_4px_16px_rgba(201,154,46,0.18)] backdrop-blur-md">
                        <Sparkles size={14} className="text-[#C99A2E]" strokeWidth={2.2} />
                        <p className="text-[17px] sm:text-[19px] font-black tracking-[-0.01em] bg-clip-text text-transparent bg-gradient-to-r from-[#0B1D3A] via-[#C99A2E] to-[#0B1D3A]">
                            {data.footerText}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl flex flex-col items-center relative shadow-[0_20px_45px_rgba(11,29,58,0.4)] mb-8 z-20"
                >
                    {/* Inner wrapper for overflow-hidden backgrounds */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 pointer-events-none" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0F2751 50%, #132D5F 100%)' }}>
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E]/80 to-transparent" />
                        <div className="absolute top-0 right-0 w-36 h-36 bg-[#C99A2E]/15 rounded-full blur-[35px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#3B82F6]/15 rounded-full blur-[35px] pointer-events-none" />
                    </div>

                    {/* = node on top of the dark card */}
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#C99A2E] to-[#B88A22] border-[3px] border-white shadow-lg flex items-center justify-center z-30 font-black text-white text-xl leading-none">
                        =
                    </div>

                    <div className="p-6 flex flex-col items-center relative w-full">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.08] shadow-inner backdrop-blur-md mb-6 relative z-10">
                        <Zap size={14} className="text-[#E2BA55] animate-pulse" />
                        <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] text-center">
                            {data.together.title}
                        </h3>
                    </div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="flex flex-col items-center gap-3 w-full relative z-10"
                    >
                        {data.together.flow.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 w-full">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 15, scale: 0.95 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                    className="text-[15px] font-bold text-white bg-white/[0.08] px-5 py-3.5 rounded-xl border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] w-full text-center tracking-wide backdrop-blur-md relative overflow-hidden"
                                >
                                    <span className="relative z-10">{step}</span>
                                </motion.div>

                                {idx < data.together.flow.length - 1 && (
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                        className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 shadow-sm relative"
                                    >
                                        <ArrowRight size={15} className="text-[#E2BA55] rotate-90" strokeWidth={2.5} />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
                </motion.div>
            </div>
        </section>
    );
}
