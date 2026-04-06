"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";

export default function AnimatedPrice() {
  const price = useMotionValue(0);
  const rounded = useTransform(price, (v) =>
    Math.round(v).toLocaleString("id-ID"),
  );

  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);

    animate(price, 5450000, {
      duration: 1.8,
      ease: "easeOut",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={start}
      className="relative inline-block mt-12"
    >
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute -inset-3 rounded-3xl bg-primary-green/30 blur-xl"
      />

      <div className="relative px-12 py-6 rounded-2xl bg-primary-green text-white shadow-xl">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-blue text-xs font-semibold">
          Batch 1
        </div>

        <p className="text-sm opacity-90">Harga Spesial</p>

        <div className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-wide">
          Rp <motion.span>{rounded}</motion.span>
        </div>

        <p className="mt-1 text-xs opacity-90">per unit (All-in Package)</p>
      </div>
    </motion.div>
  );
}
