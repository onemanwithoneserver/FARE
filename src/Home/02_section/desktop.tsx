import { useState } from 'react';
import { data } from './data';

export default function Desktop() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section className="w-full bg-[#070b1a] min-h-screen text-white flex justify-center py-24 px-12 font-sans relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full flex flex-col z-10">
                <div className="mb-16">
                    <h2 className="text-6xl font-black tracking-tight mb-2 uppercase">
                        One Platform.
                    </h2>
                    <h2 className="text-6xl font-black tracking-tight uppercase">
                        <span className="text-[#D4AF37]">Four Ways</span> to build<br />capability.
                    </h2>
                    <p className="mt-8 text-slate-400 font-medium">
                        Designed around the way real estate professionals learn and develop.
                    </p>
                </div>

                <div className="flex gap-12 w-full mt-8">
                    
                    <div className="w-[350px] flex flex-col gap-4">
                        {data.tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button 
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex gap-4 ${
                                        isActive 
                                        ? 'bg-[#151f38] border-[#3b82f6]/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                                        : 'bg-transparent border-transparent hover:bg-white/5'
                                    }`}
                                >
                                    <span className={`text-2xl font-bold ${isActive ? 'text-[#3b82f6]' : 'text-slate-600'}`}>
                                        {tab.id}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-sm tracking-wide ${isActive ? 'text-white' : 'text-slate-400'}`}>
                                                {tab.title}
                                            </span>
                                        </div>
                                        <span className={`text-xs mt-1 ${isActive ? 'text-[#3b82f6]' : 'text-slate-600'}`}>
                                            {tab.subtitle}
                                        </span>
                                        {isActive && (
                                            <p className="text-xs text-slate-300 mt-4 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                                                {tab.desc}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex-1 bg-[#10172A]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden min-h-[500px]">
                        {activeTab === '01' && (
                            <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <div className="text-[#3b82f6] text-xs font-bold tracking-wider mb-1">KNOWLEDGE BANK</div>
                                        <div className="text-lg font-bold text-white">RERA Regulations — Module 3</div>
                                    </div>
                                    <div className="bg-[#1E293B] px-4 py-1.5 rounded-full text-xs font-medium text-slate-300">
                                        Q 4 of 12
                                    </div>
                                </div>
                                <div className="w-full h-1 bg-[#1E293B] rounded-full mb-8 overflow-hidden">
                                    <div className="h-full bg-[#3b82f6] w-[33%] rounded-full"></div>
                                </div>
                                <div className="bg-[#1E293B] p-6 rounded-xl mb-6">
                                    <p className="text-sm font-medium">Under RERA, what is the maximum penalty a developer can face for non-disclosure of project details?</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {['A. 5% of estimated cost', 'B. 10% of project value', 'C. ₹10 lakh flat fine', 'D. 3 years imprisonment'].map((opt, i) => (
                                        <button key={i} className="bg-[#1E293B]/50 hover:bg-[#1E293B] border border-white/5 p-4 rounded-xl text-left text-sm text-slate-300 transition-colors">
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === '02' && (
                            <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <div className="text-green-400 text-xs font-bold tracking-wider mb-1">SKILL PRACTICE</div>
                                        <div className="text-lg font-bold text-white">Mock: Objection Handling</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-medium text-green-400">Live Session</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1 bg-[#1E293B] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                                        <div className="w-8 h-8 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center text-xs font-bold mb-3">T</div>
                                        <div className="font-bold text-sm mb-1">Priya Mehta</div>
                                        <div className="text-xs text-slate-400 mb-6">Trainer · Certified</div>
                                        <div className="w-full bg-[#0F172A] rounded-md p-2 text-xs text-green-400 border border-green-500/20">Speaking...</div>
                                    </div>
                                    <div className="flex-1 bg-[#1E293B] p-5 rounded-xl border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-yellow-900/50 text-yellow-400 flex items-center justify-center text-xs font-bold mb-3">R</div>
                                        <div className="font-bold text-sm mb-1">Rahul Sharma</div>
                                        <div className="text-xs text-slate-400 mb-6">Learner · L2</div>
                                        <div className="w-full bg-[#0F172A] rounded-md p-2 text-xs text-yellow-400 border border-yellow-500/20">Listening</div>
                                    </div>
                                </div>
                                <div className="bg-[#1E293B]/50 p-5 rounded-xl border border-white/5">
                                    <div className="text-green-400 text-xs font-bold tracking-wider mb-2">SCENARIO</div>
                                    <p className="text-sm text-slate-300">"The buyer says: 'I'll wait 6 months — prices might drop.' How do you respond without being pushy?"</p>
                                </div>
                            </div>
                        )}

                        {activeTab === '03' && (
                            <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <div className="text-purple-400 text-xs font-bold tracking-wider mb-1">FUNCTIONAL SKILLS</div>
                                        <div className="text-lg font-bold text-white">Capability Benchmark</div>
                                    </div>
                                    <div className="bg-purple-900/30 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-medium text-purple-300">
                                        82nd %ile
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    {[
                                        { label: 'Communication', val: 88, peer: 72 },
                                        { label: 'Market Knowledge', val: 74, peer: 68 },
                                        { label: 'Ethics', val: 91, peer: 80 },
                                        { label: 'Client Mgmt', val: 65, peer: 71 },
                                        { label: 'Documentation', val: 78, peer: 65 },
                                    ].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs mb-2">
                                                <span className="text-slate-300">{skill.label}</span>
                                                <span className="text-slate-400">Peer {skill.peer}% <strong className="text-white ml-2">{skill.val}%</strong></span>
                                            </div>
                                            <div className="w-full h-1.5 bg-[#1E293B] rounded-full overflow-hidden relative">
                                                <div className="absolute top-0 left-0 h-full bg-slate-600 rounded-full" style={{ width: `${skill.peer}%` }}></div>
                                                <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: `${skill.val}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === '04' && (
                            <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-yellow-500 text-xs font-bold tracking-wider mb-1">DAILY HABITS</div>
                                        <div className="text-lg font-bold text-white">Habit Tracker</div>
                                    </div>
                                    <div className="bg-orange-900/30 border border-orange-500/20 px-3 py-1.5 rounded-full text-xs font-medium text-orange-400 flex items-center gap-1.5">
                                        🔥 12-day streak
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 flex-1 mb-4">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                        <div key={i} className="text-[10px] text-center text-slate-500 font-bold mb-1">{d}</div>
                                    ))}
                                    {Array.from({ length: 28 }).map((_, i) => (
                                        <div key={i} className={`rounded-md border border-white/5 aspect-square ${[4, 11, 18, 19, 27].includes(i) ? 'bg-[#1E293B]' : 'bg-yellow-600/30'}`}></div>
                                    ))}
                                </div>
                                <div className="bg-[#1E293B]/50 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span className="text-xs text-slate-300">Morning market review</span>
                                    </div>
                                    <span className="text-xs text-orange-400 font-bold">12d 🔥</span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
