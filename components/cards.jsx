"use client";

import { motion } from "framer-motion";

const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01 },
};

export function GlassCard({ children, className = "" }) {
  return (
    <motion.article
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`rounded-[2rem] border border-[#17171b]/10 bg-white/60 shadow-[0_24px_80px_rgba(23,23,27,0.12)] backdrop-blur ${className}`}
    >
      {children}
    </motion.article>
  );
}

export function MetricCard({ value, title, body }) {
  return (
    <GlassCard className="p-6">
      <div className="text-sm font-medium uppercase tracking-[0.28em] text-[#2c7a7b]">
        {value}
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#17171b]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#4d4a46]">{body}</p>
    </GlassCard>
  );
}

export function FeatureCard({ title, body, index }) {
  return (
    <GlassCard className="p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2c7a7b]/25 bg-[#2c7a7b]/10 text-sm font-semibold text-[#215f60]">
        {index}
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#17171b]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#4d4a46]">{body}</p>
    </GlassCard>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#17171b]/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#2c2b29] shadow-[0_12px_30px_rgba(23,23,27,0.08)]">
      {children}
    </span>
  );
}
