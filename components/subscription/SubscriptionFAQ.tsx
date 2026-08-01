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
    question: "How does DrGreenClub membership work?",
    answer:
      "Once you join, you're set up on a recurring cadence and receive a curated selection based on your plan. You can review what's included in each plan on this page before joining.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing follows the cadence tied to your chosen plan. Full billing details are confirmed during checkout and are also available from your account dashboard once you're a member.",
  },
  {
    question: "Can I change my membership plan later?",
    answer:
      "Yes — you can switch between available plans from your account dashboard. Any change takes effect based on your current billing cycle.",
  },
  {
    question: "Can I pause or cancel my membership?",
    answer:
      "You can pause or cancel from your account dashboard at any time. Details on how changes apply to your current cycle are available there as well.",
  },
  {
    question: "How does shipping work for members?",
    answer:
      "Member orders are packaged discreetly and shipped to the address on your account. For specific delivery timeframes, please refer to our shipping page.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "You can reach our support team through the contact page, and we'll get back to you as soon as we can — whether it's about your membership, an order, or your account.",
  },
];

export function SubscriptionFAQ() {
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
            Membership questions.
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

export default SubscriptionFAQ;