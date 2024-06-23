"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ImageResource } from "../entity/ImageResource";
import { UploadButton } from "../shared/UploadButton";

export const ImageResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addImageResource(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Images
      </div>
      <UploadButton
        accept="image/*"
        className="btn btn-secondary mx-2 inline-block cursor-pointer rounded"
        onChange={handleFileChange}
      />
      <div>
        {store.images.map((image, index) => {
          return <ImageResource key={image} image={image} index={index} />;
        })}
      </div>
    </>
  );
});
