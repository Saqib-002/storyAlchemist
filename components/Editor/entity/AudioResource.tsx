"use client";
import React from "react";
import { StoreContext } from "@/store";
import { formatTimeToMinSec } from "@/utils";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

export type AudioResourceProps = {
  audio: string;
  index: number;
};
export const AudioResource = observer(
  ({ audio, index }: AudioResourceProps) => {
    const store = React.useContext(StoreContext);
    const ref = React.useRef<HTMLAudioElement>(null);
    const [formatedAudioLength, setFormatedAudioLength] =
      React.useState("00:00");

    return (
      <div className="relative m-[15px] flex min-h-[100px] flex-col items-center overflow-hidden rounded-lg bg-slate-800">
        <div className="absolute right-2 top-2 bg-[rgba(0,0,0,.25)] py-1 text-base text-white">
          {formatedAudioLength}
        </div>
        <button
          className="absolute bottom-2 right-2 z-10 rounded bg-[rgba(0,0,0,.25)] py-1 text-lg font-bold text-white hover:bg-[#00a0f5]"
          onClick={() => store.addAudio(index)}
        >
          <MdAdd size="25" />
        </button>
        <audio
          onLoadedData={() => {
            const audioLength = ref.current?.duration ?? 0;
            setFormatedAudioLength(formatTimeToMinSec(audioLength));
          }}
          ref={ref}
          className="max-h-[100px] min-h-[50px] min-w-[100px] max-w-[150px]"
          // controls
          src={audio}
          id={`audio-${index}`}
        ></audio>
      </div>
    );
  }
);
