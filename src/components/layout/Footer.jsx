import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080e19] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.3em]">TULAS</p>
            <p className="mt-1 text-[9px] tracking-[0.3em] text-white/45">
              INTERNATIONAL SCHOOL
            </p>
            <h3 className="mt-8 max-w-sm font-display text-3xl leading-tight">
              The Modern Gurukul.
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              A contemporary learning environment where curiosity, creativity
              and character can grow together.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e4cf9f]">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#academics" className="hover:text-white">Academics</a>
              <a href="#sports" className="hover:text-white">Sports</a>
              <a href="#campus" className="hover:text-white">Campus</a>
              <a href="#admissions" className="hover:text-white">Admissions</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e4cf9f]">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/55">
              <p className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#c8a15a]" />
                Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun
              </p>
              <p className="flex gap-3">
                <Phone size={17} className="shrink-0 text-[#c8a15a]" />
                +91-9837983791
              </p>
              <p className="flex gap-3">
                <Mail size={17} className="shrink-0 text-[#c8a15a]" />
                info@tis.edu.in
              </p>
            </div>
          </div>

          <a
            href="#admissions"
            className="group flex min-h-40 flex-col justify-between rounded-2xl bg-[#c8a15a] p-6 text-[#101a2d] transition hover:-translate-y-1"
          >
            <span className="flex justify-between text-xs font-bold uppercase tracking-[0.2em]">
              Admissions Open
              <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
            <span className="font-display text-2xl">
              Begin the journey.
            </span>
          </a>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/35">
          © 2026 Tula's International School. Homepage redesign concept.
        </div>
      </div>
    </footer>
  );
}