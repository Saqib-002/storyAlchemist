"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { AUDIOS } from "@/constants";

const VoiceBanner = () => {
  const [playing, setPlaying] = useState<string>("");
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
  function togglePlayback(value: string, idx: number) {
    const audio = audioRefs!.current[idx] as unknown as HTMLAudioElement;
    if (value !== playing && playing) {
      for (const audio of audioRefs.current) {
        audio?.pause();
      }
      setPlaying("");
      audio.play();
      setPlaying(value);
    } else if (playing) {
      audio?.pause();
      setPlaying("");
    } else {
      audio.play();
      setPlaying(value);
    }
  }
  return (
    <section className="max-w-full p-4 md:p-20">
      <h1 className="h1-bold text-center text-dark-100/80">
        AI Voices in different Tones & Languages
      </h1>
      <p className="paragraph-regular mt-4  text-center text-dark-100/80">
        Generate the video with your own voice tone and any language you want
      </p>
      <div className="relative z-10 mt-10 px-4  py-8 pt-14 before:absolute before:left-[5%] before:top-0 before:z-[-1] before:h-[105%] before:w-[90%] before:rounded-2xl before:bg-primary-850 before:content-['']">
        <div className="no-scrollbar flex justify-center gap-4 overflow-x-scroll">
          {AUDIOS.map(({ src, value, label }, idx) => (
            <div
              className="flex w-fit flex-col items-center justify-between gap-4 rounded-lg bg-primary-200 p-8"
              key={value}
            >
              <Image
                src={`/images/${value === "hope" ? "female.png" : "male.png"}`}
                alt="voice.png"
                width={200}
                height={250}
                className="!h-[250px] min-h-[250px] min-w-[180px] object-cover"
              />
              <p className="base-semibold  w-fit !font-spaceGrotesk">{label}</p>
              <audio
                ref={(element) => {
                  audioRefs.current[idx] = element;
                }}
                onPlaying={() => setPlaying(value)}
                onPause={() => setPlaying("")}
                onEnded={() => setPlaying("")}
                id={value}
              >
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button
                className="flex-center rounded-[50%] p-4 shadow-inset backdrop-blur"
                type="button"
                onClick={() => togglePlayback(value, idx)}
              >
                <Image
                  src={`/icons/${playing === value ? "pause.svg" : "play.svg"}`}
                  alt="play"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceBanner;
