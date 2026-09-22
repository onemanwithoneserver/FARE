import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { 
  Clock, 
  MapPin, 
  Building2, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  Megaphone, 
  Briefcase, 
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  User,
  MessageSquare,
  CheckCircle,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getData } from './data';
import contactHero from '../assets/contact_us_hero.jpg';

const GOLD = '#C99A2E';

type ReasonId = 'platform' | 'growth' | 'business' | 'careers';

const reasonIcons: Record<ReasonId, typeof GraduationCap> = {
  platform: GraduationCap,
  growth: TrendingUp,
  business: Megaphone,
  careers: Briefcase
};

export default function ContactUsMobile() {
  const { language } = useLanguage();
  const fullData = getData(language);
  const heroData = fullData.hero;
  const formData = fullData.form;
  const sidebarData = fullData.sidebar;

  const [selectedReason, setSelectedReason] = useState<ReasonId>('careers');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const currentReasonData = formData.reasons.find(r => r.id === selectedReason) || formData.reasons[0];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(sidebarData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleAddTag = (tag: string) => {
    setMessage(prev => {
      if (prev.includes(tag)) return prev;
      return prev ? `${prev} | ${tag}` : tag;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`FARE-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <div className="w-full flex flex-col font-['Outfit'] overflow-hidden">
      <section
        className="w-full -mt-8 flex items-center justify-center overflow-hidden relative"
        style={{ background: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
      >
        <motion.div
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-[-100px] w-[350px] h-[350px] bg-gradient-radial from-[#DBEAFE]/40 to-transparent rounded-full blur-[80px] pointer-events-none z-0"
        />

        <div className="w-full relative z-10 px-4 py-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left relative z-10"
          >
            <motion.div variants={item} className="mb-4">
              <div className="px-3.5 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] flex items-center gap-2 backdrop-blur-md shadow-xs">
                <div className="w-4.5 h-4.5 rounded-full bg-[#C99A2E] flex items-center justify-center text-white shadow-xs">
                  <Sparkles size={10} className="text-white" />
                </div>
                <span className="font-bold text-[10.5px] tracking-[0.16em] uppercase" style={{ color: GOLD }}>
                  {heroData.badge}
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-black text-[#0B1D3A] text-[1.85rem] sm:text-[2.25rem] leading-[1.15] mb-4"
            >
              {heroData.headlineLine1} <br />
              <span className="text-[#C99A2E] relative inline-block">
                {heroData.headlineLine2}
                <svg className="absolute w-full h-[6px] -bottom-1 left-0 text-[#C99A2E]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="font-medium text-[#475569] text-[14.5px] leading-[1.6] mb-6"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-2 w-full mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-[#0B1D3A]/[0.08] shadow-xs text-[#0B1D3A]">
                <div className="w-5 h-5 rounded bg-[#F59E0B] flex items-center justify-center shadow-xs shrink-0">
                  <ShieldCheck size={12} className="text-white" />
                </div>
                <span className="text-[12px] font-bold">{heroData.trustBadges.confidential}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-[#0B1D3A]/[0.08] shadow-xs text-[#0B1D3A]">
                <div className="w-5 h-5 rounded bg-[#3B82F6] flex items-center justify-center shadow-xs shrink-0">
                  <MessageSquare size={12} className="text-white" />
                </div>
                <span className="text-[12px] font-bold">{heroData.trustBadges.priority}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-[#0B1D3A]/[0.08] shadow-xs text-[#0B1D3A]">
                <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center shadow-xs shrink-0">
                  <Clock size={12} className="text-white" />
                </div>
                <span className="text-[12px] font-bold">{heroData.trustBadges.sla}</span>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full relative rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(11,29,58,0.2)] border border-white/60 aspect-[4/3]"
            >
              <motion.div
                className="w-full h-full absolute inset-0 z-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={contactHero}
                  alt="FARE Executive Advisory"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-[#0B1D3A]/25 to-transparent z-10" />

              <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B1D3A]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#34D399] relative flex items-center justify-center">
                  <span className="absolute w-3.5 h-3.5 rounded-full bg-[#34D399]/40 animate-ping"></span>
                </span>
                <span>{heroData.imageCard.activeDesk}</span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-[#0B1D3A]/90 backdrop-blur-xl border border-white/20 p-3.5 rounded-xl shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-xs font-bold shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#E2C068] uppercase tracking-wider">{heroData.imageCard.gateway}</p>
                    <p className="text-[14px] font-black text-white">{heroData.imageCard.directAdvisory}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[11px] font-semibold">
                  <CheckCircle size={13} className="text-[#34D399]" />
                  {heroData.imageCard.directRouting}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <section className="w-full py-8 relative font-['Outfit'] overflow-hidden bg-[#F8FAFD]">
        <div className="w-full px-4">
          <div className="flex flex-col gap-10">
            
            <div className="w-full">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">
                    {formData.section01.number}
                  </span>
                  <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                    {formData.section01.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4">
                  {formData.reasons.map((reason) => {
                    const isSelected = selectedReason === reason.id;
                    const Icon = reasonIcons[reason.id as ReasonId] || Briefcase;
                    return (
                      <motion.button
                        key={reason.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedReason(reason.id as ReasonId)}
                        className={`text-left p-3 sm:p-3.5 rounded-xl transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-gradient-to-br from-[#0B1D3A] to-[#132D5F] text-white border-2 border-[#C99A2E] shadow-[0_8px_24px_-6px_rgba(11,29,58,0.35)]' 
                            : 'bg-white/95 backdrop-blur-md border border-[#0B1D3A]/[0.08] text-[#0B1D3A] shadow-xs'
                        }`}
                      >
                        <div className={`absolute top-2.5 right-2.5 flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${
                          isSelected 
                            ? 'bg-[#C99A2E] text-white shadow-xs scale-105' 
                            : 'border border-[#0B1D3A]/20 bg-white/60'
                        }`}>
                          {isSelected && <Check size={11} strokeWidth={3} className="text-white" />}
                        </div>

                        <p className={`text-[11px] leading-snug transition-colors mb-2.5 ${
                          isSelected ? 'text-white/80 font-normal' : 'text-[#64748B]'
                        }`}>
                          {reason.desc}
                        </p>

                        <div className="flex items-center gap-2 pr-6 mt-auto">
                          <div 
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-xs shrink-0"
                            style={{ backgroundColor: reason.color }}
                          >
                            <Icon size={14} className="text-white" />
                          </div>
                          <h3 className={`font-bold text-[12.5px] sm:text-[13.5px] leading-tight transition-colors ${
                            isSelected ? 'text-[#E2C068]' : 'text-[#0B1D3A]'
                          }`}>
                            {reason.title}
                          </h3>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="bg-white/85 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded-xl p-3.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748B] w-full mb-0.5">
                    {formData.section01.suggestedTopicsLabel}
                  </span>
                  {currentReasonData.tags.map((tag, tIdx) => (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={() => handleAddTag(tag)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#F1F5F9] text-[#334155] border border-[#CBD5E1]/60 hover:bg-[#C99A2E]/10 hover:border-[#C99A2E]/40 hover:text-[#C99A2E] transition-colors cursor-pointer"
                    >
                      <span>+</span> {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">
                    {formData.section02.number}
                  </span>
                  <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                    {formData.section02.title}
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white rounded-2xl border-2 border-[#C99A2E]/40 p-6 text-center shadow-[0_20px_50px_-10px_rgba(11,29,58,0.12)] relative overflow-hidden"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white mx-auto mb-4 shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
                        <CheckCircle2 size={28} />
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#C99A2E]/10 text-[#C99A2E] border border-[#C99A2E]/30 mb-3">
                        {formData.confirmation.badge} • {referenceId}
                      </span>

                      <h3 className="text-[20px] font-bold text-[#0B1D3A] mb-2">
                        {formData.confirmation.titlePrefix} {currentReasonData.title} {formData.confirmation.titleSuffix}
                      </h3>

                      <p className="text-[13.5px] text-[#475569] mb-6 leading-relaxed">
                        {formData.confirmation.thankYou}, <span className="font-bold text-[#0B1D3A]">{name || 'Executive'}</span>. {formData.confirmation.bodyText} <span className="font-bold text-[#0B1D3A]">{email}</span>.
                      </p>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="w-full py-3 rounded-lg bg-[#0B1D3A] hover:bg-[#132D5F] text-white font-bold text-[14px] transition-colors cursor-pointer shadow-md"
                      >
                        {formData.confirmation.resetBtn}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4" 
                      onSubmit={handleSubmit}
                    >
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.nameLabel} <span className="text-[#C99A2E] font-bold">*</span>
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={formData.section02.namePlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-10 pr-3.5 py-3 text-[14px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.emailLabel} <span className="text-[#C99A2E] font-bold">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={formData.section02.emailPlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-10 pr-3.5 py-3 text-[14px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.companyLabel} <span className="text-[#94A3B8] lowercase normal-case font-medium">{formData.section02.optionalText}</span>
                        </label>
                        <div className="relative">
                          <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="text" 
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={formData.section02.companyPlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-10 pr-3.5 py-3 text-[14px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.messageLabel} <span className="text-[#C99A2E] font-bold">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-[#94A3B8]" />
                          <textarea 
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={formData.section02.messagePlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-10 pr-3.5 py-3 text-[14px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all resize-none"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-0.5 text-[12px] text-[#64748B]">
                        <div className="w-4.5 h-4.5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
                          <ShieldCheck size={13} />
                        </div>
                        <span>{formData.section02.privacyNote}</span>
                      </div>

                      <div className="pt-2">
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full justify-center group relative overflow-hidden text-white text-[14.5px] font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(11,29,58,0.22)] transition-all duration-300 flex items-center gap-3 cursor-pointer disabled:opacity-70"
                          style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #132D5F 100%)' }}
                        >
                          <span className="relative z-10">
                            {isSubmitting ? formData.section02.submittingBtn : formData.section02.submitBtn}
                          </span>
                          <motion.div 
                            animate={isSubmitting ? { x: [0, 20, 20, 0], y: [0, -20, 20, 0], opacity: [1, 0, 0, 1] } : {}}
                            transition={isSubmitting ? { duration: 1.5, repeat: Infinity } : {}}
                            className="relative z-10 w-6.5 h-6.5 rounded-full bg-[#C99A2E] flex items-center justify-center text-white shadow-xs group-hover:bg-[#E2C068] transition-colors"
                          >
                            <Send size={13} strokeWidth={2.5} className="text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </motion.div>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-0"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                          />
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>

            <div className="w-full">
              <div className="bg-[#0B1D3A] text-white border border-[#C99A2E]/25 rounded-2xl p-5 shadow-[0_20px_50px_-15px_rgba(11,29,58,0.45)] relative overflow-hidden">
                
                <div className="flex items-center justify-between gap-2 border border-[#C99A2E]/30 bg-[#C99A2E]/10 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] relative flex items-center justify-center">
                      <span className="absolute w-3.5 h-3.5 rounded-full bg-[#34D399]/40 animate-ping"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#E2C068] uppercase">
                      {sidebarData.deskBadge}
                    </span>
                  </div>
                  {currentTime && (
                    <span className="text-[10.5px] font-mono text-white/70">
                      {currentTime} IST
                    </span>
                  )}
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#C99A2E] flex items-center justify-center shrink-0 shadow-xs">
                      <Mail size={17} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-0.5">
                        {sidebarData.directTitle}
                      </h4>
                      <div className="flex items-center gap-2">
                        <a href={`mailto:${sidebarData.email}`} className="text-[13.5px] text-white font-bold hover:text-[#E2C068] transition-colors truncate">
                          {sidebarData.email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy email"
                          className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-[10.5px] font-medium flex items-center gap-1 cursor-pointer shrink-0"
                        >
                          {copiedEmail ? (
                            <>
                              <Check size={11} className="text-[#34D399]" />
                              <span className="text-[#34D399]">{sidebarData.copiedLabel}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={11} />
                              <span>{sidebarData.copyLabel}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                      <Clock size={17} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-0.5">
                        {sidebarData.responseTitle}
                      </h4>
                      <p className="text-[13.5px] font-semibold text-white">{sidebarData.responseTime}</p>
                      <p className="text-[11.5px] text-white/60">{sidebarData.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#3B82F6] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin size={17} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-0.5">
                        {sidebarData.locationTitle}
                      </h4>
                      <p className="text-[13.5px] font-semibold text-white">{sidebarData.city}</p>
                      <p className="text-[11.5px] text-white/60">{sidebarData.center}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#8B5CF6] flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 size={17} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-0.5">
                        {sidebarData.officeTitle}
                      </h4>
                      <p className="text-[12.5px] text-white/80 leading-relaxed">
                        {sidebarData.address}
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-start gap-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Sparkles size={13} className="text-white" />
                    </div>
                    <p className="text-[11.5px] text-white/80 leading-relaxed">
                      {sidebarData.partnersNote}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
