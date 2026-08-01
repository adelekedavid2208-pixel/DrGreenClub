"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does DrGreenClub choose which products to carry?",
    answer:
      "Our team reviews and selects every product in the catalog before it's listed. We look at makers we trust and prioritize quality and consistency over simply carrying as many options as possible.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Browse the shop, add items to your cart, and check out when you're ready. You'll receive an order confirmation once your purchase goes through.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Orders are packaged discreetly and shipped to the address you provide at checkout. For specific delivery timeframes and coverage areas, please refer to our shipping page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We want you to be happy with what you order. For details on eligibility, timeframes, and how to start a return, please refer to our returns page or reach out to our support team.",
  },
  {
    question: "How is membership different from shopping retail?",
    answer:
      "Retail lets you shop individual products whenever you like, with no commitment. Membership adds a recurring element on a cadence you choose — visit our membership page for the full comparison.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "You can reach our support team through the contact page, and we'll get back to you as soon as we can. We're happy to help with anything related to your order or account.",
  },
];

export function RetailFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            FAQ
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl"
          >
            Common questions.
          </motion.h2>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-[#1a1a1a]/8 rounded-2xl bg-[#fdfbf6] px-2 shadow-sm sm:px-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-[15px] font-semibold text-[#1a1a1a] sm:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 text-[#3f6b4f]"
                  >
                    <ChevronDown size={18} strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-[14px] leading-relaxed text-[#5a5a52]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RetailFAQ;