import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

function Faqs() {
  return (
    <div className="flex flex-col w-full px-5 py-5">
      <h1 className="mb-8 font-sans text-blue-800 underline">Frequently asked questions</h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[25px]">
            What curriculum does the school follow?
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            We follow a comprehensive curriculum that meets national educational
            standards, blending academic rigor with programs that foster
            spiritual and moral values to nurture each child holistically.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[25px]">
            How does the school support students&apos; spiritual development?
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            We incorporate values-based learning, including classes and
            activities focused on empathy, respect, and community, helping
            students build strong moral foundations alongside academic success.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[25px]">
            Are extracurricular activities offered at the school?{" "}
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            Yes, we offer a wide range of extracurricular activities, including
            sports, arts, and various clubs, to encourage students to explore
            their interests and develop new skills outside the classroom.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[25px]">
            How does the school ensure student safety and well-being?{" "}
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            The safety and well-being of our students are top priorities. We
            maintain secure facilities, follow strict safety protocols, and
            provide access to counseling services to support students&apos; mental
            and emotional health.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-[25px]">
            How can parents stay involved in their child&apos;s education?
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            We encourage parental involvement through regular updates,
            parent-teacher meetings, and an online portal where parents can
            track their child&apos;s progress, upcoming events, and school
            announcements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faqs;
