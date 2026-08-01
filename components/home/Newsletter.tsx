"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    // UI only — no backend/email integration wired up yet.
    setError(null);
    setStatus("submitted");
  }

  return (
    <section className="bg-[#0f2318] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#f4f1ea]/15"
        >
          <Mail size={18} strokeWidth={1.5} className="text-[#7fb894]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-serif text-3xl font-semibold leading-tight text-[#f4f1ea] sm:text-4xl"
        >
          Stay in the{" "}
          <span className="italic text-[#e0a33e]">Know.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#f4f1ea]/70"
        >
          New drops, member-only offers, and the occasional note from the
          team — no spam, unsubscribe whenever you like.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          {status === "submitted" ? (
            <div className="flex items-center justify-center gap-2 rounded-full border border-[#7fb894]/30 bg-[#f4f1ea]/[0.05] px-6 py-3 text-sm font-medium text-[#f4f1ea]">
              <Check size={16} strokeWidth={2} className="text-[#7fb894]" />
              You&rsquo;re on the list — thanks for joining.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-[#f4f1ea]/15 bg-[#f4f1ea]/[0.06] px-5 py-3 text-sm text-[#f4f1ea] placeholder:text-[#f4f1ea]/40 outline-none transition-colors focus:border-[#7fb894]/50"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254]"
              >
                Subscribe
                <ArrowRight size={16} strokeWidth={2} />
              </motion.button>
            </form>
          )}

          {error && (
            <p className="mt-2.5 text-xs text-[#e0a33e]">{error}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;