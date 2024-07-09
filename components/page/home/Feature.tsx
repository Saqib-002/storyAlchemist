import Image from "next/image";
import React from "react";
const Feature = () => {
  return (
    <div id="features">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="gold"
            className=" size-6"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-dark-100/80 dark:text-dark-100/80 md:text-4xl">
            Revolutionize Documentary Creation with AI
          </h2>
          <p className="text-dark-100/80 dark:text-dark-100/80">
            Effortlessly produce high-quality, engaging documentaries. Our
            AI-powered platform transforms your ideas into professional videos
            tailored to your audience.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-primary-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="./images/camera.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-dark-100/80 transition group-hover:text-black dark:text-white">
                  Text to Video
                </h5>
                <p className="text-dark-100/80 transition group-hover:text-black">
                  Transform your text into captivating documentary videos
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-primary-850 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="./images/clipboard.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-dark-100/80 transition group-hover:text-black dark:text-white">
                  Script Generation
                </h5>
                <p className="text-dark-100/80 transition group-hover:text-black dark:text-gray-300">
                  Automatically generate scripts tailored to your topic and
                  audience.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-primary-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900">
            <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="./images/voice.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-dark-100/80 transition group-hover:text-black dark:text-white">
                  Voice Over
                </h5>
                <p className="text-dark-100/80 transition group-hover:text-black dark:text-gray-300">
                  Enhance your videos with AI-generated voice overs in multiple
                  languages.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-primary-950 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900">
            <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="./images/customize.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-dark-100/80 transition group-hover:text-black dark:text-white">
                  Customizable
                </h5>
                <p className="text-dark-100/80 transition group-hover:text-black dark:text-gray-300">
                  Tailor each video to meet your audience&#39;s needs and
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
