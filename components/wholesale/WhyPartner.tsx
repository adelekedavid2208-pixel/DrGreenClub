"use client";

import { motion, type Variants } from "framer-motion";
import { BadgeCheck, Truck, Layers, Headset } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: typeof BadgeCheck;
}

const BENEFITS: Benefit[] = [
  {
    title: "Consistent Product Quality",
    description:
      "The same standard we hold for our own members carries through to every wholesale order.",
    icon: BadgeCheck,
  },
  {
    title: "Reliable Wholesale Supply",
    description:
      "Dependable fulfillment built around your business's ordering cadence, not just our own.",
    icon: Truck,
  },
  {
    title: "Flexible Retail & Distribution Options",
    description:
      "Options structured to fit different store formats, order volumes, and distribution needs.",
    icon: Layers,
  },
  {
    title: "Dedicated Business Support",
    description:
      "A point of contact for onboarding, ordering questions, and ongoing account support.",
    icon: Headset,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WhyPartner() {
  return (
    <section className="bg-[#f5f0e6] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            Why Partner With Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            A partner built for{" "}
            <span className="italic text-[#3f6b4f]">your business.</span>
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="flex flex-col rounded-2xl bg-[#fdfbf6] p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2318]/[0.06]">
                  <Icon size={22} strokeWidth={1.5} className="text-[#3f6b4f]" />
                </div>

                <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-[#1a1a1a]">
                  {benefit.title}
                </h3>

                <p className="text-[13.5px] leading-relaxed text-[#5a5a52]">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyPartner;