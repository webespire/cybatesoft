import type React from "react";

export function ChevronDown({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}

export function ChevronRight({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}

export function ChevronLeft({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M8 2L4 6l4 4" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#555" strokeWidth="2.2">
      <path d="M2 2l12 12M14 2L2 14" />
    </svg>
  );
}