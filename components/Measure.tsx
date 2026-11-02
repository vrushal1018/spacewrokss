import React from "react";

// The measure: a dimension line with Ina TechFM blue ticks that carries a short label.
function Tick({ side }: { side: "l" | "r" }) {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" aria-hidden="true" className="shrink-0">
      {side === "l" ? (
        <line x1="8" y1="12" x2="16" y2="12" stroke="#1B1F24" strokeWidth="1.2" />
      ) : (
        <line x1="0" y1="12" x2="8" y2="12" stroke="#1B1F24" strokeWidth="1.2" />
      )}
      <line x1="8" y1="1" x2="8" y2="23" stroke="#1B1F24" strokeWidth="1.2" />
      <line x1="1" y1="19" x2="15" y2="5" stroke="#2495D3" strokeWidth="3" />
    </svg>
  );
}

interface MeasureProps {
  label?: string;
  centered?: boolean;
  className?: string;
}

export default function Measure({
  label = "An interior vertical of Ina TechFM",
  centered = false,
  className = "",
}: MeasureProps) {
  return (
    <div
      className={`measure-bar flex items-center w-full h-6 ${
        centered ? "centered" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <Tick side="l" />
      <span
        className={`border-t-[1.2px] border-ink ${
          centered ? "flex-1" : "shrink-0 w-6"
        }`}
      />
      <p className="shrink-0 mx-3.5 text-[12px] font-medium tracking-label uppercase text-slate whitespace-nowrap">
        {label}
      </p>
      <span className="flex-1 border-t-[1.2px] border-ink" />
      <Tick side="r" />
    </div>
  );
}

