import { motion } from "motion/react";
import { Target, Compass, Play } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { aboutUsSectionData } from "./data";
import type { AboutUsViewProps } from "./desktop";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const logoAccents = [
  "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`,
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
];

export default function AboutUsMobile({ onOpenVideo }: AboutUsViewProps) {
  return (
    <section
      id="company-sec-about-us"
      className="w-full py-10 px-5 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="flex flex-col gap-8 relative z-10">
        <div>
          <SectionHeader
            compact
            eyebrow="02 · About Us"
            title={aboutUsSectionData.overviewTitle}
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 text-[13px] text-[#5A6B82] leading-relaxed font-medium mb-4"
          >
            {aboutUsSectionData.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[4px] border border-[#0B1D3A]/[0.06] bg-white/90 backdrop-blur-xl p-4 flex items-start gap-3 luxury-shadow-float relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-75"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" }}
              />
              <div
                className="w-9 h-9 rounded-[4px] text-white flex items-center justify-center shrink-0 luxury-shadow-sm"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" }}
              >
                <Target size={16} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0B1D3A] mb-0.5">
                  Our Mission
                </h3>
                <p className="text-xs text-[#5A6B82] font-medium leading-relaxed">
                  {aboutUsSectionData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[4px] border border-[#0B1D3A]/[0.06] bg-white/90 backdrop-blur-xl p-4 flex items-start gap-3 luxury-shadow-float relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-75"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
              />
              <div
                className="w-9 h-9 rounded-[4px] text-white flex items-center justify-center shrink-0 luxury-shadow-sm"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
              >
                <Compass size={16} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0B1D3A] mb-0.5">
                  Our Vision
                </h3>
                <p className="text-xs text-[#5A6B82] font-medium leading-relaxed">
                  {aboutUsSectionData.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2x3 Accreditations & Brand Logos */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] mb-3">
            Accreditations & Guild Logos
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {aboutUsSectionData.partnerLogos.map((logo, idx) => (
              <div
                key={logo.id}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-[4px] p-3 flex items-center gap-2.5 luxury-shadow-sm relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-75"
                  style={{ background: logoAccents[idx % logoAccents.length] }}
                />
                {logo.code === "FARE" ? (
                  <div className="w-9 h-9 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={aboutUsSectionData.brandMarkLogo}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="w-9 h-9 rounded-[4px] flex items-center justify-center font-black text-[10px] text-white shrink-0"
                    style={{ background: logoAccents[idx % logoAccents.length] }}
                  >
                    {logo.code}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-[11px] font-black text-[#0B1D3A] truncate">
                    {logo.name}
                  </div>
                  <div className="text-[9px] text-[#7B8DAA] font-semibold truncate">
                    {logo.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] mb-3">
            Corporate Gallery
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aboutUsSectionData.gallery.map((item) => (
              <div
                key={item.id}
                className="rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.08] bg-white/90 luxury-shadow-sm"
              >
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-black text-[#0B1D3A] tracking-tight">{item.title}</h4>
                  <p className="text-[11px] text-[#5A6B82] font-medium mt-0.5">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7B8DAA] mb-3">
            Corporate & Walkthrough Videos
          </div>
          <div className="flex flex-col gap-3.5">
            {aboutUsSectionData.videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onOpenVideo(video)}
                className="rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.08] bg-[#0B1D3A] cursor-pointer luxury-shadow-float active:scale-[0.99] transition-transform"
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center luxury-shadow-float"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
                      }}
                    >
                      <Play fill="white" className="text-white ml-0.5 w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] border border-white/10">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3 bg-[#0B1D3A] text-white">
                  <h4 className="text-xs font-bold tracking-tight">{video.title}</h4>
                  <p className="text-[10px] text-[#94A3B8] font-medium mt-0.5 line-clamp-1">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
