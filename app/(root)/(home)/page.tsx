import Faqs from "@/components/page/home/Faqs";
import VoiceBanner from "@/components/page/home/VoiceBanner";
import Tradition from "@/components/shared/Tradition";
import HeroSection from "@/components/page/home/HeroSection";
import FeaturedSection from "@/components/page/home/FeaturedSection";
import Feature from "@/components/page/home/Feature";
import PaymentPlan from "@/components/page/home/PaymentPlan";
import CardGrid from "@/components/card/CardGrid";
import StepsCard from "@/components/card/StepsCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <Feature />
      <StepsCard />
      <CardGrid />
      <PaymentPlan />
      <VoiceBanner />
      <Tradition />
      <Faqs />
    </>
  );
}
