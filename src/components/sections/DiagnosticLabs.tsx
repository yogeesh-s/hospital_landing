"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"
import { 
  Scan, 
  FlaskConical, 
  Dna, 
  Radiation, 
  Waves, 
  Droplets,
  ArrowRight,
  Plus,
  Zap,
  ShieldCheck,
  Microscope
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { labServicesData } from "@/lib/data"

function DiagnosticNode({ service, index, isActive, onClick }: { 
  service: typeof labServicesData[0], 
  index: number,
  isActive: boolean,
  onClick: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative cursor-pointer transition-all duration-500 w-full",
        isActive ? "z-30 scale-[1.02] lg:scale-105" : "z-10 hover:scale-105"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "group group/node relative flex items-center gap-4 p-4 md:p-5 rounded-[1.5rem] border transition-all duration-500",
        isActive 
          ? "bg-royal-cobalt border-royal-cobalt shadow-xl text-white" 
          : "bg-muted/50 backdrop-blur-md border-border text-foreground hover:border-royal-cobalt/50"
      )}>
        <div className="relative size-10 md:size-12 shrink-0">
           <div className={cn(
             "relative size-full rounded-xl flex items-center justify-center transition-colors",
             isActive ? "bg-white text-royal-cobalt" : "bg-royal-cobalt/10 text-royal-cobalt"
           )}>
             <service.icon size={20} className="md:size-6" aria-hidden="true" />
           </div>
        </div>

        <div className="flex flex-col">
           <h3 className="text-base md:text-lg font-bold tracking-tight">{service.title}</h3>
           <div className="flex items-center gap-2">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Operational Unit</span>
              <div className="size-1 bg-green-500 rounded-full animate-pulse" />
           </div>
        </div>

        {isActive && (
          <motion.div 
            layoutId="connector"
            className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 hidden lg:block w-10 h-[2px] bg-royal-cobalt shadow-[0_0_15px_rgba(37,99,235,1)] z-40"
          />
        )}
      </div>
    </motion.div>
  )
}

export function DiagnosticLabs({ dict }: { dict: any }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = labServicesData[activeIndex]

  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-24 gap-8 md:gap-10">
          <div className="flex flex-col items-start text-left gap-3 md:gap-6">
            <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
               <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
               Bio-Digital Intelligence
            </div>
            <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter text-foreground leading-none">
              Precision <span className="text-gradient-primary italic pr-4">Testing</span>
            </h2>
            <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
              {dict.sections.diagnostics.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-6 md:gap-10 p-4 md:p-6 glass rounded-[1.5rem] md:rounded-[2rem] border-border bg-muted/30 shadow-2xl w-full md:w-auto justify-center md:justify-start">
             <div className="flex items-center gap-3 md:gap-4">
                <ShieldCheck size={20} className="text-royal-cobalt md:size-6" aria-hidden="true" />
                <div className="flex flex-col">
                   <span className="font-bold text-foreground text-sm md:text-lg leading-none">ISO 15189</span>
                   <p className="text-[8px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Certified</p>
                </div>
             </div>
             <div className="w-px h-10 bg-border" />
             <div className="flex items-center gap-3 md:gap-4">
                <Zap size={20} className="text-electric-cyan animate-pulse md:size-6" aria-hidden="true" />
                <div className="flex flex-col">
                   <span className="font-bold text-foreground text-sm md:text-lg leading-none">2hr Turnaround</span>
                   <p className="text-[8px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Rapid Results</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 md:gap-12 items-start lg:items-center">
          <div className="flex flex-col gap-3 md:gap-4 order-2 lg:order-1">
            {labServicesData.map((service, i) => (
              <DiagnosticNode 
                key={i} 
                service={service} 
                index={i} 
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full perspective-[2000px] order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, rotateY: 20, x: 50 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: -20, x: -50 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative size-full glass rounded-[2rem] md:rounded-[4rem] border-border overflow-hidden shadow-2xl bg-muted/20"
              >
                <Image 
                  src={activeService.image}
                  alt={`High-precision equipment in our ${activeService.title} laboratory`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                  loading="lazy"
                  className="object-cover opacity-20 dark:opacity-70 scale-125 transition-transform duration-[5000ms]"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />

                <div className="absolute inset-0 p-5 sm:p-8 md:p-16 flex flex-col justify-between z-10 text-foreground">
                   <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
                      <div className="flex items-center gap-3 md:gap-6">
                         <div className="size-8 sm:size-12 md:size-16 rounded-lg md:rounded-[1.25rem] bg-royal-cobalt text-white flex items-center justify-center shadow-xl shadow-royal-cobalt/20 shrink-0">
                            <activeService.icon size={16} className="sm:size-6 md:size-8" aria-hidden="true" />
                         </div>
                         <div className="flex flex-col">
                            <h4 className="text-[6px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-royal-cobalt">Elite Medical Unit</h4>
                            <h3 className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-none">{activeService.title}</h3>
                         </div>
                      </div>
                      
                      <p className="text-[12px] sm:text-base md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                        {activeService.description}
                      </p>

                      <div className="flex flex-wrap md:grid md:grid-cols-2 gap-2 md:gap-4">
                         {activeService.features.map((feature, j) => (
                           <motion.div 
                             key={j}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.2 + j * 0.1 }}
                             className="px-2 py-1 md:p-5 rounded-lg md:rounded-[1.5rem] bg-background/60 dark:bg-slate-950/60 backdrop-blur-xl border border-border flex items-center gap-1.5 md:gap-3 hover:bg-royal-cobalt/10 transition-all group/feat"
                           >
                              <div className="size-4 md:size-8 rounded-md md:rounded-lg bg-royal-cobalt/10 text-royal-cobalt flex items-center justify-center group-hover/feat:bg-royal-cobalt group-hover/feat:text-white transition-colors shrink-0">
                                 <Plus size={8} className="md:size-4" aria-hidden="true" />
                              </div>
                              <span className="text-[7px] sm:text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-foreground">{feature}</span>
                           </motion.div>
                         ))}
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8 mt-6 pt-6 md:mt-10 md:pt-10 border-t border-border backdrop-blur-sm -mx-5 sm:-mx-8 md:-mx-16 px-5 sm:px-8 md:px-16 pb-4 sm:pb-6 md:pb-10 bg-background/20 mt-auto">
                      <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto">
                         <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="size-6 sm:size-10 md:size-12 rounded-full border-[1px] md:border-[3px] border-background bg-muted flex items-center justify-center shadow-lg">
                                 <Microscope size={10} className="sm:size-4 md:size-5 text-royal-cobalt" aria-hidden="true" />
                              </div>
                            ))}
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[7px] sm:text-[9px] md:text-[11px] font-black text-foreground uppercase tracking-widest leading-none mb-0.5">Active AI Synthesis</span>
                            <span className="text-[5px] sm:text-[7px] md:text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Cloud-Sync Realtime</span>
                         </div>
                      </div>
                      
                      <button className="w-full sm:w-auto h-10 sm:h-14 md:h-16 px-4 sm:px-8 md:px-10 rounded-lg sm:rounded-xl md:rounded-2xl bg-royal-cobalt text-white font-black text-[7px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-900 transition-all active:scale-95 whitespace-nowrap">
                         Secure Laboratory Slot
                      </button>
                   </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] md:size-[500px] border border-royal-cobalt/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
