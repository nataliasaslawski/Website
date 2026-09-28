import { ReactNode } from "react";

export function Container({
  children,
  narrow = false,
  wide = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  /**
   * On very large desktop viewports, lets the container grow beyond the
   * site-wide --container-max (1180px): up to 1260px from xl (1280px), and
   * up to 1360px from the custom `desktop` breakpoint (1440px). Below xl,
   * behaves exactly like the default container. Opt-in per usage; does not
   * affect the shared --container-max token or any Container that doesn't
   * pass it.
   */
  wide?: boolean;
  className?: string;
}) {
  if (wide) {
    return (
      <div
        className={`mx-auto w-full max-w-[var(--container-max)] px-6 md:px-10 xl:max-w-[1260px] desktop:max-w-[1360px]! ${className}`}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 ${className}`}
      style={{ maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)" }}
    >
      {children}
    </div>
  );
}
