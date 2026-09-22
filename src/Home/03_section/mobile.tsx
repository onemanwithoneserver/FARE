import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { Building2, GraduationCap, UserCheck, ChevronRight } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, size: number = 18) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2} />;
        return <UserCheck size={size} strokeWidth={2} />;
    };

    const getPersonaAccent = (id: string) => {
        if (id === 'companies') return '#34D399';
        if (id === 'trainers') return '#60A5FA';
        return '#C99A2E';
    };

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const activeAccent = getPersonaAccent(activePersonaId);

    return (
        <section
            className="w-full py-14 px-4 flex flex-col items-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 40%, #F0F4FA 100%)' }}
        >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-radial from-[#DDEAFF]/40 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="w-full max-w-[460px] flex flex-col relative z-10"
            >
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    <motion.div variants={item} className="mb-4">
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border"
                            style={{ color: GOLD, borderColor: `${GOLD}25`, background: `${GOLD}08` }}
                        >
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={item}
                        className={`font-black mb-3 ${
                            language === 'te'
                                ? 'text-[1.45rem] leading-[1.25] tracking-wider py-0.5'
                                : 'text-[1.85rem] leading-[1.05] tracking-[-0.02em] uppercase'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={item} className="text-[13px] font-medium leading-relaxed" style={{ color: '#5A6B82' }}>
                        {data.headline.subtitle}
                    </motion.p>
                </div>

                {/* Tab Controls - horizontal scroll */}
                <motion.div variants={item} className="flex gap-2 w-full mb-6 overflow-x-auto pb-2 snap-x hide-scrollbar">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        const accent = getPersonaAccent(persona.id);

                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`relative flex-shrink-0 snap-start px-4 py-3 rounded-lg flex items-center gap-2.5 transition-all duration-300 cursor-pointer border ${
                                    isActive
                                        ? 'bg-white shadow-[0_3px_12px_rgba(11,29,58,0.08)] border-transparent'
                                        : 'bg-white/60 border-[#E2E8F0]'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab03Mobile"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[50%] rounded-full"
                                        style={{ background: accent }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white transition-all ${
                                        isActive ? 'shadow-sm' : 'opacity-70'
                                    }`}
                                    style={{ background: isActive ? accent : `${accent}80` }}
                                >
                                    {getIcon(persona.id, 16)}
                                </div>
                                <span
                                    className={`font-bold text-[12px] tracking-wide uppercase whitespace-nowrap ${
                                        isActive ? '' : 'opacity-50'
                                    }`}
                                    style={{ color: isActive ? NAVY : '#64748B' }}
                                >
                                    {persona.tag}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Content Area: subTag as list */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <div
                            className="w-full rounded-xl p-6 relative overflow-hidden"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(11, 29, 58, 0.06)',
                                boxShadow: '0 6px 24px -4px rgba(11, 29, 58, 0.06), 0 2px 6px -2px rgba(11, 29, 58, 0.03)'
                            }}
                        >
                            {/* Accent line */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[2.5px]"
                                style={{ background: `linear-gradient(90deg, transparent 5%, ${activeAccent}, transparent 95%)` }}
                            />

                            <div className="relative z-10">
                                {/* Title */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-sm"
                                        style={{ background: activeAccent }}
                                    >
                                        {getIcon(activePersona.id, 18)}
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-black tracking-tight" style={{ color: NAVY }}>
                                            {activePersona.tag}
                                        </h3>
                                        <p className="text-[11px] font-medium" style={{ color: '#7B8DAA' }}>
                                            {activePersona.badge}
                                        </p>
                                    </div>
                                </div>

                                {/* subTag items as a list */}
                                <div className="flex flex-col gap-2.5">
                                    {activePersona.subTag.split(' · ').map((subItem, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.04 * i, duration: 0.35 }}
                                            className="flex items-center gap-3 px-4 py-3.5 rounded-lg"
                                            style={{
                                                background: `linear-gradient(135deg, ${activeAccent}06, ${activeAccent}03)`,
                                                border: `1px solid ${activeAccent}15`
                                            }}
                                        >
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                                                style={{ background: `${activeAccent}15` }}
                                            >
                                                <ChevronRight size={14} strokeWidth={2.5} style={{ color: activeAccent }} />
                                            </div>
                                            <span
                                                className="text-[14px] font-semibold leading-snug"
                                                style={{ color: NAVY }}
                                            >
                                                {subItem.trim()}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-6 pt-5 border-t border-[#E8ECF2]">
                                    <p className="text-[13px] font-medium leading-relaxed mb-4" style={{ color: '#7B8DAA' }}>
                                        {activePersona.desc}
                                    </p>
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 rounded-lg font-bold text-[13px] text-white flex items-center justify-center gap-2 shadow-md active:scale-[0.98] cursor-pointer"
                                        style={{ background: activeAccent }}
                                    >
                                        <span>{activePersona.cta}</span>
                                        <ChevronRight size={16} strokeWidth={2.5} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
