import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getPosts, categories } from "@/lib/posts";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Fachliche Beiträge zu Executive Search, Recruiting, Talent Acquisition und Suchstrategien.",
};

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-12 hidden h-44 w-44 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 right-24 hidden h-28 w-28 rounded-full bg-taupe-400/12 xl:block"
        />
        <Container wide className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow className="desktop:text-[13.5px]!">Insights</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-[2.75rem] desktop:text-[3rem]!">
              Perspektiven aus Recruiting, Search und Talent Advisory
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Fachliche Beiträge zu Executive Search, Suchstrategien,
              Kandidatenmärkten und Recruiting-Prozessen — praxisnah und aus
              rund 15 Jahren Erfahrung in Personalberatung und Search.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="border border-border-default px-3 py-1.5 text-xs uppercase tracking-[var(--tracking-wide)] text-text-secondary desktop:text-[13px]!"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container wide className="py-16 md:py-24">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center gap-8 border border-border-default bg-surface-card px-8 py-16 text-center md:flex-row md:text-left">
              <div className="relative h-40 w-full flex-none overflow-hidden md:h-32 md:w-48">
                <Image
                  src={images.insights.hero}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div>
                <h2 className="font-display text-xl font-medium text-navy-900 desktop:text-[1.5rem]!">
                  Die ersten Beiträge folgen in Kürze.
                </h2>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
                  Hier entstehen fortlaufend fachliche Einblicke zu Search,
                  Recruiting und Talent Advisory. Ziel ist Qualität statt
                  Frequenz — neue Beiträge erscheinen, sobald sie fertig sind.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-px overflow-hidden border border-border-default bg-border-default md:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="bg-surface-card p-6 desktop:p-8!">
                  <span className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-accent desktop:text-[13.5px]!">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-navy-900 desktop:text-[1.375rem]!">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary desktop:text-[17px]!">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
