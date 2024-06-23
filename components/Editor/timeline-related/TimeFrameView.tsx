"use client";
import React from "react";
import { EditorElement } from "@/types";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import DragableView from "./DragableView";

export const TimeFrameView = observer((props: { element: EditorElement }) => {
  const store = React.useContext(StoreContext);
  const { element } = props;
  const disabled = element.type === "audio";
  const isSelected = store.selectedElement?.id === element.id;
  const bgColorOnSelected = isSelected ? "bg-slate-800" : "bg-slate-600";
  const disabledCursor = disabled ? "cursor-no-drop" : "cursor-ew-resize";

  return (
    <div
      onClick={() => {
        store.setSelectedElement(element);
      }}
      key={element.id}
      className={`width-full relative my-2 h-[25px] ${
        isSelected ? "border-2 border-indigo-600 bg-slate-200" : ""
      }`}
    >
      <DragableView
        className="z-10"
        value={element.timeFrame.start}
        total={store.maxTime}
        disabled={disabled}
        onChange={(value) => {
          store.updateEditorElementTimeFrame(element, {
            start: value,
          });
        }}
      >
        <div
          className={`mt-[calc(25px/2)] size-[10px] translate-x-[-50%] translate-y-[-50%] border-2 border-blue-400 bg-white${disabledCursor}`}
        ></div>
      </DragableView>

      <DragableView
        className={disabled ? "cursor-no-drop" : "cursor-col-resize"}
        value={element.timeFrame.start}
        disabled={disabled}
        style={{
          width: `${
            ((element.timeFrame.end - element.timeFrame.start) /
              store.maxTime) *
            100
          }%`,
        }}
        total={store.maxTime}
        onChange={(value) => {
          const { start, end } = element.timeFrame;
          store.updateEditorElementTimeFrame(element, {
            start: value,
            end: value + (end - start),
          });
        }}
      >
        <div
          className={`${bgColorOnSelected} size-full min-w-0 px-2 text-xs leading-[25px] text-white`}
        >
          {element.name}
        </div>
      </DragableView>
      <DragableView
        className="z-10"
        disabled={disabled}
        value={element.timeFrame.end}
        total={store.maxTime}
        onChange={(value) => {
          store.updateEditorElementTimeFrame(element, {
            end: value,
          });
        }}
      >
        <div
          className={`mt-[calc(25px/2)] size-[10px] translate-x-[-50%] translate-y-[-50%] border-2 border-blue-400 bg-white${disabledCursor}`}
        ></div>
      </DragableView>
    </div>
  );
});
