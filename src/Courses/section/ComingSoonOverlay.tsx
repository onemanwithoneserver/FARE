import { BellRing } from "lucide-react";
import { motion } from "motion/react";

export default function ComingSoonOverlay() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="col-start-1 row-start-1 z-50 flex items-start justify-center bg-white/40 px-5 pt-10 backdrop-blur-[6px]"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 8 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex w-full max-w-[360px] flex-col items-center overflow-hidden rounded-[8px] border border-white/80 bg-white/75 px-7 py-7 text-center shadow-[0_12px_40px_rgba(11,29,58,0.12)] backdrop-blur-xl sm:px-9 sm:py-8"
      >
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0_60%,#C99A2E_80%,#E2C068_90%,transparent_100%)] opacity-15"
        />
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#0B1D3A] to-[#15315C] text-white shadow-[0_8px_20px_rgba(11,29,58,0.25)]"
          >
            <BellRing size={24} strokeWidth={2.5} />
          </motion.div>
          <span className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C99A2E]">
            FARE Courses
          </span>
          <h2 className="text-[25px] font-black tracking-tight text-[#0B1D3A]">
            Coming Soon
          </h2>
          <p className="mt-2 max-w-[270px] text-[13px] font-medium leading-relaxed text-[#475569]">
            Our curated selection of courses is being finalized. Check back soon.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
