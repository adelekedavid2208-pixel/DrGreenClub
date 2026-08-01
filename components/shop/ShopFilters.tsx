"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const FILTERS = ["All", "Flower", "Vaporizers", "Glass", "Accessories", "Apparel"] as const;

type Filter = (typeof FILTERS)[number];

export function ShopFilters() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-[#1a1a1a]/8 bg-[#fbf7ef] px-6 py-5 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Filter pills */}
        <div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#0f2318] text-[#f4f1ea]"
                    : "text-[#5a5a52] hover:bg-[#1a1a1a]/[0.05] hover:text-[#1a1a1a]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full max-w-xs lg:w-64">
          <Search
            size={16}
            strokeWidth={2}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8672]"
          />
          <input
            type="text"
            placeholder="Search products"
            className="w-full rounded-full border border-[#1a1a1a]/10 bg-[#fdfbf6] py-2.5 pl-10 pr-4 text-[13px] text-[#1a1a1a] placeholder:text-[#8a8672] outline-none transition-colors focus:border-[#3f6b4f]/40"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ShopFilters;