import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section className="p-8 md:px-20" id="faqs">
      <h1 className="h1-bold mb-8 text-center text-dark-100">FAQs</h1>
      <Accordion
        type="single"
        collapsible
        className="grid gap-4 sm:grid-cols-2"
      >
        <AccordionItem
          value="item-1"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>Great to Complete?</AccordionTrigger>
          <AccordionContent>
            You can start by signing up on our website and submitting your video
            prompt through our user-friendly interface.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Do you offer customization options for the generated videos?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer various customization options, including script
            adjustments, voice-over settings, and video editing tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            What is included in the free plan?
          </AccordionTrigger>
          <AccordionContent>
            The free plan includes AI-powered script generation, basic video
            editing tools, text-to-speech voice-over, access to community
            support, and is limited to 3 projects per month with watermarked
            videos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
          <AccordionContent>
            You can upgrade your plan at any time by logging into your account
            and selecting the desired plan from the account settings page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Do you offer support for businesses?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer 24/7 premium support and a dedicated account manager
            for our Business plan subscribers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Can I cancel my subscription anytime?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can cancel your subscription at any time through your
            account settings. The cancellation will take effect at the end of
            your current billing period.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept various payment methods, including credit/debit cards and
            Stripe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            How long does it take to generate a video?
          </AccordionTrigger>
          <AccordionContent>
            The time to generate a video depends on the length and complexity of
            your prompt, but most videos are ready within a few hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-9"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Can I see examples of videos created with your service?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can view sample videos on our website to get an idea of the
            quality and style of our generated content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-10"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Is there a limit to the length of the documentary I can create?
          </AccordionTrigger>
          <AccordionContent>
            Our Pro and Business plans allow for longer and more detailed
            documentaries. The free plan is limited to shorter projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-11"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Do you offer multi-language support for voice-over?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer voice-over in multiple languages. You can choose your
            preferred language during the project setup.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-12"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            What if I&#39;m not satisfied with the generated video?
          </AccordionTrigger>
          <AccordionContent>
            If you&#39;re not satisfied with the generated video, you can
            request revisions through our support team. We aim to ensure our
            customers are happy with the final product.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-13"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>How secure is my data?</AccordionTrigger>
          <AccordionContent>
            We take data security very seriously. All your data is encrypted and
            stored securely. We do not share your data with third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-14"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Can I collaborate with my team on a project?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our Business plan includes team collaboration features,
            allowing multiple users to work on the same project simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-15"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>
            Do you offer training or tutorials on how to use your service?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we provide comprehensive tutorials and customer support to help
            you get the most out of our service.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faqs;
