import { useState } from 'react';
import { data } from './data';

export default function Desktop() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section className="w-full bg-[#060B18] min-h-screen text-white flex justify-center py-20 px-12 font-['Inter',sans-serif] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full flex flex-col z-10">
                <div className="mb-14 animate-fade-in-up">
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] mb-2 uppercase leading-[1.05]">
                        One Platform.
                    </h2>
                    <h2 className="text-[3.5rem] font-black tracking-[-0.02em] uppercase leading-[1.05]">
                        <span className="text-[#D4AF37]">Four Ways</span> to build<br />capability.
                    </h2>
                    <p className="mt-6 text-slate-400 font-medium text-[15px] max-w-[500px] leading-relaxed">
                        Designed around the way real estate professionals learn and develop.
                    </p>
                </div>

                <div className="flex gap-10 w-full mt-4">

                    <div className="w-[340px] flex flex-col gap-3 animate-slide-in-left">
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left p-5 rounded-xl border transition-all duration-400 flex gap-4 cursor-pointer group ${
                                        isActive
                                        ? 'bg-[#111B33] border-[#3b82f6]/20 shadow-[0_0_24px_rgba(59,130,246,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]'
                                        : 'bg-transparent border-transparent hover:bg-white/[0.03]'
                                    }`}
                                >
                                    <span className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#3b82f6]' : 'text-slate-600 group-hover:text-slate-500'}`}>
                                        {tab.id}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-[13px] tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                                                {tab.title}
                                            </span>
                                        </div>
                                        <span className={`text-[11px] mt-1 transition-colors duration-300 ${isActive ? 'text-[#3b82f6]/80' : 'text-slate-600'}`}>
                                            {tab.subtitle}
                                        </span>
                                        {isActive && (
                                            <p className="text-[12px] text-slate-300/80 mt-3.5 leading-relaxed animate-fade-in">
                                                {tab.desc}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex-1 animate-slide-in-right">
                        <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06),0_0_60px_rgba(59,130,246,0.05)]">

                            <div className="h-[52px] bg-gradient-to-b from-[#3D3D3D] to-[#2A2A2A] flex items-center px-4 relative border-b border-white/[0.06]">
                                <div className="flex items-center gap-[7px] mr-6">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#28C840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]"></div>
                                </div>

                                <div className="flex items-center gap-3 mr-4">
                                    <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="bg-[#1A1A1A]/80 rounded-lg px-5 py-[6px] flex items-center gap-2.5 min-w-[300px] justify-center border border-white/[0.06]">
                                        <svg className="w-3 h-3 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        <span className="text-[11px] text-white/40 font-medium">fare.app/dashboard</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 ml-4">
                                    <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                    <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </div>
                            </div>

                            <div className="bg-[#0C1222] p-7 relative min-h-[480px] border-t border-white/[0.02]">
                                <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] pointer-events-none rounded-b-2xl"></div>

                                {activeTab === '01' && (
                                    <div className="animate-fade-in h-full flex flex-col relative z-10">
                                        <div className="flex items-center justify-between mb-7">
                                            <div>
                                                <div className="text-[#3b82f6] text-[10px] font-bold tracking-[0.15em] mb-1.5">KNOWLEDGE BANK</div>
                                                <div className="text-[17px] font-bold text-white">RERA Regulations — Module 3</div>
                                            </div>
                                            <div className="bg-[#1E293B] px-4 py-1.5 rounded-full text-[11px] font-semibold text-slate-300 border border-white/[0.06]">
                                                Q 4 of 12
                                            </div>
                                        </div>
                                        <div className="w-full h-[3px] bg-[#1E293B] rounded-full mb-7 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] w-[33%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]"></div>
                                        </div>
                                        <div className="bg-[#151E30] p-5 rounded-xl mb-5 border border-white/[0.04]">
                                            <p className="text-[13px] font-medium leading-relaxed">Under RERA, what is the maximum penalty a developer can face for non-disclosure of project details?</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['A. 5% of estimated cost', 'B. 10% of project value', 'C. ₹10 lakh flat fine', 'D. 3 years imprisonment'].map((opt, i) => (
                                                <button key={i} className="bg-[#151E30]/60 hover:bg-[#1A2540] border border-white/[0.04] hover:border-[#3b82f6]/20 p-4 rounded-xl text-left text-[13px] text-slate-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.06)] cursor-pointer">
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === '02' && (
                                    <div className="animate-fade-in h-full flex flex-col relative z-10">
                                        <div className="flex items-center justify-between mb-7">
                                            <div>
                                                <div className="text-green-400 text-[10px] font-bold tracking-[0.15em] mb-1.5">SKILL PRACTICE</div>
                                                <div className="text-[17px] font-bold text-white">Mock: Objection Handling</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-[11px] font-semibold text-green-400">Live Session</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1 bg-[#151E30] p-5 rounded-xl border border-white/[0.04] relative overflow-hidden">
                                                <div className="w-9 h-9 rounded-full bg-green-900/40 text-green-400 flex items-center justify-center text-[11px] font-bold mb-3">T</div>
                                                <div className="font-bold text-[13px] mb-1">Priya Mehta</div>
                                                <div className="text-[11px] text-slate-400 mb-5">Trainer · Certified</div>
                                                <div className="w-full bg-[#0C1222] rounded-lg p-2.5 text-[11px] text-green-400 border border-green-500/15 font-medium">Speaking...</div>
                                            </div>
                                            <div className="flex-1 bg-[#151E30] p-5 rounded-xl border border-white/[0.04]">
                                                <div className="w-9 h-9 rounded-full bg-yellow-900/40 text-yellow-400 flex items-center justify-center text-[11px] font-bold mb-3">R</div>
                                                <div className="font-bold text-[13px] mb-1">Rahul Sharma</div>
                                                <div className="text-[11px] text-slate-400 mb-5">Learner · L2</div>
                                                <div className="w-full bg-[#0C1222] rounded-lg p-2.5 text-[11px] text-yellow-400 border border-yellow-500/15 font-medium">Listening</div>
                                            </div>
                                        </div>
                                        <div className="bg-[#151E30]/60 p-5 rounded-xl border border-white/[0.04]">
                                            <div className="text-green-400 text-[10px] font-bold tracking-[0.15em] mb-2.5">SCENARIO</div>
                                            <p className="text-[13px] text-slate-300 leading-relaxed">"The buyer says: 'I'll wait 6 months — prices might drop.' How do you respond without being pushy?"</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === '03' && (
                                    <div className="animate-fade-in h-full flex flex-col relative z-10">
                                        <div className="flex items-center justify-between mb-7">
                                            <div>
                                                <div className="text-purple-400 text-[10px] font-bold tracking-[0.15em] mb-1.5">FUNCTIONAL SKILLS</div>
                                                <div className="text-[17px] font-bold text-white">Capability Benchmark</div>
                                            </div>
                                            <div className="bg-purple-900/25 border border-purple-500/15 px-4 py-1.5 rounded-full text-[11px] font-semibold text-purple-300">
                                                82nd %ile
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            {[
                                                { label: 'Communication', val: 88, peer: 72 },
                                                { label: 'Market Knowledge', val: 74, peer: 68 },
                                                { label: 'Ethics', val: 91, peer: 80 },
                                                { label: 'Client Mgmt', val: 65, peer: 71 },
                                                { label: 'Documentation', val: 78, peer: 65 },
                                            ].map((skill, i) => (
                                                <div key={i}>
                                                    <div className="flex justify-between text-[11px] mb-2.5">
                                                        <span className="text-slate-300 font-medium">{skill.label}</span>
                                                        <span className="text-slate-400">Peer {skill.peer}% <strong className="text-white ml-2">{skill.val}%</strong></span>
                                                    </div>
                                                    <div className="w-full h-[5px] bg-[#1E293B] rounded-full overflow-hidden relative">
                                                        <div className="absolute top-0 left-0 h-full bg-slate-600/60 rounded-full transition-all duration-700" style={{ width: `${skill.peer}%` }}></div>
                                                        <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-700" style={{ width: `${skill.val}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === '04' && (
                                    <div className="animate-fade-in h-full flex flex-col relative z-10">
                                        <div className="flex items-center justify-between mb-5">
                                            <div>
                                                <div className="text-yellow-500 text-[10px] font-bold tracking-[0.15em] mb-1.5">DAILY HABITS</div>
                                                <div className="text-[17px] font-bold text-white">Habit Tracker</div>
                                            </div>
                                            <div className="bg-orange-900/25 border border-orange-500/15 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-orange-400 flex items-center gap-1.5">
                                                🔥 12-day streak
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 flex-1 mb-4">
                                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                                <div key={i} className="text-[10px] text-center text-slate-500 font-bold mb-1">{d}</div>
                                            ))}
                                            {Array.from({ length: 28 }).map((_, i) => (
                                                <div key={i} className={`rounded-lg border border-white/[0.04] aspect-square transition-colors duration-300 ${[4, 11, 18, 19, 27].includes(i) ? 'bg-[#151E30]' : 'bg-yellow-600/25'}`}></div>
                                            ))}
                                        </div>
                                        <div className="bg-[#151E30]/60 p-4 rounded-xl border border-white/[0.04] flex justify-between items-center">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                <span className="text-[12px] text-slate-300 font-medium">Morning market review</span>
                                            </div>
                                            <span className="text-[11px] text-orange-400 font-bold">12d 🔥</span>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
