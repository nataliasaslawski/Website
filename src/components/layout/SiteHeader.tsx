"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, primaryCta } from "@/lib/content";
import { brand } from "@/lib/images";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-page/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={brand.markNavy}
            alt="Natalia Saslawski"
            width={36}
            height={26}
            className="h-7 w-auto"
            priority
          />
          <span className="font-wordmark text-[15px] font-semibold tracking-[0.06em] text-navy-900">
            NATALIA SASLAWSKI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.01em] transition-colors ${
                  active ? "text-navy-900 font-medium" : "text-text-secondary hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-navy-900 bg-navy-900 px-5 py-2.5 text-sm font-medium text-text-inverse transition-colors hover:bg-navy-800"
          >
            {primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-border-default lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-navy-900 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-navy-900 transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-navy-900 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-surface-page lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-subtle py-3.5 text-[15px] text-navy-900 last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-navy-900 px-5 py-3 text-sm font-medium text-text-inverse"
            >
              {primaryCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
