export default function About() {
  return (
    <div className="py-20">
      <header className="text-white text-center py-12 border-b border-gray-500 w-[90%] mx-auto">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>
      <section className="text-center text-light-800 py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 max-w-2xl mx-auto">
        Our mission is to democratize the creation of high-quality documentary videos through innovative AI technology. We strive to make professional video production accessible, efficient, and user-friendly for everyone.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >100+</h3>
            <p className="">Documentaries Created</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >50+</h3>
            <p className="">Happy Clients</p>
          </div>
        </div>
      </section>

      <section className=" text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
        We envision a world where storytelling is effortless and accessible to all. By harnessing the power of AI, we aim to empower individuals, educators, and content creators to bring their stories to life in a visually compelling format.
        </p>
      </section>

      <section className="text-center text-light-800 py-12 px-4">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 scale-90 shadow-lg rounded-lg bg-primary-gradient border border-cyan-500 transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Ease of Use</h3>
          </div>
          <div className="p-4 scale-90 shadow-lg rounded-lg bg-primary-gradient border border-cyan-500 transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Engaging Content</h3>
          </div>
          <div className="p-4 scale-90 shadow-lg rounded-lg bg-primary-gradient border border-cyan-500 transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Efficiency</h3>
          </div>
          <div className="p-4 scale-90 shadow-lg rounded-lg bg-primary-gradient border border-cyan-500 transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Customization</h3>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-light-800">
        <h2 className="text-2xl font-bold text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 scale-95 bg-primary-gradient border border-cyan-500 shadow-lg rounded-lg hover:shadow-xl transition-shadow hover:scale-100">
            <h3 className="text-xl font-bold">Text to Video</h3>
            <p className="mt-2">Transform your written content into dynamic video presentations effortlessly.</p>
          </div>
          <div className="p-4 scale-95 bg-primary-gradient border border-cyan-500 shadow-lg rounded-lg hover:shadow-xl transition-shadow hover:scale-100">
            <h3 className="text-xl font-bold">Script Generation</h3>
            <p className="mt-2">Automatically generate well-structured scripts tailored to your topic.</p>
          </div>
          <div className="p-4 scale-95 bg-primary-gradient border border-cyan-500 shadow-lg rounded-lg hover:shadow-xl transition-shadow hover:scale-100">
            <h3 className="text-xl font-bold">Voice Over</h3>
            <p className="mt-2">Enhance your videos with AI-generated voice overs in multiple languages.</p>
          </div>
          <div className="p-4 scale-95 bg-primary-gradient border border-cyan-500 shadow-lg rounded-lg hover:shadow-xl transition-shadow hover:scale-100">
            <h3 className="text-xl font-bold">Customizable</h3>
            <p className="mt-2">Tailor each video to meet your audience's needs and preferences.</p>
          </div>
        </div>
      </section>

      <section className="text-light-800 text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 scale-90 shadow-lg border border-cyan-500 rounded-lg bg-primary-gradient transition-colors hover:scale-100">
            <p>"Using this platform, I created an amazing documentary in no time. The AI tools are incredibly intuitive."</p>
            <h3 className="mt-4 font-bold">- User A</h3>
          </div>
          <div className="p-4 scale-90 shadow-lg border border-cyan-500 rounded-lg bg-primary-gradient transition-colors hover:scale-100">
            <p>"I was able to bring my project to life with ease. The quality and customization options are fantastic."</p>
            <h3 className="mt-4 font-bold">- User B</h3>
          </div>
          <div className="p-4 scale-90 shadow-lg border border-cyan-500 rounded-lg bg-primary-gradient transition-colors hover:scale-100">
            <p>"This platform has revolutionized the way I create content. Highly recommended!"</p>
            <h3 className="mt-4 font-bold">- User C</h3>
          </div>
        </div>
      </section>

      <section className="text-center text-light-800 py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How do I get started?</h3>
            <p className="mt-2">Sign up on our platform and start creating your first documentary with our easy-to-use tools.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">What features are available?</h3>
            <p className="mt-2">We offer text to video, script generation, voice over, and customization options.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Can I customize my videos?</h3>
            <p className="mt-2">Yes, our platform provides various customization options to tailor your videos to your audience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
