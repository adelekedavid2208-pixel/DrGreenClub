"use client";

import { motion, type Variants } from "framer-motion";
import { Gem, Crown, PackageCheck, Handshake } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: typeof Gem;
}

const BENEFITS: Benefit[] = [
  {
    title: "Curated Premium Products",
    description:
      "Every item is hand-selected and vetted by our team — no filler, no fast-fashion glass.",
    icon: Gem,
  },
  {
    title: "Exclusive Member Benefits",
    description:
      "Members-only pricing, early access to new brands, and drops you won't find in retail.",
    icon: Crown,
  },
  {
    title: "Discreet & Reliable Delivery",
    description:
      "Unmarked packaging, tracked shipping, and a fulfillment process built for privacy.",
    icon: PackageCheck,
  },
  {
    title: "Retail & Wholesale Partnerships",
    description:
      "Transparent pricing and dedicated support for dispensaries, retailers, and distributors.",
    icon: Handshake,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WhyDrGreenClub() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            Why DrGreenClub
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-xl font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            Built for members.{" "}
            <span className="italic text-[#3f6b4f]">Trusted by partners.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#5a5a52]"
          >
            From first-time members to long-term retail partners, every
            relationship runs on the same standard of quality and care.
          </motion.p>
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

export default WhyDrGreenClub;