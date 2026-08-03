"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  badge?: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Plan One",
    price: "$0",
    description: "Short editable description for this plan goes here.",
    features: [
      "Editable feature one",
      "Editable feature two",
      "Editable feature three",
      "Editable feature four",
      "Editable feature five",
    ],
  },
  {
    badge: "Most Popular",
    name: "Plan Two",
    price: "$0",
    description: "Short editable description for this plan goes here.",
    features: [
      "Editable feature one",
      "Editable feature two",
      "Editable feature three",
      "Editable feature four",
      "Editable feature five",
    ],
    featured: true,
  },
  {
    name: "Plan Three",
    price: "$0",
    description: "Short editable description for this plan goes here.",
    features: [
      "Editable feature one",
      "Editable feature two",
      "Editable feature three",
      "Editable feature four",
      "Editable feature five",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function PlanCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        isFeatured
          ? "bg-[#0f2318] text-[#f4f1ea] lg:-translate-y-3"
          : "bg-[#fdfbf6] text-[#1a1a1a]"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e0a33e] px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1a1a1a]">
          {plan.badge}
        </span>
      )}

      <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          isFeatured ? "text-[#f4f1ea]/70" : "text-[#5a5a52]"
        }`}
      >
        {plan.description}
      </p>

      <div className="mb-6 mt-6 flex items-baseline gap-1">
        <span className="font-serif text-4xl font-bold">{plan.price}</span>
        <span
          className={`text-sm ${isFeatured ? "text-[#f4f1ea]/60" : "text-[#8a8672]"}`}
        >
          /month
        </span>
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mb-7 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
          isFeatured
            ? "bg-[#e0a33e] text-[#1a1a1a] hover:bg-[#eab254]"
            : "bg-[#0f2318] text-[#f4f1ea] hover:bg-[#173321]"
        }`}
      >
        Choose Plan
      </motion.button>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check
              size={15}
              strokeWidth={2.25}
              className={`mt-0.5 shrink-0 ${
                isFeatured ? "text-[#7fb894]" : "text-[#3f6b4f]"
              }`}
            />
            <span className={isFeatured ? "text-[#f4f1ea]/85" : "text-[#3a3a34]"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function MembershipPlans() {
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
            Membership Plans
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            Choose the plan{" "}
            <span className="italic text-[#3f6b4f]">that fits.</span>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MembershipPlans;