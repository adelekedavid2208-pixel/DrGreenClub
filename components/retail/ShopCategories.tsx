"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Category {
  name: string;
  description: string;
  image: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    name: "Flower",
    description: "Hand-trimmed, small-batch strains sourced from growers we trust.",
    image: "/images/categories/flower.jpg",
    href: "/shop/flower",
  },
  {
    name: "Vaporizers",
    description: "Discreet, reliable devices built for everyday use.",
    image: "/images/categories/vaporizers.jpg",
    href: "/shop/vaporizers",
  },
  {
    name: "Glass",
    description: "Hand-blown pipes and water pieces, each one made to last.",
    image: "/images/categories/glass.jpg",
    href: "/shop/glass",
  },
  {
    name: "Accessories",
    description: "Grinders, trays, and tools that make the ritual easier.",
    image: "/images/categories/accessories.jpg",
    href: "/shop/accessories",
  },
  {
    name: "Apparel",
    description: "Club merch and everyday essentials, quietly branded.",
    image: "/images/categories/apparel.jpg",
    href: "/shop/apparel",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <Link
        href={category.href}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-2xl"
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </Link>

      <div className="mt-4">
        <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">
          {category.name}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#5a5a52]">
          {category.description}
        </p>
        <Link
          href={category.href}
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#3f6b4f] transition-colors hover:text-[#2f5b41]"
        >
          Shop Now
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

export function ShopCategories() {
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
            Shop by category.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopCategories;