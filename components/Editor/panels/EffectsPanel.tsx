"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { isEditorImageElement, isEditorVideoElement } from "@/store/Store";
import { EffectResource } from "../entity/EffectResource";

export const EffectsPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedElement = store.selectedElement;
  return (
    <>
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Effects
      </div>
      {selectedElement &&
      (isEditorImageElement(selectedElement) ||
        isEditorVideoElement(selectedElement)) ? (
        <EffectResource editorElement={selectedElement} />
      ) : null}
    </>
  );
});
