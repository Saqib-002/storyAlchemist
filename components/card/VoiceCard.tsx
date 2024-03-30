import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  imgUrl: string;
}
const VoiceCard = ({ title, imgUrl }: Props) => {
  return (
    <div className="flex-center w-fit flex-col gap-4 rounded-lg bg-primary-200 p-8">
      <Image
        src={imgUrl}
        alt="voice.png"
        width={200}
        height={250}
        className="min-h-[250px] min-w-[180px] object-cover"
      />
      <p className="base-semibold  w-fit !font-spaceGrotesk">{title}</p>
      <span className="flex-center rounded-[50%] p-4 shadow-inset backdrop-blur">
        <Image src="/icons/play.svg" alt="play" width={32} height={32} />
      </span>
    </div>
  );
};

export default VoiceCard;
