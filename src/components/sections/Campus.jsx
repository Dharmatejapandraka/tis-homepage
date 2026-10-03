import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const images = [
  {
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1000&q=85",
    alt: "School campus",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "Students together",
  },
  {
    src: "https://luchouette.com/_p/acre/17412/images/pc/43fae2c8.jpg",
    alt: "Students walking on campus",
    
  },
];

export default function Campus() {
  return (
    <section id="campus" className="theme-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Life at TIS"
            title="A campus made for discovery."
            description="From classrooms and laboratories to sports and clubs, the campus is designed to make learning feel active and memorable."
          />
        </ScrollReveal>

        <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <ScrollReveal
              key={image.src}
              direction={index === 0 ? "left" : "right"}
              delay={index * 0.08}
              className={image.className}
            >
              <div className="group h-full overflow-hidden rounded-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}