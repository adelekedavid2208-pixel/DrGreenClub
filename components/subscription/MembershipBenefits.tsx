"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, Tag, Rocket, Gem, Users, Headset } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: typeof Sparkles;
}

const BENEFITS: Benefit[] = [
  {
    title: "Exclusive Monthly Drops",
    description:
      "Access to releases and product runs reserved specifically for members.",
    icon: Sparkles,
  },
  {
    title: "Member Pricing",
    description:
      "Preferred pricing on select items across the catalog, applied automatically.",
    icon: Tag,
  },
  {
    title: "Early Product Access",
    description:
      "See and shop new arrivals before they're available to everyone else.",
    icon: Rocket,
  },
  {
    title: "Curated Premium Selection",
    description:
      "Every item chosen by our team, so you're never sorting through filler.",
    icon: Gem,
  },
  {
    title: "Community Events",
    description:
      "Invitations to member gatherings and experiences throughout the year.",
    icon: Users,
  },
  {
    title: "Priority Customer Support",
    description:
      "A faster line to our team whenever you have a question or an issue.",
    icon: Headset,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function MembershipBenefits() {
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
            Membership Benefits
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            More than a box.{" "}
            <span className="italic text-[#3f6b4f]">A standing.</span>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
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
        </motion.div>
      </div>
    </section>
  );
}

export default MembershipBenefits;