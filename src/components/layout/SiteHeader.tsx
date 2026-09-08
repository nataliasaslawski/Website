"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";
import { brand } from "@/lib/images";

const linkClasses =
  "text-sm tracking-[0.01em] text-text-secondary transition-colors hover:text-navy-900";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLeistungenOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-page/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-6 md:px-10">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src={brand.logoNavy}
            alt="Natalia Saslawski – Executive Search & Talent Advisory"
            width={1600}
            height={526}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setLeistungenOpen((v) => !v)}
                      aria-expanded={leistungenOpen}
                      className={`flex items-center gap-1.5 ${linkClasses}`}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`mt-0.5 h-1.5 w-1.5 border-b border-r border-current transition-transform ${
                          leistungenOpen ? "-translate-y-0.5 -rotate-135" : "rotate-45"
                        }`}
                      />
                    </button>
                    {leistungenOpen && (
                      <div className="absolute left-0 top-full mt-3 w-64 border border-border-default bg-surface-card py-2 shadow-md">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setLeistungenOpen(false)}
                            className="block px-4 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-navy-900"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href} className={linkClasses}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

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
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-surface-page lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} className="border-b border-border-subtle py-3.5">
                    <span className="text-[15px] text-navy-900">{item.label}</span>
                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-[15px] text-text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border-subtle py-3.5 text-[15px] text-navy-900 last:border-none"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
