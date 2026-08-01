"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SubscriptionCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f2318] px-6 py-20 sm:px-10 lg:px-16">
      {/* Decorative gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,163,62,0.08),_transparent_55%)]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#7fb894]"
        >
          Membership
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-serif text-3xl font-semibold leading-tight text-[#f4f1ea] sm:text-4xl lg:text-[42px]"
        >
          Ready to make it{" "}
          <span className="italic text-[#e0a33e]">a ritual?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#f4f1ea]/70"
        >
          Join a community that treats every box as a curated experience, not
          just a delivery. Compare plans to find the cadence that fits your
          routine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254]"
          >
            Become a Member
            <ArrowRight size={16} strokeWidth={2} />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#f4f1ea]/20 px-6 py-3 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#f4f1ea]/[0.06]"
          >
            Compare Plans
            <ArrowRight size={16} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default SubscriptionCTA;