import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../public/animations/loader-lottie.json"; // Path to your Lottie JSON file

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieAnimation: React.FC = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="size-full"
    />
  );
};

export default LottieAnimation;
