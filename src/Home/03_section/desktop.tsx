import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, BookOpen, Target } from 'lucide-react';

export default function Desktop() {
    return (
        <section className="w-full bg-[#fdfdfd] py-28 px-12 flex justify-center font-['Inter',sans-serif]">
            <div className="max-w-[1400px] w-full flex flex-col items-center">

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-16 flex flex-col items-start max-w-[1200px]"
                >
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                        <span className="text-[#A88645] font-bold text-[12px] tracking-[0.25em] uppercase">
                            Your Journey
                        </span>
                    </div>
                    <h2 className="text-[4rem] leading-[0.95] font-black tracking-[-0.02em] text-[#111] uppercase">
                        What brings<br/>you to FARE?
                    </h2>
                </motion.div>

                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-6">

                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} scale={1.01} transitionSpeed={2000}>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full bg-[#111] rounded-lg p-10 flex flex-col relative overflow-hidden group cursor-pointer border border-[#333] hover:border-[#D4AF37]/30 transition-all duration-500 luxury-shadow-dark"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="inline-block border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-md mb-10 w-max bg-[#D4AF37]/[0.08] relative z-10">
                                For Real Estate Companies
                            </div>

                            <div className="w-full bg-[#1a1a1a] rounded-md p-6 border border-[#333] mb-10 luxury-shadow relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[11px] font-bold text-[#888] tracking-[0.15em]">TEAM CAPABILITY</span>
                                    <span className="bg-emerald-500/10 text-emerald-400 text-[11px] font-bold px-3 py-1 rounded border border-emerald-500/20 flex items-center gap-1">
                                        ↑ +12%
                                    </span>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {[
                                        { label: 'Sales Team A', val: 84 },
                                        { label: 'Channel Partners', val: 67 },
                                        { label: 'New Associates', val: 43 }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-[13px] text-[#eee] mb-2 font-medium">
                                                <span>{stat.label}</span>
                                                <span>{stat.val}%</span>
                                            </div>
                                            <div className="w-full h-[4px] bg-[#333] rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]" style={{ width: `${stat.val}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <h3 className="text-[2rem] font-black text-white mb-3 leading-[1.1]">BUILD A<br/>STRONGER TEAM.</h3>
                                <p className="text-[#999] text-[14px] font-medium mb-8 leading-relaxed max-w-[80%]">
                                    Train, develop and benchmark your people with a platform built specifically for real estate.
                                </p>
                                <div className="text-[#D4AF37] font-bold text-[14px] flex items-center gap-2 group-hover:gap-4 transition-all duration-400">
                                    Explore for Companies <ArrowRight size={18} className="transition-transform duration-400" />
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>

                    <div className="flex flex-col gap-6">

                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} scale={1.01} transitionSpeed={2000} className="flex-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-full bg-white rounded-lg p-10 flex flex-col border border-[#eaeaea] group cursor-pointer hover:border-blue-200 transition-all duration-500 luxury-shadow"
                            >
                                <div className="inline-block border border-blue-200 text-blue-700 bg-blue-50 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-md mb-8 w-max">
                                    For Real Estate Trainers
                                </div>

                                <div className="w-full bg-white rounded-md p-5 border border-[#eaeaea] mb-8 luxury-shadow-sm">
                                    <div className="text-[11px] font-bold text-[#888] tracking-[0.15em] mb-4">COURSE BUILDER</div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between items-center bg-[#fcfcfd] p-4 rounded-md border border-[#eee] hover:bg-blue-50/50 transition-colors duration-200">
                                            <div className="flex items-center gap-3 text-[#111]">
                                                <BookOpen size={16} className="text-blue-600" />
                                                <span className="text-[13px] font-bold">RERA Essentials · Module 1</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-emerald-600">Active</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-[#fcfcfd] p-4 rounded-md border border-[#eee] hover:bg-blue-50/50 transition-colors duration-200">
                                            <div className="flex items-center gap-3 text-[#111]">
                                                <Target size={16} className="text-emerald-600" />
                                                <span className="text-[13px] font-bold">Objection Handling Mock</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-emerald-600">Active</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-[1.75rem] font-black text-[#111] mb-3 leading-[1.1]">TURN EXPERTISE<br/>INTO LEARNING.</h3>
                                    <p className="text-[#666] text-[14px] font-medium mb-6 leading-relaxed">
                                        Create courses, quizzes and practical mock-based learning experiences.
                                    </p>
                                    <div className="text-[#111] font-bold text-[14px] flex items-center gap-2 group-hover:gap-4 transition-all duration-400">
                                        Explore for Trainers <ArrowRight size={18} className="transition-transform duration-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-[#fcfcfd] rounded-lg p-10 flex flex-col border border-[#eaeaea] relative overflow-hidden group cursor-pointer opacity-90 hover:opacity-100 transition-all duration-500 luxury-shadow-sm hover:border-[#ddd]"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="inline-block border border-[#ddd] text-[#666] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-md bg-white">
                                    For Professionals
                                </div>
                                <div className="bg-amber-50 text-amber-700 text-[11px] font-bold px-3 py-1 rounded uppercase tracking-[0.1em] border border-amber-200">
                                    Coming Soon
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-[1.75rem] font-black text-[#aaa] mb-3 leading-[1.1]">BUILD THE SKILLS<br/>THAT MATTER.</h3>
                                <p className="text-[#999] text-[14px] font-medium mb-6 leading-relaxed">
                                    Learn, practise and benchmark your capabilities.
                                </p>
                                <div className="text-[#888] font-bold text-[14px] flex items-center gap-2">
                                    Join the Waitlist <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
