import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../animation/ScrollReveal";

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-[#c8a15a] px-5 py-24 lg:px-8 lg:py-32">
      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#101a2d]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-[#101a2d]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#101a2d]/60">
              <Sparkles size={15} />
              Admissions Open 2027
            </div>

            <h2 className="mt-7 font-display text-5xl font-semibold leading-[.95] tracking-tight text-[#101a2d] md:text-7xl">
              Ready to begin the journey?
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#101a2d]/65">
              Discover a school experience where learning feels like an
              adventure and every student has room to explore.
            </p>

            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#101a2d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101a2d]"
            >
              Start an application
              <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}