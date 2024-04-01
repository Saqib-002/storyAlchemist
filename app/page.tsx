import Banner from "@/components/page/Banner";
import Broadcast from "@/components/page/Broadcast";
import VoiceBanner from "@/components/page/VoiceBanner";
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
