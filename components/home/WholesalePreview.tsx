"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Building2, Truck, Users, TrendingUp } from "lucide-react";

interface WholesaleStat {
  label: string;
  value: string;
  icon: typeof Building2;
}

const STATS: WholesaleStat[] = [
  { label: "Retail Partners", value: "500+", icon: Building2 },
  { label: "States Served", value: "24", icon: Truck },
  { label: "Reorder Rate", value: "98%", icon: TrendingUp },
  { label: "Dedicated Account Team", value: "24/7", icon: Users },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WholesalePreview() {
  return (
    <section className="bg-[#0f2318] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7fb894]"
            >
              Wholesale
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg font-serif text-4xl font-semibold leading-tight text-[#f4f1ea] sm:text-[42px]"
            >
              Wholesale partnerships,{" "}
              <span className="italic text-[#e0a33e]">built to scale.</span>
            </motion.h2>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-[15px] leading-relaxed text-[#f4f1ea]/70"
          >
            We supply dispensaries, retailers, and distribution partners with
            the same premium standard our members expect — backed by
            reliable fulfillment, transparent pricing, and a dedicated
            partnerships team.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="rounded-2xl border border-[#f4f1ea]/10 bg-[#f4f1ea]/[0.04] p-6 transition-colors hover:bg-[#f4f1ea]/[0.07]"
              >
                <Icon size={18} strokeWidth={1.75} className="mb-4 text-[#7fb894]" />
                <p className="font-serif text-3xl font-bold text-[#f4f1ea]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-[#f4f1ea]/60">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-start gap-6 border-t border-[#f4f1ea]/10 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-[#f4f1ea]/60">
            Minimum order quantities, tiered pricing, and onboarding support
            available for qualified businesses.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254]"
          >
            Become a Wholesale Partner
            <ArrowRight size={16} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default WholesalePreview;