import { motion, type Variants } from "motion/react";
import { Target, Compass, Play } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { aboutUsSectionData, type CompanyVideoItem } from "./data";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export interface AboutUsViewProps {
  onOpenVideo: (video: CompanyVideoItem) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutUsDesktop({ onOpenVideo }: AboutUsViewProps) {
  return (
    <section
      id="company-sec-about-us"
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-white border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
    >
      {/* Ambient Radial Blur Orb */}
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[-4%] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none z-0 opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full flex flex-col gap-12 relative z-10">
        {/* Overview + Mission / Vision */}
        <div>
          <SectionHeader
            eyebrow="02 · About Us"
            title={aboutUsSectionData.overviewTitle}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <motion.div
              variants={cardVariants}
              className="lg:col-span-7 flex flex-col gap-4 text-[15px] text-[#475569] leading-relaxed"
            >
              {aboutUsSectionData.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[8px] border border-[#E2E8F0] hover:border-[#0B1D3A]/25 bg-[#F8FAFD] p-5 flex items-start gap-3.5 shadow-2xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0B1D3A] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-9 h-9 rounded-[8px] bg-[#0B1D3A] text-[#E5C158] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Target size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0B1D3A] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {aboutUsSectionData.mission}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[8px] border border-[#E2E8F0] hover:border-[#C99A2E]/45 bg-[#FFFDF7] p-5 flex items-start gap-3.5 shadow-2xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-9 h-9 rounded-[8px] bg-gradient-to-br from-[#C99A2E] to-[#A87A18] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Compass size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0B1D3A] mb-1">
                    Our Vision
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {aboutUsSectionData.vision}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statutory Accreditations & Brand Logos */}
        <div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#64748B] mb-4">
            Official Accreditations, Sanctions & Guild Logos
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {aboutUsSectionData.partnerLogos.map((logo) => (
              <motion.div
                key={logo.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/60 rounded-[8px] p-3.5 flex flex-col items-center text-center gap-2 shadow-2xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] opacity-0 group-hover:opacity-100 transition-opacity" />
                {logo.code === "FARE" ? (
                  <div className="w-11 h-11 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img
                      src={aboutUsSectionData.brandMarkLogo}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center font-black text-xs text-[#0B1D3A] tracking-wider group-hover:bg-[#0B1D3A] group-hover:text-[#E5C158] transition-colors">
                    {logo.code}
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-[#0B1D3A] leading-tight">
                    {logo.name}
                  </div>
                  <div className="text-[10px] text-[#64748B] font-medium mt-0.5">
                    {logo.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#64748B] mb-4">
            Corporate Gallery & Infrastructure Highlights
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {aboutUsSectionData.gallery.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group rounded-[8px] overflow-hidden border border-[#E2E8F0] hover:border-[#C99A2E]/50 bg-white shadow-2xs hover:shadow-[0_14px_32px_rgba(11,29,58,0.1)] transition-all"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/65 via-transparent to-transparent" />
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-[#0B1D3A] line-clamp-1 group-hover:text-[#C99A2E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Corporate Video Showcase */}
        <div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#64748B] mb-4">
            Corporate Introduction & Walkthrough Videos
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {aboutUsSectionData.videos.map((video) => (
              <motion.div
                key={video.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                onClick={() => onOpenVideo(video)}
                className="group relative rounded-[8px] overflow-hidden border border-[#E2E8F0] hover:border-[#C99A2E]/60 bg-[#0B1D3A] cursor-pointer shadow-md hover:shadow-2xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/40 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-20 h-20 rounded-full border border-[#D5AA45]/40 animate-ping opacity-40" />
                      <div
                        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
                        }}
                      >
                        <Play fill="white" className="text-white ml-1 w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 rounded-tl opacity-60 border-[#C99A2E]" />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px]">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-[#0B1D3A] text-white flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold truncate group-hover:text-[#E5C158] transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 truncate mt-0.5">
                      {video.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5C158] bg-white/10 group-hover:bg-[#C99A2E] group-hover:text-white px-2.5 py-1 rounded-[4px] shrink-0 transition-colors">
                    Watch
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
