"use client"

import { motion } from "motion/react"
import { Target, Heart } from "lucide-react"
import Image from "next/image"
import { hospitalMilestones } from "@/lib/data"

export function AboutHospital({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
              <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                 <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
                 Hospital Identity
              </div>
              <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
                {dict.sections.about.title}
              </h2>
              <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
                {dict.sections.about.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-px before:bg-muted">
               {hospitalMilestones.map((milestone, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="flex gap-6 md:gap-10 relative group"
                 >
                    <div className="size-8 rounded-full bg-white dark:bg-slate-900 border-2 border-royal-cobalt flex items-center justify-center z-10 shrink-0 group-hover:bg-royal-cobalt group-hover:text-white transition-colors">
                       <div className="size-2 rounded-full bg-royal-cobalt group-hover:bg-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                       <span className="text-royal-cobalt font-black text-[10px] md:text-sm tracking-widest">{milestone.year}</span>
                       <h3 className="text-base md:text-xl font-bold leading-tight">{milestone.title}</h3>
                       <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-12">
            <div className="relative mt-8 lg:mt-0">
               <div className="relative aspect-[4/3] sm:aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[6px] md:border-[12px] border-white/5 shadow-2xl">
                  <Image 
                    src="/assets/images/sections/about-lobby.webp"
                    alt="Elite Hospital Visionary Lobby and Patient Care Center"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCI JahhKCYrKysyJSMoKywoMCwsKC80Jj4/Pj9BQmdBYHAdHw8BAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCI JahhKCYrKysyJSMoKywoMCwsKC80Jj4/Pj9BQmdBYHAdHw//AABEIACgAGAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAgEABAf/xAAeEAEBAAICAwEBAAAAAAAAAAACAAEDBBEFEiETMv/EABgBAQEBAQEAAAAAAAAAAAAAAgEAAwT/xAAgEQEBAAIBBQEBAQAAAAAAAAAAAQIRIQMSMUEiUWGB/9oADAMBAAIRAxEAPwD5oA0kCoAAAAAgDKgIoAkygLygLqgyoAAMqAAAAAAA//2Q=="
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-royal-cobalt/40 via-transparent to-transparent" />
               </div>

               {/* Mission Card - Desktop Floating */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute -top-10 -right-10 glass p-8 rounded-[3rem] shadow-2xl border-white/20 max-w-[240px] hidden lg:block"
               >
                  <div className="flex flex-col gap-4">
                     <div className="size-12 rounded-2xl bg-royal-cobalt text-white flex items-center justify-center">
                        <Target size={24} aria-hidden="true" />
                     </div>
                     <div className="font-bold text-lg">Our Mission</div>
                     <p className="text-xs text-muted-foreground leading-relaxed">Providing zero-compromise clinical excellence through AI and human compassion.</p>
                  </div>
               </motion.div>

               {/* Patient Card - Desktop Floating */}
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute -bottom-10 -left-10 glass p-8 rounded-[3rem] shadow-2xl border-white/20 max-w-[240px] hidden lg:block"
               >
                  <div className="flex flex-col gap-4">
                     <div className="size-12 rounded-2xl bg-electric-cyan/20 text-electric-cyan-700 flex items-center justify-center">
                        <Heart size={24} aria-hidden="true" />
                     </div>
                     <div className="font-bold text-lg">Patient First</div>
                     <p className="text-xs text-muted-foreground leading-relaxed">Healing is a journey we walk alongside our patients, every step of the way.</p>
                  </div>
               </motion.div>
            </div>

            {/* Mobile Mission/Patient First Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 mt-4">
               <div className="glass p-6 rounded-[2rem] shadow-xl border-white/10 flex flex-col gap-3">
                  <div className="size-10 rounded-xl bg-royal-cobalt text-white flex items-center justify-center">
                     <Target size={20} aria-hidden="true" />
                  </div>
                  <div className="font-bold text-base md:text-lg">Our Mission</div>
                  <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">Providing zero-compromise clinical excellence through AI and human compassion.</p>
               </div>
               <div className="glass p-6 rounded-[2rem] shadow-xl border-white/10 flex flex-col gap-3">
                  <div className="size-10 rounded-xl bg-electric-cyan/20 text-electric-cyan-700 flex items-center justify-center">
                     <Heart size={20} aria-hidden="true" />
                  </div>
                  <div className="font-bold text-base md:text-lg">Patient First</div>
                  <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">Healing is a journey we walk alongside our patients, every step of the way.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
