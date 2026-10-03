import { motion } from "framer-motion";

const offsets = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}