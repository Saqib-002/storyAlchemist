"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";

export const ExportVideoPanel = observer(() => {
  const store = React.useContext(StoreContext);

  return (
    <>
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Export
      </div>
      {/* Set max time from number input */}
      <div className="px-[16px]">
        <div className="my-2 flex flex-row items-center">
          <div className="mr-2 text-xs font-semibold">Video Length:</div>
          <input
            type="number"
            className="mr-2 max-w-[50px] rounded border-slate-200 bg-primary-700 text-center placeholder:text-dark-100 contrast-more:border-slate-400 contrast-more:placeholder:text-slate-500"
            value={store.maxTime / 1000}
            onChange={(e) => {
              const value = e.target.value;
              store.setMaxTime(Number(value) * 1000);
            }}
          />
          <div>secs</div>
        </div>
        <div className="my-2 flex flex-row items-center">
          <div className="mr-2 text-xs font-semibold">Canvas Resolution:</div>
          <div className="mr-2 text-xs">Todo</div>
        </div>
      </div>
      {/*  Format selection with radio button */}
      <div className="px-[16px]">
        <div className="mr-2 text-xs font-semibold">Video Format:</div>
        <div className="my-2 flex flex-row items-center">
          <input
            type="radio"
            className="mr-2"
            name="video-format"
            value="mp4"
            checked={store.selectedVideoFormat === "mp4"}
            onChange={(e) => {
              store.setVideoFormat("mp4");
            }}
          />
          <div className="mr-2 text-xs">MP4</div>
          <input
            type="radio"
            className="mr-2"
            name="video-format"
            value="gif"
            checked={store.selectedVideoFormat === "webm"}
            onChange={(e) => {
              store.setVideoFormat("webm");
            }}
          />
          <div className="mr-2 text-xs">webm</div>
        </div>
      </div>

      <button
        className="btn btn-nonary m-4 rounded-lg p-1 font-bold"
        onClick={() => {
          store.handleSeek(0);
          store.setSelectedElement(null);
          setTimeout(() => {
            store.setPlaying(true);
            store.saveCanvasToVideoWithAudio();
          }, 1000);
        }}
      >
        Export Video ({store.maxTime / 1000} secs){" "}
        {store.selectedVideoFormat === "mp4" ? "ALPHA" : ""}
      </button>
    </>
  );
});
