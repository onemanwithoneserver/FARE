import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { ArrowRight, BookOpen, Target } from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    return (
        <section
            className="w-full py-28 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: '#F8F9FC' }}
        >
            {/* Very faint background elements */}
            <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#EEF4FF]/50 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-16 flex flex-col items-start max-w-[1200px]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                        <span className="font-semibold text-[10.5px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
                            Your Journey
                        </span>
                    </div>
                    <h2 className="text-[4rem] leading-[0.95] font-black tracking-[-0.02em] uppercase" style={{ color: NAVY }}>
                        What brings<br />you to FARE?
                    </h2>
                </motion.div>

                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-6">

                    {/* CARD 1: For Companies (Deep Navy) */}
                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1500} scale={1.01} transitionSpeed={2500}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full rounded-[4px] p-10 flex flex-col relative overflow-hidden group cursor-pointer transition-all duration-500 luxury-shadow-dark"
                            style={{ background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="inline-block text-[10.5px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-[2px] mb-10 w-max relative z-10"
                                 style={{ color: GOLD_MID, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}>
                                For Real Estate Companies
                            </div>

                            <div className="w-full rounded-[4px] p-6 mb-10 relative z-10"
                                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-bold tracking-[0.15em] text-white/40">TEAM CAPABILITY</span>
                                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-[2px] flex items-center gap-1"
                                          style={{ color: '#34D399', background: '#34D39915', border: '1px solid #34D39930' }}>
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
                                            <div className="flex justify-between text-[12px] text-white/90 mb-2 font-medium">
                                                <span>{stat.label}</span>
                                                <span style={{ color: GOLD_MID }}>{stat.val}%</span>
                                            </div>
                                            <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                                                <div className="h-full rounded-full transition-all duration-1000"
                                                     style={{ width: `${stat.val}%`, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <h3 className="text-[2.25rem] font-black text-white mb-3 leading-[1.05]">BUILD A<br />STRONGER TEAM.</h3>
                                <p className="text-[14px] font-medium mb-8 leading-relaxed max-w-[85%]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                    Train, develop and benchmark your people with a platform built specifically for real estate.
                                </p>
                                <div className="font-bold text-[13.5px] flex items-center gap-2 group-hover:gap-3 transition-all duration-400"
                                     style={{ color: GOLD_MID }}>
                                    Explore for Companies <ArrowRight size={16} className="transition-transform duration-400" />
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>

                    <div className="flex flex-col gap-6">
                        {/* CARD 2: For Trainers (Light Glass) */}
                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1500} scale={1.01} transitionSpeed={2500} className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-full bg-white rounded-[4px] p-10 flex flex-col group cursor-pointer transition-all duration-500 luxury-shadow"
                                style={{ border: '1px solid rgba(11,29,58,0.06)' }}
                            >
                                <div className="inline-block text-[10.5px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-[2px] mb-8 w-max"
                                     style={{ color: '#2563EB', background: '#2563EB10', border: '1px solid #2563EB20' }}>
                                    For Real Estate Trainers
                                </div>

                                <div className="w-full bg-[#F8F9FC] rounded-[4px] p-5 mb-8"
                                     style={{ border: '1px solid rgba(11,29,58,0.04)' }}>
                                    <div className="text-[10px] font-bold tracking-[0.15em] mb-4" style={{ color: MUTED_BLUE }}>COURSE BUILDER</div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between items-center bg-white p-3.5 rounded-[2px] border transition-colors duration-200"
                                             style={{ borderColor: 'rgba(11,29,58,0.06)' }}>
                                            <div className="flex items-center gap-3">
                                                <BookOpen size={15} color="#2563EB" />
                                                <span className="text-[12.5px] font-bold" style={{ color: NAVY }}>RERA Essentials · Module 1</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-[#34D399]">Active</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white p-3.5 rounded-[2px] border transition-colors duration-200"
                                             style={{ borderColor: 'rgba(11,29,58,0.06)' }}>
                                            <div className="flex items-center gap-3">
                                                <Target size={15} color="#34D399" />
                                                <span className="text-[12.5px] font-bold" style={{ color: NAVY }}>Objection Handling Mock</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-[#34D399]">Active</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-[2rem] font-black mb-3 leading-[1.05]" style={{ color: NAVY }}>TURN EXPERTISE<br />INTO LEARNING.</h3>
                                    <p className="text-[14px] font-medium mb-6 leading-relaxed max-w-[90%]" style={{ color: '#3A4A63' }}>
                                        Create courses, quizzes and practical mock-based learning experiences.
                                    </p>
                                    <div className="font-bold text-[13.5px] flex items-center gap-2 group-hover:gap-3 transition-all duration-400"
                                         style={{ color: NAVY }}>
                                        Explore for Trainers <ArrowRight size={16} className="transition-transform duration-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>

                        {/* CARD 3: For Professionals (Muted Light) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="rounded-[4px] p-10 flex flex-col relative overflow-hidden group cursor-pointer transition-all duration-500 luxury-shadow-sm hover:shadow-md"
                            style={{ background: '#F0F2F7', border: '1px solid rgba(11,29,58,0.04)' }}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="inline-block text-[10.5px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-[2px] bg-white"
                                     style={{ color: MUTED_BLUE, border: '1px solid rgba(11,29,58,0.06)' }}>
                                    For Professionals
                                </div>
                                <div className="text-[10px] font-bold px-2.5 py-1 rounded-[2px] uppercase tracking-[0.1em]"
                                     style={{ color: '#D97706', background: '#FEF3C7', border: '1px solid #FDE68A' }}>
                                    Coming Soon
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-[2rem] font-black mb-3 leading-[1.05]" style={{ color: MUTED_BLUE }}>BUILD THE SKILLS<br />THAT MATTER.</h3>
                                <p className="text-[14px] font-medium mb-6 leading-relaxed" style={{ color: '#64748B' }}>
                                    Learn, practise and benchmark your capabilities.
                                </p>
                                <div className="font-bold text-[13.5px] flex items-center gap-2 group-hover:gap-3 transition-all duration-400"
                                     style={{ color: MUTED_BLUE }}>
                                    Join the Waitlist <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
