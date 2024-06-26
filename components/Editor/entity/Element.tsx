"use client";
import React from "react";
import { EditorElement } from "@/types";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdOutlineTextFields, MdMovie } from "react-icons/md";

export type ElementProps = {
  element: EditorElement;
};

export const Element = observer((props: ElementProps) => {
  const store = React.useContext(StoreContext);
  const { element } = props;
  const Icon = element.type === "video" ? MdMovie : MdOutlineTextFields;
  const isSelected = store.selectedElement?.id === element.id;
  const bgColor = isSelected ? "rgba(0, 160, 245, 0.1)" : "";
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`mx-2 my-1 flex flex-row items-center justify-start px-1 py-2 ${bgColor}`}
      key={element.id}
      onClick={() => {
        store.setSelectedElement(element);
      }}
    >
      <Icon size="20" color="gray"></Icon>
      <div className="ml-2 flex-1 truncate text-xs font-medium">
        {element.name}
      </div>
      <div>
        {element.type === "video" ? (
          <video
            className="max-h-[20px] max-w-[20px] opacity-0"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            height={20}
            width={20}
            id={element.properties.elementId}
          ></video>
        ) : null}
        {element.type === "image" ? (
          <img
            className="max-h-[20px] max-w-[20px] opacity-0"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            height={20}
            width={20}
            id={element.properties.elementId}
          ></img>
        ) : null}
        {element.type === "audio" ? (
          <audio
            className="max-h-[20px] max-w-[20px] opacity-0"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            id={element.properties.elementId}
          ></audio>
        ) : null}
      </div>
      <button
        className="mr-2 rounded bg-red-500 px-1 py-0 text-xs text-white hover:bg-red-700"
        onClick={(e) => {
          store.removeEditorElement(element.id);
          store.refreshElements();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        X
      </button>
    </div>
  );
});
