import { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "muted" | "inverse";
  className?: string;
}) {
  const color =
    tone === "inverse"
      ? "text-text-inverse-muted"
      : tone === "muted"
        ? "text-text-muted"
        : "text-accent";
  return (
    <span
      className={`block text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] ${color} ${className}`}
    >
      {children}
    </span>
  );
}
