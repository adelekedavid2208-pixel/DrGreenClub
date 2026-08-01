"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function RetailHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2318] px-6 pb-20 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#7fb894]"
          >
            Retail
          </motion.p>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-[38px] font-semibold leading-[1.12] text-[#f4f1ea] sm:text-[48px] lg:text-[54px]"
          >
            Premium cannabis.{" "}
            <span className="italic text-[#e0a33e]">Delivered your way.</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#f4f1ea]/70"
          >
            Shop our full catalog of glass, vapes, apparel, and accessories —
            no subscription required. Same curation standard our members
            expect, available whenever you need it.
          </motion.p>

          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254]"
            >
              Shop Now
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#f4f1ea]/20 px-6 py-3 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#f4f1ea]/[0.06]"
            >
              Join Membership
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/retail-hero.jpg"
            alt="DrGreenClub retail products displayed in store"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default RetailHero;