"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Leaf } from "lucide-react";

const MotionLink = motion(Link);

interface MembershipPlan {
  name: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
  featured?: boolean;
}

const PLANS: MembershipPlan[] = [
  {
    name: "Monthly",
    description: "The flexible way to experience the club.",
    price: "$30",
    features: [
      "Curated monthly box ($100+ value)",
      "Free discreet shipping",
      "Members-only pricing",
      "Cancel anytime",
    ],
  },
  {
    name: "Annual",
    description: "Best value. Two boxes on us.",
    price: "$25",
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Monthly",
      "2 months free (save $60)",
      "Exclusive annual-only drops",
      "Early access to new brands",
      "Free birthday gift",
    ],
  },
  {
    name: "Founders",
    description: "For the true believers. Limited invites.",
    price: "$20",
    features: [
      "Everything in Annual",
      "Signed founders box",
      "Private community access",
      "Concierge product picks",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MembershipCard({ plan, index }: { plan: MembershipPlan; index: number }) {
  const isFeatured = plan.featured;

  return (
    <motion.div
      custom={index * 0.12}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        isFeatured
          ? "bg-[#0f2318] text-[#f4f1ea]"
          : "bg-[#fdfbf6] text-[#1a1a1a]"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#e0a33e] px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1a1a1a]">
          {plan.badge}
        </span>
      )}

      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
        <Leaf
          size={16}
          strokeWidth={1.75}
          className={isFeatured ? "text-[#f4f1ea]/50" : "text-[#8a8672]"}
        />
      </div>

      <p
        className={`mb-6 text-sm leading-relaxed ${
          isFeatured ? "text-[#f4f1ea]/70" : "text-[#5a5a52]"
        }`}
      >
        {plan.description}
      </p>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="font-serif text-4xl font-bold">{plan.price}</span>
        <span
          className={`text-sm ${
            isFeatured ? "text-[#f4f1ea]/60" : "text-[#8a8672]"
          }`}
        >
          /month
        </span>
      </div>

      <MotionLink
        href="/subscription"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mb-7 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors ${
          isFeatured
            ? "bg-[#e0a33e] text-[#1a1a1a] hover:bg-[#eab254]"
            : "bg-[#0f2318] text-[#f4f1ea] hover:bg-[#173321]"
        }`}
      >
        Become a Member
      </MotionLink>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
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

export function MembershipPreview() {
  return (
    <section className="bg-[#f5f0e6] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
        >
          Membership
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-xl font-serif text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-[42px]"
        >
          Choose the ritual that fits your{" "}
          <span className="italic text-[#3f6b4f]">rhythm.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#5a5a52]"
        >
          Every plan unlocks the same curation of premium products — pick the
          cadence and commitment that feels right.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <MembershipCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPreview;