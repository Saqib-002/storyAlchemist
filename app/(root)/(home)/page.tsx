import Banner from "@/components/page/home/Banner";
import Broadcast from "@/components/page/home/Broadcast";
import Faqs from "@/components/page/home/Faqs";
import VoiceBanner from "@/components/page/home/VoiceBanner";
import Tradition from "@/components/shared/Tradition";

export default function Home() {
  console.log("s");
  return (
    <>
      <Banner />
      <VoiceBanner />
      <Tradition />
      <Broadcast />
      <Faqs />
    </>
  );
}
