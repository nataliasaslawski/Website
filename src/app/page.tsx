import { Hero } from "@/components/home/Hero";
import { IntroStatement } from "@/components/home/IntroStatement";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Method } from "@/components/home/Method";
import { FounderTeaser } from "@/components/home/FounderTeaser";
import { ExpertiseTrust } from "@/components/home/ExpertiseTrust";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ProblemSolution />
      <ServicesOverview />
      <Method />
      <FounderTeaser />
      <ExpertiseTrust />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
