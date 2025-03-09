import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";

import MarketingCards from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import NoiseOverlay from "@/components/noiseOverlay";
import BotPressChat from "@/components/homepage/botPressChat";


export default function Home() {

  return (
   
    <PageWrapper>
      <BotPressChat/>
       {/* <NoiseOverlay/> */}
      <div className="flex flex-col justify-center items-center w-full">
        <HeroSection />
      </div>
      <SideBySide />
      <MarketingCards />
      <Pricing />
      <AccordionComponent />
      {/* BotPress Webchat Inject Script */}
      
    </PageWrapper>
  );
}
