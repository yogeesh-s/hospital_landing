"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Heart, Brain, Activity, Droplets, Baby, Eye, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface BodyPart {
  id: string
  name: string
  icon: any
  description: string
  image: string
  x: string
  y: string
}

const bodyParts: BodyPart[] = [
  { 
    id: "brain", 
    name: "Neurology", 
    icon: Brain, 
    description: "Advanced care for brain and nervous system disorders.", 
    image: "/assets/images/departments/neurology.jpeg",
    x: "50%", 
    y: "15%" 
  },
  { 
    id: "eyes", 
    name: "Ophthalmology", 
    icon: Eye, 
    description: "Leading-edge vision care and ophthalmic surgery.", 
    image: "/assets/images/departments/ophthalmology.jpeg",
    x: "48%", 
    y: "18%" 
  },
  { 
    id: "lungs", 
    name: "Pulmonology", 
    icon: Activity, 
    description: "Specialized care for respiratory health and lung diseases.", 
    image: "/assets/images/gallery/patient-room.jpeg",
    x: "55%", 
    y: "35%" 
  },
  { 
    id: "heart", 
    name: "Cardiology", 
    icon: Heart, 
    description: "Expert diagnosis and treatment of cardiovascular conditions.", 
    image: "/assets/images/departments/cardiology.jpeg",
    x: "45%", 
    y: "35%" 
  },
  { 
    id: "stomach", 
    name: "Gastroenterology", 
    icon: Droplets, 
    description: "Comprehensive digestive health and organ care focusing on minimally invasive diagnostics.", 
    image: "/assets/images/sections/about-lobby.jpg",
    x: "50%", 
    y: "48%" 
  },
  { 
    id: "maternity", 
    name: "Maternity", 
    icon: Baby, 
    description: "Full-spectrum care for mothers and newborns in a supportive environment.", 
    image: "/assets/images/departments/pediatrics.jpeg",
    x: "50%", 
    y: "65%" 
  },
]

export function InteractiveBodyMap({ dict }: { dict: any }) {
  const [activePart, setActivePart] = useState<BodyPart>(bodyParts[0])

  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Precision Mapping
          </div>
          <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
            Anatomical <span className="text-gradient-primary italic pr-4">Intelligence</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.body_map.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_550px] gap-8 md:gap-12 items-center min-h-auto lg:min-h-[850px]">
          
          <div className="relative flex justify-center h-[350px] sm:h-[450px] md:h-[750px] w-full max-w-[600px] mx-auto">
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-[0_0_50px_rgba(37,99,235,0.15)] group/map border border-white/5">
              <Image 
                src="/assets/images/sections/diagnostics-lab.avif"
                alt="Realistic Human Anatomy 3D"
                fill
                className="object-cover opacity-70 mix-blend-screen transition-transform duration-1000 group-hover/map:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-slate-900/20 to-slate-900" />

              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-royal-cobalt shadow-[0_0_20px_rgba(37,99,235,1)] z-10 pointer-events-none"
              />
              
              <div className="absolute inset-0 z-20">
                {bodyParts.map((part) => (
                  <button
                    key={part.id}
                    className={cn(
                      "absolute group -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500",
                      activePart.id === part.id ? "scale-125 md:scale-150" : "hover:scale-125"
                    )}
                    style={{ left: part.x, top: part.y }}
                    onClick={() => setActivePart(part)}
                    onMouseEnter={() => setActivePart(part)}
                  >
                    {/* Larger hit area for mobile */}
                    <div className="absolute size-10 md:size-12 rounded-full -translate-x-0 -translate-y-0 z-0" />
                    
                    <div className={cn(
                      "absolute inset-0 rounded-full bg-royal-cobalt/30",
                      activePart.id === part.id ? "animate-pulse scale-150" : "hidden group-hover:block"
                    )} style={{ width: '32px', height: '32px', left: '-8px', top: '-8px' }} />
                    <div className={cn(
                      "size-3 md:size-5 rounded-full border-2 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)]",
                      activePart.id === part.id ? "bg-white border-royal-cobalt scale-110" : "bg-royal-cobalt border-white"
                    )} />
                    
                    <div className={cn(
                      "absolute left-6 md:left-10 px-2 md:px-3 py-1 rounded-lg glass text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-foreground transition-all duration-300 pointer-events-none whitespace-nowrap",
                      activePart.id === part.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0"
                    )}>
                      {part.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full justify-center py-2 md:py-8">
            <div className="min-h-auto lg:min-h-[600px] flex flex-col w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePart.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="glass p-5 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border-royal-cobalt/30 shadow-2xl flex-1 flex flex-col gap-5 md:gap-8 w-full bg-slate-900/40 backdrop-blur-2xl"
                >
                  <div className="relative h-28 sm:h-36 md:h-48 w-full rounded-[1.2rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-lg shrink-0">
                     <Image 
                       src={activePart.image}
                       alt={activePart.name}
                       fill
                       className="object-cover"
                       unoptimized
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                     <div className="absolute top-4 right-4 md:top-6 md:right-6 size-8 md:size-12 rounded-lg md:rounded-xl bg-royal-cobalt text-white flex items-center justify-center shadow-2xl">
                        <activePart.icon size={16} className="md:size-6" />
                     </div>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-4">
                    <div>
                      <div className="text-royal-cobalt font-bold uppercase tracking-widest text-[7px] md:text-[10px] mb-1 md:mb-2 flex items-center gap-2">
                         <div className="size-1 bg-royal-cobalt rounded-full animate-pulse" />
                         Clinical Selection
                      </div>
                      <h3 className="text-xl md:text-5xl font-bold tracking-tight text-foreground leading-tight break-words">
                        {activePart.name}
                      </h3>
                    </div>
                    
                    <p className="text-[13px] md:text-xl text-muted-foreground leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                      {activePart.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                     <div className="p-3 md:p-6 rounded-xl md:rounded-[1.5rem] bg-royal-cobalt/10 border border-royal-cobalt/20 text-center">
                        <p className="text-[7px] md:text-[9px] font-black uppercase text-royal-cobalt mb-0.5 md:mb-1 tracking-widest">Success Rate</p>
                        <p className="text-xs md:text-base font-bold text-foreground">99.2%</p>
                     </div>
                     <div className="p-3 md:p-6 rounded-xl md:rounded-[1.5rem] bg-electric-cyan/10 border border-electric-cyan/20 text-center">
                        <p className="text-[7px] md:text-[9px] font-black uppercase text-electric-cyan-700 mb-0.5 md:mb-1 tracking-widest">Team Size</p>
                        <p className="text-xs md:text-base font-bold text-foreground">24+ M.D.s</p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-2 md:mt-auto pt-4 md:pt-6 border-t border-white/5">
                    <button className="h-14 md:h-16 w-full rounded-xl md:rounded-2xl bg-royal-cobalt text-white font-bold text-sm md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:scale-[1.02] transition-all active:scale-[0.98] shadow-xl">
                      Book Specialization
                      <ChevronRight size={16} className="md:size-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
