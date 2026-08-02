"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Sunset Sherbert 3.5g",
    category: "Flower",
    description: "Hand-trimmed, small-batch flower with a smooth, balanced profile.",
    price: "$45",
    rating: 5,
    image: "/images/shop/sunset-sherbert.jpg",
    href: "/products/sunset-sherbert",
  },
  {
    name: "Onyx Slim Vaporizer",
    category: "Vaporizers",
    description: "A slim, discreet device built for reliable everyday use.",
    price: "$149",
    rating: 4,
    image: "/images/shop/onyx-slim-vaporizer.jpg",
    href: "/products/onyx-slim-vaporizer",
  },
  {
    name: "Aurora Beaker Bong",
    category: "Glass",
    description: "Hand-blown beaker piece with a wide, stable base.",
    price: "$118",
    rating: 5,
    image: "/images/shop/aurora-beaker-bong.jpg",
    href: "/products/aurora-beaker-bong",
  },
  {
    name: "Forest Ceramic Grinder",
    category: "Accessories",
    description: "Ceramic-coated grinder built for a smooth, consistent grind.",
    price: "$55",
    rating: 5,
    image: "/images/shop/forest-ceramic-grinder.jpg",
    href: "/products/forest-ceramic-grinder",
  },
  {
    name: "Embroidered Club Hoodie",
    category: "Apparel",
    description: "Heavyweight fleece hoodie with subtle embroidered detailing.",
    price: "$78",
    rating: 4,
    image: "/images/shop/club-hoodie.jpg",
    href: "/products/club-hoodie",
  },
  {
    name: "Sapphire One-Hitter",
    category: "Glass",
    description: "Compact glass one-hitter, easy to carry and easy to clean.",
    price: "$39",
    rating: 4,
    image: "/images/shop/sapphire-one-hitter.jpg",
    href: "/products/sapphire-one-hitter",
  },
  {
    name: "Cedar Rolling Tray",
    category: "Accessories",
    description: "Solid cedar tray with a raised edge to keep everything contained.",
    price: "$68",
    rating: 5,
    image: "/images/shop/cedar-rolling-tray.jpg",
    href: "/products/cedar-rolling-tray",
  },
  {
    name: "Heritage Hemp Papers",
    category: "Accessories",
    description: "Thin, slow-burning hemp papers in a house-blend pack.",
    price: "$14",
    rating: 4,
    image: "/images/shop/heritage-hemp-papers.jpg",
    href: "/products/heritage-hemp-papers",
  },
  {
    name: "Midnight Bloom 3.5g",
    category: "Flower",
    description: "A deep, aromatic strain sourced from a small-batch grower.",
    price: "$48",
    rating: 5,
    image: "/images/shop/midnight-bloom.jpg",
    href: "/products/midnight-bloom",
  },
  {
    name: "Cinder Portable Vaporizer",
    category: "Vaporizers",
    description: "Compact, pocket-friendly vaporizer with quick heat-up time.",
    price: "$129",
    rating: 4,
    image: "/images/shop/cinder-portable-vaporizer.jpg",
    href: "/products/cinder-portable-vaporizer",
  },
  {
    name: "Willow Glass Chillum",
    category: "Glass",
    description: "A simple, elegant glass chillum for everyday use.",
    price: "$28",
    rating: 5,
    image: "/images/shop/willow-glass-chillum.jpg",
    href: "/products/willow-glass-chillum",
  },
  {
    name: "Club Crewneck",
    category: "Apparel",
    description: "A relaxed-fit crewneck in a heavyweight cotton blend.",
    price: "$65",
    rating: 4,
    image: "/images/shop/club-crewneck.jpg",
    href: "/products/club-crewneck",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "fill-[#e0a33e] text-[#e0a33e]" : "fill-none text-[#d8d2c0]"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#fdfbf6] shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <Link
        href={product.href}
        className="relative block aspect-square w-full overflow-hidden bg-[#f0ead9]"
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#f4f1ea] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#1a1a1a] shadow-sm">
          {product.category}
        </span>

        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </motion.div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1.5">
          <StarRating rating={product.rating} />
        </div>

        <h3 className="font-serif text-[15px] font-semibold leading-snug text-[#1a1a1a]">
          {product.name}
        </h3>

        <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-[#5a5a52]">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[15px] font-semibold text-[#1a1a1a]">
            {product.price}
          </span>
          <Link
            href={product.href}
            className="inline-flex items-center rounded-full bg-[#0f2318] px-4 py-2 text-[12px] font-semibold text-[#f4f1ea] transition-colors hover:bg-[#173321]"
          >
            View Product
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ShopGrid() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-16 sm:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </motion.div>
    </section>
  );
}

export default ShopGrid;