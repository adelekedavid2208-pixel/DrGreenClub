"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function RetailPreview() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:order-none"
        >
          <Image
            src="/images/retail-lifestyle.jpg"
            alt="Premium cannabis products displayed in a retail setting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="order-2 lg:order-none">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            Retail
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg font-serif text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-[42px]"
          >
            Premium Cannabis for{" "}
            <span className="italic text-[#3f6b4f]">Everyday Consumers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5a5a52]"
          >
            Thoughtfully sourced glass, papers, and accessories — sold
            individually, no subscription required. Same premium standard,
            available whenever you need it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0f2318] px-6 py-3 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#173321]"
            >
              Explore Retail
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RetailPreview;