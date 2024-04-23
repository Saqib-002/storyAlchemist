"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../shared/CustomButton";
import { broadCastVariants } from "@/lib/animation";
import { motion } from "framer-motion";

interface Props {
  imgPos: "before" | "after";
}

const BroadCastCard = ({ imgPos }: Props) => {
  return (
    <motion.div
      variants={broadCastVariants}
      whileInView={"inView"}
      className="broadcast-grad no-scrollbar sticky top-[100px] z-10 h-fit overflow-y-scroll rounded-2xl px-8 py-28 max-lg:h-[450px] md:px-20"
      transition={{ duration: 0.3, type: "linear" }}
      initial={"initial"}
    >
      <Image
        src="/images/broadcast/anime-one.png"
        className="absolute !left-6  !top-6 z-40 max-h-[70px] max-w-[429px] animate-anime-one"
        width={429}
        height={52}
        alt="broadcast-anime-one"
      />
      <Image
        src="/images/broadcast/anime-two.png"
        className=" absolute !bottom-6  !right-6 z-40 max-h-[70px] max-w-[429px] animate-anime-two max-lg:hidden"
        width={429}
        height={72}
        alt="broadcast-anime-two"
      />
      <div
        className={`flex-center gap-6 p-1 ${imgPos === "before" ? "flex-row-reverse" : ""} flex-wrap max-md:h-[300px] max-md:py-2`}
      >
        <div className="flex flex-col gap-4 text-dark-100 lg:max-w-[65%]">
          <h2 className="h1-bold">Commercial & Broadcast Rights</h2>
          <p>
            Your Text To Speech Synthesized Audio Files Are Securely Stored In
            The Cloud. You Can Also Create Drafts And Convert The Text To Audio
            At A Later Time. Clear, Consistent, And Professional Voices For
            Marketing, Explainer, Product, And YouTube Videos.
          </p>
          <CustomButton
            type="button"
            style="primary"
            title="Request a demo"
            otherClasses="w-fit"
          />
        </div>
        <Image
          src="/images/broadcast/broadcast-thumb.png"
          alt="broadcast-thumb"
          width={1024}
          height={1024}
          className="size-[300px] max-h-full"
        />
      </div>
    </motion.div>
  );
};

export default BroadCastCard;
