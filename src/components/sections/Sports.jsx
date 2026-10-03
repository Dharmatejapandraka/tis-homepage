import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ScrollReveal from "../animation/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { sports } from "../../data/tisData";

/*
  Images are mapped separately from the sports array.
  This keeps tisData.js unchanged.
*/
const sportImages = {
  Archery:
    "https://api.schediohub.com/uploads/sports_photos/archery.jpg",

  Cycling:
    "https://media.gq-magazine.co.uk/photos/5d139ffe0de8e61f455cc644/4%3A3/w_1704%2Ch_1278%2Cc_limit/ChrisFroome-GQ-25Jul16_getty_b.jpg",

  Hockey:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Field%20hockey.jpg",


   Swimming:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Swimming%20competition%20%28black%20and%20white%29%2002.jpg",


  Taekwondo:
    "https://res.cloudinary.com/usopc-prod/image/upload/ar_1.5%2Cc_auto%2Cg_auto%2Cw_1335/q_auto/f_auto/v1/NGB%20Taekwondo/Content/USOPEN-2023-002",

  Football:
    "https://aws-br-images.s3.us-east-2.amazonaws.com/upload/iblock/e5d/e5d62fb2b273ad974b05f8bbe31b1595.jpg",

  "Horse Riding":
    "https://cdn.agroklub.com/upload/images/text/bodovanje-u-preponskom-jahanju.jpg",

  Squash:
    "https://media.diariolasamericas.com/p/6baf826be5a65e7197c47b4231cde715/adjuntos/216/imagenes/100/114/0100114477/855x0/smart/elias4bjpg.jpg",

  Volleyball:
    "https://conteudo.imguol.com.br/c/esporte/8c/2025/07/26/gabi-guimaraes-foi-um-dos-destaques-do-duelo-entre-brasil-e-japao-pela-semifinal-da-liga-das-nacoes-de-volei-feminino-1753557955376_v2_4x3.jpg",

  Basketball:
    "https://www.mainbasket.com/thumbs/extra-large/uploads/post/2026/04/17/rio%20disi.jpg",

  Cricket:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Cricket%20pic.jpg",

  "Lawn Tennis":
    "https://wtakoreaopen.com/_astro/461018648_1015150107070929_2026572688184594800_n_mprcdv_1MHyOq.jpeg",

  Badminton:
    "https://cdn.shopify.com/s/files/1/0065/5592/6572/files/Liu_Yang.jpg",

  "Table Tennis":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Table%20Tennis%2011.jpg",

  Shooting:
    "https://www.chinadailyhk.com/upload/main/image/2025/09/15/ca94f851e0360a6ca850446f5881321f.jpg",

  Chess:
    "https://cbin.b-cdn.net/img/-G/-Gowtham%20K%20K_Q67G3_1333x1000.jpeg",
};

export default function Sports() {
  const [activeSport, setActiveSport] = useState(0);

  const currentSport = sports[activeSport];
  const currentImage = sportImages[currentSport];

  return (
    <section
      id="sports"
      className="theme-bg px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <ScrollReveal>
          <SectionHeading
            eyebrow="Beyond the classroom"
            title="16 sports. One spirit of excellence."
            description="Sport at TIS is about discipline, teamwork, confidence and discovering the joy of movement."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">

          {/* FEATURED SPORT */}
          <ScrollReveal>
            <div
              data-cursor
              className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-black"
            >

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSport}
                  src={currentImage}
                  alt={`${currentSport} at TIS`}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* Sport information */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8 md:p-10">

                <div>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#dfc68f]">
                    Featured sport
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={currentSport}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="font-display text-4xl font-semibold text-white md:text-5xl"
                    >
                      {currentSport}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* Next button */}
                <button
                  type="button"
                  data-cursor
                  aria-label="Next sport"
                  onClick={() =>
                    setActiveSport(
                      (previous) => (previous + 1) % sports.length
                    )
                  }
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d5ad61] hover:bg-[#d5ad61]"
                >
                  <ArrowUpRight size={22} />
                </button>

              </div>
            </div>
          </ScrollReveal>

          {/* SPORTS LIST */}
          <ScrollReveal delay={0.1}>
            <div className="theme-surface rounded-[2rem] border border-[var(--line)] p-4 md:p-6">

              <div className="mb-4 px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Explore sports
                </p>
              </div>

              <div className="max-h-[500px] overflow-y-auto pr-1">

                {sports.map((sport, index) => {
                  const isActive = index === activeSport;

                  return (
                    <button
                      key={sport}
                      type="button"
                      data-cursor
                      onClick={() => setActiveSport(index)}
                      className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--navy)] text-white"
                          : "text-[var(--ink)] hover:bg-[var(--surface-soft)]"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <span
                          className={`text-[10px] font-bold tracking-[0.15em] ${
                            isActive
                              ? "text-[#d5ad61]"
                              : "text-[var(--muted)]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-semibold">
                          {sport}
                        </span>

                      </div>

                      <ArrowUpRight
                        size={17}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-[#d5ad61] opacity-100"
                            : "text-[var(--muted)] opacity-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        }`}
                      />

                    </button>
                  );
                })}

              </div>

              <div className="mt-4 border-t border-[var(--line)] px-3 pt-5">
                <p className="text-xs leading-5 text-[var(--muted)]">
                  Explore all 16 sporting disciplines available at TIS.
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}