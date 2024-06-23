"use client";
import React from "react";
import { StoreContext } from "@/store";
// import { formatTimeToMinSec } from "@/utils";
import { observer } from "mobx-react";
import { VideoEditorElement, ImageEditorElement, EffecType } from "@/types";

const EFFECT_TYPE_TO_LABEL: Record<string, string> = {
  blackAndWhite: "Black and White",
  none: "None",
  saturate: "Saturate",
  sepia: "Sepia",
  invert: "Invert",
};
export type EffectResourceProps = {
  editorElement: VideoEditorElement | ImageEditorElement;
};
export const EffectResource = observer((props: EffectResourceProps) => {
  const store = React.useContext(StoreContext);
  return (
    <div className="relative m-[15px] flex min-h-[100px] flex-col items-center overflow-hidden rounded-lg bg-primary-700 p-2">
      <div className="flex w-full flex-row justify-between">
        <div className="w-full py-1 text-left text-base text-white">
          {EFFECT_TYPE_TO_LABEL[props.editorElement.properties.effect.type]}
        </div>
      </div>
      {/* Select effect from drop down */}
      <select
        className="ml-2 w-20 rounded bg-primary-800 px-2 py-1 text-xs "
        value={props.editorElement.properties.effect.type}
        onChange={(e) => {
          const type = e.target.value;
          store.updateEffect(props.editorElement.id, {
            type: type as EffecType,
          });
        }}
      >
        {Object.keys(EFFECT_TYPE_TO_LABEL).map((type) => {
          return (
            <option key={type} value={type}>
              {EFFECT_TYPE_TO_LABEL[type]}
            </option>
          );
        })}
      </select>
    </div>
  );
});
