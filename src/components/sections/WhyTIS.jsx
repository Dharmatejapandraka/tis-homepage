import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { values } from "../../data/tisData";

export default function WhyTIS() {
  return (
    <section className="theme-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why TIS"
            title="Education that develops the whole person."
            description="Academic learning is only one part of the journey. Students are encouraged to explore, participate, create and lead."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {values.map((item, index) => (
            <ScrollReveal
              key={item.number}
              delay={index * 0.08}
            >
              <article
                data-cursor
                className="theme-card group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-[var(--navy)] hover:shadow-2xl md:p-10"
              >
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full border border-[var(--line)] transition duration-500 group-hover:scale-150 group-hover:border-white/10" />

                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] transition duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--ink)] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </span>
                </div>

                <div className="relative z-10 mt-20">
                  <h3 className="text-2xl font-semibold text-[var(--ink)] transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] transition group-hover:text-white/65">
                    {item.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}