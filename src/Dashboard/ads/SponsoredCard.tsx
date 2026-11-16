import { useState, type MouseEvent, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { SponsoredCardProps } from "./types";
import { dispatchOpenCompanyProfile } from "../company-profile/router";
import BrandLogoTile from "./BrandLogoTile";
import { SPONSOR_BRANDS, type SponsorBrandId } from "./sponsorBrands";
import AdActionModal from "../components/AdActionModal";

export default function SponsoredCard({
  size = "card",
  brand,
  width,
  height,
  label,
  title,
  tagline,
  className = "",
  showControls = true,
  primaryCtaText,
  secondaryCtaText,
  onApply,
  align: _align,
}: SponsoredCardProps) {
  const [saved, setSaved] = useState(false);
  const [localApplyModalOpen, setLocalApplyModalOpen] = useState(false);
  const [localApplyTitle, setLocalApplyTitle] = useState("");

  const resolvedBrand: SponsorBrandId =
    brand ||
    (size === "billboard" || size === "program-sponsor"
      ? "northstone"
      : size === "card" || size === "square" || size === "in-grid-horizontal"
      ? "skyline"
      : size === "hero-tile"
      ? "amaravana"
      : "kalpavana");

  const brandName = SPONSOR_BRANDS[resolvedBrand].name;

  const resolvedJoinText =
    secondaryCtaText &&
    secondaryCtaText !== "View Company" &&
    secondaryCtaText !== "View company"
      ? secondaryCtaText
      : "Join Now";

  const triggerApply = (e: MouseEvent, mandateTitle?: string) => {
    e.stopPropagation();
    const resolvedMandate = mandateTitle || title || brandName;
    if (onApply) {
      onApply();
    } else {
      setLocalApplyTitle(resolvedMandate);
      setLocalApplyModalOpen(true);
    }
  };

  const triggerCompany = (e: MouseEvent, companyName?: string) => {
    e.stopPropagation();
    dispatchOpenCompanyProfile(companyName || brandName);
  };

  const renderLocalModal = () =>
    localApplyModalOpen ? (
      <AdActionModal
        isOpen={localApplyModalOpen}
        onClose={() => setLocalApplyModalOpen(false)}
        actionType="apply"
        mandateTitle={localApplyTitle}
      />
    ) : null;

  const customStyle: CSSProperties = {
    ...(width ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height ? { minHeight: typeof height === "number" ? `${height}px` : height } : {}),
  };

  // FORMAT E: HIRING PARTNERS LOGO WALL (Full-width larger wall)
  if (size === "hiring-wall") {
    const wallBrands: SponsorBrandId[] = [
      "northstone",
      "kalpavana",
      "riverbend",
      "skyline",
      "greenacre",
    ];
    return (
      <>
        <div
          style={customStyle}
          className={`w-full min-w-full bg-white rounded-[12px] border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs select-text ${className}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B88A22]">
                {label && label !== "SPONSORED" ? label : "FARE TALENT POOL · HIRING NOW"}
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0B1D3A] tracking-tight mt-0.5">
                {title || "Companies recruiting FARE learners this month"}
              </h3>
            </div>
            {showControls && (
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={(e) => triggerCompany(e, "FARE Talent Pool Hiring Partners")}
                  className="px-4 py-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                >
                  {resolvedJoinText}
                </button>
                <button
                  type="button"
                  onClick={(e) => triggerApply(e, "41 Active Hiring Companies")}
                  className="px-3.5 py-2 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {primaryCtaText && primaryCtaText !== "Apply Now" ? primaryCtaText : "View all 41"}
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {wallBrands.map((b) => (
              <BrandLogoTile
                key={b}
                brand={b}
                size="md"
                onClick={() => dispatchOpenCompanyProfile(SPONSOR_BRANDS[b].name)}
                className="h-[92px] w-full rounded-[8px]"
              />
            ))}
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT F: HERO SPONSOR TILE (Wider right-side course hero partner card)
  if (size === "hero-tile") {
    return (
      <>
        <div
          style={customStyle}
          className={`bg-white rounded-[12px] p-4 w-full sm:w-[320px] lg:w-[360px] xl:w-[390px] shrink-0 shadow-lg text-left select-text ${className}`}
        >
          <div className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#64748B] mb-2">
            {label && label !== "SPONSORED" ? label : "COURSE HIRING PARTNER"}
          </div>
          <BrandLogoTile
            brand={resolvedBrand}
            size="lg"
            onClick={() => dispatchOpenCompanyProfile(brandName)}
            className="w-full h-[115px] rounded-[8px]"
          />
          <div className="mt-3 flex items-center justify-between gap-2.5">
            <button
              type="button"
              onClick={(e) => triggerCompany(e, brandName)}
              className="text-xs font-semibold text-[#0B1D3A] hover:text-[#B88A22] leading-snug text-left cursor-pointer transition-colors"
            >
              {title || `${brandName} hires Team Leaders from this course →`}
            </button>
            <button
              type="button"
              onClick={(e) => triggerCompany(e, brandName)}
              className="px-3 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-[11px] font-bold transition-colors cursor-pointer shrink-0"
            >
              {resolvedJoinText}
            </button>
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT G: SIDEBAR 2x2 LOGO GRID
  if (size === "sidebar-grid") {
    const gridBrands: SponsorBrandId[] = [
      "northstone",
      "kalpavana",
      "riverbend",
      "greenacre",
    ];
    return (
      <>
        <div
          style={customStyle}
          className={`w-full bg-white rounded-[12px] border border-[#E2E8F0] p-4 shadow-2xs flex flex-col gap-3 select-text ${className}`}
        >
          <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B88A22]">
            {label && label !== "SPONSORED" ? label : "HIRING FROM THIS COURSE"}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {gridBrands.map((b) => (
              <BrandLogoTile
                key={b}
                brand={b}
                size="sm"
                showSampleTag
                onClick={() => dispatchOpenCompanyProfile(SPONSOR_BRANDS[b].name)}
                className="h-[78px] w-full rounded-[8px]"
              />
            ))}
          </div>

          {showControls && (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={(e) => triggerApply(e, "Course Hiring Openings (23 roles)")}
                className="w-full py-2.5 px-2 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                {primaryCtaText && primaryCtaText !== "Apply Now"
                  ? primaryCtaText
                  : "See all 23 openings"}
              </button>
              <button
                type="button"
                onClick={(e) => triggerCompany(e, "Course Hiring Partners")}
                className="w-full py-2.5 px-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer text-center"
              >
                {resolvedJoinText}
              </button>
            </div>
          )}
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT H: PROGRAM TITLE SPONSOR (Wider 340-400x145 logo + wider partner row)
  if (size === "program-sponsor") {
    const partnerRow: SponsorBrandId[] = ["kalpavana", "riverbend", "skyline", "greenacre"];
    return (
      <>
        <div
          style={customStyle}
          className={`w-full min-w-full bg-[#102348] rounded-[12px] p-5 sm:p-6 border border-[#1E3A6D] flex flex-col lg:flex-row items-stretch lg:items-center gap-6 select-text ${className}`}
        >
          <BrandLogoTile
            brand="northstone"
            size="lg"
            onClick={() => dispatchOpenCompanyProfile(SPONSOR_BRANDS.northstone.name)}
            className="w-full sm:w-[300px] lg:w-[350px] xl:w-[390px] h-[145px] rounded-[8px] shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
              {label && label !== "SPONSORED"
                ? label
                : "LEAD HIRING PARTNER · OPEN PLOT TEAM BUILDING PROGRAM"}
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5 leading-snug">
              {title || "Northstone Projects will interview every graduate of this program"}
            </h3>
            <p className="text-xs text-[#CBD5E1] mt-1 font-normal">
              {tagline || "Plus 11 more companies hiring Team Leaders"}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              {partnerRow.map((b) => (
                <BrandLogoTile
                  key={b}
                  brand={b}
                  size="sm"
                  onClick={() => dispatchOpenCompanyProfile(SPONSOR_BRANDS[b].name)}
                  className="w-[115px] sm:w-[132px] lg:w-[144px] h-[54px] rounded-[6px]"
                />
              ))}
              {showControls && (
                <div className="flex items-center gap-2.5 ml-auto">
                  <button
                    type="button"
                    onClick={(e) => triggerApply(e, "Program Graduate Hiring Roles")}
                    className="px-4 py-2.5 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    {primaryCtaText || "See roles"}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => triggerCompany(e, SPONSOR_BRANDS.northstone.name)}
                    className="px-4 py-2.5 rounded-[6px] border border-white/40 hover:border-white/75 hover:bg-white/10 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    {resolvedJoinText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT I: QUIZ-PASS LOGO CARDS (Full-width 3 wider logo cards)
  if (size === "quiz-pass") {
    const passRoles: { brand: SponsorBrandId; role: string; meta: string }[] = [
      { brand: "greenacre", role: "Team Leader", meta: "Medchal · Freelance" },
      { brand: "amaravana", role: "Sales Manager", meta: "Shadnagar · Full-time" },
      { brand: "riverbend", role: "Channel Partner", meta: "Kompally · Commission" },
    ];
    return (
      <>
        <div
          style={customStyle}
          className={`w-full min-w-full bg-[#102348] rounded-[12px] p-5 sm:p-6 border border-[#1E3A6D] text-left select-text ${className}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#D2AC47] text-[#0B1D3A] text-xs font-extrabold px-3 py-1 rounded-full">
                Quiz passed ✓ 86%
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                {title || "You now qualify for roles at these companies"}
              </h3>
            </div>
            <button
              type="button"
              onClick={(e) => triggerCompany(e, "Qualified Hiring Partners")}
              className="px-4 py-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              {resolvedJoinText}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {passRoles.map((item) => {
              const cfg = SPONSOR_BRANDS[item.brand];
              return (
                <div
                  key={item.brand}
                  className="bg-white rounded-[10px] overflow-hidden border border-white/10 flex flex-col justify-between shadow-sm"
                >
                  <BrandLogoTile
                    brand={item.brand}
                    size="lg"
                    onClick={() => dispatchOpenCompanyProfile(cfg.name)}
                    className="w-full h-[135px] rounded-none border-0"
                  />
                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <div className="text-[13.5px] font-extrabold text-[#0B1D3A] leading-tight">
                        {item.role}
                      </div>
                      <div className="text-[11px] text-[#64748B] font-medium mt-0.5">
                        {item.meta}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={(e) => triggerApply(e, `${cfg.name} · ${item.role}`)}
                        className="w-full py-2 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                      <button
                        type="button"
                        onClick={(e) => triggerCompany(e, cfg.name)}
                        className="w-full py-2 rounded-[6px] border border-[#0B1D3A] bg-white hover:bg-slate-50 text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                      >
                        {resolvedJoinText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[#CBD5E1] mt-3.5 font-normal">
            Your score is shared with an employer only when you apply.
          </p>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT K: IN-GRID HORIZONTAL LOGO CARD (Wider 210-240x145 logo + Apply / Join Now)
  if (size === "in-grid-horizontal") {
    return (
      <>
        <div
          style={customStyle}
          onClick={(e) => triggerCompany(e, brandName)}
          className={`w-full bg-white rounded-[12px] border border-[#E2E8F0] hover:border-[#C99A2E]/50 p-4 sm:p-5 shadow-2xs hover:shadow-[0_12px_30px_rgba(11,29,58,0.08)] transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 cursor-pointer select-text ${className}`}
        >
          <BrandLogoTile
            brand={resolvedBrand}
            size="lg"
            onClick={() => dispatchOpenCompanyProfile(brandName)}
            className="w-full sm:w-[210px] lg:w-[235px] h-[145px] rounded-[8px] shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B88A22]">
              {label && label !== "SPONSORED" ? label : "HIRING · SPONSORED"}
            </div>
            <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0B1D3A] leading-snug mt-1">
              {title || "Score 80%+ in Legal & Approvals for a priority interview"}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span className="bg-[#FAF3DD] text-[#8A6518] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                Sales Manager
              </span>
              <span className="bg-[#FAF3DD] text-[#8A6518] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                3 openings
              </span>
            </div>
            {showControls && (
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={(e) => triggerApply(e, title || `${brandName} Priority Interview`)}
                  className="px-3.5 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={(e) => triggerCompany(e, brandName)}
                  className="px-3.5 py-1.5 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                >
                  {resolvedJoinText}
                </button>
              </div>
            )}
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT A: LOGO BILLBOARD (Dark navy, wider 260-340x130 logo)
  if (size === "billboard") {
    return (
      <>
        <div
          style={customStyle}
          className={`w-full min-w-full bg-[#102348] border border-[#1E3A6D] rounded-[12px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 select-text ${className}`}
        >
          <BrandLogoTile
            brand={resolvedBrand}
            size="lg"
            onClick={() => dispatchOpenCompanyProfile(brandName)}
            className="w-full sm:w-[250px] lg:w-[300px] xl:w-[340px] h-[130px] rounded-[8px] shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
              {label && label !== "SPONSORED" ? label : "HIRING · SPONSORED"}
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug mt-0.5">
              {title || `${brandName} is hiring 6 Team Leaders`}
            </h3>
            <p className="text-xs text-[#CBD5E1] font-normal mt-1">
              {tagline || "Medchal · Freelance or full-time · Prefers learners of this course"}
            </p>

            {showControls && (
              <div className="flex flex-wrap items-center gap-2.5 mt-3.5">
                <button
                  type="button"
                  onClick={(e) => triggerApply(e, title || `${brandName} — Team Leaders`)}
                  className="px-4 py-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                >
                  {primaryCtaText || "Apply now"}
                </button>
                <button
                  type="button"
                  onClick={(e) => triggerCompany(e, brandName)}
                  className="px-4 py-2 rounded-[6px] border border-white/40 hover:border-white/75 hover:bg-white/10 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {resolvedJoinText}
                </button>
              </div>
            )}
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT J: LEADERBOARD BANNER (Full width dark navy, wider 290-380x115 logo) & BANNER-STRIP
  if (size === "leaderboard" || size === "banner-strip") {
    return (
      <>
        <div
          style={customStyle}
          className={`w-full min-w-full bg-[#102348] border border-[#1E3A6D] rounded-[12px] p-4 sm:p-5 px-5 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 select-text ${className}`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 flex-1 min-w-0 w-full">
            <BrandLogoTile
              brand={resolvedBrand}
              size="lg"
              onClick={() => dispatchOpenCompanyProfile(brandName)}
              className={`rounded-[8px] shrink-0 ${
                size === "banner-strip"
                  ? "w-full sm:w-[220px] lg:w-[260px] h-[86px]"
                  : "w-full sm:w-[290px] lg:w-[340px] xl:w-[380px] h-[115px]"
              }`}
            />
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                {label && label !== "SPONSORED" && label !== "SPONSORED AD" && label !== "ADVERTISEMENT"
                  ? label
                  : "HIRING · SPONSORED"}
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5 leading-snug">
                {title || `${brandName} is hiring 15 plot sales executives`}
              </h3>
              <p className="text-xs text-[#CBD5E1] font-normal mt-1">
                {tagline || "Top Knowledge Bank scorers get a direct interview call"}
              </p>
            </div>
          </div>

          {showControls && (
            <div className="flex items-center gap-2.5 shrink-0 self-start lg:self-center">
              <button
                type="button"
                onClick={(e) => triggerApply(e, title || `${brandName} Hiring Mandate`)}
                className="px-4 py-2.5 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                {primaryCtaText || "Apply now"}
              </button>
              <button
                type="button"
                onClick={(e) => triggerCompany(e, brandName)}
                className="px-4 py-2.5 rounded-[6px] border border-white/40 hover:border-white/75 hover:bg-white/10 text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                {resolvedJoinText}
              </button>
            </div>
          )}
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT B: SIDEBAR LOGO CARD (Warm cream card with full-width logo)
  if (size === "sidebar-widget" || size === "sidebar-tower") {
    return (
      <>
        <div
          style={customStyle}
          className={`w-full bg-[#FCF9F0] border border-[#ECE3C8] rounded-[12px] p-4 flex flex-col gap-3.5 text-left select-text ${className}`}
        >
          <BrandLogoTile
            brand={resolvedBrand}
            size="md"
            onClick={() => dispatchOpenCompanyProfile(brandName)}
            className="w-full h-[125px] rounded-[8px]"
          />

          <div className="flex flex-col gap-1.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8C7A5B]">
              {label && label !== "SPONSORED" && label !== "SPONSORED AD"
                ? label
                : "HIRING · SPONSORED"}
            </div>
            <h3 className="text-[13.5px] font-extrabold text-[#0B1D3A] leading-snug">
              {title || `${brandName}: Sales Managers, Shadnagar`}
            </h3>
            {tagline && (
              <p className="text-[11px] text-[#64748B] font-medium line-clamp-2">
                {tagline}
              </p>
            )}
          </div>

          {showControls && (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={(e) => triggerApply(e, title || `${brandName} Openings`)}
                className="px-3.5 py-2 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {primaryCtaText && primaryCtaText !== "Apply Now"
                  ? primaryCtaText
                  : "See 4 openings"}
              </button>
              <button
                type="button"
                onClick={(e) => triggerCompany(e, brandName)}
                className="px-3.5 py-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
              >
                {resolvedJoinText}
              </button>
            </div>
          )}
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // FORMAT C: LOGO THUMBNAIL CARD (Course-card size) - also handles "card" and "square"
  if (size === "card" || size === "square") {
    return (
      <>
        <div
          style={customStyle}
          className={`w-full h-full bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 flex flex-col justify-between text-left select-text ${className}`}
        >
          <BrandLogoTile
            brand={resolvedBrand}
            size="lg"
            onClick={() => dispatchOpenCompanyProfile(brandName)}
            className="w-full h-[160px] shrink-0 rounded-none border-0"
          />

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B88A22]">
                {label && label !== "SPONSORED" ? label : "HIRING · SPONSORED"}
              </div>
              <h3 className="text-sm font-extrabold text-[#0B1D3A] mt-1 leading-snug">
                {title || `${brandName}: 12 Sales Executives`}
              </h3>
              <p className="text-xs text-[#64748B] font-normal mt-1 leading-relaxed">
                {tagline || "Shamshabad · Freshers welcome · Launch Pad graduates preferred"}
              </p>
            </div>

            {showControls && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={(e) => triggerApply(e, title || `${brandName} — Sales Executives`)}
                  className="px-4 py-2 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {primaryCtaText && primaryCtaText !== "Apply Now" ? primaryCtaText : "Apply"}
                </button>
                <button
                  type="button"
                  onClick={(e) => triggerCompany(e, brandName)}
                  className="px-4 py-2 rounded-[6px] bg-[#D2AC47] hover:bg-[#DEC060] text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                >
                  {resolvedJoinText}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSaved((prev) => !prev);
                  }}
                  className="px-3.5 py-2 rounded-[6px] border border-[#CBD5E1] bg-white hover:bg-slate-50 text-[#0B1D3A] text-xs font-bold transition-colors cursor-pointer"
                >
                  {saved ? "Saved ✓" : "Save"}
                </button>
              </div>
            )}
          </div>
        </div>
        {renderLocalModal()}
      </>
    );
  }

  // COMPACT-BADGE FORMAT
  return (
    <>
      <div
        style={customStyle}
        className={`bg-white border border-[#E2E8F0] rounded-[10px] px-3.5 py-2 shadow-2xs hover:border-[#C99A2E]/50 transition-colors flex items-center justify-between gap-3 select-text ${className}`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <BrandLogoTile
            brand={resolvedBrand}
            size="sm"
            showSampleTag={false}
            className="w-8 h-8 rounded-[6px] shrink-0"
          />
          <div className="min-w-0">
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#B88A22]">
              {label && label !== "SPONSORED" ? label : "HIRING · SPONSORED"}
            </div>
            <div className="text-xs font-bold text-[#0B1D3A] truncate">
              {title || tagline || brandName}
            </div>
          </div>
        </div>

        {showControls && (
          <button
            type="button"
            onClick={(e) => triggerCompany(e, brandName)}
            className="px-3 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#162E56] text-white text-[11px] font-bold cursor-pointer transition-colors shrink-0 flex items-center gap-1"
          >
            <span>{resolvedJoinText}</span>
            <ArrowRight className="w-3 h-3 text-[#D2AC47]" />
          </button>
        )}
      </div>
      {renderLocalModal()}
    </>
  );
}
