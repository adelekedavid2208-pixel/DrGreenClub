"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGES = [1, 2, 3, 4] as const;

export function ShopPagination() {
  const [activePage, setActivePage] = useState<number>(1);

  const isFirstPage = activePage === PAGES[0];
  const isLastPage = activePage === PAGES[PAGES.length - 1];

  function goToPrevious() {
    setActivePage((current) => Math.max(current - 1, PAGES[0]));
  }

  function goToNext() {
    setActivePage((current) => Math.min(current + 1, PAGES[PAGES.length - 1]));
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Shop pagination"
      className="flex items-center justify-center gap-2 px-6 py-14 sm:gap-3"
    >
      <button
        type="button"
        onClick={goToPrevious}
        disabled={isFirstPage}
        aria-label="Previous page"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1a1a]/10 text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a]/[0.05] disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </button>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {PAGES.map((page) => {
          const isActive = page === activePage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(page)}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#0f2318] text-[#f4f1ea]"
                  : "text-[#5a5a52] hover:bg-[#1a1a1a]/[0.05] hover:text-[#1a1a1a]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goToNext}
        disabled={isLastPage}
        aria-label="Next page"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1a1a]/10 text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a]/[0.05] disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronRight size={16} strokeWidth={2} />
      </button>
    </motion.nav>
  );
}

export default ShopPagination;