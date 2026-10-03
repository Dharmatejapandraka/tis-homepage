import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-[#c8a15a]"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}