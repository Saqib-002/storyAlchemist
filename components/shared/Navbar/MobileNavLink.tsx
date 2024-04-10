import React from "react";
import { motion } from "framer-motion";

import CustomButton from "../CustomButton";
interface Props {
  title: string;
  href: string;
  otherClasses?: string;
  delay: number;
}
const variants = {
  close: { x: "-100%" },
  open: { x: 0 },
};
const MobileNavLink = ({ title, href, delay, otherClasses }: Props) => {
  return (
    <li
      className={`w-full border-t-[0.8px] border-solid border-dark-300 py-4 text-center ${otherClasses}`}
    >
      <motion.div
        variants={variants}
        animate={"open"}
        transition={{ duration: 0.5, type: "linear", delay }}
        initial={"close"}
      >
        <CustomButton style="link" href={href} title={title} />
      </motion.div>
    </li>
  );
};

export default MobileNavLink;
