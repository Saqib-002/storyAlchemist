"use client";
import React, { useState, useEffect, MutableRefObject } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {
  ref?: MutableRefObject<null>;
  videoSrc: string;
  imgUrl?: string;
  title: string;
}

const VideoPlayer = ({ ref, videoSrc, imgUrl, title }: Props) => {
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
          className="size-max cursor-pointer transition-transform duration-300  hover:scale-105 [&>div]:size-max [&>div]:overflow-hidden [&>div]:rounded-lg"
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
          {title && <p className="my-4 text-center text-light-400">{title}</p>}
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
