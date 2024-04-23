import React from "react";
import TraditionCard from "../card/TraditionCard.card";

const Tradition = () => {
  const points = [
    "Working With Expensive 3rd Parties",
    "Hiring Actors, Equipment And Studios",
    "Complex Editing Tools & Processes",
    "Challenging To Update And Maintain Consistency",
    "Localizing Content Requires Extra Time And Resources",
  ];
  return (
    <section className="flex-center mt-4 flex-wrap gap-20 p-4 text-dark-100 md:p-20">
      <TraditionCard
        title="Stop Traditional Video Creation"
        points={points}
        animateDir="left"
        btnTitle="Know More About Us"
      />
      <TraditionCard
        title="Stop Traditional Video Creation"
        points={points}
        animateDir="right"
        btnTitle="Know More About Us"
      />
    </section>
  );
};

export default Tradition;
