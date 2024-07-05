import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-8 md:px-20">
      <Separator className="bg-primary-850/50" />
      <div className="grid gap-20 pb-4 pt-8 text-light-700 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between gap-8">
          <h1 className="h2-semibold">Documentrio</h1>
          <p className="paragraph-regular">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            corrupti, fugit nostrum doloribus molestias mollitia.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <h1 className="h2-semibold">About Documentrio</h1>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <h1 className="h2-semibold">Support</h1>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="#faqs"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
