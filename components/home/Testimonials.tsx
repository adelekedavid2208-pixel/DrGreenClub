"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  membership?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "It genuinely feels like a gift I bought myself. The curation is serious — nothing in the box feels like filler.",
    name: "Riley A.",
    membership: "Member since '23",
  },
  {
    quote:
      "I've cancelled subscriptions before out of boredom. This is the first one I actually look forward to every month.",
    name: "Jordan M.",
    membership: "Annual Member",
  },
  {
    quote:
      "As a dispensary owner, the wholesale team has been easy to work with and consistent on fulfillment — that matters more than people think.",
    name: "Casey T.",
    membership: "Wholesale Partner",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Testimonials() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center justify-center gap-1"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#e0a33e] text-[#e0a33e]" />
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            Rated 4.9 / 5{" "}
            <span className="italic text-[#3f6b4f]">by 8,200+ members.</span>
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex flex-col rounded-2xl bg-[#fdfbf6] p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <Quote
                size={26}
                strokeWidth={1.5}
                className="mb-4 text-[#3f6b4f]/30"
                fill="currentColor"
              />

              <p className="flex-1 font-serif text-[15px] italic leading-relaxed text-[#2b2b28]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-[#1a1a1a]/8 pt-4">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  {testimonial.name}
                </p>
                {testimonial.membership && (
                  <p className="mt-0.5 text-[12px] text-[#8a8672]">
                    {testimonial.membership}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;