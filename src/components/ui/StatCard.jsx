import { motion } from "framer-motion";

export default function StatCard({ value, suffix = "", label, dark = false }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border p-6 ${
        dark
          ? "border-white/10 bg-white/[0.04] text-white"
          : "border-[#172033]/10 bg-white text-[#172033]"
      }`}
    >
      <p className="text-3xl font-semibold tracking-tight">
        {value}
        <span className="text-[#c8a15a]">{suffix}</span>
      </p>
      <p className={`mt-2 text-xs uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-[#172033]/50"}`}>
        {label}
      </p>
    </motion.div>
  );
}