import { motion } from "motion/react";
import { data } from "../data";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Mobile() {
  const sectionData = data.hero;
  return (
    <section className="w-full bg-[#0B1D3A] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[20%] w-[150%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0M5OUEyRSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz48L3N2Zz4=')] bg-[length:100px_100px] z-0"
        />
      </div>
      <div className="w-full px-5 relative z-10 flex flex-col text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/5 border border-white/10 mb-6 backdrop-blur-sm max-w-full">
             <span className="w-1 h-1 rounded-[4px] bg-[#C99A2E] shrink-0" />
             <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider truncate">{sectionData.supportingLine}</span>
          </div>
          <h1 className="text-[36px] font-bold text-white mb-4 leading-[1.1]">
            {sectionData.title}
          </h1>
          <h2 className="text-[18px] text-[#C99A2E] font-medium mb-6 leading-snug">
            {sectionData.subtitle}
          </h2>
          <div className="text-[15px] text-white/70 mb-8 space-y-4 font-light">
            {sectionData.description.split('\n').map((para, i) => (
               <p key={i}>{para}</p>
            ))}
          </div>
          
          <button className="group w-full relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C99A2E] text-white rounded-[8px] font-semibold text-[15px] overflow-hidden transition-all duration-300">
            <span className="relative z-10">{sectionData.cta}</span>
            <span className="relative z-10 w-4 h-4 inline-flex items-center justify-center">
              <ChevronRight size={16} strokeWidth={2.5} className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-1" />
              <ArrowRight size={16} strokeWidth={2.5} className="absolute transition-all duration-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
