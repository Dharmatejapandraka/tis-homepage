import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigationLinks } from "../../data/tisData";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("tis-theme") === "dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", dark);
    localStorage.setItem("tis-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#0d1729]/92 shadow-xl backdrop-blur-xl" : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-sm font-bold">T</span>
          <span className="leading-none">
            <strong className="block text-sm tracking-[.28em]">TULAS</strong>
            <small className="mt-1 block text-[8px] tracking-[.3em] text-white/55">INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((item) => (
            <a key={item.label} href={item.href} data-cursor className="text-[13px] font-medium text-white/72 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <button type="button" data-cursor onClick={() => setDark(v => !v)} aria-label="Toggle colour theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#d5ad61] hover:bg-white/10 hover:text-[#e6cd98]">
            {dark ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
          <Button href="#admissions" variant="light">Apply Now</Button>
        </div>

        <button type="button" onClick={() => setOpen(v=>!v)} className="rounded-full border border-white/25 p-2.5 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#0d1729]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          {navigationLinks.map(item => (
            <a key={item.label} href={item.href} onClick={()=>setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
          <button type="button" onClick={()=>setDark(v=>!v)} className="mt-2 flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10">
            {dark ? <Sun size={16}/> : <Moon size={16}/>} {dark ? "Light theme" : "Dark theme"}
          </button>
          <a href="#admissions" onClick={()=>setOpen(false)} className="mt-2 block rounded-xl bg-[#bd9348] px-4 py-3 text-center text-sm font-semibold text-white">Apply Now</a>
        </div>
      )}
    </header>
  );
}