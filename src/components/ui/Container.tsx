import { ReactNode } from "react";

export function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 ${className}`}
      style={{ maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)" }}
    >
      {children}
    </div>
  );
}
