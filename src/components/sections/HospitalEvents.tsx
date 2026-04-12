"use client"

import { motion } from "motion/react"
import { Calendar, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { hospitalEvents } from "@/lib/data"

export function HospitalEvents({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 bg-muted/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-24 gap-6 md:gap-8">
          <div className="flex flex-col items-start text-left gap-3 md:gap-6">
            <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
               <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
               Latest Updates
            </div>
            <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
              Events & <span className="text-gradient-primary italic pr-4">Summits</span>
            </h2>
            <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
              {dict.sections.events.subtitle}
            </p>
          </div>
          <button className="h-14 md:h-16 px-8 md:px-10 rounded-xl md:rounded-2xl border border-royal-cobalt text-royal-cobalt font-bold text-base md:text-lg hover:bg-royal-cobalt hover:text-white transition-all whitespace-nowrap w-full md:w-auto">
            View All Events
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {hospitalEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
            >
              <Image 
                src={event.image}
                alt={`Cover image for event: ${event.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                loading="lazy"
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-white">
                 <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex items-center gap-4">
                       <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-royal-cobalt text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                          {event.category}
                       </div>
                       <div className="flex items-center gap-2 text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          <Calendar size={12} className="md:size-3.5 text-electric-cyan" aria-hidden="true" />
                          {event.date}
                       </div>
                    </div>

                    <div className="flex items-end justify-between gap-4 md:gap-8">
                       <h3 className="text-2xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg group-hover:text-electric-cyan transition-colors">
                          {event.title}
                       </h3>
                       <button 
                         aria-label={`View details for ${event.title}`}
                         className="size-12 md:size-16 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:bg-royal-cobalt group-hover:text-white transition-all shadow-2xl shrink-0"
                       >
                          <ArrowUpRight size={20} className="md:size-8" aria-hidden="true" />
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
