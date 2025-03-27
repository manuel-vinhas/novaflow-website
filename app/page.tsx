import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import ValueProposition from "@/components/homepage/value-proposition";
import MarketingCards from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import NoiseOverlay from "@/components/noiseOverlay";
import BotPressChat from "@/components/homepage/botPressChat";
import UseCases from "@/components/homepage/use-cases";
import Features from "@/components/homepage/features";
import Testimonials from "@/components/homepage/testimonials";
import AboutUs from "@/components/homepage/about-us";

export default function Home() {
  return (
    <PageWrapper>
      <BotPressChat/>
      {/* <NoiseOverlay/> */}
      <div className="flex flex-col justify-center items-center w-full">
        <HeroSection />
      </div>
      <ValueProposition />
      <SideBySide />
      <UseCases />
      <Features />
      <Testimonials />
      <AboutUs />
      {/*<MarketingCards />*/}
      {/*<Pricing />*/}
      <AccordionComponent />
      {/* BotPress Webchat Inject Script */}
    </PageWrapper>
  );
}