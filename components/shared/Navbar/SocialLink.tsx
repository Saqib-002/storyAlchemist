import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  close: { y: "250%" },
  open: { y: 0 },
};

interface Props {
  href: string;
  src: string;
  alt: string;
  delay: number;
}

const SocialLink = ({ href, src, alt, delay }: Props) => {
  return (
    <motion.div
      className="rounded-[50%] border-[0.8px] border-solid border-dark-300 p-3"
      variants={variants}
      animate={"open"}
      transition={{ duration: 0.5, type: "linear", delay }}
      initial={"close"}
    >
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={16}
          height={16}
          className="!h-[16px]"
        />
      </Link>
    </motion.div>
  );
};

export default SocialLink;
