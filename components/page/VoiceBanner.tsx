import React from "react";
import VoiceCard from "../card/VoiceCard";

const VOICE_CARD_DATA = [
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
  { title: "Product Designer", imgUrl: "/images/person.png" },
];

const VoiceBanner = () => {
  return (
    <section className="max-w-full p-20">
      <h1 className="h1-bold text-center text-primary-100/80">
        AI Voices in different Tones & Languages
      </h1>
      <p className="paragraph-regular mt-4  text-center text-primary-100/80">
        Generate the video with your own voice tone and any language you want
      </p>
      <div className="relative z-10 mt-10 px-4  py-8 pt-14 before:absolute before:left-[5%] before:top-0 before:z-[-1] before:h-[105%] before:w-[90%] before:rounded-2xl before:bg-primary-800 before:content-['']">
        <div className="no-scrollbar flex gap-4 overflow-x-scroll">
          {VOICE_CARD_DATA.map(({ title, imgUrl }) => (
            <VoiceCard key={imgUrl} title={title} imgUrl={imgUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceBanner;
