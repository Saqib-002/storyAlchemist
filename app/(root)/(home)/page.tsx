import Banner from "@/components/page/home/Banner";
import Broadcast from "@/components/page/home/Broadcast";
import Faqs from "@/components/page/home/Faqs";
import VoiceBanner from "@/components/page/home/VoiceBanner";
import AutoScrollCarousel from "@/components/shared/AutoScrollCarousel";
import Tradition from "@/components/shared/Tradition";

export default function Home() {
  return (
    <>
      <Banner />
      <VoiceBanner />
      <Tradition />
      <Broadcast />
      <AutoScrollCarousel direction="forward" data={{}} />
      <AutoScrollCarousel direction="backward" data={{}} />
      <Faqs />
    </>
  );
}
