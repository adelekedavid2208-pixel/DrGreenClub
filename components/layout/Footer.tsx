"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "Subscription Box", href: "/subscription" },
      { label: "Glass", href: "/shop/glass" },
      { label: "Vapes", href: "/shop/vaporizers" },
      { label: "Apparel", href: "/shop/apparel" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Retail", href: "/retail" },
      { label: "Journal", href: "/journal" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Age Policy", href: "/age-policy" },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    // UI only — no backend/email integration wired up yet.
    setSubscribed(true);
  }

  return (
    <footer className="border-t border-[#f4f1ea]/10 bg-[#0f2318]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="font-serif text-xl font-semibold">
              <span className="text-[#f4f1ea]">Dr.</span>
              <span className="text-[#4f9a68]">GreenClub</span>
            </Link>

            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-[#f4f1ea]/60">
              Premium cannabis essentials, thoughtfully curated and delivered
              to your door every month.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex max-w-xs items-center gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={subscribed ? "You're subscribed!" : "your@email.com"}
                disabled={subscribed}
                className="w-full flex-1 rounded-full border border-[#f4f1ea]/15 bg-[#f4f1ea]/[0.06] px-4 py-2.5 text-[13px] text-[#f4f1ea] placeholder:text-[#f4f1ea]/40 outline-none transition-colors focus:border-[#7fb894]/50 disabled:opacity-60"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={subscribed}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e0a33e] px-4 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254] disabled:opacity-70"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={2} />
              </motion.button>
            </form>
          </motion.div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column, index) => (
              <motion.div
                key={column.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="text-sm font-semibold text-[#f4f1ea]">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-[#f4f1ea]/60 transition-colors hover:text-[#f4f1ea]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f4f1ea]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[12.5px] text-[#f4f1ea]/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>
            © {new Date().getFullYear()} DrGreenClub, LLC. 21+ only. Please
            consume responsibly.
          </p>
          <p>Higher standards, naturally.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;