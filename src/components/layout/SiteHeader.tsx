"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { brand } from "@/lib/images";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // On the homepage the header floats transparently over the hero image
  // until the user scrolls, then becomes the normal solid bar.
  const overlay = isHome && !scrolled && !open;

  useEffect(() => {
    if (!isHome) return;
    function handleScroll() {
      setScrolled(window.scrollY > 48);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLeistungenOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClasses = `relative text-sm tracking-[0.01em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
    overlay
      ? "text-text-inverse/85 hover:text-text-inverse after:bg-paper-050"
      : "text-text-secondary hover:text-navy-900 after:bg-navy-900"
  }`;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 left-0 z-50 w-full transition-colors duration-300 ${
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border-subtle bg-surface-page/95 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center px-6 md:px-10 ${
          isHome ? "justify-center" : "justify-between"
        }`}
      >
        {!isHome && (
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
        )}

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
                    <div
                      aria-hidden={!leistungenOpen}
                      className={`absolute left-1/2 top-full w-64 -translate-x-1/2 overflow-hidden border bg-surface-card text-left shadow-md transition-all duration-300 ease-out lg:left-0 lg:translate-x-0 ${
                        leistungenOpen
                          ? "mt-3 max-h-60 border-border-default py-2 opacity-100"
                          : "mt-0 max-h-0 border-transparent py-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setLeistungenOpen(false)}
                          tabIndex={leistungenOpen ? 0 : -1}
                          style={{ transitionDelay: leistungenOpen ? `${i * 40}ms` : "0ms" }}
                          className={`block px-4 py-2.5 text-sm text-text-secondary transition-all duration-300 ease-out hover:bg-surface-elevated hover:text-navy-900 ${
                            leistungenOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
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
            className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
              overlay ? "border-paper-050/50" : "border-border-default"
            }`}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 transition-transform ${overlay ? "bg-paper-050" : "bg-navy-900"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 transition-opacity ${overlay ? "bg-paper-050" : "bg-navy-900"} ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 transition-transform ${overlay ? "bg-paper-050" : "bg-navy-900"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
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
