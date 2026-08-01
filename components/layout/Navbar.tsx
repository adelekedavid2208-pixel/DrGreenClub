"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Subscription", href: "/subscription" },
  { label: "Retail", href: "/retail" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const TICKER_ITEMS = [
  "CANCEL OR PAUSE ANYTIME",
  "MEMBERS-ONLY MONTHLY DROPS",
  "FREE U.S. DELIVERY OVER $75",
  "DISCREET SHIPPING",
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Announcement ticker */}
      <div className="overflow-hidden bg-[#0f2318] py-2">
        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-[#f4f1ea]/80"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-[#f4f1ea]/40" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main nav */}
      <div className="relative bg-[#fbf7ef] px-6 py-4 sm:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight sm:text-2xl"
          >
            <span className="text-[#2f5b41]">Dr</span>
            <span className="text-[#1a1a1a]">GreenClub</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#2b2b28] transition-colors hover:text-[#2f5b41]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons + mobile toggle */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              className="text-[#1a1a1a] transition-opacity hover:opacity-70"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden text-[#1a1a1a] transition-opacity hover:opacity-70 sm:inline-flex"
            >
              <User size={19} strokeWidth={1.75} />
            </button>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-[#1a1a1a] lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={22} strokeWidth={1.75} />
              ) : (
                <Menu size={22} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-[#e5e0d5] py-3 text-[15px] font-medium text-[#2b2b28] transition-colors hover:text-[#2f5b41]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-3 text-[15px] font-medium text-[#2b2b28]"
                >
                  <User size={17} strokeWidth={1.75} />
                  Account
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;