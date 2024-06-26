"use client";
import React from "react";
import { observer } from "mobx-react";
import { TextResource } from "../entity/TextResource";

const TEXT_RESOURCES = [
  {
    name: "Title",
    fontSize: 28,
    fontWeight: 600,
  },
  {
    name: "Subtitle",
    fontSize: 16,
    fontWeight: 600,
  },
  {
    name: "Body",
    fontSize: 14,
    fontWeight: 400,
  },
  {
    name: "Caption",
    fontSize: 12,
    fontWeight: 400,
  },
  {
    name: "Heading 1",
    fontSize: 24,
    fontWeight: 800,
  },
  {
    name: "Heading 2",
    fontSize: 20,
    fontWeight: 800,
  },
  {
    name: "Heading 3",
    fontSize: 18,
    fontWeight: 800,
  },
  {
    name: "Heading 4",
    fontSize: 16,
    fontWeight: 800,
  },
  {
    name: "Heading 5",
    fontSize: 14,
    fontWeight: 800,
  },
  {
    name: "Heading 6",
    fontSize: 12,
    fontWeight: 800,
  },
];

export const TextResourcesPanel = observer(() => {
  return (
    <div className="h-full bg-primary-800 text-dark-100">
      <div className="px-[16px] pb-[8px] pt-[16px] text-sm font-semibold">
        Text
      </div>
      <ul>
        {TEXT_RESOURCES.map((resource) => {
          return (
            <li key={resource.name}>
              <TextResource
                sampleText={resource.name}
                fontSize={resource.fontSize}
                fontWeight={resource.fontWeight}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
});
