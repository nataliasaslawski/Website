/**
 * Blog/Insights data layer.
 *
 * Currently returns no posts — there is no CMS connected yet (Sanity is the
 * recommended choice, see project notes; the client needs to create that
 * account herself). Swap the implementation of these two functions for real
 * Sanity queries once the project/dataset exists; nothing in the UI layer
 * (src/app/insights/**) needs to change.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  coverImage?: string;
};

export async function getPosts(): Promise<Post[]> {
  return [];
}

export async function getPost(slug: string): Promise<Post | null> {
  void slug;
  return null;
}

export const categories = [
  "Executive Search",
  "Professional Search",
  "Recruiting & Talent Acquisition",
  "Suchstrategien",
  "Kandidatenmärkte & Marktanalysen",
  "Direktansprache & Sourcing",
  "Kandidatenbewertung",
  "Recruiting-Prozesse",
] as const;
