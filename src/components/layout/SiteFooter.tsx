import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/lib/content";
import { brand } from "@/lib/images";

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface-inverse text-text-inverse">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-[var(--radius-md)] bg-cream-050 px-7 py-6">
              <Image
                src={brand.logoNavy}
                alt="Natalia Saslawski – Executive Search & Talent Advisory"
                width={1600}
                height={526}
                className="h-12 w-auto"
              />
              <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
                {site.locationShort}, {site.region}.
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm tracking-[0.02em] text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
              >
                Auf LinkedIn vernetzen
              </a>
            </div>
          </div>

          <div>
            <span className="block text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-inverse-muted">
              Navigation
            </span>
            <ul className="mt-4 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-text-inverse-muted transition-colors hover:text-text-inverse"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="block text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-inverse-muted">
              Kontakt
            </span>
            <ul className="mt-4 space-y-3 text-[15px] text-text-inverse-muted">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-text-inverse">
                  {site.email}
                </a>
              </li>
              <li>{site.locationShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-[oklch(from_var(--paper-050)_l_c_h_/_0.15)] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-text-inverse-muted">
            © {new Date().getFullYear()} {site.name} — {site.tagline}
          </p>
          <ul className="flex gap-6">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-text-inverse-muted hover:text-text-inverse"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
