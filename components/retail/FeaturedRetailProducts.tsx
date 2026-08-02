"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Sunset Sherbert 3.5g",
    category: "Flower",
    price: "$45",
    image: "/images/products/sunset-sherbert.jpg",
    href: "/products/sunset-sherbert",
  },
  {
    name: "Onyx Slim Vaporizer",
    category: "Vaporizers",
    price: "$149",
    image: "/images/products/onyx-slim-vaporizer.jpg",
    href: "/products/onyx-slim-vaporizer",
  },
  {
    name: "Aurora Beaker Bong",
    category: "Glass",
    price: "$118",
    image: "/images/products/aurora-beaker-bong.jpg",
    href: "/products/aurora-beaker-bong",
  },
  {
    name: "Forest Ceramic Grinder",
    category: "Accessories",
    price: "$55",
    image: "/images/products/forest-ceramic-grinder.jpg",
    href: "/products/forest-ceramic-grinder",
  },
  {
    name: "Embroidered Club Hoodie",
    category: "Apparel",
    price: "$78",
    image: "/images/products/club-hoodie.jpg",
    href: "/products/club-hoodie",
  },
  {
    name: "Sapphire One-Hitter",
    category: "Glass",
    price: "$39",
    image: "/images/products/sapphire-one-hitter.jpg",
    href: "/products/sapphire-one-hitter",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group flex flex-col"
    >
      <Link
        href={product.href}
        className="relative block aspect-square w-full overflow-hidden rounded-2xl bg-[#f0ead9]"
      >
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-3 left-3 right-3"
        >
          <span className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#f4f1ea] py-2.5 text-[13px] font-semibold text-[#1a1a1a] shadow-md">
            View Product
            <ArrowUpRight size={14} strokeWidth={2} />
          </span>
        </motion.div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8672]">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-[15px] font-semibold leading-snug text-[#1a1a1a]">
            {product.name}
          </h3>
        </div>
        <span className="shrink-0 pt-4 text-[15px] font-semibold text-[#1a1a1a]">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}

export function FeaturedRetailProducts() {
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
            Featured
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl"
          >
            Featured products.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRetailProducts;