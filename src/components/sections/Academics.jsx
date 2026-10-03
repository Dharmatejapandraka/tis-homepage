import { BookOpen, FlaskConical, Monitor, Users } from "lucide-react";
import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { facilities } from "../../data/tisData";

const image =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85";

const icons = [BookOpen, Monitor, FlaskConical, Users];

export default function Academics() {
  return (
    <section id="academics" className="bg-[var(--navy)] px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={image}
                alt="Modern school building"
                className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <SectionHeading
              eyebrow="Academics"
              title="Learning built for curiosity."
              description="TIS combines academic learning with project-based, technology-enabled and experiential approaches."
              light
            />

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              {facilities.slice(0, 8).map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={item} className="border-t border-white/10 pt-4">
                    <Icon size={18} className="text-[#c8a15a]" />
                    <p className="mt-3 text-sm text-white/75">{item}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}