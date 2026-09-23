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
              className="grid w-full grid-cols-[1fr_32px] items-start gap-x-4 py-5 text-left"
            >
              <span className="font-display text-[20px] font-semibold leading-snug text-navy-900">
                {item.question}
              </span>
              <span aria-hidden className="relative mt-1.5 h-3 w-3 flex-none justify-self-end">
                <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-navy-900/50" />
                <span
                  className={`absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-navy-900/50 transition-opacity duration-[var(--duration-normal)] ${open ? "opacity-0" : "opacity-100"}`}
                />
              </span>
            </button>
            {open && (
              <p className="max-w-2xl pb-7 pr-12 text-[16px] font-normal leading-relaxed text-text-muted">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
