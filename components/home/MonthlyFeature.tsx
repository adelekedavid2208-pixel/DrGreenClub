"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const INCLUDED_ITEMS: string[] = [
  "Signature hand-blown glass piece",
  "House-blend artisan rolling papers",
  "Embroidered club hoodie",
  "Limited-run brass cleaning tool",
  "Keepsake forest-green box",
];

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Target: midnight on the 1st of next month — when this month's box closes. */
function getNextResetDate(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
}

function getTimeRemaining(target: Date): TimeRemaining {
  const diff = Math.max(target.getTime() - Date.now(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#f4f1ea]/15 bg-[#f4f1ea]/[0.06] px-4 py-2.5 sm:px-5 sm:py-3">
      <span className="font-serif text-xl font-semibold tabular-nums text-[#f4f1ea] sm:text-2xl">
        {pad(value)}
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-[#f4f1ea]/50">
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const [targetDate] = useState<Date>(() => getNextResetDate());
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    setTimeRemaining(getTimeRemaining(targetDate));

    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid a server/client mismatch — render nothing until the first client tick.
  if (!timeRemaining) {
    return <div className="h-[62px] sm:h-[66px]" aria-hidden="true" />;
  }

  return (
    <div>
      <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#f4f1ea]/50">
        Box arrives in
      </p>
      <div className="flex items-center gap-2.5 sm:gap-3">
        <CountdownUnit value={timeRemaining.days} label="Days" />
        <CountdownUnit value={timeRemaining.hours} label="Hours" />
        <CountdownUnit value={timeRemaining.minutes} label="Min" />
        <CountdownUnit value={timeRemaining.seconds} label="Sec" />
      </div>
    </div>
  );
}

export function MonthlyFeature() {
  return (
    <section className="bg-[#fbf7ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0f2318]">
        <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]"
          >
            <Image
              src="/images/monthly-feature.jpg"
              alt="This month's featured DrGreenClub box contents"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <div className="px-8 py-12 sm:px-12 lg:px-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7fb894]"
            >
              This Month&rsquo;s Feature
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md font-serif text-3xl font-semibold leading-tight text-[#f4f1ea] sm:text-4xl lg:text-[42px]"
            >
              The{" "}
              <span className="italic text-[#e0a33e]">
                &ldquo;DrGreenClub&rdquo;
              </span>{" "}
              Edition.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-[#f4f1ea]/70"
            >
              A tribute to the ritual. Signature glass, house-blend papers,
              an embroidered hoodie, and a limited-run brass tool — packed
              together in our forest-green keepsake box.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-col gap-3"
            >
              {INCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check
                    size={15}
                    strokeWidth={2.25}
                    className="mt-0.5 shrink-0 text-[#7fb894]"
                  />
                  <span className="text-[#f4f1ea]/85">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Countdown />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#e0a33e] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#eab254]"
              >
                Become a Member
                <ArrowRight size={16} strokeWidth={2} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonthlyFeature;