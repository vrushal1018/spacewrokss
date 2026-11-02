import React from "react";

// The open A: the logo's roof A, enlarged as a thin taupe outline. It stands on the bottom edge and rises.
interface OutlineAProps {
  className?: string;
}

export default function OutlineA({ className = "outline-a" }: OutlineAProps) {
  return (
    <svg
      className={className}
      viewBox="-2 -2 512 365"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <polygon
        points="0,361 238,0 273,0 508,361 413,361 255,118 95,361"
        fill="none"
        stroke="#878787"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

