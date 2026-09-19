import { useState } from 'react';
import { data } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Lock, RotateCw, Plus, Menu } from 'lucide-react';

export default function Desktop() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section className="w-full bg-[#f9fafc] min-h-screen text-[#111] flex justify-center py-24 px-12 font-['Inter',sans-serif] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full flex flex-col z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] mb-2 uppercase leading-[1.05]">
                        One Platform.
                    </h2>
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] uppercase leading-[1.05]">
                        <span className="gold-gradient-text">Four Ways</span> to build<br />capability.
                    </h2>
                    <p className="mt-6 text-[#444] font-medium text-[16px] max-w-[500px] leading-relaxed">
                        Designed around the way real estate professionals learn and develop.
                    </p>
                </motion.div>

                <div className="flex gap-12 w-full mt-4">

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-[360px] flex flex-col gap-4"
                    >
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left p-6 rounded-lg transition-all duration-400 flex gap-4 cursor-pointer group ${
                                        isActive
                                        ? 'bg-white luxury-shadow border luxury-border'
                                        : 'bg-transparent border border-transparent hover:bg-black/[0.02]'
                                    }`}
                                >
                                    <span className={`text-xl font-black transition-colors duration-300 ${isActive ? 'text-[#0A1128]' : 'text-[#888] group-hover:text-[#555]'}`}>
                                        {tab.id}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-bold text-[14px] tracking-wide transition-colors duration-300 ${isActive ? 'text-[#111]' : 'text-[#666] group-hover:text-[#333]'}`}>
                                                {tab.title}
                                            </span>
                                        </div>
                                        <span className={`text-[12px] font-medium transition-colors duration-300 ${isActive ? 'text-[#555]' : 'text-[#999]'}`}>
                                            {tab.subtitle}
                                        </span>
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p 
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    className="text-[13px] text-[#555] leading-relaxed overflow-hidden"
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        {/* Realistic Safari Window */}
                        <div className="rounded-xl overflow-hidden luxury-shadow-lg border luxury-border bg-white flex flex-col h-full">
                            
                            {/* Safari Chrome / Toolbar */}
                            <div className="h-[52px] bg-[#f5f5f7] flex items-center px-4 relative border-b border-[#e5e5ea]">
                                {/* Traffic Lights */}
                                <div className="flex items-center gap-[8px] absolute left-4">
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm"></div>
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#FEBC2E] border border-[#D89E24] shadow-sm"></div>
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#27C840] border border-[#1AAB29] shadow-sm"></div>
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex items-center gap-4 absolute left-24 text-[#888]">
                                    <ChevronLeft size={16} strokeWidth={2.5} className="opacity-40" />
                                    <ChevronRight size={16} strokeWidth={2.5} className="opacity-40" />
                                </div>

                                {/* URL Pill */}
                                <div className="flex-1 flex justify-center mx-40">
                                    <div className="bg-white rounded-md px-4 py-1.5 flex items-center justify-center gap-2 min-w-[320px] max-w-[450px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#d1d1d6]">
                                        <Lock size={12} className="text-[#333]" />
                                        <span className="text-[12px] text-[#111] font-medium tracking-wide">fare.app</span>
                                    </div>
                                </div>

                                {/* Right Icons */}
                                <div className="flex items-center gap-4 absolute right-4 text-[#888]">
                                    <RotateCw size={14} strokeWidth={2.5} className="hover:text-[#333] cursor-pointer transition-colors" />
                                    <Plus size={16} strokeWidth={2.5} className="hover:text-[#333] cursor-pointer transition-colors" />
                                    <Menu size={16} strokeWidth={2.5} className="hover:text-[#333] cursor-pointer transition-colors ml-2" />
                                </div>
                            </div>

                            {/* Safari Content Area (Dashboard Preview) */}
                            <div className="bg-[#fcfcfd] flex-1 p-8 relative min-h-[520px]">
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
                                                <div>
                                                    <div className="text-blue-600 text-[10px] font-bold tracking-[0.15em] mb-2">KNOWLEDGE BANK</div>
                                                    <div className="text-[20px] font-bold text-[#111]">RERA Regulations — Module 3</div>
                                                </div>
                                                <div className="bg-blue-50 px-4 py-1.5 rounded-full text-[12px] font-semibold text-blue-700 border border-blue-100">
                                                    Q 4 of 12
                                                </div>
                                            </div>
                                            <div className="w-full h-[4px] bg-[#eee] rounded-full mb-8 overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[33%] rounded-full"></div>
                                            </div>
                                            <div className="bg-white p-6 rounded-lg mb-6 border border-[#eaeaea] luxury-shadow-sm">
                                                <p className="text-[14px] font-medium leading-relaxed text-[#222]">Under RERA, what is the maximum penalty a developer can face for non-disclosure of project details?</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                {['A. 5% of estimated cost', 'B. 10% of project value', 'C. ₹10 lakh flat fine', 'D. 3 years imprisonment'].map((opt, i) => (
                                                    <button key={i} className="bg-white hover:bg-[#fafafa] border border-[#eaeaea] hover:border-blue-300 p-5 rounded-lg text-left text-[13px] text-[#444] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] cursor-pointer font-medium">
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
                                                <div>
                                                    <div className="text-emerald-600 text-[10px] font-bold tracking-[0.15em] mb-2">SKILL PRACTICE</div>
                                                    <div className="text-[20px] font-bold text-[#111]">Mock: Objection Handling</div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                                    <span className="text-[12px] font-semibold text-emerald-700">Live Session</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-5 mb-6">
                                                <div className="flex-1 bg-white p-6 rounded-lg border border-[#eaeaea] luxury-shadow-sm relative overflow-hidden">
                                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[12px] font-bold mb-4">T</div>
                                                    <div className="font-bold text-[14px] mb-1 text-[#111]">Priya Mehta</div>
                                                    <div className="text-[12px] text-[#666] mb-6">Trainer · Certified</div>
                                                    <div className="w-full bg-emerald-50/50 rounded-md p-3 text-[12px] text-emerald-700 border border-emerald-100 font-semibold flex items-center justify-center">Speaking...</div>
                                                </div>
                                                <div className="flex-1 bg-white p-6 rounded-lg border border-[#eaeaea] luxury-shadow-sm relative overflow-hidden">
                                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[12px] font-bold mb-4">R</div>
                                                    <div className="font-bold text-[14px] mb-1 text-[#111]">Rahul Sharma</div>
                                                    <div className="text-[12px] text-[#666] mb-6">Learner · L2</div>
                                                    <div className="w-full bg-[#f9fafc] rounded-md p-3 text-[12px] text-[#666] border border-[#eaeaea] font-medium flex items-center justify-center">Listening</div>
                                                </div>
                                            </div>
                                            <div className="bg-white p-6 rounded-lg border border-[#eaeaea] luxury-shadow-sm">
                                                <div className="text-emerald-600 text-[10px] font-bold tracking-[0.15em] mb-3">SCENARIO</div>
                                                <p className="text-[14px] text-[#444] leading-relaxed font-medium">"The buyer says: 'I'll wait 6 months — prices might drop.' How do you respond without being pushy?"</p>
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
                                                <div>
                                                    <div className="text-indigo-600 text-[10px] font-bold tracking-[0.15em] mb-2">FUNCTIONAL SKILLS</div>
                                                    <div className="text-[20px] font-bold text-[#111]">Capability Benchmark</div>
                                                </div>
                                                <div className="bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-[12px] font-bold text-indigo-700">
                                                    82nd %ile
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-6 bg-white p-8 rounded-lg border border-[#eaeaea] luxury-shadow-sm">
                                                {[
                                                    { label: 'Communication', val: 88, peer: 72 },
                                                    { label: 'Market Knowledge', val: 74, peer: 68 },
                                                    { label: 'Ethics', val: 91, peer: 80 },
                                                    { label: 'Client Mgmt', val: 65, peer: 71 },
                                                    { label: 'Documentation', val: 78, peer: 65 },
                                                ].map((skill, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between text-[12px] mb-3">
                                                            <span className="text-[#333] font-semibold">{skill.label}</span>
                                                            <span className="text-[#888] font-medium">Peer {skill.peer}% <strong className="text-indigo-600 ml-3">{skill.val}%</strong></span>
                                                        </div>
                                                        <div className="w-full h-[6px] bg-[#f0f0f0] rounded-full overflow-hidden relative">
                                                            <div className="absolute top-0 left-0 h-full bg-[#d1d1d6] rounded-full transition-all duration-1000" style={{ width: `${skill.peer}%` }}></div>
                                                            <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${skill.val}%` }}></div>
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
                                                <div>
                                                    <div className="text-amber-600 text-[10px] font-bold tracking-[0.15em] mb-2">DAILY HABITS</div>
                                                    <div className="text-[20px] font-bold text-[#111]">Habit Tracker</div>
                                                </div>
                                                <div className="bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full text-[12px] font-bold text-amber-700 flex items-center gap-1.5">
                                                    🔥 12-day streak
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white p-8 rounded-lg border border-[#eaeaea] luxury-shadow-sm mb-6">
                                                <div className="grid grid-cols-7 gap-3 mb-2">
                                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                                        <div key={i} className="text-[11px] text-center text-[#999] font-bold mb-2">{d}</div>
                                                    ))}
                                                    {Array.from({ length: 28 }).map((_, i) => (
                                                        <div key={i} className={`rounded-md border aspect-square transition-colors duration-300 ${[4, 11, 18, 19, 27].includes(i) ? 'bg-[#fcfcfd] border-[#eee]' : 'bg-amber-400 border-amber-500'}`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white p-5 rounded-lg border border-[#eaeaea] luxury-shadow-sm flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                                    <span className="text-[13px] text-[#222] font-semibold">Morning market review</span>
                                                </div>
                                                <span className="text-[12px] text-amber-600 font-bold">12d 🔥</span>
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
