import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import SocialLink from "./SocialLink";

const MobileNav = ({ isNavOpen, setIsNavOpen }: any) => {
  return (
    <nav className=" absolute z-30 size-full max-h-fit bg-dark-500  lg:hidden">
      <AnimatePresence>
        <motion.div
          layoutScroll
          className="flex-between h-full w-96 flex-col overflow-y-scroll bg-dark-100 py-10 max-sm:w-full"
          key="mobileNav"
          initial={{ opacity: 0, y: "-100%" }}
          exit={{ opacity: 0, y: "-120%" }}
          transition={{ duration: 0.5, type: "linear" }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-between w-full px-8">
            <span className="h2-bold">Documentrio</span>
            <Button
              size="icon"
              className=" !bg-transparent"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Image
                src="/icons/close.svg"
                alt="menu_icon"
                width={20}
                height={20}
              />
            </Button>
          </div>
          <ul className="flex-center w-full flex-col pt-8 lg:hidden">
            <MobileNavLink href="/about" title="About Us" delay={0.5} />

            <MobileNavLink href="/use-case" title="Use Case" delay={0.6} />

            <MobileNavLink href="/contact" title="Contact" delay={0.7} />

            <MobileNavLink href="/pricing" title="Pricing" delay={0.8} />

            <MobileNavLink
              href="/sign-up"
              title="Sign Up"
              delay={0.8}
              otherClasses="border-b-[0.8px]"
            />
          </ul>
          <div className="flex-center mt-4 gap-4 py-4">
            <SocialLink
              href="/"
              src="/icons/close.svg"
              alt="facebook"
              delay={0.5}
            />
            <SocialLink
              href="/"
              src="/icons/close.svg"
              alt="tweeter"
              delay={0.6}
            />
            <SocialLink
              href="/"
              src="/icons/close.svg"
              alt="instagram"
              delay={0.7}
            />
            <SocialLink
              href="/"
              src="/icons/close.svg"
              alt="linkedIn"
              delay={0.8}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
