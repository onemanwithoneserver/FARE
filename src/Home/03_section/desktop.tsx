import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { data } from './data';

const MUTED_SLATE = '#5A6E8C';

export default function Desktop() {
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string) => {
        if (id === 'companies') return <Building2 size={20} />;
        if (id === 'trainers') return <GraduationCap size={20} />;
        return <UserCheck size={20} />;
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    return (
        <section
            className="w-full py-20 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FB 100%)' }}
        >
            <motion.div 
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#EEF4FF]/70 to-transparent rounded-full blur-[140px] pointer-events-none"
            />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-gradient-radial from-[#FFF7E6]/80 to-transparent rounded-full blur-[140px] pointer-events-none"
            />

            <div className="max-w-[1300px] w-full flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full mb-10 flex flex-col items-center text-center max-w-[800px]"
                >
                    <h2 className="text-[3.25rem] leading-[1.05] font-black tracking-[-0.02em] uppercase text-[#0B1D3A] mb-3.5">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>
                    <p className="text-[15.5px] font-medium leading-relaxed max-w-[600px]" style={{ color: MUTED_SLATE }}>
                        {data.headline.subtitle}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex gap-3 w-full max-w-[840px] mb-8 p-1.5 rounded-[10px] bg-[#EEF2F6] border border-[#0B1D3A]/[0.06] shadow-inner"
                >
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-1 py-3 px-5 rounded-[8px] flex items-center justify-center gap-2.5 transition-all duration-300 font-bold text-[13px] cursor-pointer relative ${
                                    isActive
                                    ? 'bg-white text-[#0B1D3A] border border-[#0B1D3A]/[0.1] shadow-md scale-[1.01]'
                                    : 'text-[#5A6E8C] hover:text-[#0B1D3A] hover:bg-white/50'
                                }`}
                            >
                                <span style={{ color: isActive ? persona.color : 'inherit' }}>
                                    {getIcon(persona.id)}
                                </span>
                                <span>{persona.tag}</span>
                            </button>
                        );
                    })}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full grid grid-cols-12 gap-7 items-stretch"
                    >
                        <motion.div 
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-5 flex flex-col justify-between p-8 lg:p-9 rounded-[10px] bg-white border border-[#0B1D3A]/[0.08] shadow-[0_12px_40px_rgba(11,29,58,0.06)] relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 text-[10.5px] font-black tracking-[0.18em] uppercase px-3 py-1.5 rounded-[4px] mb-5 border"
                                     style={{ color: activePersona.color, borderColor: `${activePersona.color}35`, background: `${activePersona.color}10` }}>
                                    <span>{activePersona.badge}</span>
                                </div>

                                <h3 className="text-[26px] font-black text-[#0B1D3A] leading-tight mb-3.5 tracking-tight">
                                    {activePersona.title}
                                </h3>

                                <p className="text-[13.5px] font-medium leading-relaxed mb-6" style={{ color: MUTED_SLATE }}>
                                    {activePersona.desc}
                                </p>

                                <div className="flex flex-col gap-2.5 mb-6">
                                    {activePersona.features.map((feat, i) => (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i }}
                                            className="flex items-center gap-2.5 text-[12.5px] text-[#2C3E55] font-medium"
                                        >
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 border"
                                                 style={{ borderColor: `${activePersona.color}40`, background: `${activePersona.color}15`, color: activePersona.color }}>
                                                <CheckCircle size={11} strokeWidth={2.5} />
                                            </div>
                                            <span>{feat}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-[#0B1D3A]/[0.08]">
                                {activePersona.id === 'professionals' ? (
                                    waitlistJoined ? (
                                        <div className="p-3.5 rounded-[6px] bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2.5 text-[#059669] text-[12.5px] font-bold">
                                            <ShieldCheck size={18} />
                                            <span>You are registered for VIP priority early access!</span>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleJoinWaitlist} className="flex gap-2">
                                            <input
                                                type="email"
                                                required
                                                value={waitlistEmail}
                                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                                placeholder="Enter your work email"
                                                className="flex-1 bg-[#F8FAFC] border border-[#0B1D3A]/[0.12] rounded-[6px] px-3.5 py-2.5 text-[12.5px] text-[#0B1D3A] placeholder-[#5A6E8C]/60 focus:outline-none focus:border-[#C99A2E]"
                                            />
                                            <button
                                                type="submit"
                                                className="px-5 py-2.5 rounded-[6px] font-black text-[12.5px] text-[#071A49] transition-all cursor-pointer whitespace-nowrap shadow-sm hover:brightness-105"
                                                style={{ background: 'linear-gradient(90deg, #C99A2E, #E2C068)' }}
                                            >
                                                Join Now
                                            </button>
                                        </form>
                                    )
                                ) : (
                                    <button
                                        className="w-full py-3.5 px-6 rounded-[6px] font-black text-[13px] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:brightness-110"
                                        style={{ background: `linear-gradient(90deg, ${activePersona.color}, ${activePersona.color}dd)` }}
                                    >
                                        <span>{activePersona.cta}</span>
                                        <ArrowRight size={15} />
                                    </button>
                                )}
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-7 p-8 lg:p-9 rounded-[10px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] shadow-[0_12px_40px_rgba(11,29,58,0.04)] flex flex-col justify-center relative overflow-hidden"
                        >
                            {activePersona.id === 'companies' && activePersona.metrics && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center border border-[#2563EB]/20 shadow-sm">
                                                <TrendingUp size={19} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#2563EB] tracking-widest">{activePersona.metrics.title}</div>
                                                <div className="text-[17px] font-bold text-[#0B1D3A]">Live Benchmark Dashboard</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#059669]/10 text-[#059669] border border-[#059669]/20">
                                            {activePersona.metrics.trend}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-5 bg-white p-6 rounded-[8px] border border-[#0B1D3A]/[0.06] shadow-sm">
                                        {activePersona.metrics.teams.map((team, idx) => (
                                            <div key={idx} className="w-full">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[13px] font-bold text-[#0B1D3A]">{team.name}</span>
                                                    <div className="flex gap-4">
                                                        <span className="text-[11px] font-medium text-[#5A6E8C]">Industry Benchmark: {team.peer}%</span>
                                                        <span className="text-[12px] font-black text-[#2563EB]">FARE Score: {team.score}%</span>
                                                    </div>
                                                </div>
                                                <div className="w-full h-2 bg-[#EEF2F6] rounded-full overflow-hidden relative">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${team.peer}%` }} transition={{ duration: 1 }} className="absolute top-0 bottom-0 left-0 bg-[#CBD5E1] rounded-full" />
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${team.score}%` }} transition={{ duration: 1.2, delay: 0.1 * idx }} className="absolute top-0 bottom-0 left-0 bg-[#2563EB] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'trainers' && activePersona.courses && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#059669]/10 text-[#059669] flex items-center justify-center border border-[#059669]/20 shadow-sm">
                                                <GraduationCap size={19} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#059669] tracking-widest">COURSE ENGINE & MOCKS</div>
                                                <div className="text-[17px] font-bold text-[#0B1D3A]">Active Coach Labs</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#059669]/10 text-[#059669] border border-[#059669]/20">
                                            Certified Mentors
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        {activePersona.courses.map((course, idx) => (
                                            <motion.div 
                                                key={idx} 
                                                whileHover={{ scale: 1.01 }}
                                                className="bg-white hover:border-[#059669]/40 p-4.5 rounded-[8px] border border-[#0B1D3A]/[0.06] transition-all flex items-center justify-between shadow-sm group"
                                            >
                                                <div>
                                                    <div className="text-[13px] font-bold text-[#0B1D3A] group-hover:text-[#059669] transition-colors mb-0.5">
                                                        {course.title}
                                                    </div>
                                                    <div className="text-[11px] text-[#5A6E8C]">{course.learners} Active Learners Completed</div>
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#FEF3C7] border border-[#FDE68A] text-[11px] font-bold text-[#B45309]">
                                                    <Star size={12} fill="#B45309" />
                                                    <span>{course.rating}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activePersona.id === 'professionals' && activePersona.milestones && (
                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[6px] bg-[#C99A2E]/10 text-[#C99A2E] flex items-center justify-center border border-[#C99A2E]/20 shadow-sm">
                                                <ShieldCheck size={19} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-[#C99A2E] tracking-widest">CAREER MILESTONE ROADMAP</div>
                                                <div className="text-[17px] font-bold text-[#0B1D3A]">Professional Mastery Progression</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1 rounded-[4px] bg-[#C99A2E]/10 text-[#C99A2E] border border-[#C99A2E]/20">
                                            Top Tier Pathway
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        {activePersona.milestones.map((m, idx) => (
                                            <motion.div 
                                                key={idx} 
                                                whileHover={{ scale: 1.01 }}
                                                className="bg-white p-4 rounded-[8px] border border-[#0B1D3A]/[0.06] flex items-center justify-between shadow-sm"
                                            >
                                                <div>
                                                    <div className="text-[13.5px] font-bold text-[#0B1D3A] mb-0.5">{m.level}</div>
                                                    <div className="text-[11px] text-[#5A6E8C]">{m.req}</div>
                                                </div>
                                                <span className={`text-[10px] font-black px-2.5 py-1 rounded-[4px] uppercase tracking-wider ${
                                                    m.status === 'Completed' 
                                                    ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]' 
                                                    : m.status === 'In Progress' 
                                                    ? 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]' 
                                                    : 'bg-[#F1F5F9] text-[#64748B]'
                                                }`}>
                                                    {m.status}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
