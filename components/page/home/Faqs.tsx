import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section id="faqs" className="p-8 md:px-20">
      <h1 className="h1-bold text-center text-dark-100">Any Questions?</h1>
      <p className="paragraph-regular mx-auto my-10 max-w-[800px] text-dark-100">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur a
        ullam aut. Sint cumque ipsa ex, natus praesentium voluptatum voluptatem
        provident, necessitatibus atque laudantium deserunt doloremque pariatur
      </p>
      <Accordion
        type="single"
        collapsible
        className="grid gap-4 sm:grid-cols-2"
      >
        <AccordionItem
          value="item-1"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faqs;
