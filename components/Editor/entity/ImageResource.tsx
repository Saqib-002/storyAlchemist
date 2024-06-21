"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type ImageResourceProps = {
  image: string;
  index: number;
};
export const ImageResource = observer(
  ({ image, index }: ImageResourceProps) => {
    const store = React.useContext(StoreContext);
    const ref = React.useRef<HTMLImageElement>(null);
    const [resolution, setResolution] = React.useState({ w: 0, h: 0 });

    return (
      <div className="relative m-[15px] flex flex-col items-center overflow-hidden rounded-lg bg-slate-800">
        <div className="absolute right-2 top-2 bg-[rgba(0,0,0,.25)] py-1 text-base text-white">
          {resolution.w}x{resolution.h}
        </div>
        <button
          className="absolute bottom-2 right-2 z-10 rounded bg-[rgba(0,0,0,.25)] py-1 text-lg font-bold text-white hover:bg-[#00a0f5]"
          onClick={() => store.addImage(index)}
        >
          <MdAdd size="25" />
        </button>
        <img
          onLoad={() => {
            setResolution({
              w: ref.current?.naturalWidth ?? 0,
              h: ref.current?.naturalHeight ?? 0,
            });
          }}
          ref={ref}
          className="max-h-[100px] max-w-[150px]"
          src={image}
          height={200}
          width={200}
          id={`image-${index}`}
        ></img>
      </div>
    );
  }
);
