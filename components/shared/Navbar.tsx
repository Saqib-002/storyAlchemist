"use client";
import React, { useEffect, useState } from "react";
import Button from "./CustomButton";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState<number>();
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
  console.log(scrollY);
  return (
    <header>
      <nav
        className={`${scrollY! >= 100 ? "animate-header bg-primary-900 shadow-header" : ""} base-medium flex-between fixed left-0 top-0 z-20 w-full gap-4 px-20 py-6 text-dark-200`}
      >
        <p className="h2-semibold !font-spaceGrotesk">Documentrio.</p>
        <ul className="flex gap-4">
          <li className="nav-item">
            <Button style="link" href="/" title="Home" />
          </li>
          <li className="nav-item">
            <Button style="link" href="/about" title="About Us" />
          </li>
          <li className="nav-item">
            <Button style="link" href="/use-case" title="Use Case" />
          </li>
          <li className="nav-item">
            <Button style="link" href="/contact" title="Contact" />
          </li>
          <li className="nav-item">
            <Button style="link" href="/pricing" title="Pricing" />
          </li>
        </ul>
        <Button
          style="secondary"
          type="button"
          title="Sign Up"
          href="/sign-up"
        />
      </nav>
    </header>
  );
};
