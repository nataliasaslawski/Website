"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subtle border-t border-border-subtle">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center gap-4 py-5 text-left"
            >
              <span className="w-full font-display text-[19px] font-medium leading-snug text-navy-900 md:w-[460px]">
                {item.question}
              </span>
              <span aria-hidden className="relative h-3 w-3 flex-none">
                <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-navy-900/50" />
                <span
                  className={`absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-navy-900/50 transition-opacity duration-[var(--duration-normal)] ${open ? "opacity-0" : "opacity-100"}`}
                />
              </span>
            </button>
            {open && (
              <p className="pb-7 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
