import React from "react";
import BroadCastCard from "../../card/BroadCast.card";

const Broadcast = () => {
  return (
    <div className="flex flex-col gap-6  p-8 md:p-20">
      <BroadCastCard imgPos="after" />
      <BroadCastCard imgPos="before" />
      <BroadCastCard imgPos="after" />
      <BroadCastCard imgPos="after" />
      <BroadCastCard imgPos="after" />
    </div>
  );
};

export default Broadcast;
