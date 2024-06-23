"use client";

import { fabric } from "fabric";
import React, { useEffect, useRef, useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { Resources } from "@/components/Editor/Resources";
import { ElementsPanel } from "./panels/ElementsPanel";
import { Menu } from "@/components/Editor/Menu";
import { TimeLine } from "./TimeLine";
import { Store } from "@/store/Store";
import "@/utils/fabric-util.ts";

export const EditorWithStore = () => {
  const [store] = useState(new Store());
  return (
    <StoreContext.Provider value={store}>
      <Editor></Editor>
    </StoreContext.Provider>
  );
};

export const Editor = observer(() => {
  const store = React.useContext(StoreContext);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      height: document.getElementById("grid-canvas-container")?.clientHeight,
      width: document.getElementById("grid-canvas-container")?.clientWidth,
      backgroundColor: "#ededed",
    });
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#00a0f5";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerStrokeColor = "#0063d8";
    fabric.Object.prototype.cornerSize = 10;
    function handleMouseDown(e: any) {
      if (!e.target) {
        store.setSelectedElement(null);
      }
    }
    // canvas mouse down without target should deselect active object
    canvas.on("mouse:down", handleMouseDown);
    store.setCanvas(canvas);
    const render = () => {
      if (canvasRef.current) {
        canvas.renderAll();
        animationFrameIdRef.current = fabric.util.requestAnimFrame(render);
      }
    };
    render();
    return () => {
      canvas.off("mouse:down", handleMouseDown);
      if (animationFrameIdRef.current) {
        fabric.util.cancelAnimFrame(animationFrameIdRef.current);
      }
      canvas.dispose();
    };
  }, []);
  return (
    <div className="grid h-svh grid-cols-[max-content_300px_auto_250px] grid-rows-[500px_1fr]">
      <div className="row-span-2 flex flex-col">
        <Menu />
      </div>
      <div className="row-span-2 flex flex-col overflow-scroll">
        <Resources />
      </div>
      <div
        id="grid-canvas-container"
        className="col-start-3 flex items-center justify-center bg-slate-100"
      >
        <canvas ref={canvasRef} id="canvas" />
      </div>
      <div className="col-start-4 row-start-1">
        <ElementsPanel />
      </div>
      <div className="relative col-span-2 col-start-3 row-start-2 overflow-scroll px-[10px] py-[4px]">
        <TimeLine />
      </div>
    </div>
  );
});
