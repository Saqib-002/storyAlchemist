"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { Button } from "../../ui/button";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import AvatarDropdown from "../AvatarDropdown";

export const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session === null) {
    redirect("/login");
  }
  const [scrollY, setScrollY] = useState<number>();
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <header>
      {isNavOpen && (
        <AnimatePresence>
          <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </AnimatePresence>
      )}
      <nav
        className={`${scrollY! >= 100 ? "animate-header bg-primary-900 shadow-header" : ""} base-medium flex-between fixed left-0 top-0 z-20 w-full gap-4 px-8 py-6 text-dark-200 md:px-10 lg:px-12 xl:px-20`}
      >
        <p className="h2-semibold !font-spaceGrotesk">Documentrio.</p>
        <ul className="hidden gap-2 lg:flex xl:gap-4">
          <li>
            <CustomButton style="link" href="/" title="Home" />
          </li>
          <li>
            <CustomButton style="link" href="/about" title="About Us" />
          </li>
          <li>
            <CustomButton style="link" href="/use-case" title="Use Case" />
          </li>
          <li>
            <CustomButton style="link" href="/contact" title="Contact" />
          </li>
          <li>
            <CustomButton style="link" href="/pricing" title="Pricing" />
          </li>
        </ul>
        <div className="flex-center gap-6 ">
          {session ? (
            <AvatarDropdown
              imgSrc={session?.user?.image}
              username={session?.user?.name}
            />
          ) : (
            <CustomButton
              style="secondary"
              type="button"
              title="Sign Up"
              href="/sign-up"
              otherClasses="hidden md:inline"
            />
          )}
          <Button
            size="icon"
            className=" !bg-transparent lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Image
              src="/icons/menu.svg"
              alt="menu_icon"
              width={32}
              height={32}
            />
          </Button>
        </div>
      </nav>
    </header>
  );
};
