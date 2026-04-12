"use client"

import { motion } from "motion/react"
import { Quote, PlayCircle, Star } from "lucide-react"
import Image from "next/image"

import { testimonials } from "@/lib/data"

export function PatientStories({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
        <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
           <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
           Patient Voices
        </div>
        <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
          Patient <span className="text-gradient-primary italic pr-4">Stories</span>
        </h2>
        <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
          {dict.sections.testimonials.subtitle}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 md:gap-6 p-5 md:p-8 glass rounded-[2rem] md:rounded-[3.5rem] border-white/10 shadow-xl"
          >
            <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-muted group">
               <Image 
                 src={t.image}
                 alt={`Patient story video thumbnail for ${t.name}`}
                 fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                 loading="lazy"
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-linear-to-br from-royal-cobalt/40 to-electric-cyan/40 mix-blend-multiply opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="size-8 md:size-12 text-white group-hover:scale-110 transition-transform cursor-pointer relative z-10" strokeWidth={1.5} aria-hidden="true" />
               </div>
               <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 rounded-md md:rounded-lg bg-black/40 backdrop-blur-md text-[7px] md:text-[10px] text-white font-bold uppercase tracking-wider z-10">
                  Video Story
               </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="size-3 md:size-3.5 text-royal-cobalt" fill="var(--color-royal-cobalt)" aria-hidden="true" />
                ))}
              </div>
              <div className="relative">
                <Quote className="size-4 md:size-6 absolute -top-1 -left-3 md:-top-2 md:-left-4 text-royal-cobalt/10 -z-10" aria-hidden="true" />
                <p className="text-[13px] md:text-base text-muted-foreground leading-relaxed italic">
                  "{t.story}"
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base md:text-lg tracking-tight">{t.name}</h4>
                <p className="text-[8px] md:text-xs text-royal-cobalt font-bold tracking-widest uppercase">{t.department}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
