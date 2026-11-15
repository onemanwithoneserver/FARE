import fareLogoSvg from "../../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import {
  aboutUsData as baseAboutUsData,
  type CompanyLogoBadge,
  type GalleryItem,
  type CompanyVideoItem,
} from "../data";

export type { CompanyLogoBadge, GalleryItem, CompanyVideoItem };

export const aboutUsSectionData = {
  ...baseAboutUsData,
  brandMarkLogo: fareLogoSvg,
};
