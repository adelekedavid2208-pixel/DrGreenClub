"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Category {
  title: string;
  description: string;
  image: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Premium Flower",
    description:
      "Small-batch strains sourced from growers vetted for consistency and quality.",
    image: "/images/wholesale/premium-flower.jpg",
    href: "/wholesale/categories/premium-flower",
  },
  {
    title: "Pre-Rolls",
    description:
      "Ready-to-shelf pre-rolls built for retail turnover and consistent quality control.",
    image: "/images/wholesale/pre-rolls.jpg",
    href: "/wholesale/categories/pre-rolls",
  },
  {
    title: "Vaporizers",
    description:
      "A curated device lineup spanning entry-level to premium price points.",
    image: "/images/wholesale/vaporizers.jpg",
    href: "/wholesale/categories/vaporizers",
  },
  {
    title: "Concentrates",
    description:
      "A focused concentrate selection chosen for reliability and shelf appeal.",
    image: "/images/wholesale/concentrates.jpg",
    href: "/wholesale/categories/concentrates",
  },
  {
    title: "Accessories",
    description:
      "Grinders, trays, and glass — practical additions that round out any order.",
    image: "/images/wholesale/accessories.jpg",
    href: "/wholesale/categories/accessories",
  },
  {
    title: "Retail Merchandise",
    description:
      "Branded and unbranded merchandise options for stores building their own identity.",
    image: "/images/wholesale/retail-merchandise.jpg",
    href: "/wholesale/categories/retail-merchandise",
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

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      custom={index * 0.08}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#fdfbf6] shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <Link
        href={category.href}
        className="relative block aspect-[16/10] w-full overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">
          {category.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#5a5a52]">
          {category.description}
        </p>
        <Link
          href={category.href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#3f6b4f] transition-colors hover:text-[#2f5b41]"
        >
          Learn More
          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export function WholesaleCategories() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
          >
            Categories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl"
          >
            Wholesale categories.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WholesaleCategories;