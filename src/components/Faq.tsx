"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full p-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-orange-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of video production services including corporate videos, promotional content, event coverage, animation, and more.",
  },
  {
    question: "What is your production process?",
    answer: "Our process typically includes pre-production planning, filming, post-production editing, and final delivery. We collaborate closely with you at each stage to ensure your vision is realized.",
  },
  {
    question: "Do you provide scripts or do we need to provide one?",
    answer:
      "We can assist with scriptwriting if needed. We also welcome any scripts or ideas you have to ensure the final product aligns with your vision.",
  },
  {
    question: "Do you only work with motorsport?",
    answer:
      "While we have a strong focus on motorsport, we also create content for various industries and themes.",
  },
];
