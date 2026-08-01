"use client";

import { motion } from "framer-motion";
import { Gem, BadgeCheck, PackageCheck, Crown } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: typeof Gem;
}

const BENEFITS: Benefit[] = [
  {
    title: "Premium Curated Products",
    description:
      "Every item in the catalog is hand-selected by our team — nothing added just to fill a shelf.",
    icon: Gem,
  },
  {
    title: "Quality & Selection",
    description:
      "Sourced from makers we vet ourselves, spanning flower, glass, vapes, and accessories.",
    icon: BadgeCheck,
  },
  {
    title: "Discreet, Reliable Service",
    description:
      "Unmarked packaging and tracked shipping on every order, no exceptions.",
    icon: PackageCheck,
  },
  {
    title: "Member-Only Advantages",
    description:
      "Retail customers get first look at member pricing and drops when they join the club.",
    icon: Crown,
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

export function RetailBenefits() {
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
            Why Buy From Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            A standard we hold{" "}
            <span className="italic text-[#3f6b4f]">on every order.</span>
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                custom={index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
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

export default RetailBenefits;