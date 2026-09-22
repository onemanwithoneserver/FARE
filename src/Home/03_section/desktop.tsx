import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    Building2, GraduationCap, UserCheck, ChevronRight
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, size: number = 22) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2} />;
        return <UserCheck size={size} strokeWidth={2} />;
    };

    const getPersonaColor = (id: string) => {
        if (id === 'companies') return '#0B1D3A';
        if (id === 'trainers') return '#1E40AF';
        return '#92400E';
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
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const activeAccent = getPersonaAccent(activePersonaId);

    return (
        <section
            className="w-full py-20 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 40%, #F0F4FA 100%)' }}
        >
            {/* Subtle background decorations */}
            <div className="absolute top-0 right-[15%] w-[600px] h-[600px] bg-gradient-radial from-[#DDEAFF]/40 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(${NAVY} 0.5px, transparent 0.5px)`,
                    backgroundSize: '28px 28px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                {/* Header */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center mb-14"
                >
                    <motion.div variants={item} className="mb-5">
                        <span
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border"
                            style={{ color: GOLD, borderColor: `${GOLD}25`, background: `${GOLD}08` }}
                        >
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={item}
                        className={`font-black mb-4 ${
                            language === 'te'
                                ? 'text-[2.25rem] xl:text-[2.65rem] leading-[1.25] tracking-wider py-1'
                                : 'text-[3.25rem] leading-[1.05] tracking-[-0.02em] uppercase'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={item} className="text-[16px] font-medium leading-[1.65] max-w-[700px]" style={{ color: '#5A6B82' }}>
                        {data.headline.subtitle}
                    </motion.p>
                </motion.div>

                {/* Tab Controls */}
                <div className="flex justify-center gap-3 mb-10">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        const accent = getPersonaAccent(persona.id);

                        return (
                            <motion.button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative flex items-center gap-3 px-6 py-3.5 rounded-lg text-left transition-all duration-300 cursor-pointer border ${
                                    isActive
                                        ? 'bg-white shadow-[0_4px_20px_rgba(11,29,58,0.08),0_1px_3px_rgba(11,29,58,0.06)] border-transparent'
                                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:shadow-[0_2px_8px_rgba(11,29,58,0.04)]'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab03"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] w-[60%] rounded-full"
                                        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}80)` }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                        isActive ? 'text-white shadow-md' : 'text-white/80'
                                    }`}
                                    style={{ background: isActive ? accent : `${accent}90` }}
                                >
                                    {getIcon(persona.id, 20)}
                                </div>
                                <span
                                    className={`font-bold text-[14px] tracking-wide uppercase transition-colors duration-300 ${
                                        isActive ? '' : 'opacity-60'
                                    }`}
                                    style={{ color: isActive ? NAVY : '#64748B' }}
                                >
                                    {persona.tag}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Content Area: subTag as list */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[900px] mx-auto"
                    >
                        <div
                            className="w-full rounded-xl p-10 relative overflow-hidden"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(11, 29, 58, 0.06)',
                                boxShadow: '0 8px 32px -4px rgba(11, 29, 58, 0.06), 0 2px 8px -2px rgba(11, 29, 58, 0.03)'
                            }}
                        >
                            {/* Decorative accent line at top */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px]"
                                style={{ background: `linear-gradient(90deg, transparent 10%, ${activeAccent}, transparent 90%)` }}
                            />

                            {/* Subtle radial glow */}
                            <div
                                className="absolute -top-20 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-[0.06]"
                                style={{ background: activeAccent }}
                            />

                            <div className="relative z-10">
                                {/* Section title */}
                                <div className="flex items-center gap-3 mb-8">
                                    <div
                                        className="w-11 h-11 rounded-lg flex items-center justify-center text-white shadow-md"
                                        style={{ background: activeAccent }}
                                    >
                                        {getIcon(activePersona.id, 22)}
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-black tracking-tight" style={{ color: NAVY }}>
                                            {activePersona.tag}
                                        </h3>
                                        <p className="text-[13px] font-medium" style={{ color: '#7B8DAA' }}>
                                            {activePersona.badge}
                                        </p>
                                    </div>
                                </div>

                                {/* subTag items as a list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activePersona.subTag.split(' · ').map((subItem, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="group flex items-center gap-3.5 px-5 py-4 rounded-lg transition-all duration-300 cursor-default hover:shadow-[0_4px_16px_rgba(11,29,58,0.05)]"
                                            style={{
                                                background: `linear-gradient(135deg, ${activeAccent}06, ${activeAccent}03)`,
                                                border: `1px solid ${activeAccent}15`
                                            }}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                                                style={{ background: `${activeAccent}15` }}
                                            >
                                                <ChevronRight size={16} strokeWidth={2.5} style={{ color: activeAccent }} />
                                            </div>
                                            <span
                                                className="text-[15px] font-semibold leading-snug"
                                                style={{ color: NAVY }}
                                            >
                                                {subItem.trim()}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-[#E8ECF2] flex items-center justify-between">
                                    <p className="text-[14px] font-medium" style={{ color: '#7B8DAA' }}>
                                        {activePersona.desc}
                                    </p>
                                    <motion.button
                                        whileHover={{ x: 4 }}
                                        className="shrink-0 ml-6 text-[13px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                        style={{ color: activeAccent }}
                                    >
                                        {activePersona.cta} <ChevronRight size={16} strokeWidth={2.5} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
