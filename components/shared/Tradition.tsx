"use client";
import React from "react";
import Button from "./CustomButton";
// import { motion } from "framer-motion";

// const variants = {
//   initial: { x: -10, opacity: 0 },
//   enter: { x: 0, opacity: 1 },
//   exit: { x: -10, opacity: 0 },
// };
const Tradition = () => {
  return (
    <section className="grid grid-cols-2 gap-20 p-20 text-dark-100">
      {/* <motion.div
        initial="initial"
        variants={variants}
        whileInView="enter"
        exit="exit"
      > */}
      <div className="before:img-gradient relative z-[2] w-full rounded-xl bg-[url('/images/traditional/t-one.png')]  bg-cover  bg-no-repeat before:absolute before:z-[1] before:size-full before:rounded-xl before:content-['']">
        <div className="relative z-[3] flex flex-col gap-8 p-8">
          <h2 className="h2-semibold mb-4">Stop Traditional Video Creation</h2>
          <ul className="mb-24 flex list-image-[url(/icons/check.svg)] flex-col gap-4 align-middle ">
            <li className="">Working With Expensive 3rd Parties</li>
            <li>Hiring Actors, Equipment And Studios</li>
            <li>Complex Editing Tools & Processes</li>
            <li>Challenging To Update And Maintain Consistency</li>
            <li>Localizing Content Requires Extra Time And Resources</li>
          </ul>
          <Button
            style="nonary"
            type="button"
            title="Know More About Us"
            otherClasses="w-fit"
          />
        </div>
      </div>
      {/* </motion.div> */}
      <div className="before:img-gradient relative z-[2] w-full rounded-xl bg-[url('/images/traditional/t-two.png')]  bg-cover  bg-no-repeat before:absolute before:z-[1] before:size-full before:rounded-xl before:content-['']">
        <div className="relative z-[3] flex flex-col gap-8 p-8">
          <h2 className="h2-semibold mb-4">Stop Traditional Video Creation</h2>
          <ul className="mb-24 flex list-image-[url(/icons/close.svg)] flex-col gap-4">
            <li>Working With Expensive 3rd Parties</li>
            <li>Hiring Actors, Equipment And Studios</li>
            <li>Complex Editing Tools & Processes</li>
            <li>Challenging To Update And Maintain Consistency</li>
            <li>Localizing Content Requires Extra Time And Resources</li>
          </ul>
          <Button
            style="nonary"
            type="button"
            title="Know More About Us"
            otherClasses="w-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Tradition;
