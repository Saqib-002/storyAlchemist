/** @jsxImportSource react */
"use client";
import Image from "next/image";
import LottieAnimation from "@/components/ui/hero-animation";
import { useTypingEffect } from "../../../hooks/useTypingEffect";
import CustomButton from "@/components/shared/CustomButton";
import Link from "next/link";

const GradientText = () => {
  const texts = [
    "Storytelling with AI-Generated Documentaries",
    "Ideas into Engaging Documentaries Effortlessly",
  ];
  const animatedText = useTypingEffect(texts);

  return (
    <h1 className="mb-4 max-w-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl font-extrabold leading-none tracking-tight text-transparent md:text-4xl xl:text-5xl">
      Unlock the Future of <br /> {animatedText}
    </h1>
  );
};

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing_img.png"
          className="size-full object-cover object-center opacity-30"
          // layout="fill"
          priority={true}
          fill={true}
          alt="hero image example"
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <GradientText />
          <p className="mb-6 max-w-2xl text-dark-100/80 dark:text-dark-100/80 md:text-lg lg:mb-8 lg:text-xl">
            Experience the power of cutting-edge AI technology to create
            compelling, high-quality documentary videos. Whether you&#39;re an
            educator, content creator, or storyteller, our platform makes it
            easy to bring your vision to life. Simply input your topic, and let
            our AI handle the rest, from scriptwriting to video production
          </p>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <Link href="/sign-up">
              <CustomButton style="senary" type="button" title="Get Started" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          {/* <img src="/images/hero.png" alt="hero image" /> */}
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
