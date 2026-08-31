import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-sm font-medium tracking-[0.02em] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-standard)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-text-inverse hover:bg-navy-800 border border-navy-900",
  secondary:
    "bg-transparent text-navy-900 border border-border-strong hover:bg-navy-900 hover:text-text-inverse",
  ghost:
    "bg-transparent text-navy-900 border border-transparent hover:border-border-default",
  inverse:
    "bg-paper-050 text-navy-900 border border-paper-050 hover:bg-transparent hover:text-text-inverse",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
