import PaymentPlan from "@/components/page/home/PaymentPlan";
import Link from "next/link";
export default function Pricing() {
  return (
    <div className="py-20 ">
      <header className="mx-auto w-[90%] border-b border-gray-500 py-12 text-center text-white">
        <h1 className="mt-16 text-4xl font-bold">Pricing</h1>
      </header>
      <section className="px-4 pt-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">
          Unlock the Future of Storytelling with Our AI Documentary Generation
          Plan
        </h2>
        <p className="mx-auto mt-12 max-w-2xl text-justify">
          Are you ready to transform your documentary creation process? Welcome
          to a revolutionary way of storytelling with our AI Documentary
          Generation Plan. Whether you&#39;re a filmmaker, educator, marketer,
          or content creator, our AI-driven platform is designed to make your
          documentary creation process faster, smarter, and more impactful.
        </p>
      </section>

      <section className=" px-4 pt-12 text-white">
        <h2 className="text-center text-2xl font-bold">
          Join the Revolution Today!
        </h2>
        <p className="mx-auto mt-12 max-w-2xl text-justify">
          Ready to revolutionize your documentary creation process? Purchase our
          AI Documentary Generation Plan and unlock the future of storytelling.
          Experience the perfect blend of technology and creativity, and take
          your documentaries to new heights.
          <br /> <br />
          Don&#39;t miss out on this opportunity to stay ahead of the curve.
          Subscribe now and start creating world-class documentaries with ease
          and efficiency.
        </p>
      </section>
      <div className="">
        <PaymentPlan />
      </div>

      <section className="px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">Perfect for Various Applications</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <div className="primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Marketing</h3>
          </div>
          <div className="primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Entertainment</h3>
          </div>
          <div className="primary-gradient scale-90 rounded-lg border border-cyan-500 p-4 shadow-lg transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Corporate Training</h3>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-light-800">
        <h2 className="text-center text-2xl font-bold">
          Why Choose Our AI Documentary Generation Plan?
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Effortless Creation</h3>
            <p className="mt-2 text-justify">
              Gone are the days of labor-intensive research, scriptwriting, and
              editing. Our AI-powered platform simplifies the entire process,
              allowing you to focus on the creative aspects of your project.
              With just a few inputs, our AI generates comprehensive,
              high-quality documentaries tailored to your needs.
            </p>
          </div>
          <div className="primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Time and Cost Efficiency</h3>
            <p className="mt-2 text-justify">
              Save time and reduce production costs significantly. What used to
              take weeks or even months can now be accomplished in a fraction of
              the time. Our AI handles the heavy lifting, so you can meet tight
              deadlines and stay within budget.
            </p>
          </div>
          <div className="primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Unmatched Quality</h3>
            <p className="mt-2 text-justify">
              Harness the power of cutting-edge AI technology to produce
              documentaries that are not only informative but also engaging and
              visually stunning. Our AI ensures your content is well-researched,
              factually accurate, and beautifully crafted.
            </p>
          </div>
          <div className="primary-gradient scale-95 rounded-lg border border-cyan-500 p-4 shadow-lg transition-shadow hover:scale-100 hover:shadow-xl">
            <h3 className="text-xl font-bold">Accessible and User-Friendly</h3>
            <p className="mt-2 text-justify">
              No need to be a tech expert. Our intuitive interface ensures that
              anyone can create professional-quality documentaries with ease.
              Simply provide the necessary inputs, and let our AI do the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">
          Get Answer To Your Most Asked Questions
        </h2>
        <div className="mt-8 grid grid-cols-2">
          <div className="scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">
              What is the AI Documentary Generation Plan?
            </h3>
            <p className="mt-2 text-justify">
              The AI Documentary Generation Plan is a comprehensive solution
              that leverages advanced AI technology to assist in the creation of
              high-quality documentaries.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">How do I subscribe to a plan?</h3>
            <p className="mt-2 text-justify">
              You can subscribe to a plan by selecting the “Subscribe Now”
              button under your desired plan and following the prompts to
              complete your purchase.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">Can I upgrade my plan later?</h3>
            <p className="mt-2 text-justify">
              Yes, you can upgrade your plan at any time. Simply go to your
              account settings and select the new plan you wish to upgrade to.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">
              What payment methods do you accept?
            </h3>
            <p className="mt-2">
              We accept all major credit cards and PayPal for annual billing.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">
              {" "}
              Do I need any prior experience to use these tools?
            </h3>
            <p className="mt-2 text-justify">
              {" "}
              No prior experience is needed. Our AI-powered tools are designed
              to be user-friendly and intuitive, making it easy for anyone to
              create professional documentaries.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">Is my data secure?</h3>
            <p className="mt-2">
              Yes, we prioritize your data security and employ industry-standard
              measures to protect your information.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border p-4 shadow-md transition hover:scale-100">
            <h3 className="text-xl font-bold">
              Where can I find more information on the terms of use?
            </h3>
            <p className="mt-2">
              Please review our{" "}
              <Link className="text-red-500" href="/terms-of-use">
                Terms of Use
              </Link>{" "}
              before purchasing any plan. You can find the link at the bottom of
              our subscription page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
