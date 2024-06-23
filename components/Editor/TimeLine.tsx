"use client";
import React from "react";
import { SeekPlayer } from "./timeline-related/SeekPlayer";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { TimeFrameView } from "./timeline-related/TimeFrameView";

export const TimeLine = observer(() => {
  const store = React.useContext(StoreContext);
  const percentOfCurrentTime = (store.currentTimeInMs / store.maxTime) * 100;
  return (
    <div className="flex flex-col ">
      <SeekPlayer />
      <div className="relative flex-1 ">
        {store.editorElements.map((element) => {
          return <TimeFrameView key={element.id} element={element} />;
        })}
        <div
          className="absolute inset-y-0 z-20 w-[2px] bg-red-400"
          style={{
            left: `${percentOfCurrentTime}%`,
          }}
        ></div>
      </div>
    </div>
  );
});
