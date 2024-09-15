import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/shared/Accordion";
import { FAQ_DATA } from "@/lib/data";

interface FAQItem {
  id: string;
  qns: string;
  ans: string;
}

interface FAQSection {
  heading: string;
  contents: FAQItem[];
}

interface OneFAQContentProps {
  content: string;
}

const OneFAQContent: React.FC<OneFAQContentProps> = ({ content }) => {
  const formattedContent = content;
  return <>{formattedContent}</>;
};

interface AccordionSectionProps {
  heading: string;
  contents: FAQItem[];
  className?: string;
  selectedAccordion: string | null;
  setSelectedAccordion: (id: string) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  heading,
  contents,
  className,
  selectedAccordion,
  setSelectedAccordion
}) => (
  <div className={className}>
    <h2 className="text-display-xs font-bold">{heading}</h2>
    {contents.map((oneFaq) => (
      <AccordionItem
        onClick={() => {
          if (oneFaq.id === selectedAccordion) {
            setSelectedAccordion("");
          } else {
            setSelectedAccordion(oneFaq.id);
          }
        }}
        id={oneFaq.id}
        key={oneFaq.id}
        value={oneFaq.id}
        className="scroll-mt-[80px]"
      >
        <AccordionTrigger className="text-left">{oneFaq.qns}</AccordionTrigger>
        <AccordionContent>
          <OneFAQContent content={oneFaq.ans} />
        </AccordionContent>
      </AccordionItem>
    ))}
  </div>
);

// Typing for the FAQ component state
const FAQ: React.FC = () => {
  const [urlFragment, setUrlFragment] = useState<string | null>(null);
  const [selectedAccordion, setSelectedAccordion] = useState<string>("");
  const router = useRouter();

  const onHashChangeStart = () => {
    if (window.location.hash) {
      setUrlFragment(window.location.hash.substring(1));
    }
  };

  useEffect(() => {
    onHashChangeStart();
  }, [router.asPath]);

  return (
    <MainLayout
      title="FAQ - SpaceDock"
      className="mx-auto pb-20 pt-20 flex flex-col h-full w-full max-w-screen-xl px-6 sm:px-16"
    >
      <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
      <Accordion
        className="w-full mt-8"
        type="single"
        collapsible
        value={urlFragment || selectedAccordion}
        onValueChange={() => {
          setUrlFragment(null);
        }}
      >
        {FAQ_DATA.map((oneFAQSection, index) => (
          <AccordionSection
            key={index}
            heading={oneFAQSection.heading}
            contents={oneFAQSection.contents}
            className="mt-8"
            selectedAccordion={selectedAccordion}
            setSelectedAccordion={setSelectedAccordion}
          />
        ))}
      </Accordion>
    </MainLayout>
  );
};

export default FAQ;
