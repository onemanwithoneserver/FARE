import { useState } from 'react';
import { data } from './data';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section className="w-full bg-[#070b1a] min-h-screen text-white flex flex-col items-center py-16 px-6 font-sans relative overflow-hidden text-center">
            
            <div className="mb-10 w-full z-10">
                <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">
                    One Platform.
                </h2>
                <h2 className="text-4xl font-black tracking-tight uppercase">
                    <span className="text-[#D4AF37]">Four Ways</span> to build<br />capability.
                </h2>
                <p className="mt-4 text-sm text-slate-400 font-medium max-w-[300px] mx-auto">
                    Designed around the way real estate professionals learn and develop.
                </p>
            </div>

            <div className="w-full flex overflow-x-auto gap-3 pb-4 mb-4 z-10 snap-x">
                {data.tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 snap-center px-4 py-3 rounded-lg border transition-all ${
                                isActive 
                                ? 'bg-[#151f38] border-[#3b82f6]/50' 
                                : 'bg-[#10172A]/50 border-white/5'
                            }`}
                        >
                            <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-400'}`}>
                                {tab.id}. {tab.title}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="w-full bg-[#10172A]/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm z-10 min-h-[300px] flex flex-col text-left">
                {activeTab === '01' && (
                    <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col">
                        <div className="text-[#3b82f6] text-[10px] font-bold tracking-wider mb-1">KNOWLEDGE BANK</div>
                        <div className="text-base font-bold text-white mb-4">RERA Regulations</div>
                        
                        <div className="w-full h-1 bg-[#1E293B] rounded-full mb-4 overflow-hidden">
                            <div className="h-full bg-[#3b82f6] w-[33%] rounded-full"></div>
                        </div>
                        
                        <div className="bg-[#1E293B] p-4 rounded-xl mb-4 text-xs font-medium">
                            What is the maximum penalty for non-disclosure?
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                            {['A. 5%', 'B. 10%', 'C. ₹10 lakh', 'D. 3 years'].map((opt, i) => (
                                <button key={i} className="bg-[#1E293B]/50 hover:bg-[#1E293B] border border-white/5 p-3 rounded-lg text-left text-xs text-slate-300">
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === '02' && (
                    <div className="animate-[fadeIn_0.4s_ease-out]">
                        <div className="text-green-400 text-[10px] font-bold tracking-wider mb-1">SKILL PRACTICE</div>
                        <div className="text-base font-bold text-white mb-4">Mock: Objection Handling</div>
                        <div className="bg-[#1E293B] p-4 rounded-xl mb-4 text-xs border border-white/5">
                            Trainer: Priya (Speaking) <br/> Learner: Rahul
                        </div>
                    </div>
                )}
                {activeTab === '03' && (
                    <div className="animate-[fadeIn_0.4s_ease-out]">
                        <div className="text-purple-400 text-[10px] font-bold tracking-wider mb-1">FUNCTIONAL SKILLS</div>
                        <div className="text-base font-bold text-white mb-4">Capability Benchmark</div>
                        <div className="bg-[#1E293B] p-4 rounded-xl mb-4 text-xs border border-white/5 flex flex-col gap-3">
                            <div>Communication: 88%</div>
                            <div>Ethics: 91%</div>
                            <div>Market Knowledge: 74%</div>
                        </div>
                    </div>
                )}
                {activeTab === '04' && (
                    <div className="animate-[fadeIn_0.4s_ease-out]">
                        <div className="text-yellow-500 text-[10px] font-bold tracking-wider mb-1">DAILY HABITS</div>
                        <div className="text-base font-bold text-white mb-4">Habit Tracker</div>
                        <div className="bg-[#1E293B] p-4 rounded-xl mb-4 text-xs border border-white/5">
                            🔥 12-day streak <br/> Morning market review
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
