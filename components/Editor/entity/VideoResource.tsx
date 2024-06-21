"use client";
import React from "react";
import { StoreContext } from "@/store";
import { formatTimeToMinSec } from "@/utils";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type VideoResourceProps = {
  video: string;
  index: number;
};
export const VideoResource = observer(
  ({ video, index }: VideoResourceProps) => {
    const store = React.useContext(StoreContext);
    const ref = React.useRef<HTMLVideoElement>(null);
    const [formatedVideoLength, setFormatedVideoLength] =
      React.useState("00:00");

    return (
      <div className="relative m-[15px] flex flex-col items-center overflow-hidden rounded-lg bg-slate-800">
        <div className="absolute right-2 top-2 bg-[rgba(0,0,0,.25)] py-1 text-base text-white">
          {formatedVideoLength}
        </div>
        <button
          className="absolute bottom-2 right-2 z-10 rounded bg-[rgba(0,0,0,.25)] py-1 text-lg font-bold text-white hover:bg-[#00a0f5]"
          onClick={() => store.addVideo(index)}
        >
          <MdAdd size="25" />
        </button>
        <video
          onLoadedData={() => {
            const videoLength = ref.current?.duration ?? 0;
            setFormatedVideoLength(formatTimeToMinSec(videoLength));
          }}
          ref={ref}
          className="max-h-[100px] max-w-[150px]"
          src={video}
          height={200}
          width={200}
          id={`video-${index}`}
        ></video>
      </div>
    );
  }
);
