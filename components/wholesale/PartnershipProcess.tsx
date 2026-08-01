"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Submit Inquiry",
    description:
      "Tell us a bit about your business and what you're looking to carry through a short inquiry form.",
  },
  {
    number: "02",
    title: "Business Verification",
    description:
      "Our team reviews your submission and follows up to confirm a few basic business details.",
  },
  {
    number: "03",
    title: "Product Consultation",
    description:
      "We walk through catalog options together and help shape an order that fits your store.",
  },
  {
    number: "04",
    title: "Wholesale Account Activated",
    description:
      "Once everything's confirmed, your account is set up and you're ready to place your first order.",
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

export function PartnershipProcess() {
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
            How It Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl"
          >
            Partnership, made{" "}
            <span className="italic text-[#3f6b4f]">straightforward.</span>
          </motion.h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-9 hidden h-px bg-[#1a1a1a]/10 lg:block"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="relative flex flex-col items-center rounded-2xl bg-[#fdfbf6] px-7 py-8 text-center shadow-sm"
              >
                <div className="relative z-10 mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#1a1a1a]/10 bg-[#fdfbf6]">
                  <span className="font-serif text-lg font-semibold text-[#3f6b4f]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 font-serif text-lg font-semibold text-[#1a1a1a]">
                  {step.title}
                </h3>

                <p className="text-[13px] leading-relaxed text-[#5a5a52]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipProcess;