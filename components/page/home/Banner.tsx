import React from "react";
import Button from "@/components/shared/CustomButton";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="relative z-10 h-screen w-full">
      <div className="">
        <Image
          // priority
          src="/images/landing_img.png"
          className="object-cover object-center"
          fill={true}
          alt="hero image example"
        />
      </div>
      <div className="flex-center relative size-full flex-col gap-6 px-4 text-center">
        <h1 className="h1-bold max-w-[600px] text-dark-100/80">
          CREATE A PROFESSIONAL VIDEO WITH THE HELP OF AI
        </h1>
        <p className="paragraph-regular max-w-[600px] text-dark-100/80">
          Documentrio allows you to create documentary-style videos by using
          AI-generated scripts and voice-overs, showcasing your creativity. you
          can also modify it in the editor
        </p>
        <Button style="senary" type="button" title="Get Started" />
      </div>
    </section>
  );
};

export default Banner;
