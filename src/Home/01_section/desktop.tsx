import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { BookOpen, Target, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';

export default function Desktop() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <section className="w-full bg-[#f9fafc] min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-[#D4AF37]/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#3b82f6]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full px-12 py-16 flex items-center justify-between gap-16 relative z-10">

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-start max-w-[650px]"
                >
                    <motion.div variants={item} className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                        <span className="text-[#A88645] font-bold text-[12px] tracking-[0.25em] uppercase">
                            Finishing Academy for Real Estate
                        </span>
                    </motion.div>

                    <h1 className="text-[5.5rem] leading-[0.92] font-black tracking-[-0.03em] mb-10 text-[#111]">
                        <motion.span variants={item} className="block">LEARN.</motion.span>
                        <motion.span variants={item} className="block gold-gradient-text">PRACTISE.</motion.span>
                        <motion.span variants={item} className="block">BENCHMARK.</motion.span>
                        <motion.span variants={item} className="block text-[#ccc]">BUILD HABITS.</motion.span>
                    </h1>

                    <motion.div variants={item} className="mb-10">
                        <p className="text-[20px] text-[#444] font-medium mb-3 leading-relaxed">
                            A custom learning platform built specifically for real estate.
                        </p>
                        <p className="text-[14px] text-[#888] font-medium tracking-wide">
                            Knowledge • Skills • Capability • Habits
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center gap-5">
                        <button className="bg-[#111] text-white font-semibold px-8 py-4 rounded-md hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 luxury-shadow flex items-center gap-3">
                            Explore FARE
                            <ArrowRight size={18} />
                        </button>
                        <button className="bg-white border luxury-border text-[#111] font-semibold px-8 py-4 rounded-md hover:bg-[#fcfcfd] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 luxury-shadow-sm">
                            How It Works
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="mt-14 text-[12px] font-bold text-[#aaa] uppercase tracking-[0.15em]">
                        For Real Estate Companies • Trainers • Professionals
                    </motion.div>
                </motion.div>

                <div className="flex-1 relative h-[600px] w-full flex items-center justify-end">
                    <Tilt 
                        tiltMaxAngleX={4} 
                        tiltMaxAngleY={4} 
                        perspective={1200}
                        scale={1.02}
                        transitionSpeed={2500}
                        className="relative w-[85%] h-[500px]"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full glass-safari-dark rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05),0_0_60px_rgba(59,130,246,0.1)] relative"
                        >
                            <div className="h-10 bg-[#333] w-full flex items-center px-4 gap-2 border-b border-white/[0.05]">
                                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#27C840] border border-[#1AAB29]"></div>
                            </div>
                            <div className="p-8 h-full flex flex-col gap-6 opacity-80 bg-[#1e1e1e]">
                                <div className="w-2/3 h-8 bg-white/[0.05] rounded-md"></div>
                                <div className="w-full flex gap-4">
                                    <div className="flex-1 h-32 bg-white/[0.05] rounded-md"></div>
                                    <div className="flex-1 h-32 bg-white/[0.05] rounded-md"></div>
                                </div>
                                <div className="w-full h-48 bg-white/[0.05] rounded-md"></div>
                            </div>
                        </motion.div>
                    </Tilt>

                    {/* Floating Luxury Elements */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        className="absolute top-12 left-4 bg-white p-5 rounded-lg luxury-shadow animate-float border border-[#eee] flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-md bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
                            <BookOpen size={20} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="font-bold text-[#111] text-[15px]">Knowledge Bank</div>
                            <div className="text-[12px] text-[#888] font-medium">Quizzes & Resources</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                        className="absolute top-36 -right-6 bg-white p-5 rounded-lg luxury-shadow animate-float-delayed border border-[#eee] flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-md bg-emerald-50/80 flex items-center justify-center text-emerald-600 border border-emerald-100/50">
                            <Target size={20} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="font-bold text-[#111] text-[15px]">Skill Practice</div>
                            <div className="text-[12px] text-[#888] font-medium">Live Mocks</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                        className="absolute bottom-32 left-0 bg-white p-5 rounded-lg luxury-shadow animate-float border border-[#eee] flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-md bg-indigo-50/80 flex items-center justify-center text-indigo-600 border border-indigo-100/50">
                            <BarChart2 size={20} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="font-bold text-[#111] text-[15px]">Functional Skills</div>
                            <div className="text-[12px] text-[#888] font-medium">Capability Benchmarks</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                        className="absolute -bottom-6 right-10 bg-white p-5 rounded-lg luxury-shadow animate-float-delayed border border-[#eee] flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-md bg-amber-50/80 flex items-center justify-center text-amber-600 border border-amber-100/50">
                            <CheckCircle size={20} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="font-bold text-[#111] text-[15px]">Daily Habits</div>
                            <div className="text-[12px] text-[#888] font-medium">Habit Tracker</div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
