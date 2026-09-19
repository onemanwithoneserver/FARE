import { useState } from 'react';
import { data } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Lock, RotateCw, Plus, Menu, BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const NAVY_SURFACE = '#0D2654';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section
            className="w-full min-h-screen flex justify-center py-24 px-12 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[900px] h-[700px] bg-gradient-radial from-[#0D2654]/60 to-transparent rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full flex flex-col z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] mb-2 uppercase leading-[1.05] text-white">
                        {data.headline.line1}
                    </h2>
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] uppercase leading-[1.05] text-white">
                        <span className="gold-gradient-text">{data.headline.line2}</span> {data.headline.line3}<br />{data.headline.line4}
                    </h2>
                    <p className="mt-6 font-medium text-[16px] max-w-[500px] leading-relaxed" style={{ color: MUTED_BLUE }}>
                        {data.subtitle}
                    </p>
                </motion.div>

                <div className="flex gap-12 w-full mt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-[360px] flex flex-col gap-4"
                    >
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left p-6 rounded-[4px] transition-all duration-400 flex gap-4 cursor-pointer group ${
                                        isActive
                                        ? 'bg-white/[0.04] border border-white/[0.08] luxury-shadow'
                                        : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                                    }`}
                                >
                                    <span className={`text-xl font-black transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/50'}`}>
                                        {tab.id}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-bold text-[14px] tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                                                {tab.title}
                                            </span>
                                        </div>
                                        <span className={`text-[12px] font-medium transition-colors duration-300 ${isActive ? 'text-white/50' : 'text-white/30'}`}>
                                            {tab.subtitle}
                                        </span>
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    className="text-[13px] leading-relaxed overflow-hidden"
                                                    style={{ color: MUTED_BLUE }}
                                                >
                                                    {tab.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        <div className="rounded-[4px] overflow-hidden safari-shadow border border-white/[0.08] flex flex-col h-full bg-[#0D2654]">
                            <div className="h-[44px] glass-safari-dark flex items-center px-4 relative border-b border-white/[0.04]">
                                <div className="flex items-center gap-[8px] absolute left-4">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#27C840] border border-[#1AAB29]"></div>
                                </div>
                                <div className="flex items-center gap-3 absolute left-[88px] text-white/40">
                                    <ChevronLeft size={14} strokeWidth={2.5} />
                                    <ChevronRight size={14} strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 flex justify-center mx-32">
                                    <div className="bg-[#1C1C1E] rounded-[4px] px-4 py-1.5 flex items-center justify-center gap-1.5 min-w-[280px] border border-white/[0.04]">
                                        <Lock size={10} className="text-white/40" />
                                        <span className="text-[11px] text-white/60 font-medium tracking-wide">{data.browser.url}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 absolute right-4 text-white/40">
                                    <RotateCw size={13} strokeWidth={2} />
                                    <Plus size={14} strokeWidth={2} />
                                    <Menu size={14} strokeWidth={2} className="ml-1" />
                                </div>
                            </div>
                            <div className="flex-1 p-8 relative min-h-[520px]" style={{ background: NAVY_SURFACE }}>
                                <AnimatePresence mode="wait">
                                    {activeTab === '01' && (
                                        <motion.div
                                            key="01"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col relative z-10 max-w-[600px] mx-auto"
                                        >
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-[2px] bg-[#6B8AFF]/10 flex items-center justify-center text-[#6B8AFF]">
                                                        <BookOpen size={18} strokeWidth={2} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[#6B8AFF] text-[9px] font-bold tracking-[0.15em] mb-1">{data.browser.content['01'].tag}</div>
                                                        <div className="text-[18px] font-bold text-white">{data.browser.content['01'].title}</div>
                                                    </div>
                                                </div>
                                                <div className="bg-[#6B8AFF]/10 px-3 py-1.5 rounded-[2px] text-[11px] font-semibold text-[#6B8AFF] border border-[#6B8AFF]/20">
                                                    {data.browser.content['01'].progress}
                                                </div>
                                            </div>
                                            <div className="w-full h-[4px] bg-white/[0.04] rounded-full mb-8 overflow-hidden">
                                                <div className="h-full bg-[#6B8AFF] w-[33%] rounded-full"></div>
                                            </div>
                                            <div className="bg-white/[0.03] p-6 rounded-[4px] mb-6 border border-white/[0.06] floating-card-shadow">
                                                <p className="text-[14px] font-medium leading-relaxed text-white">{data.browser.content['01'].question}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {data.browser.content['01'].options.map((opt, i) => (
                                                    <button key={i} className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#6B8AFF]/40 p-4 rounded-[4px] text-left text-[12.5px] text-white/80 transition-all duration-300 font-medium">
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
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col relative z-10 max-w-[600px] mx-auto"
                                        >
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-[2px] bg-[#34D399]/10 flex items-center justify-center text-[#34D399]">
                                                        <Target size={18} strokeWidth={2} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[#34D399] text-[9px] font-bold tracking-[0.15em] mb-1">{data.browser.content['02'].tag}</div>
                                                        <div className="text-[18px] font-bold text-white">{data.browser.content['02'].title}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-[#34D399]/10 px-3 py-1.5 rounded-[2px] border border-[#34D399]/20">
                                                    <div className="w-1.5 h-1.5 bg-[#34D399] rounded-full animate-pulse"></div>
                                                    <span className="text-[11px] font-semibold text-[#34D399]">{data.browser.content['02'].status}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mb-6">
                                                <div className="flex-1 bg-white/[0.03] p-5 rounded-[4px] border border-white/[0.06] floating-card-shadow relative overflow-hidden">
                                                    <div className="w-9 h-9 rounded-[2px] bg-[#34D399]/10 text-[#34D399] flex items-center justify-center text-[12px] font-bold mb-3">T</div>
                                                    <div className="font-bold text-[13px] mb-1 text-white">{data.browser.content['02'].trainer.name}</div>
                                                    <div className="text-[11px] text-white/40 mb-5">{data.browser.content['02'].trainer.role}</div>
                                                    <div className="w-full bg-[#34D399]/10 rounded-[2px] p-2.5 text-[11px] text-[#34D399] border border-[#34D399]/20 font-semibold flex items-center justify-center">Speaking...</div>
                                                </div>
                                                <div className="flex-1 bg-white/[0.03] p-5 rounded-[4px] border border-white/[0.06] floating-card-shadow relative overflow-hidden">
                                                    <div className="w-9 h-9 rounded-[2px] bg-white/[0.05] text-white/80 flex items-center justify-center text-[12px] font-bold mb-3">R</div>
                                                    <div className="font-bold text-[13px] mb-1 text-white">{data.browser.content['02'].learner.name}</div>
                                                    <div className="text-[11px] text-white/40 mb-5">{data.browser.content['02'].learner.role}</div>
                                                    <div className="w-full bg-white/[0.02] rounded-[2px] p-2.5 text-[11px] text-white/50 border border-white/[0.04] font-medium flex items-center justify-center">Listening</div>
                                                </div>
                                            </div>
                                            <div className="bg-white/[0.03] p-6 rounded-[4px] border border-white/[0.06] floating-card-shadow">
                                                <div className="text-[#34D399] text-[9px] font-bold tracking-[0.15em] mb-3">SCENARIO</div>
                                                <p className="text-[13.5px] text-white/80 leading-relaxed font-medium">{data.browser.content['02'].scenario}</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === '03' && (
                                        <motion.div
                                            key="03"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col relative z-10 max-w-[600px] mx-auto"
                                        >
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-[2px] bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA]">
                                                        <BarChart2 size={18} strokeWidth={2} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[#A78BFA] text-[9px] font-bold tracking-[0.15em] mb-1">{data.browser.content['03'].tag}</div>
                                                        <div className="text-[18px] font-bold text-white">{data.browser.content['03'].title}</div>
                                                    </div>
                                                </div>
                                                <div className="bg-[#A78BFA]/10 border border-[#A78BFA]/20 px-3 py-1.5 rounded-[2px] text-[11px] font-bold text-[#A78BFA]">
                                                    {data.browser.content['03'].percentile}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5 bg-white/[0.03] p-8 rounded-[4px] border border-white/[0.06] floating-card-shadow">
                                                {data.browser.content['03'].skills.map((skill, idx) => (
                                                    <div key={idx} className="w-full">
                                                        <div className="flex justify-between items-end mb-2">
                                                            <span className="text-[12px] font-semibold text-white/90">{skill.label}</span>
                                                            <div className="flex gap-4">
                                                                <span className="text-[10px] text-white/40">Peer: {skill.peer}</span>
                                                                <span className="text-[10px] font-bold text-[#A78BFA]">You: {skill.val}</span>
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-[6px] bg-white/[0.04] rounded-full overflow-hidden relative border border-white/[0.02]">
                                                            <div className="absolute top-0 bottom-0 left-0 bg-white/20 rounded-full" style={{ width: `${skill.peer}%` }}></div>
                                                            <div className="absolute top-0 bottom-0 left-0 bg-[#A78BFA] rounded-full shadow-[0_0_8px_rgba(167,139,250,0.5)]" style={{ width: `${skill.val}%` }}></div>
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
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col relative z-10 max-w-[600px] mx-auto"
                                        >
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-[2px] flex items-center justify-center" style={{ background: 'rgba(213,170,69,0.1)', color: '#D5AA45' }}>
                                                        <CheckCircle size={18} strokeWidth={2} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[9px] font-bold tracking-[0.15em] mb-1" style={{ color: '#D5AA45' }}>{data.browser.content['04'].tag}</div>
                                                        <div className="text-[18px] font-bold text-white">{data.browser.content['04'].title}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 border px-3 py-1.5 rounded-[2px]" style={{ borderColor: 'rgba(213,170,69,0.2)', background: 'rgba(213,170,69,0.1)' }}>
                                                    <div className="text-[14px]">🔥</div>
                                                    <span className="text-[11px] font-bold" style={{ color: '#D5AA45' }}>{data.browser.content['04'].streak}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                {data.browser.content['04'].habits.map((habit, idx) => (
                                                    <div key={idx} className="flex items-center justify-between bg-white/[0.03] p-5 rounded-[4px] border border-white/[0.06] floating-card-shadow group hover:bg-white/[0.05] transition-colors">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${habit.status === 'done' ? 'bg-[#D5AA45] border-[#D5AA45]' : 'border-white/20'}`}>
                                                                {habit.status === 'done' && <CheckCircle size={12} className="text-[#0D2654]" strokeWidth={3} />}
                                                            </div>
                                                            <span className={`text-[13px] font-medium transition-colors ${habit.status === 'done' ? 'text-white/40 line-through' : 'text-white/90'}`}>
                                                                {habit.label}
                                                            </span>
                                                        </div>
                                                        {habit.status === 'done' ? (
                                                            <span className="text-[10px] font-bold text-[#D5AA45]">Completed</span>
                                                        ) : (
                                                            <button className="text-[10px] font-bold text-white/30 hover:text-white/80 transition-colors uppercase tracking-wider">
                                                                Mark Done
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
