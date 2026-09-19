import { useState } from 'react';
import { data } from './data';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section className="w-full bg-[#060B18] min-h-screen text-white flex flex-col items-center py-14 px-5 font-['Inter',sans-serif] relative overflow-hidden text-center">

            <div className="mb-8 w-full z-10 animate-fade-in-up">
                <h2 className="text-[2.25rem] font-black tracking-[-0.02em] mb-2 uppercase leading-[1.05]">
                    One Platform.
                </h2>
                <h2 className="text-[2.25rem] font-black tracking-[-0.02em] uppercase leading-[1.05]">
                    <span className="text-[#D4AF37]">Four Ways</span> to build<br />capability.
                </h2>
                <p className="mt-4 text-[13px] text-slate-400 font-medium max-w-[300px] mx-auto leading-relaxed">
                    Designed around the way real estate professionals learn and develop.
                </p>
            </div>

            <div className="w-full flex overflow-x-auto gap-2.5 pb-3 mb-4 z-10 snap-x animate-fade-in-up delay-200">
                {data.tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 snap-center px-4 py-2.5 rounded-lg border transition-all duration-300 ${
                                isActive
                                ? 'bg-[#111B33] border-[#3b82f6]/30 shadow-[0_0_16px_rgba(59,130,246,0.08)]'
                                : 'bg-[#0C1222]/50 border-white/[0.04]'
                            }`}
                        >
                            <div className={`font-bold text-[12px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                                {tab.id}. {tab.title}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="w-full z-10 animate-fade-in-up delay-300">
                <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">
                    <div className="h-[36px] bg-gradient-to-b from-[#3D3D3D] to-[#2A2A2A] flex items-center px-3 border-b border-white/[0.05]">
                        <div className="flex items-center gap-[5px] mr-3">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#FF5F57]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#FEBC2E]"></div>
                            <div className="w-[8px] h-[8px] rounded-full bg-[#28C840]"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-[#1A1A1A]/80 rounded-md px-3 py-[3px] flex items-center gap-1.5 border border-white/[0.05]">
                                <svg className="w-2.5 h-2.5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                <span className="text-[9px] text-white/35 font-medium">fare.app</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0C1222] p-4 min-h-[280px] flex flex-col text-left relative">
                        <div className="absolute inset-0 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] pointer-events-none"></div>

                        {activeTab === '01' && (
                            <div className="animate-fade-in h-full flex flex-col relative z-10">
                                <div className="text-[#3b82f6] text-[9px] font-bold tracking-[0.15em] mb-1">KNOWLEDGE BANK</div>
                                <div className="text-[15px] font-bold text-white mb-4">RERA Regulations</div>
                                <div className="w-full h-[3px] bg-[#1E293B] rounded-full mb-4 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] w-[33%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
                                </div>
                                <div className="bg-[#151E30] p-3.5 rounded-xl mb-3.5 text-[12px] font-medium border border-white/[0.03]">
                                    What is the maximum penalty for non-disclosure?
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    {['A. 5%', 'B. 10%', 'C. ₹10 lakh', 'D. 3 years'].map((opt, i) => (
                                        <button key={i} className="bg-[#151E30]/60 hover:bg-[#1A2540] border border-white/[0.04] p-3 rounded-lg text-left text-[12px] text-slate-300 transition-all duration-300">
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === '02' && (
                            <div className="animate-fade-in relative z-10">
                                <div className="text-green-400 text-[9px] font-bold tracking-[0.15em] mb-1">SKILL PRACTICE</div>
                                <div className="text-[15px] font-bold text-white mb-4">Mock: Objection Handling</div>
                                <div className="bg-[#151E30] p-3.5 rounded-xl mb-3.5 text-[12px] border border-white/[0.04]">
                                    Trainer: Priya (Speaking) <br/> Learner: Rahul
                                </div>
                            </div>
                        )}
                        {activeTab === '03' && (
                            <div className="animate-fade-in relative z-10">
                                <div className="text-purple-400 text-[9px] font-bold tracking-[0.15em] mb-1">FUNCTIONAL SKILLS</div>
                                <div className="text-[15px] font-bold text-white mb-4">Capability Benchmark</div>
                                <div className="bg-[#151E30] p-3.5 rounded-xl mb-3.5 text-[12px] border border-white/[0.04] flex flex-col gap-2.5">
                                    <div>Communication: 88%</div>
                                    <div>Ethics: 91%</div>
                                    <div>Market Knowledge: 74%</div>
                                </div>
                            </div>
                        )}
                        {activeTab === '04' && (
                            <div className="animate-fade-in relative z-10">
                                <div className="text-yellow-500 text-[9px] font-bold tracking-[0.15em] mb-1">DAILY HABITS</div>
                                <div className="text-[15px] font-bold text-white mb-4">Habit Tracker</div>
                                <div className="bg-[#151E30] p-3.5 rounded-xl mb-3.5 text-[12px] border border-white/[0.04]">
                                    🔥 12-day streak <br/> Morning market review
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
