import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const HelpSection: FC = () => {
  const help = useTranslations("Help us");
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">{help("title")}</h1>
      <div className="mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{help("accordion 1 question")}</AccordionTrigger>
            <AccordionContent>{help("accordion 1 answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{help("accordion 2 question")}</AccordionTrigger>
            <AccordionContent>{help("accordion 2 answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{help("accordion 3 question")}</AccordionTrigger>
            <AccordionContent>{help("accordion 3 answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{help("accordion 4 question")}</AccordionTrigger>
            <AccordionContent>{help("accordion 4 answer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{help("accordion 5 question")}</AccordionTrigger>
            <AccordionContent>{help("accordion 5 answer")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
