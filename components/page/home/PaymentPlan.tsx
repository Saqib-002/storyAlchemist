import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth/next";
import React from "react";
import SubscribeComponent from "./SubscribeComponent";
import { redirect } from "next/navigation";
const PaymentPlan = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/sign-in");
  }
  const user = await getUserByEmail({ email: session?.user?.email });
  return (
    <>
      <section className=" mt-24 overflow-hidden pt-16 text-dark-100/80">
        <div className="mx-auto max-w-screen-md  text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark-100/80 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light dark:text-dark-100/80 sm:text-xl">
            Here at Documentrio, we focus on providing innovative AI solutions
            to create documentary-style videos from user prompts, complete with
            script generation and voice-over, unlocking long-term value and
            driving economic growth.
          </p>
        </div>
        <div className="container mx-auto flex flex-wrap px-5 pb-24">
          <div className="mt-48 hidden lg:block lg:w-1/4">
            <div className="mt-px overflow-hidden rounded-l-lg border-y border-l border-gray-300">
              <p className="-mt-px flex h-12 items-center justify-start bg-primary-850 px-4 text-center text-dark-100/80">
                AI-Powered Script Generation
              </p>
              <p className="flex h-12 items-center justify-start px-4 text-center text-dark-100/80">
                Video Editing Tools
              </p>
              <p className="flex h-12 items-center justify-start bg-primary-850 px-4 text-center text-dark-100/80">
                Text-to-Speech Voice Over
              </p>
              <p className="flex h-12 items-center justify-start px-4 text-center text-dark-100/80">
                Access to Support
              </p>
              <p className="flex h-12 items-center justify-start bg-primary-850 px-4 text-center text-dark-100/80">
                Limited to Projects per Month
              </p>
              <p className="flex h-12 items-center justify-start px-4 text-center text-dark-100/80">
                Watermarked Videos
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap rounded-lg border-gray-300 lg:w-3/4 lg:border">
            <div className="mb-10 w-full rounded-lg border-2 border-gray-300 lg:mb-0 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
              <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
                <h3 className="tracking-widest">START</h3>
                <h2 className="mb-4 mt-2 text-5xl font-medium leading-none text-dark-100/80">
                  Free
                </h2>
                <span className="text-sm text-dark-100/80">Next 3 months</span>
              </div>
              <p className="flex h-12 items-center justify-center border-t border-gray-300 bg-primary-850 text-center text-dark-100/80">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="size-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Basic
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                Basic
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Community
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                3
              </p>
              <p className="flex h-12 items-center justify-center text-center text-dark-100/80">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="size-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>

              <div className="rounded-bl-lg border-t border-gray-300 p-6 text-center">
                <SubscribeComponent
                  priceId="price_1Pa56zSDEORYZxmyUmdvTjOB"
                  userId={user._id.toString()}
                />
              </div>
            </div>
            <div className="relative mb-10 w-full rounded-lg border-2 border-cyan-500 lg:-mt-px lg:mb-0 lg:w-1/3">
              <span className="absolute right-0 top-0 rounded-bl bg-cyan-500 px-3 py-1 text-xs tracking-widest text-white">
                POPULAR
              </span>
              <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
                <h3 className="tracking-widest">PRO</h3>
                <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-dark-100/80">
                  $38
                  <span className="ml-1 text-base text-dark-100/80">/mo</span>
                </h2>
                <span className="text-sm text-dark-100/80">
                  Charging $456 per year
                </span>
              </div>
              <p className="flex h-12 items-center justify-center border-t border-gray-300 bg-primary-850 text-center text-dark-100/80">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="size-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Advanced
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                Customizable
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Community & Priority
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                10
              </p>
              <p className="flex h-12 items-center justify-center text-center text-dark-100/80">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="size-5 text-dark-100/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="border-t border-gray-300 p-6 text-center">
                <SubscribeComponent
                  priceId="price_1PaY7SSDEORYZxmyQQvxjXlL"
                  userId={user._id.toString()}
                />
                <p className="mt-3 text-xs text-dark-100/80">
                  Please Review our Terms & Conditions before buying.
                </p>
              </div>
            </div>
            <div className="w-full rounded-lg border-2 border-gray-300 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
              <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
                <h3 className="tracking-widest">BUSINESS</h3>
                <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-dark-100/80">
                  $54
                  <span className="ml-1 text-base">/mo</span>
                </h2>
                <span className="text-sm text-dark-100/80">
                  Charging $648 per year
                </span>
              </div>
              <p className="flex h-12 items-center justify-center border-t border-gray-300 bg-primary-850 text-center text-dark-100/80">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="size-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Advanced
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                Customizable
              </p>
              <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-dark-100/80">
                Community & 24 / 7 Premium
              </p>
              <p className="flex h-12 items-center justify-center bg-primary-850 text-center leading-relaxed text-dark-100/80">
                Unlimited
              </p>
              <p className="flex h-12 items-center justify-center text-center text-dark-100/80">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="size-5 text-dark-100/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="border-t border-gray-300 p-6 text-center">
                <SubscribeComponent
                  priceId="price_1PaY7vSDEORYZxmyzLvR5piK"
                  userId={user._id.toString()}
                />
                <p className="mt-3 text-xs text-dark-100/80">
                  Please Review our Terms & Conditions before buying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPlan;
