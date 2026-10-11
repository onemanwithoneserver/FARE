import type { SVGProps } from "react";

export interface VerifiedBadgeProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  title?: string;
}

/**
 * Verified Mentor Badge
 * Matches the blue circular badge with white scalloped rosette ring and checkmark.
 */
export function VerifiedBadge({
  size = 18,
  className = "",
  title = "Verified Real Estate Mentor",
  ...props
}: VerifiedBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-xs select-none ${className}`}
      aria-label={title}
      role="img"
      {...props}
    >
      <title>{title}</title>
      {/* Outer Blue Circle */}
      <circle cx="12" cy="12" r="11" fill="#2563EB" />

      {/* White Scalloped Rosette Ring (12 Lobes) */}
      <path
        d="M 17.89 10.42 A 1.25 1.25 0 0 1 17.89 13.58 A 1.25 1.25 0 0 1 16.31 16.31 A 1.25 1.25 0 0 1 13.58 17.89 A 1.25 1.25 0 0 1 10.42 17.89 A 1.25 1.25 0 0 1 7.69 16.31 A 1.25 1.25 0 0 1 6.11 13.58 A 1.25 1.25 0 0 1 6.11 10.42 A 1.25 1.25 0 0 1 7.69 7.69 A 1.25 1.25 0 0 1 10.42 6.11 A 1.25 1.25 0 0 1 13.58 6.11 A 1.25 1.25 0 0 1 16.31 7.69 A 1.25 1.25 0 0 1 17.89 10.42 Z"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center White Checkmark */}
      <path
        d="m8.9 12.2 2.2 2.2 4.2-4.5"
        stroke="#FFFFFF"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default VerifiedBadge;
