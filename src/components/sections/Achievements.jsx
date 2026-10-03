import { motion } from "framer-motion";
import ScrollReveal from "../animation/ScrollReveal";
import StatCard from "../ui/StatCard";
import { stats } from "../../data/tisData";

export default function Achievements() {
  return (
    <section className="bg-[var(--navy)] px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e4cf9f]">
              TIS at a glance
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              The numbers tell part of the story.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
              A snapshot of the environment, opportunities and support available
              to students.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>
              <StatCard {...stat} dark />
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 h-px origin-left bg-white/10"
        />
      </div>
    </section>
  );
}