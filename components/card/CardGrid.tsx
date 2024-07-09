"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CardGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className="body-font text-dark-100/80">
      <div className="container mx-auto px-5 pt-24">
        <div className="-m-4 flex flex-wrap text-center">
          <div className="w-full p-4 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg border-2 border-gray-600 px-4 py-6 transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 inline-block size-12 text-cyan-500"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font text-3xl font-medium text-dark-100/80">
                {inView ? (
                  <CountUp start={0} end={2700} duration={2.75} />
                ) : (
                  "0"
                )}
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="w-full p-4 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg border-2 border-gray-600 px-4 py-6 transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 inline-block size-12 text-cyan-500"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font text-3xl font-medium text-dark-100/80">
                {inView ? (
                  <CountUp start={0} end={1300} duration={2.75} />
                ) : (
                  "0"
                )}
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="w-full p-4 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg border-2 border-gray-600 px-4 py-6 transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 inline-block size-12 text-cyan-500"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font text-3xl font-medium text-dark-100/80">
                {inView && <CountUp start={0} end={74} duration={2.75} />}
              </h2>
              <p className="leading-relaxed">Files</p>
            </div>
          </div>
          <div className="w-full p-4 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg border-2 border-gray-600 px-4 py-6 transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 inline-block size-12 text-cyan-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font text-3xl font-medium text-dark-100/80">
                {inView && <CountUp start={0} end={46} duration={2.75} />}
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
