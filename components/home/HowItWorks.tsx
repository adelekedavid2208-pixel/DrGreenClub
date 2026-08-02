"use client";

import { motion, type Variants } from "framer-motion";
import { UserPlus, Search, Truck } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: typeof UserPlus;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Join DrGreenClub",
    description:
      "Pick monthly, annual, or founders. Adjust or cancel any time from your dashboard.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Browse Premium Products",
    description:
      "Explore curated glass, papers, and gear from makers we trust and vet ourselves.",
    icon: Search,
  },
  {
    number: "03",
    title: "Receive Discreet Delivery",
    description:
      "Your box arrives in unmarked packaging, right to your door, every time.",
    icon: Truck,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  return (
    <section className="bg-[#f5f0e6] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            How It Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-md font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            A ritual made simple, from day one.
          </motion.h2>
        </div>

        <div className="relative mt-16">
          {/* Connector line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-9 hidden h-px bg-[#1a1a1a]/10 md:block"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center rounded-2xl bg-[#fdfbf6] px-7 py-8 text-center shadow-sm"
                >
                  <div className="relative z-10 mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#1a1a1a]/10 bg-[#fdfbf6]">
                    <Icon size={26} strokeWidth={1.5} className="text-[#3f6b4f]" />
                  </div>

                  <span className="mb-2 font-serif text-sm font-semibold text-[#c9bfa0]">
                    {step.number}
                  </span>

                  <h3 className="mb-2 font-serif text-lg font-semibold text-[#1a1a1a]">
                    {step.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed text-[#5a5a52]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;