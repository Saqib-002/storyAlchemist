"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { AudioResource } from "../entity/AudioResource";
import { UploadButton } from "../shared/UploadButton";

export const AudioResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addAudioResource(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Audios
      </div>
      {store.audios.map((audio, index) => {
        return <AudioResource key={audio} audio={audio} index={index} />;
      })}
      <UploadButton
        accept="audio/mp3,audio/*"
        className="btn btn-secondary mx-2 inline-block cursor-pointer rounded"
        onChange={handleFileChange}
      />
    </>
  );
});
