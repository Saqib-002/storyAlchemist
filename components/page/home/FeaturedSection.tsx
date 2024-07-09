import Image from "next/image";
import React from "react";
const FeaturedSection = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-dark-100 dark:text-dark-100 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark-100 dark:text-dark-100">
              Create AI-Generated Documentaries with Ease
            </h2>
            <p className="mb-8 text-justify font-light lg:text-xl">
              Start producing captivating documentary videos effortlessly. Our
              AI-driven platform ensures each video is unique, informative, and
              tailored to your audience and topic.
            </p>

            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-cyan-500 dark:text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-dark-100 dark:text-dark-100">
                  <strong>No Learning Curve:</strong> Create stunning
                  documentaries from day one.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-cyan-500 dark:text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-dark-100 dark:text-dark-100">
                  <strong>Engaging Content:</strong>Educational and entertaining
                  videos on any topic.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-cyan-500 dark:text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-dark-100 dark:text-dark-100">
                  <strong>Simple Process:</strong> Use our AI video generator as
                  easily as typing a message.
                </span>
              </li>
            </ul>
          </div>
          <Image
            className="mb-4 hidden h-auto w-full rounded-lg lg:mb-0 lg:flex"
            src="/images/feature-1.png"
            alt="dashboard feature image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
