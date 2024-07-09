"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

interface Props {
  direction: "forward" | "backward" | undefined;
  data: any;
  setPrompt: any;
}

const AutoScrollCarousel = ({ direction, data, setPrompt }: Props) => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        className="w-max overflow-hidden text-white"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            stopOnFocusIn: false,
            stopOnInteraction: false,
            speed: 1,
            direction,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {data.map((prompt: any, index: any) => (
            <CarouselItem
              key={index}
              className="w-max pl-1 md:basis-1/12 lg:basis-1/12"
            >
              <div
                className="cursor-pointer p-1"
                onClick={() => setPrompt(prompt)}
              >
                <Card className="rounded-none border border-gray-200 bg-transparent px-4 py-2 text-white">
                  <CardContent className="flex items-center justify-center p-0">
                    <span className="body-regular">{prompt}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AutoScrollCarousel;
