"use client";

import React from "react";
import CustomButton from "../shared/CustomButton";
import { traditionVariants } from "@/lib/animation";
import { motion } from "framer-motion";

interface Props {
  title: string;
  points: string[];
  btnStyle?:
    | "link"
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "quinary"
    | "senary"
    | "septenary"
    | "ocotonary"
    | "nonary"
    | "fo"
    | "ft";
  btnType?: "submit" | "reset" | "button" | undefined;
  btnTitle: string;
  animateDir: "left" | "right";
}

const TraditionCard = ({
  title,
  points,
  btnStyle,
  btnType,
  btnTitle,
  animateDir,
}: Props) => {
  return (
    <motion.div
      variants={traditionVariants[animateDir]}
      whileInView={"inView"}
      className="before:img-gradient relative z-[2] w-full rounded-xl bg-[url('/images/traditional/t-one.png')] bg-cover bg-no-repeat  before:absolute  before:z-[1] before:size-full before:rounded-xl before:content-[''] md:min-w-[400px] lg:w-[45%]"
      transition={{ duration: 0.5, type: "linear", delay: 0.1 }}
      initial={"initial"}
    >
      <div className="relative z-[3] flex h-full flex-col  justify-between gap-4 p-8">
        <h2 className="h2-semibold mb-4">{title}</h2>
        <ul className="mb-24 flex list-image-[url(/icons/check.svg)] flex-col gap-4 align-middle ">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <CustomButton
          style={`${btnStyle || "nonary"}`}
          type={`${btnType || "button"}`}
          title={btnTitle}
          otherClasses="w-fit mt-auto"
        />
      </div>
    </motion.div>
  );
};

export default TraditionCard;
