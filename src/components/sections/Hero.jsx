import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { stats } from "../../data/tisData";

const heroImage = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2400&q=90";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-[#0d1729] lg:min-h-screen">
      <motion.img src={heroImage} alt="School campus" className="absolute inset-0 h-full w-full object-cover"
        initial={{scale:1.08}} animate={{scale:1}} transition={{duration:1.8,ease:"easeOut"}}/>
      <div className="absolute inset-0 bg-[#0d1729]/48"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1729]/85 via-[#0d1729]/40 to-transparent"/>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d1729] to-transparent"/>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-5 pb-9 pt-32 lg:min-h-screen lg:px-10 lg:pb-12">
        <div className="max-w-5xl">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.15}}
            className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.32em] text-[#e8d7ad]">
            <span className="h-px w-10 bg-[#bd9348]"/> The Modern Gurukul
          </motion.div>

          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.28}}
            className="text-balance max-w-5xl font-display text-[3.3rem] font-medium leading-[.94] text-white sm:text-6xl lg:text-[7.2rem]">
            Where curiosity becomes <span className="text-[#e8d7ad]">character.</span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.48}}
            className="mt-7 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-lg">
            A contemporary learning environment where academic excellence,
            experiences and values come together.
          </motion.p>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.64}} className="mt-8 flex flex-wrap gap-3">
            <a href="#about" data-cursor className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0d1729] transition hover:bg-[#bd9348] hover:text-white">
              Explore TIS <ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </a>
            <a href="#admissions" data-cursor className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Admissions 2027
            </a>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.85}}
          className="mt-14 grid grid-cols-2 border-t border-white/15 pt-5 md:grid-cols-4">
          {stats.map((item,index)=>(
            <div key={item.label} className={`py-2 ${index>0 ? "border-l border-white/10 pl-5 md:pl-7" : ""}`}>
              <p className="text-2xl font-semibold text-white lg:text-3xl">{item.value}<span className="text-[#bd9348]">{item.suffix}</span></p>
              <p className="mt-1 text-[9px] uppercase tracking-[.2em] text-white/42">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/40 md:flex">
          <ArrowDown size={14}/> Scroll to explore
        </div>
      </div>
    </section>
  );
}