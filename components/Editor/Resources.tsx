"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { AnimationsPanel } from "./panels/AnimationsPanel";
import { EffectsPanel } from "./panels/EffectsPanel";
import { ExportVideoPanel } from "./panels/ExportVideoPanel";
import { FillPanel } from "./panels/FillPanel";
import { TextResourcesPanel } from "./panels/TextResourcesPanel";
import { ImageResourcesPanel } from "./panels/ImageResourcesPanel";
import { AudioResourcesPanel } from "./panels/AudioResourcesPanel";
import { VideoResourcesPanel } from "./panels/VideoResourcesPanel";

export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (
    <div className="h-full bg-slate-200">
      {selectedMenuOption === "Video" ? <VideoResourcesPanel /> : null}
      {selectedMenuOption === "Audio" ? <AudioResourcesPanel /> : null}
      {selectedMenuOption === "Image" ? <ImageResourcesPanel /> : null}
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {selectedMenuOption === "Animation" ? <AnimationsPanel /> : null}
      {selectedMenuOption === "Effect" ? <EffectsPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
      {selectedMenuOption === "Fill" ? <FillPanel /> : null}
    </div>
  );
});
