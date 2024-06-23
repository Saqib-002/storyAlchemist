"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type TextResourceProps = {
  fontSize: number;
  fontWeight: number;
  sampleText: string;
};
export const TextResource = observer(
  ({ fontSize, fontWeight, sampleText }: TextResourceProps) => {
    const store = React.useContext(StoreContext);
    return (
      <div className="m-[15px] flex flex-row items-center">
        <div
          className="flex-1 px-2 py-1"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: `${fontWeight}`,
          }}
        >
          {sampleText}
        </div>
        <button
          className="btn btn-primary z-10 flex size-[32px] items-center justify-center rounded bg-[rgba(0,0,0,.25)] !p-0 !py-1 font-bold text-white hover:bg-black"
          onClick={() =>
            store.addText({
              text: sampleText,
              fontSize,
              fontWeight,
            })
          }
        >
          <MdAdd size="25" />
        </button>
      </div>
    );
  }
);
