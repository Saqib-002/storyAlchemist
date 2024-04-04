import React from "react";
import BroadCastCard from "../card/BroadCast.card";

const Broadcast = () => {
  return (
    <div className="flex flex-col gap-6 p-20 ">
      <BroadCastCard />
      <BroadCastCard />
      <BroadCastCard />
      <BroadCastCard />
      <BroadCastCard />
    </div>
  );
};

export default Broadcast;
