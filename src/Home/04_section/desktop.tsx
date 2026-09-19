import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { data } from './data';
import bgImage from '../../assets/bg-04.jpg';

export default function Desktop() {
    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section
            className="w-full min-h-screen py-20 px-12 flex items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
        >
            <div 
                className="absolute inset-0 z-0"
                style={{ 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            <div className="absolute inset-0 bg-[#041029]/60 z-0"></div>

            <motion.div 
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0B2A6B]/50 to-transparent -rotate-45 transform -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-50px] right-[10%] w-[600px] h-[350px] border-b-[1.5px] border-[#C99A2E]/60 rounded-[100%] rotate-12 z-0 pointer-events-none blur-[0.5px]"
            ></motion.div>
            <motion.div 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[400px] bg-gradient-to-tl from-[#071A49] to-transparent -rotate-12 z-0 pointer-events-none"
            ></motion.div>

            {/* Top Left Corner Labels with Beside & Below Animated Lines */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: false }} className="absolute top-6 left-6 xl:top-8 xl:left-8 z-50 flex flex-col pointer-events-none">
                <div className="flex gap-3.5 items-stretch">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1.05, 0.85] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[2px] rounded-full bg-gradient-to-b from-[#C99A2E] via-[#F4D068] to-transparent origin-top"
                    />
                    <div className="flex flex-col gap-1 text-[10px] xl:text-[11px] font-extrabold tracking-[0.25em] text-white/90 text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {data.cornerLabels.topLeft.map((t, i) => <motion.span key={i} variants={itemVariant}>{t}</motion.span>)}
                    </div>
                </div>
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.75, 1.05, 0.75] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="h-[2px] w-full mt-2.5 rounded-full bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-transparent origin-left"
                />
            </motion.div>
            
            {/* Bottom Left Corner Labels with Beside & Below Animated Lines */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: false }} className="absolute bottom-6 left-6 xl:bottom-8 xl:left-8 z-50 flex flex-col pointer-events-none">
                <div className="flex gap-3.5 items-stretch">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1.05, 0.85] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[2px] rounded-full bg-gradient-to-t from-[#C99A2E] via-[#F4D068] to-transparent origin-bottom"
                    />
                    <div className="flex flex-col gap-1 text-[10px] xl:text-[11px] font-extrabold tracking-[0.25em] text-white/90 text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-0.5">
                        {data.cornerLabels.bottomLeft.map((t, i) => <motion.span key={i} variants={itemVariant}>{t}</motion.span>)}
                    </div>
                </div>
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.75, 1.05, 0.75] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="h-[2px] w-full mt-2.5 rounded-full bg-gradient-to-r from-[#C99A2E] via-[#F4D068] to-transparent origin-left"
                />
            </motion.div>

            {/* Top Right Corner Labels with Beside & Below Animated Lines */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: false }} className="absolute top-6 right-6 xl:top-8 xl:right-8 z-50 flex flex-col items-end pointer-events-none">
                <div className="flex gap-3.5 items-stretch justify-end">
                    <div className="flex flex-col items-end gap-1 text-[10px] xl:text-[11px] font-extrabold tracking-[0.25em] text-white/90 text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {data.cornerLabels.topRight.map((t, i) => <motion.span key={i} variants={itemVariant}>{t}</motion.span>)}
                    </div>
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1.05, 0.85] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[2px] rounded-full bg-gradient-to-b from-[#C99A2E] via-[#F4D068] to-transparent origin-top"
                    />
                </div>
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.75, 1.05, 0.75] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="h-[2px] w-full mt-2.5 rounded-full bg-gradient-to-l from-[#C99A2E] via-[#F4D068] to-transparent origin-right"
                />
            </motion.div>

            {/* Bottom Right Corner Labels with Beside & Below Animated Lines */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: false }} className="absolute bottom-6 right-6 xl:bottom-8 xl:right-8 z-50 flex flex-col items-end pointer-events-none">
                <div className="flex gap-3.5 items-stretch justify-end">
                    <div className="flex flex-col items-end gap-1 text-[10px] xl:text-[11px] font-extrabold tracking-[0.25em] text-white/90 text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-0.5">
                        {data.cornerLabels.bottomRight.map((t, i) => <motion.span key={i} variants={itemVariant}>{t}</motion.span>)}
                    </div>
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1.05, 0.85] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[2px] rounded-full bg-gradient-to-t from-[#C99A2E] via-[#F4D068] to-transparent origin-bottom"
                    />
                </div>
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.75, 1.05, 0.75] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="h-[2px] w-full mt-2.5 rounded-full bg-gradient-to-l from-[#C99A2E] via-[#F4D068] to-transparent origin-right"
                />
            </motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                className="max-w-[1060px] xl:max-w-[1120px] w-full relative z-20"
            >
                <div
                    className="w-full rounded-[4px] pt-16 pb-12 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_50px_rgba(4,16,41,0.5)]"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(8, 22, 51, 0.95) 0%, rgba(5, 15, 38, 0.98) 100%)', 
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
                    }}
                >
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[100px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-5 mb-7 relative z-10">
                        <div className="h-[1px] w-14 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] text-[#E2C068] uppercase">{data.academyText}</span>
                        <div className="h-[1px] w-14 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[3.2rem] lg:text-[3.8rem] leading-[1.05] font-black tracking-tight text-white uppercase mb-6 w-full relative z-10">
                        {data.headline.line1} <span className="text-[#C99A2E]">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[15px] font-medium max-w-[700px] leading-[1.6] mb-12 text-white/70 px-10 relative z-10">
                        {data.headline.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex items-center justify-center gap-5 mb-16 px-10 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(213,170,69,0.4)', y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="font-bold text-[13px] px-8 py-3.5 rounded-[4px] transition-all duration-300 flex items-center gap-2.5 cursor-pointer text-[#071A49] uppercase tracking-[0.05em]"
                            style={{ background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)', boxShadow: '0 10px 20px -5px rgba(213,170,69,0.2)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent text-white font-semibold text-[14px] px-8 py-3.5 rounded-[4px] border border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            {data.buttons.secondary}
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariant} className="flex items-center justify-center w-full px-8 relative z-10">
                        {data.trustBadges.map((badge, i) => (
                            <motion.div 
                                key={i} 
                                className="flex items-center"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <div className="flex items-start gap-4 px-8">
                                    <motion.div 
                                        className="mt-0.5"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {i === 0 && <ShieldCheck size={26} strokeWidth={2} className="text-[#34D399]" />}
                                        {i === 1 && <Users size={26} strokeWidth={2} className="text-[#6B8AFF]" />}
                                        {i === 2 && <BarChart2 size={26} strokeWidth={2} className="text-[#D5AA45]" />}
                                    </motion.div>
                                    <div className="text-left">
                                        <div className="text-[13px] font-bold text-white mb-1.5 leading-[1.3]">{badge.title}</div>
                                        <div className="text-[12px] text-white/50 font-medium">{badge.subtitle}</div>
                                    </div>
                                </div>
                                {i !== 2 && (
                                    <div className="h-12 w-[1px] bg-white/10 mx-2"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
