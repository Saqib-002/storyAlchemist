"use client";
import React, { useState, useEffect, MutableRefObject } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {
  ref?: MutableRefObject<null>;
  videoSrc: string;
  imgUrl?: string;
  title: string;
  createdAt?: Date;
}

const VideoPlayer = ({ ref, videoSrc, imgUrl, title, createdAt }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-transform duration-300  hover:scale-105 [&>div]:!w-[400px]  [&>div]:overflow-hidden [&>div]:rounded-lg max-sm:[&>div]:!h-[200px] max-sm:[&>div]:!w-[250px]"
        >
          <ReactPlayer
            ref={ref}
            onContextMenu={(e: any) => {
              e.preventDefault();
            }}
            playing={isPlaying}
            width="400px"
            height="300px"
            url={videoSrc}
            controls={true}
            light={isPlaying ? "" : imgUrl}
            playsinline
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
            pip={true}
          />
          <source src={videoSrc} type="video/mp4" />
          {title && (
            <div className="flex justify-between">
              <p className="my-4 line-clamp-1 h-min w-[70%] text-light-400">
                {title}
              </p>
              {createdAt && (
                <p className="my-4 line-clamp-1 text-light-400">
                  {createdAt.getDate()}/{createdAt.getMonth()}/
                  {createdAt.getFullYear()}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
