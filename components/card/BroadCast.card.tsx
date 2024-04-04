import Image from "next/image";
import React from "react";
import CustomButton from "../shared/CustomButton";

const BroadCastCard = () => {
  return (
    <div className="broadcast-grad sticky top-[100px] z-10 rounded-2xl px-20 py-28">
      <Image
        src="/images/broadcast/anime-one.png"
        className="absolute !left-6  !top-6 z-40 max-h-[70px] max-w-[429px] animate-anime-one"
        width={429}
        height={52}
        alt="broadcast-anime-one"
      />
      <Image
        src="/images/broadcast/anime-two.png"
        className=" absolute !bottom-6  !right-6 z-40 max-h-[70px] max-w-[429px] animate-anime-two"
        width={429}
        height={72}
        alt="broadcast-anime-two"
      />
      <div className="grid grid-cols-2 gap-4 p-1">
        <div>
          <h2>Commercial & Broadcast Rights</h2>
          <p>
            Your Text To Speech Synthesized Audio Files Are Securely Stored In
            The Cloud. You Can Also Create Drafts And Convert The Text To Audio
            At A Later Time. Clear, Consistent, And Professional Voices For
            Marketing, Explainer, Product, And YouTube Videos.
          </p>
          <CustomButton type="button" style="primary" title="Request a demo" />
        </div>
        <Image
          src="/images/broadcast/broadcast-thumb.png"
          alt="broadcast-thumb"
          width={1024}
          height={1024}
          className="size-[320px] max-h-full"
        />
      </div>
    </div>
  );
};

export default BroadCastCard;
