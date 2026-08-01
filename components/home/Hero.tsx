"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCheck, ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2318] px-6 pb-20 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f4f1ea]/20 px-4 py-1.5"
          >
            <PackageCheck size={14} className="text-[#f4f1ea]/70" strokeWidth={1.75} />
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#f4f1ea]/70">
              Discreet Shipping — Every Order
            </span>
          </motion.div>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-[42px] font-semibold leading-[1.08] text-[#f4f1ea] sm:text-[52px] lg:text-[58px]"
          >
            Curated
            <br />
            cannabis
            <br />
            essentials,
            <br />
            <span className="italic text-[#e0a33e]">delivered.</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#f4f1ea]/70"
          >
            A monthly ritual of premium glass, artisan papers, and exclusive
            DrGreenClub gear — worth over $100, yours for just $30.
          </motion.p>

          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/subscription"
              className="inline-flex items-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-transform hover:scale-[1.03]"
            >
              Join the Club
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#f4f1ea]/80 transition-opacity hover:opacity-70"
            >
              How it works
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </motion.div>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-[#0f2318] bg-[#3f6b4f]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#0f2318] bg-[#d8c9a3]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#0f2318] bg-[#f4f1ea]" />
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-[#e0a33e] text-[#e0a33e]"
                />
              ))}
            </div>
            <span className="text-[13px] font-medium text-[#f4f1ea]/70">
              4.9 <span className="text-[#f4f1ea]/40">/</span> 8,200+ members
            </span>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-product.jpg"
              alt="DrGreenClub curated box with glass pipe and accessories"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-4 top-4 rounded-full bg-[#f4f1ea] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#1a1a1a] shadow-lg">
            Ships in 24h
          </div>

          <div className="absolute -bottom-6 left-4 max-w-[220px] rounded-xl bg-[#f4f1ea] p-4 shadow-xl sm:left-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8a8672]">
              This Month
            </p>
            <p className="mt-1 font-serif text-[15px] font-semibold leading-snug text-[#1a1a1a]">
              The &ldquo;DrGreenClub&rdquo; Edition
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;