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
    question: "Is there a minimum order for wholesale accounts?",
    answer:
      "Order minimums can vary depending on the products and categories you're interested in. Our team will walk you through the specifics during your product consultation.",
  },
  {
    question: "Who is eligible for a wholesale account?",
    answer:
      "We work with dispensaries, retailers, and distribution businesses. Submit an inquiry with a bit about your business, and our team will follow up to confirm fit and next steps.",
  },
  {
    question: "How does shipping and fulfillment work for wholesale orders?",
    answer:
      "Fulfillment details are confirmed as part of onboarding and can depend on your location and order size. Your account contact will go over what to expect once your account is set up.",
  },
  {
    question: "Is the full product catalog available for wholesale?",
    answer:
      "Availability can vary by category and by region. We'll go over what's currently available to your business during the product consultation step.",
  },
  {
    question: "How is wholesale pricing determined?",
    answer:
      "Pricing is discussed directly with our team once we understand your business and order needs — we don't publish a general wholesale price list.",
  },
  {
    question: "What does becoming a long-term partner look like?",
    answer:
      "Many partnerships start with an initial order and grow from there. Your dedicated contact can talk through what an ongoing relationship could look like for your business.",
  },
];

export function WholesaleFAQ() {
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
            Wholesale questions.
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

export default WholesaleFAQ;