import type { MouseEvent, CSSProperties } from "react";
import { Sparkles, ArrowRight, UserPlus } from "lucide-react";
import type { SponsoredCardProps } from "./types";

export default function SponsoredCard({
  size = "card",
  width,
  height,
  label = "SPONSORED",
  tagline,
  className = "",
  showControls = true,
  primaryCtaText = "Apply Now",
  secondaryCtaText = "Join Now",
  onApply,
  onJoin,
  align: _align,
}: SponsoredCardProps) {
  const handleApplyClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (onApply) {
      onApply();
    } else {
      window.dispatchEvent(
        new CustomEvent("open-fare-ad-action", {
          detail: { action: "apply", title: label },
        })
      );
    }
  };

  const handleJoinClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (onJoin) {
      onJoin();
    } else {
      window.dispatchEvent(
        new CustomEvent("open-fare-ad-action", {
          detail: { action: "join", title: label },
        })
      );
    }
  };

  const customStyle: CSSProperties = {
    ...(width ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === "number" ? `${height}px` : height } : {}),
  };

  // Reusable SPONSORED Badge with light gray shade
  const renderBadge = (badgeClassName = "") => (
    <span
      className={`text-xs font-extrabold tracking-[0.22em] text-[#64748B] uppercase px-3.5 py-1.5 bg-[#F1F5F9] rounded-[6px] border border-slate-200/90 inline-flex items-center gap-1.5 shadow-2xs select-none ${badgeClassName}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
      <span>{label}</span>
    </span>
  );

  // 1. IN-GRID CARD FORMAT (Matching User Screenshot media_1794658576364_a5b6b65b.png)
  if (size === "card") {
    return (
      <div
        style={customStyle}
        className={`w-full h-full min-h-[290px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 select-text ${className}`}
      >
        {renderBadge()}

        {tagline && (
          <p className="text-xs text-slate-500 font-medium max-w-[260px] line-clamp-2">
            {tagline}
          </p>
        )}

        {showControls && (
          <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-2 justify-center">
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-5 py-2.5 rounded-[8px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <UserPlus className="w-4 h-4 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_3px_10px_rgba(201,154,46,0.3)] hover:shadow-[0_5px_14px_rgba(201,154,46,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 relative" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 2. LEADERBOARD FORMAT (Full width horizontal banner ~728x90)
  if (size === "leaderboard") {
    return (
      <div
        style={customStyle}
        className={`w-full min-h-[88px] bg-gradient-to-r from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[10px] p-3.5 sm:p-4 px-5 sm:px-6 shadow-[0_2px_10px_rgba(11,29,58,0.03)] hover:border-[#C99A2E]/50 hover:shadow-[0_8px_20px_rgba(11,29,58,0.06)] transition-all duration-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 select-text ${className}`}
      >
        <div className="flex items-center gap-3">
          {renderBadge()}
          {tagline && (
            <span className="text-xs text-slate-500 font-medium hidden md:inline truncate max-w-sm">
              {tagline}
            </span>
          )}
        </div>

        {showControls && (
          <div className="flex items-center gap-2.5 shrink-0 self-center sm:self-auto">
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn px-4 py-2 rounded-[7px] text-white text-xs font-bold flex items-center gap-1.5 shadow-[0_3px_10px_rgba(201,154,46,0.3)] hover:shadow-[0_5px_14px_rgba(201,154,46,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 relative" />
            </button>
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-4 py-2 rounded-[7px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 3. BILLBOARD FORMAT (Large prominent showcase banner ~970x160)
  if (size === "billboard") {
    return (
      <div
        style={customStyle}
        className={`w-full min-h-[140px] bg-gradient-to-r from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-8 px-6 sm:px-10 shadow-[0_4px_20px_rgba(11,29,58,0.05)] hover:border-[#C99A2E]/50 hover:shadow-[0_12px_32px_rgba(11,29,58,0.1)] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 select-text ${className}`}
      >
        <div className="flex flex-col items-start gap-2 max-w-xl">
          {renderBadge()}
          {tagline && (
            <p className="text-sm font-bold text-[#0B1D3A] leading-snug">
              {tagline}
            </p>
          )}
        </div>

        {showControls && (
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-5 py-2.5 rounded-[8px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center gap-2 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <UserPlus className="w-4 h-4 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(201,154,46,0.35)] hover:shadow-[0_6px_18px_rgba(201,154,46,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 relative" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 4. BANNER-STRIP FORMAT (Slim horizontal bar ~64px-76px)
  if (size === "banner-strip") {
    return (
      <div
        style={customStyle}
        className={`w-full min-h-[64px] bg-white border border-[#E2E8F0] rounded-[8px] p-3 px-5 shadow-2xs hover:border-[#C99A2E]/50 transition-colors flex flex-col sm:flex-row items-center justify-between gap-2.5 select-text ${className}`}
      >
        <div className="flex items-center gap-2">
          {renderBadge("text-[10px] sm:text-[11px] px-2.5 py-1")}
          {tagline && (
            <span className="text-[11px] text-slate-500 font-medium truncate max-w-xs">
              {tagline}
            </span>
          )}
        </div>

        {showControls && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-3 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-[11px] font-bold transition-all cursor-pointer"
            >
              {secondaryCtaText}
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="px-3 py-1.5 rounded-[6px] bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] text-white text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 5. SIDEBAR-TOWER FORMAT (Tall vertical tower ~300x600 or min-h-[380px])
  if (size === "sidebar-tower") {
    return (
      <div
        style={customStyle}
        className={`w-full min-h-[360px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-2xs hover:border-[#C99A2E]/50 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center gap-4 select-text ${className}`}
      >
        <div className="flex flex-col items-center gap-3">
          {renderBadge()}
          {tagline && (
            <p className="text-xs font-bold text-[#0B1D3A] leading-snug">
              {tagline}
            </p>
          )}
        </div>

        {showControls && (
          <div className="flex flex-col w-full gap-2.5 mt-auto pt-4 border-t border-[#E2E8F0]">
            <button
              type="button"
              onClick={handleJoinClick}
              className="w-full py-2.5 px-3 rounded-[7px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn w-full py-2.5 px-3 rounded-[7px] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_3px_10px_rgba(201,154,46,0.3)] hover:shadow-[0_5px_14px_rgba(201,154,46,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 relative" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 6. SIDEBAR-WIDGET FORMAT (Medium vertical card ~160px-220px)
  if (size === "sidebar-widget") {
    return (
      <div
        style={customStyle}
        className={`w-full min-h-[160px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs hover:border-[#C99A2E]/50 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-3.5 select-text ${className}`}
      >
        {renderBadge("text-[10px] sm:text-[11px] px-3 py-1")}

        {tagline && (
          <p className="text-[11px] text-slate-500 font-medium line-clamp-2">
            {tagline}
          </p>
        )}

        {showControls && (
          <div className="flex flex-col w-full gap-2">
            <button
              type="button"
              onClick={handleJoinClick}
              className="w-full py-2 px-3 rounded-[7px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <UserPlus className="w-3 h-3 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn w-full py-2 px-3 rounded-[7px] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_3px_10px_rgba(201,154,46,0.3)] hover:shadow-[0_5px_14px_rgba(201,154,46,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3 h-3 relative" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 7. SQUARE FORMAT (Symmetrical box e.g. 260x260 or 300x300)
  if (size === "square") {
    return (
      <div
        style={customStyle}
        className={`w-full aspect-square min-h-[250px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border border-[#E2E8F0] rounded-[10px] p-5 shadow-2xs hover:border-[#C99A2E]/50 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-4 select-text ${className}`}
      >
        {renderBadge()}

        {tagline && (
          <p className="text-xs text-slate-500 font-medium max-w-[200px]">
            {tagline}
          </p>
        )}

        {showControls && (
          <div className="flex flex-col w-full max-w-[200px] gap-2">
            <button
              type="button"
              onClick={handleJoinClick}
              className="w-full py-2 px-3 rounded-[7px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#D5AA45]" />
              <span>{secondaryCtaText}</span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="relative overflow-hidden group/btn w-full py-2 px-3 rounded-[7px] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_3px_10px_rgba(201,154,46,0.3)] hover:shadow-[0_5px_14px_rgba(201,154,46,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span className="relative">{primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 relative" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // 8. COMPACT-BADGE FORMAT (Single-row header/inline widget ~44px)
  return (
    <div
      style={customStyle}
      className={`bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-1.5 shadow-2xs hover:border-[#C99A2E]/50 transition-colors flex items-center justify-between gap-3 select-text ${className}`}
    >
      <div className="flex items-center gap-2">
        {renderBadge("text-[10px] px-2 py-0.5")}
        {tagline && (
          <span className="text-xs font-bold text-[#0B1D3A] truncate max-w-[180px]">
            {tagline}
          </span>
        )}
      </div>

      {showControls && (
        <button
          type="button"
          onClick={handleJoinClick}
          className="px-3 py-1 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-[11px] font-bold cursor-pointer transition-colors shadow-2xs shrink-0"
        >
          {secondaryCtaText}
        </button>
      )}
    </div>
  );
}

