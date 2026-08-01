"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Category {
  title: string;
  badge: string;
  image: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Glass Pipes",
    badge: "Bestseller",
    image: "/images/categories/glass-pipes.jpg",
    href: "/shop/glass-pipes",
  },
  {
    title: "Rolling Trays",
    badge: "New In",
    image: "/images/categories/rolling-trays.jpg",
    href: "/shop/rolling-trays",
  },
  {
    title: "Apparel",
    badge: "Club Merch",
    image: "/images/categories/apparel.jpg",
    href: "/shop/apparel",
  },
  {
    title: "Cleaning",
    badge: "Essentials",
    image: "/images/categories/cleaning.jpg",
    href: "/shop/cleaning",
  },
  {
    title: "Vaporizers",
    badge: "Best Rated",
    image: "/images/categories/vaporizers.jpg",
    href: "/shop/vaporizers",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
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
    >
      <Link
        href={category.href}
        className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl"
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#f4f1ea] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#1a1a1a]">
          {category.badge}
        </span>

        <motion.div
          className="absolute inset-0"
          whileHover="hover"
        >
          <motion.div
            variants={{ hover: { scale: 1.08 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

          <motion.div
            variants={{ hover: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/10"
          />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-[#f4f1ea] sm:text-xl">
              {category.title}
            </h3>
            <motion.span
              variants={{ hover: { x: 4, opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#f4f1ea]"
            >
              <ArrowRight size={16} strokeWidth={2} />
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCollection() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3f6b4f]"
            >
              Dispensary
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl"
            >
              Shop the collection.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:block"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-70"
            >
              View all categories
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:hidden"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a]"
          >
            View all categories
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedCollection;