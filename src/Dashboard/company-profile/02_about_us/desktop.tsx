import { motion, type Variants } from "motion/react";
import { Target, Compass, Play } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { aboutUsSectionData, type CompanyVideoItem } from "./data";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const logoAccents = [
  { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
  { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` },
  { accent: "#10B981", bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
  { accent: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
];

export interface AboutUsViewProps {
  onOpenVideo: (video: CompanyVideoItem) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutUsDesktop({ onOpenVideo }: AboutUsViewProps) {
  return (
    <section
      id="company-sec-about-us"
      className="w-full py-16 px-10 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      {/* Ambient Radial Blur Orbs */}
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[-4%] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none z-0 opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.14) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 24, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[4%] w-[440px] h-[440px] rounded-full blur-[130px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-12 relative z-10">
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
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <motion.div
              variants={cardVariants}
              className="lg:col-span-7 flex flex-col gap-4 text-[15px] text-[#5A6B82] leading-[1.7] font-medium"
            >
              {aboutUsSectionData.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[4px] border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] bg-white/90 backdrop-blur-xl p-5 flex items-start gap-3.5 luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" }}
                />
                <div
                  className="w-10 h-10 rounded-[4px] text-white flex items-center justify-center shrink-0 luxury-shadow-sm group-hover:scale-110 transition-transform duration-400"
                  style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" }}
                >
                  <Target size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.12em] text-[#0B1D3A] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] leading-relaxed font-medium">
                    {aboutUsSectionData.mission}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[4px] border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] bg-white/90 backdrop-blur-xl p-5 flex items-start gap-3.5 luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
                />
                <div
                  className="w-10 h-10 rounded-[4px] text-white flex items-center justify-center shrink-0 luxury-shadow-sm group-hover:scale-110 transition-transform duration-400"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
                >
                  <Compass size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.12em] text-[#0B1D3A] mb-1">
                    Our Vision
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] leading-relaxed font-medium">
                    {aboutUsSectionData.vision}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statutory Accreditations & Brand Logos */}
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA] mb-4">
            Official Accreditations, Sanctions & Guild Logos
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {aboutUsSectionData.partnerLogos.map((logo, idx) => {
              const colorSet = logoAccents[idx % logoAccents.length];
              return (
                <motion.div
                  key={logo.id}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded-[4px] p-4 flex flex-col items-center text-center gap-2.5 luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: colorSet.bg }}
                  />
                  {logo.code === "FARE" ? (
                    <div className="w-11 h-11 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-400">
                      <img
                        src={aboutUsSectionData.brandMarkLogo}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-11 h-11 rounded-[4px] flex items-center justify-center font-black text-xs text-white tracking-wider luxury-shadow-sm group-hover:scale-110 transition-transform duration-400"
                      style={{ background: colorSet.bg }}
                    >
                      {logo.code}
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-black text-[#0B1D3A] leading-tight tracking-tight">
                      {logo.name}
                    </div>
                    <div className="text-[10px] text-[#7B8DAA] font-bold mt-0.5">
                      {logo.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA] mb-4">
            Corporate Gallery & Infrastructure Highlights
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {aboutUsSectionData.gallery.map((item, idx) => {
              const colorSet = logoAccents[idx % logoAccents.length];
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] bg-white/90 backdrop-blur-xl luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 ease-out relative"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{ background: colorSet.bg }}
                  />
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/65 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h4
                      className="text-[15px] font-black tracking-tight line-clamp-1 group-hover:text-[#C99A2E] transition-colors"
                      style={{ color: NAVY }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[#5A6B82] font-medium mt-1 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Corporate Video Showcase */}
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#7B8DAA] mb-4">
            Corporate Introduction & Walkthrough Videos
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {aboutUsSectionData.videos.map((video) => (
              <motion.div
                key={video.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onOpenVideo(video)}
                className="group relative rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] bg-[#0B1D3A] cursor-pointer luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/40 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full"
                        style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                      />
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center luxury-shadow-float group-hover:scale-110 transition-all duration-400 relative z-10"
                        style={{
                          background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
                        }}
                      >
                        <Play fill="white" className="text-white ml-1 w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl opacity-25"
                    style={{ borderColor: GOLD }}
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px] border border-white/10">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-[#0B1D3A] text-white flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-bold truncate group-hover:text-[#D5AA45] transition-colors tracking-tight">
                      {video.title}
                    </h4>
                    <p className="text-[12px] text-[#94A3B8] font-medium truncate mt-0.5">
                      {video.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D5AA45] bg-white/[0.06] group-hover:bg-[#C99A2E] group-hover:text-white px-2.5 py-1 rounded-[4px] shrink-0 transition-colors">
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
