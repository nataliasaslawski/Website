import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { IntroStatement } from "@/components/home/IntroStatement";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Method } from "@/components/home/Method";
import { FounderTeaser } from "@/components/home/FounderTeaser";
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
      <div className="bg-surface-page">
        <Container wide>
          <div className="border-t-2 border-border-default shadow-[0_1px_3px_rgba(10,30,50,0.08)]" />
        </Container>
      </div>
      <HomeFaq />
      <FinalCta />
    </>
  );
}
