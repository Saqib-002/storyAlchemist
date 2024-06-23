"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { getUid } from "@/utils";
import { AnimationResource } from "../entity/AnimationResource";

export const AnimationsPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedElement = store.selectedElement;
  const selectedElementAnimations = store.animations.filter((animation) => {
    return animation.targetId === selectedElement?.id;
  });
  const hasFadeInAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "fadeIn";
  });
  const hasFadeOutAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "fadeOut";
  });

  const hasSlideInAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "slideIn";
  });
  const hasSlideOutAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "slideOut";
  });

  const hasConsantAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "breathe";
  });

  return (
    <>
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Animations
      </div>
      {selectedElement && !hasFadeInAnimation ? (
        <div
          className="cursor-pointer px-[16px] py-[8px] text-sm font-semibold hover:bg-primary-700 "
          onClick={() => {
            store.addAnimation({
              id: getUid(),
              type: "fadeIn",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Fade In
        </div>
      ) : null}
      {selectedElement && !hasFadeOutAnimation ? (
        <div
          className="cursor-pointer px-[16px] py-[8px] text-sm font-semibold hover:bg-primary-700 hover:text-white"
          onClick={() => {
            store.addAnimation({
              id: getUid(),
              type: "fadeOut",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Fade Out
        </div>
      ) : null}
      {selectedElement && !hasSlideInAnimation ? (
        <div
          className="cursor-pointer px-[16px] py-[8px] text-sm font-semibold hover:bg-primary-700 hover:text-white"
          onClick={() => {
            store.addAnimation({
              id: getUid(),
              type: "slideIn",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {
                direction: "left",
                useClipPath: false,
                textType: "none",
              },
            });
          }}
        >
          Add Slide In
        </div>
      ) : null}
      {selectedElement && !hasSlideOutAnimation ? (
        <div
          className="cursor-pointer px-[16px] py-[8px] text-sm font-semibold hover:bg-primary-700 hover:text-white"
          onClick={() => {
            store.addAnimation({
              id: getUid(),
              type: "slideOut",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {
                direction: "right",
                useClipPath: false,
                textType: "none",
              },
            });
          }}
        >
          Add Slide Out
        </div>
      ) : null}
      {selectedElement && !hasConsantAnimation ? (
        <div
          className="cursor-pointer px-[16px] py-[8px] text-sm font-semibold hover:bg-primary-700 hover:text-white"
          onClick={() => {
            store.addAnimation({
              id: getUid(),
              type: "breathe",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Breathing
        </div>
      ) : null}
      {selectedElementAnimations.map((animation) => {
        return <AnimationResource key={animation.id} animation={animation} />;
      })}
    </>
  );
});
