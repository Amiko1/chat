import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeAccordion() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>what is chat app</AccordionTrigger>
          <AccordionContent>
            chat app is app which helpp you to get know new people
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>how it works?</AccordionTrigger>
          <AccordionContent>
            You can find partnner in real time, and start chat
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>is it anonymous?</AccordionTrigger>
          <AccordionContent>
            Yes, everything is anonymous, no one can see who you are.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
