import Link from "next/link";
import React from "react";
import Button from "./Button";

export const Navbar = () => {
  return (
    <nav className="base-medium flex-between gap-4 px-20 py-8 text-dark-200">
      <p className="h2-semibold !font-spaceGrotesk">Documentrio.</p>
      <ul className="flex gap-4">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/">About US</Link>
        </li>
        <li className="nav-item">
          <Link href="/">Use Case</Link>
        </li>
        <li className="nav-item">
          <Link href="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link href="/">Pricing</Link>
        </li>
      </ul>
      <Button style="tertiary" type="button" title="Sign Up" />
    </nav>
  );
};
