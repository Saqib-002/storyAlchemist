import Banner from "@/components/page/home/Banner";
import Broadcast from "@/components/page/home/Broadcast";
import VoiceBanner from "@/components/page/home/VoiceBanner";
import Tradition from "@/components/shared/Tradition";

export default function Home() {
  return (
    <>
      <Banner />
      <VoiceBanner />
      <Tradition />
      <Broadcast />
    </>
  );
}
