import React from "react";
const StepsCard = () => {
  return (
    <section
      id="features"
      className="primary-gradient relative block px-6 py-10 md:px-10 md:py-20"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider text-dark-100/80">
          Why choose us
        </span>
        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Create AI-Generated Documentaries Effortlessly
        </h2>
        <p className="mx-auto my-4 w-full  max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          Our intuitive AI tools make it easy to produce professional-grade
          documentaries. No technical skills required—transform your ideas into
          engaging videos using these simple steps.
        </p>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
          <div
            className=" mx-auto flex size-12 items-center justify-center rounded-md border"
            style={{
              backgroundImage:
                "linear-gradient(rgb(150, 66, 229) 0%, rgb(43, 49, 203) 100%)",
              borderColor: "rgb(93, 79, 240)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
              <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
              <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
              <line x1="17" y1="17" x2="17" y2="17.01"></line>
            </svg>
          </div>
          <h3 className="mt-6 text-dark-100/80">Customizable</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-dark-100/80">
            Simply describe your documentary’s theme and main points.
          </p>
        </div>

        <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
          <div
            className="mx-auto flex size-12 items-center justify-center rounded-md border "
            style={{
              backgroundImage:
                "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
              borderColor: "rgb(93, 79, 240)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
            </svg>
          </div>
          <h3 className="mt-6 text-dark-100/80">Fast Performance</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-dark-100/80">
            Our AI handles the rest: it generates a script, adds voiceover, and
            makes a complete video.
          </p>
        </div>

        <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
          <div
            className="mx-auto flex size-12 items-center justify-center rounded-md border "
            style={{
              backgroundImage:
                "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
              borderColor: "rgb(93, 79, 240)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
              <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
              <polyline points="12 8 7 3 3 7 8 12"></polyline>
              <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
              <polyline points="16 12 21 17 17 21 12 16"></polyline>
              <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
            </svg>
          </div>
          <h3 className="mt-6 text-dark-100/80">Fully Featured</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-dark-100/80">
            Review the video and make any quick edits if needed. Finalize your
            documentary effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsCard;
