import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

const Footer = async () => {
  const session = await getServerSession();
  return (
    <div className="p-8 md:px-20">
      <Separator className="bg-primary-850/50" />
      <div className="grid gap-20 pb-4 pt-8 text-light-700 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col  gap-8">
          <h1 className="h2-semibold">
            <Image
              src="/images/logo-main.png"
              width="96"
              height="52"
              alt="logo"
            />
          </h1>
          <p className="paragraph-regular text-justify">
            Experience the power of cutting-edge AI technology to create
            compelling, high-quality documentary videos.
          </p>
        </div>
        <div className="flex flex-col  gap-8">
          <h1 className="h2-semibold">About Documentrio</h1>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/about"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                About
              </Link>
            </li>
            {!session && (
              <>
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
              </>
            )}
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
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/#faqs"
                className="transition-colors duration-200 hover:text-primary-200"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="body-regular text-center text-light-900">
        &copy; 2024 Documentrio
      </p>
    </div>
  );
};

export default Footer;
