"use client";

import { motion } from "framer-motion";

const defaultViewport = { once: true, amount: 0.2 };

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...defaultViewport, amount }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function GlowOrb({ className }) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{
        opacity: [0.35, 0.7, 0.4],
        scale: [1, 1.08, 0.98],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}
