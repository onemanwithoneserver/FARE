import { motion } from "motion/react";
import { Target, Compass, Play } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { aboutUsSectionData } from "./data";
import type { AboutUsViewProps } from "./desktop";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function AboutUsMobile({ onOpenVideo }: AboutUsViewProps) {
  return (
    <section
      id="company-sec-about-us"
      className="w-full py-10 px-4 bg-white border-b border-[#E2E8F0] scroll-mt-[96px]"
    >
      <div className="flex flex-col gap-8">
        <div>
          <SectionHeader
            compact
            eyebrow="02 · About Us"
            title={aboutUsSectionData.overviewTitle}
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-3 text-xs text-[#475569] leading-relaxed mb-4"
          >
            {aboutUsSectionData.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFD] p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-[6px] bg-[#0B1D3A] text-[#E5C158] flex items-center justify-center shrink-0">
                <Target size={16} />
              </div>
              <div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B1D3A] mb-0.5">
                  Our Mission
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {aboutUsSectionData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[8px] border border-[#E2E8F0] bg-[#FFFDF7] p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-[6px] bg-gradient-to-br from-[#C99A2E] to-[#A87A18] text-white flex items-center justify-center shrink-0">
                <Compass size={16} />
              </div>
              <div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B1D3A] mb-0.5">
                  Our Vision
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {aboutUsSectionData.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2x3 Accreditations & Brand Logos */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#64748B] mb-3">
            Accreditations & Guild Logos
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {aboutUsSectionData.partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-3 flex items-center gap-2.5"
              >
                {logo.code === "FARE" ? (
                  <div className="w-9 h-9 rounded-[6px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={aboutUsSectionData.brandMarkLogo}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-[6px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center font-black text-[10px] text-[#0B1D3A] shrink-0">
                    {logo.code}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-[#0B1D3A] truncate">
                    {logo.name}
                  </div>
                  <div className="text-[9px] text-[#64748B] truncate">
                    {logo.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#64748B] mb-3">
            Corporate Gallery
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aboutUsSectionData.gallery.map((item) => (
              <div
                key={item.id}
                className="rounded-[8px] overflow-hidden border border-[#E2E8F0] bg-white"
              >
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#0B1D3A]">{item.title}</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#64748B] mb-3">
            Corporate & Walkthrough Videos
          </div>
          <div className="flex flex-col gap-3.5">
            {aboutUsSectionData.videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onOpenVideo(video)}
                className="rounded-[8px] overflow-hidden border border-[#E2E8F0] bg-[#0B1D3A] cursor-pointer shadow-sm active:scale-[0.99] transition-transform"
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
                      }}
                    >
                      <Play fill="white" className="text-white ml-0.5 w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/65 text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px]">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3 bg-[#0B1D3A] text-white">
                  <h4 className="text-xs font-bold">{video.title}</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
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
