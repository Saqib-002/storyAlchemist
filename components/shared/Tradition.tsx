"use client";
import React from "react";
import TraditionCard from "../card/TraditionCard.card";
// import { motion } from "framer-motion";

// const variants = {
//   initial: { x: -10, opacity: 0 },
//   enter: { x: 0, opacity: 1 },
//   exit: { x: -10, opacity: 0 },
// };
const Tradition = () => {
  const points = [
    "Working With Expensive 3rd Parties",
    "Hiring Actors, Equipment And Studios",
    "Complex Editing Tools & Processes",
    "Challenging To Update And Maintain Consistency",
    "Localizing Content Requires Extra Time And Resources",
  ];
  return (
    // <section className="grid grid-cols-2 gap-20 p-20 text-dark-100">
    <section className="flex-center mt-4 flex-wrap gap-20 p-4 text-dark-100 md:p-20">
      {/* <motion.div
        initial="initial"
        variants={variants}
        whileInView="enter"
        exit="exit"
      > */}
      <TraditionCard
        title="Stop Traditional Video Creation"
        points={points}
        btnTitle="Know More About Us"
      />
      <TraditionCard
        title="Stop Traditional Video Creation"
        points={points}
        btnTitle="Know More About Us"
      />
      {/* </motion.div> */}
    </section>
  );
};

export default Tradition;
