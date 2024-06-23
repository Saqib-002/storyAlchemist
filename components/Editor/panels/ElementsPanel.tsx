"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { Element } from "../entity/Element";

export const ElementsPanel = observer((_props: {}) => {
  const store = React.useContext(StoreContext);
  return (
    <div className="custom-scrollbar h-full overflow-scroll bg-primary-800">
      <div className="flex flex-row justify-between">
        <div className="px-[16px] py-[7px] text-sm font-semibold">Elements</div>
      </div>
      <div className="flex flex-col">
        {store.editorElements.map((element) => {
          return <Element key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
});
