import { useState } from 'react';
import { data } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const NAVY_SURFACE = '#0D2654';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section
            className="w-full flex flex-col items-center justify-center py-16 px-6 font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-[400px] flex flex-col z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                >
                    <h2 className="text-[2.25rem] font-black tracking-[-0.02em] uppercase leading-[1.05] text-white">
                        <span className="block">{data.headline.line1}</span>
                        <span className="gold-gradient-text block">{data.headline.line2}</span>
                        <span className="block">{data.headline.line3}</span>
                        <span className="block">{data.headline.line4}</span>
                    </h2>
                    <p className="mt-4 font-medium text-[13px] leading-relaxed mx-auto" style={{ color: MUTED_BLUE }}>
                        {data.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3 w-full mb-10"
                >
                    {data.tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left p-4 rounded-[4px] transition-all duration-300 flex flex-col gap-2 ${
                                    isActive
                                    ? 'bg-white/[0.04] border border-white/[0.08] shadow-lg'
                                    : 'bg-transparent border border-white/[0.04] hover:bg-white/[0.02]'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-sm font-black transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/30'}`}>
                                        {tab.id}
                                    </span>
                                    <span className={`font-bold text-[11px] tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                                        {tab.title}
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[11px] leading-relaxed mt-2" style={{ color: MUTED_BLUE }}>
                                                {tab.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                >
                    <div className="rounded-[4px] overflow-hidden safari-shadow border border-white/[0.08] flex flex-col bg-[#0D2654] text-left">
                        <div className="h-8 glass-safari-dark flex items-center px-3 relative border-b border-white/[0.04]">
                            <div className="flex items-center gap-1.5">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#FF5F56]"></div>
                                <div className="w-[8px] h-[8px] rounded-full bg-[#FEBC2E]"></div>
                                <div className="w-[8px] h-[8px] rounded-full bg-[#27C840]"></div>
                            </div>
                            <div className="flex-1 flex justify-center mx-4">
                                <div className="text-[8px] text-white/50 font-medium tracking-wide bg-white/[0.04] px-3 py-1 rounded-[4px] border border-white/[0.02]">
                                    {data.browser.url}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-5 relative min-h-[360px]" style={{ background: NAVY_SURFACE }}>
                            <AnimatePresence mode="wait">
                                {activeTab === '01' && (
                                    <motion.div
                                        key="01"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center gap-2 mb-5">
                                            <div className="w-8 h-8 rounded-[2px] bg-[#6B8AFF]/10 flex items-center justify-center text-[#6B8AFF]">
                                                <BookOpen size={14} strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="text-[#6B8AFF] text-[7px] font-bold tracking-[0.15em] mb-0.5">{data.browser.content['01'].tag}</div>
                                                <div className="text-[13px] font-bold text-white">{data.browser.content['01'].title}</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/[0.03] p-4 rounded-[4px] mb-4 border border-white/[0.06]">
                                            <p className="text-[11px] font-medium leading-relaxed text-white">{data.browser.content['01'].question}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {data.browser.content['01'].options.map((opt, i) => (
                                                <div key={i} className="bg-white/[0.02] border border-white/[0.06] p-3 rounded-[4px] text-[10px] text-white/80 font-medium">
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {activeTab === '02' && (
                                    <motion.div
                                        key="02"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center gap-2 mb-5">
                                            <div className="w-8 h-8 rounded-[2px] bg-[#34D399]/10 flex items-center justify-center text-[#34D399]">
                                                <Target size={14} strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="text-[#34D399] text-[7px] font-bold tracking-[0.15em] mb-0.5">{data.browser.content['02'].tag}</div>
                                                <div className="text-[13px] font-bold text-white">{data.browser.content['02'].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 mb-4">
                                            <div className="w-full bg-white/[0.03] p-4 rounded-[4px] border border-white/[0.06] flex items-center justify-between">
                                                <div>
                                                    <div className="font-bold text-[11px] text-white">{data.browser.content['02'].trainer.name}</div>
                                                    <div className="text-[9px] text-white/40">{data.browser.content['02'].trainer.role}</div>
                                                </div>
                                                <div className="bg-[#34D399]/10 px-2 py-1 rounded-[2px] text-[8px] text-[#34D399] border border-[#34D399]/20 font-semibold">Speaking...</div>
                                            </div>
                                            <div className="w-full bg-white/[0.03] p-4 rounded-[4px] border border-white/[0.06] flex items-center justify-between">
                                                <div>
                                                    <div className="font-bold text-[11px] text-white">{data.browser.content['02'].learner.name}</div>
                                                    <div className="text-[9px] text-white/40">{data.browser.content['02'].learner.role}</div>
                                                </div>
                                                <div className="bg-white/[0.02] px-2 py-1 rounded-[2px] text-[8px] text-white/50 border border-white/[0.04] font-medium">Listening</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/[0.03] p-4 rounded-[4px] border border-white/[0.06]">
                                            <div className="text-[#34D399] text-[8px] font-bold tracking-[0.15em] mb-2">SCENARIO</div>
                                            <p className="text-[11px] text-white/80 leading-relaxed font-medium">{data.browser.content['02'].scenario}</p>
                                        </div>
                                    </motion.div>
                                )}
                                {activeTab === '03' && (
                                    <motion.div
                                        key="03"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-8 h-8 rounded-[2px] bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA]">
                                                <BarChart2 size={14} strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="text-[#A78BFA] text-[7px] font-bold tracking-[0.15em] mb-0.5">{data.browser.content['03'].tag}</div>
                                                <div className="text-[13px] font-bold text-white">{data.browser.content['03'].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 bg-white/[0.03] p-5 rounded-[4px] border border-white/[0.06]">
                                            {data.browser.content['03'].skills.map((skill, idx) => (
                                                <div key={idx} className="w-full">
                                                    <div className="flex justify-between items-end mb-2">
                                                        <span className="text-[10px] font-semibold text-white/90">{skill.label}</span>
                                                        <div className="flex gap-2">
                                                            <span className="text-[8px] text-white/40">P: {skill.peer}</span>
                                                            <span className="text-[8px] font-bold text-[#A78BFA]">Y: {skill.val}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-[4px] bg-white/[0.04] rounded-full overflow-hidden relative">
                                                        <div className="absolute top-0 bottom-0 left-0 bg-white/20 rounded-full" style={{ width: `${skill.peer}%` }}></div>
                                                        <div className="absolute top-0 bottom-0 left-0 bg-[#A78BFA] rounded-full" style={{ width: `${skill.val}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {activeTab === '04' && (
                                    <motion.div
                                        key="04"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-[2px] flex items-center justify-center" style={{ background: 'rgba(213,170,69,0.1)', color: '#D5AA45' }}>
                                                    <CheckCircle size={14} strokeWidth={2} />
                                                </div>
                                                <div>
                                                    <div className="text-[7px] font-bold tracking-[0.15em] mb-0.5" style={{ color: '#D5AA45' }}>{data.browser.content['04'].tag}</div>
                                                    <div className="text-[13px] font-bold text-white">{data.browser.content['04'].title}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 border px-2 py-1 rounded-[2px]" style={{ borderColor: 'rgba(213,170,69,0.2)', background: 'rgba(213,170,69,0.1)' }}>
                                                <span className="text-[9px] font-bold" style={{ color: '#D5AA45' }}>{data.browser.content['04'].streak}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {data.browser.content['04'].habits.map((habit, idx) => (
                                                <div key={idx} className="flex items-center justify-between bg-white/[0.03] p-4 rounded-[4px] border border-white/[0.06]">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${habit.status === 'done' ? 'bg-[#D5AA45] border-[#D5AA45]' : 'border-white/20'}`}>
                                                            {habit.status === 'done' && <CheckCircle size={9} className="text-[#0D2654]" strokeWidth={3} />}
                                                        </div>
                                                        <span className={`text-[10px] font-medium ${habit.status === 'done' ? 'text-white/40 line-through' : 'text-white/90'}`}>
                                                            {habit.label}
                                                        </span>
                                                    </div>
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
        </section>
    );
}
