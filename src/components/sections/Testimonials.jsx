import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/tisData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const next = () => {
    setIndex(
      (current) =>
        (current + 1) % testimonials.length
    );
  };

  const testimonial = testimonials[index];

  return (
    <section className="theme-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Voices of TIS"
            title="A community that grows together."
            description="The TIS experience is shaped by students, parents and educators who share a common commitment to growth."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[280px_1fr]">
          <ScrollReveal direction="left">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)] text-white">
                  <Quote size={28} />
                </div>

                <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
                  Real experiences are an important part of understanding
                  the culture of a school.
                </p>
              </div>

              <div className="mt-10 flex gap-2">
                <button
                  type="button"
                  data-cursor
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  data-cursor
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] p-8 md:p-12 lg:p-16">
              <span className="absolute right-8 top-4 font-display text-[9rem] leading-none text-[var(--gold)]/10">
                ”
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative z-10"
                >
                  <p className="max-w-4xl font-display text-3xl leading-tight text-[var(--ink)] md:text-5xl">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--gold)]" />

                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 right-8 flex gap-1">
                {testimonials.map((item, itemIndex) => (
                  <button
                    key={item.role}
                    type="button"
                    aria-label={`Go to testimonial ${itemIndex + 1}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`h-1 rounded-full transition-all ${
                      itemIndex === index
                        ? "w-8 bg-[var(--gold)]"
                        : "w-2 bg-[var(--ink)]/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}