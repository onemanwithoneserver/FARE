import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import contactHero from '../assets/contact_us_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Hero({ isMobile }: { isMobile: boolean }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      className="w-full -mt-8 lg:-mt-8 flex items-center justify-center overflow-hidden relative font-['Outfit']"
      style={{ background: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#DBEAFE]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-[10%] w-[550px] h-[550px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(${NAVY} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className={`max-w-[1320px] w-full relative z-10 ${isMobile ? 'px-6 py-10' : 'px-8 lg:px-12 py-12 lg:py-20'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col items-start text-left relative z-10"
          >
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="px-4 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] flex items-center gap-2.5 backdrop-blur-sm shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#C99A2E] flex items-center justify-center text-white shadow-xs">
                  <Sparkles size={11} className="text-white" />
                </div>
                <span className="font-bold text-[11px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                  Executive Inquiries & Support
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className={`font-black mb-6 text-[#0B1D3A] ${
                isMobile ? 'text-[2.5rem] leading-[1.1]' : 'text-[3.25rem] xl:text-[4.2rem] leading-[1.05] tracking-[-0.03em]'
              }`}
            >
              TELL US WHICH <br />
              <span className="text-[#C99A2E] relative inline-block">
                ONE YOU ARE.
                <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[17px] md:text-[18px] font-medium leading-[1.7] text-[#475569] mb-8 max-w-[540px]"
            >
              Four kinds of people write to us and they need four different answers. Pick the closest one and your message reaches the right team immediately.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.06)] text-[#0B1D3A] transition-all cursor-default">
                <div className="w-6 h-6 rounded bg-[#F59E0B] flex items-center justify-center shadow-xs">
                  <ShieldCheck size={14} className="text-white" />
                </div>
                <span className="text-[13px] font-bold">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.06)] text-[#0B1D3A] transition-all cursor-default">
                <div className="w-6 h-6 rounded bg-[#3B82F6] flex items-center justify-center shadow-xs">
                  <MessageSquare size={14} className="text-white" />
                </div>
                <span className="text-[13px] font-bold">Priority Response Team</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full flex justify-end"
          >
            <div className="relative w-full max-w-[620px] aspect-[4/3] rounded overflow-hidden shadow-[0_30px_80px_-20px_rgba(11,29,58,0.35)] group z-20 border border-white/40">
              <div className="absolute inset-0 border-[2px] border-white/20 rounded z-20 pointer-events-none mix-blend-overlay" />
              
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                src={contactHero}
                alt="FARE Executive Meeting"
                className="w-full h-full object-cover relative z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-[#0B1D3A]/20 to-transparent z-20" />

              <div className="absolute bottom-6 left-6 right-6 bg-[#0B1D3A]/85 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] z-30 flex items-center justify-between group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-md font-bold">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#E2C068] uppercase tracking-wider">Direct Access</p>
                    <p className="text-[15px] sm:text-[17px] font-black text-white">Dedicated Advisory Team</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
                  Active Now
                </div>
              </div>
            </div>

            <div className="absolute top-[8%] right-[-6%] w-[85%] h-[85%] rounded border-2 border-[#C99A2E]/20 rotate-3 z-10 pointer-events-none" />
            <div className="absolute top-[3%] right-[-2%] w-[85%] h-[85%] rounded border border-[#3B82F6]/20 -rotate-2 z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
