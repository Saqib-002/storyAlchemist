export default function About() {
  return (
    <div className="py-20">
      <header className="mx-auto w-[90%] border-b border-gray-500 py-12 text-center text-white">
        <h1 className="mt-16 text-4xl font-bold">About Us</h1>
      </header>
      <section className="px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mx-auto mt-4 max-w-2xl text-justify">
          Our mission is to democratize the creation of high-quality documentary
          videos through innovative AI technology. We strive to make
          professional video production accessible, efficient, and user-friendly
          for everyone.
        </p>
        <div className="animate-fadeIn mt-8 flex justify-center space-x-8">
          <div className="transition hover:scale-110">
            <h3 className="text-xl font-bold">100+</h3>
            <p className="">Documentaries Created</p>
          </div>
          <div className="transition hover:scale-110">
            <h3 className="text-xl font-bold">50+</h3>
            <p className="">Happy Clients</p>
          </div>
        </div>
      </section>

      <section className=" px-4 py-12 text-white">
        <h2 className="text-center text-2xl font-bold">Our Vision</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-justify">
          We envision a world where storytelling is effortless and accessible to
          all. By harnessing the power of AI, we aim to empower individuals,
          educators, and content creators to bring their stories to life in a
          visually compelling format.
        </p>
      </section>

      <section className="px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Ease of Use</h3>
          </div>
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Engaging Content</h3>
          </div>
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Efficiency</h3>
          </div>
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Customization</h3>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-light-800">
        <h2 className="text-center text-2xl font-bold">Our Features</h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Text to Video</h3>
            <p className="mt-2">
              Transform your written content into dynamic video presentations
              effortlessly.
            </p>
          </div>
          <div className="bg-primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Script Generation</h3>
            <p className="mt-2">
              Automatically generate well-structured scripts tailored to your
              topic.
            </p>
          </div>
          <div className="bg-primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Voice Over</h3>
            <p className="mt-2">
              Enhance your videos with AI-generated voice overs in multiple
              languages.
            </p>
          </div>
          <div className="bg-primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Customizable</h3>
            <p className="mt-2">
              Tailor each video to meet your audience's needs and preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <p>
              "Using this platform, I created an amazing documentary in no time.
              The AI tools are incredibly intuitive."
            </p>
            <h3 className="mt-4 font-bold">- User A</h3>
          </div>
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <p>
              "I was able to bring my project to life with ease. The quality and
              customization options are fantastic."
            </p>
            <h3 className="mt-4 font-bold">- User B</h3>
          </div>
          <div className="bg-primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <p>
              "This platform has revolutionized the way I create content. Highly
              recommended!"
            </p>
            <h3 className="mt-4 font-bold">- User C</h3>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">
          Get Answer To Your Most Asked Questions
        </h2>
        <div className="mt-8">
          <div className="scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">How do I get started?</h3>
            <p className="mt-2">
              Sign up on our platform and start creating your first documentary
              with our easy-to-use tools.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">What features are available?</h3>
            <p className="mt-2">
              We offer text to video, script generation, voice over, and
              customization options.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">Can I customize my videos?</h3>
            <p className="mt-2">
              Yes, our platform provides various customization options to tailor
              your videos to your audience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
