import { useState } from 'react';
import { data } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const NAVY_SURFACE = '#0D2654';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section
            className="w-full min-h-screen flex flex-col items-center py-14 px-5 font-['Inter',sans-serif] relative overflow-hidden text-center"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 w-full z-10"
            >
                <h2 className="text-[2.25rem] font-black tracking-[-0.02em] mb-1 uppercase leading-[1.05] text-white">
                    One Platform.
                </h2>
                <h2 className="text-[2.25rem] font-black tracking-[-0.02em] uppercase leading-[1.05] text-white">
                    <span className="gold-gradient-text">Four Ways</span> to build
                </h2>
                <h2 className="text-[2.25rem] font-black tracking-[-0.02em] uppercase leading-[1.05] text-white">
                    capability.
                </h2>
                <p className="mt-4 text-[13px] font-medium max-w-[300px] mx-auto leading-relaxed" style={{ color: MUTED_BLUE }}>
                    Designed around the way real estate professionals learn and develop.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full flex overflow-x-auto gap-2.5 pb-4 mb-4 z-10 snap-x"
            >
                {data.tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 snap-center px-4 py-3 rounded-[2px] border transition-all duration-300 ${
                                isActive
                                ? 'bg-white/[0.04] border-white/[0.08] shadow-[0_4px_12px_rgba(11,29,58,0.3)]'
                                : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                            }`}
                        >
                            <div className={`font-semibold text-[12px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40'}`}>
                                {tab.id}. {tab.title}
                            </div>
                        </button>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full z-10"
            >
                <div className="rounded-[4px] overflow-hidden safari-shadow border border-white/[0.08] bg-[#0D2654]">
                    <div className="h-[36px] glass-safari-dark flex items-center px-3 border-b border-white/[0.04]">
                        <div className="flex items-center gap-[5px] mr-3">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#FF5F56]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#FEBC2E]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#28C840]"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-[#1C1C1E] rounded-[2px] px-3 py-[4px] flex items-center gap-1.5 border border-white/[0.04] min-w-[140px] justify-center">
                                <Lock size={8} className="text-white/40" />
                                <span className="text-[9px] text-white/50 font-medium tracking-wide">app.fare.academy</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 min-h-[320px] flex flex-col text-left relative" style={{ background: NAVY_SURFACE }}>
                        <AnimatePresence mode="wait">
                            {activeTab === '01' && (
                                <motion.div
                                    key="01"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col relative z-10"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 rounded-[2px] bg-[#6B8AFF]/10 flex items-center justify-center text-[#6B8AFF]">
                                            <BookOpen size={12} strokeWidth={2} />
                                        </div>
                                        <div className="text-[#6B8AFF] text-[8px] font-bold tracking-[0.15em]">KNOWLEDGE BANK</div>
                                    </div>
                                    <div className="text-[16px] font-bold text-white mb-4 mt-2">RERA Regulations</div>
                                    <div className="w-full h-[3px] bg-white/[0.04] rounded-full mb-5 overflow-hidden">
                                        <div className="h-full bg-[#6B8AFF] w-[33%] rounded-full"></div>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-[4px] mb-4 text-[13px] font-medium border border-white/[0.06] text-white floating-card-shadow">
                                        What is the maximum penalty for non-disclosure?
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {['A. 5%', 'B. 10%', 'C. ₹10 lakh', 'D. 3 years'].map((opt, i) => (
                                            <button key={i} className="bg-white/[0.02] border border-white/[0.06] p-3 rounded-[4px] text-left text-[12px] text-white/80 transition-all">
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === '02' && (
                                <motion.div
                                    key="02"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col relative z-10"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 rounded-[2px] bg-[#34D399]/10 flex items-center justify-center text-[#34D399]">
                                            <Target size={12} strokeWidth={2} />
                                        </div>
                                        <div className="text-[#34D399] text-[8px] font-bold tracking-[0.15em]">SKILL PRACTICE</div>
                                    </div>
                                    <div className="text-[16px] font-bold text-white mb-4 mt-2">Mock: Objection Handling</div>
                                    
                                    <div className="bg-white/[0.03] p-4 rounded-[4px] mb-3 text-[12px] border border-white/[0.06] floating-card-shadow flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-[2px] bg-[#34D399]/10 text-[#34D399] flex items-center justify-center font-bold">T</div>
                                        <div>
                                            <div className="font-bold text-white mb-0.5">Priya Mehta</div>
                                            <div className="text-white/40 text-[10px]">Trainer (Speaking)</div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/[0.03] p-4 rounded-[4px] mb-4 text-[12px] border border-white/[0.06] floating-card-shadow flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-[2px] bg-white/[0.05] text-white/80 flex items-center justify-center font-bold">R</div>
                                        <div>
                                            <div className="font-bold text-white mb-0.5">Rahul Sharma</div>
                                            <div className="text-white/40 text-[10px]">Learner (Listening)</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === '03' && (
                                <motion.div
                                    key="03"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col relative z-10"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 rounded-[2px] bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA]">
                                            <BarChart2 size={12} strokeWidth={2} />
                                        </div>
                                        <div className="text-[#A78BFA] text-[8px] font-bold tracking-[0.15em]">FUNCTIONAL SKILLS</div>
                                    </div>
                                    <div className="text-[16px] font-bold text-white mb-4 mt-2">Capability Benchmark</div>
                                    
                                    <div className="bg-white/[0.03] p-5 rounded-[4px] border border-white/[0.06] floating-card-shadow flex flex-col gap-4">
                                        {[
                                            { label: 'Communication', val: 88 },
                                            { label: 'Ethics', val: 91 },
                                            { label: 'Market Knowledge', val: 74 },
                                        ].map((skill, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-[11px] mb-2">
                                                    <span className="text-white/80 font-semibold">{skill.label}</span>
                                                    <span className="text-[#A78BFA] font-bold">{skill.val}%</span>
                                                </div>
                                                <div className="w-full h-[4px] bg-white/[0.04] rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#A78BFA] rounded-full" style={{ width: `${skill.val}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === '04' && (
                                <motion.div
                                    key="04"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col relative z-10"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 rounded-[2px] bg-[#D5AA45]/10 flex items-center justify-center text-[#D5AA45]">
                                            <CheckCircle size={12} strokeWidth={2} />
                                        </div>
                                        <div className="text-[#D5AA45] text-[8px] font-bold tracking-[0.15em]">DAILY HABITS</div>
                                    </div>
                                    <div className="text-[16px] font-bold text-white mb-4 mt-2">Habit Tracker</div>
                                    
                                    <div className="bg-white/[0.03] p-5 rounded-[4px] mb-4 text-[12px] border border-white/[0.06] floating-card-shadow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[16px]">🔥</span>
                                            <span className="font-bold text-[#D5AA45]">12-day streak</span>
                                        </div>
                                        <div className="text-white/60 text-[11px] font-medium">Morning market review</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
