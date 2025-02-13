import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What types of loans does Doshpal offer?
        </AccordionTrigger>
        <AccordionContent>
          We offer a variety of loans, including personal loans, business loans,
          payroll loans, and asset financing to meet your financial needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I apply for a loan?</AccordionTrigger>
        <AccordionContent>
          Simply visit our application page, fill out the required information,
          and submit your request. Our team will review your application and get
          back to you quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How long does it take to get approved?
        </AccordionTrigger>
        <AccordionContent>
          Loan approvals typically take between 24 to 48 hours after we receive
          all required documentation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Who is eligible to apply for a loan?
        </AccordionTrigger>
        <AccordionContent>
          Anyone over 18 years old with a stable income and valid identification
          can apply for a loan.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I repay my loan early?</AccordionTrigger>
        <AccordionContent>
          Yes, you can repay your loan early without any penalties. Early
          repayment may even reduce your interest cost.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
