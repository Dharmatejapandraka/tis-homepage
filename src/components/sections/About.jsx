import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const image =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85";

export default function About() {
  return (
    <section id="about" className="theme-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="About TIS"
              title="A school where potential has room to grow."
              description="Tula's International School brings academics, music, art, drama, sports and experiences together to create a learning journey that goes beyond lessons."
            />

            <Button href="#academics" className="mt-8">
              Discover our approach
            </Button>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.12}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem]">
                <img
                  src={image}
                  alt="Students learning in a classroom"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-5 -left-4 max-w-[250px] rounded-2xl bg-[#0d1729] p-6 text-white shadow-2xl sm:-left-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#e4cf9f]">
                  Our idea
                </p>
                <p className="mt-3 font-display text-xl leading-snug">
                  Modern learning. Traditional values.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}