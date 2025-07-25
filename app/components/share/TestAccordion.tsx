import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TestAccordion = () => {
  return (
    <React.Fragment>
      <h3 className="text-center p-4 text-2xl"> Accordion Test</h3>
      <section className="flex justify-center items-center">
        <Accordion
          type="single"
          collapsible
          className="lg:w-[400px] bg-slate-50 rounded-2xl p-3 my-10"
        >
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <AccordionItem key={index} value="item-1">
                <AccordionTrigger className="p-3 text-xl font-mono">
                  This is accordion trigger
                </AccordionTrigger>
                <AccordionContent className="p-4 text-red-600 text-base font-light">
                  This is accordion content Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Architecto doloremque iste in
                  corrupti nisi! Cumque ea et eos veritatis fugiat!
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </React.Fragment>
  );
};

export default TestAccordion;
