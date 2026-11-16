import type { CSSProperties } from "react";
import { SPONSOR_BRANDS, type SponsorBrandId } from "./sponsorBrands";

function BrandEmblem({ brandId, sizePx }: { brandId: SponsorBrandId; sizePx: number }) {
  switch (brandId) {
    case "northstone":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 36 30" fill="none" aria-hidden="true">
          <path d="M18 3L30 27H6L18 3Z" fill="#E0AB38" />
          <path d="M25 11L34 27H17L25 11Z" fill="#C79225" />
        </svg>
      );
    case "kalpavana":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 3C10.5 8 8.5 14 8.5 19.5C8.5 24.5 11.8 28.5 16 29.5C20.2 28.5 23.5 24.5 23.5 19.5C23.5 14 21.5 8 16 3Z"
            fill="#8CE26E"
          />
          <path d="M16 9V27" stroke="#19542C" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "riverbend":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 36 28" fill="none" aria-hidden="true">
          <path
            d="M4 10C7.5 6.5 11.5 6.5 15 10C18.5 13.5 22.5 13.5 26 10C28 8 30 7.5 32 8"
            stroke="#D8F5FF"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M4 18C7.5 14.5 11.5 14.5 15 18C18.5 21.5 22.5 21.5 26 18C28 16 30 15.5 32 16"
            stroke="#D8F5FF"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "skyline":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="10.5" height="10.5" rx="2" fill="#F3B552" />
          <rect x="17.5" y="4" width="10.5" height="10.5" rx="2" fill="#D28836" />
          <rect x="4" y="17.5" width="10.5" height="10.5" rx="2" fill="#D28836" />
          <rect x="17.5" y="17.5" width="10.5" height="10.5" rx="2" fill="#F3B552" />
        </svg>
      );
    case "greenacre":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="5.5" fill="#F5D061" />
          <path
            d="M16 4V7.5M16 24.5V28M4 16H7.5M24.5 16H28M7.5 7.5L10 10M22 22L24.5 24.5M24.5 7.5L22 10M10 22L7.5 24.5"
            stroke="#F5D061"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "amaravana":
      return (
        <svg width={sizePx} height={sizePx} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M10 26V13.5C10 9.6 12.7 6.5 16 6.5C19.3 6.5 22 9.6 22 13.5V26"
            stroke="#EBD5F0"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export interface BrandLogoTileProps {
  brand: SponsorBrandId;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  showSampleTag?: boolean;
  onClick?: () => void;
}

export default function BrandLogoTile({
  brand,
  size = "md",
  className = "",
  style,
  showSampleTag = true,
  onClick,
}: BrandLogoTileProps) {
  const cfg = SPONSOR_BRANDS[brand];

  const iconSize = size === "sm" ? 16 : size === "lg" ? 30 : 22;
  const titleSizeClass =
    size === "sm"
      ? "text-[11px] leading-tight"
      : size === "lg"
      ? "text-[22px] sm:text-[24px] leading-tight"
      : "text-[15px] sm:text-[17px] leading-tight";
  const subSizeClass =
    size === "sm"
      ? "text-[6.5px] tracking-[0.18em]"
      : size === "lg"
      ? "text-[10px] tracking-[0.26em]"
      : "text-[8px] tracking-[0.22em]";

  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      {...(onClick ? { type: "button" as const, onClick } : {})}
      style={{
        backgroundColor: cfg.bg,
        ...style,
      }}
      className={`relative overflow-hidden select-none flex flex-col items-center justify-center text-center border border-white/15 ${
        onClick ? "cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]" : ""
      } ${className}`}
    >
      <div className="mb-1 flex items-center justify-center">
        <BrandEmblem brandId={brand} sizePx={iconSize} />
      </div>

      <div
        className={`font-serif font-bold tracking-tight ${titleSizeClass}`}
        style={{ color: cfg.titleColor }}
      >
        {cfg.title}
      </div>

      <div
        className={`font-sans font-bold uppercase mt-0.5 ${subSizeClass}`}
        style={{ color: cfg.subtitleColor }}
      >
        {cfg.subtitle}
      </div>

      {showSampleTag && size !== "sm" && (
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 right-2 text-[7.5px] font-bold tracking-widest uppercase text-white/55 pointer-events-none"
        >
          SAMPLE
        </span>
      )}
    </Tag>
  );
}
